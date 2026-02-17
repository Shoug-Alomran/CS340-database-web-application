# Phase 3 – Logical Design
## Data Dictionary

The data dictionary defines attribute types and constraints for each relation.

---

## USER
| Attribute | Data Type | Description | Constraints |
|---|---|---|---|
| user_id | INT | Unique user identifier | Primary Key |
| first_name | VARCHAR(50) | User first name | NOT NULL |
| last_name | VARCHAR(50) | User last name | NOT NULL |
| email | VARCHAR(100) | User email address | UNIQUE, NOT NULL |
| password_hash | VARCHAR(255) | Encrypted password | NOT NULL |
| phone_number | VARCHAR(20) | Contact number |  |
| created_at | DATETIME | Account creation timestamp | NOT NULL |

---

## FAMILY_MEMBER
| Attribute | Data Type | Description | Constraints |
|---|---|---|---|
| member_id | INT | Unique family member identifier | Primary Key |
| user_id | INT | Owner of family member | Foreign Key |
| first_name | VARCHAR(50) | First name | NOT NULL |
| last_name | VARCHAR(50) | Last name | NOT NULL |
| date_of_birth | DATE | Date of birth | NOT NULL |
| relationship | VARCHAR(50) | Relationship to user |  |
| contact_phone | VARCHAR(20) | Contact number |  |
| medical_history | TEXT | General notes |  |
| blood_type | VARCHAR(5) | Blood type |  |
| gender | VARCHAR(10) | Gender |  |
| status | VARCHAR(30) | Overall condition |  |

---

## HEALTH_CONDITION
| Attribute | Data Type | Description | Constraints |
|---|---|---|---|
| condition_id | INT | Unique condition identifier | Primary Key |
| condition_name | VARCHAR(100) | Disease/condition name | NOT NULL |
| category | VARCHAR(50) | Condition category |  |
| description | TEXT | Condition description |  |

---

## MEDICAL_HISTORY
| Attribute | Data Type | Description | Constraints |
|---|---|---|---|
| event_id | INT | Unique medical history record | Primary Key |
| member_id | INT | Related family member | Foreign Key |
| condition_id | INT | Related condition | Foreign Key |
| event_date | DATE | Date of diagnosis | NOT NULL |
| event_type | VARCHAR(50) | Type of medical event |  |
| diagnosis | TEXT | Diagnosis details |  |
| severity | VARCHAR(20) | Severity level |  |
| symptoms | TEXT | Reported symptoms |  |
| treatment | TEXT | Treatment information |  |
| outcome | TEXT | Treatment outcome |  |

---

## RISK_ALERT
| Attribute | Data Type | Description | Constraints |
|---|---|---|---|
| alert_id | INT | Unique alert identifier | Primary Key |
| member_id | INT | Related family member | Foreign Key |
| alert_type | VARCHAR(50) | Type of alert |  |
| risk_level | VARCHAR(20) | Risk level |  |
| priority | VARCHAR(20) | Alert priority |  |
| status | VARCHAR(20) | Alert status |  |
| notes | TEXT | Medical notes |  |
| description | TEXT | Alert explanation |  |
| created_date | DATETIME | Date generated | NOT NULL |
| resolved_date | DATETIME | Date resolved |  |

---

## CLINIC
| Attribute | Data Type | Description | Constraints |
|---|---|---|---|
| clinic_id | INT | Unique clinic identifier | Primary Key |
| clinic_name | VARCHAR(100) | Clinic name | NOT NULL |
| city | VARCHAR(50) | Clinic city |  |
| address | VARCHAR(150) | Clinic address |  |
| phone | VARCHAR(20) | Contact phone |  |

---

## APPOINTMENT
| Attribute | Data Type | Description | Constraints |
|---|---|---|---|
| appointment_id | INT | Unique appointment ID | Primary Key |
| user_id | INT | Scheduling user | Foreign Key |
| clinic_id | INT | Associated clinic | Foreign Key |
| appointment_date | DATE | Appointment date | NOT NULL |
| appointment_time | TIME | Appointment time | NOT NULL |
| reason | TEXT | Appointment reason |  |
| status | VARCHAR(20) | Appointment status |  |

---

## AWARENESS_CONTENT
| Attribute | Data Type | Description | Constraints |
|---|---|---|---|
| content_id | INT | Unique content ID | Primary Key |
| title | VARCHAR(150) | Content title | NOT NULL |
| topic | VARCHAR(100) | Health topic |  |
| content_type | VARCHAR(30) | Article / Video / Infographic |  |
| content_body | TEXT | Main content |  |
| created_at | DATETIME | Date created | NOT NULL |

---

## HEALTH_EVENT
| Attribute | Data Type | Description | Constraints |
|---|---|---|---|
| event_id | INT | Unique event ID | Primary Key |
| event_date | DATETIME | Event time | NOT NULL |
| severity | VARCHAR(20) | Severity level |  |
| symptoms | TEXT | Event symptoms |  |
| condition_name | VARCHAR(100) | Condition name |  |
| treatment | TEXT | Treatment |  |
| outcome | TEXT | Event result |  |
| event_type | VARCHAR(50) | Event category |  |
| diagnosis | TEXT | Overall findings |  |
| diagnosis_date | DATE | Date of diagnosis |  |
| notes | TEXT | Medical notes |  |
| onset_age | INT | Age during event |  |
| status | VARCHAR(30) | Event status |  |
