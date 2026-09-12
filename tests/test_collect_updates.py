import unittest
import xml.etree.ElementTree as ET

from scripts.collect_updates import atom, rss


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


if __name__ == "__main__":
    unittest.main()
