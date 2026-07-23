# Section 3 Quiz — Data Source Connection & Ingestion (18%)
> 12 questions. Pass mark: 10/12. Scenario-based. Answers at the bottom.

**Q1.** A retail company wants to push near-real-time clickstream micro-batches from its custom web backend into Data 360. The developer team can send JSON but does not want to manage acknowledgements or retries per record — they prefer a fire-and-forget model where the platform processes the data on its own cadence. Which ingestion path best fits this requirement?

- A. Amazon S3 connector with wildcard file detection
- B. Ingestion API using the streaming pattern
- C. Salesforce CRM connector in streaming mode
- D. Zero Copy Query Federation against the web database

**Q2.** You are configuring the Ingestion API connector for the first time. Which steps are required to stand it up before you can create the Ingestion API data stream? (Choose 2)

- A. Create a Connected App and configure OAuth with the correct scopes
- B. Upload an OpenAPI Specification (OAS) YAML file to define the connector's objects
- C. Enable Apache Iceberg on the target Data Lake Object
- D. Configure Fully Qualified Keys on every primary and foreign key

**Q3.** A data engineer is loading five years of historical transaction data (roughly 2 TB total) as a one-time backfill, and separately needs order events to arrive within a few minutes for real-time personalization. Which approach correctly matches each need?

- A. Use streaming ingestion for both, since streaming can also handle large historical loads efficiently
- B. Use batch (bulk) ingestion for the historical backfill and streaming ingestion for the near-real-time order events
- C. Use batch ingestion for both, scheduling the order events every 5 minutes
- D. Use Zero Copy federation for the backfill and batch ingestion for the order events

**Q4.** A team merges Account records from both the Salesforce CRM connector and a legacy ERP (via Ingestion API) into the same Account DMO. After harmonization, they notice records from the two sources collide because both systems reuse the same numeric primary key values. What must be configured, and where?

- A. Configure Fully Qualified Keys (source key + key qualifier) on the DLO primary/foreign keys, set on the Data Lake Objects tab after stream creation
- B. Change the data stream category from Profile to Other on both streams
- C. Enable a Streaming Data Transform to deduplicate the keys as records arrive
- D. Configure Fully Qualified Keys on the DMO fields directly in the Data Model Objects mapping screen

**Q5.** An architect must decide between Zero Copy and ingestion for a large dataset that lives in Snowflake. The requirement: the data must remain in Snowflake (governance rule — it cannot be copied), but analysts need to query it inside Data 360. Cost sensitivity is high and the dataset is very large and stored in Apache Iceberg format. Which option is the best fit?

- A. Ingest the data into a DLO so it is materialized as columnar Parquet for lower query cost
- B. Zero Copy Query Federation, because it runs on Data 360's own compute
- C. Zero Copy File Federation, because it uses Data 360's own compute to read the external Iceberg storage directly at lower cost
- D. Zero Copy Query Federation, because File Federation always copies the data into Data 360

**Q6.** During Ingestion API bulk (CSV) loads, a developer reports that a job appears "stuck" and some files were never processed. Which statements about the Ingestion API bulk limits are correct? (Choose 2)

- A. A single CSV file can be up to 150 MB, with a maximum of 100 files per job
- B. Within a job, only one file is processed at a time
- C. A single streaming request can carry up to 150 MB of JSON
- D. Incomplete bulk jobs are retained indefinitely until manually cancelled

**Q7.** A consultant is creating a data stream for website event data (page views with timestamps). At stream creation, they must assign one of three categories. The business wants to run time-series engagement analytics on these events. Which category applies, and what does it require?

- A. Profile — requires a unique identifier field
- B. Engagement — requires an immutable DateTime "Event Date" field with a timezone
- C. Other — no special field requirements
- D. Engagement — requires only a unique identifier, no DateTime field

**Q8.** After creating a stream as "Profile," the team realizes it should have been "Engagement." A junior admin asks how to switch the category on the existing stream. What is the correct guidance?

- A. Edit the stream and change the category dropdown; it updates in place
- B. The category is set only at the DMO level, so remap the DMO
- C. The category is immutable after creation; you must delete and recreate the data stream to change it
- D. Run a Batch Data Transform to reclassify the records into the new category

**Q9.** A team is configuring the Amazon S3 connector to ingest daily CSV exports. Which statements about the S3 connector are correct? (Choose 2)

- A. It is a batch connector that supports wildcards and compressed files, and CSVs must include headers plus at least one data row
- B. You must allowlist the Data 360 IP addresses on the S3 bucket
- C. It supports near-real-time streaming ingestion with a ~3 minute cadence
- D. Each object can hold unlimited rows as long as it stays under 10 GB

**Q10.** A developer needs to enrich streaming order records with SQL as they arrive — for example, computing a derived field from a single incoming stream — with no joins to other objects. Which capability should they use, and what is a key constraint?

