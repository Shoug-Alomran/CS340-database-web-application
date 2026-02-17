# Phase 4 – Database Implementation
## SQL DDL Scripts

This phase implements the Phase 3 logical schema using **MySQL** DDL.  
All tables, keys, and referential constraints are created in a dependency-safe order.

---

## DBMS
**Target DBMS:** MySQL (tested with MySQL Workbench / MySQL Server)

---

## Implementation Files
- **Full DDL script:** `Phase4.sql`
- This page documents the table order and key constraints at a high level.

---

## Table Creation Order (Dependency Order)

1. `User`
2. `Clinic`
3. `HealthCondition`
4. `AwarenessContent`
5. `FamilyMember` (FK → User)
6. `MedicalHistory` (FK → FamilyMember, HealthCondition)
7. `RiskAlert` (FK → FamilyMember)
8. `Appointment` (FK → User, Clinic)
9. `HealthEvent` (standalone)

---

## Key Design Notes

### Naming convention
- Tables use **PascalCase** (e.g., `FamilyMember`)
- Columns use **snake_case** (e.g., `member_id`)

### Enums used for controlled values
- `Appointment.status`: Scheduled / Completed / Cancelled
- `RiskAlert.risk_level`: Low / Medium / High
- `RiskAlert.status`: New / Viewed / Resolved
- `MedicalHistory.severity`: Low / Medium / High
- `FamilyMember.blood_type`: A+, A-, B+, B-, AB+, AB-, O+, O-
- `AwarenessContent.content_type`: Article / Video / Infographic

### Integrity enforcement
- Primary keys are `AUTO_INCREMENT` integer identifiers.
- All relationship integrity is enforced using `FOREIGN KEY` constraints.
- A CHECK constraint is used in `HealthEvent` to validate `onset_age` when present.
