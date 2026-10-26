import React from "react";
import { Search, Megaphone, Target, PenTool, Users, BarChart3, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  { number: "01", icon: Search, tag: "SEO", title: "Search Engine Optimization", description: "Build sustainable search visibility and attract high-intent customers." },
  { number: "02", icon: Megaphone, tag: "SMM", title: "Social Media Marketing", description: "Build a recognizable social presence with content that creates loyalty." },
  { number: "03", icon: Target, tag: "ADS", title: "Performance Marketing", description: "Turn paid media into a predictable growth channel with data-driven campaigns." }
];

export default function Servicescard() {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}>
      {services.map((s) => {
        const Icon = s.icon;
        return (
          <div key={s.number} style={{ background: "#000000", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "24px", padding: "32px", position: "relative" }}>
            <span style={{ position: "absolute", top: "28px", right: "28px", color: "rgba(255,255,255,0.2)", fontSize: "20px", fontWeight: "800" }}>{s.number}</span>
            <div style={{ width: "48px", height: "48px", background: "rgba(255,247,0,0.1)", color: "#FFF700", display: "grid", placeItems: "center", borderRadius: "12px", marginBottom: "20px" }}>
              <Icon size={24} />
            </div>
            <span style={{ fontSize: "11px", fontWeight: "800", color: "#FFF700", display: "block", marginBottom: "8px" }}>{s.tag}</span>
            <h3 style={{ fontSize: "20px", marginBottom: "12px" }}>{s.title}</h3>
            <p style={{ color: "#9ca3af", fontSize: "14px", marginBottom: "24px" }}>{s.description}</p>
            <Link to="/services" style={{ color: "#FFF700", fontWeight: "700", fontSize: "14px", display: "inline-flex", alignItems: "center", gap: "6px" }}>
              Learn more <ArrowRight size={16} />
            </Link>
          </div>
        );
      })}
    </div>
  );
}