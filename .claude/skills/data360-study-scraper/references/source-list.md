# Source List (canonical scrape targets)

Pre-vetted sources for the Data 360 Consultant exam, mapped to exam-section
tags and fetch method. Start every scrape from this file. Append new sources as
you find them so runs stay reproducible.

Legend — Fetch: `WF` = WebFetch works · `SPA` = JS shell, triangulate ·
`WS` = discover via WebSearch first.

## Tier 1 — Official exam guide & credential

| Source | Section(s) | Fetch | URL |
|--------|-----------|-------|-----|
| Data 360 Consultant Exam Guide (weightings, objectives) | ALL | SPA → triangulate | https://help.salesforce.com/s/articleView?id=005298940&type=1&language=en_US |
| Credential page (logistics, cost) | ALL | WF | https://trailhead.salesforce.com/en/credentials/data360consultant |

## Tier 1 — Official Trailhead prep trail (maps 1:1 to exam sections)

Trail hub (server-rendered, WF works):
https://trailhead.salesforce.com/content/learn/trails/prepare-for-your-salesforce-data-360-consultant-exam

| Trail section → Exam section | Modules to scrape | Fetch |
|------------------------------|-------------------|-------|
| Solution Positioning → **S1** | Explore the Data Landscape; Discover the Value; Credit Consumption Quick Look; Real-Time Use Cases; Data+AI+CRM Quick Look; AI+Data Project Planning; Ethical Data Use | SPA/WF per unit |
| Setup & Administration → **S2** | Data 360 Setup; Data Governance Strategies; Data Spaces Quick Look; Data Cloud One; Communication Capping Quick Look; Packaging & Data Kits; AgentExchange Quick Look | SPA/WF |
| Source Connection & Ingestion → **S3** | Connectors & Integrations; Data 360 with Zero Copy; Batch Data Transforms; Streaming Data Transforms; Fully Qualified Keys | SPA/WF |
| Harmonization & Unification → **S4** | Customer 360 Data Model; Model Data in Data 360 (doc); Data and Identity in Data 360 | SPA/WF |
| Enhancements, Sharing & Analysis → **S5** | Data 360 Insights; Data 360 Enrichments; Intro to Data 360 Reports; Tableau Next Quick Look; Machine Learning Predictions Quick Look; Predict with AI Models | SPA/WF |
| Activations & Utilization → **S6** | Segmentation in Data 360; Advertising with Data 360; Data 360-Driven Interactions in MC Engagement; Agentforce Sales Enhancements Quick Look; Service & Data 360 Quick Look; Data 360-Powered Agentforce | SPA/WF |
| Hands-on capstone → all (esp. S3-S6) | Explore Core Functionality; Unstructured Data; Data Graphs; Data 360 in Flows; Predictive Outputs from Model Builder | SPA/WF |

## Tier 2 — Official docs (deep technical reference)

| Topic | Section | Fetch | Discovery query |
|-------|---------|-------|-----------------|
| Data model: DMO / DLO / DSO, data spaces | S4 | WS→WF | "Salesforce Data 360 data model objects DMO DLO help" |
| Identity resolution: match & reconciliation rules | S4 | WS→WF | "Data 360 identity resolution match rules reconciliation" |
| Ingestion: data streams, connectors, ingestion API | S3 | WS→WF | "Data 360 data streams ingestion API connectors docs" |
| Calculated insights & data graphs | S5 | WS→WF | "Data 360 calculated insights data graphs docs" |
| Segmentation & activation targets | S6 | WS→WF | "Data 360 segmentation activation targets docs" |
| Data actions & Flows | S6 | WS→WF | "Data 360 data actions flow docs" |
| Consent, privacy, governance | S2 | WS→WF | "Data 360 data governance consent privacy docs" |

## Tier 3 — Third-party exam guides (mirror official weightings; use to triangulate)

