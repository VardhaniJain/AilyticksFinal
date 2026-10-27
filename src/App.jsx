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

// Import Layout Components
import Header from "./Components/Header";
import Footer from "./Components/Footer";

// Import Individual Page Components
import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Work from "./Pages/Work";
import Contact from "./Pages/Contact";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/work" element={<Work />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}