# Section 5 Quiz — Data Enhancements, Sharing & Analysis (18%)
> 12 questions. Pass mark: 10/12. Scenario-based. Answers at the bottom.

**Q1.** A retail company wants to compute each customer's Customer Lifetime Value (CLV) so that Marketing can build long-term loyalty segments. The metric should aggregate total historical spend per customer across all their orders and refresh once per day. Which Data 360 feature is the correct fit?

- A. Streaming Insight, because it can continuously read engagement events and keep the CLV up to date in seconds
- B. Calculated Insight, because it aggregates a measure by a dimension on a scheduled batch job and can join across DMOs and the Unified Profile
- C. Data Graph, because it materializes a precalculated JSON view for fast retrieval
- D. A regression ML model in Model Builder, because CLV is a numeric value

**Q2.** While building a Calculated Insight in the Visual Declarative Builder, a consultant needs the CI to be valid before it can be saved and run. Which requirement must the Aggregate Node satisfy?

- A. At least one filter and at least one measure
- B. At least one measure (aggregated metric) and at least one dimension (group-by)
- C. At least two dimensions and no measures
- D. Exactly one measure that can also be reused as a dimension when needed

**Q3.** An e-commerce team wants to send a real-time push notification the moment a shopper adds items to a cart but leaves without checking out (cart abandonment), reacting within seconds. Which feature and behavior are correct? (Choose 2)

- A. Streaming Insight, which processes incoming engagement events with rolling/tumbling windows at seconds-to-minutes latency
- B. Calculated Insight, because it can be scheduled to run every few minutes and approximate real-time
- C. The Streaming Insight can trigger a Data Action when a threshold is met
- D. The Streaming Insight can join the Unified Profile to enrich the alert with lifetime purchase history

**Q4.** A consultant is comparing Calculated Insights and Streaming Insights for a project. Which statement accurately describes a limitation of Streaming Insights?

- A. Streaming Insights cannot join Unified Profiles and cannot produce lifetime metrics
- B. Streaming Insights can only run as a daily scheduled batch job
- C. Streaming Insights require an Aggregate Node with at least one dimension and one measure
- D. Streaming Insights are cheaper to run than batch Calculated Insights

**Q5.** A solution architect needs a single, precalculated, queryable view that nests Customer → Orders → Items → Cases → Products so a service application can retrieve a full customer picture in near real time with fewer API calls than querying each DMO separately. Which feature should be used, and how is it consumed?

- A. A Calculated Insight, consumed as a summary report
- B. A Data Graph, consumed via the Query API as JSON and referenceable in Flow/Apex/activation
- C. A Streaming Insight, consumed as a continuous event stream
- D. A Copy Fields enrichment, consumed on the CRM record page

**Q6.** A team already has a Calculated Insight that computes each customer's churn-risk score. They now want that score delivered inside a fast, nested multi-object view that an app queries in near real time. What is the correct relationship between these features?

- A. The CI and the Data Graph are mutually exclusive; you must rebuild the churn score as a Data Graph
- B. A CI defines "what to calculate," a Data Graph defines "how it's connected / fast retrieval," and the CI output can be added into the Data Graph
- C. The Data Graph will re-aggregate the CI measure automatically, so the CI is unnecessary
- D. Only a Streaming Insight output can be added into a Data Graph, not a CI

**Q7.** A consultant wants to surface Data 360 data directly on CRM record pages. They need to show a 1-to-many list of a customer's support cases on the Account page, where the case DMO relates to the Unified Individual. Which enrichment type applies, and what is its prerequisite?

- A. Copy Fields enrichment; requires a 1-to-many relationship
- B. Related List enrichment; requires the DMO to relate to the (Unified) Individual via identity resolution
- C. Direct-DMO Related List; requires identity resolution
- D. Copy Fields enrichment; requires no identity resolution

**Q8.** A consultant needs to display records from a DMO on a record page, but that DMO has only a direct relationship to the object on the page and there is no identity resolution configured for it. Which enrichment option works here, and why is it the key differentiator?

- A. Copy Fields, because it performs a 1:1 field copy without identity resolution
- B. Related List enrichment, because it always requires identity resolution to the Unified Individual
- C. Direct-DMO Related Lists, because they surface data from any DMO via a direct relationship and do NOT require identity resolution
- D. Streaming Insight, because it can push the related records to the page in real time

**Q9.** An analyst builds a Salesforce report on top of a Calculated Insight. Which two statements about reporting on CIs are correct? (Choose 2)

- A. The report must have at least one aggregatable non-text measure and at least one dimension, and only summary reports are supported (no detail rows or row counts)
- B. You can add row-level and summary formulas to re-aggregate the measures further
- C. Dimension count gates the available charts: one dimension disables stacked bar/column, and 3+ non-aggregatable dimensions disable all charts
- D. You can export the report using "Details Only" to get the underlying rows

**Q10.** A company wants no-code teams to build a model that predicts whether a customer will churn (yes/no). Which combination is correct?

- A. Einstein Studio with Model Builder; a binary classification model whose target is a real column in the training DMO, evaluated with AUC
- B. Einstein Studio with Model Builder; a regression model evaluated with R-squared
- C. BYOM only; churn prediction cannot be built natively and must come from SageMaker
- D. A Calculated Insight; churn is just an aggregated measure

