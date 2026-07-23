# Section 6 Quiz — Data Activations & Utilization (20%)
> 13 questions. Pass mark: 11/13. Scenario-based. Answers at the bottom.

---

**Q1.** A retail marketer is building a new segment that combines web browsing data, in-store purchase data, and loyalty data from three separate source systems. They want the segment to accurately represent one real person across all three sources and avoid counting the same customer multiple times. When choosing the **Segment On** object, which choice should they make?

- A. Individual — it is the simplest object and works without any additional setup
- B. Unified Individual — it relies on identity resolution to consolidate the three sources into one profile
- C. Unified Household — because loyalty data is shared across a household
- D. An Engagement-category DMO — because the segment includes web browsing engagement data

---

**Q2.** An analyst wants to filter a segment (Segment On = Unified Individual) using a Calculated Insight that scores customer lifetime value. The CI is not appearing as an available filter. What two conditions must the CI meet to be usable as a filter on this segment? **(Choose 2)**

- A. The CI must reference the Segment On DMO (Unified Individual)
- B. The CI must be published to a rapid schedule
- C. The CI must include the Segment On DMO's Primary Key as a Dimension
- D. The CI must have an Activation Target already configured

---

**Q3.** A segment builder needs the following logic: include individuals who are (Gold tier **OR** Platinum tier) **AND** located in California. Each of these three conditions sits on a different attribute. How are these conditions represented on the segment canvas?

- A. As a single Container holding all three attributes
- B. As three Containers, combined with AND/OR operators and grouping/nesting
- C. As three separate segments that must be published individually
- D. As one Direct Attribute filter and two Related Attribute filters that cannot be combined

---

**Q4.** A marketing team wants a "high-value customers" segment to automatically exclude anyone who has already opted out of email, without creating a second standalone segment for the opt-outs. What is the correct approach on the segment canvas?

- A. Build the opt-out logic on the INCLUDE tab with an inverted operator
- B. Use the EXCLUDE tab to add criteria that remove matching individuals from the audience
- C. Configure a Data Action to suppress the opt-outs at activation time
- D. Set the publish schedule to Rapid so opt-outs are filtered within the hour

---

**Q5.** A consultant nests an existing "Active Buyers" segment inside a new campaign segment as a filter. Publishing speed matters more than having the very latest live recalculation of the nested segment's logic. Which nested reference mode should they choose, and why?

- A. Definition mode — it reuses the last published membership and is faster
- B. Membership mode — it re-runs the nested segment's logic live for accuracy
- C. Membership mode — it reuses the last published membership and is faster
- D. Definition mode — it re-runs the nested segment's logic live and is faster

---

**Q6.** A brand needs a segment that reacts quickly to very recent website engagement (within the last few days) and delivers to a Marketing Cloud Engagement business unit for a flash sale. Which publish schedule fits, and what are its constraints? **(Choose 2)**

- A. Rapid publish — runs on a daily schedule at a 1-hour or 4-hour interval with a configurable lookback window
- B. Standard publish — runs every 12-24 hours and covers up to the last 2 years of Engagement data
- C. Rapid publish — is limited to a maximum of 20 rapid segments per org and is prioritized in the publish queue
- D. Standard publish is the only option that can activate to a Marketing Cloud Engagement business unit

---

**Q7.** A segment is currently on a Standard publish schedule. The team decides it needs faster cadence and moves it to Rapid. Later, business needs change and they want to move it back to Standard. Which statement is correct about switching schedules?

- A. Both directions are allowed at any time
- B. Standard to Rapid is allowed, but Rapid to Standard is not
- C. Rapid to Standard is allowed, but Standard to Rapid is not
- D. Neither direction is allowed; a new segment must be created each time

---

**Q8.** A newly built segment has been saved with complete criteria, but it never appears at its downstream Marketing Cloud target and never publishes on schedule. Everything about the segment definition looks correct. What is the most likely cause?

- A. The segment has no Activation configured, so it will not publish
- B. The segment is using Definition mode instead of Membership mode
- C. Refresh has not been run manually before the first publish
- D. The Segment Membership DMO has not been generated yet

---

**Q9.** A stakeholder asks the difference between **Refresh** and **Publish** for a segment, and how downstream systems get the new audience. Which explanation is accurate?

- A. Refresh sends membership to targets; Publish only recalculates membership locally
- B. Refresh recalculates membership; Publish sends the refreshed membership to targets (refresh happens as part of publish), and downstream lists like an MCE Dynamic List update only after publish and can lag up to 1 hour
- C. Refresh and Publish are identical operations with different names
- D. Publish recalculates membership every hour; Refresh sends it to targets instantly with no lag

---

**Q10.** A data analyst wants to build a cohort/trend report showing how a segment's membership has changed across every prior publish, and also query only the most recent membership for a live dashboard. Which statement about the Segment Membership DMO is correct?

- A. Only one Segment Membership DMO exists per org and it holds all segments together
- B. Two are generated per Segment-On type — a Latest (most recent publish) and a Historical (all prior publishes) — and both are queryable via SOQL/SQL/Query API/Segmentation REST API
- C. The Historical DMO must be manually created and populated before trend analysis
- D. Segment Membership is only accessible through the activation target, not via query

---

**Q11.** A service operations team wants: (1) an immediate alert to an external system the moment a customer's risk score DMO crosses a threshold, and (2) a scheduled delivery of the full "at-risk customers" audience with their historical attributes to Marketing Cloud for a nurture campaign. Which pairing is correct?

