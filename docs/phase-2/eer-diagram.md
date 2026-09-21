<div class="home-hero" markdown>
<div class="home-hero__text" markdown>

# **Phase 2 — Enhanced Entity–Relationship (EER) Diagram**

This phase presents the conceptual data model of the Sillah system using an Enhanced Entity–Relationship (EER) diagram.

The model captures entities, attributes, relationships, and structural constraints without considering physical implementation details.

[Design Explanation](../design-explanation/){ .md-button .md-button--primary }
[Phase 3 — Logical Design](../../phase-3/relational-schema/){ .md-button }
[Download Phase 2 Report](/phase-2/report.pdf){ .md-button }

</div>
</div>

---

<div class="phase-refresh" markdown>

## 1. Purpose of the EER Diagram

The EER diagram is designed to:

- Identify the major **entities** required by the system
- Define structural **relationships** between entities
- Capture **cardinality and participation constraints**
- Model data independently from implementation details
- Serve as the foundation for relational schema mapping in **Phase 3 — Logical Design**

This phase focuses strictly on conceptual abstraction.

---

## 2. Core Entities

Based on the application requirements, the following primary entities were identified:

<div class="grid cards">
<ul>
<li>
<p><span class="twemoji"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 4a4 4 0 0 1 4 4 4 4 0 0 1-4 4 4 4 0 0 1-4-4 4 4 0 0 1 4-4m0 2a2 2 0 0 0-2 2 2 2 0 0 0 2 2 2 2 0 0 0 2-2 2 2 0 0 0-2-2m0 7c2.67 0 8 1.33 8 4v3H4v-3c0-2.67 5.33-4 8-4m0 1.9c-2.97 0-6.1 1.46-6.1 2.1v1.1h12.2V17c0-.64-3.13-2.1-6.1-2.1Z"/></svg></span> <strong>User</strong></p>
</li>
<li>
<p><span class="twemoji"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13.07 10.41a5 5 0 0 0 0-5.82A3.39 3.39 0 0 1 15 4a3.5 3.5 0 0 1 0 7 3.39 3.39 0 0 1-1.93-.59M5.5 7.5A3.5 3.5 0 1 1 9 11a3.5 3.5 0 0 1-3.5-3.5m2 0A1.5 1.5 0 1 0 9 6a1.5 1.5 0 0 0-1.5 1.5M16 17v2H2v-2s0-4 7-4 7 4 7 4m-2 0c-.14-.78-1.33-2-5-2s-4.93 1.31-5 2m11.95-4A5.32 5.32 0 0 1 18 17v2h4v-2s0-3.63-6.06-4Z"/></svg></span> <strong>FamilyMember</strong></p>
</li>
<li>
<p><span class="twemoji"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m-7 0a1 1 0 0 1 1 1 1 1 0 0 1-1 1 1 1 0 0 1-1-1 1 1 0 0 1 1-1M5 15h3.11l1.51-2.85.76 5.77 3.69-4.71L15.89 15H19v4H5v-4m14-1.54h-2.47l-2.6-2.6-2.49 3.19-.94-6.97-3.33 6.38H5V5h2v1h10V5h2v8.46Z"/></svg></span> <strong>MedicalHistory</strong></p>
</li>
<li>
<p><span class="twemoji"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 8c.56 0 1 .43 1 1a1 1 0 0 1-1 1c-.57 0-1-.45-1-1 0-.57.43-1 1-1M2 2v9c0 2.96 2.19 5.5 5.14 5.91.62 3.01 3.28 5.09 6.36 5.09a6.5 6.5 0 0 0 6.5-6.5v-3.69c1.16-.42 2-1.52 2-2.81a3 3 0 0 0-3-3 3 3 0 0 0-3 3c0 1.29.84 2.4 2 2.81v3.6c0 2.5-2 4.5-4.5 4.5-2 0-3.68-1.21-4.28-3.01C12 16.3 14 13.8 14 11V2h-4v3h2v6a4 4 0 0 1-4 4 4 4 0 0 1-4-4V5h2V2H2Z"/></svg></span> <strong>HealthCondition</strong></p>
</li>
<li>
<p><span class="twemoji"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2 1 21h22M12 6l7.53 13H4.47M11 10v4h2v-4m-2 6v2h2v-2"/></svg></span> <strong>RiskAlert</strong></p>
</li>
<li>
<p><span class="twemoji"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 12h5v5h-5v-5m7-9h-1V1h-2v2H8V1H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 2v2H5V5h14M5 19V9h14v10H5Z"/></svg></span> <strong>Appointment</strong></p>
</li>
<li>
<p><span class="twemoji"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M2 22V7a1 1 0 0 1 1-1h4V2h10v4h4a1 1 0 0 1 1 1v15h-8v-5h-4v5H2M9 4v6h2V8h2v2h2V4h-2v2h-2V4H9M4 20h4v-3H4v3m0-5h4v-3H4v3m12 5h4v-3h-4v3m0-5h4v-3h-4v3m-6 0h4v-3h-4v3Z"/></svg></span> <strong>Clinic</strong></p>
</li>
<li>
<p><span class="twemoji"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21 4H3a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2M3 19V6h8v13H3m18 0h-8V6h8v13m-7-9.5h6V11h-6V9.5m0 2.5h6v1.5h-6V12m0 2.5h6V16h-6v-1.5Z"/></svg></span> <strong>AwarenessContent</strong></p>
</li>
</ul>
</div>

