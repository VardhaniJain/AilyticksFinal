import React from "react";
import {
  ArrowRight,
  Clock,
  CalendarDays,
} from "lucide-react";
import { Link } from "react-router-dom";

const posts = [
  {
    category: "DIGITAL MARKETING",
    date: "August 2026",
    readTime: "6 min read",
    title:
      "Marketing Trends Every Business Should Watch in 2026",
    description:
      "From AI-powered search to smarter advertising, discover the digital marketing trends changing how businesses attract customers in 2026.",
    number: "01",
  },

  {
    category: "SEO",
    date: "August 2026",
    readTime: "7 min read",
    title:
      "SEO in the AI Search Era: What Changes?",
    description:
      "Search is evolving quickly. Learn how businesses can adapt their SEO strategies for AI-powered search experiences.",
    number: "02",
  },

  {
    category: "PERFORMANCE",
    date: "July 2026",
    readTime: "5 min read",
    title:
      "Clicks Are Not Enough: Measure What Matters",
    description:
      "Traffic and clicks are only part of the story. Discover the metrics that actually connect marketing activity to business growth.",
    number: "03",
  },

  {
    category: "SOCIAL MEDIA",
    date: "July 2026",
    readTime: "6 min read",
    title:
      "How Brands Can Win Attention on Social Media",
    description:
      "Social platforms are crowded. Here's how brands can create content that earns attention instead of simply filling a content calendar.",
    number: "04",
  },

  {
    category: "CONTENT",
    date: "June 2026",
    readTime: "8 min read",
    title:
      "Why Content Strategy Matters More Than Content Volume",
    description:
      "Publishing more content isn't always the answer. Learn how a strategic content system can generate stronger results.",
    number: "05",
  },

  {
    category: "LEAD GENERATION",
    date: "June 2026",
    readTime: "6 min read",
    title:
      "From Website Visitors to Qualified Leads",
    description:
      "A practical look at how businesses can turn website traffic into meaningful conversations and qualified opportunities.",
    number: "06",
  },
];


function CTA() {
  return (
    <section className="cta-section">

      <div className="container cta-box">

        <div>

          <p className="eyebrow">
            NEED A STRATEGY?
          </p>

          <h2>
            Turn insights into action.
          </h2>

          <p>
            If you're ready to apply these ideas
            to your business, let's talk.
          </p>

        </div>

        <Link
          to="/contact"
          className="btn btn-dark"
        >
          Start a conversation
          <ArrowRight size={18} />
        </Link>

      </div>

    </section>
  );
}


export default function Blog() {

  return (
    <>
      {/* ================= PAGE HERO ================= */}

      <section className="page-hero">

        <div className="container">

          <p className="eyebrow">
            AILYTICKS INSIGHTS
          </p>

          <h1>
            Ideas for marketers
            who want to grow smarter.
          </h1>

          <p>
            Practical perspectives on digital
            marketing, SEO, content, social media,
            performance and customer behavior.
          </p>

        </div>

      </section>


      {/* ================= FEATURED ARTICLE ================= */}

      <section className="section">

        <div className="container">

          <article className="featured-blog">

            <div className="featured-blog-visual">

              <span>
                FEATURED
              </span>

              <strong>
                2026
              </strong>

            </div>


            <div className="featured-blog-content">

              <p className="eyebrow">
                DIGITAL MARKETING
              </p>

              <h2>
                Marketing Trends Every
                Business Should Watch in 2026
              </h2>

              <p>
                Digital marketing is changing faster
                than ever. AI-powered search, smarter
                advertising, social commerce and
                changing consumer expectations are
                reshaping the way businesses compete
                online.
              </p>

              <div className="blog-meta">

                <span>
                  <CalendarDays size={15} />
                  August 2026
                </span>

                <span>
                  <Clock size={15} />
                  6 min read
                </span>

              </div>

              <Link
                to="/blog"
                className="btn btn-primary"
              >
                Read article
                <ArrowRight size={18} />
              </Link>

            </div>

          </article>

        </div>

      </section>


      {/* ================= BLOG GRID ================= */}

      <section className="section blog-section">

        <div className="container">

          <div className="section-head">

            <div>

              <p className="eyebrow">
                LATEST INSIGHTS
              </p>

              <h2>
                What we're thinking about.
              </h2>

            </div>

            <p>
              Fresh perspectives and practical
              ideas to help your brand navigate
              the digital landscape.
            </p>

          </div>


          <div className="blog-grid">

            {posts.slice(1).map(
              (post, index) => (

                <article
                  className="blog-card"
                  key={post.number}
                >

                  <div
                    className={`blog-art art-${
                      (index + 1) % 3
                    }`}
                  >

                    <span>
                      {post.number}
                    </span>

                  </div>


                  <div className="blog-card-content">

                    <small>
                      {post.category}
                    </small>

                    <h2>
                      {post.title}
                    </h2>

                    <p>
                      {post.description}
                    </p>


                    <div className="blog-meta">

                      <span>
                        <CalendarDays size={14} />
                        {post.date}
                      </span>

                      <span>
                        <Clock size={14} />
                        {post.readTime}
                      </span>

                    </div>


                    <Link
                      to="/blog"
                      className="text-link"
                    >
                      Read article
                      <ArrowRight size={16} />
                    </Link>

                  </div>

                </article>

              )
            )}

          </div>

        </div>

      </section>


      {/* ================= NEWSLETTER ================= */}

      <section className="newsletter-section">

        <div className="container newsletter-box">

          <div>

            <p className="eyebrow">
              AILYTICKS NOTES
            </p>

            <h2>
              Get smarter marketing
              ideas in your inbox.
            </h2>

            <p>
              Occasional insights on digital
              marketing, growth and strategy.
              No spam.
            </p>

          </div>


          <form
            className="newsletter-form"
            onSubmit={(event) => {
              event.preventDefault();
              alert(
                "Thanks! Newsletter signup is connected to this demo."
              );
            }}
          >

            <input
              type="email"
              required
              placeholder="Enter your email"
            />

            <button
              type="submit"
              className="btn btn-primary"
            >
              Subscribe
              <ArrowRight size={17} />
            </button>

          </form>

        </div>

      </section>


      {/* ================= CTA ================= */}

      <CTA />
    </>
  );
}
