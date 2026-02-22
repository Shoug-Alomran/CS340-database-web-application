---
hide:
  - toc
---

<div class="home-hero" markdown>
<div class="home-hero__text" markdown>

# **Phase 3 — Mapping from EER Model to Relational Model**

This section explains how the conceptual EER model developed in Phase 2 was systematically transformed into a relational schema suitable for implementation.

[EER Diagram](../../Phase-2/eer-diagram/){ .md-button .md-button--primary }
[Data Dictionary](../data-dictionary/){ .md-button }

</div>
</div>

---

# 1. Mapping Strategy

The logical schema was derived directly from the conceptual EER model.

The mapping process followed standard transformation rules from EER to relational design:

- Each strong entity was mapped to a separate relation.
- One-to-many (1:N) relationships were implemented using foreign keys placed on the N-side.
- Independent entities were mapped to standalone relations.
- Primary keys uniquely identify each tuple within its respective relation.
- Referential integrity is preserved using foreign key constraints.

This approach ensures structural consistency between conceptual and logical representations.

---

# 2. Entity-to-Relation Mapping

### Strong Entities → Relations

Each strong entity in the EER model was converted into a corresponding table:

- `USER`
- `FAMILY_MEMBER`
- `HEALTH_CONDITION`
- `MEDICAL_HISTORY`
- `RISK_ALERT`
- `CLINIC`
- `APPOINTMENT`
- `AWARENESS_CONTENT`
- `HEALTH_EVENT`

Each relation contains:

- A primary key  
- Attribute set derived from the entity  
- Foreign keys where required  

---

# 3. Relationship Mapping

### 1 : N Relationships

One-to-many relationships were implemented by placing a foreign key in the relation on the N-side.

Examples:

- `FAMILY_MEMBER.user_id` → references `USER.user_id`
- `MEDICAL_HISTORY.member_id` → references `FAMILY_MEMBER.member_id`
- `MEDICAL_HISTORY.condition_id` → references `HEALTH_CONDITION.condition_id`
- `APPOINTMENT.user_id` → references `USER.user_id`
- `APPOINTMENT.clinic_id` → references `CLINIC.clinic_id`

This ensures:

- Ownership consistency  
- Referential integrity  
- Prevention of orphan records  

---

# 4. Independent Entities

Entities without mandatory dependency relationships were mapped as standalone tables.

Example:

- `AWARENESS_CONTENT`

This allows modular content management without foreign key dependency.

---

# 5. Integrity Preservation

The relational schema preserves the constraints defined in the conceptual model by enforcing:

- Primary key constraints (entity integrity)  
- Foreign key constraints (referential integrity)  
- NOT NULL constraints (participation enforcement)  

This ensures that the relational design faithfully represents the conceptual EER structure.

---

# 6. Preparation for Implementation

The resulting relational structure:

- Maintains conceptual relationships  
- Eliminates redundancy  
- Supports normalization  
- Is ready for SQL implementation in Phase 4  

The mapping process provides a direct and traceable transition from conceptual modeling to database implementation.