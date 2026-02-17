# Phase 4 – Database Implementation
## Sample Data

This section provides sample insert statements to validate:
- Primary keys
- Foreign keys
- ENUM constraints
- Basic relational integrity

> These examples assume the schema from `Phase4.sql` has already been created.

---

## 1) User

```sql
INSERT INTO User (first_name, last_name, email, password_hash, phone_number)
VALUES
('Shoug', 'Alomran', 'shoug@example.com', 'hashed_pw_1', '0500000000');
```

---

## 2) Clinic

```sql
INSERT INTO Clinic (clinic_name, city, address, phone)
VALUES
('GreenCare Clinic', 'Riyadh', 'Olaya Street', '0110000000');
```

---

## 3) HealthCondition

```sql
INSERT INTO HealthCondition (condition_name, category, description)
VALUES
('Hypertension', 'Cardiovascular', 'High blood pressure');
```

---

## 4) FamilyMember (FK → User)

```sql
INSERT INTO FamilyMember (user_id, first_name, last_name, date_of_birth, relationship, blood_type, gender, status)
VALUES
(1, 'Sara', 'Alomran', '2004-05-12', 'Sister', 'O+', 'Female', 'Stable');
```

---

## 5) MedicalHistory (FK → FamilyMember, HealthCondition)

```sql
INSERT INTO MedicalHistory (member_id, condition_id, event_date, event_type, severity, symptoms, treatment, outcome)
VALUES
(1, 1, '2025-01-10', 'Diagnosis', 'Medium', 'Headache, fatigue', 'Lifestyle changes', 'Improved');
```

---

## 6) RiskAlert (FK → FamilyMember)

```sql
INSERT INTO RiskAlert (member_id, alert_type, risk_level, priority, status, description)
VALUES
(1, 'Chronic Risk', 'High', 'Urgent', 'New', 'Pattern indicates elevated cardiovascular risk.');
```

---

## 7) Appointment (FK → User, Clinic)

```sql
INSERT INTO Appointment (user_id, clinic_id, appointment_date, appointment_time, reason, status)
VALUES
(1, 1, '2026-02-20', '10:30:00', 'Follow-up consultation', 'Scheduled');
```

---

## 8) AwarenessContent

```sql
INSERT INTO AwarenessContent (title, topic, content_type, content_body)
VALUES
('Managing Blood Pressure', 'Cardiovascular', 'Article', 'Practical steps to monitor and reduce blood pressure.');
```

---

## 9) HealthEvent (standalone + CHECK constraint)

```sql
INSERT INTO HealthEvent (event_date, severity, symptoms, condition_name, treatment, outcome, onset_age, status)
VALUES
('2026-02-01 09:00:00', 'Low', 'Mild headache', 'Hypertension', 'Rest and hydration', 'Resolved', 21, 'Closed');
```