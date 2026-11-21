import React from "react";
import { HashRouter as Router, Route, Routes, NavLink } from "react-router-dom";

import ProjectDescription from "./pages/ProjectDescription";
import Methodology from "./pages/Methodology";
import Analysis from "./pages/Analysis";

function Layout({ children }) {
  return (
    <div className="page">
      <header className="header">
        <div className="container header-inner">
          <h1 className="site-title">Singapore Nightlife & Late-Night Transit</h1>
          <nav className="nav">
            <NavLink to="/" end>
              Project Description
            </NavLink>
            <NavLink to="/methodology">Methodology</NavLink>
            <NavLink to="/analysis">Analysis</NavLink>
            <a
              href="https://github.com/chlauryn/MUSA-5500-Geospatial-Data-Science-Python"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </nav>
        </div>
      </header>

      <main className="main">{children}</main>

      <footer className="footer">
        © {new Date().getFullYear()} Lauryn Chan · MUSA 5500: Geospatial Data Science in Python (University of Pennsylvania)
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<ProjectDescription />} />
          <Route path="/methodology" element={<Methodology />} />
          <Route path="/analysis" element={<Analysis />} />
        </Routes>
      </Layout>
    </Router>
  );
}