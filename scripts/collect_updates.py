from __future__ import annotations
import json
from datetime import datetime, timezone
from email.utils import parsedate_to_datetime
from pathlib import Path
from urllib.request import Request, urlopen
import xml.etree.ElementTree as ET

SOURCES = [
    ("Ollama", "https://github.com/ollama/ollama/releases.atom", "Open source"),
    ("LangChain", "https://github.com/langchain-ai/langchain/releases.atom", "Open source"),
    ("Hugging Face", "https://github.com/huggingface/transformers/releases.atom", "Open source"),
    ("Product Hunt", "https://www.producthunt.com/feed", "Discovery"),
]
NS = {"a": "http://www.w3.org/2005/Atom"}

def get(url: str) -> bytes:
    req = Request(url, headers={"User-Agent": "Creative-AI-Monitor/1.0"})
    with urlopen(req, timeout=20) as response:
        return response.read()

def text(node, path, default=""):
    item = node.find(path, NS)
    return item.text.strip() if item is not None and item.text else default

def atom(feed, source, kind):
    root = ET.fromstring(feed)
    rows = []
    for entry in root.findall("a:entry", NS)[:12]:
        link = entry.find("a:link", NS)
        rows.append({
            "id": text(entry, "a:id"), "title": text(entry, "a:title"),
            "url": link.attrib.get("href", "") if link is not None else "",
            "publishedAt": text(entry, "a:updated") or text(entry, "a:published"),
            "source": source, "kind": kind,
        })
    return rows

def rss(feed, source, kind):
    root = ET.fromstring(feed)
    rows = []
    for entry in root.findall("./channel/item")[:12]:
        rows.append({
            "id": (entry.findtext("guid") or entry.findtext("link") or entry.findtext("title") or "").strip(),
            "title": (entry.findtext("title") or "").strip(), "url": (entry.findtext("link") or "").strip(),
            "publishedAt": (entry.findtext("pubDate") or "").strip(), "source": source, "kind": kind,
        })
    return rows

def main():
    items = []
    for source, url, kind in SOURCES:
        try:
            raw = get(url)
            items.extend(atom(raw, source, kind) if b"<feed" in raw[:1000] else rss(raw, source, kind))
        except Exception as error:
            print(f"Skipped {source}: {error}")
    unique = {x["id"]: x for x in items if x["id"] and x["title"] and x["url"]}
    payload = {"updatedAt": datetime.now(timezone.utc).isoformat(), "items": list(unique.values()), "sources": [x[0] for x in SOURCES]}
    Path("data/updates.json").write_text(json.dumps(payload, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"Stored {len(unique)} trusted signals")

if __name__ == "__main__":
    main()
