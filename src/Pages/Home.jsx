import React from "react";
import {
  ArrowRight,
  BarChart3,
  BrainCircuit,
  Check,
  Search,
  Megaphone,
  PenTool,
  Target,
  Users,
  Sparkles,
  ChevronRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Search,
    title: "Search Engine Optimization",
    text: "Build sustainable visibility and attract high-intent organic traffic.",
    tag: "SEO",
  },
  {
    icon: Megaphone,
    title: "Social Media Marketing",
    text: "Create communities, conversations and content people remember.",
    tag: "SMM",
  },
  {
    icon: Target,
    title: "Performance Marketing",
    text: "Turn ad spend into measurable leads, sales and revenue.",
    tag: "ADS",
  },
  {
    icon: PenTool,
    title: "Content Marketing",
    text: "Strategic content that educates, earns trust and drives action.",
    tag: "CONTENT",
  },
  {
    icon: Users,
    title: "Lead Generation",
    text: "Build predictable pipelines with conversion-focused campaigns.",
    tag: "LEADS",
  },
  {
    icon: BarChart3,
    title: "Analytics & CRO",
    text: "Find what is working, fix what is not and scale smarter.",
    tag: "DATA",
  },
];

function CTA() {
  return (
    <section className="cta-section">
      <div className="container cta-box">

        <div>
          <p className="eyebrow">
            LET'S GROW
          </p>

          <h2>
            Ready to turn clicks into customers?
          </h2>

          <p>
            Tell us where you want to go.
            We'll map the strategy to get you there.
          </p>
        </div>

        <Link
          className="btn btn-dark"
          to="/contact"
        >
          Start a conversation
          <ArrowRight size={18} />
        </Link>

      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      {/* ================= HERO ================= */}

      <section className="hero">

        <div className="container hero-grid">

          <div className="hero-copy">

            <div className="pill">
              <Sparkles size={15} />
              Strategy × Creativity × Data
            </div>

            <h1>
              Make your brand
              <span> impossible to ignore.</span>
            </h1>

            <p>
              We are Ailyticks — a performance-focused
              digital marketing agency helping ambitious
              brands get discovered, build trust and
              convert attention into growth.
            </p>

            <div className="hero-actions">

              <Link
                className="btn btn-primary"
                to="/contact"
              >
                Grow with Ailyticks
                <ArrowRight size={18} />
              </Link>

              <Link
                className="btn btn-ghost"
                to="/services"
              >
                Explore services
                <ChevronRight size={18} />
              </Link>

            </div>

            <div className="trust-row">

              <span>
                Built around outcomes
              </span>

              <span>•</span>

              <span>
                Data-led decisions
              </span>

              <span>•</span>

              <span>
                Human creativity
              </span>

            </div>

          </div>


          {/* ================= HERO VISUAL ================= */}

          <div className="hero-visual">

            <div className="orb orb-a"></div>

            <div className="orb orb-b"></div>


            <div className="dashboard-card">

              <div className="dash-top">

                <span>
                  Growth dashboard
                </span>

                <span className="live">
                  ● LIVE
                </span>

              </div>


              <div className="metric">

                <small>
                  Campaign performance
                </small>

                <strong>
                  +184%
                </strong>

                <span>
                  ↑ 28.6% this month
                </span>

              </div>


              <div className="chart">

                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>

              </div>


              <div className="dash-bottom">

                <span>
                  Reach
                </span>

                <b>
                  1.84M
                </b>

                <span>
                  Conversions
                </span>

                <b>
                  12.6K
                </b>

              </div>

            </div>


            {/* AI CARD */}

            <div className="float-card fc-one">

              <BrainCircuit size={20} />

              <div>

                <b>
                  AI-assisted insights
                </b>

                <small>
                  Smarter decisions
                </small>

              </div>

            </div>


            {/* NEW LEAD CARD */}

            <div className="float-card fc-two">

              <span className="check">
                <Check size={15} />
              </span>

              <div>

                <b>
                  New lead
                </b>

                <small>
                  Just now
                </small>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= SERVICES ================= */}

  


      {/* ================= AILYTICKS APPROACH ================= */}

      <section className="dark-section">

        <div className="container split">

          <div>

            <p className="eyebrow yellow">
              THE AILYTICKS APPROACH
            </p>

            <h2>
              Less guesswork.
              <br />
              <span>
                More growth.
              </span>
            </h2>

            <p>
              We combine sharp strategy,
              memorable creative and rigorous
              measurement. Every campaign has
              a purpose, every metric tells a
              story, and every insight becomes
              an action.
            </p>

            <Link
              className="btn btn-light"
              to="/about"
            >
              Why Ailyticks
              <ArrowRight size={18} />
            </Link>

          </div>


          {/* PROCESS */}

          <div className="process-list">

            <div className="process-item">

              <b>
                01
              </b>

              <div>

                <h3>
                  Discover
                </h3>

                <p>
                  Understand your audience,
                  market and growth opportunity.
                </p>

              </div>

            </div>


            <div className="process-item">

              <b>
                02
              </b>

              <div>

                <h3>
                  Strategize
                </h3>

                <p>
                  Build a focused roadmap around
                  your business goals.
                </p>

              </div>

            </div>


            <div className="process-item">

              <b>
                03
              </b>

              <div>

                <h3>
                  Create
                </h3>

                <p>
                  Turn strategy into high-impact
                  campaigns and content.
                </p>

              </div>

            </div>


            <div className="process-item">

              <b>
                04
              </b>

              <div>

                <h3>
                  Optimize
                </h3>

                <p>
                  Learn from data and continuously
                  improve performance.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= CTA ================= */}

      <CTA />

    </>
  );
}