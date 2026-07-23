# Section 1 Quiz — Solution Positioning (14%)
> 10 questions. Pass mark: 8/10. Scenario-based. Answers at the bottom.

**Q1.** A retail company complains that customer data is scattered across their e-commerce platform, service console, and marketing tool, producing conflicting reports and insights no one trusts. A consultant is explaining how Data 360 addresses this. Which statement best positions Data 360 for this problem?
- A) Data 360 is a CDP whose primary job is to build marketing audiences, so it will consolidate the marketing tool's segments.
- B) Data 360 follows a connect → unify → analyze → activate approach that eliminates data silos and the unreliable insights they cause, and it is more than a CDP because it also unifies data across the Salesforce ecosystem and powers AI agents.
- C) Data 360 replaces the CRM as the single source of truth by physically migrating all three systems into one database.
- D) Data 360 solves this by applying the Trust Layer to govern AI outputs across the three systems.

**Q2.** A consultant is advising a bank that must keep transaction data inside Snowflake for compliance reasons — the data cannot be duplicated or moved out of its system of record, but analysts still need to query it alongside CRM data. Which Data 360 capability should the consultant recommend?
- A) One of the 275+ ingestion connectors, because they provide the fastest path to unify the Snowflake data.
- B) The CRM connector, since it will bring the transaction data in without consuming credits.
- C) Zero-Copy Architecture / Data Federation, which queries the external data in place without duplication and keeps it in the system of record.
- D) Real-Time Ingestion via the Ingestion API, so the transaction records stay continuously fresh.

**Q3.** A marketing operations lead is worried about credit consumption after seeing charges in the Digital Wallet. Their pipelines currently ingest data from a connected Salesforce org via the CRM connector, and also from a web SDK. Which of the following will help them reduce credit consumption? (Choose 2)
- A) Switch eligible streaming pipelines to batch processing.
- B) Increase the refresh frequency of existing data streams so each run processes less data.
- C) Deactivate pipelines that are no longer being used.
- D) Route the CRM connector data through a paid ingestion connector to consolidate billing.

**Q4.** A consultant needs to explain the difference between the two families of AI that Data 360 supports for a customer service use case. Which pairing is correct?
- A) Generative AI forecasts and scores records; Predictive AI creates net-new content such as reply drafts.
- B) Generative AI creates content such as reply drafts; Predictive AI forecasts and scores, such as churn likelihood.
- C) Both Generative and Predictive AI only create content; grounding is what produces scores.
- D) Generative AI is governed by ABAC; Predictive AI is governed by the Trust Layer.

**Q5.** An Agentforce agent at a telecom keeps giving customers outdated account balances. A consultant traces the issue to how the agent accesses data. What is the correct way to position the fix using Data 360 terminology?
- A) The agent needs generative AI enabled so it can compose more accurate answers.
- B) The agent must be re-pointed to the CRM as the single source of truth instead of Data 360.
- C) The agent relies on grounding — supplying live data via Data 360 — so grounding it in current data resolves the stale answers.
- D) Apply dynamic masking so the balance is reversible at query time.

**Q6.** A healthcare organization wants users to see patient records only when both the user's role attributes and the data's sensitivity attributes align, rather than relying on role membership alone. Which governance approach should the consultant position?
- A) RBAC, because role membership is the most granular control available.
- B) ABAC, which evaluates both user attributes and data attributes to make access decisions.
- C) Purpose limitation, which restricts why data is collected.
- D) Platform Encryption with customer-managed keys.

**Q7.** During a discovery call, a stakeholder says, "We heard Salesforce renamed Data Cloud. Are our existing object and API names going to break?" How should the consultant respond? (Choose 2)
- A) Data Cloud was rebranded to Data 360 at Dreamforce 2025.
- B) All object and API names were immediately renamed, so integrations must be updated at once.
- C) Object and API names may still reference "Data Cloud" even after the rebrand.
- D) The rebrand also merged Data 360 with the Trust Layer into a single product.

