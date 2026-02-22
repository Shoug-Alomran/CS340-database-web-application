---
hide:
  - toc
---

<div class="home-hero" markdown>
<div class="home-hero__text" markdown>

# **Phase 3 — Relational Schema**

This section presents the logical relational schema derived from the conceptual EER model developed in Phase 2.

One-to-many (1:N) relationships are implemented by placing foreign keys on the N-side of each relationship.

[Mapping Explanation](../mapping/){ .md-button .md-button--primary }
[Data Dictionary](../data-dictionary/){ .md-button }

</div>
</div>

---

# 1. Relations Overview

The following relations define the logical database structure.

---

## 1.1 USER

```

USER(
user_id PK,
first_name,
last_name,
email UNIQUE,
password_hash,
phone_number,
created_at
)

```

---

## 1.2 FAMILY_MEMBER

```

FAMILY_MEMBER(
member_id PK,
user_id FK → USER.user_id,
first_name,
last_name,
date_of_birth,
relationship,
contact_phone,
medical_history,
blood_type,
gender,
status
)

```

---

## 1.3 HEALTH_CONDITION

```

HEALTH_CONDITION(
condition_id PK,
condition_name,
category,
description
)

```

---

## 1.4 MEDICAL_HISTORY

```

MEDICAL_HISTORY(
event_id PK,
member_id FK → FAMILY_MEMBER.member_id,
condition_id FK → HEALTH_CONDITION.condition_id,
event_date,
event_type,
diagnosis,
severity,
symptoms,
treatment,
outcome
)

```

---

## 1.5 RISK_ALERT

```

RISK_ALERT(
alert_id PK,
member_id FK → FAMILY_MEMBER.member_id,
alert_type,
risk_level,
priority,
status,
notes,
description,
created_date,
resolved_date
)

```

---

## 1.6 CLINIC

```

CLINIC(
clinic_id PK,
clinic_name,
city,
address,
phone
)

```

---

## 1.7 APPOINTMENT

```

APPOINTMENT(
appointment_id PK,
user_id FK → USER.user_id,
clinic_id FK → CLINIC.clinic_id,
appointment_date,
appointment_time,
reason,
status
)

```

---

## 1.8 AWARENESS_CONTENT

```

AWARENESS_CONTENT(
content_id PK,
title,
topic,
content_type,
content_body,
created_at
)

```

---

## 1.9 HEALTH_EVENT

```

HEALTH_EVENT(
event_id PK,
event_date,
severity,
symptoms,
condition_name,
treatment,
outcome,
event_type,
diagnosis,
diagnosis_date,
notes,
onset_age,
status
)

```

---

# 2. Integrity Characteristics

The relational schema enforces:

- Primary key constraints for entity integrity  
- Foreign key constraints for referential integrity  
- Unique constraint on `USER.email`  
- Structured separation of dependent and independent entities  

This schema preserves the structural rules defined in the conceptual EER model and prepares the database for SQL implementation in Phase 4.