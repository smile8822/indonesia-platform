const base = "https://evisa.imigrasi.go.id";
const url = base + "/web/visa-selection";
const response = await fetch(url, {
  headers: {
    "user-agent":
      "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/152.0.0.0 Safari/537.36",
    accept: "text/html,*/*",
  },
});
const html = await response.text();
const patterns = [
  "$('#buttonApply')",
  "$(\"#buttonApply\")",
  "buttonApply').",
  "buttonApply\")."
];
for (const pattern of patterns) {
  let from = 0;
  while (true) {
    const index = html.indexOf(pattern, from);
    if (index < 0) break;
    const context = html
      .slice(Math.max(0, index - 2000), Math.min(html.length, index + 9000))
      .replace(/\s+/g, " ");
    console.log("MISO_EVISA_APPLY_HANDLER=" + context);
    from = index + pattern.length;
  }
}
