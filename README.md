
  <h1>🌊 Marine Pollution Tracking & Marine Species Monitoring System <span class="sdg-tag">SDG 14</span></h1>

  <p>This project is developed as part of the <strong>Database Management Systems</strong> course to showcase database design, SQL queries, and real-world application aligned with the <strong>United Nations Sustainable Development Goal 14: Life Below Water</strong>.</p>

  <div class="highlight">
    <strong>Goal:</strong> To track marine pollution, monitor affected marine species, and support cleanup and conservation efforts using a database-backed system.
  </div>

  <h2>📌 Features</h2>
  <ul>
    <li>Record types of marine pollution (plastic, oil, chemicals, etc.)</li>
    <li>Monitor water temperature, pH, oxygen levels</li>
    <li>Track marine species health, conservation status, and pollution impact</li>
    <li>Log marine species plantation and track growth stages</li>
    <li>Store and analyze cleanup events by organizations</li>
    <li>Generate statistical reports using SQL joins, views, and triggers</li>
  </ul>

  <h2>🧱 Technologies Used</h2>
  <ul>
    <li>MySQL for backend database</li>
    <li>SQL for queries, joins, triggers, views, and constraints</li>
    <li>Frontend (planned): HTML, CSS, optionally Streamlit / Flask / Webflow</li>
    <li>Visualizations with Chart.js (planned)</li>
  </ul>

  <h2>🗃️ Sample Relational Schema</h2>
  <pre>
Marine_Species(Species_ID, Species_Name, Species_Type, Conservation_Status, Affected_By_Pollution)
Pollution_Report(Report_ID, Type, Region, Date, Affected_Species_ID, Reporter)
Cleanup_Event(Event_ID, Organization, Region, Date, Waste_Removed_Kg)
Plantation_Log(Log_ID, Species_ID, Site, Plantation_Date, Growth_Percent)
  </pre>

  <h2>📈 Visual Mockups (Coming Soon)</h2>
  <div class="chart-preview">
    - Pie chart for Pollution Types <br />
    - Line chart for Pollution Reports over time <br />
    - Progress bar for Species Growth <br />
    - Map for polluted regions (optional)
  </div>

  <h2>📄 SQL Features Implemented</h2>
  <ul>
    <li>Use of primary and foreign key constraints</li>
    <li>JOINS between species and reports</li>
    <li>Triggers for endangered species alerts</li>
    <li>Views for reporting affected species</li>
    <li>Stored Procedures and Cursors for summary reports</li>
  </ul>

  <h2>📷 Screenshots (To be added)</h2>
  <p>Screenshots of MySQL Workbench tables, queries, and planned UI dashboards.</p>

  <h2>🧠 Discussion</h2>
  <p>
    This project highlights the role of data in marine conservation. By combining pollution reporting and species monitoring, it can support researchers, NGOs, and governments in taking informed action to protect marine life.
  </p>

  <h2>🔗 Related Resources</h2>
  <ul>
    <li><a href="https://sdgs.un.org/goals/goal14" target="_blank">UN SDG 14 Details</a></li>
    <li><a href="https://www.noaa.gov" target="_blank">NOAA - Ocean Data</a></li>
  </ul>

  <footer>
    <hr/>
    <p style="text-align:center;">Made with 💙 for DBMS course — aligned with SDG 14</p>
  </footer>

</body>
</html>
