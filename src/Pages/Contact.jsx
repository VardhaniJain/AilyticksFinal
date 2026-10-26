import React, { useState } from "react";
import { ArrowRight, Mail, Clock, MapPin, CheckCircle2, MessageSquare } from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState("SEO");

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  const topics = ["SEO", "Paid ads", "Social media", "Website", "Not sure yet"];

  return (
    <div style={{ padding: "80px 0", background: "#120E2E", color: "#FFFFFF" }}>
      <div className="container">
        
        {/* Page Header */}
        <div style={{ marginBottom: "50px" }}>
          <p className="eyebrow" style={{ color: "#FFF700", fontSize: "12px", fontWeight: "800", letterSpacing: "0.15em", marginBottom: "12px" }}>
            CONTACT
          </p>
          <h1 style={{ fontSize: "clamp(2.5rem, 4vw, 3.8rem)", fontFamily: "Montserrat", marginBottom: "12px" }}>
            Tell us what you want to <span style={{ color: "#FFF700" }}>achieve</span>
          </h1>
          <p style={{ color: "#9ca3af", fontSize: "16px" }}>
            Share a few details and we'll reply within one working day.
          </p>
        </div>

        {/* Main Grid Layout */}
        <div style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: "30px", alignItems: "start" }}>
          
          {/* Left Column: Form Box */}
          <div style={{ background: "#FFFFFF", color: "#111827", padding: "40px", borderRadius: "28px", boxShadow: "0 20px 50px rgba(0,0,0,0.2)" }}>
            {submitted ? (
              <div style={{ textAlign: "center", padding: "40px 0" }}>
                <CheckCircle2 size={54} style={{ color: "#07905d", marginBottom: "16px" }} />
                <h3 style={{ fontSize: "24px", fontFamily: "Montserrat", marginBottom: "10px" }}>Thanks for reaching out!</h3>
                <p style={{ color: "#667085", marginBottom: "24px" }}>Your enquiry has been received. Our team will get back to you shortly.</p>
                <button className="btn btn-primary" onClick={() => setSubmitted(false)}>Send another enquiry</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h3 style={{ fontSize: "22px", fontFamily: "Montserrat", marginBottom: "24px", color: "#111827" }}>
                  Send us a message
                </h3>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "20px" }}>
                  <div>
                    <label style={{ display: "block", fontSize: "12px", fontWeight: "800", marginBottom: "8px", color: "#344054" }}>Your name</label>
                    <input required placeholder="Your name" style={{ width: "100%", padding: "14px", borderRadius: "12px", border: "1px solid #d7dde7", outline: "none", fontSize: "14px" }} />
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: "12px", fontWeight: "800", marginBottom: "8px", color: "#344054" }}>Email address</label>
                    <input required type="email" placeholder="Email address" style={{ width: "100%", padding: "14px", borderRadius: "12px", border: "1px solid #d7dde7", outline: "none", fontSize: "14px" }} />
                  </div>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "24px" }}>
                  <div>
                    <label style={{ display: "block", fontSize: "12px", fontWeight: "800", marginBottom: "8px", color: "#344054" }}>Phone number</label>
                    <input placeholder="Phone number" style={{ width: "100%", padding: "14px", borderRadius: "12px", border: "1px solid #d7dde7", outline: "none", fontSize: "14px" }} />
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: "12px", fontWeight: "800", marginBottom: "8px", color: "#344054" }}>Service needed</label>
                    <select style={{ width: "100%", padding: "14px", borderRadius: "12px", border: "1px solid #d7dde7", outline: "none", fontSize: "14px", background: "#fff" }}>
                      <option value="">Select service</option>
                      <option value="seo">SEO</option>
                      <option value="ads">Paid Ads</option>
                      <option value="smm">Social Media</option>
                      <option value="web">Website</option>
                    </select>
                  </div>
                </div>

                <div style={{ marginBottom: "24px" }}>
                  <label style={{ display: "block", fontSize: "12px", fontWeight: "800", marginBottom: "12px", color: "#344054" }}>What are you looking for?</label>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                    {topics.map((topic) => (
                      <button
                        key={topic}
                        type="button"
                        onClick={() => setSelectedTopic(topic)}
                        style={{
                          padding: "8px 16px",
                          borderRadius: "999px",
                          fontSize: "13px",
                          fontWeight: "700",
                          border: "1px solid #d7dde7",
                          cursor: "pointer",
                          background: selectedTopic === topic ? "#000000" : "#FFFFFF",
                          color: selectedTopic === topic ? "#FFF700" : "#344054",
                          transition: "0.2s"
                        }}
                      >
                        {topic}
                      </button>
                    ))}
                  </div>
                </div>

                <div style={{ marginBottom: "24px" }}>
                  <label style={{ display: "block", fontSize: "12px", fontWeight: "800", marginBottom: "8px", color: "#344054" }}>Tell us about your business and goals</label>
                  <textarea required rows="4" placeholder="Tell us about your business and goals" style={{ width: "100%", padding: "14px", borderRadius: "12px", border: "1px solid #d7dde7", outline: "none", fontSize: "14px", resize: "vertical" }}></textarea>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "24px", fontSize: "13px", color: "#667085" }}>
                  <input type="checkbox" required id="terms" style={{ width: "16px", height: "16px", accentColor: "#000" }} />
                  <label htmlFor="terms">I agree to the Terms and Privacy Policy.</label>
                </div>

                <button type="submit" style={{ background: "#FFF700", color: "#000000", border: "none", width: "100%", padding: "16px", borderRadius: "999px", fontWeight: "800", fontSize: "15px", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", cursor: "pointer" }}>
                  Send message <ArrowRight size={18} />
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Info Card, Mock Map & Social Icons */}
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            
            {/* Contact Details Card */}
            <div style={{ background: "#000000", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "28px", padding: "30px", display: "flex", flexDirection: "column", gap: "20px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <div style={{ width: "44px", height: "44px", background: "#FFF700", borderRadius: "50%", display: "grid", placeItems: "center", color: "#000" }}>
                  <Mail size={20} />
                </div>
                <div>
                  <span style={{ fontSize: "12px", color: "#9ca3af", display: "block" }}>Email</span>
                  <strong style={{ fontSize: "15px", color: "#fff" }}>hello@youragency.com</strong>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <div style={{ width: "44px", height: "44px", background: "#FFF700", borderRadius: "50%", display: "grid", placeItems: "center", color: "#000" }}>
                  <MessageSquare size={20} />
                </div>
                <div>
                  <span style={{ fontSize: "12px", color: "#9ca3af", display: "block" }}>WhatsApp</span>
                  <strong style={{ fontSize: "15px", color: "#fff" }}>+91 00000 00000</strong>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <div style={{ width: "44px", height: "44px", background: "#FFF700", borderRadius: "50%", display: "grid", placeItems: "center", color: "#000" }}>
                  <Clock size={20} />
                </div>
                <div>
                  <span style={{ fontSize: "12px", color: "#9ca3af", display: "block" }}>Working hours</span>
                  <strong style={{ fontSize: "15px", color: "#fff" }}>Mon to Sat, 10 am to 7 pm</strong>
                </div>
              </div>
            </div>

            {/* Mock Map Box */}
            <div style={{ background: "#000000", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "28px", overflow: "hidden", position: "relative", height: "220px", display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "24px" }}>
              {/* Grid Background Mock */}
              <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)", backgroundSize: "40px 40px" }}></div>
              {/* Curved line & location marker mock */}
              <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} preserveAspectRatio="none" viewBox="0 0 400 200">
                <path d="M0,150 Q150,80 280,100 T400,40" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="3" />
              </svg>
              <div style={{ position: "absolute", top: "75px", right: "130px", width: "16px", height: "16px", background: "#FFF700", borderRadius: "50%", boxShadow: "0 0 0 8px rgba(255,247,0,0.2)" }}></div>

              <div style={{ position: "relative", zIndex: 2, display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
                <div>
                  <span style={{ fontSize: "12px", color: "#9ca3af", display: "block" }}>Our office</span>
                  <strong style={{ fontSize: "14px", color: "#fff" }}>Street address, city, postal code</strong>
                </div>
                <a href="#map" style={{ color: "#FFF700", fontSize: "13px", fontWeight: "700", textDecoration: "none" }}>Open in maps →</a>
              </div>
            </div>

            {/* Social Follow Links */}
            <div style={{ display: "flex", alignItems: "center", gap: "16px", paddingLeft: "4px" }}>
              <span style={{ fontSize: "13px", color: "#9ca3af", fontWeight: "700" }}>Follow us</span>
              <div style={{ display: "flex", gap: "10px" }}>
                {["in", "x", "ig", "fb"].map((soc, idx) => (
                  <a key={idx} href="#social" style={{ width: "36px", height: "36px", borderRadius: "50%", border: "1px solid rgba(255,255,255,0.2)", display: "grid", placeItems: "center", color: "#fff", fontSize: "12px", textDecoration: "none" }}>
                    {soc}
                  </a>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}