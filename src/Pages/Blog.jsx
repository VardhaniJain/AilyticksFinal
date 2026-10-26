import React from "react";
import { Link } from "react-router-dom";

export default function Blog() {
  return (
    <div style={{ padding: "80px 0", background: "#120E2E" }}>
      <div className="container">
        <div style={{ marginBottom: "50px" }}>
          <p className="eyebrow">Insights</p>
          <h1 style={{ fontSize: "42px", marginBottom: "12px" }}>Digital marketing <span style={{ color: "#FFF700" }}>insights</span></h1>
          <p style={{ color: "#9ca3af" }}>Practical tips on SEO, ads, and growth.</p>
        </div>

        <div style={{ background: "#000000", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "24px", display: "grid", gridTemplateColumns: "1fr 1fr", overflow: "hidden", marginBottom: "40px" }}>
          <div style={{ background: "#FFF700", minHeight: "280px" }}></div>
          <div style={{ padding: "40px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <span style={{ color: "#FFF700", fontSize: "12px", fontWeight: "800", marginBottom: "10px" }}>Featured · SEO</span>
            <h2 style={{ fontSize: "28px", marginBottom: "16px" }}>How we grew organic traffic 3x in 6 months</h2>
            <p style={{ color: "#9ca3af", fontSize: "14px", marginBottom: "24px" }}>A short excerpt that explains what the reader will learn.</p>
            <Link to="/contact" className="btn btn-primary" style={{ alignSelf: "flex-start" }}>Read article</Link>
          </div>
        </div>
      </div>
    </div>
  );
}