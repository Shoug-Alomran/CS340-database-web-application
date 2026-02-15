# Phase 3 – Logical Design
## Relational Schema

This section presents the **logical relational schema** derived from the conceptual EER model developed in Phase 2.  
Each relation corresponds to an entity or relationship identified in the conceptual design.

---

## Relations Overview

### User

- **user_id** (PK)
- name
- email
- phone
- role

---

### FamilyMember

- **member_id** (PK)
- user_id (FK → User.user_id)
- name
- date_of_birth
- relationship_type
- gender

---

### HealthCondition

- **condition_id** (PK)
- condition_name
- description

---

### MedicalHistory

- **history_id** (PK)
- member_id (FK → FamilyMember.member_id)
- condition_id (FK → HealthCondition.condition_id)
- diagnosis_date
- severity

---

### RiskAlert

- **alert_id** (PK)
- member_id (FK → FamilyMember.member_id)
- alert_type
- description
- created_at
- status

---

### Clinic

- **clinic_id** (PK)
- clinic_name
- location
- contact_info

---

### Appointment

- **appointment_id** (PK)
- user_id (FK → User.user_id)
- clinic_id (FK → Clinic.clinic_id)
- appointment_date
- status

---

### AwarenessContent

- **content_id** (PK)
- title
- content_type
- description
- publish_date