Each entity represents a distinct real-world concept that must be stored and managed within the system.

---

## 3. High-Level Relationships

The model captures the following primary relationships:

- A **User** manages one or more **FamilyMembers**
- A **FamilyMember** can have multiple **MedicalHistory** records
- A **MedicalHistory** record references exactly one **HealthCondition**
- A **RiskAlert** is generated based on detected medical patterns
- A **User** can schedule multiple **Appointments**
- An **Appointment** is associated with one **Clinic**
- **AwarenessContent** remains independent but accessible to users

These relationships reflect real-world ownership and dependency rules.

---

## 4. Relationship Summary

#### (Cardinality & Participation)

| Relationship                     | Cardinality | Participation           | Description                                                |
| -------------------------------- | ----------- | ----------------------- | ---------------------------------------------------------- |
| User → FamilyMember              | 1 : N       | Total on FamilyMember   | Each FamilyMember must belong to exactly one User          |
| FamilyMember → MedicalHistory    | 1 : N       | Total on MedicalHistory | Each MedicalHistory record must belong to one FamilyMember |
| MedicalHistory → HealthCondition | N : 1       | Total on MedicalHistory | Each MedicalHistory record references one HealthCondition  |
| User → Appointment               | 1 : N       | Total on Appointment    | Each Appointment must be scheduled by one User             |
| Appointment → Clinic             | N : 1       | Total on Appointment    | Each Appointment must occur at one Clinic                  |
| RiskAlert → Medical Context      | 1 : N       | Partial                 | Alerts are generated based on hereditary pattern detection |
| AwarenessContent                 | Independent | —                       | Educational materials not dependent on other entities      |

Participation constraints prevent orphan records and enforce ownership consistency.

---

## 5. Diagram Modules

To maintain clarity and modular separation of concerns, the EER model is divided into logical modules:

