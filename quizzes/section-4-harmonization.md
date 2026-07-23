# Section 4 Quiz — Harmonization & Unification (17%)
> 12 questions. Pass mark: 10/12. Scenario-based. Answers at the bottom.

**Q1.** A consultant is configuring identity resolution for a retail org. They have ingested customer data and created DLOs, but identity resolution is producing almost no consolidation and the Unified Individual records look incomplete. On review, several data streams containing customer information do not map any field to the Individual DMO's Individual ID. What is the most likely root cause?

A. The reconciliation rules have not been configured, so no unified values can be written.
B. Harmonization is incomplete — every stream with customer info must map a field to the Individual DMO's Individual ID for identity resolution to work.
C. The match rules are using Fuzzy matching, which only works on the First Name field.
D. The org has exceeded the limit of 2 identity resolution rulesets per data space.

**Q2.** During data modeling, an architect maps a source loyalty-program field into a target DMO field. Later, a teammate tries to also map a second DLO field (from a different stream) into that same DMO field. Which statement is correct?

A. A DMO field can map to multiple DLO source fields as long as they share a data type.
B. A DMO field maps to only one DLO source field; the second stream must be handled differently (e.g., its own mapping / fully qualified keys).
C. This is only allowed for custom DMOs, not standard DMOs.
D. The two source fields will be automatically concatenated into the DMO field.

**Q3.** A team must stand up the minimum data model to run identity resolution. Which objects are the five DMOs required for identity resolution? (Choose 2 — the two groupings that together are all required.)

A. Individual and Party Identification.
B. Unified Individual and Unified Link Individual.
C. Contact Point Email, Contact Point Phone, and Contact Point Address.
D. Sales Order, Case, and Loyalty.

**Q4.** A consultant needs Data 360 to match two source records that represent the same person even though one system stored the email as `Jane.Doe@Acme.com` and the other stored `jane.doe@acme.com`. There are no typos — only formatting/case differences. Which match method should be used?

A. Fuzzy, because it tolerates variations in the value.
B. Exact, because the underlying characters are the same letters.
C. Normalized, because it matches the same value regardless of formatting.
D. A probabilistic match, because the values are not byte-for-byte identical.

**Q5.** A stakeholder asks the consultant to enable "probabilistic, ML-based confidence-score matching" so the system can guess likely matches when customers have no shared identifiers. How should the consultant respond?

A. That is enabled by turning on the Fuzzy match method, which is Data 360's probabilistic engine.
B. Data 360's native match methods (Exact, Fuzzy, Normalized) are all deterministic/rule-based; Data 360 has no out-of-the-box probabilistic/ML confidence-score matching.
C. Probabilistic matching is configured in the reconciliation rules, not the match rules.
D. Enable probabilistic matching by adding more than 10 criteria to a single match rule.

**Q6.** Two matched source records disagree on a customer's mailing address. The business rule is: "whichever source system was updated most recently should win for the address field, but for the phone field, rank CRM above the e-commerce platform." Which reconciliation approach satisfies this?

A. A single ruleset-wide reconciliation rule of "Most Frequent" applied to all fields.
B. Field-level reconciliation: Last Updated / Most Recent for the address field, and Source Sequence / Source Priority for the phone field.
C. Match rules with two criteria, since reconciliation is handled inside match rules.
D. Delete the losing source record so only the winning value remains.

**Q7.** After running identity resolution, an analyst wants to trace a single Unified Individual back to every underlying source record it was built from. Which object provides this lineage/bridge?

A. The Individual DMO, because it stores the final reconciled attributes.
B. The Unified Individual DMO, because lineage is stored directly on it.
C. The Unified Link Individual DMO, the bridge linking each source Individual to its Unified Individual.
D. The Party Identification DMO, because it holds all custom identifiers.

**Q8.** A new consultant claims that once identity resolution runs, Data 360 collapses the matched source records into a single golden record and deletes the duplicates. Which statements correctly describe the actual behavior? (Choose 2.)

A. The Unified Profile works like a "key ring" — it links source identities without collapsing or destroying them; sources are preserved.
B. Reconciliation rules physically overwrite and delete the losing source field values.
C. The unified profile is dynamic and improves as data and rules change.
D. A Unified Individual is a true golden record that replaces all source Individual records.

**Q9.** An org ingests customer records from three different source systems that all feed the same DMO, and each system uses its own internal ID scheme. The consultant is worried that an ID value like `1001` in the CRM could collide with `1001` in the e-commerce system. What mechanism prevents these cross-source key collisions?

A. Reconciliation rules with Source Sequence.
B. Fully Qualified Keys — the source key plus a key qualifier, so joins use both the key value and the qualifier.
C. Fuzzy matching on the ID field.
D. Mapping all three sources' IDs into separate custom DMOs.

**Q10.** A consultant is building a match rule set and wants to understand consolidation behavior. Which statements are accurate about how match rules evaluate? (Choose 2.)

