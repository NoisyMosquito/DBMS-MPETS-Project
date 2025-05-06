
  <h1>🌊 ocean observer <span class="sdg-tag">SDG 14</span></h1>

  <p>this project was developed as part of the <strong>Database Management Systems</strong> course to showcase database design, SQL queries, and real-world application aligned with the <strong>UN SDG 14: Life Below Water</strong>.</p>

  <div class="highlight">
    <strong>Goal:</strong> to track marine pollution, monitor affected marine species, and support cleanup and conservation efforts using a database-backed system.
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
Pollution_Report(Report_ID, Type, Region, Date, Affected_Species_ID, Reporter)
Cleanup_Event(Event_ID, Organization, Region, Date, Waste_Removed_Kg)
Plantation_Log(Log_ID, Species_ID, Site, Plantation_Date, Growth_Percent)
  </pre>

  <h2>📄 SQL features implemented</h2>
  <ul>
    <li>Use of primary and foreign key constraints</li>
    <li>JOINS between species and reports</li>
    <li>Triggers for endangered species alerts</li>
    <li>Views for reporting affected species</li>
    <li>Stored Procedures and Cursors for summary reports</li>
  </ul>

  <h2>discussion</h2>
  <p>
    This project highlights the role of data in marine conservation. By combining pollution reporting and species monitoring, it can support researchers, NGOs, and governments in taking informed action to protect marine life.
  </p>

  <h2>related resources</h2>
  <ul>
    <li><a href="https://sdgs.un.org/goals/goal14" target="_blank">UN SDG 14 Details</a></li>
    <li><a href="https://www.noaa.gov" target="_blank">NOAA - Ocean Data</a></li>
  </ul>

</body>
</html>
