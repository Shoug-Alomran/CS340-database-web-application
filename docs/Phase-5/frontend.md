<div class="home-hero" markdown>
<div class="home-hero__text" markdown>

# **Phase 5 — Frontend Interface**

This section documents the user-facing interface and how each screen maps to backend/database operations.

[Backend Logic](../backend/){ .md-button .md-button--primary }
[SQL Queries](../basic-queries/){ .md-button }

</div>
</div>

---

<div class="phase-refresh" markdown>

## 1. Frontend Goals

The frontend is designed to be clear, fast, and task-oriented. Core goals:

- Simple CRUD flows for family and medical data
- Fast visibility into alerts and appointments
- Structured presentation of educational content
- Strong validation feedback before submission

## 2. Primary Screens and Data Flows

### 2.1 Dashboard

- Shows quick summaries for family members, open alerts, and upcoming appointments
- Read operations from `FamilyMember`, `RiskAlert`, and `Appointment`

### 2.2 Family Members

- Create/update/delete family member records
- Uses `FamilyMember` with owner scoping by `user_id`

### 2.3 Medical Records

- Historical entries: `MedicalHistory`
- Event log entries: `HealthEvent`
- Supports joins to `HealthCondition` for readable condition names

### 2.4 Risk Alerts

- Displays `RiskAlert` items by member and status
- Enables alert lifecycle updates (`New` -> `Viewed` -> `Resolved`)

### 2.5 Clinics and Appointments

- Clinic browsing from `Clinic`
- Booking/updates in `Appointment`
- Form controls constrain status to schema ENUM values

### 2.6 Awareness Hub

- Content feed from `AwarenessContent`
- Supports sorting by recency/topic/type

## 3. Validation and UX Rules

- Required fields blocked until complete
- Date/time/email format checks on client side
- ENUM-constrained values rendered as dropdowns/selectors
- Friendly inline error messages tied to each field
- Confirmation prompts for destructive actions

## 4. Integration Pattern

UI interaction flow:

1. User action in screen component
2. Frontend sends API request to backend endpoint
3. Backend validates and executes SQL
4. DB constraints enforce integrity
5. Response updates UI state

## 5. Accessibility and Responsiveness

- Works across desktop and mobile layouts
- Keyboard-focus visibility on controls
- High-contrast text and clear navigation labels

## Frontend Outcome

The interface is aligned with backend endpoints and schema constraints, ensuring that user actions map cleanly to valid database operations.

</div>
