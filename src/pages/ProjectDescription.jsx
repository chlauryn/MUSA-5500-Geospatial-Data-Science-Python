import React from "react";

export default function ProjectDescription() {
  return (
    <div className="container">
      <section className="hero">
        <div className="badge">MUSA 5500 Final Project · Lauryn Chan</div>
        <h1 className="hero-title">
          Late-Night Transport Accessibility and Singapore’s Nightlife Geography
        </h1>
        <p className="hero-subtitle">
          Investigating spatial and temporal mismatches between nightlife clusters and public transit accessibility across Singapore.
        </p>
      </section>

      <section className="section">
        <h2 className="section-title">Background & Motivation</h2>
        <p>
          Singapore’s nightlife scene faces growing structural pressures, including high operating costs,
          expensive alcohol, and limited late-night transport options. A central operational challenge is the mismatch
          between late-night venue operating hours and public transit schedules.
        </p>
        <p>
          Singapore’s Mass Rapid Transit (MRT) and most regular bus services wind down around midnight, while
          dedicated night bus routes (<em>NightRider</em> and <em>Nite Owl</em>) were permanently discontinued in 2022.
          Consequently, patrons traveling home after midnight often rely on costly taxis and private-hire vehicles after midnight,
          which carry substantially higher costs and late-night surcharges.
        </p>
      </section>

      <section className="section">
        <h2 className="section-title">Research Question</h2>
        <div className="rq-box">
          <strong>Core Question:</strong> Where is Singapore's nightlife concentrated, and to what extent do
          these areas experience gaps in public transport accessibility during late-night hours?
        </div>
        <p>
          Rather than testing strict causality between transit schedules and venue closures, this study conducts
          an exploratory spatial and network analysis to map nightlife clusters, measure pedestrian proximity to
          rail and bus stops, and identify spatial “gap” corridors where dense nightlife activity coincides with
          weak late-night transit access.
        </p>
      </section>

      <section className="section">
        <h2 className="section-title">Core Investigation Pillars</h2>
        <div className="card-grid">
          <div className="card">
            <h3>1. Where is Nightlife in Singapore?</h3>
            <p>
              Mapping 620 venues across three SSIC categories (pubs/bars, nightclubs/dance/karaoke, and arcades/gaming
              centres) from OpenStreetMap, examining operating hours, and identifying 7 core hotspots via DBSCAN clustering.
            </p>
          </div>
          <div className="card">
            <h3>2. How Accessible is Public Transport from Nightlife Areas?</h3>
            <p>
              Computing pedestrian network walking distances from nightlife venues to 5,197 bus stops and 184
              operational MRT/LRT stations using OSMnx to pinpoint areas of transport inaccessibility.
            </p>
          </div>
          <div className="card">
            <h3>3. Where are Nightlife Patrons Coming and Going?</h3>
            <p>
              Analyzing October 2026 LTA Origin-Destination (O-D) MRT passenger flows (8:00 PM – 12:00 AM) from the 17
              MRT stations serving Singapore's nightlife clusters to trace major late-night dispersal corridors.
            </p>
          </div>
          <div className="card">
            <h3>4. Key Insights, Limitations & Policy Recommendations</h3>
            <p>
              Synthesizing spatial and temporal transit gaps into targeted late-night trunk buses, last-mile feeder
              loops, curbside ride-hail PUDO zones, and coordinated licensing policy.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}