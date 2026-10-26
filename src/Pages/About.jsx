import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Target, Lightbulb, BarChart3, Users } from "lucide-react";

export default function About() {
  return (
    <div style={{ padding: "80px 0", background: "#120E2E" }}>
      <div className="container">
        <div style={{ textAlign: "center", maxWidth: "750px", margin: "0 auto 60px" }}>
          <p className="eyebrow">About Us</p>
          <h1 style={{ fontSize: "45px", marginBottom: "16px" }}>A team focused on <span style={{ color: "#FFF700" }}>your growth</span></h1>
          <p style={{ color: "#9ca3af" }}>We are a digital marketing agency, and every client gets our full attention.</p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px", marginBottom: "80px" }}>
          <div style={{ background: "#000000", padding: "40px", borderRadius: "24px", border: "1px solid rgba(255,255,255,0.1)" }}>
            <h2 style={{ fontSize: "32px", marginBottom: "20px", color: "#FFF700" }}>Our story</h2>
            <p style={{ color: "#9ca3af", marginBottom: "16px" }}>Two or three short paragraphs on why the agency started, what problem you saw, and what drives you today.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
            {[
              { title: "Results first", icon: Target },
              { title: "Transparency", icon: Lightbulb },
              { title: "Creativity", icon: BarChart3 },
              { title: "Partnership", icon: Users }
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} style={{ background: "#000000", padding: "24px", borderRadius: "20px", border: "1px solid rgba(255,255,255,0.1)" }}>
                  <Icon size={22} style={{ color: "#FFF700", marginBottom: "12px" }} />
                  <h4 style={{ fontSize: "16px" }}>{item.title}</h4>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}