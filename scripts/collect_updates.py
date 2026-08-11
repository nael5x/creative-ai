from __future__ import annotations
import json
from datetime import datetime, timezone
from pathlib import Path
from urllib.request import Request, urlopen
import xml.etree.ElementTree as ET

# Official project release feeds plus Product Hunt as a discovery-only source.
SOURCES = [
    ("Ollama", "https://github.com/ollama/ollama/releases.atom", "Local models", "Run AI models locally and manage supported cloud models.", "Useful for private local AI experimentation and open models."),
    ("LangChain", "https://github.com/langchain-ai/langchain/releases.atom", "AI development", "Build assistants, agents and RAG applications.", "Useful for developers building AI products."),
    ("Hugging Face", "https://github.com/huggingface/transformers/releases.atom", "Models & datasets", "Use and follow open AI model tooling.", "Useful for anyone working with open models."),
    ("ComfyUI", "https://github.com/Comfy-Org/ComfyUI/releases.atom", "Image workflows", "Create controlled node-based image-generation workflows.", "Useful for advanced Stable Diffusion users."),
    ("Open WebUI", "https://github.com/open-webui/open-webui/releases.atom", "Local AI UI", "Use local or remote AI models in a browser interface.", "Useful for people who use Ollama or self-hosted models."),
    ("Flowise", "https://github.com/FlowiseAI/Flowise/releases.atom", "Visual AI builder", "Build visual chatflows and LLM applications.", "Useful for prototyping RAG and chatbot workflows."),
    ("Langflow", "https://github.com/langflow-ai/langflow/releases.atom", "Visual AI builder", "Create AI flows visually and connect components.", "Useful for testing AI application ideas faster."),
    ("n8n", "https://github.com/n8n-io/n8n/releases.atom", "Automation", "Connect apps, APIs and AI in automated workflows.", "Useful for repeatable content and business automation."),
    ("LlamaIndex", "https://github.com/run-llama/llama_index/releases.atom", "AI development", "Connect data to LLM applications.", "Useful for search and Q&A over documents or databases."),
    ("Product Hunt", "https://www.producthunt.com/feed", "Discovery", "Discover newly launched products.", "Useful for spotting new tools; verify important claims on the official product page."),
]
NS = {"a": "http://www.w3.org/2005/Atom"}

def get(url: str) -> bytes:
    req = Request(url, headers={"User-Agent": "Creative-AI-Monitor/1.1"})
    with urlopen(req, timeout=20) as response:
        return response.read()

def text(node, path, default=""):
    item = node.find(path, NS)
    return item.text.strip() if item is not None and item.text else default

def record(source, kind, purpose, why, identifier, title, url, published):
    return {
        "id": identifier, "title": title, "url": url, "publishedAt": published,
        "source": source, "kind": kind, "purpose": purpose, "why": why,
    }

def atom(feed, source, kind, purpose, why):
    root = ET.fromstring(feed)
    rows = []
    for entry in root.findall("a:entry", NS)[:10]:
        link = entry.find("a:link", NS)
        rows.append(record(source, kind, purpose, why, text(entry, "a:id"), text(entry, "a:title"),
            link.attrib.get("href", "") if link is not None else "", text(entry, "a:updated") or text(entry, "a:published")))
    return rows

def rss(feed, source, kind, purpose, why):
    root = ET.fromstring(feed)
    rows = []
    for entry in root.findall("./channel/item")[:10]:
        rows.append(record(source, kind, purpose, why,
            (entry.findtext("guid") or entry.findtext("link") or entry.findtext("title") or "").strip(),
            (entry.findtext("title") or "").strip(), (entry.findtext("link") or "").strip(),
            (entry.findtext("pubDate") or "").strip()))
    return rows

def main():
    items = []
    for source, url, kind, purpose, why in SOURCES:
        try:
            raw = get(url)
            items.extend(atom(raw, source, kind, purpose, why) if b"<feed" in raw[:1000] else rss(raw, source, kind, purpose, why))
        except Exception as error:
            print(f"Skipped {source}: {error}")
    unique = {x["id"]: x for x in items if x["id"] and x["title"] and x["url"]}
    payload = {
        "updatedAt": datetime.now(timezone.utc).isoformat(),
        "items": list(unique.values()),
        "sources": [x[0] for x in SOURCES],
    }
    Path("data/updates.json").write_text(json.dumps(payload, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"Stored {len(unique)} verified signals from {len(SOURCES)} sources")

if __name__ == "__main__":
    main()
