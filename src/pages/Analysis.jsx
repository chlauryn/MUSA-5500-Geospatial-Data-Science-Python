import React from "react";
import NotebookEmbed from "../components/NotebookEmbed";

export default function Analysis() {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="container">
      {/* Sticky Jump-To Sub-Navigation */}
      <nav className="subnav" aria-label="Analysis sections">
        <button className="subnav-btn" onClick={() => scrollToSection("sec-1")}>
          1. Where is nightlife in Singapore?
        </button>
        <button className="subnav-btn" onClick={() => scrollToSection("sec-2")}>
          2. How accessible is public transport?
        </button>
        <button className="subnav-btn" onClick={() => scrollToSection("sec-3")}>
          3. Where are patrons going?
        </button>
        <button className="subnav-btn" onClick={() => scrollToSection("sec-4")}>
          4. Final Synthesis
        </button>
      </nav>

      <article id="sec-1" className="analysis-section">
        <NotebookEmbed
          file="section-1.html"
          title="Section 1: Where is nightlife in Singapore?"
        />
      </article>

      <article id="sec-2" className="analysis-section">
        <NotebookEmbed
          file="section-2.html"
          title="Section 2: How accessible is public transport from nightlife areas?"
        />
      </article>

      <article id="sec-3" className="analysis-section">
        <NotebookEmbed
          file="section-3.html"
          title="Section 3: Where are the nightlife patrons going?"
        />
      </article>

      <article id="sec-4" className="analysis-section">
        <NotebookEmbed
          file="section-4.html"
          title="Section 4: Final Synthesis"
        />
      </article>
    </div>
  );
}