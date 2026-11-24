import React from "react";

export default function Methodology() {
  return (
    <div className="container">
      <section className="hero">
        <div className="badge">Data & Analytical Pipeline</div>
        <h1 className="hero-title">Methodology</h1>
        <p className="hero-subtitle">
          Combining OpenStreetMap spatial extracts, LTA DataMall transit infrastructure, and hourly origin-destination rail ridership flows.
        </p>
      </section>

      <section className="section">
        <h2 className="section-title">Data Sources by Section</h2>
        <div className="card-grid">
          <div className="card">
            <h3>Section 1: Where is Nightlife in Singapore?</h3>
            <p>
              <strong>1. Singapore Main Island Boundary:</strong> Sourced from the{" "}
              <a
                href="https://data.gov.sg/datasets?formats=GEOJSON%7CKML%7CSHP%7CKMZ&sort=relevancy&query=singapore+boundary&resultId=d_2cc750190544007400b2cfd5d7f53209"
                target="_blank"
                rel="noopener noreferrer"
              >
                Master Plan 2025 Planning Area Boundary (data.gov.sg)
              </a>{" "}
              via API.
            </p>
            <p>
              <strong>2. Nightlife Establishments:</strong> Venue locations and operating hours extracted from{" "}
              <a
                href="https://www.openstreetmap.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                OpenStreetMap (OSM)
              </a>{" "}
              across three SSIC categories (56130, 93203, 93202).
            </p>
          </div>

          <div className="card">
            <h3>Section 2: Public Transport Accessibility</h3>
            <p>
              <strong>3. Train Stations & Bus Stops:</strong> Station and stop locations downloaded from{" "}
              <a
                href="https://datamall.lta.gov.sg/content/datamall/en/static-data.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                LTA DataMall Static Datasets
              </a>
              .
            </p>
            <p>
              <strong>4. Pedestrian Street Network:</strong> Singapore street and walkway network extracted from{" "}
              <a
                href="https://download.bbbike.org/osm/bbbike/Singapore/"
                target="_blank"
                rel="noopener noreferrer"
              >
                BBBike OSM Extracts
              </a>
              .
            </p>
          </div>

          <div className="card">
            <h3>Section 3: Nightlife Patron O-D Flows</h3>
            <p>
              <strong>5. Origin-Destination (O-D) Train Flows:</strong> Hourly MRT passenger flow data queried via API from{" "}
              <a
                href="https://datamall.lta.gov.sg/content/datamall/en/dynamic-data.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                LTA DataMall Dynamic Datasets
              </a>{" "}
              (<code>PV/ODTrain</code>) for October 2026.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Analytical Workflow</h2>
        <ol>
          <li>
            <strong>Spatial & Temporal Profiling (Section 1):</strong> Clean and classify 620 named OSM nightlife
            venues in SVY21 (<code>EPSG:3414</code>), analyze venue operating hours across the 12:00 AM – 5:00 AM transit
            shutdown window, and apply <code>DBSCAN</code> clustering (<code>eps = 250 m</code>,{" "}
            <code>min_samples = 8</code>) to delineate 7 core nightlife districts.
          </li>
          <li>
            <strong>Pedestrian Network Routing (Section 2):</strong> Snap nightlife venues, bus stops, and operational
            MRT/LRT stations to the walkable OSM graph and run multi-source Dijkstra shortest-path routing in{" "}
            <code>NetworkX</code> to measure exact walking distances and identify rail-desert corridors.
          </li>
          <li>
            <strong>Cluster-to-Home O-D Flow Mapping (Section 3):</strong> Match internal and nearest-network MRT
            stations to each DBSCAN cluster, aggregate 759,721 late-night passenger departures (8:00 PM – 12:00 AM) by
            weekday and weekend/holiday, and map major residential destination corridors.
          </li>
          <li>
            <strong>Gap Synthesis & Policy Design (Section 4):</strong> Cross-reference high-volume late-night O-D
            origins, walk-distance rail deserts, and post-midnight operating windows to formulate targeted corridor bus,
            feeder loop, curbside PUDO, and licensing recommendations.
          </li>
        </ol>
      </section>
    </div>
  );
}