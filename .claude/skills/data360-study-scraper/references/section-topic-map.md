# Section ↔ Topic-folder Map

The repo's existing `notes/<topic>/` folders are organized by topic; the exam is
organized by 6 weighted sections. This map lets the scraper mirror notes into
the right topic folder while keeping the exam-section tag as the source of
truth.

| Exam section (tag) | Weight | Repo topic folder(s) |
|--------------------|--------|----------------------|
| S1-positioning     | 14% | (no folder — positioning/value/ethics; keep in training-material.md) |
| S2-admin           | 13% | `notes/security-governance/` (setup, data spaces, governance, packaging) |
| S3-ingestion       | 18% | `notes/ingestion-connectors/` |
| S4-harmonization   | 17% | `notes/data-modeling/`, `notes/identity-resolution/` |
| S5-analysis        | 18% | `notes/calculated-insights/` (insights, enrichments, reports, ML/AI) |
| S6-activation      | 20% | `notes/segmentation-activation/`, `notes/data-actions-flows/` |

Notes:
- `training-material.md` (ordered by exam section) is the primary aggregate.
  Per-topic folder mirroring is optional/secondary.
- S1 has no dedicated topic folder — it's cross-cutting positioning content;
  house it in training-material.md under the S1 heading.
- When a concept spans folders (e.g. identity resolution touches both data
  model and identity), file the note by its primary section tag and cross-link.
