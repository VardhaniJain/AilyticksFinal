import React from "react";

export default function Banner({
  eyebrow = "AILYTICKS",
  title = "Digital marketing built for growth.",
  description = "Strategy, creativity and data working together to help ambitious brands grow.",
}) {

  return (
    <section className="page-hero">

      <div className="container">

        <p className="eyebrow">
          {eyebrow}
        </p>

        <h1>
          {title}
        </h1>

        <p>
          {description}
        </p>

      </div>

    </section>
  );
}