**Q11.** After training an ML model in Model Builder, a consultant needs to know where predictions land and how they can be used downstream. Which statement is accurate?

- A. Predictions overwrite the original training DMO in place with the full input record plus the score
- B. Predictions write to a NEW output DMO containing the prediction plus PK/identifiers only, and can be referenced in segments, activation, CI, Flow, and Prompt Builder
- C. Predictions are only available inside Tableau Next and cannot be used in segments
- D. Predictions are stored in a Data Graph and can only be retrieved via the Query API

**Q12.** A media company wants to let a partner query the company's Data 360 data without the partner copying or storing it, while preserving the company's security and governance so it can support privacy-safe collaboration in a clean room. Which capability fits, and what is a correct property?

- A. Zero Copy Federation, because it queries the partner's external data in place inbound
- B. Zero Copy Sharing, because it shares Data 360 data outbound without the receiver copying/storing it, preserving security/governance and underpinning Clean Rooms
- C. Tableau Semantics, because it models metrics once for Tableau Next and Agentforce
- D. A Data Graph, because it materializes a JSON view the partner can download

---
## Answer Key

**Q1: B** — CLV is a long-term per-customer aggregated metric for segmentation — the Calculated Insight use case: aggregate a measure (total spend) by a dimension (customer) as a scheduled batch job, joining across DMOs/DLOs and the Unified Profile. SI (A) handles only incoming engagement events and can't produce lifetime metrics. A Data Graph (C) is about connectedness/fast retrieval, not calculating the aggregate. A regression model (D) predicts a numeric value; this is a historical aggregation, not a prediction.

**Q2: B** — A valid CI needs an Aggregate Node with ≥1 Measure (aggregated metric) and ≥1 Dimension (group-by). Filters are optional (rules out A). Measures/dimensions aren't interchangeable (rules out D), and you can't have measures with no dimension or vice versa (rules out C).

**Q3: A, C** — Cart abandonment is immediate action on incoming engagement events — the Streaming Insight use case (Spark Structured Streaming, rolling/tumbling windows, seconds-to-minutes) (A), which can trigger a Data Action at a threshold (C). B is wrong (CI is scheduled batch). D is wrong (SI can't join Unified Profiles / no lifetime metrics).

**Q4: A** — Streaming Insights operate only on incoming engagement events, cannot join Unified Profiles, and cannot produce lifetime metrics. B describes CI. C describes a CI's Aggregate Node. D is reversed — streaming is far more expensive and consumes credits continuously.

**Q5: B** — A Data Graph materializes hierarchical DMO connections into a single precalculated queryable JSON view with near-real-time retrieval and fewer API calls, consumed via the Query API as JSON and referenceable in Flow/Apex/activation. A CI (A) calculates aggregates. SI (C) is for real-time event action. Copy Fields (D) is a record-page enrichment.

**Q6: B** — CI and Data Graphs are complementary: CI answers "what to calculate," a Data Graph answers "how it's connected / fast retrieval," and a CI's output can be added into a Data Graph. A (exclusive) is wrong; C (re-aggregation) is wrong; D is wrong (CIs, not just SIs, can be added into a graph).

**Q7: B** — A 1-to-many list (support cases) tied to the customer requires a Related List enrichment, which requires the DMO to relate to the (Unified) Individual via identity resolution. Copy Fields (A, D) is 1:1. C names the wrong enrichment: a Direct-DMO Related List works via a direct relationship without identity resolution, but this scenario specifies the case DMO relates to the Unified Individual, making the standard Related List correct.

**Q8: C** — Direct-DMO Related Lists surface data from any DMO via a DIRECT relationship and do NOT require identity resolution — the key differentiator from standard Related Lists (which require it). Copy Fields (A) is a 1:1 copy that itself requires identity resolution. B describes standard Related Lists. Streaming Insight (D) is not an enrichment.

**Q9: A, C** — Reporting on CIs requires ≥1 aggregatable non-text measure plus ≥1 dimension, and only summary reports are supported (no detail rows, grand totals, or row counts) (A). Dimension count gates charts (1 dim disables stacked bar/column; 3+ non-aggregatable disable all charts) (C). B is wrong (no row/summary formulas, no re-aggregation). D is wrong (no "Details Only" export).

**Q10: A** — For a no-code yes/no prediction, use Einstein Studio + Model Builder to build a binary classification model; target must be a real column in the training DMO, evaluated with AUC. B is the wrong type (regression/R-squared is numeric). C is wrong (churn can be built natively; BYOM is optional). D is wrong (churn prediction is a model, not an aggregate).

**Q11: B** — Predictions write to a NEW output DMO containing the prediction plus PK/identifiers only (not the full input record), referenceable in segments, activation, CI, Flow, and Prompt Builder. A is wrong (doesn't overwrite the training DMO). C is wrong (usable across segments and more). D is wrong (output DMO, not a Data Graph).

**Q12: B** — Zero Copy Sharing shares Data 360 data outbound so the receiver uses it without copying/storing, preserves security/governance (data-space permissions carry through), and underpins Clean Rooms. A describes Federation (inbound). C (Tableau Semantics) is a semantic layer. D is wrong (a Data Graph is a queryable view, not outbound no-copy sharing).
