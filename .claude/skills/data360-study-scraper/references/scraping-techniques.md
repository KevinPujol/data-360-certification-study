# Scraping Techniques

Distilled from Alex's general Web Scraper skill, keeping only what this study
scraper needs (repo-scraping techniques removed).

## Tools

- **WebFetch** (default) — fetches a URL, returns clean markdown. Best for
  reads. Fails on JS SPAs (returns a CSS-error shell) and on
  authenticated/private URLs.
- **WebSearch** — discovery before fetching. Use when you don't have a URL.
  US-only results; use `allowed_domains` to constrain to official sources.
- **curl (Bash)** — only for static/raw files or custom headers. Does NOT
  defeat Salesforce SPAs.
- **Python (Bash)** — for parsing structured data (tables, JSON) out of
  fetched HTML when needed.

## Search then fetch

1. `WebSearch` (optionally `allowed_domains: ["trailhead.salesforce.com",
   "help.salesforce.com", "developer.salesforce.com"]`) to find the URL.
2. `WebFetch` the top official result.
3. Extract to the output contract.

## Handling redirects

WebFetch returns cross-host redirects instead of following them. When you get a
`REDIRECT DETECTED`, re-call WebFetch with the redirect URL.

## Handling SPA failures (the key one for Salesforce)

Symptom: fetch returns "CSS Error" / "Sorry to interrupt" / near-empty shell.
Do not retry the same URL. Instead triangulate the fact across a rendered
third-party mirror + the server-rendered Trailhead trail page, and mark the
note `source-confidence: triangulated`.

## Extracting a table with Python (when a fetch returns raw HTML)

```bash
curl -sL -A "Mozilla/5.0" "URL" | python3 -c "
import re, sys
html = sys.stdin.read()
for row in re.findall(r'<tr[^>]*>(.*?)</tr>', html, re.DOTALL):
    cells = [re.sub(r'<[^>]+>', '', c).strip()
             for c in re.findall(r'<t[dh][^>]*>(.*?)</t[dh]>', row, re.DOTALL)]
    if any(cells): print(' | '.join(cells))
"
```

## Etiquette

- Respect robots.txt. Add a pause between many sequential fetches.
- Cache/save intermediate results so a failure doesn't force a full re-fetch.
- Never write credentials or tokens to files.
