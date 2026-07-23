# Salesforce Data 360 Certification — Study System

A self-contained study system for the **Salesforce Certified Data 360
Consultant** exam (code **Data-Con-101**), built from official Trailhead,
Salesforce Help/Developer docs, and reputable guides.

**Exam:** 60 scored questions (+ up to 5 unscored) · 105 minutes · **70% to
pass** · $200 (retake $100) · scenario-based multiple choice · aligns to
Spring '26. Data 360 is the Dreamforce 2025 rebrand of "Data Cloud."

## 🎯 Start here

1. Open **[roadmap.md](roadmap.md)** — your trackable, dependency-ordered study
   plan. Work the 8 stages in order and check the boxes as you go.
2. For each stage, read the matching section of
   **[training-material.md](training-material.md)** and do the linked Trailhead
   modules.
3. Take the gating **[quiz](quizzes/)** before advancing to the next stage.

## 📁 What's in here

| File / folder | Purpose |
|---------------|---------|
| **[roadmap.md](roadmap.md)** | The study plan + progress tracker (start here) |
| **[training-material.md](training-material.md)** | Full exam-aligned knowledge base (~70 notes, by exam section) |
| **[quizzes/](quizzes/)** | One scenario-based quiz per exam section, with answer keys |
| [.claude/skills/data360-study-scraper/](.claude/skills/data360-study-scraper/) | The skill that scraped/built this material (re-runnable) |
| [notes/](notes/) | Optional per-topic scratch notes (topic-organized) |
| [exam-guide/](exam-guide/), [flashcards/](flashcards/), [hands-on-exercises/](hands-on-exercises/), [resources/](resources/) | Scaffold folders for extra material |

## 📊 The 6 exam sections (weightings)

| Section | Weight | Quiz |
|---------|--------|------|
| S1 Solution Positioning | 14% | [section-1](quizzes/section-1-positioning.md) |
| S2 Setup & Administration | 13% | [section-2](quizzes/section-2-admin.md) |
| S3 Data Source Connection & Ingestion | 18% | [section-3](quizzes/section-3-ingestion.md) |
| S4 Harmonization & Unification | 17% | [section-4](quizzes/section-4-harmonization.md) |
| S5 Enhancements, Sharing & Analysis | 18% | [section-5](quizzes/section-5-analysis.md) |
| S6 Data Activations & Utilization | 20% | [section-6](quizzes/section-6-activation.md) |

Heaviest first: **Activation (20%) + Ingestion (18%) + Analysis (18%)** = 56% of
the exam. The roadmap allocates study time proportionally.

## 🗂️ Topic-note folders (optional scratch space)

The `notes/` subfolders are organized by topic and map to exam sections (see the
[section-topic map](.claude/skills/data360-study-scraper/references/section-topic-map.md)):

- [Data Modeling](notes/data-modeling/) → S4 · [Identity Resolution](notes/identity-resolution/) → S4
- [Ingestion & Connectors](notes/ingestion-connectors/) → S3
- [Calculated Insights](notes/calculated-insights/) → S5
- [Segmentation & Activation](notes/segmentation-activation/) → S6 · [Data Actions & Flows](notes/data-actions-flows/) → S6
- [Security & Governance](notes/security-governance/) → S2

The authoritative content lives in [training-material.md](training-material.md);
use these folders for your own hands-on notes.

## 🔁 Refreshing the material

The content was built by the **`data360-study-scraper`** skill. To refresh it
(e.g. after a Salesforce release), invoke that skill and point it at
[its source list](.claude/skills/data360-study-scraper/references/source-list.md).
It re-scrapes into the same output-contract format so training material, roadmap,
and quizzes stay consistent. Mechanical re-scrapes run fine on Sonnet; keep Opus
for quiz authoring.

> **Note on source confidence:** Salesforce's exam guide and many Trailhead
> pages are JavaScript SPAs that can't be fetched directly, so some facts are
> marked `triangulated` (confirmed across ≥2 mirrors). Each training section has
> a **"Verify hands-on"** note flagging what to confirm in your 14-day Data 360
> practice org.

## ✅ Verify before exam day

A few facts are version-sensitive (e.g. Sept 2025 permission-set renames, June
2025 segmentation changes, Jan 2026 Activation-Triggered Flows). Re-check the
official [exam guide](https://help.salesforce.com/s/articleView?id=005298940&type=1&language=en_US)
and any `triangulated`/`needs-verification` facts against live docs before the exam.
