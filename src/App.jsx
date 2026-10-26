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

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="nav-wrap">
      <nav className="navbar container">
        <Link to="/" className="brand" onClick={() => setOpen(false)}>
          <span className="brand-mark">
            <span></span><span></span><span></span>
          </span>
          <span>Aily<span>ticks</span></span>
        </Link>
        <button className="menu-btn" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
        <div className={`nav-links ${open ? "open" : ""}`}>
          <Link to="/" onClick={() => setOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setOpen(false)}>About</Link>
          <Link to="/services" onClick={() => setOpen(false)}>Services</Link>
          <Link to="/work" onClick={() => setOpen(false)}>Work</Link>
          <Link to="/blog" onClick={() => setOpen(false)}>Blog</Link>
          <Link className="nav-cta" to="/contact" onClick={() => setOpen(false)}>
            Let's Talk <ArrowRight size={16} />
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
            <span className="brand-mark"><span></span><span></span><span></span></span>
            <span>Aily<span>ticks</span></span>
          </Link>
          <p className="footer-copy">Click. Connect. Convert.<br />Digital growth, powered by strategy and data.</p>
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
          <p>Have a growth goal? Let's turn it into a plan.</p>
          <Link className="text-link" to="/contact">Book a strategy call <ArrowRight size={16} /></Link>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© 2026 Ailyticks. All rights reserved.</span>
        <span>Built for ambitious brands.</span>
      </div>
    </footer>
  );
}

function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="pill"><Sparkles size={15} /> Strategy × Creativity × Data</div>
            <h1>Make your brand <span>impossible to ignore.</span></h1>
            <p>We are Ailyticks — a performance-focused digital marketing agency helping ambitious brands get discovered, build trust and convert attention into growth.</p>
            <div className="hero-actions">
              <Link className="btn btn-primary" to="/contact">Grow with Ailyticks <ArrowRight size={18} /></Link>
              <Link className="btn btn-ghost" to="/services">Explore services <ChevronRight size={18} /></Link>
            </div>
          </div>
          <div className="hero-visual">
            <div className="orb orb-a"></div>
            <div className="orb orb-b"></div>
            <div className="dashboard-card">
              <div className="dash-top"><span>Growth dashboard</span><span className="live">● LIVE</span></div>
              <div className="metric"><small>Campaign performance</small><strong>+184%</strong><span>↑ 28.6% this month</span></div>
              <div className="chart">{[1,2,3,4,5,6,7,8,9,10].map((item) => (<i key={item}></i>))}</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function About() {
  return (
    <section className="page-hero">
      <div className="container">
        <p className="eyebrow">ABOUT AILYTICKS</p>
        <h1>We turn digital noise into meaningful growth.</h1>
        <p>Ailyticks is a modern digital marketing agency built for brands that want more than vanity metrics.</p>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="page-hero">
      <div className="container">
        <p className="eyebrow">OUR SERVICES</p>
        <h1>Everything you need to grow online.</h1>
      </div>
    </section>
  );
}

function Work() {
  return (
    <section className="page-hero">
      <div className="container">
        <p className="eyebrow">SELECTED WORK</p>
        <h1>Ideas are great. Results are better.</h1>
      </div>
    </section>
  );
}

function Blog() {
  return (
    <section className="page-hero">
      <div className="container">
        <p className="eyebrow">INSIGHTS</p>
        <h1>Ideas for marketers who want to grow smarter.</h1>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="page-hero">
      <div className="container">
        <p className="eyebrow">LET'S TALK</p>
        <h1>Have a growth goal? Let's make it real.</h1>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/work" element={<Work />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}