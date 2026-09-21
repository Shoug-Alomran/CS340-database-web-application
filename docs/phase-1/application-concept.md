<div class="home-hero" markdown>
<div class="home-hero__text" markdown>

# **Phase 1 — Application Concept**

This phase defines the system purpose, scope, and intended user interaction model for the Sillah preventive health management system.

[Requirements](../requirements/){ .md-button .md-button--primary }
[System Architecture](../architecture/){ .md-button }
[Download Phase 1 Report](/phase-1/report.pdf){ .md-button }

</div>
</div>

---

<div class="phase-refresh" markdown>

## Application Purpose and Scope

**Sillah (صلة)** is a preventive family health management system designed to support Saudi families affected by hereditary health conditions, including cardiac and other inherited diseases.

The system enables users to:

- Record structured family health histories
- Generate automated hereditary risk warnings
- Schedule preventive clinic visits

The primary purpose of the application is to:

- Raise preventive health awareness
- Simplify structured family health management
- Support early hereditary risk detection through data analysis

The system manages the following domains using a relational database management system:

- User accounts and roles
- Family members and relationships
- Health events and medical histories
- Risk warnings and alert metadata
- Clinic information and appointments
- Educational awareness content

### Scope Limitations

The following are explicitly **outside the scope** of this project:

- Integration with real hospital systems
- Real-time medical diagnoses
- Live data exchange with healthcare providers
- Clinical decision-making functionality

The system is designed strictly for **educational and preventive purposes** and does not provide medical diagnoses or treatment recommendations.

---

## Target Users

<div class="grid cards">
<ul>
<li>
<p><span class="twemoji"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 5.5A3.5 3.5 0 0 1 15.5 9a3.5 3.5 0 0 1-3.5 3.5A3.5 3.5 0 0 1 8.5 9 3.5 3.5 0 0 1 12 5.5M5 8c.56 0 1.08.15 1.53.42-.15 1.43.27 2.85 1.13 3.96C7.16 13.34 6.16 14 5 14a3 3 0 0 1-3-3 3 3 0 0 1 3-3m14 0a3 3 0 0 1 3 3 3 3 0 0 1-3 3c-1.16 0-2.16-.66-2.66-1.62a5.536 5.536 0 0 0 1.13-3.96c.45-.27.97-.42 1.53-.42M5.5 18.25c0-2.07 2.91-3.75 6.5-3.75s6.5 1.68 6.5 3.75V20h-13v-1.75M0 20v-1.5c0-1.39 1.89-2.56 4.45-2.9-.59.68-.95 1.62-.95 2.65V20H0m24 0h-3.5v-1.75c0-1.03-.36-1.97-.95-2.65 2.56.34 4.45 1.51 4.45 2.9V20Z"/></svg></span> <strong>Citizens / Families (Primary Users)</strong></p>
<hr />
<p>Record family medical histories, track hereditary conditions, and receive preventive alerts.</p>
</li>
<li>
<p><span class="twemoji"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18 14h-4v4h-4v-4H6v-4h4V6h4v4h4m2-8H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 18H4V4h16v16Z"/></svg></span> <strong>Healthcare Providers</strong></p>
<hr />
<p>View summarized preventive data when shared to support awareness and screening recommendations.</p>
</li>
<li>
<p><span class="twemoji"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 1 3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4m0 2.18 7 3.12v4.92c0 1.7-.5 3.43-1.35 4.95C16 14.94 13.26 14.5 12 14.5c-1.26 0-4 .44-5.65 1.67C5.5 14.65 5 12.92 5 11.22V6.3l7-3.12M12 6a3.5 3.5 0 0 0-3.5 3.5A3.5 3.5 0 0 0 12 13a3.5 3.5 0 0 0 3.5-3.5A3.5 3.5 0 0 0 12 6m0 2a1.5 1.5 0 0 1 1.5 1.5A1.5 1.5 0 0 1 12 11a1.5 1.5 0 0 1-1.5-1.5A1.5 1.5 0 0 1 12 8m0 8.5c1.57 0 3.64.61 4.53 1.34C15.29 19.38 13.7 20.55 12 21c-1.7-.45-3.29-1.62-4.53-3.16.9-.73 2.96-1.34 4.53-1.34Z"/></svg></span> <strong>Administrators</strong></p>
<hr />
<p>Manage system content, clinic data, and overall system integrity.</p>
</li>
</ul>
</div>

---

## Usage Scenarios

The following scenarios illustrate intended system interaction:

<div class="grid cards">
<ul>
<li>
<p><span class="twemoji"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m-7 0a1 1 0 0 1 1 1 1 1 0 0 1-1 1 1 1 0 0 1-1-1 1 1 0 0 1 1-1M5 15h3.11l1.51-2.85.76 5.77 3.69-4.71L15.89 15H19v4H5v-4m14-1.54h-2.47l-2.6-2.6-2.49 3.19-.94-6.97-3.33 6.38H5V5h2v1h10V5h2v8.46Z"/></svg></span> <strong>Scenario 1 — Risk Detection</strong></p>
<hr />
<p>A user inputs family medical history data.<br />
If hereditary patterns are detected, the system generates preventive risk alerts.</p>
</li>
<li>
<p><span class="twemoji"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="m16 11.78 4.24-7.33 1.73 1-5.23 9.05-6.51-3.75L5.46 19H22v2H2V3h2v14.54L9.5 8l6.5 3.78Z"/></svg></span> <strong>Scenario 2 — Condition Tracking</strong></p>
<hr />
<p>A user records a specific health condition and age of onset.<br />
The system stores structured data to improve longitudinal tracking and analytical evaluation.</p>
</li>
</ul>
</div>

---

## Phase 1 Outcome

By the end of Phase 1, the system concept establishes:

- Clear functional boundaries
- Defined target users
- Structured usage scenarios
- Explicit scope limitations

These foundations guide subsequent phases involving data modeling, relational schema design, normalization, and implementation.

</div>
