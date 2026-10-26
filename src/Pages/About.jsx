import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Target, ShieldCheck, Lightbulb, Users, Check } from "lucide-react";

export default function About() {
  return (
    <div style={{ padding: "60px 0 100px", background: "#120E2E", color: "#FFFFFF" }}>
      <div className="container">
        
        {/* Top Header Section */}
        <div style={{ textAlign: "center", maxWidth: "750px", margin: "0 auto 60px" }}>
          <p className="eyebrow" style={{ color: "#FFF700", fontSize: "12px", fontWeight: "800", letterSpacing: "0.15em", marginBottom: "12px" }}>
            About us
          </p>
          <h1 style={{ fontSize: "clamp(2.5rem, 4vw, 3.8rem)", fontFamily: "Montserrat", marginBottom: "16px", lineHeight: "1.15" }}>
            A team focused on <span style={{ color: "#FFF700" }}>your growth</span>
          </h1>
          <p style={{ color: "#9ca3af", fontSize: "16px", lineHeight: "1.6" }}>
            We are a new digital marketing agency, and every client gets our full attention.
          </p>
          <div style={{ marginTop: "30px" }}>
            <Link to="/contact" className="btn btn-primary" style={{ padding: "14px 28px", fontSize: "14px", fontWeight: "700" }}>
              Book a call
            </Link>
          </div>
        </div>

        {/* Our Story & Feature Cards Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: "30px", marginBottom: "80px", alignItems: "stretch" }}>
          
          {/* Left: Our Story */}
          <div style={{ background: "#000000", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "28px", padding: "40px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <h2 style={{ fontSize: "28px", fontFamily: "Montserrat", marginBottom: "20px", color: "#FFF700" }}>
              Our story
            </h2>
            <p style={{ color: "#9ca3af", fontSize: "15px", lineHeight: "1.7" }}>
              Two or three short paragraphs on why the agency started, what problem you saw, and what drives you today.
            </p>
          </div>

          {/* Right: 4 Feature Boxes */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
            {[
              { title: "Results first", icon: Target },
              { title: "Transparency", icon: ShieldCheck },
              { title: "Creativity", icon: Lightbulb },
              { title: "Partnership", icon: Users }
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} style={{ background: "#000000", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "24px", padding: "28px 24px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                  <div style={{ width: "38px", height: "38px", background: "rgba(255,255,255,0.05)", borderRadius: "10px", display: "grid", placeItems: "center", color: "#FFF700", marginBottom: "20px" }}>
                    <Icon size={20} />
                  </div>
                  <h4 style={{ fontSize: "16px", fontFamily: "Montserrat", fontWeight: "700", color: "#FFFFFF" }}>
                    {item.title}
                  </h4>
                </div>
              );
            })}
          </div>
        </div>

        {/* How We Work Section */}
        <div style={{ marginBottom: "80px" }}>
          <h2 style={{ fontSize: "26px", fontFamily: "Montserrat", marginBottom: "30px" }}>
            How we <span style={{ color: "#FFF700" }}>work</span>
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "20px" }}>
            {[
              { num: "1", title: "Listen", desc: "Understand your goals." },
              { num: "2", title: "Plan", desc: "Build a clear strategy." },
              { num: "3", title: "Launch", desc: "Run your campaigns." },
              { num: "4", title: "Improve", desc: "Track and optimize." }
            ].map((step, idx) => (
              <div key={idx} style={{ background: "#000000", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "24px", padding: "30px 24px" }}>
                <div style={{ width: "36px", height: "36px", background: "#FFF700", borderRadius: "50%", color: "#000", display: "grid", placeItems: "center", fontWeight: "800", fontSize: "14px", marginBottom: "20px" }}>
                  {step.num}
                </div>
                <h3 style={{ fontSize: "18px", fontFamily: "Montserrat", marginBottom: "8px" }}>{step.title}</h3>
                <p style={{ color: "#9ca3af", fontSize: "14px" }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Our Promise to You Section */}
        <div style={{ background: "#000000", border: "1.5px solid #FFF700", borderRadius: "28px", padding: "40px", marginBottom: "80px" }}>
          <h2 style={{ fontSize: "22px", fontFamily: "Montserrat", marginBottom: "25px", color: "#FFFFFF" }}>
            Our promise to you
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "20px" }}>
            {[
              "Clear pricing from day one",
              "Regular progress reports",
              "Direct access to founders",
              "Flexible, no long contracts"
            ].map((promise, idx) => (
              <div key={idx} style={{ display: "flex", gap: "10px", alignItems: "flex-start", color: "#FFFFFF", fontSize: "14px", fontWeight: "600" }}>
                <span style={{ color: "#FFF700", fontWeight: "bold" }}>□</span>
                <span>{promise}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Massive Yellow Bottom CTA Card */}
        <div style={{ background: "#FFF700", color: "#000000", borderRadius: "32px", padding: "60px 50px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "30px" }}>
          <div>
            <span style={{ fontSize: "11px", fontWeight: "800", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(0,0,0,0.6)", display: "block", marginBottom: "10px" }}>
              LET'S GROW
            </span>
            <h2 style={{ fontSize: "clamp(2rem, 3vw, 2.8rem)", fontFamily: "Montserrat", color: "#000000", marginBottom: "12px", lineHeight: "1.2" }}>
              Let's build your next growth story.
            </h2>
            <p style={{ color: "rgba(0,0,0,0.75)", fontSize: "15px", maxWidth: "600px" }}>
              Bring us your challenge. We'll bring clarity, creativity and a plan.
            </p>
          </div>
          <div>
            <Link to="/contact" style={{ background: "#000000", color: "#FFF700", padding: "16px 28px", borderRadius: "999px", fontWeight: "800", fontSize: "14px", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "10px" }}>
              Start a conversation <ArrowRight size={16} />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}