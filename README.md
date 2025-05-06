
  <h1>🌊 ocean observer</h1>

  <p>this project was developed as part of the <strong>Database Management Systems</strong> course to showcase database design, SQL queries, and real-world application aligned with the <strong>UN SDG 14: Life Below Water</strong>.</p>

  <div class="highlight">
    <strong>objective:</strong> to track marine pollution, monitor affected marine species, and support cleanup and conservation efforts using a database-backed system.
  </div>

  <h2>features</h2>
  <ul>
    <li>record types of marine pollution (plastic, oil, chemicals, etc.)</li>
    <li>monitor water temperature, pH, oxygen levels</li>
    <li>track marine species health, conservation status, and pollution impact</li>
    <li>log marine species plantation and track growth stages</li>
    <li>store and analyze cleanup events by organizations</li>
    <li>generate statistical reports using SQL joins, views, and triggers</li>
  </ul>

  <h2>technologies used</h2>
  <ul>
    <li>MySQL for backend database</li>
    <li>SQL for queries, joins, triggers, views, and constraints</li>
    <li>frontend: JS, TS, CSS</li>
    <li>visualizations with Chart.js</li>
  </ul>

  <h2>🗃relational schema</h2>
  <pre>
Marine_Species(Species_ID, Species_Name, Species_Type, Conservation_Status, Affected_By_Pollution)
Reports(Report_ID, Type, Region, Date, Affected_Species_ID, Reporter)
Plantation_Efforts(Log_ID, Species_ID, Site, Plantation_Date, Growth_Percent)
  </pre>

  <h2>📄 SQL features implemented</h2>
  <ul>
    <li>primary and foreign key constraints</li>
    <li>JOINS between species and reports</li>
    <li>triggers for endangered species alerts</li>
    <li>views for reporting affected species</li>
    <li>stored procedures and cursors for summary reports</li>
  </ul>

  <h2>discussion</h2>
  <p>
    this project highlights the role of data in marine conservation. by combining pollution reporting and species monitoring, it can support researchers, NGOs, and governments in taking informed action to protect marine life.
  </p>

  <h2>related resources</h2>
  <ul>
    <li><a href="https://sdgs.un.org/goals/goal14" target="_blank">UN SDG 14 details</a></li>
    <li><a href="https://www.noaa.gov" target="_blank">NOAA - Ocean Data</a></li>
  </ul>

</body>
</html>
