(function () {
  "use strict";
  function escapeHtml(value) {
    return String(value == null ? "" : value).replace(/[&<>"']/g, function (char) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[char];
    });
  }
  function initials(name) {
    var parts = String(name || "AI").trim().split(/\s+/).filter(Boolean).slice(0, 2);
    return parts.map(function (part) { return Array.from(part)[0] || ""; }).join("").toUpperCase() || "AI";
  }
  function sourcesFor(officialUrl) {
    try {
      var parsed = new URL(officialUrl, window.location.href);
      if (parsed.protocol !== "https:" && parsed.protocol !== "http:") return [];
      var origin = parsed.origin;
      return Array.from(new Set([
        origin + "/favicon.ico", origin + "/favicon.svg",
        origin + "/apple-touch-icon.png", origin + "/apple-touch-icon-precomposed.png",
      ]));
    } catch (error) { return []; }
  }
  function markup(name, officialUrl, variant) {
    var fallback = initials(name), large = variant === "large";
    var wrapperClass = "tool-logo" + (large ? " tool-logo-large" : "");
    var candidates = sourcesFor(officialUrl);
    if (!candidates.length) return '<span class="' + wrapperClass + '" aria-hidden="true"><span class="tool-logo-fallback">' + escapeHtml(fallback) + "</span></span>";
    var first = candidates.shift(), size = large ? 56 : 32;
    return '<span class="' + wrapperClass + '" aria-hidden="true"><img class="tool-logo-image" src="' + escapeHtml(first) +
      '" data-icon-candidates="' + escapeHtml(JSON.stringify(candidates)) +
      '" alt="" loading="lazy" decoding="async" referrerpolicy="no-referrer" width="' + size +
      '" height="' + size + '" onerror="CreativeAIIcons.next(this)"><span class="tool-logo-fallback" hidden>' +
      escapeHtml(fallback) + "</span></span>";
  }
  function next(img) {
    var candidates = [];
    try { candidates = JSON.parse(img.dataset.iconCandidates || "[]"); } catch (error) { candidates = []; }
    var nextSource = candidates.shift();
    img.dataset.iconCandidates = JSON.stringify(candidates);
    if (nextSource) { img.src = nextSource; return; }
    img.hidden = true;
    if (img.nextElementSibling) img.nextElementSibling.hidden = false;
    if (img.parentElement) img.parentElement.classList.add("tool-logo-failed");
  }
  window.CreativeAIIcons = { markup: markup, next: next, sourcesFor: sourcesFor };
})();