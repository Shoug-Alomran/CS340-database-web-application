---
hide:
  - toc
---

<div class="home-hero" markdown>
<div class="home-hero__text" markdown>

# **Phase 5 — Backend Logic**

This phase documents the backend layer responsible for connecting the web application to the relational database.

The backend acts as the intermediary between the frontend interface and the MySQL database implemented in Phase 4.

[Basic SQL Queries](../basic-queries/){ .md-button .md-button--primary }
[Frontend Interface](../frontend/){ .md-button }

</div>
</div>

---

# 1. Backend Role in the Architecture

Within the layered architecture defined in Phase 1:

- The **Frontend (Presentation Layer)** collects user input.
- The **Backend (Business Logic Layer)** processes requests and executes database operations.
- The **Database (Data Layer)** enforces constraints and stores structured data.

The backend ensures that all data transactions follow defined business rules and integrity constraints.

---

# 2. Backend Responsibilities

The backend layer is responsible for:

- Receiving HTTP requests from the frontend (CRUD operations)
- Validating user input before database execution
- Executing SQL queries against the relational database
- Returning structured responses (JSON or rendered HTML)
- Handling application errors
- Enforcing business rules and access control policies

This layer protects the database from invalid or unauthorized operations.

---

# 3. Planned Backend Modules

To maintain separation of concerns, the backend is organized into logical modules:

## 3.1 Routing / Controllers

- Handles HTTP endpoints (e.g., `/family-members`, `/appointments`)
- Maps incoming requests to corresponding service logic
- Returns structured responses

## 3.2 Database Access Layer

- Centralized connection management
- Parameterized SQL execution
- Transaction handling
- Error handling and rollback when necessary

## 3.3 Validation Module

- Input validation (required fields, format checks)
- ENUM/domain verification
- Protection against SQL injection through parameter binding

## 3.4 Logging Module

- Basic request logging
- Query execution tracing
- Error recording for debugging

---

# 4. Core Endpoint Structure (High-Level)

The following endpoints correspond directly to relational operations defined in Phase 3 and Phase 4.

---

## 4.1 Users

- Create user
- Read user profile
- Update user
- Delete user  
  *(Restricted if dependent records exist — enforced by foreign key constraints)*

---

## 4.2 Family Members

- Add family member
- View all family members for a user
- Update family member
- Delete family member

All operations validate ownership and referential integrity.

---

## 4.3 Medical History

- Add medical history record for a family member
- View history for a family member
- Update medical history record
- Delete medical history record

Foreign key enforcement ensures that medical history cannot exist without a valid family member.

---

## 4.4 Clinics & Appointments

- View clinics
- Schedule appointment
- Update appointment status
- Cancel appointment

Appointment operations validate:

- Existing user
- Existing clinic
- ENUM status constraints

---

## 4.5 Awareness Content

- View awareness content
- Admin: create awareness content
- Admin: update awareness content
- Admin: delete awareness content

Administrative operations require role-based access control (RBAC).

---

# 5. Security Considerations

The backend enforces:

- Parameterized queries to prevent SQL injection
- Role-Based Access Control (RBAC)
- Controlled ENUM domains
- Foreign key constraints
- Restricted deletion rules (`ON DELETE RESTRICT`)

All database interactions pass through controlled execution paths.

---

# 6. Implementation Scope

The exact backend framework, deployment environment, and database connection configuration will be finalized after confirming the database schema implementation in Phase 4.

The academic focus of this phase is:

- Correct CRUD mapping to relational schema
- Constraint-aware query execution
- Clear separation between layers
- Maintainable modular backend design