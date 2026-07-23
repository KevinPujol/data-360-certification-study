# Data 360 Consultant — Study Roadmap

Your trackable path to the **Salesforce Certified Data 360 Consultant** exam
(Data-Con-101). Check boxes as you go. Each stage links to the relevant part of
[training-material.md](training-material.md), the official Trailhead modules, and
a gating [quiz](quizzes/) you take before moving on.

**Target:** **70% to pass** · 60 scored questions (+ up to 5 unscored) · 105 min · scenario-based.
**Exam date:** _____________  ·  **Started:** _____________

---

## How this roadmap is ordered

The exam lists sections S1–S6, but you can't learn segmentation before
ingestion. This roadmap follows a **dependency-aware order** — each stage builds
on the last — while **allocating study effort by exam weight**. Do the stages in
order; the capstone hands-on at the end reinforces the heavy sections.

**Effort allocation (proportional to exam weight):**

| Stage | Section | Weight | Suggested effort | Why this position |
|-------|---------|--------|-----------------|-------------------|
| 1 | S1 Positioning | 14% | ~1.5 hrs | Foundation vocabulary + value framing |
| 2 | S2 Setup & Admin | 13% | ~2.5 hrs | Provisioning/access before you touch data |
| 3 | S3 Ingestion | 18% | ~3 hrs | Get data in (DSO→DLO) — everything depends on it |
| 4 | S4 Harmonization | 17% | ~3 hrs | Model + unify (DLO→DMO, identity) — hardest section |
| 5 | S5 Analysis | 18% | ~3 hrs | Analyze unified data (CI, graphs, ML) |
| 6 | S6 Activation | 20% | ~3.5 hrs | Act on data (segment→activate) — biggest section |
| 7 | Capstone | — | ~6 hrs | Hands-on org: reinforce S3–S6 |
| 8 | Exam readiness | — | ~2 hrs | Full review + weak-area drilling |

Total ≈ 24–26 hrs of focused study (the official trail is ~17 hrs of content;
the rest is quizzes, review, and hands-on).

**Progress:** ☐☐☐☐☐☐☐☐  (0 / 8 stages)

---

## Stage 1 — Solution Positioning (14%)