<div class="grid cards">
<ul>
<li>
<p><span class="twemoji"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11 15h2v2h-2v-2m0-8h2v6h-2V7m1-5C6.47 2 2 6.5 2 12a10 10 0 0 0 10 10 10 10 0 0 0 10-10A10 10 0 0 0 12 2m0 18a8 8 0 0 1-8-8 8 8 0 0 1 8-8 8 8 0 0 1 8 8 8 8 0 0 1-8 8Z"/></svg></span> <strong>Risk Alerts &amp; Analysis</strong></p>
<hr />
<p><a href="../alert-eer.html">Open the Diagram</a></p>
</li>
<li>
<p><span class="twemoji"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 1 3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4m0 2.18 7 3.12v4.92c0 1.7-.5 3.43-1.35 4.95C16 14.94 13.26 14.5 12 14.5c-1.26 0-4 .44-5.65 1.67C5.5 14.65 5 12.92 5 11.22V6.3l7-3.12M12 6a3.5 3.5 0 0 0-3.5 3.5A3.5 3.5 0 0 0 12 13a3.5 3.5 0 0 0 3.5-3.5A3.5 3.5 0 0 0 12 6m0 2a1.5 1.5 0 0 1 1.5 1.5A1.5 1.5 0 0 1 12 11a1.5 1.5 0 0 1-1.5-1.5A1.5 1.5 0 0 1 12 8m0 8.5c1.57 0 3.64.61 4.53 1.34C15.29 19.38 13.7 20.55 12 21c-1.7-.45-3.29-1.62-4.53-3.16.9-.73 2.96-1.34 4.53-1.34Z"/></svg></span> <strong>User &amp; Access Control</strong></p>
<hr />
<p><a href="../user-access-control-eer.html">Open the Diagram</a></p>
</li>
<li>
<p><span class="twemoji"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 5a3.5 3.5 0 0 0-3.5 3.5A3.5 3.5 0 0 0 12 12a3.5 3.5 0 0 0 3.5-3.5A3.5 3.5 0 0 0 12 5m0 2a1.5 1.5 0 0 1 1.5 1.5A1.5 1.5 0 0 1 12 10a1.5 1.5 0 0 1-1.5-1.5A1.5 1.5 0 0 1 12 7M5.5 8A2.5 2.5 0 0 0 3 10.5c0 .94.53 1.75 1.29 2.18.36.2.77.32 1.21.32.44 0 .85-.12 1.21-.32.37-.21.68-.51.91-.87A5.42 5.42 0 0 1 6.5 8.5v-.28c-.3-.14-.64-.22-1-.22m13 0c-.36 0-.7.08-1 .22v.28c0 1.2-.39 2.36-1.12 3.31.12.19.25.34.4.49a2.482 2.482 0 0 0 1.72.7c.44 0 .85-.12 1.21-.32.76-.43 1.29-1.24 1.29-2.18A2.5 2.5 0 0 0 18.5 8M12 14c-2.34 0-7 1.17-7 3.5V19h14v-1.5c0-2.33-4.66-3.5-7-3.5m-7.29.55C2.78 14.78 0 15.76 0 17.5V19h3v-1.93c0-1.01.69-1.85 1.71-2.52m14.58 0c1.02.67 1.71 1.51 1.71 2.52V19h3v-1.5c0-1.74-2.78-2.72-4.71-2.95M12 16c1.53 0 3.24.5 4.23 1H7.77c.99-.5 2.7-1 4.23-1Z"/></svg></span> <strong>Family &amp; Medical History</strong></p>
<hr />
<p><a href="../family-medical-history-eer.html">Open the Diagram</a></p>
</li>
<li>
<p><span class="twemoji"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.1 0-2 .9-2 2v14a2 2 0 0 0 2 2h14c1.11 0 2-.89 2-2V5a2 2 0 0 0-2-2m0 16H5V9h14v10M5 7V5h14v2H5m5.56 10.46 5.94-5.93-1.07-1.06-4.87 4.87-2.11-2.11-1.06 1.06 3.17 3.17Z"/></svg></span> <strong>Appointments, Clinics &amp; Awareness</strong></p>
<hr />
<p><a href="../appointments-clinics-awareness.html">Open the Diagram</a></p>
</li>
</ul>
</div>

---

## 6. Module Overview

#### User & Access Control

Models user identity, role-based access control (RBAC), and authorization structure.

#### Family & Medical History

Models family relationships and longitudinal tracking of medical conditions.

#### Risk Alerts & Analysis

Models automated alert generation and lifecycle management.

#### Appointments, Clinics & Awareness

Models scheduling workflows, clinic catalog data, and independent educational content.

---

## Phase 2 Outcome

The conceptual model established in this phase provides:

- Clear structural abstraction
- Defined ownership and participation constraints
- Modular organization of system domains

This structure serves as the normalized foundation for relational schema mapping in **Phase 3 — Logical Design**.

</div>
