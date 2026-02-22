---
hide:
  - toc
---

<div class="home-hero" markdown>
<div class="home-hero__text" markdown>

# **Phase 5 — Frontend Interface**

This section documents the frontend layer of the Sillah application and explains how users interact with database-driven functionality.

The interface serves as the presentation layer within the layered architecture defined in Phase 1.

[Backend Logic](../backend/){ .md-button .md-button--primary }
[SQL Queries](../basic-queries/){ .md-button }

</div>
</div>

---

# 1. Frontend Objectives

The frontend is designed to provide a structured and intuitive interface that allows users to:

- Manage family member records  
- Record and review medical history  
- View system-generated risk alerts  
- Schedule and manage clinic appointments  
- Access preventive awareness content  

The design emphasizes usability, clarity, and alignment with database operations.

---

# 2. Core Application Screens

## 2.1 Home / Dashboard

**Purpose:**  
Provides an overview of user-related data and quick navigation to major features.

**Database Interaction:**  

- `SELECT` queries on FAMILY_MEMBER  
- `SELECT` queries on RISK_ALERT  
- `SELECT` queries on APPOINTMENT  

---

## 2.2 Family Members

**Purpose:**  
Allows users to create, view, update, and delete family members.

**Database Interaction:**

- `INSERT` into FAMILY_MEMBER  
- `SELECT` from FAMILY_MEMBER  
- `UPDATE` FAMILY_MEMBER  
- `DELETE` from FAMILY_MEMBER  

---

## 2.3 Medical History

**Purpose:**  
Allows users to record and review medical events associated with a family member.

**Database Interaction:**

- `INSERT` into MEDICAL_HISTORY  
- `SELECT` from MEDICAL_HISTORY  
- Optional joins with HEALTH_CONDITION  

---

## 2.4 Risk Alerts

**Purpose:**  
Displays automatically generated hereditary risk alerts.

**Database Interaction:**

- `SELECT` from RISK_ALERT  
- Aggregation queries based on MEDICAL_HISTORY  

---

## 2.5 Clinics & Appointments

**Purpose:**  
Enables users to browse clinics and schedule or cancel appointments.

**Database Interaction:**

- `SELECT` from CLINIC  
- `INSERT` into APPOINTMENT  
- `UPDATE` APPOINTMENT  
- Foreign key validation (`user_id`, `clinic_id`)  

---

## 2.6 Awareness Content

**Purpose:**  
Provides educational materials and preventive health guidance.

**Database Interaction:**

- `SELECT` from AWARENESS_CONTENT  

---

# 3. Input Validation & User Experience

The frontend enforces usability and validation standards:

- Required fields must be completed before submission  
- Input formats (email, dates, time) are validated  
- ENUM-based fields are rendered as dropdown selections  
- Clear, user-friendly error messages are displayed near the relevant input field  
- Confirmation prompts are required for destructive actions (e.g., delete operations)

These measures improve reliability and reduce invalid database transactions.

---

# 4. Integration with Backend Layer

The frontend connects to backend endpoints, which execute SQL operations defined in Phase 4.

The interaction flow follows the layered architecture:

1. User performs action via UI  
2. Frontend sends request to backend  
3. Backend executes validated SQL query  
4. Database enforces constraints  
5. Response returned to frontend  

This separation ensures maintainability and data integrity.

---

# 5. Scope Note

UI wireframes were introduced in Phase 1.  

This phase documents how the visual interface transitions from prototype to functional database-connected implementation.

Styling, animations, and advanced UI enhancements are outside the primary academic scope.  
The focus remains on correct database interaction and integrity enforcement.