| Source | Use | URL |
|--------|-----|-----|
| passcert (rebrand + weightings) | section % weightings | https://www.passcert.com/news_Salesforce-Rebrands-Data-Cloud-Consultant-to-Data-Con-101-Exam-Guide_2851.html |
| salesforcekeeda (Spring '26 syllabus, changes) | what's new | https://www.salesforcekeeda.com/2026/03/Salesforce-Certified-Data-360-Consultant.html |
| focusonforce (guide + sample quiz) | topic coverage | https://focusonforce.com/salesforce-certifications/salesforce-data-cloud-consultant-certification-guide/ |
| k2university (study guide) | topic coverage | https://k2university.com/salesforce/training/data-360-consultant-certification-study-guide/ |
| saasguru (credential guide) | topic coverage | https://www.saasguru.co/salesforce-data-cloud-consultant-credential/ |

## Tier 4 — Practice-topic signal ONLY (never a source of truth)

Extract *which topics get tested and how questions are phrased* — not answers.

| Source | URL |
|--------|-----|
| focusonforce sample questions | https://focusonforce.com/salesforce-data-cloud-consultant-certification-practice-quiz-and-sample-questions/ |
| trailblazeprep free questions | https://www.trailblazeprep.com/certifications/data-360-consultant |
| open-exam-prep (150+ Q) | https://open-exam-prep.com/practice/sf-data-cloud |

## Fetch log (append run results here)

<!-- date | source | result (direct/triangulated/failed) | note file -->
- 2026-07-03 | Trailhead prep trail hub | direct | seeded all 6 section maps
- 2026-07-03 | Official exam guide (help.salesforce.com SPA) | failed → triangulated | weightings from passcert + focusonforce mirrors
- 2026-07-03 | S1–S6 module + doc scrape (7 parallel agents) | mostly direct, some triangulated | training-material.md (~70 notes)
- 2026-07-03 | Practice-topic signal (focusonforce/trailblazeprep/open-exam-prep) | direct | appendix in training-material.md
- Known SPA-failed pages (triangulated instead): official exam guide; several Help articles (batch/streaming transforms, identity resolution ruleset). Re-verify in-org.
- 2026-07-03 | BROWSER RE-FETCH (Playwright + headless Chromium) of 8 SPA pages | 7 direct, 1 dead-URL | Solved the SPA problem — real browser runs JS. Upgraded exam guide, identity ruleset, CI, data graphs, segments, rapid publish, activation targets from triangulated → direct.
  - **KEY CORRECTION:** official exam guide says passing score is **70%** (mirrors wrongly said 62%). Also: 60 scored + up to 5 unscored Qs; aligns to Spring '26; courses SDC101/SDC301.
  - Rapid Publish targets corrected: MCE + Data Cloud + file storage (not MCE-only).
  - New facts added: waterfall/dynamic/real-time segment types; composite-key segmentation limit; CI DMO-name case sensitivity; reconciliation is object-level (field-overridable).
  - Still triangulated: Streaming Insights (sf.c360_a_streaming_insights.htm now 404s — page moved). Batch/streaming transforms Help articles not re-fetched this pass.
- **SPA re-fetch method (repeatable):** Playwright script in scratchpad (`fetch-spa.mjs`) — headless Chromium, waitUntil domcontentloaded + 6s render wait, extract article/main innerText. This is the reliable way to read help.salesforce.com SPA pages; plain WebFetch/curl cannot.
- 2026-07-03 | TOP-UP browser fetch (5 docs) to close thin spots | all 5 direct | Added/verified: Data Types (leading-zeros → Text, immutable DLO types, Number→Text mapping exception); Formula Fields (case-sensitive sourceField syntax, applies going-forward only); Data 360 in a Sandbox (metadata copied, connections inactive, segments default Don't Publish, DLO undeletable in sandbox); Streaming Insights (RECOVERED live page — Engagement DMO primary only, window function required, Data Cloud Architect, 131,021-char SQL); Streaming Data Transforms (de-triangulated: PK required, no subqueries, key-qualifier not allowed, up-to-30-min sync).
  - Streaming Insights old URL `sf.c360_a_streaming_insights.htm` is dead → live page is `sf.c360_a_create_a_streaming_insight_using_sql.htm`.
- Still triangulated after top-up: non-CRM connector refresh cadences; batch data transforms (Trailhead-sourced); CI/streaming credit multipliers (blog-sourced). Low exam risk; verify in-org.
- 2026-07-03 | SANITY-CHECK gap fill (3 S2 topics via browser) | all direct | Added: CRM Source Permissions (custom object needs **View All Records** on Data Cloud Salesforce Connector permission set or it won't appear in New Data Stream); Data Bundles / Starter Bundles (Salesforce-defined stream defs with DMO mapping pre-done; CRM one-at-a-time, Phone/URL/Email/Percent unsupported; MCE bundles at business-unit level, no formula fields); Data Explorer (validate/view DLO/DMO/CIO/data graphs, up to 10 columns, admin-enabled; Profile Explorer + Query Editor are siblings).
  - Triggered by online sanity-check search of practice sites / exam-experience posts — confirmed hardest topics (identity resolution/reconciliation, DMO mapping ~30% of Qs) are already our deepest coverage; only these 3 S2 specifics were thin.
- **Coverage status:** 74 concepts, all 22 official objectives, 14 first-hand direct-verified facts. Considered exam-complete.