**Q8.** A media company needs personalization decisions to reflect a user's on-site behavior within about a second of it happening. A consultant is selecting the right real-time components. Which combination correctly reflects Data 360's real-time capabilities?
- A) Standard scheduled Data Graphs paired with batch ingestion, because scheduling guarantees sub-second freshness.
- B) Real-Time Data Graphs (continuous refresh) with Real-Time Ingestion via the Web/Mobile SDK, feeding Real-Time Segments and Data Actions, supporting updates in under one second.
- C) Zero-Copy federation to Databricks, because federation always returns results in real time.
- D) Calculated Insights on a nightly refresh, since insights are inherently real-time.

**Q9.** A consultant is scoping a project where product-catalog data currently sits in BigQuery. The client needs to heavily transform and persist that catalog data so it can be used to build activation segments. Which approach fits, and why?
- A) Zero-Copy Architecture, because federated data can be fully transformed and persisted for activation without copying.
- B) An ingestion connector, because data that must be materialized, transformed, and persisted for activation should be copied in rather than federated.
- C) The CRM connector, because BigQuery is part of the Salesforce ecosystem.
- D) Real-Time CIs, because activation segments require continuous federation.

**Q10.** A prospect asks how Data 360's pricing works so they can estimate cost before ingesting a large batch of external files. Which explanation is accurate?
- A) Credits equal Data Processed divided by 1,000,000, multiplied by a category multiplier, and ingesting from a Salesforce org via the CRM connector does not consume credits.
- B) Credits are a flat monthly fee regardless of data volume, tracked in the Trust Layer.
- C) Every ingestion — including the CRM connector and Agentforce connectors — consumes credits at the same multiplier.
- D) Credits equal Data Processed multiplied by 1,000,000, and the total is monitored via ABAC policies.

---
## Answer Key
**Q1: B** — Data 360's positioning is the connect → unify → analyze → activate lifecycle that removes silos and the unreliable insights they create, and it is "more than a CDP" because it unifies across the Salesforce ecosystem and powers AI agents. A understates it; C wrongly claims it replaces the CRM as the single source of truth; D names a real feature (Trust Layer) but that governs AI safety, not data unification.

**Q2: C** — When data must remain in its system of record for compliance, cost, or freshness reasons, Zero-Copy Architecture / Data Federation queries it in place without duplication. A and B both copy or materialize the data (and the CRM connector is for Salesforce orgs, not Snowflake); D still ingests/persists the records.

**Q3: A, C** — Optimizing credit consumption includes preferring batch over streaming and deactivating unused pipelines. B is backwards — increasing refresh frequency raises consumption; D is wrong because CRM-connector data does not consume credits, so routing it through a paid connector would add cost.

**Q4: B** — Generative AI creates content while Predictive AI forecasts and scores. A reverses the two; C misattributes scoring to grounding; D confuses AI types with governance mechanisms.

**Q5: C** — Agentforce agents rely on grounding, which supplies live data via Data 360, so grounding the agent in current data fixes stale answers. A addresses phrasing, not freshness; B misstates the architecture; D describes a governance control, not a freshness fix.

**Q6: B** — ABAC evaluates both user attributes and data attributes, exactly the "both must align" requirement, going beyond RBAC alone. A is what the client is moving past; C (purpose limitation) and D (Platform Encryption) are real controls but don't perform attribute-based access decisions.

**Q7: A, C** — Data Cloud was rebranded to Data 360 at Dreamforce 2025, and object/API names may still say "Data Cloud." B is false (names weren't all immediately renamed); D invents a product merger.

**Q8: B** — Sub-second personalization uses Real-Time Data Graphs (continuous refresh), Real-Time Ingestion via the Web/Mobile SDK, and Real-Time Segments/Data Actions, supporting updates under a second. A relies on scheduled graphs and batch; C wrongly claims federation is always real time; D calls nightly CIs real-time.

**Q9: B** — Data that must be materialized, transformed, and persisted for activation should be brought in with an ingestion connector (which copies data). A is wrong (Zero-Copy leaves data in place); C misapplies the CRM connector; D misuses Real-Time CIs.

**Q10: A** — Credits = (Data Processed / 1,000,000) × Multiplier, and ingesting from a Salesforce org via the CRM connector does not consume credits. B is false (usage-based, tracked in the Digital Wallet); C is wrong (CRM/Agentforce connectors don't consume credits); D inverts the formula and misattributes monitoring to ABAC.