**Goal:** Explain what Data 360 is, why it beats a plain CDP, how it fits
Data+AI+CRM, the credit model, and data ethics.
**Read:** [training-material.md § S1](training-material.md#s1--solution-positioning-14)

Trailhead ("Understand Data 360 Solution Positioning") → [training-material.md § S1](training-material.md#s1--solution-positioning-14) concept notes:
- [ ] Data 360: Explore the Data Landscape → *Core Definition and Positioning · The Three Stages · Zero-Copy Data Federation*
- [ ] Data 360: Discover the Value → *Business Use Cases Across Sales, Service, Marketing*
- [ ] Data 360 Credit Consumption: Quick Look → *Data 360 Credit Consumption Model*
- [ ] Real-Time Use Cases in Data 360 → *Real-Time Data Graphs and Real-Time Mechanisms*
- [ ] Data + AI + CRM: Quick Look → *Data + AI + CRM: How They Work Together*
- [ ] AI + Data: Project Planning → *(reinforces Data+AI+CRM; project-planning practice)*
- [ ] Ethical Data Use Best Practices: Quick Look → *Governance and Ethical Data Use Principles*

> Also in the S1 reading (from docs, no dedicated module): *Rebrand and Enterprise Data Foundation Positioning.*

Mastery checks (can you answer without notes?):
- [ ] The 4-verb arc (connect → unify → analyze → activate) and 3 stages
- [ ] Credit formula + which ingestion is **free** (Salesforce CRM connector)
- [ ] Generative vs predictive AI; what "grounding" means
- [ ] ABAC vs RBAC; masking vs encryption vs tagging

**Gate:** [ ] Pass [quizzes/section-1-positioning.md](quizzes/section-1-positioning.md) (≥8/10)

---

## Stage 2 — Setup & Administration (13%)

**Goal:** Provision Data 360, assign the right permission sets, use data spaces,
run the governance model, and package/deploy metadata.
**Read:** [training-material.md § S2](training-material.md#s2--setup--administration-13)

Trailhead ("Learn About Data 360 Setup and Administration") → [training-material.md § S2](training-material.md#s2--setup--administration-13) concept notes:
- [ ] Data 360 Setup → *Provisioning and Enabling Data 360 · Permission Sets and User Access*
- [ ] Data Governance Strategies → *Governance: The "Day Zero" Allow All Policy · Governance: Classification, Tagging, and Consent*
- [ ] Data Spaces in Data 360: Quick Look → *Data Spaces: Isolation and Sharing Rules*
- [ ] Data Cloud One → *Data Cloud One: Multi-Org Architecture*
- [ ] Communication Capping in Data 360: Quick Look → *Communication Capping*
- [ ] Packaging and Data Kits in Data 360 → *Packaging and Data Kits: Deployment Rules · Deploying Data Kits via CLI and Troubleshooting*
- [ ] Data 360 Solutions on AgentExchange: Quick Look → *(ecosystem/AgentExchange context)*

> Also in the S2 reading (from docs, no dedicated module): *CRM Source Permissions (View All Records) · Data Bundles / Starter Bundles · Data Explorer · Troubleshooting Data Ingestion / CRM Connections · Data 360 in a Sandbox.*

Mastery checks:
- [ ] New permission set names (Architect / Activation Manager / Activation
      Specialist) + what **Data Cloud User** can't do
- [ ] What's isolated vs shared across **data spaces**; spaces ≠ residency
- [ ] The **"Allow All"** day-zero trap (why granular Allow policies do nothing)
- [ ] Data kit rules: no standalone components; no mixed metadata (Winter '25)
- [ ] Data Cloud One consolidation (pick one home, deprovision others)

**Gate:** [ ] Pass [quizzes/section-2-admin.md](quizzes/section-2-admin.md) (≥8/10)

---

## Stage 3 — Data Source Connection & Ingestion (18%)

**Goal:** Connect sources and get data in — connectors, streams, the
DSO→DLO→DMO pipeline, Zero Copy, transforms, and fully qualified keys.
**Read:** [training-material.md § S3](training-material.md#s3--data-source-connection--ingestion-18)

Trailhead ("Dive Deep into Data Source Connection and Ingestion") → [training-material.md § S3](training-material.md#s3--data-source-connection--ingestion-18) concept notes:
- [ ] Data 360 Connectors and Integrations → *Connector Types and Categories*
- [ ] Data 360 with Zero Copy → *Zero Copy — Query vs File Federation · Zero Copy — Setup, Sources, When to Use vs Ingestion*
- [ ] Batch Data Transforms in Data 360: Quick Look → *Batch Data Transforms*
- [ ] Streaming Data Transforms in Data 360: Quick Look → *Streaming Data Transforms*
- [ ] Fully Qualified Keys in Data 360: Quick Look → *Fully Qualified Keys (FQKs)*

> Also in the S3 reading (from docs, no dedicated module): *Data Streams & the DSO→DLO→DMO Pipeline · Ingestion API Setup · Ingestion API Streaming vs Bulk Limits · Batch vs Streaming Refresh Cadence · Amazon S3 Connector · Data Types & Field Types (leading-zeros trap) · Formula Fields at Ingestion.*

Mastery checks:
- [ ] The **DSO → DLO → DMO** pipeline and 3 stream categories (Profile/
      Engagement/Other) + why category is immutable
- [ ] Batch vs streaming ingestion + CRM connector cadence (~10 min / bi-weekly)
- [ ] **Query vs File federation** (compute location, cost, caching)
- [ ] Zero Copy vs ingestion decision boundary
- [ ] What FQKs solve (cross-source key collisions into one DMO)
- [ ] Batch vs streaming **transforms** (joins vs single-object)

**Gate:** [ ] Pass [quizzes/section-3-ingestion.md](quizzes/section-3-ingestion.md) (≥8/10)

---

## Stage 4 — Harmonization & Unification (17%) ⚠️ hardest

**Goal:** Model data into the Customer 360 Data Model and unify identities —
mapping, match rules, reconciliation rules, unified profiles.
**Read:** [training-material.md § S4](training-material.md#s4--harmonization--unification-17)

Trailhead ("Review Harmonization and Unification") → [training-material.md § S4](training-material.md#s4--harmonization--unification-17) concept notes:
- [ ] Customer 360 Data Model for Data 360 → *Customer 360 Data Model Overview · Data Model Objects (DMOs) Structure & Standard Set*
- [ ] Model Data in Data 360 (reference doc) → *Data Modeling Best Practices for Harmonization*
- [ ] Data and Identity in Data 360 → *Mapping DLOs to DMOs · Match Rules · Reconciliation Rules · Unified Individual/Link & Identity Graph · Creating Unified Individual Records*

> Also in the S4 reading (docs/3P): *Identity Resolution Rulesets Overview · Deterministic vs Probabilistic Matching · Fully Qualified Keys in Harmonization.*

Mastery checks (this is where the exam separates people):
- [ ] The **5 required DMOs** for identity resolution
- [ ] Harmonization = **DLO→DMO mapping**; which field must map for IR
- [ ] **Match rule vs reconciliation rule** (same-person vs which-value-wins)
- [ ] 3 match methods (Exact/Fuzzy=first-name-only/Normalized) — **all
      deterministic**, none probabilistic
- [ ] 3 reconciliation types (Most Recent / Most Frequent / Source Priority)
- [ ] **Unified Individual vs Unified Link Individual**; unified ≠ golden record
- [ ] Ruleset limits (2 per data model per space; 10 rules; 10 criteria)

**Gate:** [ ] Pass [quizzes/section-4-harmonization.md](quizzes/section-4-harmonization.md) (≥8/10)

---

## Stage 5 — Enhancements, Sharing & Analysis (18%)

**Goal:** Analyze unified data — calculated insights, streaming insights, data
graphs, enrichments, reports, Tableau Next, ML predictions.
**Read:** [training-material.md § S5](training-material.md#s5--enhancements-sharing--analysis-18)

Trailhead ("Study Up on Data Enhancements, Sharing, and Analysis") → [training-material.md § S5](training-material.md#s5--enhancements-sharing--analysis-18) concept notes:
- [ ] Data 360 Insights → *Calculated Insights Core Mechanics · CI vs Streaming Insights · Streaming Insights*
- [ ] Data 360 Enrichments → *Data 360 Enrichments — Types and Mechanics*
- [ ] Introduction to Data 360 Reports → *Reports on Calculated Insights — Constraints*
- [ ] Tableau Next: Quick Look → *Tableau Next and Data 360 Integration*
- [ ] Machine Learning Predictions: Quick Look → *Machine Learning Predictions — Model Builder*
- [ ] Predict with AI Models → *Machine Learning Predictions — Model Builder (hands-on)*

> Also in the S5 reading (docs): *Data Graphs — Structure & Purpose · Data Graph vs Calculated Insight · Data Sharing — Zero Copy Federation & Sharing.* (Data Graphs also has a hands-on project in Stage 7.)

Mastery checks:
- [ ] CI requires a **measure AND a dimension**; CI = batch
- [ ] **CI vs Streaming Insights** (SI can't join Unified Profiles) vs **Data
      Graph** (nested JSON, fast retrieval)
- [ ] Enrichments: Copy Fields / Related Lists **need IR**; Direct-DMO Related
      Lists **don't**
- [ ] Model Builder: 2 model types (binary classification / regression), output
      to a **new DMO**, BYOM alternative
- [ ] CI report constraints (summary only, no detail rows)

**Gate:** [ ] Pass [quizzes/section-5-analysis.md](quizzes/section-5-analysis.md) (≥8/10)

---

## Stage 6 — Data Activations & Utilization (20%) ⭐ biggest

**Goal:** Act on data — segmentation, activation targets, data actions, Flows,
Agentforce grounding, Sales/Service utilization.
**Read:** [training-material.md § S6](training-material.md#s6--data-activations--utilization-20)

Trailhead ("Explore Data Activations and Utilization") → [training-material.md § S6](training-material.md#s6--data-activations--utilization-20) concept notes:
- [ ] Segmentation in Data 360 → *Building & Filtering Segments · Segment Types · Containers/Nested/Excluded · Publish Schedules · Refresh vs Publish · Segment Membership DMO*
- [ ] Advertising with Data 360 → *Advertising Audiences*
- [ ] Data 360-Driven Interactions in Marketing Cloud Engagement → *Data 360-Driven Interactions in MCE*
- [ ] Agentforce Sales Enhancements with Data 360: Quick Look → *Data 360 in Salesforce Sales and Service Clouds*
- [ ] Service and Data 360: Quick Look → *Data 360 in Salesforce Sales and Service Clouds*
- [ ] Data 360-Powered Agentforce → *Agentforce Grounding with Data 360*

> Also in the S6 reading (docs/3P): *Activation & Activation Targets · Data Actions vs Activations · Data Actions & Flow Integration · Contact Points & Activation Mapping.* (Data 360 in Flows has a hands-on project in Stage 7.)

Mastery checks:
- [ ] Choosing **"Segment On"** (Unified Individual when IR is in play)
- [ ] **Standard vs Rapid** publish (12–24h/2yr vs 1–4h/7d/20-cap; rapid can target MCE, Data Cloud, or file storage)
- [ ] **Definition vs Membership** nested-segment mode (perf)
- [ ] Activation target types; **Activation-Triggered Flows**
- [ ] **Data action vs activation** (real-time event vs bulk audience)
- [ ] Contact-point requirements per target (MCE vs external/ad)
- [ ] Agentforce RAG chain: **Search Index → Retriever → Prompt Template**

**Gate:** [ ] Pass [quizzes/section-6-activation.md](quizzes/section-6-activation.md) (≥8/10)

---

## Stage 7 — Hands-On Capstone

**Goal:** Cement S3–S6 by doing it in a real org. Requires the **14-day Data 360
org** you set up in the trail's "Set Up and Administer" section.
**Note:** Set up the org when you START Stage 2 so it's live for stages 3–7.

Trailhead ("Get Hands On with Data 360"):
- [ ] Explore Data 360 Core Functionality
- [ ] Unstructured Data in Data 360
- [ ] Data Graphs in Data 360
- [ ] Data 360 in Flows  ← highest-point module; heavily tested
- [ ] Predictive Outputs from Model Builder

Do-it-yourself checks:
- [ ] Ingest a source, map DLO→DMO, run an identity resolution ruleset
- [ ] Build a calculated insight and a data graph
- [ ] Build a segment and configure an activation
- [ ] Trigger a Flow from a data action

---

## Stage 8 — Exam Readiness

- [ ] Re-take any section quiz you scored < 9/10
- [ ] Review the **Commonly Confused Pairs** list in
      [training-material.md](training-material.md#appendix--practice-topic-signal-what-the-exam-actually-tests)
- [ ] Re-read the **Verify hands-on** flags in each training section and confirm
      any `triangulated` facts in your org
- [ ] Take an external full-length practice test (focusonforce / trailblazeprep)
- [ ] Re-read the official
      [exam guide](https://help.salesforce.com/s/articleView?id=005298940&type=1&language=en_US)
      one more time
- [ ] Book the exam ✅

---

## Weak-area log

Track topics you keep missing so Stage 8 review is targeted.

| Date | Topic missed | Section | Fixed? |
|------|--------------|---------|--------|
|      |              |         |        |
