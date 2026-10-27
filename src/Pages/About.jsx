import React from "react";
import { Link } from "react-router-dom";

const values = [
  {
    title: "Honesty",
    description: "Clear advice, no jargon.",
    icon: "✓",
  },
  {
    title: "Results",
    description: "Work tied to your goals.",
    icon: "↗",
  },
  {
    title: "Partnership",
    description: "We work as your team.",
    icon: "♡",
  },
  {
    title: "Creativity",
    description: "Fresh ideas that stand out.",
    icon: "✳",
  },
];

const process = [
  {
    number: "1",
    title: "Listen",
    description: "Understand your goals.",
  },
  {
    number: "2",
    title: "Plan",
    description: "Build a clear strategy.",
  },
  {
    number: "3",
    title: "Launch",
    description: "Run your campaigns.",
  },
  {
    number: "4",
    title: "Improve",
    description: "Track and optimize.",
  },
];

const promises = [
  "Free audit to start",
  "Regular progress reports",
  "Direct access to founders",
  "Flexible, no long contracts",
];

export default function About() {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <p className="about-eyebrow">About us</p>

        <h1>
          A fresh team focused on{" "}
          <span>your growth</span>
        </h1>

        <p className="about-hero-description">
          We are a digital marketing agency, and every client
          gets our full attention.
        </p>

        <Link to="/contact" className="about-button">
          Book a free call
        </Link>
      </section>

      {/* Our Story and Mission */}
      <section className="about-story-grid">
        <article className="about-card story-card">
          <h2>
            Why we <span>started</span>
          </h2>

          <p>
            Many small businesses struggle to find marketing
            that is clear, honest, and affordable. We started
            this agency to change that.
          </p>
        </article>

        <article className="about-card story-card">
          <h2>
            Our <span>mission</span>
          </h2>

          <p>
            To help businesses get found online, reach the
            right people, and turn attention into customers.
          </p>
        </article>
      </section>

      {/* Our Values */}
      <section className="about-section">
        <h2 className="about-section-title">
          What we <span>believe</span>
        </h2>

        <div className="about-values-grid">
          {values.map((value) => (
            <article
              className="about-card value-card"
              key={value.title}
            >
              <span
                className="value-icon"
                aria-hidden="true"
              >
                {value.icon}
              </span>

              <h3>{value.title}</h3>

              <p>{value.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Our Process */}
      <section className="about-section process-section">
        <h2 className="about-section-title">
          How we <span>work</span>
        </h2>

        <div className="about-process-grid">
          {process.map((step) => (
            <article
              className="about-card process-card"
              key={step.number}
            >
              <span className="process-number">
                {step.number}
              </span>

              <h3>{step.title}</h3>

              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Our Promise */}
      <section className="about-promise">
        <h2>Our promise to you</h2>

        <div className="promise-grid">
          {promises.map((promise) => (
            <div className="promise-item" key={promise}>
              <span aria-hidden="true">✓</span>
              <p>{promise}</p>
            </div>
          ))}
        </div>
      </section>


      {/* Final Call to Action */}
      <section className="about-final-cta">
        <div className="final-cta-copy">
          <h2>Be one of our first success stories</h2>

          <p>Start with a free marketing audit.</p>
        </div>

        <Link to="/contact" className="about-button">
          Get my free audit
        </Link>
      </section>
    </div>
  );
}