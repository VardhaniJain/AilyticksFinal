import React from "react";
import { ArrowRight, Search, Megaphone, Target, PenTool, Users, BarChart3, Check } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  { number: "01", icon: Search, tag: "SEO", title: "Search Engine Optimization", desc: "Rank higher on Google and attract people who are already looking for you." },
  { number: "02", icon: Megaphone, tag: "SMM", title: "Social Media Marketing", desc: "Build a loyal audience with consistent, engaging content on the right platforms." },
  { number: "03", icon: Target, tag: "ADS", title: "Performance Marketing", desc: "Run ad campaigns where every rupee is tracked and tied to results." },
  { number: "04", icon: PenTool, tag: "CONTENT", title: "Content Marketing", desc: "Create useful content that earns attention and builds trust over time." },
  { number: "05", icon: Users, tag: "LEADS", title: "Lead Generation", desc: "Turn visitors into enquiries with funnels, landing pages, and follow-ups." },
  { number: "06", icon: BarChart3, tag: "DATA", title: "Digital Branding and Brand Strategy", desc: "Shape a clear identity and message that makes your brand easy to remember." }
];

export default function Services() {
  return (
    <div style={{ padding: "80px 0", background: "#120E2E" }}>
      <div className="container">
        <div style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto 60px" }}>
          <p className="eyebrow">Our Services</p>
          <h1 style={{ fontSize: "42px", marginBottom: "16px" }}>Six ways we help you <span style={{ color: "#FFF700" }}>grow online</span></h1>
          <p style={{ color: "#9ca3af" }}>Pick one service or combine them into a plan built around your goals.</p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}>
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <div key={i} style={{ background: "#000000", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "24px", padding: "32px", position: "relative" }}>
                <span style={{ position: "absolute", top: "28px", right: "28px", color: "rgba(255,255,255,0.2)", fontSize: "20px", fontWeight: "800" }}>{s.number}</span>
                <div style={{ width: "48px", height: "48px", background: "rgba(255,247,0,0.1)", color: "#FFF700", display: "grid", placeItems: "center", borderRadius: "12px", marginBottom: "20px" }}>
                  <Icon size={24} />
                </div>
                <span style={{ fontSize: "11px", fontWeight: "800", color: "#FFF700", display: "block", marginBottom: "8px" }}>{s.tag}</span>
                <h3 style={{ fontSize: "20px", marginBottom: "12px" }}>{s.title}</h3>
                <p style={{ color: "#9ca3af", fontSize: "14px", marginBottom: "24px" }}>{s.desc}</p>
                <Link to="/contact" style={{ color: "#FFF700", fontWeight: "700", fontSize: "14px", display: "inline-flex", alignItems: "center", gap: "6px" }}>
                  Explore →
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}