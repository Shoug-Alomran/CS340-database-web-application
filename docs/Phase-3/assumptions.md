---
hide:
  - toc
---

<div class="home-hero" markdown>
<div class="home-hero__text" markdown>

# **Phase 3 — Logical Design Assumptions**

This section documents the design assumptions applied during Phase 3 to ensure consistent relational schema mapping, constraint definition, and implementation alignment.

[Relational Schema](../relational-schema/){ .md-button .md-button--primary }
[Constraints](../constraints/){ .md-button }

</div>
</div>

---

## Assumptions

To complete the logical design consistently, the following assumptions are applied:

- Each user account is uniquely identified by `user_id`, and `email` is unique across users.
- `FAMILY_MEMBER` is owned by exactly one `USER` through `user_id`.
- Medical history events are recorded per family member and may optionally store detailed text fields (`diagnosis`, `symptoms`, `treatment`, `outcome`).
- `RISK_ALERT` entries are generated for a specific family member and can be resolved later (`resolved_date` may be `NULL`).
- `APPOINTMENT` is scheduled by a `USER` and is associated with exactly one `CLINIC`.
- `AWARENESS_CONTENT` is independent content and does not require foreign keys.
- `HEALTH_EVENT` is stored as a standalone table as documented in the report schema.

---

## Purpose of These Assumptions

These assumptions ensure:

- Consistent mapping from the conceptual model into relational tables  
- Clear ownership and dependency relationships  
- Predictable constraint enforcement  
- Alignment between documentation and the implemented schema  

They also establish explicit rules for nullable fields and independent entities prior to implementation.