- A. Batch Data Transform, because it supports joins across multiple DLOs on a schedule
- B. Streaming Data Transform, which runs SQL on a single source DLO with no joins; the target must be a DLO created manually in the UI
- C. Streaming Data Transform, which can join multiple streams as records arrive
- D. Batch Data Transform, which writes to a stream-auto-created DLO with no manual setup

**Q11.** An architect is describing the raw-to-harmonized data pipeline to stakeholders. Which sequence correctly orders the objects data flows through after a connector's data stream ingests an object?

- A. DMO (harmonized) -> DLO (typed Parquet) -> DSO (raw) -> Data Stream
- B. Data Stream -> DSO (raw/staging) -> DLO (materialized, typed, columnar Parquet) -> DMO (harmonized canonical view)
- C. Data Stream -> DLO (raw) -> DSO (typed) -> DMO (activation)
- D. Data Stream -> DMO (raw) -> DLO (harmonized) -> DSO (columnar)

**Q12.** A company uses the standard Salesforce CRM connector to sync Contacts and Opportunities. They ask how often data refreshes and whether they can force different cadences. Which statement is accurate?

- A. The CRM connector only supports a manual refresh triggered by an admin
- B. Incremental refresh runs about every 10 minutes and a full refresh runs automatically bi-weekly; custom schedules (5/10/30 min, hourly, daily, weekly, monthly) are also available
- C. The CRM connector refreshes only once per day and cannot be changed
- D. Incremental refresh runs every 3 minutes, matching the Ingestion API streaming cadence

---
## Answer Key

**Q1: B** — The Ingestion API streaming pattern is a fire-and-forget model that sends JSON micro-batches processed on the platform's cadence (~every 3 minutes). S3 is batch-only, the CRM connector is for Salesforce CRM data, and Query Federation reads external data in place rather than ingesting streamed events.

**Q2: A, B** — Standing up the Ingestion API requires a Connected App with OAuth (scopes: cdp_ingest_api, api, refresh_token/offline_access) and uploading the OpenAPI Spec (OAS) YAML to define the connector's objects, before creating the data stream. Iceberg (C) relates to Zero Copy; Fully Qualified Keys (D) are for merging sources into a shared DMO.

**Q3: B** — Batch (bulk) ingestion is for historical backfills and periodic large loads; streaming is for near-real-time delivery (~3 min for the Ingestion API). Streaming is wrong for a one-time multi-TB backfill; Zero Copy keeps data in place rather than backfilling.

**Q4: A** — Fully Qualified Keys (source key + a key qualifier such as "CRM") prevent collisions when multiple sources harmonize into the same DMO. They are configured on the DLO primary/foreign keys via the Data Lake Objects tab after stream creation, and joins match on both value and qualifier. They are not set on DMO fields directly (D).

**Q5: C** — Zero Copy File Federation uses Data 360's own compute to read external Iceberg storage directly, giving lower cost for very large Iceberg datasets, and is recommended when supported. Query Federation runs on the external system's compute (higher cost), so B and D are wrong. Ingestion (A) would copy the data, violating the "must stay in place" rule.

**Q6: A, B** — For Ingestion API bulk (CSV): each file up to 150 MB, max 100 files per job, and only one file processed per job at a time. Streaming requests are limited to 200 KB (not 150 MB), and incomplete jobs are auto-deleted after 7 days (not retained indefinitely).

**Q7: B** — Time-stamped event data for engagement analytics is classified as Engagement, which requires an immutable DateTime "Event Date" field with a timezone. Profile requires a unique identifier, Other has no special requirements, and Engagement is not satisfied by a unique identifier alone (D).

**Q8: C** — The data stream category is assigned at creation and is immutable; changing it requires delete/recreate. It cannot be edited in place (A), is not set at the DMO level (B), and cannot be reclassified via a transform (D).

**Q9: A, B** — The S3 connector is batch, supports wildcards and compressed files, requires CSV headers plus at least one data row, and requires allowlisting Data 360 IP addresses on the bucket. It does not support ~3-minute streaming (C), and each object is limited to 100M rows or 50 GB, whichever first (not "unlimited under 10 GB") (D).

**Q10: B** — Streaming Data Transforms run SQL on a single source DLO as records arrive, support no joins, and require a target DLO created manually in the UI (not a stream-auto-created DLO). Batch Data Transforms (A, D) are scheduled and can join; streaming transforms cannot join multiple streams (C).

**Q11: B** — Data Stream -> DSO (raw/staging) -> DLO (materialized, typed, columnar Parquet) -> DMO (harmonized view mapped to the canonical model). The other orderings scramble the object roles.

**Q12: B** — The CRM connector runs incremental refresh ~every 10 minutes and a full refresh automatically bi-weekly, and custom schedules (5/10/30 min, hourly, daily, weekly, monthly) are supported. It is not manual-only (A), not once-daily fixed (C), and its incremental cadence is ~10 min, not the 3-min Ingestion API streaming cadence (D).
