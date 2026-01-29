# Phase 5 – Application
## Backend Logic

This phase describes the backend logic responsible for connecting the web application to the database, executing SQL queries, and returning results to the frontend.

---

## Backend Responsibilities
The backend layer is responsible for:
- Receiving requests from the frontend (CRUD operations)
- Validating user input
- Executing SQL queries against the relational database
- Returning structured results (JSON/HTML rendering)
- Handling errors and enforcing business rules

---

## Planned Backend Modules
- **Routing / Controllers:** Handles HTTP requests (e.g., `/family-members`, `/appointments`)
- **Database Access Layer:** Centralized SQL execution and connection management
- **Validation:** Input checks and error responses
- **Logging:** Basic logging for debugging and tracing query execution

---

## Planned Core Endpoints (High-Level)
### Users
- Create user
- Read user profile
- Update user
- Delete user (restricted if dependent data exists)

### Family Members
- Add family member
- View all family members for a user
- Update family member
- Delete family member

### Medical History
- Add medical history record for a family member
- View history for a family member
- Update medical history record
- Delete medical history record

### Clinics & Appointments
- View clinics
- Schedule appointment
- Update appointment status
- Cancel appointment

### Awareness Content
- View awareness content
- Admin: create/update/delete content

---

## Notes
The backend implementation details (framework, deployment, and connection configuration) will be finalized after the database DDL and schema are confirmed in Phase 4.
