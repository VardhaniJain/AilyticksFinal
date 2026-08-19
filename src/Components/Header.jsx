import React, { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="nav-wrap">

      <nav className="navbar container">

        {/* ================= LOGO ================= */}

        <Link
          to="/"
          className="brand"
          onClick={closeMenu}
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


        {/* ================= MOBILE BUTTON ================= */}

        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >

          {menuOpen ? (
            <X size={25} />
          ) : (
            <Menu size={25} />
          )}

        </button>


        {/* ================= NAVIGATION ================= */}

        <div
          className={`nav-links ${
            menuOpen ? "open" : ""
          }`}
        >

          <NavLink
            to="/"
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive ? "active" : ""
            }
          >
            Home
          </NavLink>


          <NavLink
            to="/about"
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive ? "active" : ""
            }
          >
            About
          </NavLink>


          <NavLink
            to="/services"
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive ? "active" : ""
            }
          >
            Services
          </NavLink>


          <NavLink
            to="/work"
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive ? "active" : ""
            }
          >
            Work
          </NavLink>


          <NavLink
            to="/blog"
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive ? "active" : ""
            }
          >
            Blog
          </NavLink>


          {/* CTA */}

          <Link
            to="/contact"
            className="nav-cta"
            onClick={closeMenu}
          >

            Let's Talk

            <ArrowRight size={16} />

          </Link>

        </div>

      </nav>

    </header>
  );
}