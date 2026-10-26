import React from "react";
import { ArrowRight, BrainCircuit, Check, ChevronRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <section className="hero" style={{ padding: "90px 0 100px", background: "#120E2E" }}>
        <div className="container" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "center" }}>
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(255,247,0,0.1)", color: "#FFF700", padding: "8px 14px", borderRadius: "999px", fontSize: "13px", fontWeight: "700", marginBottom: "24px" }}>
              <Sparkles size={15} /> Performance-focused digital systems
            </div>
            <h1 style={{ fontSize: "clamp(2.8rem, 5vw, 5.2rem)", fontWeight: "800", lineHeight: "1.1", marginBottom: "24px" }}>
              Make your brand <span style={{ color: "#FFF700" }}>impossible to ignore.</span>
            </h1>
            <p style={{ color: "#9ca3af", fontSize: "18px", marginBottom: "32px" }}>
              We are Ailyticks, a performance-focused digital marketing agency designed to build trust and convert attention into growth.
            </p>
            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
              <Link to="/contact" className="btn btn-primary">
                Start a conversation <ArrowRight size={18} />
              </Link>
              <Link to="/services" className="btn btn-ghost">
                See our services
              </Link>
            </div>
          </div>

          <div style={{ position: "relative", background: "rgba(255,255,255,0.03)", padding: "30px", borderRadius: "28px", border: "1px solid rgba(255,255,255,0.08)" }}>
            <div style={{ display: "flex", justifyContent: "between", alignItems: "center", marginBottom: "20px" }}>
              <span style={{ fontSize: "12px", fontWeight: "800", color: "#9ca3af" }}>Smart - dashboard</span>
              <span style={{ color: "#07905d", fontSize: "12px", fontWeight: "800" }}>● LIVE</span>
            </div>
            <div style={{ marginBottom: "25px" }}>
              <small style={{ color: "#9ca3af" }}>Campaign performance</small>
              <strong style={{ display: "block", fontSize: "48px", fontFamily: "Montserrat", color: "#FFF700" }}>+184%</strong>
              <span style={{ color: "#9ca3af", fontSize: "13px" }}>↑ 28.6% this month</span>
            </div>
            <div style={{ display: "flex", gap: "8px", alignItems: "flex-end", height: "100px", marginBottom: "20px" }}>
              {[40, 55, 48, 70, 65, 85, 80, 95, 90, 100].map((h, i) => (
                <div key={i} style={{ flex: 1, height: `${h}%`, background: "#FFF700", borderRadius: "4px 4px 0 0" }}></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Who We Help Section */}
      <section style={{ padding: "80px 0", background: "#000000", textAlign: "center" }}>
        <div className="container">
          <p className="eyebrow">Find your fit</p>
          <h2 style={{ fontSize: "36px", marginBottom: "40px" }}>What's your biggest marketing challenge right now?</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}>
            {[
              { title: "I want more visibility.", desc: "Build awareness, attention and build trust over time.", link: "Find SEO help" },
              { title: "I want more engagement.", desc: "Build visitor engagement with funnels, landing... and follow-ups.", link: "Explore SMM" },
              { title: "I want more leads.", desc: "Turn visitors into enquiries that explore Performance Ads.", link: "Explore Performance Ads" }
            ].map((item, idx) => (
              <div key={idx} style={{ background: "#120E2E", border: "1px solid rgba(255,255,255,0.1)", padding: "32px", borderRadius: "24px", textAlign: "left" }}>
                <h3 style={{ fontSize: "22px", marginBottom: "12px" }}>{item.title}</h3>
                <p style={{ color: "#9ca3af", fontSize: "14px", marginBottom: "24px" }}>{item.desc}</p>
                <Link to="/contact" className="btn btn-primary" style={{ width: "100%" }}>{item.link}</Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}