# Phase 2 – Conceptual Design
## Design Explanation

This section explains the **design decisions** behind the conceptual data model presented in the EER diagram.  
The goal of the conceptual design is to accurately model the problem domain while maintaining clarity, flexibility, and scalability.

---

## Design Approach
The EER model was developed using a **top-down approach**, starting from the application requirements and identifying the core data objects needed to support system functionality.

The design prioritizes:
- Clear separation of concerns
- Minimization of data redundancy
- Logical grouping of related information
- Support for future extension

---

## Entity Design Rationale

### User
The **User** entity represents registered system users.  
It stores identifying and contact information and serves as the primary access point to system functionality.

Each user may manage multiple family members, reflecting real-world family structures.

---

### FamilyMember
The **FamilyMember** entity represents individuals related to a user.  
This entity is separated from the User entity to allow tracking of hereditary conditions across multiple relatives without duplicating user data.

---

### MedicalHistory
The **MedicalHistory** entity stores historical health data for each family member.  
Separating medical history into its own entity allows:
- Multiple records per family member
- Temporal tracking of health conditions
- Flexible expansion for additional medical attributes

---

### HealthCondition
The **HealthCondition** entity standardizes disease and condition information.  
This avoids repetition of condition names and allows consistent referencing across medical records.

---

### RiskAlert
The **RiskAlert** entity represents automatically generated alerts based on detected hereditary patterns.  
It is modeled as a separate entity to support:
- Alert history tracking
- Status updates (active, resolved)
- Future analytical extensions

---

### Appointment and Clinic
Appointments are modeled independently and linked to clinics to reflect real scheduling workflows.  
This design allows:
- Multiple appointments per user
- Centralized clinic information
- Future support for different clinic types

---

### AwarenessContent
Awareness and educational materials are stored separately to allow:
- Independent management
- Easy updates
- Access without affecting core medical data

---

## Relationship Considerations
Relationships were designed with realistic cardinalities:
- One-to-many relationships where ownership or management exists
- Avoidance of unnecessary many-to-many relationships
- Clear ownership between users and their managed data

Participation constraints ensure that critical entities (such as medical history records) cannot exist without their parent entities.

---

## Transition to Logical Design
The conceptual design established in this phase provides a solid foundation for:

- Mapping entities to relations
- Identifying primary and foreign keys
- Applying normalization rules
- Implementing integrity constraints

These steps will be carried out in **Phase 3 – Logical Design**.
