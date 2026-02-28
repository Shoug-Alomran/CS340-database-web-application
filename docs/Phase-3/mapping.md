<div class="home-hero" markdown>
<div class="home-hero__text" markdown>

# **Phase 3 — Mapping from EER to Relational Model**

This section explains how the conceptual EER model from Phase 2 was transformed into the relational schema.

[EER Diagram](../../Phase-2/eer-diagram/){ .md-button .md-button--primary }
[Data Dictionary](../data-dictionary/){ .md-button }

</div>
</div>

---

<div class="phase-refresh" markdown>


## 1. Mapping Strategy

The mapping process followed standard EER-to-relational rules:

- Each strong entity became a base relation.
- 1:N relationships were mapped with foreign keys on the N-side.
- Domain restrictions were captured with ENUM columns.
- Integrity and validity rules were captured with PK/FK/CHECK constraints.

---

## 2. Entity-to-Relation Mapping

The following entities were mapped to relations:

- `User` -> `USER`
- `Clinic` -> `CLINIC`
- `HealthCondition` -> `HEALTH_CONDITION`
- `AwarenessContent` -> `AWARENESS_CONTENT`
- `FamilyMember` -> `FAMILY_MEMBER`
- `MedicalHistory` -> `MEDICAL_HISTORY`
- `HealthEvent` -> `HEALTH_EVENT`
- `RiskAlert` -> `RISK_ALERT`
- `Appointment` -> `APPOINTMENT`

---

## 3. Relationship Mapping

### 3.1 Core 1:N Relationships

- `FAMILY_MEMBER.user_id` -> `USER.user_id`
- `MEDICAL_HISTORY.member_id` -> `FAMILY_MEMBER.member_id`
- `MEDICAL_HISTORY.condition_id` -> `HEALTH_CONDITION.condition_id`
- `RISK_ALERT.member_id` -> `FAMILY_MEMBER.member_id`
- `APPOINTMENT.user_id` -> `USER.user_id`
- `APPOINTMENT.clinic_id` -> `CLINIC.clinic_id`

### 3.2 Extended Event Mapping

`HEALTH_EVENT` supports optional linkage to both family members and conditions:

- `HEALTH_EVENT.member_id` -> `FAMILY_MEMBER.member_id` (nullable)
- `HEALTH_EVENT.condition_id` -> `HEALTH_CONDITION.condition_id` (nullable)

This supports both linked and partially specified event records.

---

## 4. Constraint Mapping

Relational constraints preserve conceptual rules:

- Entity integrity: primary keys on all relations
- Referential integrity: foreign keys across dependent relations
- Domain integrity: ENUM constraints for controlled statuses/categories
- Validation integrity: CHECK constraints for business rules

---

## 5. Implementation Readiness

The resulting relational schema is normalized, dependency-safe, and ready for MySQL DDL implementation in Phase 4.

</div>
