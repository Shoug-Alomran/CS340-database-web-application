<div class="home-hero" markdown>
<div class="home-hero__text" markdown>

# **Phase 5 — Basic SQL Queries (q01–q20)**

This section documents the basic query set used in the application backend.

[Advanced Queries](../advanced-queries/){ .md-button .md-button--primary }
[Frontend Interface](../frontend/){ .md-button }

</div>
</div>

---

<div class="phase-refresh" markdown>

## Query Catalog

### q01 — Count users

```sql
SELECT COUNT(*) AS total_users FROM User;
```

### q02 — List latest users

```sql
SELECT user_id, first_name, last_name, email, phone_number, created_at
FROM User
ORDER BY created_at DESC
LIMIT 10;
```

### q03 — Search users by email

```sql
SELECT user_id, first_name, last_name, email
FROM User
WHERE email LIKE CONCAT('%', ?, '%')
ORDER BY user_id DESC;
```

### q04 — Count family members

```sql
SELECT COUNT(*) AS total_family_members FROM FamilyMember;
```

### q05 — List family members (simple)

```sql
SELECT member_id, user_id, first_name, last_name, relationship, date_of_birth
FROM FamilyMember
ORDER BY member_id DESC
LIMIT 15;
```

### q06 — Family members for a given user

```sql
SELECT member_id, first_name, last_name, relationship
FROM FamilyMember
WHERE user_id = ?
ORDER BY member_id DESC;
```

### q07 — Count health events

```sql
SELECT COUNT(*) AS total_health_events FROM HealthEvent;
```

### q08 — List events

```sql
SELECT event_id, member_id, condition_id, severity, event_date
FROM HealthEvent
ORDER BY event_date DESC
LIMIT 15;
```

### q09 — Events by severity

```sql
SELECT event_id, member_id, condition_id, severity, event_date
FROM HealthEvent
WHERE severity = ?
ORDER BY event_date DESC;
```

### q10 — List conditions

```sql
SELECT condition_id, condition_name
FROM HealthCondition
ORDER BY condition_name;
```

### q11 — List medical history

```sql
SELECT event_id, member_id, condition_id, diagnosis_date
FROM MedicalHistory
ORDER BY diagnosis_date DESC
LIMIT 15;
```

### q12 — History for one member

```sql
SELECT event_id, member_id, condition_id, diagnosis_date, notes
FROM MedicalHistory
WHERE member_id = ?
ORDER BY diagnosis_date DESC;
```

### q13 — List risk alerts

```sql
SELECT alert_id, member_id, risk_level, status, created_date
FROM RiskAlert
ORDER BY created_date DESC
LIMIT 15;
```

### q14 — Alerts for member

```sql
SELECT alert_id, member_id, risk_level, status, created_date
FROM RiskAlert
WHERE member_id = ?
ORDER BY created_date DESC;
```

### q15 — Count alerts by status

```sql
SELECT status, COUNT(*) AS total
FROM RiskAlert
GROUP BY status
ORDER BY total DESC;
```

### q16 — List events for a member

```sql
SELECT event_id, condition_id, severity, event_date
FROM HealthEvent
WHERE member_id = ?
ORDER BY event_date DESC;
```

### q17 — List High severity events

```sql
SELECT event_id, member_id, condition_id, event_date
FROM HealthEvent
WHERE severity = 'High'
ORDER BY event_date DESC;
```

### q18 — List High risk alerts

```sql
SELECT alert_id, member_id, status, created_date
FROM RiskAlert
WHERE risk_level = 'High'
ORDER BY created_date DESC;
```

### q19 — List users alphabetically

```sql
SELECT user_id, first_name, last_name, email
FROM User
ORDER BY last_name, first_name
LIMIT 20;
```

### q20 — List family members alphabetically

```sql
SELECT member_id, first_name, last_name, relationship
FROM FamilyMember
ORDER BY last_name, first_name
LIMIT 20;
```

## Notes

- `?` indicates a parameterized value.
- Query IDs map directly to backend query constants for implementation traceability.

</div>
