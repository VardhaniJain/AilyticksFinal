import React, { useState } from "react";
import { Link } from "react-router-dom";

const projects = [
  {
    id: 1,
    category: "Concept project",
    filter: "concept",
    title: "Local gym growth plan",
    description:
      "SEO plan, ad set, and a 30-day content calendar.",
    visual: "yellow",
    icon: "↗",
    action: "View project",
    link: "/contact",
  },
  {
    id: 2,
    category: "Concept project",
    filter: "concept",
    title: "Cafe social media strategy",
    description:
      "Content pillars, post designs, and a launch plan.",
    visual: "white",
    icon: "✳",
    action: "View project",
    link: "/contact",
  },
  {
    id: 3,
    category: "Our own growth",
    filter: "growth",
    title: "Growing our own website",
    description:
      "What we tried, real numbers, and lessons so far.",
    visual: "yellow",
    icon: "↗",
    action: "Read the story",
    link: "/contact",
  },
];

const filters = [
  { label: "All", value: "all" },
  { label: "Concept projects", value: "concept" },
  { label: "Our own growth", value: "growth" },
  { label: "Sample deliverables", value: "deliverables" },
];

const deliverables = [
  {
    icon: "⌕",
    title: "SEO audit sample",
    description: "Download a PDF",
  },
  {
    icon: "▤",
    title: "Monthly report",
    description: "See the format",
  },
  {
    icon: "▦",
    title: "Content calendar",
    description: "Preview a month",
  },
  {
    icon: "✳",
    title: "Ad creative set",
    description: "View examples",
  },
];

export default function Work() {
  const [activeFilter, setActiveFilter] = useState("all");

  const showProjects =
    activeFilter === "all" ||
    activeFilter === "concept" ||
    activeFilter === "growth";

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.filter === activeFilter);

  return (
    <div className="work-page">
      {/* Hero */}
      <section className="work-hero">
        <p className="work-eyebrow">OUR WORK</p>

        <h1>
          See how we <span>think</span> and what we build
        </h1>

        <p className="work-hero-description">
          Sample projects and our own experiments, clearly labeled.
          Client results will appear here as we grow.
        </p>
      </section>

      {/* Project Filters */}
      <section className="work-content">
        <div className="work-filters" aria-label="Filter work projects">
          {filters.map((filter) => (
            <button
              key={filter.value}
              type="button"
              className={`work-filter ${
                activeFilter === filter.value ? "active" : ""
              }`}
              onClick={() => setActiveFilter(filter.value)}
              aria-pressed={activeFilter === filter.value}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Project Cards */}
        {showProjects && (
          <div className="work-project-grid">
            {filteredProjects.map((project) => (
              <article className="work-project-card" key={project.id}>
                <div
                  className={`work-project-visual ${project.visual}`}
                  aria-hidden="true"
                >
                  <span>{project.icon}</span>
                </div>

                <div className="work-project-body">
                  <span className="work-project-tag">
                    {project.category}
                  </span>

                  <h2>{project.title}</h2>

                  <p>{project.description}</p>

                  <Link className="work-project-link" to={project.link}>
                    {project.action} <span aria-hidden="true">↗</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Sample Deliverables */}
        {(activeFilter === "all" ||
          activeFilter === "deliverables") && (
          <section className="work-deliverables">
            <h2 className="work-section-title">
              Sample <span>deliverables</span>
            </h2>

            <div className="work-deliverables-grid">
              {deliverables.map((item) => (
                <article
                  className="work-deliverable-card"
                  key={item.title}
                >
                  <span
                    className="work-deliverable-icon"
                    aria-hidden="true"
                  >
                    {item.icon}
                  </span>

                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* Bottom CTA */}
        <section className="work-cta">
          <div className="work-cta-copy">
            <p className="work-cta-eyebrow">LET'S GROW</p>

            <h2>Let's build your next growth story.</h2>

            <p>
              Bring us your challenge. We'll bring clarity,
              creativity and a plan.
            </p>
          </div>

          <Link to="/contact" className="work-cta-button">
            Start a conversation <span aria-hidden="true">↗</span>
          </Link>
        </section>
      </section>
    </div>
  );
}