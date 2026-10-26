import React from "react";
import { Link } from "react-router-dom";

export default function Work() {
  return (
    <div style={{ padding: "80px 0", background: "#120E2E" }}>
      <div className="container">
        <div style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto 60px" }}>
          <p className="eyebrow">Our Work</p>
          <h1 style={{ fontSize: "42px", marginBottom: "16px" }}>See how we think and what we build</h1>
          <p style={{ color: "#9ca3af" }}>Sample projects and our own experiments, clearly labeled.</p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}>
          {[
            { title: "Local gym growth plan", tag: "Concept project", desc: "SEO plan, ad set, and a 30-day content calendar." },
            { title: "Cafe social media strategy", tag: "Concept project", desc: "Content pillars, post designs, and a launch plan." },
            { title: "Growing our own website", tag: "Our own growth", desc: "What we tried, real numbers, and lessons so far." }
          ].map((item, idx) => (
            <div key={idx} style={{ background: "#000000", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "24px", overflow: "hidden" }}>
              <div style={{ height: "180px", background: "#FFF700" }}></div>
              <div style={{ padding: "28px" }}>
                <span style={{ fontSize: "11px", fontWeight: "800", color: "#FFF700", textTransform: "uppercase" }}>{item.tag}</span>
                <h3 style={{ fontSize: "20px", margin: "10px 0" }}>{item.title}</h3>
                <p style={{ color: "#9ca3af", fontSize: "14px", marginBottom: "20px" }}>{item.desc}</p>
                <Link to="/contact" style={{ color: "#FFF700", fontWeight: "700", fontSize: "14px" }}>View project →</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}