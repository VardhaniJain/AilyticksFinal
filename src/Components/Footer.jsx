import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer style={{ background: "#000000", color: "#FFFFFF", padding: "70px 0 25px", borderTop: "1px solid rgba(255,255,255,0.1)" }}>
      <div className="container" style={{ display: "grid", gridTemplateColumns: "1.4fr 0.7fr 0.9fr 1.2fr", gap: "45px" }}>
        
        <div>
          <Link to="/" style={{ color: "#FFFFFF", fontFamily: "Montserrat", fontWeight: "800", fontSize: "22px", textDecoration: "none" }}>
            Aily<span style={{ color: "#FFF700" }}>ticks</span>
          </Link>
          <p style={{ color: "#9ca3af", marginTop: "16px", fontSize: "13px" }}>
            Click. Connect. Convert.<br />Digital growth, powered by strategy and data.
          </p>
        </div>

        <div>
          <h4 style={{ fontSize: "13px", color: "#FFFFFF", marginBottom: "16px", textTransform: "uppercase", letterSpacing: "0.1em" }}>Explore</h4>
          <Link to="/about" style={{ display: "block", color: "#9ca3af", textDecoration: "none", marginBottom: "8px", fontSize: "13px" }}>About</Link>
          <Link to="/services" style={{ display: "block", color: "#9ca3af", textDecoration: "none", marginBottom: "8px", fontSize: "13px" }}>Services</Link>
          <Link to="/work" style={{ display: "block", color: "#9ca3af", textDecoration: "none", marginBottom: "8px", fontSize: "13px" }}>Our Work</Link>
          <Link to="/blog" style={{ display: "block", color: "#9ca3af", textDecoration: "none", marginBottom: "8px", fontSize: "13px" }}>Blog</Link>
        </div>

        <div>
          <h4 style={{ fontSize: "13px", color: "#FFFFFF", marginBottom: "16px", textTransform: "uppercase", letterSpacing: "0.1em" }}>Services</h4>
          <Link to="/services" style={{ display: "block", color: "#9ca3af", textDecoration: "none", marginBottom: "8px", fontSize: "13px" }}>SEO</Link>
          <Link to="/services" style={{ display: "block", color: "#9ca3af", textDecoration: "none", marginBottom: "8px", fontSize: "13px" }}>Performance Ads</Link>
          <Link to="/services" style={{ display: "block", color: "#9ca3af", textDecoration: "none", marginBottom: "8px", fontSize: "13px" }}>Social Media</Link>
          <Link to="/services" style={{ display: "block", color: "#9ca3af", textDecoration: "none", marginBottom: "8px", fontSize: "13px" }}>Content</Link>
        </div>

        <div>
          <h4 style={{ fontSize: "13px", color: "#FFFFFF", marginBottom: "16px", textTransform: "uppercase", letterSpacing: "0.1em" }}>Start a project</h4>
          <p style={{ color: "#9ca3af", fontSize: "13px", marginBottom: "12px" }}>Have a growth goal? Let's turn it into a plan.</p>
          <Link to="/contact" style={{ color: "#FFF700", fontWeight: "700", fontSize: "13px", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "6px" }}>
            Book a strategy call <ArrowRight size={14} />
          </Link>
        </div>

      </div>

      <div className="container" style={{ borderTop: "1px solid rgba(255,255,255,0.1)", marginTop: "50px", paddingTop: "20px", display: "flex", justifyContent: "space-between", color: "#9ca3af", fontSize: "11px" }}>
        <span>© {new Date().getFullYear()} Ailyticks. All rights reserved.</span>
        <span>Built for ambitious brands.</span>
      </div>
    </footer>
  );
}