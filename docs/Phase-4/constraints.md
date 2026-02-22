---
hide:
  - toc
---

<div class="home-hero" markdown>
<div class="home-hero__text" markdown>

# **Phase 4 — Database Implementation: Constraints & Integrity**

This section documents the integrity constraints implemented in the physical database schema.

The implementation enforces entity integrity, referential integrity, domain constraints, and validation rules consistent with the logical design defined in Phase 3.

[SQL DDL Scripts](../sql-ddl/){ .md-button .md-button--primary }
[Sample Data](../sample-data/){ .md-button }

</div>
</div>

---

# 1. Entity Integrity (Primary Keys)

Each relation defines a primary key to uniquely identify tuples:

- `User(user_id)`
- `Clinic(clinic_id)`
- `HealthCondition(condition_id)`
- `AwarenessContent(content_id)`
- `FamilyMember(member_id)`
- `MedicalHistory(event_id)`
- `RiskAlert(alert_id)`
- `Appointment(appointment_id)`
- `HealthEvent(event_id)`

Primary keys enforce **entity integrity**, ensuring that each row is uniquely identifiable and non-null.

---

# 2. Referential Integrity (Foreign Keys)

Foreign key constraints preserve valid parent–child relationships.

---

## 2.1 FamilyMember → User

- `FamilyMember.user_id` → `User.user_id`

Each family member must be associated with exactly one registered user.

---

## 2.2 MedicalHistory → FamilyMember, HealthCondition

- `MedicalHistory.member_id` → `FamilyMember.member_id`
- `MedicalHistory.condition_id` → `HealthCondition.condition_id`

Each medical history record must reference:
- A valid family member
- A valid standardized health condition

---

## 2.3 RiskAlert → FamilyMember

- `RiskAlert.member_id` → `FamilyMember.member_id`

Alerts cannot exist without a valid family member reference.

---

## 2.4 Appointment → User, Clinic

- `Appointment.user_id` → `User.user_id`
- `Appointment.clinic_id` → `Clinic.clinic_id`

Each appointment must be:
- Scheduled by a valid user
- Associated with a valid clinic

---

# 3. ON DELETE / ON UPDATE Rules

Most foreign key constraints use:

- **ON DELETE RESTRICT**
- **ON UPDATE CASCADE**

### Behavior Interpretation

- **ON DELETE RESTRICT**  
  Prevents deletion of a parent row if dependent child rows exist.

- **ON UPDATE CASCADE**  
  If a primary key value changes (rare case), dependent foreign key values update automatically.

These rules preserve referential consistency and prevent accidental data loss.

---

# 4. Domain Constraints (ENUM Enforcement)

Controlled attribute domains are implemented using `ENUM` constraints.

### Appointment
- `status`: Scheduled / Completed / Cancelled

### RiskAlert
- `risk_level`: Low / Medium / High
- `status`: New / Viewed / Resolved

### MedicalHistory
- `severity`: Low / Medium / High

### FamilyMember
- `blood_type`: A+, A-, B+, B-, AB+, AB-, O+, O-
- `gender`: Male / Female

### AwarenessContent
- `content_type`: Article / Video / Infographic

ENUM constraints restrict attribute values to predefined valid domains.

---

# 5. CHECK Constraints

### HealthEvent.onset_age

A CHECK constraint enforces:

- `onset_age` is either `NULL`
- OR between `0` and `120`

This prevents unrealistic age values and ensures logical consistency of event data.

---

# Integrity Outcome

The implemented constraints enforce:

- Entity integrity  
- Referential integrity  
- Controlled attribute domains  
- Logical validation rules  

Together, these mechanisms ensure a consistent, reliable, and structurally sound database implementation aligned with the conceptual and logical design phases.