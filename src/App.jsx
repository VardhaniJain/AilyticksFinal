import React, { useState } from "react";
import {
  ArrowRight,
  BarChart3,
  BrainCircuit,
  Check,
  Menu,
  X,
  Search,
  Megaphone,
  PenTool,
  Target,
  Users,
  Sparkles,
  ChevronRight,
} from "lucide-react";
import { Routes, Route, Link } from "react-router-dom";

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

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav-wrap">
      <nav className="navbar container">

        <Link
          to="/"
          className="brand"
          onClick={() => setOpen(false)}
        >
          <span className="brand-mark">
            <span></span>
            <span></span>
            <span></span>
          </span>

          <span>
            Aily<span>ticks</span>
          </span>
        </Link>

        <button
          className="menu-btn"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>

        <div className={`nav-links ${open ? "open" : ""}`}>

          <Link to="/" onClick={() => setOpen(false)}>
            Home
          </Link>

          <Link to="/about" onClick={() => setOpen(false)}>
            About
          </Link>

          <Link to="/services" onClick={() => setOpen(false)}>
            Services
          </Link>

          <Link to="/work" onClick={() => setOpen(false)}>
            Work
          </Link>

          <Link to="/blog" onClick={() => setOpen(false)}>
            Blog
          </Link>

          <Link
            className="nav-cta"
            to="/contact"
            onClick={() => setOpen(false)}
          >
            Let's Talk
            <ArrowRight size={16} />
          </Link>

        </div>
      </nav>
    </header>
  );
}


function Footer() {
  return (
    <footer>

      <div className="container footer-grid">

        <div>

          <Link to="/" className="brand">

            <span className="brand-mark">
              <span></span>
              <span></span>
              <span></span>
            </span>

            <span>
              Aily<span>ticks</span>
            </span>

          </Link>

          <p className="footer-copy">
            Click. Connect. Convert.
            <br />
            Digital growth, powered by strategy and data.
          </p>

        </div>


        <div>
          <h4>Explore</h4>

          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/work">Our Work</Link>
          <Link to="/blog">Blog</Link>
        </div>


        <div>

          <h4>Services</h4>

          <Link to="/services">SEO</Link>
          <Link to="/services">Performance Ads</Link>
          <Link to="/services">Social Media</Link>
          <Link to="/services">Content</Link>

        </div>


        <div>

          <h4>Start a project</h4>

          <p>
            Have a growth goal?
            Let's turn it into a plan.
          </p>

          <Link
            className="text-link"
            to="/contact"
          >
            Book a strategy call
            <ArrowRight size={16} />
          </Link>

        </div>

      </div>


      <div className="container footer-bottom">

        <span>
          © 2026 Ailyticks. All rights reserved.
        </span>

        <span>
          Built for ambitious brands.
        </span>

      </div>

    </footer>
  );
}


