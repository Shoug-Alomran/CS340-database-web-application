---
hide:
  - toc
---

<div class="home-hero" markdown>
<div class="home-hero__text" markdown>

# **Phase 3 — Constraints Summary**

This section summarizes the key integrity constraints derived from the relational schema.

These constraints ensure data consistency, enforce ownership relationships, and prevent structural anomalies within the database.

[Relational Schema](../relational-schema/){ .md-button .md-button--primary }
[Assumptions](../assumptions/){ .md-button }

</div>
</div>

---

# 1. Keys and Uniqueness

Primary keys uniquely identify each tuple within its respective table.

- `USER.user_id` is the primary key.
- `USER.email` is defined as **UNIQUE**.

Each table contains a single-attribute primary key:

| Table | Primary Key |
|-------|------------|
| `FAMILY_MEMBER` | `member_id` |
| `HEALTH_CONDITION` | `condition_id` |
| `MEDICAL_HISTORY` | `event_id` |
| `RISK_ALERT` | `alert_id` |
| `CLINIC` | `clinic_id` |
| `APPOINTMENT` | `appointment_id` |
| `AWARENESS_CONTENT` | `content_id` |
| `HEALTH_EVENT` | `event_id` |

These constraints enforce entity integrity across the schema.

---

# 2. Referential Integrity (Foreign Keys)

Foreign key constraints preserve valid parent–child relationships and prevent orphan records.

The following references are enforced:

- `FAMILY_MEMBER.user_id` → `USER.user_id`
- `MEDICAL_HISTORY.member_id` → `FAMILY_MEMBER.member_id`
- `MEDICAL_HISTORY.condition_id` → `HEALTH_CONDITION.condition_id`
- `RISK_ALERT.member_id` → `FAMILY_MEMBER.member_id`
- `APPOINTMENT.user_id` → `USER.user_id`
- `APPOINTMENT.clinic_id` → `CLINIC.clinic_id`

These constraints ensure:

- Ownership consistency  
- Valid entity dependencies  
- Structural correctness of relationships  

---

# 3. NOT NULL Constraints

Certain attributes are mandatory to ensure completeness and prevent incomplete records.

### USER
- `first_name`
- `last_name`
- `email`
- `password_hash`
- `created_at`

### FAMILY_MEMBER
- `first_name`
- `last_name`
- `date_of_birth`

### HEALTH_CONDITION
- `condition_name`

### MEDICAL_HISTORY
- `event_date`

### RISK_ALERT
- `created_date`

### APPOINTMENT
- `appointment_date`
- `appointment_time`

### AWARENESS_CONTENT
- `title`
- `created_at`

### HEALTH_EVENT
- `event_date`

---

# Constraint Outcome

Together, these constraints enforce:

- **Entity integrity** (primary keys)  
- **Referential integrity** (foreign keys)  
- **Attribute-level completeness** (NOT NULL enforcement)  

They provide a structurally consistent and normalized relational schema aligned with the conceptual model defined in Phase 2.