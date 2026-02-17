# Phase 3 – Logical Design
## Mapping from EER Model to Relational Model

The logical schema was derived directly from the conceptual EER model developed in Phase 2.

### Mapping decisions

- Each strong entity was mapped to a separate relation.
- One-to-many (1:N) relationships were implemented using foreign keys on the N-side.
  - Example: FAMILY_MEMBER includes user_id referencing USER.
  - Example: MEDICAL_HISTORY includes member_id and condition_id as foreign keys.
- Independent entities (for example, AWARENESS_CONTENT) were mapped to standalone tables.
- Primary keys uniquely identify each tuple within its respective relation.
- Referential integrity is preserved using foreign key constraints.

This relational structure preserves the integrity and relationships defined in the conceptual model while preparing the database for implementation in Phase 4.
