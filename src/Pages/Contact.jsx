import React, { useState } from "react";
import { ArrowRight, Mail, Clock, MapPin, CheckCircle2 } from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div style={{ padding: "80px 0", background: "#120E2E" }}>
      <div className="container">
        <div style={{ marginBottom: "50px" }}>
          <p className="eyebrow">Contact</p>
          <h1 style={{ fontSize: "42px", marginBottom: "12px" }}>Tell us what you want to <span style={{ color: "#FFF700" }}>achieve</span></h1>
          <p style={{ color: "#9ca3af" }}>Share a few details and we'll reply within one working day.</p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: "40px" }}>
          <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} style={{ background: "#000000", padding: "40px", borderRadius: "24px", border: "1px solid rgba(255,255,255,0.1)" }}>
            {submitted ? (
              <div style={{ textAlign: "center", padding: "40px 0" }}>
                <CheckCircle2 size={48} style={{ color: "#FFF700", marginBottom: "16px" }} />
                <h3>Thanks for reaching out!</h3>
                <p style={{ color: "#9ca3af" }}>We'll get back to you shortly.</p>
              </div>
            ) : (
              <>
                <h3 style={{ fontSize: "22px", marginBottom: "24px" }}>Send us a message</h3>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "20px" }}>
                  <input required placeholder="Your name" style={{ padding: "14px", borderRadius: "12px", background: "transparent", border: "1px solid rgba(255,255,255,0.2)", color: "#fff" }} />
                  <input required type="email" placeholder="Email address" style={{ padding: "14px", borderRadius: "12px", background: "transparent", border: "1px solid rgba(255,255,255,0.2)", color: "#fff" }} />
                </div>
                <textarea required rows="5" placeholder="Tell us about your business and goals" style={{ width: "100%", padding: "14px", borderRadius: "12px", background: "transparent", border: "1px solid rgba(255,255,255,0.2)", color: "#fff", marginBottom: "20px" }}></textarea>
                <button type="submit" className="btn btn-primary" style={{ width: "100%" }}>Send message <ArrowRight size={18} /></button>
              </>
            )}
          </form>

          <div style={{ background: "#000000", padding: "40px", borderRadius: "24px", border: "1px solid rgba(255,255,255,0.1)", display: "flex", flexDirection: "column", gap: "24px" }}>
            <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
              <Mail style={{ color: "#FFF700" }} />
              <div>
                <b style={{ display: "block" }}>Email</b>
                <span style={{ color: "#9ca3af", fontSize: "14px" }}>hello@ailyticks.com</span>
              </div>
            </div>
            <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
              <Clock style={{ color: "#FFF700" }} />
              <div>
                <b style={{ display: "block" }}>Working hours</b>
                <span style={{ color: "#9ca3af", fontSize: "14px" }}>Mon to Sat, 10 am to 7 pm</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}