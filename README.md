# CS 340 – Full-Stack Database Web Application

## Live Application

The deployed web application is available at:

**https://sillah-app.shoug-tech.com**

---

## Project Overview

This project is a **full-stack, database-driven web application** developed as part of the  
**CS 340 – Introduction to Database Systems** course.

The goal of the project is to demonstrate how **relational databases are designed, implemented, and integrated into real software systems**, rather than focusing on database design in isolation.

The application includes:

- A user-facing web interface
- A backend layer implementing application logic
- A relational database for persistent storage
- SQL queries executed through backend code

---

## Project Objectives

- Design a complete relational database starting from conceptual modeling (EER)
- Translate the conceptual model into a logical relational schema
- Implement the database using SQL with integrity constraints
- Integrate SQL queries into backend application code
- Build a working web application that supports CRUD operations
- Demonstrate both basic and advanced SQL queries through the application

---

## Technologies Used

- **Frontend:** HTML, CSS, JavaScript
- **Backend:** Node.js
- **Database:** MySQL

---

## Project Structure

The project follows the phased structure defined in the CS 340 project specification:

- **Phase 0:** Team formation and project proposal
- **Phase 1:** Application concept and system planning
- **Phase 2:** Conceptual data modeling (EER)
- **Phase 3:** Logical database design
- **Phase 4:** Database implementation (SQL)
- **Phase 5:** Full-stack application development

Each phase builds cumulatively on the previous ones.

---

## Team Members

- **Shoug Alomran**
- **Yara Albugami**
- **Rose Al Rakan**
- **Raghad Abdulaziz**

Each team member contributes to both the **design** and **implementation** aspects of the project, including database modeling, SQL development, and application features.

---

## Notes

- All SQL queries are executed through the application backend.
- The project adheres to academic integrity guidelines.
- Each team member is able to explain and justify their individual contributions.

## Documentation website development

The website uses MkDocs Material. Edit content in `docs/`, the design system in
`docs/styles/extra.css`, and the shared footer in `overrides/partials/footer.html`.
Footer URLs use the MkDocs `url` filter so they work on nested pages and subpath deployments.

```sh
python3 -m pip install mkdocs-material
mkdocs serve
```

Before publishing, build and verify internal destinations:

```sh
mkdocs build --clean
python3 scripts/check_site_links.py
```

The deploy workflow runs both checks. The generated `site/` directory is tracked
in this repository and should be regenerated after source changes. Animations
respect the visitor’s reduced-motion preference.

The header’s Explore menu provides access to the full project library without sidebars.
Card groups use HTML lists to keep descriptions inside cards when Markdown
formatters change indentation.

Inner pages use `hooks/design.py`, `overrides/main.html`, and
`docs/javascripts/notebook.js` for the contextual page navigation, searchable
schema/query catalogs, and optional table-to-card views. Original Markdown
content remains readable without JavaScript. Standalone diagram controls live
in `docs/javascripts/artifacts.js`.

Brand assets are in `docs/assets/`: `database.svg`, `favicon.ico`,
`apple-touch-icon.png`, and `social-banner.png`. The banner is connected to
Open Graph and Twitter preview metadata. To regenerate the raster brand assets,
run `python3 scripts/create_brand_assets.py` on macOS with Pillow installed
(the generator uses the system Arial and Georgia fonts).

The current typography and content layouts are defined in
`docs/styles/refinement.css`. `docs/javascripts/content-views.js` adds the compact
page finder, normalization walkthrough, data dictionary inspector, workflow
paths, architecture flow, and technical disclosures. Each enhanced view retains
the source content, with full content available when JavaScript is disabled.
