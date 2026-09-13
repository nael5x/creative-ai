import unittest
import xml.etree.ElementTree as ET

from scripts.collect_updates import atom, build_payload, collect_sources, error_summary, rss


SOURCE = "Test Source"
KIND = "Testing"
PURPOSE = "Exercise parser behavior."
WHY = "Prevent feed regressions."


class AtomParserTests(unittest.TestCase):
    def test_parses_complete_atom_entry(self):
        feed = b"""<?xml version='1.0' encoding='utf-8'?>
        <feed xmlns='http://www.w3.org/2005/Atom'>
          <entry>
            <id>tag:example.com,2026:release-1</id>
            <title>Release 1</title>
            <updated>2026-09-12T12:00:00Z</updated>
            <link href='https://example.com/releases/1' />
          </entry>
        </feed>"""

        rows = atom(feed, SOURCE, KIND, PURPOSE, WHY)

        self.assertEqual(len(rows), 1)
        self.assertEqual(rows[0]["id"], "tag:example.com,2026:release-1")
        self.assertEqual(rows[0]["title"], "Release 1")
        self.assertEqual(rows[0]["url"], "https://example.com/releases/1")
        self.assertEqual(rows[0]["publishedAt"], "2026-09-12T12:00:00Z")
        self.assertEqual(rows[0]["source"], SOURCE)

    def test_skips_incomplete_atom_entry(self):
        feed = b"""<feed xmlns='http://www.w3.org/2005/Atom'>
          <entry>
            <id>tag:example.com,2026:missing-link</id>
            <title>Missing link</title>
            <updated>2026-09-12T12:00:00Z</updated>
          </entry>
          <entry>
            <id>tag:example.com,2026:valid</id>
            <title>Valid release</title>
            <link href='https://example.com/releases/valid' />
          </entry>
        </feed>"""

        rows = atom(feed, SOURCE, KIND, PURPOSE, WHY)

        self.assertEqual([row["title"] for row in rows], ["Valid release"])

    def test_malformed_atom_feed_raises_parse_error(self):
        with self.assertRaises(ET.ParseError):
            atom(b"<feed><entry></feed>", SOURCE, KIND, PURPOSE, WHY)


class RssParserTests(unittest.TestCase):
    def test_parses_complete_rss_item(self):
        feed = b"""<?xml version='1.0' encoding='utf-8'?>
        <rss version='2.0'>
          <channel>
            <title>Example</title>
            <item>
              <guid>release-1</guid>
              <title>Release 1</title>
              <link>https://example.com/releases/1</link>
              <pubDate>Sat, 12 Sep 2026 12:00:00 GMT</pubDate>
            </item>
          </channel>
        </rss>"""

        rows = rss(feed, SOURCE, KIND, PURPOSE, WHY)

        self.assertEqual(len(rows), 1)
        self.assertEqual(rows[0]["id"], "release-1")
        self.assertEqual(rows[0]["title"], "Release 1")
        self.assertEqual(rows[0]["url"], "https://example.com/releases/1")
        self.assertEqual(rows[0]["publishedAt"], "Sat, 12 Sep 2026 12:00:00 GMT")
        self.assertEqual(rows[0]["source"], SOURCE)

    def test_skips_incomplete_rss_item(self):
        feed = b"""<rss version='2.0'>
          <channel>
            <item>
              <guid>missing-link</guid>
              <title>Missing link</title>
            </item>
            <item>
              <guid>valid</guid>
              <title>Valid release</title>
              <link>https://example.com/releases/valid</link>
            </item>
          </channel>
        </rss>"""

        rows = rss(feed, SOURCE, KIND, PURPOSE, WHY)

        self.assertEqual([row["title"] for row in rows], ["Valid release"])

    def test_malformed_rss_feed_raises_parse_error(self):
        with self.assertRaises(ET.ParseError):
            rss(b"<rss><channel><item></rss>", SOURCE, KIND, PURPOSE, WHY)


class SourceHealthTests(unittest.TestCase):
    def test_source_failure_preserves_successful_items_and_records_health(self):
        sources = [
            (
                "Healthy Source",
                "https://healthy.example/feed",
                KIND,
                PURPOSE,
                WHY,
            ),
            (
                "Broken Source",
                "https://broken.example/feed",
                KIND,
                PURPOSE,
                WHY,
            ),
        ]
        healthy_feed = b"""<feed xmlns='http://www.w3.org/2005/Atom'>
          <entry>
            <id>tag:example.com,2026:healthy</id>
            <title>Healthy release</title>
            <link href='https://example.com/releases/healthy' />
          </entry>
        </feed>"""

        def fake_get(url):
            if "broken" in url:
                raise TimeoutError("upstream\nrequest timed out")
            return healthy_feed

        items, health = collect_sources(sources=sources, fetcher=fake_get)
        payload = build_payload(items, health, sources=sources)

        self.assertEqual([item["title"] for item in payload["items"]], ["Healthy release"])
        self.assertEqual(payload["sourceHealth"]["total"], 2)
        self.assertEqual(payload["sourceHealth"]["ok"], 1)
        self.assertEqual(payload["sourceHealth"]["failed"], 1)
        self.assertEqual(health[0]["status"], "ok")
        self.assertEqual(health[0]["items"], 1)
        self.assertEqual(health[1]["status"], "error")
        self.assertEqual(health[1]["items"], 0)
        self.assertEqual(health[1]["source"], "Broken Source")
        self.assertIn("TimeoutError", health[1]["error"])
        self.assertNotIn("\n", health[1]["error"])

    def test_error_summary_is_concise_and_single_line(self):
        summary = error_summary(RuntimeError("first line\nsecond line"), limit=32)

        self.assertLessEqual(len(summary), 32)
        self.assertNotIn("\n", summary)
        self.assertTrue(summary.startswith("RuntimeError:"))


if __name__ == "__main__":
    unittest.main()
