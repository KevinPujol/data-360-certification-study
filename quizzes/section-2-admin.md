# Section 2 Quiz — Setup & Administration (13%)
> 10 questions. Pass mark: 8/10. Scenario-based. Answers at the bottom.

**Q1.** A consultant is scoping a Data 360 implementation for a customer running Salesforce Professional Edition. The customer expects the license to appear automatically after their next release upgrade. What should the consultant advise about provisioning?

A. Data 360 is auto-provisioned only in Developer Edition, so they should spin up a Developer org to test first.
B. Data 360 is available with Enterprise and Unlimited editions (plus a free tier); Professional Edition does not qualify, so they must upgrade their edition to obtain the license.
C. The license appears automatically after any release upgrade regardless of edition, so no action is needed.
D. They must open a case to have data residency reconfigured before the license can be provisioned.

**Q2.** After the Data 360 license is provisioned in the org, users report they cannot find any Data 360 features. What is the correct next step to make Data 360 usable?

A. Assign the Data Cloud Architect permission set; enablement happens automatically once a permission set is assigned.
B. Wait 24 hours for the org's data residency region to finish syncing.
C. Navigate to Setup -> Data 360 Setup -> Get Started and complete the manual click-through enablement.
D. Create a second data space, since the default space is not usable until a second one exists.

**Q3.** A European retailer purchased its Data 360 license through an org provisioned in the US. During design, the customer insists all Data 360 processing occur in the EU. What is accurate? (Choose 2)

A. The org where the license was purchased determines the data residency region.
B. Creating a dedicated EU data space within the existing org will move processing to the EU.
C. To meet the EU residency requirement, the customer needs a separate org/instance provisioned in the EU region.
D. Enabling the "Allow All" governance policy will re-region the data to the EU.

**Q4.** Following the September 2025 permission set renames, an administrator needs to grant a marketing analyst the ability to build segments, but nothing more. Which permission set should be assigned?

A. Data Cloud Activation Manager
B. Data Cloud Activation Specialist
C. Data Cloud Architect
D. New Data Cloud User

**Q5.** A stakeholder is assigned the New Data Cloud User permission set and complains they cannot see certain areas of the product. Which areas are they correctly restricted from viewing? (Choose 2)

A. Data Cloud Setup
B. The default data space's mapped DMO records
C. Segments & Activations
D. The Data 360 home tab

**Q6.** An architect wants to isolate a new business unit's segmentation and identity resolution work from the rest of the company while keeping ingestion infrastructure reusable. They plan to use a second data space. Which statement correctly describes what a data space does?

A. Data spaces unify and merge records across the organization into a single golden profile.
B. DLO-to-DMO mappings, identity resolution rulesets, calculated insights, and segments are isolated per data space, while Data Sources, Data Streams, and DLOs are shared across spaces.
C. Data spaces satisfy data residency requirements by partitioning data into regional boundaries.
D. Every data space, including the default, can be deleted and recreated to reset mappings.

**Q7.** A company has three separate, production Data 360 orgs acquired through past mergers and wants a single no-code way to share data spaces across their business units going forward. A consultant recommends Data Cloud One. What must the customer understand? (Choose the best answer.)

A. Data Cloud One consolidates the three orgs automatically into one home org with no deprovisioning required.
B. Data Cloud One lets one home org share data spaces to companion orgs with no code; consolidating the three existing orgs means picking one home org and deprovisioning the others, a multi-month effort with risk.
C. Companion org data resides in each companion's own region, satisfying separate residency needs.
D. Data Cloud One requires purchasing a paid Companion Org SKU per companion.

**Q8.** During a governance review, a consultant finds the day-zero "Allow All" policy still active, yet the admin has also configured several granular "Allow" policies for least-privilege access. Users still have universal access. What is happening and how is it fixed?

A. The granular Allow policies conflict with each other; consolidate them into one policy.
B. While "Allow All" is active, granular Allow policies have no effect; the admin must delete "Allow All" to enforce least privilege, ensuring replacement policies exist first so access is not fully revoked.
C. "Allow All" only affects FLS, so the admin should switch to RLS to override it.
D. The admin should add a Deny All policy on top of Allow All to activate the granular Allow policies.

**Q9.** A team is setting up Communication Capping to prevent message fatigue for each individual customer across all channels, while a separate rule enforces a total budget across all customers in a region. Which configuration is correct?

