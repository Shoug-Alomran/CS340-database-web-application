
# Phase 4 – Database Implementation
## SQL DDL Scripts

This phase implements the relational schema using SQL DDL statements.  
The database is created with tables, keys, and constraints to enforce integrity rules defined in Phase 3.

---

## DBMS
**Target DBMS:** TBD (e.g., MySQL / PostgreSQL)

---

## Table Creation Order
Tables are created in dependency order to satisfy foreign key requirements:

1. `User`
2. `Clinic`
3. `HealthCondition`
4. `FamilyMember` (depends on User)
5. `MedicalHistory` (depends on FamilyMember, HealthCondition)
6. `RiskAlert` (depends on FamilyMember)
7. `Appointment` (depends on User, Clinic)
8. `AwarenessContent`

---

## DDL Scripts (In Progress)
The final SQL DDL statements will include:
- `CREATE TABLE` definitions for all relations
- Primary key constraints
- Foreign key constraints
- CHECK constraints for domain control
- NOT NULL and UNIQUE constraints

> The complete SQL script will be added once the relational schema is finalized.
