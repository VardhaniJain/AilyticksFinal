import React from "react";
import {
  ArrowRight,
  Search,
  Megaphone,
  Target,
  PenTool,
  Users,
  BarChart3,
  Check,
} from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    number: "01",
    icon: Search,
    tag: "SEO",
    title: "Search Engine Optimization",
    description:
      "Build sustainable search visibility and attract high-intent customers through a strategic SEO system.",
    features: [
      "Technical SEO audits",
      "Keyword & competitor research",
      "On-page optimization",
      "Content-led SEO",
      "Local SEO",
    ],
  },

  {
    number: "02",
    icon: Megaphone,
    tag: "SMM",
    title: "Social Media Marketing",
    description:
      "Build a recognizable social presence with content that creates conversations, communities and brand loyalty.",
    features: [
      "Social media strategy",
      "Content planning",
      "Creative direction",
      "Community management",
      "Performance reporting",
    ],
  },

  {
    number: "03",
    icon: Target,
    tag: "ADS",
    title: "Performance Marketing",
    description:
      "Turn paid media into a predictable growth channel with data-driven campaigns designed around business outcomes.",
    features: [
      "Google Ads",
      "Meta Ads",
      "Campaign strategy",
      "Audience targeting",
      "Conversion optimization",
    ],
  },

  {
    number: "04",
    icon: PenTool,
    tag: "CONTENT",
    title: "Content Marketing",
    description:
      "Create valuable content that earns attention, builds authority and moves your audience closer to action.",
    features: [
      "Content strategy",
      "Blog content",
      "Website copy",
      "Social content",
      "Content calendars",
    ],
  },

  {
    number: "05",
    icon: Users,
    tag: "LEADS",
    title: "Lead Generation",
    description:
      "Create a consistent pipeline of qualified prospects using targeted campaigns and conversion-focused experiences.",
    features: [
      "Lead generation campaigns",
      "Landing pages",
      "Lead magnets",
      "Funnel strategy",
      "Lead qualification",
    ],
  },

  {
    number: "06",
    icon: BarChart3,
    tag: "DATA",
    title: "Analytics & CRO",
    description:
      "Understand what is working, identify growth opportunities and continuously improve your digital performance.",
    features: [
      "Analytics setup",
      "Conversion tracking",
      "Funnel analysis",
      "A/B testing",
      "Performance dashboards",
    ],
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
            Not sure which service you need?
          </h2>

          <p>
            Tell us about your business and we'll
            help you identify the right growth
            opportunities.
          </p>
        </div>

        <Link
          to="/contact"
          className="btn btn-dark"
        >
          Talk to our team
          <ArrowRight size={18} />
        </Link>

      </div>
    </section>
  );
}

export default function Services() {
  return (
    <>
      {/* ================= PAGE HERO ================= */}

      <section className="page-hero">

        <div className="container">

          <p className="eyebrow">
            OUR SERVICES
          </p>

          <h1>
            Everything you need
            to grow online.
          </h1>

          <p>
            From visibility to conversion,
            we connect the essential pieces
            of digital marketing into one
            focused growth system.
          </p>

        </div>

      </section>


      {/* ================= SERVICES ================= */}

      <section className="section">

        <div className="container">

          <div className="service-detail-grid">

            {services.map((service) => {

              const Icon = service.icon;

              return (
                <article
                  className="detail-card"
                  key={service.number}
                >

                  <div className="detail-number">
                    {service.number}
                  </div>

                  <div className="icon-box">
                    <Icon size={24} />
                  </div>

                  <span className="service-tag">
                    {service.tag}
                  </span>

                  <h2>
                    {service.title}
                  </h2>

                  <p>
                    {service.description}
                  </p>

                  <ul>

                    {service.features.map(
                      (feature) => (
                        <li key={feature}>
                          <Check
                            size={15}
                            style={{
                              color: "#1557ff",
                              marginRight: "7px",
                              verticalAlign: "middle",
                            }}
                          />

                          {feature}
                        </li>
                      )
                    )}

                  </ul>

                  <Link
                    to="/contact"
                    className="text-link"
                  >
                    Discuss this service
                    <ArrowRight size={16} />
                  </Link>

                </article>
              );
            })}

          </div>

        </div>

      </section>


      {/* ================= PROCESS ================= */}

      <section className="dark-section">

        <div className="container split">

          <div>

            <p className="eyebrow yellow">
              HOW WE WORK
            </p>

            <h2>
              One connected
              <br />
              <span>
                growth system.
              </span>
            </h2>

            <p>
              Great marketing doesn't happen
              when every channel works in
              isolation. We connect strategy,
              creative, media and data to create
              a stronger overall result.
            </p>

          </div>


          <div className="process-list">

            <div className="process-item">

              <b>01</b>

              <div>
                <h3>
                  Understand
                </h3>

                <p>
                  We learn about your audience,
                  market, competitors and goals.
                </p>
              </div>

            </div>


            <div className="process-item">

              <b>02</b>

              <div>
                <h3>
                  Build
                </h3>

                <p>
                  We develop the strategy,
                  campaigns and creative required
                  to move the business forward.
                </p>
              </div>

            </div>


            <div className="process-item">

              <b>03</b>

              <div>
                <h3>
                  Launch
                </h3>

                <p>
                  We activate campaigns and
                  content across the channels
                  that matter most.
                </p>
              </div>

            </div>


            <div className="process-item">

              <b>04</b>

              <div>
                <h3>
                  Optimize
                </h3>

                <p>
                  We continuously analyze results,
                  test ideas and improve performance.
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