<div class="home-hero" markdown>
<div class="home-hero__text" markdown>

# **Phase 1 — System Architecture**

This section defines the high-level architectural structure of the Sillah system and the design principles guiding its implementation.

[Application Concept](../application-concept/){ .md-button .md-button--primary }
[UI Wireframes](../ui-wireframes/){ .md-button }

</div>
</div>

---

<div class="phase-refresh" markdown>

## High-Level Architecture

Sillah adopts a **three-layer (Layered) Architecture** to ensure clear separation of responsibilities, maintainability, and structured development.

<div class="grid cards">
<ul>
<li>
<p><span class="twemoji"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21 16V4H3v12h18m0-14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-7v2h2v2H8v-2h2v-2H3a2 2 0 0 1-2-2V4c0-1.11.89-2 2-2h18M5 6h9v5H5V6m10 0h4v2h-4V6m4 3v5h-4V9h4M5 12h4v2H5v-2m5 0h4v2h-4v-2Z"/></svg></span> <strong>Presentation Layer</strong></p>
<hr />
<p>Handles all user interactions, including user interfaces, form submissions, and display of system responses.</p>
</li>
<li>
<p><span class="twemoji"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.9 18.45c1.35 0 2.45-1.1 2.45-2.45s-1.1-2.45-2.45-2.45c-1.36 0-2.45 1.1-2.45 2.45s1.09 2.45 2.45 2.45m5.2-1.77 1.48 1.16c.13.11.17.29.08.45l-1.4 2.42a.35.35 0 0 1-.43.15l-1.74-.7c-.36.28-.76.51-1.18.69l-.27 1.85c-.02.17-.17.3-.34.3h-2.8c-.18 0-.32-.13-.35-.3l-.26-1.85c-.43-.18-.82-.41-1.18-.69l-1.75.7c-.15.06-.34 0-.42-.15l-1.4-2.42a.351.351 0 0 1 .08-.45l1.48-1.16-.05-.68.05-.69-1.48-1.15a.353.353 0 0 1-.08-.45l1.4-2.42c.08-.16.27-.22.42-.16l1.75.71c.36-.28.75-.52 1.18-.69l.26-1.86c.03-.16.17-.29.35-.29h2.8c.17 0 .32.13.34.29l.27 1.86c.42.17.82.41 1.18.69l1.74-.71c.17-.06.34 0 .43.16l1.4 2.42c.09.15.05.34-.08.45l-1.48 1.15.05.69-.05.68M6.69 8.07c.87 0 1.57-.7 1.57-1.57 0-.87-.7-1.58-1.57-1.58A1.58 1.58 0 0 0 5.11 6.5c0 .87.71 1.57 1.58 1.57m3.34-1.13.97.74c.07.07.09.19.03.29l-.9 1.56c-.05.1-.17.14-.27.1l-1.12-.45-.74.44-.19 1.19c-.02.11-.11.19-.22.19h-1.8c-.12 0-.21-.08-.23-.19L5.4 9.62l-.76-.44-1.14.45c-.09.04-.2 0-.26-.1l-.9-1.56c-.06-.1-.03-.22.05-.29l.95-.74-.03-.44.03-.44-.95-.74a.229.229 0 0 1-.05-.29l.9-1.56c.06-.1.17-.14.26-.1l1.13.45.77-.44.16-1.19c.02-.11.11-.19.23-.19h1.8c.11 0 .2.08.22.19L8 3.38l.74.44 1.12-.45c.1-.04.22 0 .27.1l.9 1.56c.06.1.04.22-.03.29l-.97.74.03.44-.03.44Z"/></svg></span> <strong>Business Logic / Domain Layer</strong></p>
<hr />
<p>Implements core system functionality, business rules, validation logic, and risk detection mechanisms.</p>
</li>
<li>
<p><span class="twemoji"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 3C7.58 3 4 4.79 4 7v10c0 2.21 3.59 4 8 4s8-1.79 8-4V7c0-2.21-3.58-4-8-4m6 14c0 .5-2.13 2-6 2s-6-1.5-6-2v-2.23c1.61.78 3.72 1.23 6 1.23s4.39-.45 6-1.23V17m0-4.55c-1.3.95-3.58 1.55-6 1.55s-4.7-.6-6-1.55V9.64c1.47.83 3.61 1.36 6 1.36s4.53-.53 6-1.36v2.81M12 9C8.13 9 6 7.5 6 7s2.13-2 6-2 6 1.5 6 2-2.13 2-6 2Z"/></svg></span> <strong>Data / Integration Layer</strong></p>
<hr />
<p>Manages structured data storage using a relational database management system and supports potential future integration with external systems.</p>
</li>
</ul>
</div>

---

## Architectural Pattern

Sillah follows the **Layered Architecture Pattern**.

In this pattern:

- Each layer communicates only with the layer directly below or above it
- Direct cross-layer access is restricted
- Responsibilities are clearly divided

This structure enhances modularity and simplifies maintenance.

---

## Design Rationale

The layered approach was selected for the following reasons:

- **Separation of Concerns**  
  Each layer focuses on a specific responsibility, reducing complexity.

- **Maintainability**  
  Changes in one layer (e.g., UI modifications) do not require restructuring the entire system.

- **Testability**  
  Business logic can be tested independently of the presentation and data layers.

- **Scalability (Future Consideration)**  
  The architecture allows controlled extension, such as integrating external systems in later iterations.

---

## Architectural Outcome

By adopting the Layered Architecture pattern, the system achieves:

- Clear modular structure
- Logical isolation of business rules
- Structured database interaction
- Controlled data flow between components

This architectural foundation supports the implementation phases that follow, particularly relational schema design and backend integration.

</div>
