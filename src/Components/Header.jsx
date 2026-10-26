import React, { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header style={{ position: "sticky", top: 0, zIndex: 1000, background: "rgba(18, 14, 46, 0.9)", backdropFilter: "blur(16px)", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
      <nav className="container" style={{ height: "78px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        
        {/* Brand / Logo */}
        <Link to="/" className="brand" onClick={closeMenu} style={{ display: "flex", alignItems: "center", gap: "10px", color: "#FFFFFF", fontFamily: "Montserrat", fontWeight: "800", fontSize: "22px", textDecoration: "none" }}>
          <span style={{ display: "flex", alignItems: "flex-end", gap: "3px", height: "24px" }}>
            <span style={{ width: "4px", height: "12px", background: "#FFFFFF", borderRadius: "2px" }}></span>
            <span style={{ width: "4px", height: "18px", background: "#FFF700", borderRadius: "2px" }}></span>
            <span style={{ width: "4px", height: "24px", background: "#FFFFFF", borderRadius: "2px" }}></span>
          </span>
          <span>Aily<span style={{ color: "#FFF700" }}>ticks</span></span>
        </Link>

        {/* Mobile Toggle */}
        <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)} style={{ display: "none", background: "transparent", border: "0", color: "#FFFFFF", cursor: "pointer" }}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Navigation Links */}
        <div style={{ display: "flex", alignItems: "center", gap: "30px" }} className={`nav-links ${menuOpen ? "open" : ""}`}>
          {["/", "/about", "/services", "/work", "/blog", "/contact"].map((path, idx) => {
            const labels = ["Home", "About", "Services", "Work", "Blog", "Contact"];
            return (
              <NavLink key={path} to={path} onClick={closeMenu} style={({ isActive }) => ({ color: isActive ? "#FFF700" : "#9ca3af", fontSize: "14px", fontWeight: "700", textDecoration: "none", transition: "0.2s" })}>
                {labels[idx]}
              </NavLink>
            );
          })}

          <Link to="/contact" className="btn btn-primary" onClick={closeMenu} style={{ padding: "10px 20px", fontSize: "13px" }}>
            Contact us
          </Link>
        </div>
      </nav>
    </header>
  );
}