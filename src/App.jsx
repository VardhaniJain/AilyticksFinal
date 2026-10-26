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

// Import your modular pages
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Work from "./Pages/work"; 
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