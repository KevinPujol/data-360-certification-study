# Output Contract

The single most important part of this skill (Alex's original left output
undefined). Every scraped source produces notes in **exactly** this shape so
that training material, roadmap, and quizzes can be generated mechanically.

## Note format

```markdown
### <Concept or Module title>
- **Exam section:** <tag> (<weight>%)        e.g. S3-ingestion (18%)
- **Source:** <full URL>
- **Type:** Trailhead module | Trailhead trail | Salesforce Doc | Exam Guide | Third-party guide | Practice-topic signal
- **Source confidence:** direct | triangulated | needs-verification
- **Key facts:**
  - <fact 1 — technically specific>
  - <fact 2>
- **Why it matters for the exam:** <one line: what a question would test>
- **Related:** [[other-concept]], <url>
```

## Field rules

- **Exam section** — exactly one primary tag from the 6-section taxonomy in
  SKILL.md. If a concept genuinely spans two sections, pick the primary and add
  the secondary in `Related`.
- **Source confidence:**
  - `direct` — fetched and rendered cleanly from the source.
  - `triangulated` — SPA/failed fetch; facts confirmed across ≥2 mirrors.
  - `needs-verification` — single unofficial source, or a claim that smells
    off. Flag these; they become roadmap "verify" tasks.
- **Key facts** — must pass the depth bar (below).
- **Why it matters** — frames the note for quiz generation. Phrase as the
  distinction being tested, e.g. "when to use a DLO vs. mapping straight to a
  DMO."

## Depth bar (what makes a fact exam-grade)

A fact is exam-grade if it includes at least one of:

- **Concrete object/entity names:** DLO, DMO, DSO, data stream, data space,
  unified individual, identity graph, calculated insight, data graph,
  data action, activation target.
- **A rule or mechanism:** deterministic vs. probabilistic match rules,
  reconciliation rules, refresh/ingestion cadence (batch vs. streaming),
  mapping to the Customer 360 data model.
- **A concrete limit or number:** where one is defined and exam-relevant.
- **A decision boundary:** "use X when… vs. Y when…" — the single most common
  exam question shape.

Reject facts that only restate a title ("Data 360 helps unify data") — that
cannot source a question.

## Aggregation into training-material.md

Notes are grouped under level-2 headings by exam section, in exam order
(S1→S6), then a "Hands-on / capstone" appendix. Within a section, order notes
foundational → advanced. Keep the per-note format intact so quizzes can be
generated per section.
