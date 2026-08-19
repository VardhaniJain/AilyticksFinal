import React, { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export default function Form() {

  const [submitted, setSubmitted] = useState(false);


  const handleSubmit = (event) => {

    event.preventDefault();

    setSubmitted(true);

  };


  if (submitted) {

    return (
      <div className="form-success">

        <CheckCircle2 size={48} />

        <h2>
          Thanks for reaching out!
        </h2>

        <p>
          Your enquiry has been received.
          Our team will get back to you
          shortly.
        </p>

        <button
          className="btn btn-primary"
          onClick={() => setSubmitted(false)}
        >
          Send another enquiry
        </button>

      </div>
    );

  }


  return (

    <form
      className="contact-form"
      onSubmit={handleSubmit}
    >

      {/* ================= NAME ================= */}

      <div className="form-row">

        <label>

          First name

          <input
            type="text"
            required
            placeholder="Your name"
          />

        </label>


        <label>

          Last name

          <input
            type="text"
            placeholder="Your surname"
          />

        </label>

      </div>


      {/* ================= EMAIL ================= */}

      <label>

        Work email

        <input
          type="email"
          required
          placeholder="you@company.com"
        />

      </label>


      {/* ================= COMPANY ================= */}

      <label>

        Company

        <input
          type="text"
          placeholder="Company name"
        />

      </label>


      {/* ================= WEBSITE ================= */}

      <label>

        Website

        <input
          type="url"
          placeholder="https://yourwebsite.com"
        />

      </label>


      {/* ================= SERVICE ================= */}

      <label>

        What do you need help with?

        <select
          required
          defaultValue=""
        >

          <option
            value=""
            disabled
          >
            Select a service
          </option>

          <option value="seo">
            Search Engine Optimization
          </option>

          <option value="social-media">
            Social Media Marketing
          </option>

          <option value="performance">
            Performance Marketing
          </option>

          <option value="content">
            Content Marketing
          </option>

          <option value="lead-generation">
            Lead Generation
          </option>

          <option value="analytics">
            Analytics & CRO
          </option>

          <option value="other">
            Something else
          </option>

        </select>

      </label>


      {/* ================= MESSAGE ================= */}

      <label>

        Tell us about your goals

        <textarea
          required
          rows="6"
          placeholder="What are you trying to achieve?"
        />

      </label>


      {/* ================= SUBMIT ================= */}

      <button
        type="submit"
        className="btn btn-primary form-submit"
      >

        Send enquiry

        <ArrowRight size={18} />

      </button>


      <p className="form-disclaimer">
        By submitting this form, you agree
        to be contacted regarding your enquiry.
      </p>

    </form>

  );
}