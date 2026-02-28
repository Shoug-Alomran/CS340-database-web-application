<div class="home-hero" markdown>
<div class="home-hero__text" markdown>

# **Phase 5 — Backend Logic**

This phase documents how the backend connects the frontend to the MySQL schema implemented in Phase 4.

[Basic SQL Queries](../basic-queries/){ .md-button .md-button--primary }
[Frontend Interface](../frontend/){ .md-button }

</div>
</div>

---

<div class="phase-refresh" markdown>

## 1. Backend Role

The backend is the application layer between UI and database:

- Receives HTTP requests
- Validates inputs
- Executes parameterized SQL
- Returns structured responses
- Enforces business and integrity rules

## 2. Module Structure

### 2.1 Routes / Controllers

- Expose endpoints (users, family members, medical data, alerts, appointments, content)
- Map request/response handling

### 2.2 Service / Business Logic

- Input rule checks
- Ownership checks (user-scoped data)
- Workflow decisions (for example alert status transitions)

### 2.3 Data Access Layer

- Connection pooling
- Parameterized query execution
- Transaction handling for multi-step operations

### 2.4 Validation and Error Handling

- Required field validation
- ENUM/domain validation before query execution
- Consistent error responses for FK/UNIQUE/CHECK violations

## 3. CRUD Coverage by Domain

- `User`: create profile, read account, update contact data
- `FamilyMember`: full CRUD (scoped to owner)
- `MedicalHistory`: full CRUD with required member/condition links
- `HealthEvent`: event logging with optional member/condition references
- `RiskAlert`: list/update status (`New`, `Viewed`, `Resolved`)
- `Clinic`: read catalog data
- `Appointment`: create/list/update status/cancel
- `AwarenessContent`: read for users, write/update/delete for admin roles

## 4. Constraint-Aware Backend Behavior

Backend logic is aligned with database constraints:

- Handles `UNIQUE` errors (for example duplicate `User.email`)
- Prevents invalid ENUM values before SQL execution
- Surfaces FK dependency issues clearly (`RESTRICT` relationships)
- Supports cascade-aware deletion flows (`CASCADE` relationships)
- Validates date/range fields that map to CHECK constraints

## 5. Security and Reliability

- Parameterized queries to prevent SQL injection
- Input sanitization and schema-level validation
- Role-based authorization for privileged operations
- Structured logging for requests, query failures, and constraint violations

## Backend Outcome

The backend design provides clean separation of concerns and reliable execution of schema-aware operations for all major application features.

</div>
