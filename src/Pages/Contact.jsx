import React, { useState } from "react";
import {
  ArrowRight,
  Mail,
  Clock,
  MapPin,
  CheckCircle2,
} from "lucide-react";
import { Link } from "react-router-dom";


export default function Contact() {

  const [submitted, setSubmitted] = useState(false);


  const handleSubmit = (event) => {

    event.preventDefault();

    setSubmitted(true);

  };


  return (
    <>
      {/* ================= PAGE HERO ================= */}

      <section className="page-hero">

        <div className="container">

          <p className="eyebrow">
            LET'S TALK
          </p>

          <h1>
            Have a growth goal?
            Let's make it real.
          </h1>

          <p>
            Tell us about your business,
            your challenge and where you
            want to go.
          </p>

        </div>

      </section>


      {/* ================= CONTACT SECTION ================= */}

      <section className="section">

        <div className="container contact-grid">


          {/* LEFT SIDE */}

          <div className="contact-info">

            <p className="eyebrow">
              START A PROJECT
            </p>

            <h2>
              Good marketing starts
              with a good conversation.
            </h2>

            <p>
              Share a few details about your
              business and we'll help you
              figure out the right next move.
            </p>


            {/* Contact Points */}

            <div className="contact-points">

              <div>

                <Mail
                  size={20}
                  style={{
                    color: "#1557ff",
                    marginBottom: "8px",
                  }}
                />

                <b>
                  Email
                </b>

                <span>
                  hello@aily ticks.com
                </span>

              </div>


              <div>

                <Clock
                  size={20}
                  style={{
                    color: "#1557ff",
                    marginBottom: "8px",
                  }}
                />

                <b>
                  Response time
                </b>

                <span>
                  Within 1–2 business days
                </span>

              </div>


              <div>

                <MapPin
                  size={20}
                  style={{
                    color: "#1557ff",
                    marginBottom: "8px",
                  }}
                />

                <b>
                  Location
                </b>

                <span>
                  India
                </span>

              </div>

            </div>


            {/* Small reassurance */}

            <div className="contact-note">

              <CheckCircle2 size={19} />

              <span>
                No pressure. No complicated
                sales pitch. Just a conversation
                about your growth goals.
              </span>

            </div>

          </div>


          {/* RIGHT SIDE FORM */}

          <div className="contact-form-wrapper">

            {submitted ? (

              <div className="form-success">

                <CheckCircle2 size={48} />

                <h2>
                  Thanks for reaching out!
                </h2>

                <p>
                  Your enquiry has been received.
                  Our team will get back to you
                  shortly.
                </p>

                <button
                  className="btn btn-primary"
                  onClick={() => setSubmitted(false)}
                >
                  Send another enquiry
                </button>

              </div>

            ) : (

              <form
                className="contact-form"
                onSubmit={handleSubmit}
              >

                <div className="form-row">

                  <label>

                    First name

                    <input
                      required
                      type="text"
                      placeholder="Your name"
                    />

                  </label>


                  <label>

                    Last name

                    <input
                      type="text"
                      placeholder="Your surname"
                    />

                  </label>

                </div>


                <label>

                  Work email

                  <input
                    required
                    type="email"
                    placeholder="you@company.com"
                  />

                </label>


                <label>

                  Company

                  <input
                    type="text"
                    placeholder="Company name"
                  />

                </label>


                <label>

                  Website

                  <input
                    type="url"
                    placeholder="https://yourwebsite.com"
                  />

                </label>


                <label>

                  What do you need help with?

                  <select required defaultValue="">

                    <option
                      value=""
                      disabled
                    >
                      Select a service
                    </option>

                    <option value="seo">
                      Search Engine Optimization
                    </option>

                    <option value="social">
                      Social Media Marketing
                    </option>

                    <option value="performance">
                      Performance Marketing
                    </option>

                    <option value="content">
                      Content Marketing
                    </option>

                    <option value="leads">
                      Lead Generation
                    </option>

                    <option value="analytics">
                      Analytics & CRO
                    </option>

                    <option value="other">
                      Something else
                    </option>

                  </select>

                </label>


                <label>

                  Tell us about your goals

                  <textarea
                    required
                    rows="6"
                    placeholder="What are you trying to achieve?"
                  />

                </label>


                <button
                  type="submit"
                  className="btn btn-primary form-submit"
                >
                  Send enquiry
                  <ArrowRight size={18} />
                </button>


                <p className="form-disclaimer">
                  By submitting this form, you agree
                  to be contacted regarding your enquiry.
                </p>

              </form>

            )}

          </div>

        </div>

      </section>


      {/* ================= FAQ ================= */}

      <section className="section faq-section">

        <div className="container">

          <div className="section-head">

            <div>

              <p className="eyebrow">
                BEFORE WE TALK
              </p>

              <h2>
                A few quick answers.
              </h2>

            </div>

          </div>


          <div className="faq-grid">

            <div className="faq-item">

              <h3>
                What type of businesses do you work with?
              </h3>

              <p>
                We work with ambitious businesses
                looking to improve their digital
                visibility, generate leads or scale
                their online growth.
              </p>

            </div>


            <div className="faq-item">

              <h3>
                Can you work with our existing marketing team?
              </h3>

              <p>
                Absolutely. We can operate as an
                extension of your existing team or
                take ownership of specific areas
                of your marketing.
              </p>

            </div>


            <div className="faq-item">

              <h3>
                Do you offer customized strategies?
              </h3>

              <p>
                Yes. Every business has different
                audiences, goals and challenges,
                so we build strategies around
                your specific situation.
              </p>

            </div>


            <div className="faq-item">

              <h3>
                How do we get started?
              </h3>

              <p>
                Fill out the form above. We'll
                review your requirements and
                get back to you with the next
                steps.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ================= FINAL CTA ================= */}

      <section className="cta-section">

        <div className="container cta-box">

          <div>

            <p className="eyebrow">
              AILYTICKS
            </p>

            <h2>
              Click. Connect. Convert.
            </h2>

            <p>
              Let's turn your next marketing
              challenge into a growth opportunity.
            </p>

          </div>

          <Link
            to="/"
            className="btn btn-dark"
          >
            Back to home
            <ArrowRight size={18} />
          </Link>

        </div>

      </section>

    </>
  );
}