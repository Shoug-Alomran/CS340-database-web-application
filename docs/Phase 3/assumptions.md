# Phase 3 – Logical Design
## Assumptions

To complete the logical design consistently, the following assumptions are used:

- Each user account is uniquely identified by user_id, and email is unique across users.
- FAMILY_MEMBER is owned by exactly one USER through user_id.
- Medical history events are recorded per family member and can optionally store detailed text fields (diagnosis, symptoms, treatment, outcome).
- RISK_ALERT entries are generated for a specific family member and can be resolved later (resolved_date may be NULL).
- APPOINTMENT is scheduled by a USER and is associated with exactly one CLINIC.
- AWARENESS_CONTENT is independent content and does not require foreign keys.
- HEALTH_EVENT is stored as a standalone table as documented in the report schema.
