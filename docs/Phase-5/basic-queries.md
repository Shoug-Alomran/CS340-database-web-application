---
hide:
  - toc
---

<div class="home-hero" markdown>
<div class="home-hero__text" markdown>

# **Phase 5 — Basic SQL Queries**

This section documents the core SQL queries used by the web application to support standard data retrieval operations.

These queries represent essential `SELECT` statements executed by backend endpoints to retrieve structured information from the relational database.

[Advanced Queries](../advanced-queries/){ .md-button .md-button--primary }
[Frontend Interface](../frontend/){ .md-button }

</div>
</div>

---

# 1. Retrieve All Family Members for a User

This query retrieves all family members associated with a specific user.

```sql
SELECT member_id,
       full_name,
       relationship_type,
       gender,
       date_of_birth
FROM FamilyMember
WHERE user_id = ?;
```

**Purpose:**
Used in the Family Members screen to display a user’s managed relatives.

**Parameter:**
`?` → user_id (provided by the authenticated session)

---

# 2. Retrieve Medical History for a Family Member

This query retrieves medical history records for a selected family member, including associated health condition information.

```sql
SELECT hc.condition_name,
       mh.diagnosis_date,
       mh.severity_level
FROM MedicalHistory mh
JOIN HealthCondition hc
  ON mh.condition_id = hc.condition_id
WHERE mh.member_id = ?;
```

**Purpose:**
Used in the Medical History screen to present condition details and severity levels.

**Parameter:**
`?` → member_id

---

# 3. Retrieve All Clinics

This query retrieves all clinics available in the system.

```sql
SELECT clinic_id,
       clinic_name,
       location,
       phone
FROM Clinic;
```

**Purpose:**
Used in the clinic browsing and appointment scheduling interface.

---

# 4. Retrieve Appointments for a User

This query retrieves all appointments scheduled by a specific user, including clinic information.

```sql
SELECT a.appointment_id,
       c.clinic_name,
       a.appointment_datetime,
       a.status
FROM Appointment a
JOIN Clinic c
  ON a.clinic_id = c.clinic_id
WHERE a.user_id = ?;
```

**Purpose:**
Used in the Appointments screen to display scheduled visits.

**Parameter:**
`?` → user_id

---

# 5. Retrieve Awareness Content

This query retrieves all available health awareness content.

```sql
SELECT title,
       category,
       publish_date
FROM AwarenessContent;
```

**Purpose:**
Used in the Awareness Hub to display educational materials.

---

# Query Design Notes

* Parameter placeholders (`?`) are used to prevent SQL injection.
* All queries follow relational integrity defined in Phase 4.
* JOIN operations are used only where necessary to preserve normalization.
* Queries are optimized for clarity and readability rather than advanced performance tuning.

These basic queries form the foundation of the application’s read operations and support standard user interactions across the system.