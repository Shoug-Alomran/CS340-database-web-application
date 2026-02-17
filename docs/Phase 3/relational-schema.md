# Phase 3 – Logical Design
## Relational Schema

This section presents the **logical relational schema** derived from the conceptual EER model developed in Phase 2.  
One-to-many (1:N) relationships were implemented by placing foreign keys on the N-side of the relationship.

---

## Relations Overview

### USER
USER(
- **user_id** (PK)
- first_name
- last_name
- email (UNIQUE)
- password_hash
- phone_number
- created_at
)

---

### FAMILY_MEMBER
FAMILY_MEMBER(
- **member_id** (PK)
- user_id (FK -> USER.user_id)
- first_name
- last_name
- date_of_birth
- relationship
- contact_phone
- medical_history
- blood_type
- gender
- status
)

---

### HEALTH_CONDITION
HEALTH_CONDITION(
- **condition_id** (PK)
- condition_name
- category
- description
)

---

### MEDICAL_HISTORY
MEDICAL_HISTORY(
- **event_id** (PK)
- member_id (FK -> FAMILY_MEMBER.member_id)
- condition_id (FK -> HEALTH_CONDITION.condition_id)
- event_date
- event_type
- diagnosis
- severity
- symptoms
- treatment
- outcome
)

---

### RISK_ALERT
RISK_ALERT(
- **alert_id** (PK)
- member_id (FK -> FAMILY_MEMBER.member_id)
- alert_type
- risk_level
- priority
- status
- notes
- description
- created_date
- resolved_date
)

---

### CLINIC
CLINIC(
- **clinic_id** (PK)
- clinic_name
- city
- address
- phone
)

---

### APPOINTMENT
APPOINTMENT(
- **appointment_id** (PK)
- user_id (FK -> USER.user_id)
- clinic_id (FK -> CLINIC.clinic_id)
- appointment_date
- appointment_time
- reason
- status
)

---

### AWARENESS_CONTENT
AWARENESS_CONTENT(
- **content_id** (PK)
- title
- topic
- content_type
- content_body
- created_at
)

---

### HEALTH_EVENT
HEALTH_EVENT(
- **event_id** (PK)
- event_date
- severity
- symptoms
- condition_name
- treatment
- outcome
- event_type
- diagnosis
- diagnosis_date
- notes
- onset_age
- status
)
