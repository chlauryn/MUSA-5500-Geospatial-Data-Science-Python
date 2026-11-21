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
          Investigating spatial mismatches between nightlife clusters and late-night public transit availability across Singapore.
        </p>
      </section>

      <section className="section">
        <h2 className="section-title">Background & Motivation</h2>
        <p>
          Singapore’s nightlife scene is facing significant structural pressures, including high operating costs,
          expensive alcohol, and limited late-night transport options. A key operational challenge is the mismatch
          between the late-night hours of nightlife establishments and the operating window of public transit.
        </p>
        <p>
          Singapore’s Mass Rapid Transit (MRT) and most scheduled bus services wind down around midnight, while
          dedicated late-night bus services (such as <em>NightRider</em> and <em>Nite Owl</em>) were permanently
          discontinued in 2022. Consequently, patrons traveling home after midnight often rely on taxis or
          private-hire vehicles, which carry substantially higher costs and late-night surcharges.
        </p>
      </section>

      <section className="section">
        <h2 className="section-title">Research Question</h2>
        <div className="rq-box">
          <strong>Core Question:</strong> Where is Singapore's nightlife concentrated, and to what extent do
          these areas experience gaps in public transport accessibility during late-night hours?
        </div>
        <p>
          Rather than attempting to establish a strict causal link between transit closures and venue closures, this
          study conducts an exploratory spatial analysis to identify nightlife clusters, measure their network
          proximity to late-night transit, and pinpoint spatial “gap” zones where high nightlife
          density coincides with weak late-night transit access.
        </p>
      </section>

      <section className="section">
        <h2 className="section-title">Core Investigation Pillars</h2>
        <div className="card-grid">
          <div className="card">
            <h3>1. Nightlife Geography</h3>
            <p>Mapping point distributions and spatial clusters of nightclubs, bars, pubs, and karaoke venues.</p>
          </div>
          <div className="card">
            <h3>2. Late-Night Transit Access</h3>
            <p>Evaluating walk-sheds and first/last bus and MRT departure cutoffs around nightlife districts.</p>
          </div>
          <div className="card">
            <h3>3. Patron Mobility Flows</h3>
            <p>Analyzing late-evening origin-destination (O-D) transit volumes and post-midnight travel demand.</p>
          </div>
        </div>
      </section>
    </div>
  );
}