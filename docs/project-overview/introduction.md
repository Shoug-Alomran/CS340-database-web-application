<div class="home-hero" markdown>
<div class="home-hero__text" markdown>

# **CS340 Database Web Application Project**

This project is a full-stack, database-driven web application developed for  
**CS 340 — Introduction to Database Systems**.

The project demonstrates the complete lifecycle of relational database development — from requirements analysis and data modeling to SQL implementation and web-based CRUD operations.

[Phase 1 Overview](../../phase-1/application-concept/){ .md-button .md-button--primary }
[Database Schema](../../phase-2/eer-diagram/){ .md-button }

</div>
</div>

---

## What This Project Covers

<div class="grid cards">
<ul>
<li>
<p><span class="twemoji"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 3C7.58 3 4 4.79 4 7s3.58 4 8 4 8-1.79 8-4-3.58-4-8-4M4 9v3c0 2.21 3.58 4 8 4s8-1.79 8-4V9c0 2.21-3.58 4-8 4s-8-1.79-8-4m0 5v3c0 2.21 3.58 4 8 4s8-1.79 8-4v-3c0 2.21-3.58 4-8 4s-8-1.79-8-4Z"/></svg></span> <strong>Relational Database Design</strong></p>
<hr />
<p>Conceptual modeling (ER/EER), relational schema mapping, normalization, and integrity constraint enforcement.</p>
</li>
<li>
<p><span class="twemoji"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="m14.6 16.6 4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4m-5.2 0L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4Z"/></svg></span> <strong>SQL Implementation</strong></p>
<hr />
<p>Creation of tables, keys, constraints, and execution of structured queries through backend logic.</p>
</li>
<li>
<p><span class="twemoji"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2m-5.15 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95a8.03 8.03 0 0 1-4.33 3.56M14.34 14H9.66c-.1-.66-.16-1.32-.16-2 0-.68.06-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2M12 19.96c-.83-1.2-1.5-2.53-1.91-3.96h3.82c-.41 1.43-1.08 2.76-1.91 3.96M8 8H5.08A7.923 7.923 0 0 1 9.4 4.44C8.8 5.55 8.35 6.75 8 8m-2.92 8H8c.35 1.25.8 2.45 1.4 3.56A8.008 8.008 0 0 1 5.08 16m-.82-2C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2M12 4.03c.83 1.2 1.5 2.54 1.91 3.97h-3.82c.41-1.43 1.08-2.77 1.91-3.97M18.92 8h-2.95a15.65 15.65 0 0 0-1.38-3.56c1.84.63 3.37 1.9 4.33 3.56M12 2C6.47 2 2 6.5 2 12a10 10 0 0 0 10 10 10 10 0 0 0 10-10A10 10 0 0 0 12 2Z"/></svg></span> <strong>Full-Stack Integration</strong></p>
<hr />
<p>Connecting a relational database to a functional web interface supporting CRUD operations.</p>
</li>
<li>
<p><span class="twemoji"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6H6m0 2h7v5h5v11H6V4m2 8v2h8v-2H8m0 4v2h5v-2H8Z"/></svg></span> <strong>Structured Documentation</strong></p>
<hr />
<p>Phase-based documentation with reproducible design decisions, schema definitions, and implementation details.</p>
</li>
</ul>
</div>

---

## Objectives

- Design a relational database from concept to implementation
- Enforce entity integrity and referential integrity
- Implement SQL queries within backend application logic
- Deliver a fully functional web-based CRUD system
- Apply structured, phase-based development methodology

---

## Scope

This project emphasizes **database correctness, integrity enforcement, and system integration** rather than interface complexity.

The focus is on:

- Data modeling accuracy
- Proper schema design
- Constraint enforcement
- Query correctness
- Clean system architecture

All development follows structured academic guidelines to ensure clarity, reproducibility, and technical rigor.

---

## Project Phases

<div class="grid cards">
<ul>
<li>
<p><span class="twemoji"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M10 7v2h2v8h2V7h-4m2-5a10 10 0 0 1 10 10 10 10 0 0 1-10 10A10 10 0 0 1 2 12 10 10 0 0 1 12 2Z"/></svg></span> <strong>Phase I — Requirements &amp; Architecture</strong></p>
<hr />
<p>Define system scope, identify stakeholders, develop usage scenarios, and design the system architecture and UI prototype.</p>
<p><a href="../../phase-1/application-concept/">Phase I Overview</a></p>
</li>
<li>
<p><span class="twemoji"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M9 7v2h4v2h-2a2 2 0 0 0-2 2v4h6v-2h-4v-2h2a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2H9m3-5a10 10 0 0 1 10 10 10 10 0 0 1-10 10A10 10 0 0 1 2 12 10 10 0 0 1 12 2Z"/></svg></span> <strong>Phase II — Data Modeling</strong></p>
<hr />
<p>Develop EER diagrams, relational schemas, normalization, and enforce structural integrity constraints.</p>
<p><a href="../../phase-2/eer-diagram/">Phase II Overview</a></p>
</li>
<li>
<p><span class="twemoji"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15 15v-1.5a1.5 1.5 0 0 0-1.5-1.5 1.5 1.5 0 0 0 1.5-1.5V9a2 2 0 0 0-2-2H9v2h4v2h-2v2h2v2H9v2h4a2 2 0 0 0 2-2M12 2a10 10 0 0 1 10 10 10 10 0 0 1-10 10A10 10 0 0 1 2 12 10 10 0 0 1 12 2Z"/></svg></span> <strong>Phase III — Implementation</strong></p>
<hr />
<p>Implement the database using SQL, integrate with backend logic, and validate data operations.</p>
<p><a href="../../phase-3/relational-schema/">Phase III Overview</a></p>
</li>
<li>
<p><span class="twemoji"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M9 7v6h4v4h2V7h-2v4h-2V7H9m3-5a10 10 0 0 1 10 10 10 10 0 0 1-10 10A10 10 0 0 1 2 12 10 10 0 0 1 12 2Z"/></svg></span> <strong>Phase IV — Testing &amp; Finalization</strong></p>
<hr />
<p>Perform validation, query testing, system verification, and final documentation review.</p>
<p><a href="../../phase-4/sql-ddl/">Phase IV Overview</a></p>
</li>
</ul>
</div>

