# Phase 4 – Database Implementation
## Constraints & Integrity

This section documents the **integrity constraints** enforced in the database to maintain consistency, correctness, and reliable relationships between tables.

---

## 1. Entity Integrity (Primary Keys)
Each table has a primary key to uniquely identify rows:
- `User(user_id)`
- `FamilyMember(member_id)`
- `HealthCondition(condition_id)`
- `MedicalHistory(history_id)`
- `RiskAlert(alert_id)`
- `Clinic(clinic_id)`
- `Appointment(appointment_id)`
- `AwarenessContent(content_id)`

---

## 2. Referential Integrity (Foreign Keys)
Foreign keys ensure valid relationships between dependent tables:

- `FamilyMember.user_id` → `User.user_id`
- `MedicalHistory.member_id` → `FamilyMember.member_id`
- `MedicalHistory.condition_id` → `HealthCondition.condition_id`
- `RiskAlert.member_id` → `FamilyMember.member_id`
- `Appointment.user_id` → `User.user_id`
- `Appointment.clinic_id` → `Clinic.clinic_id`

---

## 3. Domain Constraints (CHECK constraints)
To prevent invalid values, the following domain constraints are enforced:

### Role constraints
- `User.role` must be one of:
  - `citizen`
  - `healthcare_provider`
  - `admin`

### Gender constraints
- `FamilyMember.gender` must be one of:
  - `male`
  - `female`

### Status constraints
- `Appointment.status` must be one of:
  - `scheduled`
  - `completed`
  - `cancelled`

- `RiskAlert.status` must be one of:
  - `active`
  - `resolved`

### Severity constraints
- `MedicalHistory.severity` must be within an acceptable range (e.g., 1–5) or within a known scale.

---

## 4. Required Attributes (NOT NULL)
Critical columns are required to prevent incomplete records:
- `User.email`, `User.name`, `User.role`
- `FamilyMember.name`, `FamilyMember.relationship_type`, `FamilyMember.user_id`
- `MedicalHistory.member_id`, `MedicalHistory.condition_id`
- `Appointment.user_id`, `Appointment.clinic_id`, `Appointment.appointment_date`
- `Clinic.clinic_name`

---

## 5. Uniqueness Constraints (UNIQUE)
- `User.email` must be unique (prevents duplicate accounts).

---

## 6. Delete/Update Policies
Foreign key actions are chosen to preserve integrity:

- Deleting a `User` should be restricted if dependent records exist **or** handled carefully b
