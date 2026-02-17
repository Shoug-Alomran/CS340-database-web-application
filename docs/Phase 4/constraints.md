# Phase 4 – Database Implementation
## Constraints & Integrity

This section documents the integrity constraints implemented in the database.

---

## 1) Entity Integrity (Primary Keys)

Each relation has a primary key:

- `User(user_id)`
- `Clinic(clinic_id)`
- `HealthCondition(condition_id)`
- `AwarenessContent(content_id)`
- `FamilyMember(member_id)`
- `MedicalHistory(event_id)`
- `RiskAlert(alert_id)`
- `Appointment(appointment_id)`
- `HealthEvent(event_id)`

---

## 2) Referential Integrity (Foreign Keys)

### FamilyMember → User
- `FamilyMember.user_id` → `User.user_id`

### MedicalHistory → FamilyMember, HealthCondition
- `MedicalHistory.member_id` → `FamilyMember.member_id`
- `MedicalHistory.condition_id` → `HealthCondition.condition_id`

### RiskAlert → FamilyMember
- `RiskAlert.member_id` → `FamilyMember.member_id`

### Appointment → User, Clinic
- `Appointment.user_id` → `User.user_id`
- `Appointment.clinic_id` → `Clinic.clinic_id`

---

## 3) ON DELETE / ON UPDATE Rules (as implemented)

- Most foreign keys use:
  - **ON DELETE RESTRICT**
  - **ON UPDATE CASCADE**

Meaning:
- You cannot delete a parent row if child rows still reference it.
- If a primary key value changes (rare), children update automatically.

---

## 4) Domain Constraints (Enums)

Controlled attribute domains are enforced using ENUMs, including:

- `Appointment.status`: Scheduled / Completed / Cancelled
- `RiskAlert.risk_level`: Low / Medium / High
- `RiskAlert.status`: New / Viewed / Resolved
- `MedicalHistory.severity`: Low / Medium / High
- `FamilyMember.blood_type`: A+, A-, B+, B-, AB+, AB-, O+, O-
- `FamilyMember.gender`: Male / Female
- `AwarenessContent.content_type`: Article / Video / Infographic

---

## 5) CHECK Constraints

### HealthEvent.onset_age
- Constraint ensures:
  - `onset_age` is either NULL, or between 0 and 120.

This prevents unrealistic ages and keeps event records consistent.
