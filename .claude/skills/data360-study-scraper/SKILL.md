---
name: data360-study-scraper
description: >-
  Scrape and structure Salesforce Data 360 (Data Cloud) Consultant exam study
  material from Trailhead, Salesforce Help/Developer docs, and practice-test
  sites into exam-section-tagged markdown notes. Use when building or refreshing
  the training material, roadmap, or quizzes for the Data 360 Consultant
  certification, or when the user asks to fetch/scrape a Data 360 learning
  resource. Produces structured notes with a fixed output contract, each fact
  traceable to its source URL and tagged to one of the 6 official exam sections.
---

# Data 360 Study Scraper

Purpose-built web scraper for assembling **Salesforce Certified Data 360
Consultant** (exam code Data-Con-101) study material. Built on the general
web-scraping techniques from Alex's Web Scraper skill (WebFetch / WebSearch /
curl / Python), but specialized in three ways:

1. **Fixed output contract** — every source becomes a structured note (see
   `references/output-contract.md`), not free-form text.
2. **Exam-section tagging** — every note is tagged to one of the 6 official
   exam sections so content auto-slots into the roadmap.
3. **SPA-aware fetch chain** — the official exam guide and Trailhead module
   pages are JavaScript SPAs that WebFetch can't render; this skill documents
   the fallback strategy that actually works.

This skill does **not** scrape code repositories (dropped from the general
version — not needed for exam study).

## The 6 official exam sections (the tagging taxonomy)

Every scraped note MUST be tagged to exactly one section. Weightings anchor how
much material each section deserves.

| Tag | Section | Weight |
|-----|---------|--------|
| `S1-positioning`   | Solution Positioning                        | 14% |
| `S2-admin`         | Setup and Administration                    | 13% |
| `S3-ingestion`     | Data Source Connection and Ingestion        | 18% |
| `S4-harmonization` | Harmonization and Unification               | 17% |
| `S5-analysis`      | Data Enhancements, Sharing, and Analysis    | 18% |
| `S6-activation`    | Data Activations and Utilization            | 20% |

Exam logistics to keep in mind while scraping: 60 scored questions (+ up to 5
unscored) · 105 min · 70% to pass · aligns to Spring '26. A note is
"exam-relevant" if it could plausibly source a question.

## Source list (the canonical scrape targets)

The authoritative, pre-vetted source list lives in
`references/source-list.md`. It maps every source URL to its exam-section tag(s)
and fetch method. Always start from that file; add new sources there as you
find them so the scrape stays reproducible.

Priority order of source authority (when facts conflict, higher wins):
1. Official Trailhead trail + modules (`trailhead.salesforce.com`)
2. Official Salesforce Help + Developer docs (`help.salesforce.com`,
   `developer.salesforce.com`)
3. Reputable third-party guides that mirror the official exam guide
   (focusonforce, saasguru, k2university, salesforcekeeda)
4. Practice-test sites — use ONLY to discover *what topics are tested*, never
   as a source of truth for facts (dumps are often wrong).

## Fetch strategy (the SPA problem and how to beat it)

`WebFetch` renders most pages to clean markdown, but **fails on JavaScript
SPAs** — the official exam guide (`help.salesforce.com/s/articleView`) and many
Trailhead module unit pages return a broken CSS-error shell.

Fetch chain — try in order, stop at first success:

1. **WebFetch the URL directly.** Works for: Trailhead *trail* pages (server
   rendered), most doc articles, all third-party sites. This is the default.
2. **If WebFetch returns a redirect to another host**, re-call WebFetch with
   the redirect URL (it returns cross-host redirects instead of following).
3. **If WebFetch returns a CSS-error / "Sorry to interrupt" shell** (the SPA
   failure), do NOT retry it. Instead:
   - Triangulate the same facts from a rendered mirror (third-party guide) AND
     the server-rendered Trailhead trail page, and mark the note
     `source-confidence: triangulated`.
   - For exam-guide weightings specifically, the passcert + focusonforce
     mirrors reproduce the official section percentages.
4. **curl fallback** for raw/static content (rarely needed for these sources):
   ```bash
   curl -sL -A "Mozilla/5.0" "URL"
   ```
   Note: curl on Salesforce SPA pages returns the same JS shell — it does not
   solve the SPA problem, it only helps for static/raw files.

Always `WebSearch` first when you don't have a specific URL (see the general
techniques in `references/scraping-techniques.md`).

## Workflow

When invoked to build or refresh study material:

1. **Load the source list** (`references/source-list.md`). If refreshing,
   note which sources already have notes and skip unless `--refresh-all`.
2. **Fetch each source** using the fetch chain above. Rate-limit: pause
   between fetches when pulling many pages in a row.
3. **Extract to the output contract** (`references/output-contract.md`).
   One markdown note per source (or per module for multi-module trail
   sections). Tag every note with its exam section(s).
4. **Write notes** into the study repo. Default layout:
   - `training-material.md` — the aggregated knowledge base, ordered by exam
     section. This is the primary deliverable.
   - Optionally mirror per-topic notes into the repo's existing
     `notes/<topic>/` folders (the repo's topic folders map to sections — see
     `references/section-topic-map.md`).
5. **Record provenance.** Every fact keeps its source URL. Append newly
   discovered sources back into `references/source-list.md`.
6. **Report gaps.** After scraping, list any exam objective with thin or
   missing coverage so the roadmap can flag it. Never silently skip a source —
   if a fetch fails after the full chain, log it as a gap.

## Output contract (summary — full spec in references/)

Each note is a markdown section:

```markdown
### <Concept / Module title>
- **Exam section:** S3-ingestion (18%)
- **Source:** <URL>  · **Type:** Trailhead module | Doc | Guide
- **Source confidence:** direct | triangulated
- **Key facts:**
  - <technical fact with real depth — objects, limits, rules, not fluff>
- **Why it matters for the exam:** <1 line — what a question would test>
- **Related:** <links to sibling concepts>
```

Depth bar: a note must contain facts specific enough to answer a
scenario-based multiple-choice question — object names (DMO, DLO, DSO), rule
types (deterministic vs. probabilistic matching), concrete limits, and the
"when would you use X vs. Y" distinctions. Summaries that only restate the
module title fail the bar.

## Guardrails (inherited from the general scraper)

- Respect `robots.txt`; rate-limit multi-page pulls.
- Never store credentials/tokens to files.
- For SPA pages, warn and triangulate rather than presenting a broken fetch.
- Save intermediate results so a failed run doesn't re-fetch everything.
- Practice-dump sites: extract *topic coverage signal* only, not answers.
