import React from "react";
import {
  ArrowRight,
  Target,
  Lightbulb,
  BarChart3,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";


function PageHero() {
  return (
    <section className="page-hero">

      <div className="container">

        <p className="eyebrow">
          ABOUT AILYTICKS
        </p>

        <h1>
          We turn digital noise
          into meaningful growth.
        </h1>

        <p>
          Ailyticks is a modern digital
          marketing agency built for brands
          that want more than vanity metrics.
        </p>

      </div>

    </section>
  );
}


function CTA() {
  return (
    <section className="cta-section">

      <div className="container cta-box">

        <div>

          <p className="eyebrow">
            LET'S GROW
          </p>

          <h2>
            Let's build your next
            growth story.
          </h2>

          <p>
            Bring us your challenge.
            We'll bring clarity,
            creativity and a plan.
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


export default function About() {

  return (
    <>

      {/* ================= PAGE HERO ================= */}

      <PageHero />


      {/* ================= OUR BELIEF ================= */}

      <section className="section">

        <div className="container split about-split">

          <div>

            <p className="eyebrow">
              OUR BELIEF
            </p>

            <h2>
              Marketing should feel
              like a growth engine —
              not a guessing game.
            </h2>

          </div>


          <div>

            <p>
              We believe the best marketing
              sits at the intersection of
              human insight and intelligent
              data.
            </p>

            <p>
              That's why our team connects
              strategy, creative, media and
              analytics instead of treating
              them as separate silos.
            </p>

            <p>
              Whether you are launching a
              brand, scaling an existing
              business or fixing a leaky
              funnel, we build practical
              systems designed to create
              measurable momentum.
            </p>

          </div>

        </div>

      </section>


      {/* ================= VALUES ================= */}

      <section className="section about-values">

        <div className="container">

          <div className="section-head">

            <div>

              <p className="eyebrow">
                WHAT DRIVES US
              </p>

              <h2>
                Built around four
                simple principles.
              </h2>

            </div>

            <p>
              Our approach keeps strategy,
              creativity and performance
              working together.
            </p>

          </div>


          <div className="service-grid">

            {/* VALUE 1 */}

            <div className="service-card">

              <div className="icon-box">
                <Target size={23} />
              </div>

              <span className="service-tag">
                01
              </span>

              <h3>
                Strategy First
              </h3>

              <p>
                We start with your business
                objectives before choosing
                channels, campaigns or content.
              </p>

            </div>


            {/* VALUE 2 */}

            <div className="service-card">

              <div className="icon-box">
                <Lightbulb size={23} />
              </div>

              <span className="service-tag">
                02
              </span>

              <h3>
                Creative Thinking
              </h3>

              <p>
                We create ideas that make
                brands memorable while
                keeping business goals in focus.
              </p>

            </div>


            {/* VALUE 3 */}

            <div className="service-card">

              <div className="icon-box">
                <BarChart3 size={23} />
              </div>

              <span className="service-tag">
                03
              </span>

              <h3>
                Data Driven
              </h3>

              <p>
                We use performance data to
                understand what's working and
                continuously improve campaigns.
              </p>

            </div>


            {/* VALUE 4 */}

            <div className="service-card">

              <div className="icon-box">
                <Users size={23} />
              </div>

              <span className="service-tag">
                04
              </span>

              <h3>
                Client Partnership
              </h3>

              <p>
                We work as an extension of
                your team rather than just
                another marketing vendor.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ================= STATS ================= */}

      <section className="stats-section">

        <div className="container stats">

          <div>

            <strong>
              01
            </strong>

            <span>
              Strategy-first thinking
            </span>

          </div>


          <div>

            <strong>
              02
            </strong>

            <span>
              Creative that converts
            </span>

          </div>


          <div>

            <strong>
              03
            </strong>

            <span>
              Data-backed optimization
            </span>

          </div>


          <div>

            <strong>
              04
            </strong>

            <span>
              Long-term partnerships
            </span>

          </div>

        </div>

      </section>


      {/* ================= CTA ================= */}

      <CTA />

    </>
  );
}