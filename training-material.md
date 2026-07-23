# Data 360 Consultant — Training Material

Comprehensive, exam-aligned study notes for the **Salesforce Certified Data 360
Consultant** exam (code **Data-Con-101**). Scraped and triangulated from
official Trailhead, Salesforce Help/Developer docs, and reputable guides via the
[`data360-study-scraper`](.claude/skills/data360-study-scraper/) skill.

**Exam logistics:** 60 scored questions (+ up to 5 unscored) · 105 minutes ·
**70% to pass** · $200 (retake $100) · scenario-based multiple choice (incl.
"choose 2") · aligns to Spring '26. *(Verified first-hand from the official exam
guide 2026-07-03.)*

**How to use this file:** It's the knowledge base behind
[roadmap.md](roadmap.md) and the [quizzes/](quizzes/). Study in roadmap order,
not top-to-bottom. Facts marked `triangulated` were confirmed across ≥2 mirrors
because the official page is a JS SPA; facts to double-check hands-on in your
14-day Data 360 org are called out in each section's **Verify hands-on** note.

**Section weightings (anchor your time here):**

| Section | Weight | Notes |
|---------|--------|-------|
| [S1 — Solution Positioning](#s1--solution-positioning-14) | 14% | Value, Data+AI+CRM, credits, ethics |
| [S2 — Setup & Administration](#s2--setup--administration-13) | 13% | Provisioning, permissions, data spaces, governance, packaging |
| [S3 — Data Source Connection & Ingestion](#s3--data-source-connection--ingestion-18) | 18% | Connectors, streams, Zero Copy, transforms, FQK |
| [S4 — Harmonization & Unification](#s4--harmonization--unification-17) | 17% | Data model, mapping, identity resolution |
| [S5 — Enhancements, Sharing & Analysis](#s5--enhancements-sharing--analysis-18) | 18% | CI, data graphs, enrichments, reports, ML |
| [S6 — Data Activations & Utilization](#s6--data-activations--utilization-20) | 20% | Segmentation, activation, data actions, Agentforce |

> **Terminology note:** "Data 360" is the Dreamforce 2025 (Oct 14, 2025)
> rebrand of "Data Cloud." Underlying object/API names and some UI labels still
> say "Data Cloud" / `ssot__`. Treat the two names as interchangeable on the
> exam.

---

## S1 — Solution Positioning (14%)

**Verify hands-on:** ROI/value-calculation frameworks in "Discover the Value"
were only partially retrievable — skim that badge directly.

### Data 360's Core Definition and Positioning
- **Exam section:** S1-positioning (14%)
- **Source:** https://trailhead.salesforce.com/content/learn/modules/data-cloud-explore-the-data-landscape/get-to-know-the-data-landscape-and-data-cloud
- **Type:** Trailhead module · **Source confidence:** direct
  - **In depth:** Data 360 is Salesforce's unified data platform, and the
    single most important thing to internalize is that it is defined by an
    action arc — connect, unify, analyze, activate — rather than by being a
    place where data sits. That framing exists because Salesforce is
    deliberately distinguishing it from a traditional Customer Data Platform
    (CDP): a CDP mainly assembles marketing profiles, whereas Data 360 unifies
    data across the entire Salesforce ecosystem and grounds AI agents, so the
    exam wants you to call it "more than a CDP." The three business pains it
    targets (data silos, unreliable insights, and the lag between insight and
    action) map directly onto why each stage of the arc exists, and its
    zero-copy design plus sub-second profile updates are what let it close
    that insight-to-action gap without the duplication cost of legacy ETL.
- **Key facts:**
  - Data 360 is a centralized platform that **connects → unifies → analyzes →
    activates** data — the exam framing is that arc, not just storage.
  - Explicitly positioned as "**more than a CDP**" — unifies data across the
    whole Salesforce ecosystem and powers AI agents, not just marketing.
  - Solves three pains: data silos, unreliable insights, poor actionability
    (delay between insight and action).
  - **Zero-Copy Architecture** shares/accesses external data (warehouses/lakes)
    via bidirectional connection without duplicating it — vs. legacy ETL copy.
  - Real-time processing updates unified profiles in **under one second**.
- **Why it matters for the exam:** Tests characterizing Data 360 as broader
  than a CDP and the specific silos/insight/action value framing.
- **Related:** Discover the Value; Data+AI+CRM; Zero-Copy Federation.

### The Three Stages (Connect, Harmonize/Unify, Analyze/Act)
- **Exam section:** S1-positioning (14%)
- **Source:** https://trailhead.salesforce.com/content/learn/modules/data-cloud-explore-the-data-landscape/explore-the-stages-of-data-cloud
- **Type:** Trailhead module · **Source confidence:** direct
  - **In depth:** The three stages are the backbone taxonomy of the whole
    product: Connect brings data in (or references it), Harmonize & Unify
    cleans, governs, and resolves it into a single customer profile, and
    Analyze & Act turns that profile into insights, segments, and activations.
    Understanding where a given activity lives is the crux of many scenario
    questions, because tasks that sound similar sit in different stages —
    governance work like auto-tagging and identity resolution belong to
    Harmonize/Unify, not Connect, even though they happen "early." This
    matters beyond terminology because Salesforce reuses these exact stage
    names as the categories of its credit-consumption billing model, so the
    taxonomy is a genuine operational mental model rather than marketing
    language.
- **Key facts:**
  - Stage 1 **Connect**: structured + unstructured data, 275+ prebuilt
    connectors + Zero Copy Federation; unstructured follows connect → process →
    store → index → activate.
  - Stage 2 **Harmonize & Unify**: governance (auto-tagging, policy access,
    encryption), transform, then build the single unified profile via identity
    resolution mapped to the Customer/Unified Data Model.
  - Stage 3 **Analyze & Act**: calculated insights, segments, predictive
    models, enrich Salesforce objects, activate to apps/Agentforce/analytics/
    3rd-party.
  - This taxonomy is reused in the **credit-consumption billing categories** —
    it's a core mental model, not marketing copy.
- **Why it matters for the exam:** "Which stage" scenario questions (e.g.,
  "auto-tagging incoming records" = Harmonize/Unify, not Connect).
- **Related:** Credit consumption; identity resolution; unified data model.

### Data 360 Credit Consumption Model
- **Exam section:** S1-positioning (14%)
- **Source:** https://trailhead.salesforce.com/content/learn/modules/data-cloud-credit-consumption-quick-look/get-started-with-data-cloud-credit-consumption
- **Type:** Trailhead module · **Source confidence:** direct
  - **In depth:** Data 360 is metered on data processed rather than seats, and
    credits are computed as data volume (in millions of rows) times a
    per-activity multiplier, so the same row count costs different amounts
    depending on what you do with it. The six billable categories deliberately
    mirror the three stages, which is why learning the stage taxonomy pays off
    twice. The highest-value exam trap here is knowing what is free: ingesting
    from a Salesforce org through the CRM connector (and the Agentforce
    Marketing, Commerce, and Personalization connectors) consumes no credits,
    which is why practitioners lean on those sources and use levers like
    batch-over-streaming, tighter scoping, and lower refresh frequency to
    control spend — all of which is monitored through the Digital Wallet.
- **Key facts:**
  - Formula: **Credits = (Data Processed ÷ 1,000,000) × Multiplier**. Unit is
    always 1M rows; multiplier varies per usage type. Ex: 2M rows × 15 = 30
    credits.
  - Six billable categories mirror the stages: Connect · Harmonize & Unify ·
    Analyze & Predict · Act · Segment & Activate · End-to-End Real-Time
    Processing.
  - **Ingesting from a Salesforce org via the CRM connector (and Agentforce
    Marketing/Commerce/Personalization connectors) does NOT consume credits** —
    key trap fact.
  - Optimization: prefer batch over streaming when not time-sensitive,
    deactivate unused pipelines, scope ingestion, reduce refresh frequency.
  - Monitored via the **Digital Wallet** tool.
- **Why it matters for the exam:** Credit-math scenario + "which ingestion is
  free" distractor.
- **Related:** Real-Time Use Cases; Governance.

### Real-Time Data Graphs and Real-Time Mechanisms
- **Exam section:** S1-positioning (14%)
- **Source:** https://trailhead.salesforce.com/content/learn/modules/real-time-use-cases-in-data-cloud/explore-real-time-features-in-data-cloud
- **Type:** Trailhead module · **Source confidence:** direct
  - **In depth:** This card is about the real-time pipeline that sits
    alongside Data 360's normal scheduled/batch processing, and the
    discriminator that questions hinge on is continuous refresh versus
    scheduled refresh. A Real-Time Data Graph reshapes DMO data into a
    denormalized view that updates continuously with millisecond access,
    whereas a standard data graph refreshes on a schedule — so if a scenario
    demands live personalization, the real-time graph is the answer. It helps
    to see the components as an end-to-end chain: real-time ingestion (via
    Web/Mobile SDK or the Ingestion API) captures engagement events in
    milliseconds, identity resolution rulesets produce unified DMOs that feed
    the real-time graphs, and real-time calculated insights, segments, and
    Flow-triggered data actions consume them — which is exactly why there is a
    dedicated "End-to-End Real-Time Processing" credit category.
- **Key facts:**
  - **Real-Time Data Graphs** transform DMO data into new views with
    millisecond access; unlike standard (scheduled-refresh) graphs, they refresh
    continuously — the key "real-time vs batch data graph" distinction.
  - Real-Time Ingestion captures engagement events in ms via Web/Mobile SDK or
    Ingestion API.
  - Identity resolution rulesets match unified profiles in ms; each produces a
    unified DMO feeding real-time graphs.
  - Real-Time Calculated Insights, Real-Time Segments, and Real-Time Data
    Actions (Flow-triggered) all operate in ms.
- **Why it matters for the exam:** Which component is "real-time capable" and
  the sequence of the real-time pipeline.
- **Related:** Credit category "End-to-End Real-Time Processing."

### Data + AI + CRM: How They Work Together
- **Exam section:** S1-positioning (14%)
- **Source:** https://trailhead.salesforce.com/content/learn/modules/ai-data-crm-quick-look/learn-how-ai-data-crm-work-together
- **Type:** Trailhead module · **Source confidence:** direct
  - **In depth:** This is the conceptual glue explaining where Data 360 sits
    in Salesforce's overall stack: CRM is the trusted source of customer
    records, Data 360 unifies data across systems, and AI acts on top of that
    unified data. The reason this matters is grounding — Agentforce agents
    converse in natural language but are only reliable when connected to live
    business data, and Data 360 is what supplies that grounding. Two
    distinctions recur on the exam: predictive AI forecasts or scores outcomes
    (demand, next-best-action) while generative AI creates new content, and
    the Einstein/Agentforce Trust Layer is the governance boundary that keeps
    AI's use of data safe.
- **Key facts:**
  - CRM = the single source of truth for customer records; the foundational
    layer AI and data build on.
  - **Generative AI** = creates new content (emails, images, code);
    **Predictive AI** = forecasts/scores (demand, next-best-action). Common
    exam discriminator.
  - Agentforce agents run via natural-language conversation and rely on
    **grounding** — connecting the AI to live business data (via Data 360).
  - The **Einstein/Agentforce Trust Layer** governs AI use of data (safety).
  - AI+Data+CRM program strategy: build trust → ready technology → empower
    teams.
- **Why it matters for the exam:** "How Data 360 fits Data+AI+CRM" + the
  predictive-vs-generative distinction.
- **Related:** Trust Layer; Agentforce; unified profile (grounding source).

### Governance and Ethical Data Use Principles
- **Exam section:** S1-positioning (14%)
- **Source:** https://trailhead.salesforce.com/content/learn/modules/data-cloud-governance-quick-look/get-to-know-data-cloud-governance
- **Type:** Trailhead module · **Source confidence:** direct
  - **In depth:** Governance in Data 360 is built on attribute-based access
    control (ABAC), which grants access by combining who the user is (role,
    department) with what the data is (its tags), rather than relying on
    static role-based permissions alone — this is the answer whenever a
    scenario needs flexible, context-driven access. The pieces fit together as
    a system: AI tagging auto-classifies incoming records so ABAC policies
    have attributes to evaluate, dynamic masking reveals or hides field values
    based on the requesting user's access at query time (unlike static
    field-level security), and purpose limitation constrains AI agents to a
    data set's intended use, forcing escalation when a request falls outside
    it. For the ethical-data-use questions on the blueprint, be ready to
    distinguish these controls plus Platform Encryption (customer-controlled
    keys) and Private Connect (private VPC connectivity) and pick the right
    one for a stated requirement.
- **Key facts:**
  - Policy-based governance uses **attribute-based access control (ABAC)** —
    access from user attributes (role/dept) + data attributes (tags), not RBAC
    alone.
  - **AI tagging/classification** auto-labels records to feed ABAC policies.
  - **Dynamic masking** hides/shows field data by requesting user's access
    (vs. static field security).
  - **Purpose limitation**: an AI agent can retrieve visit history but must
    escalate a request outside the data's intended purpose.
  - **Platform Encryption** (customer-controlled keys) + **Private Connect**
    (VPC connectivity, no public internet).
- **Why it matters for the exam:** "Data ethics principles" is on the blueprint
  — pick ABAC vs RBAC, or masking vs encryption vs tagging for a requirement.
- **Related:** Ethical Data Use Quick Look; Trust Layer.

### Business Use Cases Across Sales, Service, Marketing
- **Exam section:** S1-positioning (14%)
- **Source:** https://trailhead.salesforce.com/content/learn/modules/data-cloud-discover-the-value
- **Type:** Trailhead module · **Source confidence:** triangulated
  - **In depth:** This card exists so you can map a business pain to the
    specific Data 360 value lever and the named metric that solves it, which
    is how the value-oriented questions are phrased. In marketing the lever is
    finer segmentation and activation to advertising channels; in sales it is
    surfacing scoring metrics — likelihood to convert, lifetime value, and
    propensity to purchase, all delivered as calculated insights — directly to
    reps; and in service it is giving agents a unified customer view inside
    Agentforce Service so they stop hopping between systems. The underlying
    pattern is that a unified profile plus calculated insights is the common
    engine, and each department simply consumes it through a different surface
    and metric.
- **Key facts:**
  - Marketing: fine-tune segments, activate for advertising to high-value
    cohorts.
  - Sales: reps see scoring metrics — **likelihood to convert, lifetime value,
    propensity to purchase** (surfaced as calculated insights).
  - Service: agents view unified data inside Agentforce Service, no
    system-hopping.
  - "Discover the Value" teaches both ROI quantification and investment
    business-case building.
- **Why it matters for the exam:** Map a business pain to the right value lever
  and named metric.
- **Related:** Explore the Data Landscape; Real-Time Use Cases.

### Zero-Copy Data Federation as a Differentiator
- **Exam section:** S1-positioning (14%)
- **Source:** https://trailhead.salesforce.com/content/learn/modules/data-cloud-explore-the-data-landscape/explore-the-stages-of-data-cloud
- **Type:** Trailhead module · **Source confidence:** direct
  - **In depth:** Zero-Copy Federation is the capability that lets Data 360
    query data where it already lives in an external lake or warehouse through
    a bidirectional connection, rather than physically copying it in — which
    is precisely what makes it a differentiator against legacy ETL. The
    decision every scenario tests is federation versus ingestion: choose
    zero-copy when the data must remain in its system of record for
    compliance, cost, or freshness reasons and only needs to be referenced at
    query time, and choose one of the ingestion connectors when the data must
    be persisted so it can be transformed, unified, and driven into downstream
    activation. Keep the two mechanisms cleanly separated in your mind,
    because the prebuilt connectors do land and copy data whereas federation
    deliberately does not.
- **Key facts:**
  - Zero Copy Federation queries data **in place** in external lakes/warehouses
    via bidirectional connection — distinct from the 275+ ingestion connectors,
    which **do** copy/land data.
  - **Decision boundary:** use Zero Copy when data must stay in the system of
    record (compliance/cost/freshness) and only needs referencing at query
    time; use ingestion when data must be unified/transformed/persisted for
    downstream activation.
- **Why it matters for the exam:** "Zero Copy vs ingest via connector" scenario.
- **Related:** Connect stage; credit "Connect" category (federation billing).

### Rebrand and Enterprise Data Foundation Positioning
- **Exam section:** S1-positioning (14%)
- **Source:** https://www.salesforce.com/data/guide/
- **Type:** Third-party guide · **Source confidence:** triangulated
  - **In depth:** For the exam you mainly need awareness that "Data Cloud" was
    rebranded to "Data 360" at Dreamforce 2025, and — importantly — that the
    underlying object and API names may still read "Data Cloud," so the two
    terms refer to the same product. The rebrand carried a positioning shift:
    from a marketing-oriented CDP to an enterprise-wide data foundation that
    fuels AI, automation, and decisioning across the whole business. That
    framing reinforces the zero-copy story, since connecting live to external
    systems like Snowflake, Databricks, and Google Cloud without ETL is what
    makes it credible as the data foundation for Agentforce.
- **Key facts:**
  - Rebrand "Data Cloud" → "Data 360" at Dreamforce 2025 (Oct 14, 2025); object
    /API names may still say Data Cloud.
  - Positioning shifted from "marketing CDP" to "enterprise data foundation"
    fueling AI/automation/decisions across the enterprise.
  - Connects directly to live external data (Snowflake, Databricks, Google
    Cloud) with no ETL/duplication; the data foundation for Agentforce.
- **Why it matters for the exam:** Awareness of the rename + positioning shift.
- **Related:** Data+AI+CRM; Zero-Copy; Agentforce grounding.

---

## S2 — Setup & Administration (13%)

**Verify hands-on:** Permission-set names were renamed Sept 2025 (below) — the
exam is current on these; the pending "Governance Specialist" set and detailed
data-stream error codes need live-doc verification before exam day.

### Provisioning and Enabling Data 360
- **Exam section:** S2-admin (13%)
- **Source:** https://help.salesforce.com/s/articleView?id=000396444
- **Type:** Salesforce Doc · **Source confidence:** triangulated
  - **In depth:** Before any data can flow into Data 360, the platform has to
    be both licensed and switched on, and these are two separate gates that
    trip a lot of scenario questions. Buying or adding the license only makes
    the product eligible on qualifying editions; an admin still has to walk
    through a deliberate manual activation inside Setup, because Salesforce
    treats Data 360 as a heavyweight capability rather than something silently
    enabled. The key strategic fact is that the org where the license is
    purchased permanently fixes the data residency region, which is why
    residency questions push you toward org-level and Data Cloud One decisions
    rather than in-app configuration. Consulting partners follow a distinct
    path (learning, then a short-lived demo org) because they need sandboxes
    to practice in rather than a production tenant.
- **Key facts:**
  - Available on **Enterprise and Unlimited** editions (plus a free tier);
    Developer Edition is NOT auto-provisioned.
  - Enablement is a **manual click-through** even after license is added:
    Setup → Data 360 Setup → **Get Started**.
  - Consulting partners: complete "Data 360: Practical Experience" in Partner
    Learning Camp, then request a demo org (type code **DCDO**); trial orgs
    expire after 30 days.
  - The **org where the license is purchased determines data residency region**.
- **Why it matters for the exam:** Edition/license eligibility + the manual
  "Get Started" activation step.
- **Related:** Data Cloud One (region); Data Spaces (do NOT solve residency).

### Permission Sets and User Access
- **Exam section:** S2-admin (13%)
- **Source:** https://help.salesforce.com/s/articleView?id=005131350
- **Type:** Salesforce Doc · **Source confidence:** triangulated
  - **In depth:** Access in Data 360 is granted through a fixed set of
    Salesforce-provided permission sets, each mapping to a persona along the
    pipeline from full architecture control down to view-only. The September
    2025 rename matters because the exam deliberately uses the old
    marketing-flavored names as distractors, so you need to hold both
    vocabularies and know that the new names describe what each role can
    actually do: architect the platform, manage activation strategy, or just
    build segments. The most tested boundary is the general Data Cloud User,
    who can view data but is walled off from Setup, data-space management, and
    segments/activations, illustrating that viewing data and administering the
    platform are separate privileges. Layer on top of this that any set, even
    the powerful Architect, can be scoped to specific data spaces, so a role
    and the data it touches are two independent axes of control.
- **Key facts:**
  - **Sept 4, 2025 renames:** Data Cloud Admin → **Data Cloud Architect**
    (full access); Marketing Manager → **Data Cloud Activation Manager**
    (segmentation strategy, activation targets); Marketing Specialist →
    **Data Cloud Activation Specialist** (create segments).
  - New **Data Cloud User** = general view access; CANNOT view Data Cloud
    Setup, Data Space Management/Addition, or Segments & Activations.
  - **Legacy** (functional, no new features): Data Aware Specialist, Marketing
    Admin.
  - Permission sets can be **scoped to specific data spaces** — a Data Cloud
    Architect can still be restricted to certain spaces.
- **Why it matters for the exam:** Old names appear as distractors; know both
  old + new and what Data Cloud User is blocked from.
- **Related:** Data Spaces; Governance.

### CRM Source Permissions for Data Streams (View All Records)
- **Exam section:** S2-admin (13%)
- **Source:** https://help.salesforce.com/s/articleView?id=data.c360_a_crm_enable_object_and_field_permissions.htm
- **Type:** Salesforce Doc · **Source confidence:** direct *(verified 2026-07-03)*
  - **In depth:** When you connect a CRM org, Data 360 auto-creates a
    dedicated connector permission set, and this set is what governs which
    source objects and fields the platform is even allowed to see. The
    mechanism trips people because ingestion runs as an integration identity,
    not as your user, so read access alone is not enough: the platform needs
    View All Records on the object to be confident it can pull every row, and
    without it the object simply never appears in the New Data Stream picker.
    This is why the classic troubleshooting question, a custom CRM object that
    won't show up when building a stream, resolves to enabling View All
    Records on the Data Cloud Salesforce Connector set rather than to any
    stream setting. Editing these object settings and creating the stream both
    require elevated privileges (System Admin or Data Cloud Architect),
    reinforcing that source enablement is an administrative act.
- **Key facts:**
  - To ingest a CRM object (esp. a **custom object**) into Data 360, you edit the
    **Data Cloud Salesforce Connector** permission set (auto-created when you
    connect the CRM org) and, on **Object Settings → the object**, enable
    **Read + View All Records**.
  - **Trap:** without **View All Records** on the source object, the object
    **won't appear** in the New Data Stream picker.
  - By default, fields on permitted objects get **read access**; you can
    optionally restrict specific fields.
  - Editing these object settings requires **System Admin profile OR Data Cloud
    Architect**.
  - Creating the data stream itself also requires **Data Cloud Architect**; you
    can select **multiple objects** at once (each becomes its own stream);
    validation stops if it runs **over 2 minutes** and retries.
- **Why it matters for the exam:** A specifically-tested question — "custom CRM
  object doesn't show up when creating a data stream" → enable **View All
  Records** on the Data Cloud Salesforce Connector permission set.
- **Related:** Permission sets; connectors (S3); troubleshooting.

### Data Bundles / Starter Bundles
- **Exam section:** S2-admin (13%)
- **Source:** https://help.salesforce.com/s/articleView?id=data.c360_a_starter_data_bundles.htm
- **Type:** Salesforce Doc · **Source confidence:** direct *(verified 2026-07-03)*
  - **In depth:** A starter data bundle is Salesforce's shortcut for standing
    up common sources: instead of hand-building data streams, DLOs, schema,
    and DMO mappings one at a time, you pick a prebuilt definition that wires
    all of that to the Customer 360 Data Model for you. This is the answer
    whenever a scenario asks for the fastest way to ingest CRM or Marketing
    Cloud Engagement data with mapping already done, because the bundle
    collapses the ingestion-plus-harmonization work that would otherwise span
    S3 and S4. The tradeoff is rigidity, which is where the testable gotchas
    live: bundles are configured one at a time and don't support certain field
    types (Phone/URL/Email/Percent for CRM, formula fields for MCE), so if the
    source relies on those you fall back to manual setup. MCE bundles further
    split by engagement channel and generate at the business-unit level,
    reflecting how Marketing Cloud itself is organized.
- **Key facts:**
  - A **starter data bundle** is a **Salesforce-defined data stream definition
    with mapping already done to the Customer 360 Data Model** — it creates the
    data streams, DLOs, schema, **and DMO mappings** for you.
  - **CRM starter bundle:** pick it on the **Data Bundles tab** when creating a
    CRM data stream; configure **one bundle at a time**. Field types
    **Phone/URL/Email/Percent are not supported** via a starter bundle.
  - **MCE starter bundles:** Email Studio, MobileConnect, MobilePush, WhatsApp —
    engagement events grouped by campaign/journey/template; mobile bundles are
    generated at the **business-unit level**. **Formula fields aren't supported**
    for MCE data streams. Email's **Enterprise Profile Attributes** is the one
    user-defined (unmapped) stream.
  - **Standard Data Bundles powered by Data Kits** also exist for installable
    prebuilt mappings.
- **Why it matters for the exam:** "fastest way to ingest CRM/MCE with mapping
  already done" = starter bundle; know the unsupported field types + one-bundle-
  at-a-time limit.
- **Related:** Connectors (S3); Customer 360 Data Model (S4); packaging.

### Data Explorer (validate & view Data 360 data)
- **Exam section:** S2-admin (13%)
- **Source:** https://help.salesforce.com/s/articleView?id=data.c360_a_data_explorer.htm
- **Type:** Salesforce Doc · **Source confidence:** direct *(verified 2026-07-03)*
  - **In depth:** Data Explorer is the platform's built-in inspection surface,
    letting you open DLOs, DMOs, calculated insight objects, and data graphs
    to confirm that ingestion landed correctly and that your formulas produce
    the right values. It exists because Data 360 is largely a pipeline you
    can't otherwise see into, so the exam's diagnose-and-explore objective
    names it as the go-to validation tool. The distinction that scenario
    questions hinge on is which viewer to reach for: Data Explorer for
    inspecting the underlying objects, Profile Explorer for a single unified
    individual's full profile, and the Query Editor or Query API for ad-hoc
    SQL. If a user can't find it, that's a permissions gap an admin must open
    rather than a licensing problem.
- **Key facts:**
  - **Data Explorer** lets you **view and validate** DLOs, DMOs, calculated
    insight objects (CIOs), and data graphs — the go-to tool to confirm data and
    formulas are accurate.
  - Personalize with columns/filters: show **up to 10 columns** (alphabetical by
    default), sort asc/desc.
  - If you don't see it, an **admin must enable Data Explorer permissions**.
  - **Profile Explorer** is a related tool for viewing a unified individual's
    full profile; **Query Editor / Query API** run ad-hoc SQL against Data 360.
- **Why it matters for the exam:** The S2 objective "diagnose and explore data
  using tooling" — Data Explorer is the named validation tool (vs. Profile
  Explorer for unified profiles, Query Editor for SQL).
- **Related:** Reports (S5); calculated insights; troubleshooting.

### Data Spaces: Isolation and Sharing Rules
- **Exam section:** S2-admin (13%)
- **Source:** https://trailhead.salesforce.com/content/learn/modules/data-spaces-in-data-cloud
- **Type:** Trailhead module · **Source confidence:** triangulated
  - **In depth:** A data space is a logical partition inside a single Data 360
    org, letting one tenant serve multiple brands, regions, or business units
    while keeping their downstream work separate. The mental model that
    answers most questions is knowing exactly what is isolated versus shared:
    the raw plumbing (data sources, streams, and DLOs) can surface into many
    spaces, but everything built on top (mappings, identity resolution,
    calculated insights, segments, activations, and data actions) is rebuilt
    per space and never crosses. Crucially, a data space partitions data
    within one region and does not create true residency separation and does
    not unify or merge records, which is why the recurring trap distinguishes
    a data space (brand segregation), a separate org (residency), and Data
    Cloud One (cross-org sharing). Data shares are a distinct mechanism for
    externally sharing objects and underpin Data Cloud One rather than in-org
    isolation.
- **Key facts:**
  - Every org gets **one default data space** (cannot delete; can rename).
  - Only **Data Cloud Architects & System Admins** create/edit/delete spaces.
  - **Isolated per space** (cannot cross): DLO→DMO mapping, identity resolution
    rulesets, calculated insights, segments, activations/targets, data actions.
  - **Shareable across spaces**: Data Sources, Data Streams, DLOs — one DLO can
    surface into multiple spaces, but downstream config is built per space.
  - Data spaces do **NOT** solve true **data residency** (needs a separate
    org/instance) and do **NOT** unify/merge data (they partition).
  - **Data shares** are distinct — define which objects are shared externally
    (underlies Data Cloud One).
- **Why it matters for the exam:** "residency vs brand segregation vs cross-org
  sharing" → space vs new org vs Data Cloud One.
- **Related:** Data Cloud One; Packaging.

### Data Cloud One: Multi-Org Architecture
- **Exam section:** S2-admin (13%)
- **Source:** https://trailhead.salesforce.com/content/learn/modules/data-cloud-one
- **Type:** Trailhead module · **Source confidence:** triangulated
  - **In depth:** Data Cloud One solves the problem of multiple Salesforce
    orgs needing to work off one shared Data 360 without physically moving or
    duplicating the platform. It designates a single home org that actually
    holds the data and shares it out to companion orgs through no-code setup,
    so all companion data lives in the home org's region, which is why it is
    the answer to cross-org sharing scenarios. The sharing unit is the data
    space, tying this concept directly back to isolation rules: you expose
    specific spaces to specific companions rather than sharing everything. The
    consolidation trap the exam loves is the multi-org scenario where several
    orgs already have Data 360; the correct move is to pick one home and
    deprovision the rest, a slow and risky process that candidates must
    recognize as a real cost rather than a quick toggle.
- **Key facts:**
  - One central **home org** shares data/metadata to multiple **companion
    orgs** via no-code setup; companion data resides in the home org's region.
  - **Data spaces are the sharing unit** — companion visibility is controlled by
    sharing specific data spaces.
  - Three scenarios: (1) none have Data 360 → pick any as home; (2) one has it →
    it auto-becomes home; (3) multiple have it → pick ONE home and
    **deprovision** the others (can take months; risks data loss).
  - Add the free **Data Cloud One Companion Org SKU** to companions; the
    companion app exposes only select features.
- **Why it matters for the exam:** Consolidation scenario → choose one home,
  deprovision others (time/risk trap).
- **Related:** Data Spaces; Provisioning (region).

### Governance: The "Day Zero" Allow All Policy
- **Exam section:** S2-admin (13%)
- **Source:** https://trailhead.salesforce.com/content/learn/modules/data-cloud-data-governance-strategies/manage-the-day-zero-policy
- **Type:** Trailhead module · **Source confidence:** direct
  - **In depth:** Every Data 360 org ships with a preactivated Allow All
    policy so that data is usable from the moment it lands, prioritizing
    business continuity over least privilege. The counterintuitive mechanic,
    and the whole point of this card, is that Allow All is a blanket override:
    while it is active, any granular Allow policies you author have no effect
    at all, because universal access already trumps them. This is why the
    signature exam scenario, an admin who built careful policies yet saw
    nothing change, resolves to deleting Allow All rather than rebuilding
    policies. The catch is that the model is ABAC enforced through object-,
    field-, and row-level security, so deleting Allow All with no replacement
    policies revokes access instantly, making the disciplined migration
    sequence (build and test granular first, then cut over) the safe path.
- **Key facts:**
  - All orgs start with a preactivated **"Allow All"** policy (universal access)
    for business continuity.
  - **Trap:** while Allow All is active, granular **Allow** policies have **no
    effect** — you must author granular policies first, then **delete Allow
    All** to enforce least privilege.
  - Migration: audit/design → build/test granular while Allow All active →
    communicate cutover → delete Allow All + activate granular simultaneously →
    validate.
  - Deleting Allow All with no replacement policies **revokes all access
    instantly**.
  - Model = ABAC (Allow + Deny) enforced via OLS/FLS/RLS.
- **Why it matters for the exam:** "built policies but nothing changed" → the
  fix is deleting Allow All, not rebuilding policies.
- **Related:** Permission Sets; Data Spaces.

### Governance: Classification, Tagging, and Consent
- **Exam section:** S2-admin (13%)
- **Source:** https://www.salesforce.com/data/governance/
- **Type:** Salesforce Doc · **Source confidence:** triangulated
  - **In depth:** This card covers how Data 360 knows what its data means and
    how sensitive it is, using preconfigured taxonomies for regimes like
    HIPAA, GDPR, and PII plus custom tags that propagate downstream so
    classifications follow the data. Because these policies are enforced
    platform-wide, the same governance applies whether the data surfaces in
    Agentforce, analytics, or segmentation, rather than being re-implemented
    per feature, which is the systemic design the exam wants you to
    internalize. The distinction scenario questions probe is masking versus
    deletion: dynamic masking happens at query time, is reversible, and never
    alters the stored value, whereas consent-driven actions like honoring
    Do-Not-Share/Sell and data-subject deletion are permanent, rights-based
    changes. The Consent API is the programmatic hook that reads and writes
    consent on the profile object.
- **Key facts:**
  - Preconfigured classification taxonomies (HIPAA, GDPR, PII) + custom
    taxonomy; tags propagate downstream.
  - Policies enforced **platform-wide** (Agentforce, analytics, segmentation) —
    not per-feature.
  - **Dynamic masking** = query-time, reversible, doesn't alter stored data.
  - **Unified Lineage** shows data flow/dependencies.
  - Native consent: honor Do-Not-Share/Sell + data-subject deletion; **Consent
    API** reads/writes the profile object.
- **Why it matters for the exam:** Masking (query-time/reversible) vs deletion/
  consent (permanent/rights-based); policies apply platform-wide.
- **Related:** Day Zero Policy; Permission Sets.

### Communication Capping
- **Exam section:** S2-admin (13%)
- **Source:** https://trailhead.salesforce.com/content/learn/modules/communication-capping-in-data-cloud-quick-look/get-to-know-communication-capping
- **Type:** Trailhead module · **Source confidence:** direct
  - **In depth:** Communication capping limits how many messages an individual
    or a segment receives, serving compliance, fatigue avoidance, and budget
    control at once. Its configuration splits into parameters you define (a
    required channel plus up to two custom dimensions) and fixed functional
    settings (frequency and limit type), a structure that lets you express
    rules like a maximum number of emails per customer per month. The single
    most testable point is the limit type: a Profile limit caps per individual
    record and is the tool for compliance and fatigue, while a Dimension limit
    caps across everyone matching a parameter-value combination and is the
    tool for segment-wide budget. Outcomes land in the CG_Audience_Dropped and
    CG_Audience_Qualified DMOs, and because capping consumes credits it is a
    deliberate, metered feature.
- **Key facts:**
  - Caps communications for compliance, fatigue avoidance, budget optimization.
  - **Enterprise Parameters:** Channel required (SMS/Email/WhatsApp/Push) + up
    to two user-defined parameters.
  - **Functional Parameters (fixed):** Frequency (Daily/Monthly) and Limit Type.
  - **Limit Type — the key fact:** **Profile limit** caps per individual record
    (compliance/fatigue); **Dimension limit** caps across all customers matching
    a parameter-value combo (segment-wide budget).
  - DMOs: **CG_Audience_Dropped** (excluded + reason), **CG_Audience_Qualified**
    (passed).
  - **Consumes credits.**
- **Why it matters for the exam:** Profile-vs-Dimension is the testable
  distinction ("cap per customer" vs "cap total budget across a segment").
- **Related:** Governance; segments/campaigns.

### Packaging and Data Kits: Deployment Rules
- **Exam section:** S2-admin (13%)
- **Source:** https://developer.salesforce.com/docs/data/data-cloud-dev/guide/packages-data-kits.html
- **Type:** Salesforce Doc · **Source confidence:** direct
  - **In depth:** A Data Kit is the container that makes Data 360 metadata
    deployable, holding definitions like calculated insights, profiles, and
    data streams (never row-level data) and managing the dependency order
    among them. The core rule that answers deployment-failure questions is
    that Data 360 components (streams, DMOs, DLOs, CIs) cannot deploy
    standalone; they must ride inside a Data Kit, which is why a naked
    component deployment fails. A second Winter '25+ rule forbids mixing Data
    360 and non-Data 360 metadata in the same package, so the two must be
    split, another common cause of failed deployments. Standard kits handle
    reusable metadata distribution while DevOps kits target CI/CD pipelines,
    and because managed-package metadata is locked for subscribers and Data
    360 sandboxes are metadata-only, testing relies on synthetic data rather
    than real records.
- **Key facts:**
  - A **Data Kit** is nested inside a standard package; holds Data 360 metadata
    definitions (CIs, profiles, data streams), **not row-level data**.
  - **Core rule:** Data Streams, DMOs, DLOs, CIs **cannot deploy standalone** —
    must be packaged inside a Data Kit (which manages dependency ordering).
  - **Winter '25+ rule:** Data 360 metadata and non-Data 360 metadata **cannot
    be in the same package** — separate packages required.
  - Two kit types: **Standard** (reusable metadata distribution) and **DevOps**
    (CI/CD; no post-install setup except re-authenticating connectors).
  - Managed package metadata is **locked** for subscribers (can add, can't
    modify/delete deployed entities).
  - Data 360 **sandboxes are metadata-only** — no row data, no full identity/
    segmentation preview; use synthetic data.
- **Why it matters for the exam:** "why did deployment fail" — standalone
  components + mixed-metadata ban.
- **Related:** Data Spaces; deployment troubleshooting.

### Deploying Data Kits via CLI and Troubleshooting
- **Exam section:** S2-admin (13%)
- **Source:** https://developer.salesforce.com/docs/data/data-cloud-dev/guide/data-cloud-cli-deploy.html
- **Type:** Salesforce Doc · **Source confidence:** direct
  - **In depth:** This card is the operational counterpart to packaging: it
    covers pushing a Data Kit through the command line for repeatable,
    pipeline-driven deployment, which requires the DevOps kit type plus the
    full developer toolchain. The prerequisites that trip real deployments are
    structural rather than permission-based: data spaces must already exist
    with matching prefix names in both source and target, and key qualifier
    files must be deleted before you deploy. Recognizing the named failure
    modes is what the exam rewards, so learn the specific signatures
    (FieldSrcTrgtRelationship missing-reference errors, DLO schema desync, and
    connectors dropping to inactive and needing manual re-authentication after
    deploy) rather than defaulting to a generic check-your-permissions answer.
- **Key facts:**
  - CLI deploy requires the **DevOps** kit type, a deployment connection, VS
    Code + Salesforce CLI + Salesforce Extension Pack (Expanded).
  - Data spaces must exist with **matching prefix names** in source + target
    before deploying; key qualifier files must be **deleted before** deployment.
  - Common failures: `FieldSrcTrgtRelationship` missing-reference errors, DLO
    schema desync, connectors going inactive post-deploy (need manual
    re-auth).
- **Why it matters for the exam:** Recognize named failure modes vs generic
  "check permissions."
- **Related:** Packaging; Data Spaces.

### Troubleshooting Data Ingestion / CRM Connections
- **Exam section:** S2-admin (13%)
- **Source:** https://help.salesforce.com/s/articleView?id=data.c360_a_data_ingestion.htm
- **Type:** Salesforce Doc · **Source confidence:** triangulated
  - **In depth:** When ingestion misbehaves, Data 360 rarely throws a hard
    error — it quarantines the offending rows as "problem records" in a
    dedicated DLO and keeps processing the rest, so the exam expects you to
    know where to look rather than assume a stream simply failed. The two
    surfaces that matter are the problem-record DLO (for row-level data issues
    across structured, SDK, and Ingestion API connectors) and the data stream
    history panel (your primary diagnosis view for run status). For CRM
    connections specifically, failures almost always trace back to a missing
    field on the source object or an integration user without read access, and
    the sequencing rule that trips people up is that you must disable a field
    in Data 360 before deleting it in the CRM, or dependent streams break.
- **Key facts:**
  - Failed records → logged as **"problem records"** in a dedicated problem
    record DLO (all structured/SDK/Ingestion API connectors).
  - CRM connection failures usually = missing fields on the CRM object or the
    integration user lacking read permission.
  - **Before deleting a CRM field**, disable it in Data 360 first to avoid
    dependent-stream errors.
  - **Data stream history panel** = primary diagnosis surface.
- **Why it matters for the exam:** Remediation order + where to look when
  ingestion silently fails.
- **Related:** Packaging; Provisioning.

### Data 360 in a Sandbox (creation & deployment behavior)
- **Exam section:** S2-admin (13%)
- **Source:** https://help.salesforce.com/s/articleView?id=data.c360_a_data_cloud_sandbox_consideration.htm
- **Type:** Salesforce Doc · **Source confidence:** direct *(verified 2026-07-03)*
  - **In depth:** A Data 360 sandbox exists to test metadata and deployments,
    not to mirror live data, and the exam centers on precisely what carries
    over versus what you must rebuild. License match inherits the Data Cloud
    licenses without a refresh but copies only the licenses, so org
    preferences, metadata, and permissions have to be reconstructed. The most
    consequential behavior is that connections replicate without their
    authorization data, arriving inactive, so nothing ingests until you
    re-authenticate, and until that ingest runs the copied components display
    stale production record counts and dates. Other defaults follow the same
    safety-first logic: newly deployed segments default to Don't Publish, data
    graphs and data-action targets need manual activation, a replicated DLO
    can only be deleted back in production, and because these sandboxes follow
    production limits and can't be templated, the practical answer to what
    persists is metadata copies but everything data- and connection-dependent
    must be redone.
- **Key facts:**
  - Production must have Data 360 provisioned first; **license match** inherits
    Data Cloud licenses **without refreshing** the sandbox but copies **only
    licenses — NOT** org preferences, metadata, or permissions (rebuild those).
  - **Connections are replicated but authorization data is NOT** → sandbox
    connections come over **Inactive**; you must re-authenticate to ingest.
  - Copied components that depend on ingestion show **production record counts /
    dates until sandbox data is ingested** (data streams, DLOs, segments,
    identity resolution).
  - **Data graphs** replicate as **Processing** → **Active** after the transform
    runs. Data action targets & transforms replicate but must be **manually
    activated**.
  - A newly deployed **segment defaults to "Don't Publish"** (existing segments
    keep their schedule). A replicated **DLO can't be deleted in the sandbox** —
    only in production.
  - Data 360 sandboxes follow **production limits** (no 200 MB Developer-sandbox
    cap); you **can't** use a sandbox template or create one from a cloned
    sandbox.
  - Deploy changes via **change sets, Salesforce CLI, or Metadata API**; a data
    space that doesn't exist in the target must be **created manually first**.
- **Why it matters for the exam:** "what persists / what to redo after making a
  Data 360 sandbox" — metadata copies but connections are inactive, counts are
  stale until ingest, and new segments won't publish by default.
- **Related:** Packaging & Data Kits; provisioning; data spaces.

---

## S3 — Data Source Connection & Ingestion (18%)

**Verify hands-on:** Streaming-transform rules and data types verified first-hand
(2026-07-03). Non-CRM connector *refresh intervals* remain triangulated —
confirm exact cadences in-org.

### Connector Types and Categories
- **Exam section:** S3-ingestion (18%)
- **Source:** https://www.salesforce.com/data/connectivity/data-cloud-connectors/
- **Type:** Salesforce Doc · **Source confidence:** triangulated
  - **In depth:** A connector is the pluggable adapter that tells Data 360 how
    to reach a given system, and Salesforce ships 270+ of them so that almost
    any source can feed the platform without custom code. What matters
    conceptually is that connectors fall into four families
    (Salesforce-native, Connector Service like MuleSoft and the Ingestion API,
    third-party cloud storage and warehouses, and Zero Copy/BYOL) and that
    each family implies a different ingestion mechanism and directionality
    (in-only, out-only, or bidirectional). The mental model to carry into the
    exam is the chain: every connector defines a Data Source, and under it you
    configure one or more Data Streams that actually pull specific objects, so
    scenario questions are really asking you to name the right family plus
    whether the data is copied in or federated in place.
- **Key facts:**
  - 270+ connectors: native, via MuleSoft, via APIs, via SDKs; support batch,
    streaming, or real-time.
  - Families: (1) **Salesforce** — CRM, MCE, MC Account Engagement (Pardot), MC
    Personalization, B2C Commerce, Omnichannel Inventory, Data Cloud One; (2)
    **Connector Service** — MuleSoft, Ingestion API, Web/Mobile SDK; (3)
    **3rd-party/cloud storage** — S3, GCS, Azure Data Lake, Snowflake, Redshift,
    BigQuery, Google/Facebook Ads; (4) **Zero Copy/BYOL** — Snowflake,
    Databricks, BigQuery, Redshift.
  - Connectors are **directional** (in-only, out-only, or bidirectional).
  - Every connector = a **Data Source**, then one+ **Data Streams** ingest
    specific objects.
- **Why it matters for the exam:** Classify a scenario into the right connector
  family + ingestion mechanism.
- **Related:** Zero Copy Federation.

### Data Streams and the Ingestion Pipeline (DSO → DLO → DMO)
- **Exam section:** S3-ingestion (18%)
- **Source:** https://help.salesforce.com/s/articleView?id=sf.c360_a_data_lake_objects.htm
- **Type:** Salesforce Doc · **Source confidence:** triangulated
  - **In depth:** This card describes the backbone of how raw source data
    becomes usable, harmonized data in Data 360, and it is the single most
    important vocabulary in the ingestion domain. Data flows through a fixed
    hierarchy: the Data Stream is the config, the DSO holds the raw staging
    copy, the DLO materializes it into typed columnar Parquet storage, and the
    DMO is the harmonized view mapped to the canonical Customer 360 model. The
    other half is the three stream categories (Profile, Engagement, Other),
    which are chosen at creation and are immutable because they drive
    downstream behavior like identity resolution and time-series handling;
    Engagement in particular demands an immutable Event Date timestamp, which
    is why picking the wrong category forces a delete-and-recreate rather than
    a simple edit.
- **Key facts:**
  - Hierarchy: **Data Stream** (raw config) → **DSO** (Data Source Object, raw/
    staging) → **DLO** (Data Lake Object, materialized, typed, columnar Parquet)
    → **DMO** (Data Model Object, harmonized view mapped to the canonical model).
  - Every data stream is classified at creation into one of **3 categories
    (cannot change later w/o delete/recreate):**
    - **Profile** — identity/demographic, needs a unique identifier.
    - **Engagement** — behavioral/event data, requires an immutable DateTime
      "Event Date" field with timezone.
    - **Other** — mixed/non-conforming.
- **Why it matters for the exam:** DSO→DLO→DMO vocabulary + which category a
  source belongs to + why category is immutable.
- **Related:** Fully Qualified Keys.

### Ingestion API — Setup and Mechanics
- **Exam section:** S3-ingestion (18%)
- **Source:** https://developer.salesforce.com/docs/data/data-cloud-int/guide/c360-a-ingestion-api.html
- **Type:** Salesforce Doc · **Source confidence:** direct
  - **In depth:** The Ingestion API is the escape hatch for any custom or
    proprietary source that has no prebuilt connector, so it is the answer
    whenever a scenario describes homegrown or non-standard systems pushing
    data in. Its defining trait is flexibility: one connector handles both
    bulk CSV loads and incremental streaming against the same data stream,
    which is unusual among connectors. The setup order is what the exam tests,
    so anchor on the three steps in sequence (a Connected App with OAuth
    first, then the connector created by uploading an OpenAPI Spec YAML that
    declares the schema, then the data stream that exposes the endpoints),
    along with the OAuth scopes that make the ingest calls authorized.
- **Key facts:**
  - One Ingestion API connector supports **both bulk (CSV) and streaming**
    (incremental) against the same data stream.
  - Setup: (1) Connected App + OAuth, (2) Ingestion API connector by uploading
    an **OpenAPI Spec (OAS) YAML** describing schema, (3) Ingestion API data
    stream exposing endpoints.
  - Required OAuth scopes: `cdp_ingest_api`, `api`, `refresh_token`/
    `offline_access`.
- **Why it matters for the exam:** Go-to for "custom/proprietary source with no
  native connector" — know the 3-step order.
- **Related:** Streaming limits; Data Streams.

### Ingestion API — Streaming vs Bulk Limits
- **Exam section:** S3-ingestion (18%)
- **Source:** https://developer.salesforce.com/docs/data/data-cloud-int/references/data-cloud-ingestionapi-ref/c360-a-api-streaming-ingestion.html
- **Type:** Salesforce Doc · **Source confidence:** direct
  - **In depth:** Once you know the Ingestion API supports both modes, the
    exam pivots to the concrete limits that distinguish them, and these
    numeric ceilings are classic multiple-choice bait. Streaming is the
    fire-and-forget path for small incremental payloads processed in roughly
    three-minute micro-batches with tight per-request size and per-delete
    record caps, while bulk is the high-volume CSV path with large per-file
    and per-job limits and a cleanup window for stale jobs. The practical
    mental model is that streaming trades throughput for freshness and bulk
    does the reverse, and both are governed by rate limits (concurrent
    requests and requests per second) that return HTTP 429 when exceeded, plus
    a short delay after ingestion before data becomes queryable.
- **Key facts:**
  - **Streaming:** fire-and-forget micro-batches, processed ~**every 3 min**;
    Insert/Delete/validation ops; **200 KB JSON/request**; **200 records max**
    per delete.
  - **Bulk (CSV):** **150 MB/file**, **100 files/job**, 1 file uploaded per job
    at a time; incomplete jobs auto-deleted after **7 days**.
  - Rate limits: **5 concurrent requests**, **250 streaming requests/sec**;
    HTTP 429 = back off.
  - Allow **≥30 seconds** after ingestion before data is queryable.
- **Why it matters for the exam:** Numeric limits are classic MC bait —
  memorize the streaming-vs-bulk table.
- **Related:** Ingestion API setup; batch-vs-streaming cadence.

### Batch vs Streaming Ingestion — Refresh Cadence
- **Exam section:** S3-ingestion (18%)
- **Source:** https://admin.salesforce.com/blog/2024/data-cloud-full-stream-ahead
- **Type:** Salesforce Doc/blog · **Source confidence:** triangulated
  - **In depth:** This card generalizes the streaming-vs-bulk tradeoff beyond
    the Ingestion API into a decision framework about data freshness versus
    load size across all connectors. Batch ingestion favors high-throughput
    periodic loads like nightly or weekly backfills, while streaming delivers
    near-real-time micro-batches suited to CDC, webhooks, and event streams,
    and the common hybrid pattern is to bulk-load history once and then stream
    ongoing changes. The exam-critical detail is the Salesforce CRM
    connector's baseline behavior: incremental delta refreshes roughly every
    ten minutes with an automatic bi-weekly full refresh, plus an optional
    streaming mode; when a question says sub-minute event freshness choose
    streaming, and when it says one-time historical load choose batch.
- **Key facts:**
  - **Batch**: lower cadence, higher throughput; historical backfills + periodic
    large loads (nightly/weekly/monthly).
  - **Streaming**: near-real-time micro-batches (~3 min for Ingestion API);
    CDC/webhooks/event streams.
  - Hybrid: bulk-load history once, then stream ongoing changes.
  - **Salesforce CRM connector:** incremental (delta) refresh ~**every 10 min**;
    full refresh automatically **bi-weekly**; a **streaming mode** exists (no
    periodic full-refresh interval configurable in that mode).
  - Custom schedules: 5/10/30 min, hourly, daily, weekly, monthly (connector
    dependent).
- **Why it matters for the exam:** "sub-minute freshness from events" vs
  "one-time historical load" → streaming vs batch; know CRM's ~10-min/bi-weekly
  baseline.
- **Related:** Ingestion API limits.

### Zero Copy Data Federation — Query vs File Federation
- **Exam section:** S3-ingestion (18%)
- **Source:** https://trailhead.salesforce.com/content/learn/modules/data-cloud-with-zero-copy/get-started-with-zero-copy-data-federation
- **Type:** Trailhead module · **Source confidence:** direct
  - **In depth:** Zero Copy is Data 360's alternative to ingestion: instead of
    copying data in, it reads external data in place using the Apache Iceberg
    open table format, and it works in both directions (federation lets Data
    360 read external data, sharing lets external systems read Data 360 data).
    The high-yield distinction is the two federation styles and where the
    compute runs. Query Federation pushes the work onto the external system's
    engine over JDBC, holds results only in memory, costs more, and supports
    optional caching that trades cost for speed and unlocks trigger-based
    features; File Federation instead uses Data 360's own compute to read
    external storage directly, costs less, is always live with no caching,
    natively supports triggers, and is recommended when the source supports
    it. Reasoning about compute location, cost, caching, and trigger support
    is exactly how the exam frames these comparison questions.
- **Key facts:**
  - Two capabilities: **data federation** (Data 360 reads external data w/o
    copying) + **data sharing** (external system reads Data 360 data) =
    bidirectional zero copy.
  - **Query Federation:** query runs on the **external system's compute** (via
    JDBC); results in memory, discarded after. Higher cost. All Zero-Copy
    systems support it. Optional **caching** (trades cost for speed, enables
    trigger-based features).
  - **File Federation:** **Data 360's own compute** reads external storage
    directly (bypasses external warehouse compute). Lower cost. For large
    datasets in **Apache Iceberg**. Not all systems support it, but "recommended
    when supported"; natively supports trigger-based features; **always live, no
    caching**.
  - Underlying open table format: **Apache Iceberg**.
- **Why it matters for the exam:** The query-vs-file tradeoff (compute location,
  cost, caching, trigger support) is a high-yield comparison.
- **Related:** Zero Copy setup; connector types.

### Zero Copy — Setup, Sources, When to Use vs Ingestion
- **Exam section:** S3-ingestion (18%)
- **Source:** https://trailhead.salesforce.com/content/learn/modules/data-cloud-with-zero-copy/explore-use-cases-for-zero-copy-data-federation
- **Type:** Trailhead module · **Source confidence:** direct
  - **In depth:** This card turns Zero Copy from a mechanism into a design
    choice, which is how the certification frames it in scenarios. The setup
    follows a plan-connect-stream arc (identify use cases, gather connection
    details, create the federation connection as query or file, then create
    the data stream as live query or caching), and it is supported by the
    major Zero Copy Partner Network warehouses like Snowflake, BigQuery,
    Redshift, and Databricks. The decision boundary is what to memorize:
    choose Zero Copy when data must stay in place for governance, cost, or
    freshness reasons and the source is a warehouse or Iceberg store, but
    choose ingestion when the data must be materialized inside Data 360 to get
    the full DLO/DMO transform and activation pipeline. Note that Zero Copy
    still consumes credits, so it is not free simply because nothing is
    copied.
- **Key facts:**
  - Setup: plan use cases → collect connection info → create federation
    connection (query or file) → create data stream (live query or caching).
  - Supported partners: **Snowflake, BigQuery, Redshift, Databricks** (Zero Copy
    Partner Network); works with other compatible systems too.
  - Use Zero Copy for enrichment/personalization/AI grounding/campaigns using
    live external data without duplication; **consumes credits**.
  - **Decision boundary:** Zero Copy when data must stay in place
    (governance/cost/freshness) and source is Iceberg/warehouse; ingestion when
    data must be materialized in Data 360 for full DLO/DMO transform + activation.
- **Why it matters for the exam:** "Zero Copy vs ingest" scenario.
- **Related:** Query-vs-File federation; connectors.

### Fully Qualified Keys (FQKs)
- **Exam section:** S3-ingestion (18%)
- **Source:** https://trailhead.salesforce.com/content/learn/modules/fully-qualified-keys-in-data-cloud-quick-look/learn-about-fully-qualified-keys
- **Type:** Trailhead module · **Source confidence:** direct
  - **In depth:** A Fully Qualified Key solves a specific collision problem
    that arises the moment you harmonize multiple sources into one DMO: two
    different systems can legitimately reuse the same literal record ID, and
    without disambiguation their records would incorrectly merge. The FQK
    fixes this by pairing the source key with a key qualifier (for example a
    Contact ID tagged with a CRM qualifier), so joins must match on both the
    value and the qualifier. The best-practice mental model is to add a
    qualifier on every DLO primary and foreign key whenever you merge sources,
    configured on the Data Lake Objects tab after the stream exists; this is
    why the exam's classic scenario, records mismatching after merging two
    sources, resolves to a missing FQK.
- **Key facts:**
  - FQK = **source key** (e.g. Contact ID) + **key qualifier** (e.g. "CRM").
  - Prevents **key collisions** when multiple streams from different sources
    harmonize into the **same DMO** (two sources reusing the same literal ID).
  - Joins match on **both** foreign key value **and** qualifier.
  - Best practice: configure a qualifier on **every DLO primary/foreign key**
    when merging multiple sources. Configured on the **Data Lake Objects tab**
    after the stream is created.
- **Why it matters for the exam:** Definitional Q + "why did records mismatch
  after merging two sources" (missing FQK).
- **Related:** DSO/DLO/DMO pipeline.

### Batch Data Transforms
- **Exam section:** S3-ingestion (18%)
- **Source:** https://trailhead.salesforce.com/content/learn/modules/batch-data-transforms-in-data-cloud-quick-look
- **Type:** Trailhead module · **Source confidence:** triangulated
  - **In depth:** Batch Data Transforms are Data 360's scheduled, visual way
    to reshape and combine data at the DLO layer before harmonization, using a
    drag-and-drop node editor for filtering, joining, aggregating, and
    formulas that reads one or more DLOs and writes a target DLO. They are the
    right tool for large-volume, complex, multi-source work where sub-minute
    freshness is not required, which is precisely what contrasts them with
    streaming transforms. The gotchas the exam probes are the constraints: the
    same object cannot be both an input and an output, multiple output nodes
    must share one write mode, and a newly created transform may take up to
    thirty minutes before it first writes.
- **Key facts:**
  - Visual drag-and-drop node editor (filter/join/aggregate/formula) combining
    one+ DLOs into a target DLO, run on a **schedule** (or manually).
  - Constraints: same object **can't be both input and output**; multiple output
    nodes must use the **same write mode**; new transform can take **up to 30
    min** before writing.
  - For large-volume, complex, multi-source joins/aggregations where sub-minute
    freshness isn't needed.
- **Why it matters for the exam:** Contrast vs streaming transforms; know the
  input/output + write-mode gotchas.
- **Related:** Streaming Data Transforms.

### Streaming Data Transforms
- **Exam section:** S3-ingestion (18%)
- **Source:** https://help.salesforce.com/s/articleView?id=data.c360_a_streaming_transform_considerations.htm
- **Type:** Salesforce Doc · **Source confidence:** direct *(verified 2026-07-03)*
  - **In depth:** Streaming Data Transforms apply SQL to records as they
    arrive rather than on a schedule, reading a source DLO and writing a
    target DLO in near-real time, which makes them the low-latency counterpart
    to batch transforms. The reason this card is so rule-heavy is that
    near-real-time processing imposes strict constraints that generate a wave
    of why-did-this-fail-validation exam questions: the target must be a DLO
    created manually in the UI (not a stream-auto-created one) and must be
    Active with no data stream still attached, every SQL statement needs a
    primary key mapping (plus the Event DateTime for Engagement targets),
    subqueries are unsupported, and key-qualifier fields from an FQK cannot be
    used as source or destination. Round this out with the operational facts
    that the logic is immutable after saving (delete and recreate to change
    it), the initial sync can take up to thirty minutes, and when overlapping
    transforms write the same field the last one to run wins in indeterminate
    order.
- **Key facts:**
  - Reads a **source DLO**, applies SQL (calc values, string/date ops, drop
    cols, optional WHERE) to records **as they arrive**, writes to a target DLO
    in near-real time. **Subqueries are NOT supported.**
  - **Target must be a DLO created manually in the UI** — not a stream
    auto-created DLO; target DLO must be **Active** to be selectable. A DLO with
    a data stream still attached **can't** be a transform target.
  - **All SQL statements require a primary key** mapping; if the target is
    **Engagement**-categorized, you must also map the **Event DateTime** field.
  - **Can't be modified after saving** — delete and recreate to change logic.
  - **Can't use a key-qualifier field** (from a fully qualified key) as a source
    or destination — doing so fails validation.
  - Takes **up to 30 minutes** for the initial sync, then picks up new/updated
    records within a few minutes; to stop it, **delete** it.
  - If multiple transforms write the same field on the same target PK, the
    **last one to run wins** (indeterminate order) — avoid overlap.
- **Why it matters for the exam:** UI-created-DLO-target + PK-required +
  no-subqueries + key-qualifier-not-allowed rules distinguish streaming
  transforms and appear as "why did this fail validation" questions.
- **Related:** Batch Data Transforms; fully qualified keys.

### Amazon S3 Connector — Data Source Considerations
- **Exam section:** S3-ingestion (18%)
- **Source:** https://developer.salesforce.com/docs/data/data-cloud-int/guide/c360-a-awss3-connector.html
- **Type:** Salesforce Doc · **Source confidence:** triangulated
  - **In depth:** The Amazon S3 connector is a batch-oriented file ingestion
    path that polls a bucket on a schedule and pulls newly arrived files,
    auto-detecting data types, delimiters, and datetime formats while
    supporting wildcards and compressed archives. Because it operates on files
    at scale, the two considerations the exam fixates on are operational
    limits rather than concepts: a per-object ceiling of 100 million rows or
    50 GB (whichever comes first), which means very large datasets must be
    partitioned across multiple objects, and the requirement to allowlist Data
    360's IP addresses on the source bucket so the platform can actually reach
    it. Also remember that CSV files need headers plus at least one data row
    to be ingested.
- **Key facts:**
  - **Batch** connection; auto-retrieves new files on schedule (file
    notifications for unstructured).
  - Volume limit: **100M rows or 50 GB per object**, whichever first — large
    datasets need partitioning.
  - Auto-detects data types/delimiters/datetime; supports wildcards + compressed
    files (ZIP/GZ). CSV needs headers + ≥1 data row.
  - **Must allowlist Data 360's IP addresses** on the source bucket.
- **Why it matters for the exam:** 100M/50GB ceiling + IP allowlist as concrete
  data-source considerations.
- **Related:** Connectors; Ingestion API limits.

### Data Types & Field Types (incl. leading-zeros trap)
- **Exam section:** S3-ingestion (18%)
- **Source:** https://help.salesforce.com/s/articleView?id=data.c360_a_data_types.htm
- **Type:** Salesforce Doc · **Source confidence:** direct *(verified 2026-07-03)*
  - **In depth:** Data types govern how each ingested field is stored and
    later mapped, and this card is dense with exam traps precisely because a
    wrong type silently corrupts data instead of erroring out. The signature
    trap is leading zeros: an identifier like 00123 must be typed as Text,
    because Number applies numeric scale and precision that strips the zeros
    and turns out-of-range or non-numeric values into null. Two structural
    rules reinforce this, that field data types are immutable once a DLO is
    created and that a DLO field's type must match its DMO field's type with
    the sole exception of Number-to-Text, so choosing the type correctly up
    front is permanent. It also helps to know that Email, Phone, URL, and
    Percent are just Text or Number underneath and are not format-validated,
    and that Boolean cannot serve as a primary key.
- **Key facts:**
  - Data 360 data types: **Boolean, Currency, Date_Only, Date (Datetime/
    Timestamp), Email, Number, Percent, Phone, Text, URL.**
  - **Leading-zeros trap (high-yield):** an ID like `00123` must be **Text**, not
    **Number** — Number stores scale 18 / precision 38 and drops leading zeros;
    out-of-range or non-numeric values are stored as **null**.
  - Email/Phone/URL/Percent are **modeled on** Text/Number and are **not format-
    validated** — you pick them so a field is *treated as* that type.
  - **Immutable:** after a DLO is created you **can't change its field data
    types** (and, from S3, can't change the data-stream category either).
  - **Mapping rule:** a DLO field's type must match the DMO field's type — the
    **only exception is Number → Text.** Boolean can't be a primary key.
  - Text max supported length **31,072 chars** (soft limit). Date-only ignores
    any time part; abbreviated zones (CST) are ambiguous/unsupported.
- **Why it matters for the exam:** The "which field type preserves leading
  zeros?" question (answer: Text) + the immutability and Number→Text mapping
  exception are classic distractor targets.
- **Related:** DSO/DLO/DMO pipeline; data modeling best practices (S4).

### Formula Fields at Ingestion
- **Exam section:** S3-ingestion (18%)
- **Source:** https://help.salesforce.com/s/articleView?id=sf.c360_a_considerations_formula_fields.htm
- **Type:** Salesforce Doc · **Source confidence:** direct *(verified 2026-07-03)*
  - **In depth:** Formula fields let you compute derived or hard-coded values
    as records flow into a data stream, so the calculation happens during
    ingestion rather than as a separate downstream job. The exam trap that
    defines this card is temporal: adding or changing a formula only affects
    data going forward and is never retroactively applied to records already
    ingested, though formulas do recompute on an incremental or full refresh
    if the underlying record actually changed since the last refresh. Beyond
    that timing behavior, the syntax is deliberately unforgiving in ways
    questions exploit, since raw fields are referenced with the case-sensitive
    sourceField prefix and a single-quoted header label, and mismatched
    quoting or casing breaks the formula.
- **Key facts:**
  - Formula fields are added to a data stream (hard-coded or derived from other
    fields) and computed **during ingestion**.
  - **Trap:** adding/changing a formula applies to **new data going forward** —
    it is **not retroactively applied to historical records** already ingested.
    Formulas do recalculate on incremental/full refresh **if the record
    changed** since the last refresh.
  - Syntax: reference raw fields as **`sourceField['Header Label']`** —
    **case-sensitive** for both the `sourceField` prefix and the header label;
    header must be in **single quotes**; don't mix single/double quotes in one
    term; escape regex delimiters with `\`.
- **Why it matters for the exam:** "why doesn't my new formula field populate old
  records?" (only applies going forward) is a known exam trap.
- **Related:** Data types; batch/streaming transforms.

---

## S4 — Harmonization & Unification (17%)

**Most confusable section.** Nail: match rule vs reconciliation rule; DLO vs
DMO; Unified Individual vs Unified Link; deterministic vs "probabilistic."

### Customer 360 Data Model — Overview and Subject Areas
- **Exam section:** S4-harmonization (17%)
- **Source:** https://developer.salesforce.com/docs/data/data-cloud-dmo-mapping/guide/c360dm-model-data.html
- **Type:** Salesforce Doc · **Source confidence:** direct
  - **In depth:** The Customer 360 Data Model is the standardized schema that
    everything downstream in Data 360 depends on: raw ingested data lands in
    Data Lake Objects (DLOs), but segmentation, identity resolution, and
    activation all operate on the conformed Data Model Objects (DMOs) that
    this model defines. Think of it as a shared vocabulary that lets data from
    wildly different sources — CRM, marketing, commerce — describe the same
    real-world concepts the same way. Subject areas (Party, Engagement,
    Loyalty, Privacy, Product, Sales Order, Case) are just logical groupings
    that bundle related DMOs so the model stays navigable, while Data Bundles
    are Salesforce-provided shortcuts that pre-wire common source objects to
    the right standard DMOs. The distinction scenario questions hinge on is
    the layering: subject area is a category, a DMO is a mapped standardized
    object, and a DLO is the raw table it draws from.
- **Key facts:**
  - The **Customer 360 Data Model** is the standard framework unifying raw DLO
    data into a single actionable view.
  - Organized into **subject areas**: Party, Engagement, Loyalty, Privacy,
    Product, Sales Order, Case — each bundling related DMOs.
  - **Data Bundles** = Salesforce-defined stream definitions auto-mapping common
    source objects (CRM, MCE) to standard DMOs.
  - **Standard DMOs** (pre-built) vs **custom DMOs** (org-specific).
- **Why it matters for the exam:** Vocabulary (subject area vs DMO vs DLO).
- **Related:** Mapping; required DMOs.

### Data Model Objects (DMOs) — Structure and Standard Set
- **Exam section:** S4-harmonization (17%)
- **Source:** https://trailhead.salesforce.com/content/learn/modules/customer-360-data-model-for-customer-data-platform/get-to-know-data-model-objects
- **Type:** Trailhead module · **Source confidence:** direct
  - **In depth:** A DMO is a standardized template describing an instance of a
    thing or an action — the conformed "target" shape that raw DLO data gets
    mapped into so it becomes usable across the platform. DMOs relate to each
    other through keys: a Primary Key uniquely identifies each record, while a
    Foreign Key (typically a customer ID) is the shared link that stitches
    records together across sources and objects. The single most exam-critical
    fact here is the set of five DMOs that identity resolution cannot run
    without — Individual, Party Identification, Contact Point Email, Contact
    Point Phone, and Contact Point Address — because match rules operate on
    exactly these objects. Keep the DMO-versus-DLO framing sharp: the DLO is
    raw ingested data, the DMO is the mapped, harmonized version, and prefixes
    (ssot__ for legacy standard, std__ for newer) simply signal a
    Salesforce-provided object.
- **Key facts:**
  - A DMO describes an instance of a thing/action — a standardized template.
  - The **5 DMOs required for identity resolution: Individual, Party
    Identification, Contact Point Email, Contact Point Phone, Contact Point
    Address.**
  - **Primary Key** uniquely identifies a record; **Foreign Key** is the common
    link (customer ID) building relationships across sources.
  - Prefixes: legacy standard DMOs use `ssot__`; newer use `std__`.
- **Why it matters for the exam:** Name the 5 required DMOs; DMO (mapped) vs DLO
  (raw).
- **Related:** Model overview; legacy DMOs.

### Mapping DLOs to DMOs (Harmonization Mechanics)
- **Exam section:** S4-harmonization (17%)
- **Source:** https://trailhead.salesforce.com/content/learn/modules/data-and-identity-in-salesforce-cdp/map-required-objects
- **Type:** Trailhead module · **Source confidence:** direct
  - **In depth:** Harmonization is the concrete act of mapping raw DLO fields
    onto DMO fields, and it is the step that turns siloed source data into the
    unified model everything else relies on. The mechanics are directional and
    disciplined: each DMO field draws from exactly one DLO source field, and
    any stream carrying customer information must map something to the
    Individual DMO's Individual ID — otherwise identity resolution has no
    anchor to match on. Contact Point objects each carry their own primary key
    plus a Party foreign key pointing back to Individual.ID, and the Party
    Identification DMO holds alternative identifiers (loyalty numbers,
    licenses, LinkedIn IDs) in a many-to-one relationship to that same
    Individual. Because a wrong DLO-to-DMO mapping is the most common
    real-world failure, scenario questions love to test whether you know that
    the fix for "identity resolution isn't matching" often lives here in the
    mapping, not in the match rules.
- **Key facts:**
  - **Harmonization = mapping DLO fields into DMOs.** A DMO field maps to only
    one DLO source field.
  - Every stream with customer info must map a field to the **Individual DMO's
    Individual ID** for identity resolution to work.
  - Contact Point objects each have their own PK + a **Party** foreign key back
    to Individual.ID.
  - **Party Identification DMO** holds custom identifiers (loyalty #, license,
    LinkedIn ID), Many-to-One back to Individual.ID.
  - **Wrong DLO→DMO mapping is the single most common implementation mistake.**
- **Why it matters for the exam:** Harmonization = the mapping step; "which field
  must be mapped for identity resolution."
- **Related:** Data model; FQK; required DMOs.

### Fully Qualified Keys in Harmonization
- **Exam section:** S4-harmonization (17%)
- **Source:** https://trailhead.salesforce.com/content/learn/modules/fully-qualified-keys-in-data-cloud-quick-look/learn-about-fully-qualified-keys
- **Type:** Trailhead module · **Source confidence:** direct
  - **In depth:** A Fully Qualified Key pairs a record's key with a
    source-identifying qualifier so that when multiple streams feed the same
    DMO, identical-looking key values from different systems don't
    accidentally collide or fail to join. It is the same mechanic introduced
    under ingestion (S3), but here it matters because harmonization funnels
    many sources into one target object, and joins must use both the key and
    its qualifier to stay correct. The exam angle is diagnostic: when a
    question describes records that over-joined (unrelated records merged) or
    under-joined (records that should have linked didn't), the FQK is
    frequently the lever, because it controls whether cross-source keys are
    treated as the same entity or kept distinct.
- **Key facts:** *(see S3 FQK note — same mechanic, applied at harmonization:
  key + qualifier prevents cross-source collisions when multiple streams feed
  one DMO; joins use both.)*
- **Why it matters for the exam:** "why did records over/under-join" scenario.
- **Related:** DLO→DMO mapping; data modeling best practices.

### Identity Resolution — Overview and Rulesets
- **Exam section:** S4-harmonization (17%)
- **Source:** https://help.salesforce.com/s/articleView?id=sf.c360_a_identity_resolution_ruleset.htm
- **Type:** Salesforce Doc · **Source confidence:** direct *(verified 2026-07-03)*
  - **In depth:** An Identity Resolution Ruleset is the container that
    orchestrates unification: it bundles the match rules that decide which
    records represent the same entity with the reconciliation rules that
    decide which conflicting value wins, and its designated primary DMO
    determines what actually gets unified — individuals, accounts, leads, or
    households. This container-versus-components framing is the heart of the
    section's most confusable trio, so keep it straight: the ruleset holds
    both, match rules answer "same person?", reconciliation rules answer
    "whose value?". Rulesets are capped at two per data model per data space
    (typically one for Individual, one for Account) and can run on a schedule
    or in real time, with the two modes differing in timing and how they
    interact with other features. Each run produces or refreshes Unified
    Individual and Unified Link records and emits a Resolution Summary with
    match statistics you use to evaluate whether the rules are behaving.
- **Key facts:**
  - An **Identity Resolution Ruleset** bundles **match rules** (how to match) +
    **reconciliation rules** (which value wins). The ruleset's **primary DMO**
    determines which records are unified (accounts, individuals, leads, or
    households).
  - Limit: up to **2 rulesets per data model per data space** (typically one for
    Individual, one for Account).
  - Ruleset runs are **scheduled or real-time** (they differ in when they run and
    how they interact with other features).
  - Running a ruleset produces/updates **Unified Individual** and **Unified Link
    Individual** records; a **Resolution Summary** + processing history show
    match statistics after each run.
- **Why it matters for the exam:** Ruleset (container) vs match rule vs
  reconciliation rule — the confusable trio.
- **Related:** Match rules; reconciliation rules; unified individual.

### Match Rules — Deterministic Matching Mechanics
- **Exam section:** S4-harmonization (17%)
- **Source:** https://trailhead.salesforce.com/content/learn/modules/data-and-identity-in-salesforce-cdp/select-identity-resolution-match-rules
- **Type:** Trailhead module · **Source confidence:** direct
  - **In depth:** Match rules are the logic that decides whether two records
    point to the same real person, and each rule is built from an Object plus
    a Field plus a Match Method applied to a mapped, eligible object such as
    Individual, a Contact Point, or Party Identification. All three match
    methods are deterministic — Exact requires identical values (good for a
    loyalty ID), Normalized ignores formatting differences (email, phone,
    address), and Fuzzy tolerates typos but is limited to First Name — so
    "Fuzzy" is emphatically not probabilistic. The Boolean structure is a
    classic trap: criteria within a single rule are AND'd together, but a
    record needs to satisfy only one rule out of the set, because rules are
    OR'd, and each ruleset allows up to ten rules with up to ten criteria
    each. The practical trade-off the exam tests is that adding more or looser
    rules increases consolidation but raises the risk of false-positive
    merges.
- **Key facts:**
  - Match rule = **Object + Field + Match Method**. Eligible objects: Individual,
    Contact Point Address/App/Email/Phone/Social, Party Identification (must be
    mapped first).
  - **Three match methods, all deterministic:** **Exact** (identical, e.g.
    loyalty ID), **Fuzzy** (typo-tolerant — **First Name only**), **Normalized**
    (same value regardless of formatting — email/phone/address).
  - Limits: up to **10 match rules/ruleset**, each up to **10 match criteria**.
  - Records need to satisfy **only ONE** match rule (rules OR'd); criteria within
    a rule are AND'd.
  - More/looser rules = more consolidation but higher false-positive risk.
- **Why it matters for the exam:** Highest-yield S4 topic — pick exact vs fuzzy
  vs normalized; reason about limits.
- **Related:** Reconciliation; rulesets; deterministic vs probabilistic.

### Deterministic vs Probabilistic Matching
- **Exam section:** S4-harmonization (17%)
- **Source:** https://www.redpointglobal.com/blog/deterministic-probabilistic-matching-identity-resolution/
- **Type:** Third-party guide · **Source confidence:** triangulated
  - **In depth:** This distinction exists mainly as a distractor trap:
    deterministic matching relies on explicit shared identifiers and delivers
    high confidence when data is clean, whereas probabilistic matching uses
    statistical inference to guess at matches when identifiers are missing,
    trading certainty for coverage and requiring large data volumes. The
    load-bearing fact for the exam is that all of Data 360's native match
    methods — Exact, Fuzzy, and Normalized — are deterministic and rule-based;
    the platform ships with no out-of-the-box probabilistic or ML
    confidence-score matching engine. The mistake questions are engineered to
    catch is equating "Fuzzy" with "probabilistic": Fuzzy still applies a
    fixed rule to tolerate typos, so any answer describing Data 360 as doing
    probabilistic matching is wrong.
- **Key facts:**
  - Deterministic = explicit identifiers, high confidence, needs clean data.
  - Probabilistic = statistical/fuzzy inference when identifiers are absent;
    trades certainty for coverage; needs large volumes.
  - **Data 360's native match rules (Exact/Fuzzy/Normalized) are all
    deterministic** — "Fuzzy" tolerates typos but is still rule-based, **NOT
    probabilistic**. Data 360 has no out-of-the-box probabilistic/ML confidence-
    score matching engine.
- **Why it matters for the exam:** "probabilistic matching" is a distractor for
  Data 360 match rules — don't confuse fuzzy with probabilistic.
- **Related:** Match rules; rulesets.

### Reconciliation Rules — Resolving Conflicting Values
- **Exam section:** S4-harmonization (17%)
- **Source:** https://trailhead.salesforce.com/content/learn/modules/data-and-identity-in-salesforce-cdp/select-identity-resolution-match-rules
- **Type:** Trailhead module · **Source confidence:** direct
  - **In depth:** Once match rules have determined that several source records
    describe the same individual, reconciliation rules decide which single
    value from those disagreeing sources gets written to each field of the
    Unified Individual. There are three strategies to choose between — Last
    Updated / Most Recent, Most Frequent, and Source Sequence / Source
    Priority (rank sources and take the highest-ranked one that has data) —
    and they can be set at the object level by default but overridden per
    field, so one unified record can use recency for one attribute and source
    priority for another. Critically, reconciliation never deletes or
    overwrites the underlying source data and never pushes changes back to
    connected source systems; the originals stay intact and remain traceable
    through the Unified Link. The exam's clean summary to hold onto is that
    matching decides which records are the same while reconciliation decides
    which value wins, and you should be ready to pick, say, "source priority"
    over "most recent" based on the scenario's intent.
- **Key facts:**
  - Decide which single value writes to the **Unified Individual** field when
    matched sources disagree.
  - **Three types:** **Last Updated / Most Recent**, **Most Frequent**, **Source
    Sequence / Source Priority** (rank sources, take highest-ranked with data).
  - Rules are set at the **object level** by default and can be **overridden by
    field-specific reconciliation rules** — so different fields on the same
    unified record can use different logic. *(Verified first-hand 2026-07-03.)*
  - Does **NOT** delete/overwrite source data, does **NOT** update connected
    source systems — originals stay, traceable via Unified Link.
- **Why it matters for the exam:** Match = which records are the same;
  reconciliation = which value wins. Pick "source priority" vs "most recent."
- **Related:** Match rules; unified individual.

### Unified Individual, Unified Link, and the Identity Graph
- **Exam section:** S4-harmonization (17%)
- **Source:** https://trailhead.salesforce.com/content/learn/modules/data-and-identity-in-salesforce-cdp/get-to-know-unified-profiles
- **Type:** Trailhead module · **Source confidence:** direct
  - **In depth:** Unification in Data 360 is deliberately non-destructive, and
    understanding its three layers is what separates right from wrong answers
    here: the Individual DMO holds raw source records with no awareness of
    unification, the Unified Individual DMO holds the final reconciled
    attributes, and the Unified Link Individual DMO is the bridge that ties
    each source Individual to its Unified Individual so lineage can always be
    traced back. Together the Unified Individual and its Unified Link records
    form the Unified Profile, related one-to-one per source record. The mental
    model the exam rewards is "key ring, not golden record" — the unified
    profile links source identities without collapsing or destroying them,
    which keeps sources addressable and makes the approach faster and more
    scalable than classic MDM. Because profiles are dynamic, they improve
    automatically as source data changes or rulesets re-run, and the identity
    graph is simply the network of linked identifiers traced through those
    Unified Link objects.
- **Key facts:**
  - Three layers: **Individual DMO** (raw source, no unification awareness);
    **Unified Link Individual DMO** (bridge linking each source Individual to its
    Unified Individual — enables tracing unified → all sources); **Unified
    Individual DMO** (final reconciled attributes, lineage lives in the Link).
  - Unified Individual ↔ Unified Link have a 1:1 (per source record) relationship
    — together = the **Unified Profile**.
  - **Unified profile ≠ golden record**: it's a "key ring" linking source
    identities **without collapsing/destroying** them — sources stay intact and
    addressable (faster/more scalable than classic MDM).
  - Unified profiles are **dynamic** — improve automatically as source data
    updates or rules re-run.
  - **Identity graph** = the network of linked identifiers traced through Unified
    Link objects.
- **Why it matters for the exam:** Unified Individual vs Unified Link; "unified ≠
  golden record" (source preserved).
- **Related:** Reconciliation; creating unified records.

### Creating Unified Individual Records — End-to-End
- **Exam section:** S4-harmonization (17%)
- **Source:** https://trailhead.salesforce.com/content/learn/modules/data-and-identity-in-salesforce-cdp/create-unified-individual-records
- **Type:** Trailhead module · **Source confidence:** direct
  - **In depth:** This card ties the whole section together as an ordered
    pipeline: you ingest data, map and model it by harmonizing DLOs into DMOs,
    execute an identity resolution ruleset, and only then does a Unified
    Profile become available for segmentation and activation. The sequencing
    is the point most scenario questions probe, because the steps are
    dependent rather than interchangeable — harmonization must be correct
    before identity resolution can produce meaningful results, and no amount
    of match-rule tuning can rescue bad mappings or broken keys. The pre-work
    (inventorying sources, identifying each system's unique IDs, assessing
    data quality, and mapping the customer journey to the data you need)
    reinforces that unification is a designed process, so when asked "what
    must happen before identity resolution can run?" the answer is correct
    harmonization, not more rules.
- **Key facts:**
  - Pipeline: **(1) Ingest → (2) Map/Model (harmonize DLO→DMO) → (3) Identity
    Resolution ruleset execution → (4) Unified Profile available** for
    segmentation/activation.
  - Pre-work: inventory sources, identify unique IDs per system, assess data
    quality, map the journey to needed data.
  - **Harmonization must be correct before identity resolution can run
    meaningfully** — bad mapping/keys can't be fixed by tuning match rules.
- **Why it matters for the exam:** Sequencing — "what must happen before identity
  resolution can run?"
- **Related:** Mapping; match rules; reconciliation; FQK.

### Data Modeling Best Practices for Harmonization
- **Exam section:** S4-harmonization (17%)
- **Source:** https://architect.salesforce.com/docs/architect/fundamentals/guide/data360_integration_patterns_and_practices
- **Type:** Salesforce Doc · **Source confidence:** triangulated
  - **In depth:** This card reframes harmonization as a deliberate design
    exercise rather than a click-through, which is exactly the mindset the
    exam expects. Good data design precedes mapping: you inventory each source
    fully — schema, attributes, sample values, edge cases, primary and foreign
    keys, API names — before you connect a single field. The mapping checklist
    then works through object-type category (Profile, Engagement, or Other),
    DLO-to-DMO best practices, object relationships and their cardinality,
    data-type compatibility, and satisfaction of the required DMO mappings.
    Cardinality is the detail most likely to surface in questions — for
    example a Product ID foreign key on a Sales Order pointing to the Product
    ID primary key on a Product Catalog — so be ready to reason about how
    objects relate, not just that they map.
- **Key facts:**
  - Data Design precedes mapping: full inventory (schema, attributes, sample
    values, edge cases, PK/FK, API names) per source.
  - Mapping checklist: object type category (Profile/Engagement/Other), DLO×DMO
    best practices, object relationships (cardinality), data-type compatibility,
    satisfying required DMO mappings.
  - Cardinality: e.g. Product ID (FK) on Sales Order → Product ID (PK) on
    Product Catalog.
- **Why it matters for the exam:** Harmonization as a designed process, not a
  click-through; cardinality questions.
- **Related:** FQK; mapping; data model.

---

## S5 — Enhancements, Sharing & Analysis (18%)

**Verify hands-on:** Core CI/SI/data-graph mechanics verified first-hand
(2026-07-03). Some CI/streaming *credit multipliers* remain blog-sourced — treat
specific cost numbers as illustrative, not exam-quotable.

### Calculated Insights — Core Mechanics
- **Exam section:** S5-analysis (18%)
- **Source:** https://help.salesforce.com/s/articleView?id=sf.c360_a_get_started_with_calculated_insights.htm
- **Type:** Salesforce Doc · **Source confidence:** direct *(verified 2026-07-03)*
  - **In depth:** Calculated Insights are Data 360's engine for turning your
    unified, relational data into pre-computed metrics — think customer
    lifetime value, average order value, or engagement scores — that can then
    feed segmentation, activation, reports, and data graphs. They run as
    scheduled batch Spark jobs (typically daily) rather than in real time,
    because the whole point is to crunch across your entire estate: DMOs,
    DLOs, and Unified Profiles joined together. The defining structural rule
    is that every CI must combine at least one measure (an aggregated metric
    like SUM or AVG) with at least one dimension (a group-by such as Customer
    ID), and those two roles are not interchangeable — a CI with only a
    measure or only a dimension is invalid. Whether you build it in the Visual
    Insight Builder or in SQL, you are describing the same underlying object,
    scoped to a single data space, so scenario questions often hinge on this
    measure-plus-dimension requirement and on CI being batch rather than
    streaming.
- **Key facts:**
  - Built via the **Visual Insight Builder** or **SQL** (same underlying object);
    can also be created from templates or a data-kit package.
  - Requires the **Data Cloud Architect** permission set to create.
  - **DMO names are case-sensitive in CI SQL** — references must match the API
    name casing (check the Object API Name column on the Data Model tab).
  - Must contain an **Aggregate Node** with **≥1 Measure** (aggregated metric,
    e.g. SUM/AVG) **and ≥1 Dimension** (group-by, e.g. Customer ID) — measures
    and dimensions are **not** interchangeable. Filters optional.
  - Scoped to a **data space** — only objects in that space are available.
  - Can **join across DMOs/DLOs and Unified Profile** (unlike Streaming
    Insights).
  - Runs as scheduled **batch Spark jobs** (commonly daily) — not real-time.
- **Why it matters for the exam:** CI needs both a measure AND a dimension; CI =
  batch/relational.
- **Related:** Streaming Insights; data graphs; CI reports.

### Calculated Insights vs Streaming Insights — Engine Selection
- **Exam section:** S5-analysis (18%)
- **Source:** https://www.salesforceben.com/calculated-vs-streaming-insights-in-data-cloud-choosing-the-right-engine/
- **Type:** Third-party guide · **Source confidence:** triangulated
  - **In depth:** This card is the decision framework the exam repeatedly
    tests: given a business goal, which insights engine do you recommend? The
    mental model is latency versus scope — Calculated Insights runs periodic
    batch jobs (often daily) over your full estate including Unified Profiles
    and history, making it right for long-term understanding like CLV, churn,
    or segmentation criteria. Streaming Insights uses Spark Structured
    Streaming over rolling or tumbling windows to react within seconds to
    minutes, but it can only see incoming engagement events, cannot join
    Unified Profiles, and produces no lifetime metrics. Because streaming
    compute is far more expensive than batch, the guiding heuristic is to
    default to CI unless the requirement is genuinely time-sensitive (cart
    abandonment, geofence), where only SI can act fast enough.
- **Key facts:**
  - **CI** = periodic batch Spark (often daily), full estate (Unified Profiles,
    DMOs, DLOs, history).
  - **Streaming Insights** = Spark Structured Streaming, rolling/tumbling
    windows, seconds-to-minutes latency, **incoming engagement events only —
    cannot join Unified Profiles**, no lifetime metrics.
  - Heuristic: CI for long-term understanding/segmentation (CLV, churn); SI to
    act immediately on an event (cart abandonment, geofence).
  - Streaming is far more expensive than batch — use batch if not time-sensitive.
- **Why it matters for the exam:** "which engine would you recommend" — batch=CI/
  streaming=SI + cost/latency tradeoff.
- **Related:** CI mechanics; data graphs.

### Streaming Insights — Real-Time Engagement Metrics
- **Exam section:** S5-analysis (18%)
- **Source:** https://help.salesforce.com/s/articleView?id=sf.c360_a_create_a_streaming_insight_using_sql.htm
- **Type:** Salesforce Doc · **Source confidence:** direct *(verified 2026-07-03 — the old `c360_a_streaming_insights` URL 404s; this is the live page)*
  - **In depth:** Streaming Insights is the near-real-time counterpart to
    Calculated Insights, built to compute time-series aggregations over
    engagement data as it arrives from sources like the Web/Mobile SDK,
    Ingestion API, or Marketing Cloud Personalization streams. Its
    architecture forces two rules that show up constantly in scenario
    questions: the primary DMO must be the Engagement DMO — Profile and other
    DMOs can only participate as a right-table join, which is precisely why an
    SI cannot be built purely on Unified Profile data — and the SQL must
    include a window function that defines a time frame using window.start and
    window.end. You create it from the Calculated Insights tab, it needs the
    Data Cloud Architect permission, and because it processes continuously its
    last-run status always shows Processing while consuming credits the whole
    time it is active. Pairing an SI with Data Actions is how you turn a
    detected event into an immediate downstream trigger, so the exam pattern
    'notify within minutes of an event' points to SI, not CI.
- **Key facts:**
  - Compute streaming metrics across dimensions from **near-real-time** sources
    (Web/Mobile SDK, Ingestion API, MC Personalization streams); build time-
    series aggregations to orchestrate/optimize data.
  - **Primary DMO must be the Engagement DMO** — Profile and Other DMOs can only
    be a **right-table join**. (This is why SI can't be built purely on Unified
    Profile data.)
  - **Requires a window function aggregate** — define the frame in the SELECT
    with `window.start` / `window.end`.
  - Created from the **Calculated Insights tab → New → Streaming Insights**;
    needs **Data Cloud Architect** permission; SQL up to **131,021 chars**; use
    `TRY_CONVERT_CURRENCY` for currency measures. Last run status is always
    **Processing**.
  - Apply **Data Actions** on a streaming insight to trigger downstream action.
  - Consumes credits continuously while active.
- **Why it matters for the exam:** "notify within minutes of an event" → SI over
  CI; know SI's **Engagement-DMO-primary** rule and **required window function**.
- **Related:** CI vs SI; data actions; CI mechanics.

### Data Graphs — Structure and Purpose
- **Exam section:** S5-analysis (18%)
- **Source:** https://help.salesforce.com/s/articleView?id=data.c360_a_data_graphs.htm
- **Type:** Salesforce Doc · **Source confidence:** direct *(verified 2026-07-03)*
  - **In depth:** A Data Graph solves a different problem from Calculated
    Insights: instead of computing a metric, it pre-assembles chosen fields
    from related DMOs into a single read-only record stored as one JSON blob,
    so that a nested view like Customer to Orders to Items to Cases to
    Products can be fetched in one fast call rather than many joins at query
    time. This precalculation is what makes it near-instant and low on API
    consumption, which is why it powers latency-sensitive uses such as
    real-time identity resolution, real-time CIs, and real-time segmentation,
    and why it is queried through the Query and Metadata APIs or viewed via
    Data Explorer. It comes in two flavors — Standard, refreshed in batch over
    minutes to hours, and Real-time/streaming, refreshed continuously — and it
    complements rather than competes with CIs, since a CI's computed metric
    can be embedded inside the graph. The exam distinction to lock in is that
    a Data Graph is about connected structure for fast retrieval, whereas a CI
    is about a computed SQL metric.
- **Key facts:**
  - Combines chosen fields from your DMOs into a single **read-only data graph
    record** — all combined data in **one JSON blob**; because it's preprepared,
    queries return **almost instantly** in fewer steps.
  - Queried via **Data 360 Metadata API and Query API**, viewable in Lightning
    via **Data Explorer / Query Editor**, and usable in other Salesforce apps.
  - Real-time data graphs power **real-time identity resolution, real-time
    calculated insights, and real-time segmentation.**
  - Defines **hierarchical connections** between DMOs (Customer → Orders → Items
    → Cases → Products) materialized into a single **precalculated queryable JSON
    view**.
  - Precalculation → near-real-time retrieval, higher query volume, fewer API
    calls than raw DMOs.
  - Two types: **Standard** (batch-refreshed, mins–hours) and **Real-time/
    streaming** (continuous).
  - **CIs can be added into a Data Graph** — complementary: CI = computed
    metrics, graph = connected structure for fast retrieval/activation.
- **Why it matters for the exam:** "fast nested multi-object JSON for app/API/
  personalization" = Data Graph vs "computed SQL metric" = CI.
- **Related:** CI mechanics; data graph vs CI.

### Data Graph vs Calculated Insight — Decision Boundary
- **Exam section:** S5-analysis (18%)
- **Source:** https://trailhead.salesforce.com/content/learn/modules/data-graphs-in-data-cloud/get-to-know-data-graphs
- **Type:** Trailhead module · **Source confidence:** triangulated
  - **In depth:** This card sharpens the exact 'which would you use' framing
    the exam favors by contrasting purpose rather than technology. A
    Calculated Insight answers 'what is true or what should I calculate' — an
    aggregated metric used as segmentation criteria or a personalization
    attribute — while a Data Graph answers 'how is this connected and how fast
    can I fetch it,' modeling real-world relationships like a full order,
    case, and product history returned as one structured object. They are
    complementary, not mutually exclusive: a CI's output can feed into a Data
    Graph. Remember their consumption paths too, because questions test them —
    graphs are consumed via the Query API as JSON and referenced in Flow,
    Apex, or activation, whereas CIs surface in Reports, Segmentation, and
    Activation.
- **Key facts:**
  - **CI** when the goal is to define/analyze/enrich with an aggregated metric
    (segmentation criteria, personalization attributes).
  - **Data Graph** when modeling real-world relationships for fast structured
    retrieval (full order/case/product history as one object).
  - CI = "what is true / what to calculate"; Graph = "how it's connected / how
    fast to fetch." **CI output can feed INTO a Data Graph.**
  - Graphs consumed via **Query API (JSON)**, referenced in Flow/Apex/activation;
    CI consumed in Reports/Segmentation/Activation.
- **Why it matters for the exam:** Exact "which would you use" framing.
- **Related:** Data graph structure; CI mechanics.

### Data 360 Enrichments — Types and Mechanics
- **Exam section:** S5-analysis (18%)
- **Source:** https://help.salesforce.com/s/articleView?id=data.c360_a_enrich_your_org_with_data_and_insights.htm
- **Type:** Salesforce Doc · **Source confidence:** triangulated
  - **In depth:** Enrichments are how Data 360 data becomes visible directly
    on CRM record pages, and the exam tests them by pairing two variables:
    whether identity resolution is required, and the cardinality of the data
    being surfaced. Copy Fields perform a one-to-one field copy from a DMO
    into CRM fields and, like standard Related Lists, depend on identity
    resolution to tie the DMO to the Unified Individual or Account. Related
    Lists surface one-to-many DMO data and likewise require that
    identity-resolution linkage. The key differentiator to memorize is the
    Direct-DMO Related List variant, which pulls from any DMO connected
    through a direct relationship and therefore does not require identity
    resolution at all — so a scenario where identity resolution isn't set up
    points you to the direct-DMO path.
- **Key facts:**
  - Two enrichment types surface Data 360 data on CRM record pages: **Copy
    Fields** and **Related Lists** (incl. a **Direct-DMO Related List** variant).
  - **Copy Fields** = 1:1 field copy from a DMO with a 1:1 relationship to
    (Unified) Individual/Account into CRM fields; **requires identity resolution**.
  - **Related Lists** = 1-to-many DMO data; **require the DMO to relate to
    (Unified) Individual via identity resolution.**
  - **Direct-DMO Related Lists** = data from any DMO connected via a **direct
    relationship**; **do NOT require identity resolution** — key differentiator.
- **Why it matters for the exam:** Identity-resolution dependency + cardinality
  (1:1 vs 1:many) → enrichment type.
- **Related:** Identity resolution; enrichments module.

### Reports on Calculated Insights — Constraints
- **Exam section:** S5-analysis (18%)
- **Source:** https://help.salesforce.com/s/articleView?id=analytics.rd_dc_reports_calculated_insights_limits.htm
- **Type:** Salesforce Doc · **Source confidence:** direct
  - **In depth:** Because a Calculated Insight is already an aggregated
    object, reports built on it inherit a specific set of limitations that the
    exam frames as 'why can't I add X to this component.' A CI report needs at
    least one aggregatable non-text measure and at least one dimension, and it
    can only render as a summary report — no detail rows, grand totals, or row
    counts — since there are no underlying raw rows to show. You also cannot
    add row or summary formulas or re-aggregate a measure that has already
    been aggregated. On top of that, the number of dimensions gates which
    charts are available, and dashboard components on CI reports cannot be
    tabular, metric, or gauge — so the mental model is that CI's
    pre-aggregated nature is the root cause of every one of these
    restrictions.
- **Key facts:**
  - CI report needs ≥1 aggregatable non-text measure + ≥1 dimension; renders as
    **summary reports only** — no detail rows, grand totals, or row counts.
  - Cannot add row/summary formulas; cannot re-aggregate an already-aggregated
    measure; "Details Only" export unavailable.
  - Dimension-count gates charts: 1 dim disables stacked bar/column; 2
    non-aggregatable dims disable donut/funnel; 3+ disable all charts.
  - Dashboard components on CI reports can't be tabular/metric/gauge.
- **Why it matters for the exam:** "why can't I add X to this dashboard
  component" tied to CI report limits.
- **Related:** CI mechanics; Intro to Reports.

### Tableau Next and Data 360 Integration
- **Exam section:** S5-analysis (18%)
- **Source:** https://www.salesforce.com/analytics/tableau-next/
- **Type:** Salesforce Doc · **Source confidence:** triangulated
  - **In depth:** This card asks you to distinguish the new Data-360-native
    analytics story from the classic connector approach. Tableau Next is built
    directly on Data 360's unified layer and natively integrates Agentforce,
    querying Data 360 in place rather than against a separate warehouse, while
    Tableau Semantics is the AI-infused semantic layer that models each metric
    once so both Tableau Next and Agentforce reuse the same definition.
    Classic Tableau, by contrast, reaches Data 360 through a built-in
    connector or via Tableau Semantics. The security point the exam stresses
    is that access stays data-space aware — the user's OAuth login determines
    which spaces are visible, so Data 360's governance is inherited and
    carried through, never bypassed by the analytics tool.
- **Key facts:**
  - **Tableau Next** is built directly on Data 360's unified layer + natively
    integrates Agentforce — queries Data 360 directly (not a separate warehouse).
  - **Tableau Semantics** = AI-infused semantic layer in Data 360, models
    metrics once for both Tableau Next and Agentforce.
  - Classic **Tableau** connects via a built-in connector or Tableau Semantics;
    access is **data-space aware** (OAuth login determines visible spaces —
    security inherited, not bypassed).
- **Why it matters for the exam:** Tableau Next (Data-360-native, Agentforce) vs
  classic Tableau via connector; data-space security carries through.
- **Related:** Reports; data sharing.

### Machine Learning Predictions — Einstein Studio Model Builder
- **Exam section:** S5-analysis (18%)
- **Source:** https://trailhead.salesforce.com/content/learn/modules/predictive-outputs-from-model-builder/build-a-predictive-model-in-model-builder
- **Type:** Trailhead module · **Source confidence:** triangulated
  - **In depth:** This is Data 360's native predictive-AI path: Einstein
    Studio is the command center for AI models, and Model Builder is its
    clicks-not-code way to train on data already unified in Data 360. Two
    facts anchor most questions — there are exactly two supported model types,
    binary classification (yes/no) and regression (numeric), and each needs a
    labeled training DMO whose target is a real column, evaluated with AUC for
    classification or R-squared for regression. Predictions don't overwrite
    the source record; they land in a new output DMO holding just the
    prediction plus identifiers, which you then reference from segments,
    activation, CIs, Flow, or Prompt Builder. When a model must be trained
    outside Salesforce, the BYOM path lets you connect externally trained
    models from SageMaker, Vertex AI, or Databricks instead of building in
    Model Builder.
- **Key facts:**
  - **Einstein Studio** = AI model command center; **Model Builder** = clicks,
    no code.
  - Two model types: **binary classification** (yes/no) + **regression**
    (numeric). Target must be a real column in the training DMO (labeled
    dataset).
  - Output writes to a **new output DMO** (prediction + PK/identifiers only, not
    the full input record) — referenced in segments/activation/CI/Flow/Prompt
    Builder.
  - Quality: **AUC** (classification) / **R-squared** (regression).
  - **BYOM** alternative: connect externally trained models (SageMaker, Vertex
    AI, Databricks).
- **Why it matters for the exam:** Two model types, labeled-dataset requirement,
  output in a new DMO, BYOM path.
- **Related:** Tableau Next; Prompt Builder; reports.

### Data Sharing — Zero Copy Federation and Sharing
- **Exam section:** S5-analysis (18%)
- **Source:** https://www.salesforce.com/data/zero-copy-partner-network/guide/
- **Type:** Salesforce Doc · **Source confidence:** triangulated
  - **In depth:** Zero Copy is Data 360's answer to moving data between it and
    external platforms without ever duplicating it, and the exam tests the
    directional distinction. Federation is inbound — Data 360 queries external
    data in place through Live Query, pulling on demand from platforms like
    Snowflake, Redshift, BigQuery, Databricks, Azure Fabric, or generic SQL —
    whereas Sharing is outbound, letting Data 360 expose its own data to a
    receiver who reads it without copying or storing it. Neither direction
    creates a duplicate, and together they enable two-way access with no data
    movement. Crucially, Sharing preserves Data 360's security and governance
    so that data-space permissions carry through, which is what makes it the
    foundation for Clean Rooms and privacy-safe cross-party collaboration.
- **Key facts:**
  - **Federation** = Data 360 queries external data in place (Live Query, pull
    on demand); **Sharing** = Data 360 shares its own data OUT without the
    receiver copying/storing it. Together = two-way, no duplication.
  - Federation supports Snowflake, Redshift, BigQuery, Databricks, Azure Fabric,
    generic SQL.
  - Sharing preserves Data 360 security/governance (data-space permissions carry
    through); underpins **Clean Rooms** (privacy-safe cross-party collaboration).
- **Why it matters for the exam:** Federation (inbound) vs sharing (outbound);
  neither duplicates data.
- **Related:** Tableau Next; clean rooms.

---

## S6 — Data Activations & Utilization (20%)

**Largest section.** Within it, "Data 360 in Flows" carries by far the most
Trailhead points — data actions/Flow automation is heavily emphasized.

### Building and Filtering Segments (Segment On, DMO Types)
- **Exam section:** S6-activation (20%)
- **Source:** https://help.salesforce.com/s/articleView?id=data.c360_a_segments.htm
- **Type:** Salesforce Doc · **Source confidence:** direct *(verified 2026-07-03)*
  - **In depth:** A segment is the fundamental unit of activation in Data 360,
    and the very first decision you make when building one — the "Segment On"
    object — silently constrains everything downstream, because it defines
    both the grain of your audience (are you counting people or households?)
    and which attributes and calculated insights you can even filter on. This
    is why Unified Individual, the product of identity resolution, is the
    recommended base for multi-source scenarios: choosing the plain Individual
    DMO instead means you're segmenting over un-reconciled, potentially
    duplicated records. Once the base is set, you refine with filters drawn
    from direct attributes, related attributes, or calculated insights, but a
    CI filter only works if it references the Segment On DMO and exposes that
    DMO's primary key as a dimension. The composite-key caveat matters because
    the Segment Canvas joins on a single field, so a DMO with a multi-field
    key produces silently inaccurate counts — the exam loves testing whether
    you know to insist on a single, unique primary key.
- **Key facts:**
  - A segment starts by choosing **"Segment On"** — the DMO it's built against;
    determines available attributes + grain (person vs household).
  - Choices: **Unified Individual** (requires identity resolution; recommended
    for multi-source), Individual (no IR, risks dupes), Unified Household, other
    Profile/Engagement DMOs.
  - **June 2025 update:** Engagement-category DMOs can be the Segment On object
    and activate directly to MCE.
  - Filters from: **Direct Attributes**, **Related Attributes**, **Calculated
    Insights**. A CI used as a filter must reference the Segment On DMO and
    include its **Primary Key as a Dimension**.
  - **Composite-key limitation:** the Segment Canvas joins on a **single field
    only** — it can't auto-join on all fields of a composite key, causing
    inaccurate counts. Use DMOs with a **single, unique primary key** (or write
    manual queries defining every field).
- **Why it matters for the exam:** Wrong "Segment On" is the common trap — pick
  Unified Individual when IR is in play.
- **Related:** Nested segments; CI in segmentation; segment types (below).

### Segment Types (Standard, Real-Time, Waterfall, Dynamic)
- **Exam section:** S6-activation (20%)
- **Source:** https://help.salesforce.com/s/articleView?id=data.c360_a_segments.htm
- **Type:** Salesforce Doc · **Source confidence:** direct *(verified 2026-07-03)*
  - **In depth:** Beyond the default Standard segment, Data 360 offers three
    specialized types that each trade off latency, exclusivity, or persistence
    to fit a specific engagement pattern, and scenario questions almost always
    hinge on matching the requirement to the right type. Standard segments
    recalculate and publish on a schedule or on demand, while Real-Time
    segments resolve in milliseconds against a real-time data graph — but that
    speed comes at the cost of features like exclusion criteria, nested batch
    segments, and manual publish. Waterfall segments enforce mutual
    exclusivity by ranking a priority-ordered list so each person lands in
    only their single highest-priority match, which is the canonical "one best
    offer per person" pattern. Dynamic segments run their queries at execution
    time without persisting membership to a Segment Membership DMO, using
    placeholder filters resolved on the fly — the choice when you don't want a
    stored point-in-time audience.
- **Key facts:**
  - **Standard** — built on a DMO, published on a schedule or on demand.
  - **Real-Time** — completes on demand in **milliseconds**; add Segment ID +
    Timestamp from the membership DMO to a real-time data graph. **Cannot** use
    exclusion criteria, nested batch segments, segment counts, or manual publish.
  - **Waterfall** — processes a priority-ordered list of existing segments so a
    qualifying individual lands in **only the highest-priority** segment they
    match → mutually exclusive audiences (one best offer per person).
  - **Dynamic** — runs segment queries **without persisting** to Segment
    Membership DMOs; uses attribute-filter placeholders resolved at execution.
- **Why it matters for the exam:** "which segment type" scenario — waterfall for
  one-best-offer, real-time for ms latency, dynamic for no-persistence queries.
- **Related:** Segment On; membership DMO; publish schedules.

### Containers, Operators, Nested/Excluded Segments
- **Exam section:** S6-activation (20%)
- **Source:** https://help.salesforce.com/s/articleView?id=data.c360_a_nested_segments.htm
- **Type:** Salesforce Doc · **Source confidence:** triangulated
  - **In depth:** This card is about the mechanics of building complex segment
    logic on the canvas, where each criteria row is a Container evaluating one
    attribute and containers combine with AND/OR into layered logic. The
    distinction between the INCLUDE and EXCLUDE tabs is conceptually
    important: rather than writing negated conditions, you place removal logic
    on the Exclude tab, which strips matching individuals out of the audience
    — a cleaner mental model than trying to invert every operator. Segments
    can also be nested inside one another as reusable filters, and the
    exam-critical choice is the reference mode: Definition re-runs the nested
    segment's logic live for freshness, while Membership reuses the last
    published membership for speed. When a scenario stresses performance or
    refresh time, Membership mode is the answer.
- **Key facts:**
  - Each criteria row = a **Container** on one attribute; combine with AND/OR up
    to **5 levels** of nested logic.
  - Canvas has **INCLUDE** and **EXCLUDE** tabs — Exclude removes matching
    individuals without negated conditions.
  - A segment can be **nested** inside another as a filter; up to **50 filters
    per tab**.
  - Nested reference modes: **Definition** (re-runs nested logic live) vs
    **Membership** (reuses last published membership — **faster**).
- **Why it matters for the exam:** Membership vs Definition mode for performance
  → Membership when refresh speed matters.
- **Related:** Segment On; publish schedules.

### Segment Publish Schedules: Standard vs Rapid
- **Exam section:** S6-activation (20%)
- **Source:** https://help.salesforce.com/s/articleView?id=data.c360_a_rapid_segment_publish.htm
- **Type:** Salesforce Doc · **Source confidence:** direct *(verified 2026-07-03)*
  - **In depth:** Publishing is how a segment's membership actually reaches
    its targets, and Data 360 gives you two cadences that differ in speed,
    capacity, and reversibility. Standard publishing runs on a 12-to-24-hour
    rhythm and can reach back across a long window of engagement data, whereas
    Rapid publishing runs on tighter 1-hour or 4-hour intervals with a
    configurable lookback and an incremental refresh mode, but it is capped
    per org — making it a scarce resource you allocate to your most
    time-sensitive audiences. The exam frequently tests the one-way
    constraint: once a segment is created as Standard you cannot promote it to
    Rapid (only Rapid-to-Standard is allowed), and a common trap is forgetting
    that a segment won't publish at all unless an activation is configured.
    Note too that Rapid isn't MCE-only — it can target Data Cloud and file
    storage as well — a correction the exam may probe directly.
- **Key facts:**
  - **Standard:** every **12–24 hrs**; up to last **2 years** of Engagement data.
  - **Rapid:** runs on a daily schedule at a **1-hour or 4-hour interval**;
    **max 20 rapid segments/org**; prioritized in the publish queue; supports a
    configurable **lookback window** and **Incremental Refresh** mode.
  - **Rapid targets:** Marketing Cloud Engagement, Data Cloud, **or file
    storage** (Amazon S3, Azure, SFTP, GCS) — *corrected: not MCE-only.*
    Standard + rapid both activate as **data extensions** in MCE.
  - **One-way:** you **cannot** change a standard publish to a rapid publish
    after creation (rapid → standard is the allowed direction).
  - A segment must have an **Activation configured** or it won't publish at all.
  - Manual **"Publish Now"** takes priority over scheduled runs.
- **Why it matters for the exam:** Rapid vs Standard (interval, lookback, 20-cap,
  one-way path); know rapid can target file storage + Data Cloud, not just MCE.
- **Related:** Membership DMO; activation; segment types.

### Segment Refresh vs Publish; Downstream Timing
- **Exam section:** S6-activation (20%)
- **Source:** https://help.salesforce.com/s/articleView?id=data.c360_a_publish_segment.htm
- **Type:** Salesforce Doc · **Source confidence:** triangulated
  - **In depth:** These two verbs are easy to conflate but the exam treats
    them as distinct steps in one pipeline: Refresh recalculates who belongs
    in the segment against current data, while Publish sends that refreshed
    membership out to activation targets — and crucially, publish always
    performs the refresh as part of the operation. Each publish writes a
    point-in-time Segment Membership object, so membership is a snapshot, not
    a continuously live view. The practical consequence, and the thing
    scenario questions probe, is that downstream systems are only eventually
    consistent: a target like an MCE Dynamic List won't reflect changes until
    the segment publishes, and can lag afterward, so you should never assume
    real-time propagation from a scheduled publish.
- **Key facts:**
  - **Refresh** = recalculate membership vs current data; **Publish** = send
    refreshed membership to targets (refresh happens as part of publish).
  - Each publish creates/updates a **Segment Membership object** (point-in-time).
  - Downstream (e.g. MCE Dynamic List) refreshes **only after** the segment
    publishes and can **lag up to 1 hour**.
- **Why it matters for the exam:** Publish = refresh + send; downstream is
  eventually consistent.
- **Related:** Publish schedules; membership DMO; activation.

### Segment Membership Data Model Object
- **Exam section:** S6-activation (20%)
- **Source:** https://help.salesforce.com/s/articleView?id=data.c360_a_segment_membership_data.htm
- **Type:** Salesforce Doc · **Source confidence:** triangulated
  - **In depth:** When a segment publishes, Data 360 automatically
    materializes its results into a Segment Membership DMO — the queryable
    record of exactly which profile IDs qualified — which turns segment output
    into first-class data you can join and analyze rather than a
    fire-and-forget send. Each Segment-On type gets two flavors: a Latest
    object reflecting the most recent publish and a Historical object
    retaining prior publishes, the latter being what enables trend and cohort
    analysis over time. Because the object carries the Segment Id alongside
    the (Unified) Individual Id, it joins cleanly to other DMOs, and you can
    interrogate it through SOQL, SQL in the Query Workspace, the Query API, or
    the Segmentation REST API. The key exam takeaway is simply that membership
    is durable, queryable data with a Latest-versus-Historical split.
- **Key facts:**
  - Publishing auto-generates a **Segment Membership DMO** (which profile IDs
    belong).
  - Two per Segment-On type: **Latest** (most recent publish) + **Historical**
    (all prior — trend/cohort analysis).
  - Fields include Segment Id + (Unified) Individual Id — joinable to other DMOs.
  - Queryable via SOQL, SQL (Query Workspace), Query API, Segmentation REST API.
- **Why it matters for the exam:** Membership is a queryable DMO (Latest vs
  Historical).
- **Related:** Publish schedules.

### Activation and Activation Targets
- **Exam section:** S6-activation (20%)
- **Source:** https://help.salesforce.com/s/articleView?id=data.c360_a_activation_targets.htm
- **Type:** Salesforce Doc · **Source confidence:** triangulated
  - **In depth:** Activation is the delivery layer of Data 360 — the step that
    takes a segment or DMO and pushes its records, along with selected
    attributes and calculated insights keyed by Data 360 IDs, to wherever they
    need to act. It helps to keep the vocabulary straight: an Activation
    Target is the destination (a place), while an Activation is the publish
    process that sends data there (an action). The target catalog spans four
    broad categories worth memorizing — Marketing Cloud Engagement business
    units, the Data Cloud/Data 360 target that surfaces data inside Sales and
    Service Cloud, file storage like S3 and SFTP, and external advertising
    platforms such as Meta and LiveRamp. The newer Activation-Triggered Flows
    feature is the bridge to native automation, letting a Flow fire
    automatically the moment an activation publishes.
- **Key facts:**
  - **Activation Target** = where audience/DMO records are delivered;
    **Activation** = the publish process to that target.
  - Target types: **Marketing Cloud Engagement** (business units), **Data
    Cloud/Data 360** (surface in Sales/Service Cloud), **file storage** (S3,
    SFTP, GCS, Azure Blob), **external/advertising** (LiveRamp, Criteo, Trade
    Desk; Google, LinkedIn, Meta, Amazon Ads).
  - Activation sends Data 360 IDs + selected attributes/CIs.
  - **Activation-Triggered Flows** (GA ~Jan 2026): a Flow starts automatically
    when a segment/DMO activation publishes — declarative downstream automation.
- **Why it matters for the exam:** Full list of target categories +
  Activation-Triggered Flows bridging to native automation.
- **Related:** Data actions vs activations; contact points.

### Data Actions vs Activations
- **Exam section:** S6-activation (20%)
- **Source:** https://www.salesforceben.com/types-of-data-targets-in-data-cloud-activations-vs-data-actions/
- **Type:** Third-party guide · **Source confidence:** triangulated
  - **In depth:** This is one of the most frequently tested either/or
    distinctions in the whole exam, and the mental model is bulk-versus-event.
    An Activation sends a segment's golden records — a whole audience with its
    historical attributes and insights — on a schedule for ongoing engagement,
    so it is inherently batch-oriented. A Data Action, by contrast, fires the
    instant a single DMO or CI record changes, pushing only that current event
    payload (no history) to a Platform Event, Webhook, or Marketing Cloud
    Journey Builder entry event to trigger one immediate downstream
    automation. Whenever a scenario describes reacting to a real-time,
    record-level change, think Data Action; whenever it describes sending or
    refreshing a large audience, think Activation.
- **Key facts:**
  - **Activation** = send a segment's "golden records" (bulk audience, historical
    attributes/insights) for ongoing engagement.
  - **Data Action** = fires an alert/event when a **DMO or CI changes** →
    triggers a single immediate automation. **Not for bulk.**
  - Data Action targets: **Platform Event, Webhook, Marketing Cloud (Journey
    Builder entry events)** — pushes current event payload only, not history.
  - Rule of thumb: Activation = scheduled/bulk audience; Data Action =
    real-time record-level event.
- **Why it matters for the exam:** Frequent either/or — bulk audience vs
  real-time single event.
- **Related:** Data actions + Flow; activation targets.

### Data Actions and Flow Integration
- **Exam section:** S6-activation (20%)
- **Source:** https://help.salesforce.com/s/articleView?id=data.c360_a_data_actions_cdp.htm
- **Type:** Salesforce Doc · **Source confidence:** triangulated
  - **In depth:** This card zooms into the automation side of Data Actions,
    and its headline capability is that a DMO change can trigger a Salesforce
    Flow directly — the declarative "Trigger Flows with Data 360 Data" pattern
    — so you can run business logic off unified data without duplicating it
    into the core CRM. That no-duplication point is why this approach is
    attractive: the Flow reacts to the Data 360 event rather than requiring
    the data to be copied into standard objects first. As with the broader
    Data Actions concept, this is strictly for single-event, record-level
    reactions and never for bulk datasets, which remain the domain of
    Activations. MCE is also a supported target here via Journey Builder entry
    events, reinforcing that Data Actions are the real-time trigger mechanism.
- **Key facts:**
  - Data Actions push DMO/CI-change events to a target that triggers automation/
    workflows.
  - DMO changes can **trigger Salesforce Flow directly** (declarative, no core-
    CRM data duplication) — "Trigger Flows with Data 360 Data."
  - Not for bulk/large datasets — that's Activations.
  - MCE is a supported Data Action target (Journey Builder entry events).
- **Why it matters for the exam:** When to use Flow-triggering Data Actions
  (single event) vs scheduled Activation.
- **Related:** Data actions vs activations; Agentforce/Service.

### Contact Points and Activation Mapping
- **Exam section:** S6-activation (20%)
- **Source:** https://help.salesforce.com/s/articleView?id=sf.c360_a_contact_points.htm
- **Type:** Salesforce Doc · **Source confidence:** triangulated
  - **In depth:** Contact Points are the DMOs that hold the channel
    identifiers — email, phone, address, app — attached to a unified profile,
    and they exist because you cannot deliver an audience anywhere without at
    least one reachable identifier. The exam tests this as a hard
    prerequisite: activating to MCE requires at least one of Email Address,
    Mobile App identifier, or Phone Number, while activating to external and
    advertising platforms requires at least one of Email, OTT ID, Phone, or
    Mobile Advertiser ID (MAID). When multiple source systems supply
    conflicting values for the same contact point, a Source Priority Order
    rule decides which value wins — and it's worth noting this resolution is
    independent of the identity-resolution reconciliation rules. Knowing which
    contact-point types satisfy which target's minimum is exactly the kind of
    prerequisite a question will hinge on.
- **Key facts:**
  - Contact Points = DMOs for channels/identifiers on a unified profile (Email,
    Phone, Address, App).
  - **Activation to MCE requires ≥1 of:** Email Address, Mobile App identifier,
    or Phone Number.
  - **Activation to external/ad platforms requires ≥1 of:** Email, OTT ID,
    Phone, or Mobile Advertiser ID (MAID).
  - **Source Priority Order** picks the contact point value when sources conflict
    (independent of IR reconciliation).
- **Why it matters for the exam:** Which contact point types satisfy which
  target's minimum — a tested prerequisite.
- **Related:** Activation targets; MCE target.

### Advertising Audiences
- **Exam section:** S6-activation (20%)
- **Source:** https://trailhead.salesforce.com/content/learn/modules/advertising-with-data-cloud/craft-effective-advertising-with-data-cloud
- **Type:** Trailhead module · **Source confidence:** triangulated
  - **In depth:** Advertising Audiences is best understood not as a separate
    legacy product but as one activation-target category within Data 360 — the
    path that turns unified first-party profiles into audiences pushed to
    Meta, Google, Amazon Ads, Trade Desk, and a large partner ecosystem. Its
    strategic significance is that it is the designated migration path off the
    retired Advertising Studio, re-anchoring advertising on Data 360's own
    identity resolution and segmentation rather than a standalone tool.
    Because it targets external platforms, it inherits the same contact-point
    minimums as any external activation — Email, OTT ID, Phone, or MAID. The
    exam framing to hold onto is that ad audiences are simply an activation
    destination, so the general activation rules apply.
- **Key facts:**
  - Ad Audiences activates unified first-party profiles as ad audiences to Meta,
    Google, Amazon Ads, Trade Desk, 100+ partners.
  - **The migration path off the retired Advertising Studio** — ties audiences to
    Data 360 identity resolution/segmentation.
  - Same contact-point requirements as external platforms (Email/OTT/Phone/MAID).
- **Why it matters for the exam:** Ad Audiences = an activation-target category,
  not a legacy separate product.
- **Related:** Activation targets; contact points.

### Data 360-Driven Interactions in Marketing Cloud Engagement
- **Exam section:** S6-activation (20%)
- **Source:** https://trailhead.salesforce.com/content/learn/modules/data-clouddriven-interactions-in-marketing-cloud
- **Type:** Trailhead module · **Source confidence:** direct
  - **In depth:** This card describes the Data-360-to-MCE pipeline, where
    segments activate directly into Marketing Cloud Engagement and Journey
    Builder to become the entry sources and audiences that drive journeys. The
    supporting concept is Engagement DMOs, a distinct category of objects that
    model each individual interaction — opens, clicks, and the like — with
    dozens of attributes linking the event to a person, a message, and a
    moment in time, which is what lets marketing behavior feed back into
    unified profiles. Nothing flows until an MCE Connection and Activation
    Target are configured, so that setup is a prerequisite the exam may test.
    The typical architecture combines differently-cadenced sources — CRM
    streaming frequently, MCE syncing daily — into a single reconciled
    profile.
- **Key facts:**
  - Segments activate directly into MCE + Journey Builder — segments become entry
    sources/audiences for journeys.
  - **Engagement DMOs** model each interaction (opens/clicks) with **50+
    attributes** tying to person/message/timing.
  - An **MCE Connection/Activation Target** must exist before data flows to MCE
    business units.
  - Common pattern: CRM streams hourly, MCE syncs daily, combined into one
    profile.
- **Why it matters for the exam:** Segment→MCE pipeline; Engagement DMOs as a
  distinct category.
- **Related:** Segment On; MCE target; activation targets.

### Agentforce Grounding with Data 360
- **Exam section:** S6-activation (20%)
- **Source:** https://trailhead.salesforce.com/content/learn/modules/advanced-rag-with-data-360-and-agentforce/get-started-with-grounding-agents-in-data-360
- **Type:** Trailhead module · **Source confidence:** direct
  - **In depth:** Grounding is the practice of injecting relevant, trustworthy
    context into an LLM prompt so Agentforce produces accurate, specific
    answers instead of generic or hallucinated ones, and Data 360 serves as
    the unified data layer that supplies that context. The exam wants you to
    recognize the RAG chain as the mechanism: a Search Index makes structured
    (DMO/DLO) or unstructured (text, file) data searchable, a Retriever
    queries that index (wrapping Einstein Search, either the auto-created
    default per index or a Custom Retriever you build), and a Prompt Template
    in Prompt Builder attaches the retriever to inject grounded content at run
    time. Memorizing that ordered pipeline — Search Index to Retriever to
    Prompt Template — is the single most reliably tested fact in this card. It
    positions Data 360 as the retrieval foundation beneath Agentforce's
    generative capabilities.
- **Key facts:**
  - **Grounding** = adding contextual data to a prompt so LLM output is accurate,
    not generic; Data 360 is the unified data layer beneath Agentforce.
  - Ground with structured (DMOs, DLOs) or unstructured (text, files) data; a RAG
    pipeline needs a **Search Index → Retriever → Prompt Template**.
  - A **Retriever** wraps Einstein Search; Data 360 auto-creates a default
    retriever per index, or build a **Custom Retriever**.
  - In **Prompt Builder**, attach the retriever to a prompt template to inject
    grounded content at run time.
- **Why it matters for the exam:** The RAG chain (Search Index → Retriever →
  Prompt Template) as the grounding mechanism.
- **Related:** Data 360-Powered Agentforce; Service/Sales.

### Data 360 in Salesforce Sales and Service Clouds
- **Exam section:** S6-activation (20%)
- **Source:** https://help.salesforce.com/s/articleView?id=data.c360_a_data_cloud_lightning_apps_configure_profile_related_records.htm
- **Type:** Salesforce Doc · **Source confidence:** triangulated
  - **In depth:** This is the activation target that brings unified data back
    into the CRM experience itself, surfacing Data 360 records on Contact,
    Account, and Case pages as Dynamic or Data 360 Related Lists — and its
    defining characteristic is that it does so without duplicating data into
    the core CRM. Those related lists render live queries, so a rep sees
    current web behavior, purchases, loyalty status, and cases directly in the
    console rather than a stale copy. A subtle distinction the exam may draw
    is that Service "data query" use cases operate on data at rest — queried
    in batch or on demand rather than streamed in real time — so don't assume
    every in-console view is live-streamed. Consumption of this capability is
    metered through the Digital Wallet, reflecting Data 360's usage-based
    pricing model.
- **Key facts:**
  - The Data 360 activation target surfaces unified data on record pages
    (Contact/Account/Case) as Dynamic/Data 360 Related Lists — **no CRM
    duplication**.
  - Related lists render **live queries** — reps see current data (web behavior,
    purchases, loyalty, cases) in the console.
  - Service "data query" use cases operate on data **at rest** (batch/on demand,
    not streamed).
  - Usage tracked in the **Digital Wallet** (consumption-based).
- **Why it matters for the exam:** "activation into Salesforce clouds" (Data
  Cloud target, related lists) vs external systems; Digital Wallet.
- **Related:** Activation targets; Agentforce.

---

## Appendix — Practice-Topic Signal (what the exam actually tests)

From practice-test/exam-experience analysis. **Use for prioritization only** —
not a source of factual truth.

### High-frequency topics (study these hardest)
- Data 360 basics/value + product **lifecycle sequencing** (ingest → model →
  resolve → insight → segment → activate) — S1
- **Data spaces** (multi-brand isolation) + **data kits/deployment** — S2
- **Data streams, connectors, field types, DLO vs DMO, batch vs streaming** — S3
- **Data modeling cardinality + identity resolution** (match vs reconciliation)
  — S4
- **CI vs Streaming Insights vs Data Graphs**; segment design/containers — S5
- **Activation targets/limits; data actions vs activations** — S6

### Commonly confused pairs (prime quiz targets)
- Match rule vs reconciliation rule · DLO vs DMO · CI vs SI vs Real-Time Data
  Graph · Data action vs activation · Batch vs streaming ingestion · Data spaces
  vs data kits vs change sets · Deterministic vs "probabilistic" (Data 360 is
  deterministic) · Definition vs Membership nested-segment mode · Same-container
  vs separate-container segment logic
- **Traps:** formula fields calculate only at **initial ingestion** (not
  incremental); **Full Sandbox refresh** keeps metadata, wipes ingested data;
  granular Allow policies do nothing while **Allow All** exists.

### Question style
- Almost all **scenario-based** ("A brand wants to…") — pick the *best*
  consultant response, not a bare definition.
- Mix of single-answer + **multi-select ("choose 2")**.
- Distractors use **correct terminology in the wrong context** — precision on
  which tool solves which constraint (freshness/scale/isolation/limit) is the
  differentiator.
- **Ordering/sequence** questions (lifecycle, deployment steps).
