# Phase 5 – Application
## Basic SQL Queries

This section documents the basic SQL queries required by the database web application. These queries support standard data retrieval operations used throughout the system.

## Query 1: Retrieve all family members for a user

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

## Query 2: Retrieve medical history for a family member

This query retrieves the medical history records of a selected family member, including the associated health conditions.

```sql
SELECT hc.condition_name,
       mh.diagnosis_date,
       mh.severity_level
FROM MedicalHistory mh
JOIN HealthCondition hc
  ON mh.condition_id = hc.condition_id
WHERE mh.member_id = ?;
```

## Query 3: Retrieve all clinics

This query retrieves the list of clinics available in the system.

```sql
SELECT clinic_id,
       clinic_name,
       location,
       phone
FROM Clinic;
```

## Query 4: Retrieve appointments for a user

This query retrieves all appointments scheduled by a specific user, along with clinic information.

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

## Query 5: Retrieve awareness content

This query retrieves all published health awareness content available to users.

```sql
SELECT title,
       category,
       publish_date
FROM AwarenessContent;
```