A. Use a Dimension limit for the per-individual fatigue rule and a Profile limit for the regional budget rule.
B. Use a Profile limit for the per-individual fatigue rule and a Dimension limit for the regional budget rule; each requires a Channel and may add up to two user-defined enterprise parameters.
C. Both rules should be Profile limits, differentiated only by the Frequency parameter (Daily vs Monthly).
D. Communication Capping does not consume credits, so the team can create unlimited rules of either type.

**Q10.** A consultant is packaging Data 360 assets to move Data Streams and DMOs from one org to another via a managed package, and also wants to bundle some Apex classes in the same package. What is accurate about this packaging approach?

A. Data Streams and DMOs can be added directly to a standard package as standalone components alongside the Apex classes.
B. Data Streams, DMOs, DLOs, and CIs must be placed in a Data Kit (which holds metadata definitions, not row data) nested in the package; since Winter '25, Data 360 metadata and non-Data 360 metadata cannot coexist in the same package, so the Apex must go in a separate package.
C. A Data Kit carries the actual row data, so the target org will be fully populated on install.
D. Data 360 sandboxes include row data, so the consultant should refresh a sandbox instead of packaging.

---
## Answer Key

**Q1: B** — Data 360 is provisioned with Enterprise and Unlimited editions plus a free tier; Professional Edition does not qualify, so an edition upgrade is required. A is wrong because Developer Edition is specifically NOT auto-provisioned. C ignores the edition requirement. D confuses residency (set at purchase) with provisioning eligibility.

**Q2: C** — Enablement is a deliberate manual click-through at Setup -> Data 360 Setup -> Get Started. A is wrong: a permission set grants access rights but does not enable the product. B invents a residency sync delay. D is false; every org gets one usable default data space automatically.

**Q3: A, C** — Residency is determined by the org where the license is purchased (A), and meeting a different regional requirement requires a separate org/instance in that region (C). B is the classic trap: data spaces partition but do NOT solve residency. D is nonsense; "Allow All" is a governance policy and does not change regions.

**Q4: B** — Data Cloud Activation Specialist (formerly Marketing Specialist) is scoped to creating segments. A (Activation Manager) covers broader segmentation strategy and activation targets. C (Architect) is full access. D (New Data Cloud User) is view-only and cannot even see Segments & Activations.

**Q5: A, C** — The New Data Cloud User is view-only and specifically cannot view Data Cloud Setup (A) or Segments & Activations (C) (also can't view Data Space Management/Addition). B is wrong: view access means they CAN see mapped records. D is wrong: they retain general view access including the home tab.

**Q6: B** — Data spaces isolate DLO-to-DMO mapping, identity resolution rulesets, CIs, segments, activations/targets, and data actions per space, while Data Sources, Data Streams, and DLOs are shared. A is wrong: data spaces partition, they do not unify (that is identity resolution). C is the residency trap. D is wrong: the default space cannot be deleted (only renamed).

**Q7: B** — Data Cloud One is a no-code way for one home org to share data spaces to companion orgs, but consolidating pre-existing Data 360 orgs requires choosing one home and deprovisioning the others, a months-long, risky effort. A wrongly claims automatic consolidation. C is wrong: companion data resides in the home org's region. D is wrong: there is a free Companion Org SKU.

**Q8: B** — "Allow All" is a day-zero preactivated universal-access policy; while active, granular Allow policies have no effect. To enforce least privilege, delete "Allow All" (after ensuring replacement policies exist, since deleting it with none revokes all access). A misdiagnoses. C is wrong; it isn't limited to FLS. D is backwards — the blocker is the standing "Allow All", and adding "Deny All" doesn't "activate" Allow policies.

**Q9: B** — A Profile limit caps messages per individual (compliance/fatigue); a Dimension limit caps across customers matching a parameter combination (budget). Each rule requires a Channel and allows up to two user-defined enterprise parameters (fixed functional params are Frequency and Limit Type). A reverses the two. C is wrong: different requirements need different limit types, not just frequencies. D is wrong: Communication Capping consumes credits.

**Q10: B** — Data Streams, DMOs, DLOs, and CIs cannot deploy standalone; they must sit in a Data Kit (metadata only, no row data) nested in a package, and since Winter '25 Data 360 and non-Data 360 metadata cannot be in the same package, so the Apex must be packaged separately. A is wrong (can't be standalone components). C is wrong (Data Kits carry metadata, not row data). D is wrong (Data 360 sandboxes are metadata-only).