- A. (1) Activation; (2) Data Action
- B. (1) Data Action firing a Webhook/Platform Event on the DMO change; (2) Activation sending the golden records with history
- C. Both should use Activation because both involve the same audience
- D. Both should use a Data Action because both need to reach external systems

---

**Q12.** A team is configuring activation to a Marketing Cloud Engagement business unit and, separately, to an advertising platform via Ad Audiences. A campaign fails because required contact points are missing. Which requirements are correct? **(Choose 2)**

- A. Activation to MCE requires at least one of: Email Address, Mobile App identifier, or Phone Number
- B. Activation to external/ad platforms requires at least one of: Email, OTT ID, Phone, or Mobile Advertiser ID (MAID)
- C. Activation to MCE requires a LiveRamp OTT ID
- D. Ad Audiences requires the Unified Household as the Segment On object

---

**Q13.** A consultant is grounding an Agentforce agent so its responses use the company's unified customer data instead of generic answers. They are assembling a RAG pipeline on top of Data 360. Which sequence/components are required?

- A. Data Action → Activation Target → Journey Builder
- B. Search Index → Retriever (wraps Einstein Search; a default retriever is auto-created per index, or build a Custom Retriever) → attach the Retriever to a Prompt Template in Prompt Builder
- C. Segment Membership DMO → Rapid publish → Contact Point
- D. Calculated Insight → Data Cloud activation target → Dynamic Related List

---

## Answer Key

**Q1: B** — With multiple sources describing the same people, **Unified Individual** is recommended because it depends on identity resolution to merge sources into a single profile, preventing duplicates. Individual (A) does no identity resolution and risks counting the same person multiple times. Unified Household (C) changes the grain to household. An Engagement DMO (D) can be a Segment On object (June 2025) and activate to MCE, but doesn't deliver deduplicated person-level unification.

**Q2: A and C** — A CI used as a segment filter must **reference the Segment On DMO** and **include that DMO's Primary Key as a Dimension**. Rapid publishing (B) and an Activation Target (D) are unrelated to CI-as-filter eligibility.

**Q3: B** — Each criteria row is a **Container built on one attribute**; the three attributes become three Containers combined with AND/OR and grouping/nesting (up to 5 levels) to express (Gold OR Platinum) AND California. A single container doesn't hold multiple attributes (A); segments needn't be published separately (C); Direct and Related Attribute filters can be combined (D).

**Q4: B** — The canvas has **INCLUDE and EXCLUDE tabs**; Exclude removes matching individuals — exactly how to suppress opt-outs within one segment. A Data Action (C) fires real-time events, not bulk suppression. Publish cadence (D) doesn't filter members. Inverting Include operators (A) is not the intended mechanism.

**Q5: C** — A nested segment can be referenced in **Definition mode** (re-runs logic live) or **Membership mode** (reuses last published membership, **faster**). Since speed matters more than live recalculation, choose Membership mode. The others mislabel which mode is faster or what each does.

**Q6: A and C** — **Rapid publish** runs on a daily schedule at a 1-hour or 4-hour interval with a configurable lookback window (A), and is capped at **20 rapid segments per org** while being prioritized in the publish queue (C) — the right fit for reacting to very recent engagement. B correctly describes Standard but its 12-24h cadence is too slow here. D is false: rapid publish CAN activate to a Marketing Cloud Engagement business unit (it can also target Data Cloud and file storage), so Standard is not the "only option."

**Q7: C** — The switch is one-way: **Rapid to Standard IS allowed, but Standard to Rapid is NOT**.

**Q8: A** — **A segment must have an Activation configured or it will not publish** — no scheduled/manual publish sends it anywhere. Definition vs Membership (B) affects nested references. Refresh happens as part of publish, so a manual pre-refresh (C) isn't required. The Segment Membership DMO (D) is auto-generated on publish, not a prerequisite.

**Q9: B** — **Refresh recalculates membership; Publish sends that refreshed membership to targets, and refresh happens as part of publish.** Downstream consumers like an MCE Dynamic List update only after publish and can lag up to 1 hour. The others invert or conflate the two.

**Q10: B** — There are **two Segment Membership DMOs per Segment-On type: Latest (most recent publish) and Historical (all prior publishes for trend/cohort)**, both queryable via SOQL/SQL/Query API/Segmentation REST API. Not a single org-wide object (A); Historical is auto-generated (C); membership is directly queryable, not only via the target (D).

**Q11: B** — A **Data Action** fires an event (Platform Event, Webhook, or MC entry event) the moment a DMO/CI changes — real-time, record-level, current payload — for requirement (1). An **Activation** sends the segment's golden records in bulk with historical attributes for ongoing engagement — for requirement (2). A/C/D swap or collapse these two tools.

**Q12: A and B** — Activation to **MCE requires ≥1 of Email Address, Mobile App identifier, or Phone Number**. Activation to **external/ad platforms (incl. Ad Audiences) requires ≥1 of Email, OTT ID, Phone, or MAID**. MCE doesn't require a LiveRamp OTT ID (C), and Ad Audiences doesn't mandate Unified Household as Segment On (D).

**Q13: B** — Grounding via RAG on Data 360 requires a **Search Index → Retriever** (wraps Einstein Search; default retriever auto-created per index, or build a Custom Retriever) **→ attach the retriever to a Prompt Template in Prompt Builder**. The other sequences mix in unrelated activation/data-action/publishing components.
