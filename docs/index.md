---
title: Database engineering, from concept to connection
description: Explore Sillah’s database engineering journey, from family health requirements and relational modeling to SQL and a full-stack application.
hide:
  - navigation
  - toc
---

<div class="landing">
<section class="data-hero" aria-labelledby="hero-title">
  <div class="hero-copy">
    <div class="eyebrow"><span class="status-dot"></span> CS340 / INTRODUCTION TO DATABASE SYSTEMS</div>
    <h1 id="hero-title">Every connection.<br>A stronger<br><em>foundation.</em></h1>
    <p class="hero-description">Behind every meaningful application is a thoughtfully designed database. Explore how we built Sillah’s data foundation, from the first idea to a connected system.</p>
    <div class="hero-actions"><a class="action action-primary" href="project-overview/introduction/">Explore the project <span aria-hidden="true">↗</span></a><a class="action action-secondary" href="#project-journey">Follow the journey <span aria-hidden="true">↓</span></a></div>
    <div class="hero-caption"><span class="tiny-line"></span> MODELED WITH PURPOSE. BUILT TO CONNECT.</div>
  </div>
  <div class="schema-scene" role="img" aria-label="Illustration of connected family health data: family members, medical history, and risk alerts linked through Sillah’s relational database.">
    <div class="scene-heading"><span><i></i> SILLAH / DATA ARCHITECTURE</span><span>FIG. 01</span></div>
    <svg class="schema-wires" viewBox="0 0 560 470" aria-hidden="true"><path d="M140 140H280V250M430 145H340V250M140 350H280V250M430 360H340V250"/><path class="wire-flow" d="M140 140H280V250M430 145H340V250M140 350H280V250M430 360H340V250"/><circle cx="280" cy="250" r="105"/><circle cx="280" cy="250" r="150"/></svg>
    <div class="entity entity-family"><div class="entity-title"><span>⊞</span> Family member <small>01</small></div><div><b>PK</b> member_id <span>INT</span></div><div><b>FK</b> family_id <span>INT</span></div><div><i></i> relationship <span>VARCHAR</span></div></div>
    <div class="entity entity-history"><div class="entity-title"><span>⌁</span> Medical history <small>02</small></div><div><b>PK</b> history_id <span>INT</span></div><div><b>FK</b> member_id <span>INT</span></div><div><i></i> condition <span>VARCHAR</span></div></div>
    <div class="database-core"><svg viewBox="0 0 48 48" aria-hidden="true"><ellipse cx="24" cy="12" rx="15" ry="6"/><path d="M9 12v23c0 8 30 8 30 0V12M9 23c0 8 30 8 30 0"/></svg><strong>Sillah</strong><span>RELATIONAL CORE</span></div>
    <div class="entity entity-alert"><div class="entity-title"><span>↗</span> Risk alert <small>03</small></div><div><b>PK</b> alert_id <span>INT</span></div><div><b>FK</b> member_id <span>INT</span></div></div>
    <div class="scene-note"><span class="status-dot"></span> Connected by design.<br><span>Conceptual architecture</span></div>
    <div class="scene-bottom"><span>STRUCTURE → INTEGRITY → CONNECTION</span><span>↗</span></div>
  </div>
</section>
<div class="foundation-strip"><div><strong>06</strong><span>Project phases</span></div><div><strong>04</strong><span>Contributors</span></div><div><strong>01</strong><span>Connected system</span></div><p>From <b>conceptual modeling</b><br>to <b>full-stack integration.</b></p></div>
<section class="journey-section" id="project-journey" aria-labelledby="journey-title">
  <div class="section-top"><div><span class="eyebrow">01 / THE PROCESS</span><h2 id="journey-title">An idea. Six phases.<br>A complete foundation.</h2></div><p>Follow the decisions, diagrams, and code<br>that bring the database to life.</p></div>
  <div class="phase-grid">
    <a class="phase-card" href="phase-0/project-idea/"><div class="phase-top"><span>PHASE 00</span><span>↗</span></div><span class="phase-symbol">✳</span><h3>Start with a purpose.</h3><p>The team, the problem, and the idea behind a preventive family health platform.</p><div class="phase-tags">PROPOSAL <span>·</span> TEAM FORMATION</div></a>
    <a class="phase-card" href="phase-1/application-concept/"><div class="phase-top"><span>PHASE 01</span><span>↗</span></div><span class="phase-symbol">⌘</span><h3>Make a clear plan.</h3><p>Define the requirements, map the architecture, and shape the user experience.</p><div class="phase-tags">REQUIREMENTS <span>·</span> WIREFRAMES</div></a>
    <a class="phase-card" href="phase-2/eer-diagram/"><div class="phase-top"><span>PHASE 02</span><span>↗</span></div><span class="phase-symbol">⊞</span><h3>Connect the dots.</h3><p>Translate real-world relationships into an enhanced entity–relationship model.</p><div class="phase-tags">EER MODEL <span>·</span> RELATIONSHIPS</div></a>
    <a class="phase-card" href="phase-3/relational-schema/"><div class="phase-top"><span>PHASE 03</span><span>↗</span></div><span class="phase-symbol">▤</span><h3>Give data structure.</h3><p>Build a relational schema with purposeful keys, normalization, and constraints.</p><div class="phase-tags">SCHEMA <span>·</span> NORMALIZATION</div></a>
    <a class="phase-card" href="phase-4/sql-ddl/"><div class="phase-top"><span>PHASE 04</span><span>↗</span></div><span class="phase-symbol">&lt;/&gt;</span><h3>Bring it into code.</h3><p>Create the tables, populate sample data, and enforce integrity with SQL.</p><div class="phase-tags">MYSQL <span>·</span> DATA INTEGRITY</div></a>
    <a class="phase-card phase-card-accent" href="phase-5/overview/"><div class="phase-top"><span>PHASE 05</span><span>↗</span></div><span class="phase-symbol">↔</span><h3>Make it work together.</h3><p>Connect queries, backend logic, and the frontend into one application.</p><div class="phase-tags">BACKEND <span>·</span> FULL-STACK</div></a>
  </div>
</section>
<section class="project-spotlight" aria-labelledby="spotlight-title"><div><span class="eyebrow">02 / THE APPLICATION</span><h2 id="spotlight-title">Family health.<br>Connected through data.</h2><p>Sillah brings family medical history, hereditary risk awareness, and preventive care workflows into one system. This is the engineering behind those connections.</p><a class="action action-primary" href="https://sillah-app.shoug-tech.com/" target="_blank" rel="noopener">Visit Sillah <span aria-hidden="true">↗</span></a></div><div class="stack-list"><a href="phase-2/eer-diagram/"><span>01</span><div><h3>Model the relationships</h3><p>Family, medical history, and preventive care.</p></div><b>↗</b></a><a href="phase-4/sql-ddl/"><span>02</span><div><h3>Protect the integrity</h3><p>Relational design. Consistent, reliable data.</p></div><b>↗</b></a><a href="phase-5/backend/"><span>03</span><div><h3>Connect the experience</h3><p>Real queries behind meaningful interactions.</p></div><b>↗</b></a></div></section>
<div class="section-top team-heading"><div><span class="eyebrow">03 / THE PEOPLE</span><h2>Built together.</h2></div><p>Four contributors. One shared foundation.<br>Select a team member to meet the people behind the project.</p></div>
</div>

<div class="grid cards team-grid" markdown>

- **Shoug Alomran**

  Risk alerts & analysis

- **Yara Albugami**

  Appointments & awareness

- **Rose Al Rakan**

  Users & access control

- **Raghad Abdulaziz**

  Family & medical history

</div>
