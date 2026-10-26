import React from "react";

export default function Banner({
  eyebrow = "AILYTICKS",
  title = "Digital marketing built for growth.",
  description = "Strategy, creativity and data working together to help ambitious brands grow.",
}) {
  return (
    <section style={{ padding: "80px 0 60px", background: "#120E2E", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
      <div className="container">
        <p className="eyebrow">{eyebrow}</p>
        <h1 style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", marginBottom: "16px" }}>{title}</h1>
        <p style={{ color: "#9ca3af", fontSize: "17px", maxWidth: "700px" }}>{description}</p>
      </div>
    </section>
  );
}