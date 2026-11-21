import React from "react";

export default function Methodology() {
  return (
    <div className="container">
      <section className="hero">
        <div className="badge">Data & Analytical Pipeline</div>
        <h1 className="hero-title">Methodology</h1>
        <p className="hero-subtitle">
          Combining OpenStreetMap street networks, LTA DataMall transit schedules, and hourly origin-destination ridership flows.
        </p>
      </section>

      <section className="section">
        <h2 className="section-title">Data Sources</h2>
        <div className="card-grid">
          <div className="card">
            <h3>1. OpenStreetMap (OSMnx)</h3>
            <p>
              Extracted venue point geometries tagged as nightclubs, bars, pubs, and karaoke establishments across
              Singapore, alongside the pedestrian street network for walk-time isochrone and network distance modeling.
            </p>
          </div>
          <div className="card">
            <h3>2. LTA DataMall (APIs & CSV)</h3>
            <p>
              Collected bus stop and MRT station locations, first and last train/bus operating times, and hourly
              origin-destination (O-D) passenger tap-in/tap-out volumes during late-evening hours.
            </p>
          </div>
          <div className="card">
            <h3>3. After-Midnight Taxi O-D</h3>
            <p>
              Supplemental LTA DataMall request capturing post-midnight taxi origin-destination trips to observe
              mobility demand after scheduled rail and bus services cease operations.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Analytical Workflow</h2>
        <ol>
          <li>
            <strong>Spatial Clustering of Venues:</strong> Apply Kernel Density Estimation (KDE) and spatial clustering
            (e.g., DBSCAN / HDBSCAN) to delineate Singapore’s primary nightlife districts and secondary hubs.
          </li>
          <li>
            <strong>Network Accessibility & Cutoff Scoring:</strong> Use <code>OSMnx</code> and <code>NetworkX</code> to
            compute pedestrian walk distances from nightlife clusters to active MRT stations and bus stops, weighted
            by last-service departure times.
          </li>
          <li>
            <strong>Origin-Destination Flow Analysis:</strong> Aggregate late-evening transit tap-out and tap-in
            volumes at stations serving nightlife clusters to examine arrival surges versus late-night departure drop-offs.
          </li>
          <li>
            <strong>Transit Gap Synthesis:</strong> Overlay nightlife density scores with late-night transit
            accessibility metrics to highlight underserved nightlife corridors.
          </li>
        </ol>
      </section>
    </div>
  );
}