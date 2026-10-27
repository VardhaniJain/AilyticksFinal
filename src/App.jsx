import React from "react";
import { Routes, Route } from "react-router-dom";

// Layout Components
import Header from "./Components/Header";
import Footer from "./Components/Footer";

// Page Components
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
          <Route path="/work" element={<Work />} />
          <Route path="/blog" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}