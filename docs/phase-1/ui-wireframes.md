<div class="home-hero" markdown>
<div class="home-hero__text" markdown>

# **Phase 1 — Paper Prototype & UI Wireframes**

This section defines the logical screen structure and user interaction flow of the Sillah system.

Each interface component is mapped directly to database operations to ensure alignment between UI behavior and relational data design.

[Requirements](../requirements/){ .md-button .md-button--primary }
[System Architecture](../architecture/){ .md-button }

</div>
</div>

---

<div class="phase-refresh" markdown>

## 1. Design Principles

The prototype follows structured design principles to ensure database-driven consistency:

<div class="grid cards">
<ul>
<li>
<p><span class="twemoji"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 3C7.58 3 4 4.79 4 7v10c0 2.21 3.59 4 8 4s8-1.79 8-4V7c0-2.21-3.58-4-8-4m6 14c0 .5-2.13 2-6 2s-6-1.5-6-2v-2.23c1.61.78 3.72 1.23 6 1.23s4.39-.45 6-1.23V17m0-4.55c-1.3.95-3.58 1.55-6 1.55s-4.7-.6-6-1.55V9.64c1.47.83 3.61 1.36 6 1.36s4.53-.53 6-1.36v2.81M12 9C8.13 9 6 7.5 6 7s2.13-2 6-2 6 1.5 6 2-2.13 2-6 2Z"/></svg></span> <strong>Database-First Interaction</strong></p>
<hr />
<p>All screens map directly to database operations such as <code>INSERT</code>, <code>SELECT</code>, and <code>UPDATE</code>.</p>
</li>
<li>
<p><span class="twemoji"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="m20.5 3-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5a.5.5 0 0 0 .5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5a.5.5 0 0 0-.5-.5M10 5.47l4 1.4v11.66l-4-1.4V5.47m-5 .99 3-1.01v11.7l-3 1.16V6.46m14 11.08-3 1.01V6.86l3-1.16v11.84Z"/></svg></span> <strong>Minimal Navigation Depth</strong></p>
<hr />
<p>Core actions are accessible within 2–3 navigation levels to reduce complexity.</p>
</li>
<li>
<p><span class="twemoji"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M10 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4m0-6a2 2 0 1 1 0 4c-1.11 0-2-.89-2-2s.9-2 2-2m2 14H2v-3c0-2.67 5.33-4 8-4 1 0 2.38.19 3.71.56-.3.56-.48 1.18-.5 1.83-.98-.29-2.1-.49-3.21-.49-2.97 0-6.1 1.46-6.1 2.1v1.1H12V20m8.8-3v-1.5c0-1.4-1.4-2.5-2.8-2.5s-2.8 1.1-2.8 2.5V17c-.6 0-1.2.6-1.2 1.2v3.5c0 .7.6 1.3 1.2 1.3h5.5c.7 0 1.3-.6 1.3-1.2v-3.5c0-.7-.6-1.3-1.2-1.3m-1.3 0h-3v-1.5c0-.8.7-1.3 1.5-1.3s1.5.5 1.5 1.3V17Z"/></svg></span> <strong>Role-Based Access</strong></p>
<hr />
<p>Screens differ based on user roles (Citizen, Healthcare Provider, Administrator).</p>
</li>
<li>
<p><span class="twemoji"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17 19H7V5h10m0-4H7c-1.11 0-2 .89-2 2v18a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Z"/></svg></span> <strong>Mobile-Friendly Layout</strong></p>
<hr />
<p>Vertical-first design optimized for both mobile and web environments.</p>
</li>
</ul>
</div>

---

## 2. Main Screens Overview

Each screen corresponds to defined database interactions.

---

### 2.1 Login / Registration Screen

**Purpose:**  
Authenticate users and assign roles.

**Database Interaction:**

- `SELECT` user credentials
- Retrieve role from `USER`

---

### 2.2 User Dashboard (Citizen)

**Purpose:**  
Provide an overview of family health data and active alerts.

**Database Interaction:**

- `SELECT` from `FAMILY_MEMBER`
- `SELECT` from `ALERT`
- `SELECT` from `APPOINTMENT`

---

### 2.3 Add / Edit Family Member Screen

**Purpose:**  
Record family members and manage associated health information.

**Database Interaction:**

- `INSERT` into `FAMILY_MEMBER`
- `INSERT` into `HEALTH_EVENT`
- `UPDATE` existing records when edited

---

### 2.4 Risk Alerts Screen

**Purpose:**  
Display generated hereditary risk alerts and explanations.

**Database Interaction:**

- `SELECT` from `ALERT`
- Aggregation on `HEALTH_EVENT` to determine calculated risk level

---

### 2.5 Clinic Booking Screen

**Purpose:**  
Schedule preventive screening appointments.

**Database Interaction:**

- `SELECT` from `CLINIC`
- `INSERT` into `APPOINTMENT`
- Foreign key validation (`User ↔ Clinic`)

---

### 2.6 Awareness Hub Screen

**Purpose:**  
Provide educational content and preventive checklists.

**Database Interaction:**

- `SELECT` from `AWARENESS_CONTENT`
- `SELECT` / `UPDATE` checklist progress

---

## 3. Admin Interface (High-Level)

**Purpose:**  
Enable administrative management of system data.

**Database Interaction:**

- `INSERT`, `UPDATE`, and `DELETE` across multiple tables
- Role-Based Access Control (RBAC) enforcement

The admin interface operates with elevated permissions and is restricted to authorized roles only.

---

## 4. Scope and Limitations

This prototype represents:

- Logical screen flow
- Database-aligned UI mapping
- Role-based structural design

It does **not** include:

- Final styling implementation
- Animations or visual refinement
- Integration with external hospital systems

The prototype exists solely to validate interaction logic prior to implementation.

---

## Phase 1 Outcome

By defining UI wireframes aligned with database operations, this phase ensures:

- Direct traceability between UI and schema
- Clear mapping of CRUD operations
- Structured role-based interaction flow

These elements support smooth transition into conceptual modeling and database implementation phases.

</div>
