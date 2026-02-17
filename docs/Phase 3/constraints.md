# Phase 3 – Logical Design
## Constraints Summary

This section summarizes key integrity constraints derived from the relational schema.

---

### Keys and uniqueness

- USER.user_id is the primary key.
- USER.email is UNIQUE.
- Each table has a single-attribute primary key:
  - FAMILY_MEMBER.member_id
  - HEALTH_CONDITION.condition_id
  - MEDICAL_HISTORY.event_id
  - RISK_ALERT.alert_id
  - CLINIC.clinic_id
  - APPOINTMENT.appointment_id
  - AWARENESS_CONTENT.content_id
  - HEALTH_EVENT.event_id

---

### Referential integrity (foreign keys)

- FAMILY_MEMBER.user_id references USER.user_id
- MEDICAL_HISTORY.member_id references FAMILY_MEMBER.member_id
- MEDICAL_HISTORY.condition_id references HEALTH_CONDITION.condition_id
- RISK_ALERT.member_id references FAMILY_MEMBER.member_id
- APPOINTMENT.user_id references USER.user_id
- APPOINTMENT.clinic_id references CLINIC.clinic_id

---

### NOT NULL highlights

- USER: first_name, last_name, email, password_hash, created_at
- FAMILY_MEMBER: first_name, last_name, date_of_birth
- HEALTH_CONDITION: condition_name
- MEDICAL_HISTORY: event_date
- RISK_ALERT: created_date
- APPOINTMENT: appointment_date, appointment_time
- AWARENESS_CONTENT: title, created_at
- HEALTH_EVENT: event_date
