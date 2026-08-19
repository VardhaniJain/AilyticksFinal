import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {

  return (
    <footer>
 
      <div className="container footer-grid">

        {/* ================= BRAND ================= */}

        <div>

          <Link
            to="/"
            className="brand"
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


          <p className="footer-copy">
            Click. Connect. Convert.
            <br />
            Digital growth, powered by
            strategy and data.
          </p>

        </div>


        {/* ================= EXPLORE ================= */}

        <div>

          <h4>
            Explore
          </h4>

          <Link to="/about">
            About
          </Link>

          <Link to="/services">
            Services
          </Link>

          <Link to="/work">
            Our Work
          </Link>

          <Link to="/blog">
            Blog
          </Link>

        </div>


        {/* ================= SERVICES ================= */}

        <div>

          <h4>
            Services
          </h4>

          <Link to="/services">
            SEO
          </Link>

          <Link to="/services">
            Performance Ads
          </Link>

          <Link to="/services">
            Social Media
          </Link>

          <Link to="/services">
            Content Marketing
          </Link>

        </div>


        {/* ================= CONTACT ================= */}

        <div>

          <h4>
            Start a project
          </h4>

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


      {/* ================= FOOTER BOTTOM ================= */}

      <div className="container footer-bottom">

        <span>
          © {new Date().getFullYear()} Ailyticks.
          All rights reserved.
        </span>

        <span>
          Built for ambitious brands.
        </span>

      </div>

    </footer>
  );
}