import React, { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function Form() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div style={{ textAlign: "center", padding: "40px", background: "#000000", borderRadius: "24px", border: "1px solid rgba(255,255,255,0.1)" }}>
        <CheckCircle2 size={48} style={{ color: "#FFF700", marginBottom: "16px" }} />
        <h3 style={{ fontSize: "24px", marginBottom: "10px" }}>Thanks for reaching out!</h3>
        <p style={{ color: "#9ca3af", marginBottom: "20px" }}>Your enquiry has been received. Our team will get back to you shortly.</p>
        <button className="btn btn-primary" onClick={() => setSubmitted(false)}>Send another enquiry</button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ background: "#000000", padding: "35px", borderRadius: "24px", border: "1px solid rgba(255,255,255,0.1)" }}>
      <label style={{ display: "block", fontSize: "13px", fontWeight: "800", marginBottom: "16px" }}>
        Your name
        <input required placeholder="Your name" style={{ display: "block", width: "100%", marginTop: "8px", background: "transparent", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "12px", padding: "14px", color: "#fff", outline: "none" }} />
      </label>

      <label style={{ display: "block", fontSize: "13px", fontWeight: "800", marginBottom: "16px" }}>
        Work email
        <input required type="email" placeholder="you@company.com" style={{ display: "block", width: "100%", marginTop: "8px", background: "transparent", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "12px", padding: "14px", color: "#fff", outline: "none" }} />
      </label>

      <label style={{ display: "block", fontSize: "13px", fontWeight: "800", marginBottom: "24px" }}>
        Tell us about your goals
        <textarea required rows="5" placeholder="What are you trying to achieve?" style={{ display: "block", width: "100%", marginTop: "8px", background: "transparent", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "12px", padding: "14px", color: "#fff", outline: "none", resize: "vertical" }}></textarea>
      </label>

      <button type="submit" className="btn btn-primary" style={{ width: "100%" }}>
        Send enquiry <ArrowRight size={18} />
      </button>
    </form>
  );
}