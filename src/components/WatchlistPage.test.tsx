import { render, screen } from "@testing-library/react";
import { describe, it, expect, beforeEach } from "vitest";
import { WatchlistPage } from "./WatchlistPage";
import { SaveButton } from "./SaveButton";
import { ui } from "../i18n";
import { getWatchlist, setWatchlist } from "../lib/watchlist";

describe("WatchlistPage", () => {
  beforeEach(() => { setWatchlist([]); });

  it("shows an empty state when nothing is saved", () => {
    render(<WatchlistPage language="en" copy={ui.en} onState={() => {}} />);
    expect(screen.getByText(ui.en.watchlistEmpty)).toBeDefined();
  });

  it("lists saved tools and shows the alerts section", () => {
    setWatchlist([{ kind: "tool", id: "chatgpt" }]);
    render(<WatchlistPage language="en" copy={ui.en} onState={() => {}} />);
    expect(screen.getByText("ChatGPT")).toBeDefined();
    expect(screen.getByText(ui.en.alertsForSaved)).toBeDefined();
  });

  it("renders a shared list from a decoded param", () => {
    render(<WatchlistPage language="en" copy={ui.en} shared={[{ kind: "component", id: "mcp" }]} onState={() => {}} />);
    expect(screen.getByText(/Model Context Protocol/i)).toBeDefined();
  });
});

describe("SaveButton", () => {
  beforeEach(() => { setWatchlist([]); });

  it("toggles saved state", () => {
    render(<SaveButton item={{ kind: "tool", id: "chatgpt" }} copy={ui.en} />);
    expect(screen.getByText(/Save/)).toBeDefined();
    expect(getWatchlist().length).toBe(0);
  });
});