A. A record must satisfy every rule in the ruleset to be considered a match (rules are AND'd).
B. A record needs to satisfy only one rule to be considered a match (rules are OR'd), while criteria within a single rule are AND'd.
C. More and looser rules generally increase consolidation but also increase false positives.
D. Fuzzy matching can be applied to any field to catch typos across all attributes.

**Q11.** A consultant is deciding where different pieces of customer data belong in the model. A customer's loyalty number, driver's license number, and LinkedIn handle need to live somewhere, and each individual can have several of these identifiers. Which DMO and cardinality is correct?

A. Contact Point Email DMO, one-to-one to Individual.ID.
B. Party Identification DMO, Many-to-One to Individual.ID.
C. Individual DMO, one-to-one, since these are core attributes.
D. Unified Link Individual DMO, since it links identifiers.

**Q12.** A consultant is asked to explain the difference between the two DLO/DMO-related layers and where each fits in the pipeline. Which statement is correct?

A. A DLO is the standardized template describing a thing/action, and a DMO is the raw ingested data-lake object.
B. A DMO is the standardized template describing a thing/action; harmonization maps DLO fields into DMOs, and this must be correct before identity resolution runs meaningfully.
C. DLOs and DMOs are interchangeable terms for the same object in the Customer 360 Data Model.
D. Identity resolution runs directly on DLOs, so DMO mapping is optional.

---

## Answer Key

**Q1: B** — Exploits the match-vs-harmonization confusion. Here the root cause is upstream: every stream carrying customer info must map a field to the Individual DMO's Individual ID for identity resolution to function, and wrong/missing DLO->DMO mapping is the most common implementation mistake. A (reconciliation) decides which value wins after matching. C misuses Fuzzy. D is a real limit but unrelated.

**Q2: B** — A DMO field maps to only one DLO source field. A invents multi-source-per-field; C falsely restricts to custom DMOs; D invents auto-concatenation. A second stream feeding the same DMO is handled via its own mapping and, when collisions are a risk, fully qualified keys.

**Q3: A and C** — The five required identity-resolution DMOs are Individual, Party Identification, Contact Point Email, Contact Point Phone, Contact Point Address. A + C enumerate all five. B is the Unified Individual / Unified Link distractor — those are outputs of identity resolution, not required inputs. D lists unrelated subject-area DMOs.

**Q4: C** — Normalized matches the same value regardless of formatting (case, punctuation) and applies to email/phone/address. Fuzzy (A) is for typo tolerance and is First-Name-only. Exact (B) requires an identical value, which case differences violate. D wrongly invokes probabilistic matching, which Data 360 doesn't offer natively.

**Q5: B** — All three native match methods (Exact, Fuzzy, Normalized) are deterministic/rule-based; "Fuzzy" tolerates typos but is NOT probabilistic, so A is wrong. Data 360 has no out-of-the-box probabilistic/ML confidence-score matching. C misplaces matching into reconciliation. D confuses a criteria limit with a paradigm.

**Q6: B** — Reconciliation rules are field-level, so different fields can use different rule types. Last Updated / Most Recent for the address; Source Sequence / Source Priority for the ranked-source phone. A forces one rule on all fields with the wrong type. C confuses match with reconciliation. D is wrong — reconciliation never deletes/overwrites source data.

**Q7: C** — Exploits Unified Individual vs Unified Link. The Unified Link Individual DMO is the bridge linking each source Individual to its Unified Individual and is where lineage lives, enabling tracing unified -> all sources. B is wrong: the Unified Individual holds reconciled attributes but lineage lives in the Link. A confuses the raw source Individual DMO. D is about custom identifiers.

**Q8: A and C** — The unified profile is a "key ring" linking source identities without collapsing/destroying them (unified != golden record; sources preserved), and it is dynamic, improving as data/rules change. B is false — reconciliation does NOT delete/overwrite source data. D is the golden-record misconception the question rejects.

**Q9: B** — Fully Qualified Keys combine the source key with a key qualifier to prevent cross-source collisions when multiple streams feed one DMO; joins then use both value and qualifier. A (reconciliation) is about value precedence after matching. C misapplies Fuzzy. D avoids the shared-DMO scenario and needlessly fragments the model.

**Q10: B and C** — Records need satisfy only one rule (rules OR'd) while criteria within a rule are AND'd, and more/looser rules increase consolidation but also false positives. A inverts the OR/AND logic. D overstates Fuzzy, which is deterministic and First-Name-only.

**Q11: B** — Party Identification DMO holds custom identifiers (loyalty number, license, LinkedIn handle) and relates Many-to-One to Individual.ID (one individual, several identifiers). A wrongly routes identifiers to Contact Point Email; C wrongly treats them as core one-to-one attributes; D confuses the Unified Link (a bridge) with an identifier store.

**Q12: B** — A DMO is the standardized template describing an instance of a thing/action; harmonization maps DLO fields into DMOs, and it must be correct before identity resolution runs meaningfully. A swaps the DLO/DMO definitions (the classic confusion). C wrongly equates them. D is false — identity resolution operates on the harmonized DMO layer, so mapping is required.
