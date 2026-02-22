---
hide:
  - toc
---

<div class="home-hero" markdown>
<div class="home-hero__text" markdown>

# **Phase 4 — Sample Data**

This section provides sample `INSERT` statements used to validate:

- Primary key enforcement  
- Foreign key relationships  
- ENUM domain constraints  
- Basic relational integrity  

These examples assume the schema defined in `Phase4.sql` has already been created.

[SQL DDL Scripts](../sql-ddl/){ .md-button .md-button--primary }
[Constraints & Integrity](../constraints/){ .md-button }

</div>
</div>

---

# 1. USER

```sql
INSERT INTO User (first_name, last_name, email, password_hash, phone_number)
VALUES
('Shoug', 'Alomran', 'shoug@example.com', 'hashed_pw_1', '0500000000');
````

**Validation Focus:**

* Primary key auto-generation (if enabled)
* UNIQUE constraint on `email`
* NOT NULL enforcement

---

# 2. CLINIC

```sql
INSERT INTO Clinic (clinic_name, city, address, phone)
VALUES
('GreenCare Clinic', 'Riyadh', 'Olaya Street', '0110000000');
```

**Validation Focus:**

* Primary key enforcement
* NOT NULL on `clinic_name`

---

# 3. HEALTH_CONDITION

```sql
INSERT INTO HealthCondition (condition_name, category, description)
VALUES
('Hypertension', 'Cardiovascular', 'High blood pressure');
```

**Validation Focus:**

* Controlled condition registry
* NOT NULL on `condition_name`

---

# 4. FAMILY_MEMBER

### (Foreign Key → USER)

```sql
INSERT INTO FamilyMember (user_id, first_name, last_name, date_of_birth, relationship, blood_type, gender, status)
VALUES
(1, 'Sara', 'Alomran', '2004-05-12', 'Sister', 'O+', 'Female', 'Stable');
```

**Validation Focus:**

* Foreign key enforcement (`user_id`)
* ENUM validation (`blood_type`, `gender`)
* NOT NULL attributes

---

# 5. MEDICAL_HISTORY

### (Foreign Keys → FAMILY_MEMBER, HEALTH_CONDITION)

```sql
INSERT INTO MedicalHistory (member_id, condition_id, event_date, event_type, severity, symptoms, treatment, outcome)
VALUES
(1, 1, '2025-01-10', 'Diagnosis', 'Medium', 'Headache, fatigue', 'Lifestyle changes', 'Improved');
```

**Validation Focus:**

* Dual foreign key integrity
* ENUM validation (`severity`)
* Date consistency

---

# 6. RISK_ALERT

### (Foreign Key → FAMILY_MEMBER)

```sql
INSERT INTO RiskAlert (member_id, alert_type, risk_level, priority, status, description)
VALUES
(1, 'Chronic Risk', 'High', 'Urgent', 'New', 'Pattern indicates elevated cardiovascular risk.');
```

**Validation Focus:**

* Foreign key enforcement
* ENUM validation (`risk_level`, `status`)
* NOT NULL on `created_date` (if default applied)

---

# 7. APPOINTMENT

### (Foreign Keys → USER, CLINIC)

```sql
INSERT INTO Appointment (user_id, clinic_id, appointment_date, appointment_time, reason, status)
VALUES
(1, 1, '2026-02-20', '10:30:00', 'Follow-up consultation', 'Scheduled');
```

**Validation Focus:**

* Dual foreign key enforcement
* ENUM validation (`status`)
* Date and time format consistency

---

# 8. AWARENESS_CONTENT

```sql
INSERT INTO AwarenessContent (title, topic, content_type, content_body)
VALUES
('Managing Blood Pressure', 'Cardiovascular', 'Article', 'Practical steps to monitor and reduce blood pressure.');
```

**Validation Focus:**

* ENUM validation (`content_type`)
* NOT NULL enforcement (`title`)

---

# 9. HEALTH_EVENT

### (Standalone + CHECK Constraint)

```sql
INSERT INTO HealthEvent (event_date, severity, symptoms, condition_name, treatment, outcome, onset_age, status)
VALUES
('2026-02-01 09:00:00', 'Low', 'Mild headache', 'Hypertension', 'Rest and hydration', 'Resolved', 21, 'Closed');
```

**Validation Focus:**

* CHECK constraint enforcement (`onset_age` between 0 and 120 or NULL)
* ENUM validation (`severity`)
* Proper datetime format

---

# Sample Data Outcome

These inserts confirm that:

* Primary keys are enforced correctly
* Foreign key dependencies prevent orphan records
* ENUM constraints restrict invalid domain values
* CHECK constraints validate attribute ranges

The sample data verifies that the physical schema implementation aligns with the logical design defined in Phase 3.