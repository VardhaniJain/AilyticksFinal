import React from "react";
import { 
  ArrowRight, 
  Sparkles, 
  Search, 
  Megaphone, 
  Target, 
  PenTool, 
  Users, 
  BarChart3,
  Cloud,
  ShoppingCart,
  Building2,
  TrendingUp,
  Stethoscope,
  GraduationCap,
  Briefcase,
  HeartHandshake,
  UtensilsCrossed,
  Factory
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  const challenges = [
    { 
      title: "I want more visibility.", 
      desc: "Build awareness, attention and build trust over time.", 
      linkText: "Find SEO help", 
      linkTo: "/services",
      icon: Search 
    },
    { 
      title: "I want more engagement.", 
      desc: "Build visitor engagement with funnels, landing pages and follow-ups.", 
      linkText: "Explore SMM", 
      linkTo: "/services",
      icon: Megaphone 
    },
    { 
      title: "I want more leads.", 
      desc: "Turn visitors into enquiries that explore Performance Ads.", 
      linkText: "Explore Performance Ads", 
      linkTo: "/services",
      icon: Target 
    },
    { 
      title: "I want better conversions.", 
      desc: "Optimize user journeys to turn clicks into loyal customers.", 
      linkText: "Explore Content Strategy", 
      linkTo: "/services",
      icon: PenTool 
    },
    { 
      title: "I want tailored brand guidance.", 
      desc: "Shape a unique identity that resonates with your core audience.", 
      linkText: "Explore Brand Identity", 
      linkTo: "/services",
      icon: Users 
    },
    { 
      title: "I want more online sales.", 
      desc: "Scale your revenue streams with data-driven e-commerce systems.", 
      linkText: "Explore Lead Generation", 
      linkTo: "/services",
      icon: BarChart3 
    }
  ];

  const industriesLine1 = [
    { name: "Tech & SaaS", icon: Cloud },
    { name: "E-commerce", icon: ShoppingCart },
    { name: "Real Estate", icon: Building2 },
    { name: "Fintech", icon: TrendingUp },
    { name: "Healthcare", icon: Stethoscope }
  ];

  const industriesLine2 = [
    { name: "Education", icon: GraduationCap },
    { name: "Professional Services", icon: Briefcase },
    { name: "Non-Profits", icon: HeartHandshake },
    { name: "Hospitality", icon: UtensilsCrossed },
    { name: "Manufacturing", icon: Factory }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="hero" style={{ padding: "90px 0 100px", background: "#120E2E" }}>
        <div className="container" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "center" }}>
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(255,247,0,0.1)", color: "#FFF700", padding: "8px 14px", borderRadius: "999px", fontSize: "13px", fontWeight: "700", marginBottom: "24px" }}>
              <Sparkles size={15} /> Performance-focused digital systems
            </div>
            <h1 style={{ fontSize: "clamp(2.8rem, 5vw, 5.2rem)", fontWeight: "800", lineHeight: "1.1", marginBottom: "24px", fontFamily: "Montserrat" }}>
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
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
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

      {/* Marketing Challenges Section (6 Cards) */}
      <section style={{ padding: "80px 0", background: "#000000", textAlign: "center" }}>
        <div className="container">
          <p className="eyebrow" style={{ color: "#FFF700", fontSize: "12px", fontWeight: "800", letterSpacing: "0.15em", marginBottom: "12px" }}>FIND YOUR FIT</p>
          <h2 style={{ fontSize: "36px", marginBottom: "40px", fontFamily: "Montserrat" }}>What's your biggest marketing challenge right now?</h2>
          
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}>
            {challenges.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <div key={idx} style={{ background: "#120E2E", border: "1px solid rgba(255,255,255,0.1)", padding: "32px", borderRadius: "24px", textAlign: "left", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                  <div>
                    <div style={{ width: "44px", height: "44px", background: "rgba(255,247,0,0.1)", color: "#FFF700", display: "grid", placeItems: "center", borderRadius: "12px", marginBottom: "20px" }}>
                      <IconComponent size={22} />
                    </div>
                    <h3 style={{ fontSize: "20px", marginBottom: "12px", fontFamily: "Montserrat" }}>{item.title}</h3>
                    <p style={{ color: "#9ca3af", fontSize: "14px", marginBottom: "24px" }}>{item.desc}</p>
                  </div>
                  <Link to={item.linkTo} className="btn btn-primary" style={{ width: "100%", textAlign: "center" }}>
                    {item.linkText}
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Who We Help Section (Horizontal 2 Lines with Industry Icons) */}
      <section style={{ padding: "80px 0", background: "#120E2E", textAlign: "center" }}>
        <div className="container">
          <h2 style={{ fontSize: "36px", marginBottom: "50px", fontFamily: "Montserrat" }}>Who we help</h2>
          
          {/* Line 1 */}
          <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "16px", marginBottom: "16px" }}>
            {industriesLine1.map((ind, idx) => {
              const IconComp = ind.icon;
              return (
                <div key={idx} style={{ display: "flex", alignItems: "center", gap: "10px", background: "#000000", border: "1px solid rgba(255,255,255,0.1)", padding: "12px 24px", borderRadius: "999px", color: "#FFFFFF" }}>
                  <IconComp size={18} style={{ color: "#FFF700" }} />
                  <span style={{ fontSize: "14px", fontWeight: "600" }}>{ind.name}</span>
                </div>
              );
            })}
          </div>

          {/* Line 2 */}
          <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "16px" }}>
            {industriesLine2.map((ind, idx) => {
              const IconComp = ind.icon;
              return (
                <div key={idx} style={{ display: "flex", alignItems: "center", gap: "10px", background: "#000000", border: "1px solid rgba(255,255,255,0.1)", padding: "12px 24px", borderRadius: "999px", color: "#FFFFFF" }}>
                  <IconComp size={18} style={{ color: "#FFF700" }} />
                  <span style={{ fontSize: "14px", fontWeight: "600" }}>{ind.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom Conversion Banner */}
      <section style={{ background: "#FFF700", color: "#000000", padding: "80px 0", textAlign: "center" }}>
        <div className="container" style={{ maxWidth: "800px" }}>
          <span style={{ fontSize: "12px", fontWeight: "800", letterSpacing: "0.15em", textTransform: "uppercase", display: "block", marginBottom: "12px" }}>Ready when you are</span>
          <h2 style={{ fontSize: "clamp(2.2rem, 4vw, 3.2rem)", fontFamily: "Montserrat", fontWeight: "800", marginBottom: "20px", color: "#000000" }}>
            Your next customer is searching right now.
          </h2>
          <p style={{ color: "#333333", fontSize: "16px", marginBottom: "35px" }}>
            Let's make sure they find you. Tell us your goal and we'll show you the plan to reach it.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "16px", flexWrap: "wrap" }}>
            <Link to="/contact" style={{ background: "#000000", color: "#FFF700", padding: "14px 28px", borderRadius: "999px", fontWeight: "800", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "8px" }}>
              Book a strategy call <ArrowRight size={18} />
            </Link>
            <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" style={{ background: "transparent", color: "#000000", border: "2px solid #000000", padding: "14px 28px", borderRadius: "999px", fontWeight: "800", textDecoration: "none" }}>
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}