---

## Tools and Technologies

<div class="grid cards">
<ul>
<li>
<p><span class="twemoji"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 3C7.58 3 4 4.79 4 7v10c0 2.21 3.59 4 8 4s8-1.79 8-4V7c0-2.21-3.58-4-8-4m6 14c0 .5-2.13 2-6 2s-6-1.5-6-2v-2.23c1.61.78 3.72 1.23 6 1.23s4.39-.45 6-1.23V17m0-4.55c-1.3.95-3.58 1.55-6 1.55s-4.7-.6-6-1.55V9.64c1.47.83 3.61 1.36 6 1.36s4.53-.53 6-1.36v2.81M12 9C8.13 9 6 7.5 6 7s2.13-2 6-2 6 1.5 6 2-2.13 2-6 2Z"/></svg></span> <strong>Relational Database (MySQL)</strong></p>
<hr />
<p>Used to implement structured schema with primary keys, foreign keys, and constraints.</p>
</li>
<li>
<p>:material-language-sql: <strong>SQL</strong></p>
<hr />
<p>Data Definition Language (DDL) and Data Manipulation Language (DML).</p>
</li>
<li>
<p><span class="twemoji"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2m-5.15 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95a8.03 8.03 0 0 1-4.33 3.56M14.34 14H9.66c-.1-.66-.16-1.32-.16-2 0-.68.06-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2M12 19.96c-.83-1.2-1.5-2.53-1.91-3.96h3.82c-.41 1.43-1.08 2.76-1.91 3.96M8 8H5.08A7.923 7.923 0 0 1 9.4 4.44C8.8 5.55 8.35 6.75 8 8m-2.92 8H8c.35 1.25.8 2.45 1.4 3.56A8.008 8.008 0 0 1 5.08 16m-.82-2C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2M12 4.03c.83 1.2 1.5 2.54 1.91 3.97h-3.82c.41-1.43 1.08-2.77 1.91-3.97M18.92 8h-2.95a15.65 15.65 0 0 0-1.38-3.56c1.84.63 3.37 1.9 4.33 3.56M12 2C6.47 2 2 6.5 2 12a10 10 0 0 0 10 10 10 10 0 0 0 10-10A10 10 0 0 0 12 2Z"/></svg></span> <strong>Backend + Web Interface</strong></p>
<hr />
<p>Database-driven CRUD operations executed through application logic.</p>
</li>
<li>
<p><span class="twemoji"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17.5 14.33c.79 0 1.63.08 2.5.24v1.5c-.62-.16-1.46-.24-2.5-.24-1.9 0-3.39.33-4.5.99v-1.69c1.17-.53 2.67-.8 4.5-.8M13 12.46c1.29-.53 2.79-.79 4.5-.79.79 0 1.63.07 2.5.23v1.5c-.62-.16-1.46-.24-2.5-.24-1.9 0-3.39.34-4.5.99m4.5-3.65c-1.9 0-3.39.32-4.5 1V9.84c1.23-.56 2.73-.84 4.5-.84.79 0 1.63.08 2.5.23v1.55c-.74-.19-1.59-.28-2.5-.28m3.5 8V7c-1.04-.33-2.21-.5-3.5-.5-2.05 0-3.88.5-5.5 1.5v11.5c1.62-1 3.45-1.5 5.5-1.5 1.19 0 2.36.16 3.5.5m-3.5-14c2.35 0 4.19.5 5.5 1.5v14.56c0 .12-.05.24-.16.35-.11.09-.23.17-.34.17-.11 0-.19-.02-.25-.05-1.28-.69-2.87-1.03-4.75-1.03-2.05 0-3.88.5-5.5 1.5-1.34-1-3.17-1.5-5.5-1.5-1.66 0-3.25.36-4.75 1.07-.03.01-.07.01-.12.03-.04.01-.08.02-.13.02-.11 0-.23-.04-.34-.12a.475.475 0 0 1-.16-.35V6c1.34-1 3.18-1.5 5.5-1.5 2.33 0 4.16.5 5.5 1.5 1.34-1 3.17-1.5 5.5-1.5Z"/></svg></span> <strong>MkDocs (Material)</strong></p>
<hr />
<p>Structured documentation framework for clean, academic project publication.</p>
</li>
</ul>
</div>

---

## Team Collaboration

- **GitHub + Documentation Website** — Version control and structured phase access
- **WhatsApp** — Coordination and quick clarifications
- **Google Docs** — Collaborative drafting and review

---

## Individual Contributions (Phase I)

| Member               | Contribution                                                                                |
| -------------------- | ------------------------------------------------------------------------------------------- |
| **Yara Albugami**    | Defined target users, usage scenarios, and system requirements.                             |
| **Shoug Alomran**    | Designed system architecture and UI wireframes; aligned interface with database operations. |
| **Rose Al Rakan**    | Defined core data requirements and supported documentation structure.                       |
| **Raghad Abdulaziz** | Assisted with requirement refinement, system review, and documentation consistency.         |

---
