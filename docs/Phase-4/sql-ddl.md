---
hide:
  - toc
---

<div class="home-hero" markdown>
<div class="home-hero__text" markdown>

# **Phase 4 — SQL DDL Implementation**

This phase implements the Phase 3 logical schema using **MySQL Data Definition Language (DDL)**.

All tables, primary keys, and referential constraints are created in a dependency-safe order to ensure successful execution without foreign key conflicts.

[Sample Data](../sample-data/){ .md-button .md-button--primary }
[Constraints & Integrity](../constraints/){ .md-button }

</div>
</div>

---

# 1. Target DBMS

**Database Management System:** MySQL  
Tested using:

- MySQL Workbench  
- MySQL Server  

The implementation adheres to MySQL syntax and constraint behavior.

---

# 2. Implementation Files

- **Full DDL script:** `Phase4.sql`
- This page provides high-level documentation of:
  - Table creation order  
  - Constraint enforcement strategy  
  - Naming conventions  

The complete SQL definitions are contained within the external script file.

---

# 3. Table Creation Order  
### (Dependency-Safe Execution Order)

Tables are created in the following sequence to respect foreign key dependencies:

1. `User`
2. `Clinic`
3. `HealthCondition`
4. `AwarenessContent`
5. `FamilyMember` (FK → User)
6. `MedicalHistory` (FK → FamilyMember, HealthCondition)
7. `RiskAlert` (FK → FamilyMember)
8. `Appointment` (FK → User, Clinic)
9. `HealthEvent` (standalone)

This order ensures that referenced parent tables exist before dependent tables are created.

---

# 4. Key Design Notes

## 4.1 Naming Convention

The schema follows a consistent naming standard:

- Tables use **PascalCase**  
  Example: `FamilyMember`

- Columns use **snake_case**  
  Example: `member_id`

This improves readability and consistency across the database structure.

---

## 4.2 ENUM Usage for Controlled Domains

ENUM data types are used to enforce controlled attribute domains:

- `Appointment.status` → Scheduled / Completed / Cancelled
- `RiskAlert.risk_level` → Low / Medium / High
- `RiskAlert.status` → New / Viewed / Resolved
- `MedicalHistory.severity` → Low / Medium / High
- `FamilyMember.blood_type` → A+, A-, B+, B-, AB+, AB-, O+, O-
- `AwarenessContent.content_type` → Article / Video / Infographic

ENUM constraints prevent invalid domain values and maintain data consistency.

---

## 4.3 Integrity Enforcement Strategy

The physical schema enforces integrity through:

- **Primary Keys**
  - Defined as `AUTO_INCREMENT` integer identifiers
  - Ensure entity integrity

- **Foreign Keys**
  - Enforce referential integrity between related tables
  - Apply `ON DELETE RESTRICT`
  - Apply `ON UPDATE CASCADE`

- **CHECK Constraints**
  - Implemented in `HealthEvent`
  - Validates that `onset_age` is either `NULL` or within a realistic range

---

# Implementation Outcome

The SQL DDL implementation:

- Accurately reflects the Phase 3 logical design  
- Enforces structural and domain constraints  
- Maintains dependency-safe execution  
- Prepares the database for data insertion and application integration  

This completes the transition from logical schema to physical database structure.