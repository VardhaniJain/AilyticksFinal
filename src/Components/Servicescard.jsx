import React from "react";
import { Search, Megaphone, Target, PenTool, Users, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";
import ServiceCard from "./ServiceCard";

const services = [
  {
    number: "01",
    icon: Search,
    tag: "SEO",
    title: "Search Engine Optimization",
    description:
      "Build sustainable search visibility and attract high-intent customers through a strategic SEO system.",
    features: [
      "Technical SEO",
      "Keyword Research",
      "On-page SEO",
      "Content SEO",
    ],
  },

  {
    number: "02",
    icon: Megaphone,
    tag: "SMM",
    title: "Social Media Marketing",
    description:
      "Build a recognizable social presence with content that creates conversations and brand loyalty.",
    features: [
      "Social Media Strategy",
      "Content Planning",
      "Creative Direction",
      "Community Management",
    ],
  },

  {
    number: "03",
    icon: Target,
    tag: "ADS",
    title: "Performance Marketing",
    description:
      "Turn paid media into a predictable growth channel with data-driven campaigns.",
    features: [
      "Google Ads",
      "Meta Ads",
      "Audience Targeting",
      "Conversion Optimization",
    ],
  },

  {
    number: "04",
    icon: PenTool,
    tag: "CONTENT",
    title: "Content Marketing",
    description:
      "Create valuable content that earns attention, builds authority and drives action.",
    features: [
      "Content Strategy",
      "Blog Content",
      "Website Copy",
      "Social Content",
    ],
  },

  {
    number: "05",
    icon: Users,
    tag: "LEADS",
    title: "Lead Generation",
    description:
      "Create a consistent pipeline of qualified prospects using targeted campaigns.",
    features: [
      "Lead Generation",
      "Landing Pages",
      "Lead Magnets",
      "Funnel Strategy",
    ],
  },

  {
    number: "06",
    icon: BarChart3,
    tag: "DATA",
    title: "Analytics & CRO",
    description:
      "Understand what is working and continuously improve your digital performance.",
    features: [
      "Analytics Setup",
      "Conversion Tracking",
      "Funnel Analysis",
      "A/B Testing",
    ],
  },
];

export default function ServicesSection({ preview = false }) {
  const displayedServices = preview
    ? services.slice(0, 3)
    : services;

  return (
    <section className="section services-section">

      <div className="container">

        {/* Section heading */}

        <div className="section-head">

          <div>
            <p className="eyebrow">
              WHAT WE DO
            </p>

            <h2>
              Digital marketing
              <br />
              built for growth.
            </h2>
          </div>

          <p>
            We combine strategy, creativity and
            data to help ambitious brands become
            more visible, generate demand and grow.
          </p>

        </div>


        {/* Service cards */}

        <div className="service-detail-grid">

          {displayedServices.map((service) => (
            <ServiceCard
              key={service.number}
              number={service.number}
              icon={service.icon}
              tag={service.tag}
              title={service.title}
              description={service.description}
              features={service.features}
            />
          ))}

        </div>


        {/* View all services */}

        {preview && (
          <div className="services-more">

            <Link
              to="/services"
              className="btn btn-primary"
            >
              View all services
            </Link>

          </div>
        )}

      </div>

    </section>
  );
}