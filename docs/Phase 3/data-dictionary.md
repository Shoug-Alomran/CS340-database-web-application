# Phase 3 – Logical Design
## Data Dictionary

This data dictionary defines the attributes used in the relational schema and their meanings.

---

### User
| Attribute | Description |
|---------|-------------|
| user_id | Unique identifier for a user |
| name | Full name of the user |
| email | User email address |
| phone | Contact phone number |
| role | System role (e.g., user, admin) |

---

### FamilyMember
| Attribute | Description |
|---------|-------------|
| member_id | Unique identifier for a family member |
| user_id | References the managing user |
| relationship_type | Relationship to the user |
| date_of_birth | Date of birth |
| gender | Gender of the family member |

---

### MedicalHistory
| Attribute | Description |
|---------|-------------|
| history_id | Medical history record identifier |
| member_id | Related family member |
| condition_id | Related health condition |
| diagnosis_date | Date of diagnosis |
| severity | Condition severity level |