function CTA({
  title = "Ready to turn clicks into customers?",
  text = "Tell us where you want to go. We'll map the strategy to get you there.",
}) {

  return (

    <section className="cta-section">

      <div className="container cta-box">

        <div>

          <p className="eyebrow">
            LET'S GROW
          </p>

          <h2>{title}</h2>

          <p>{text}</p>

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


function Home() {

  return (
    <>

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
              <span>Built around outcomes</span>
              <span>•</span>
              <span>Data-led decisions</span>
              <span>•</span>
              <span>Human creativity</span>
            </div>

          </div>


          <div className="hero-visual">

            <div className="orb orb-a"></div>
            <div className="orb orb-b"></div>

            <div className="dashboard-card">

              <div className="dash-top">
                <span>Growth dashboard</span>
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

                {[1,2,3,4,5,6,7,8,9,10].map(
                  (item) => (
                    <i key={item}></i>
                  )
                )}

              </div>


              <div className="dash-bottom">

                <span>Reach</span>
                <b>1.84M</b>

                <span>Conversions</span>
                <b>12.6K</b>

              </div>

            </div>


            <div className="float-card fc-one">

              <BrainCircuit size={20} />

              <div>
                <b>AI-assisted insights</b>
                <small>Smarter decisions</small>
              </div>

            </div>


            <div className="float-card fc-two">

              <span className="check">
                <Check size={15} />
              </span>

              <div>
                <b>New lead</b>
                <small>Just now</small>
              </div>

            </div>

          </div>

        </div>

      </section>


      <section className="section">

        <div className="container">

          <div className="section-head">

            <div>

              <p className="eyebrow">
                WHAT WE DO
              </p>

              <h2>
                Marketing that moves
                the needle.
              </h2>

            </div>

            <p>
              From visibility to conversion,
              we connect every part of your
              digital presence into one growth
              system.
            </p>

          </div>


          <div className="service-grid">

            {services.map((service) => {

              const Icon = service.icon;

              return (

                <Link
                  to="/services"
                  className="service-card"
                  key={service.title}
                >

                  <div className="icon-box">
                    <Icon size={23} />
                  </div>

                  <span className="service-tag">
                    {service.tag}
                  </span>

                  <h3>
                    {service.title}
                  </h3>

                  <p>
                    {service.text}
                  </p>

                  <ArrowRight
                    className="card-arrow"
                    size={20}
                  />

                </Link>

              );
            })}

          </div>

        </div>

      </section>


      <section className="dark-section">

        <div className="container split">

          <div>

            <p className="eyebrow yellow">
              THE AILYTICKS APPROACH
            </p>

            <h2>
              Less guesswork.
              <br />
              <span>More growth.</span>
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


          <div className="process-list">

            {[
              "Discover",
              "Strategize",
              "Create",
              "Optimize",
            ].map((item, index) => (

              <div
                className="process-item"
                key={item}
              >

                <b>
                  0{index + 1}
                </b>

                <div>

                  <h3>{item}</h3>

                  <p>
                    {
                      [
                        "Understand your audience, market and growth opportunity.",
                        "Build a focused roadmap around business goals.",
                        "Turn strategy into high-impact campaigns and content.",
                        "Learn from data and continuously improve performance.",
                      ][index]
                    }
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      <CTA />

    </>
  );
}


function PageHero({
  eyebrow,
  title,
  text,
}) {

  return (

    <section className="page-hero">

      <div className="container">

        <p className="eyebrow">
          {eyebrow}
        </p>

        <h1>{title}</h1>

        <p>{text}</p>

      </div>

    </section>
  );
}


function About() {

  return (
    <>

      <PageHero
        eyebrow="ABOUT AILYTICKS"
        title="We turn digital noise into meaningful growth."
        text="Ailyticks is a modern digital marketing agency built for brands that want more than vanity metrics."
      />


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
              sits at the intersection of human
              insight and intelligent data.
            </p>

            <p>
              That's why our team connects
              strategy, creative, media and
              analytics instead of treating them
              as separate silos.
            </p>

            <p>
              Whether you are launching a brand,
              scaling an existing business or
              fixing a leaky funnel, we build
              practical systems designed to
              create measurable momentum.
            </p>

          </div>

        </div>

      </section>


      <section className="stats-section">

        <div className="container stats">

          <div>
            <strong>01</strong>
            <span>Strategy-first thinking</span>
          </div>

          <div>
            <strong>02</strong>
            <span>Creative that converts</span>
          </div>

          <div>
            <strong>03</strong>
            <span>Data-backed optimization</span>
          </div>

          <div>
            <strong>04</strong>
            <span>Long-term partnerships</span>
          </div>

        </div>

      </section>


      <CTA
        title="Let's build your next growth story."
        text="Bring us your challenge. We'll bring clarity, creativity and a plan."
      />

    </>
  );
}


function Services() {

  return (
    <>

      <PageHero
        eyebrow="OUR SERVICES"
        title="Everything you need to grow online."
        text="Choose a service or combine them into a connected growth system built around your goals."
      />


      <section className="section">

        <div className="container service-detail-grid">

          {services.map((service, index) => {

            const Icon = service.icon;

            return (

              <article
                className="detail-card"
                key={service.title}
              >

                <div className="detail-number">
                  0{index + 1}
                </div>

                <div className="icon-box">
                  <Icon size={24} />
                </div>

                <h2>
                  {service.title}
                </h2>

                <p>
                  {service.text}
                </p>

                <ul>
                  <li>
                    Audience and competitor research
                  </li>

                  <li>
                    Clear strategy and measurable KPIs
                  </li>

                  <li>
                    Continuous testing and optimization
                  </li>
                </ul>

                <Link
                  className="text-link"
                  to="/contact"
                >
                  Discuss this service
                  <ArrowRight size={16} />
                </Link>

              </article>

            );
          })}

        </div>

      </section>


      <CTA />

    </>
  );
}


function Work() {

  const projects = [
    [
      "01",
      "Growth Engine",
      "Performance marketing + CRO",
      "+214% qualified leads",
    ],
    [
      "02",
      "Brand Discovery",
      "SEO + content strategy",
      "3.2× organic traffic",
    ],
    [
      "03",
      "Community Flywheel",
      "Social + creative",
      "68% engagement lift",
    ],
  ];


  return (
    <>

      <PageHero
        eyebrow="SELECTED WORK"
        title="Ideas are great. Results are better."
        text="A snapshot of the kind of outcomes our integrated approach is designed to create."
      />


      <section className="section">

        <div className="container case-grid">

          {projects.map((project) => (

            <article
              className="case-card"
              key={project[0]}
            >

              <span>
                {project[0]}
              </span>

              <div className="case-art">
                <div></div>
                <div></div>
                <div></div>
              </div>

              <small>
                {project[2]}
              </small>

              <h2>
                {project[1]}
              </h2>

              <strong>
                {project[3]}
              </strong>

            </article>

          ))}

        </div>

      </section>


      <CTA
        title="Want to be our next case study?"
        text="Let's talk about the growth number you want to move."
      />

    </>
  );
}


function Blog() {

  const posts = [
    [
      "DIGITAL MARKETING",
      "Marketing Trends Every Business Should Watch in 2026",
      "The shifts in search, AI, social and paid media that are changing how brands compete.",
    ],
    [
      "SEO",
      "SEO in the AI Search Era: What Changes?",
      "How brands can stay discoverable as search becomes more conversational and answer-driven.",
    ],
    [
      "PERFORMANCE",
      "Clicks Are Not Enough: Measure What Matters",
      "A practical framework for connecting campaign metrics to real business outcomes.",
    ],
  ];


  return (
    <>

      <PageHero
        eyebrow="INSIGHTS"
        title="Ideas for marketers who want to grow smarter."
        text="Practical perspectives on digital marketing, customer behavior, content, SEO and performance."
      />


      <section className="section">

        <div className="container blog-grid">

          {posts.map((post, index) => (

            <article
              className="blog-card"
              key={post[1]}
            >

              <div
                className={`blog-art art-${index}`}
              >
                <span>
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <small>
                {post[0]}
              </small>

              <h2>
                {post[1]}
              </h2>

              <p>
                {post[2]}
              </p>

              <span className="text-link">
                Read article
                <ArrowRight size={16} />
              </span>

            </article>

          ))}

        </div>

      </section>

    </>
  );
}


function Contact() {

  const handleSubmit = (event) => {
    event.preventDefault();

    alert(
      "Thanks! Your enquiry has been captured in this demo."
    );
  };


  return (
    <>

      <PageHero
        eyebrow="LET'S TALK"
        title="Have a growth goal? Let's make it real."
        text="Tell us about your business, your challenge and where you want to go. We'll get back to you with the next step."
      />


      <section className="section">

        <div className="container contact-grid">

          <div className="contact-info">

            <p className="eyebrow">
              START A PROJECT
            </p>

            <h2>
              Good marketing starts
              with a good conversation.
            </h2>

            <p>
              Share a few details and we'll
              help you figure out the right
              next move.
            </p>


            <div className="contact-points">

              <div>
                <b>Email</b>
                <span>
                  hello@aily ticks.com
                </span>
              </div>

              <div>
                <b>Response time</b>
                <span>
                  Within 1–2 business days
                </span>
              </div>

            </div>

          </div>


          <form
            className="contact-form"
            onSubmit={handleSubmit}
          >

            <label>
              Name

              <input
                required
                placeholder="Your name"
              />

            </label>


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
                placeholder="Company name"
              />

            </label>


            <label>
              How can we help?

              <textarea
                required
                rows="5"
                placeholder="Tell us about your goals..."
              />

            </label>


            <button
              className="btn btn-primary"
              type="submit"
            >
              Send enquiry
              <ArrowRight size={18} />
            </button>

          </form>

        </div>

      </section>

    </>
  );
}


export default function App() {

  return (
    <>
      <Navbar />

      <main>

        <Routes>

          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/about"
            element={<About />}
          />

          <Route
            path="/services"
            element={<Services />}
          />

          <Route
            path="/work"
            element={<Work />}
          />

          <Route
            path="/blog"
            element={<Blog />}
          />

          <Route
            path="/contact"
            element={<Contact />}
          />

        </Routes>

      </main>

      <Footer />
    </>
  );
}