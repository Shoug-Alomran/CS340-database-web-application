# Phase 3 – Logical Design
## Mapping from EER to Relational Model

This section explains how the conceptual EER design was transformed into a relational schema.

---

## Entity Mapping
Each strong entity in the EER model was mapped directly to a relation.  
Primary keys were introduced to uniquely identify each tuple.

---

## Relationship Mapping
- One-to-many relationships were implemented using **foreign keys** on the many side.
- No many-to-many relationships were required in the current design.
- Participation constraints from the EER model were enforced through foreign key dependencies.

---

## Attribute Mapping
- Composite attributes were flattened into simple attributes.
- Multivalued attributes were modeled as separate relations where necessary.
- Derived attributes were excluded from the relational schema.

---

## Integrity Considerations
Referential integrity is maintained using foreign key constraints, ensuring consistency between related tables.

---

## Transition to Implementation
This logical design provides a structured foundation for SQL implementation in **Phase 4 – Database Implementation**.
