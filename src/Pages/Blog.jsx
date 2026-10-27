import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";

const articles = [
  {
    id: 1,
    category: "SEO",
    title: "How we grew organic traffic 3x in 6 months",
    description:
      "A practical look at keyword research, content optimization, and building sustainable organic visibility.",
    author: "Ailyticks Team",
    date: "Oct 20",
    readTime: "6 min read",
    visual: "yellow",
    featured: true,
  },
  {
    id: 2,
    category: "PPC",
    title: "10 Google Ads mistakes to avoid",
    description:
      "Learn how to reduce wasted ad spend, improve targeting, and build campaigns around meaningful results.",
    author: "Ailyticks Team",
    date: "Oct 18",
    readTime: "5 min read",
    visual: "white",
  },
  {
    id: 3,
    category: "Social media",
    title: "Instagram Reels strategy guide",
    description:
      "Plan engaging short-form videos with stronger hooks, consistent content, and a clear brand voice.",
    author: "Ailyticks Team",
    date: "Oct 16",
    readTime: "7 min read",
    visual: "yellow",
  },
  {
    id: 4,
    category: "Content",
    title: "Content calendar template",
    description:
      "Organize your monthly content ideas, publishing schedule, and marketing priorities in one place.",
    author: "Ailyticks Team",
    date: "Oct 14",
    readTime: "4 min read",
    visual: "white",
  },
  {
    id: 5,
    category: "SEO",
    title: "SEO in the age of AI search",
    description:
      "Explore how helpful content, search intent, and technical SEO support online discoverability.",
    author: "Ailyticks Team",
    date: "Oct 12",
    readTime: "6 min read",
    visual: "yellow",
  },
  {
    id: 6,
    category: "Case studies",
    title: "Building a smarter growth strategy",
    description:
      "See how a structured marketing plan can bring audience research, content, and campaigns together.",
    author: "Ailyticks Team",
    date: "Oct 10",
    readTime: "8 min read",
    visual: "white",
  },
  {
    id: 7,
    category: "PPC",
    title: "Measure what matters in paid advertising",
    description:
      "Understand the metrics that help marketers evaluate campaign quality and business outcomes.",
    author: "Ailyticks Team",
    date: "Oct 08",
    readTime: "5 min read",
    visual: "yellow",
  },
  {
    id: 8,
    category: "Content",
    title: "Marketing trends every business should watch in 2026",
    description:
      "Discover the changes in search, AI, social media, and paid marketing shaping business growth.",
    author: "Ailyticks Team",
    date: "Oct 06",
    readTime: "7 min read",
    visual: "white",
  },
];

const categories = [
  "All",
  "SEO",
  "PPC",
  "Social media",
  "Content",
  "Case studies",
];

function ArticleVisual({ color, featured = false }) {
  return (
    <div
      className={`blog-visual ${color} ${
        featured ? "blog-visual-featured" : ""
      }`}
      aria-hidden="true"
    >
      <span>✳</span>
    </div>
  );
}

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const articlesPerPage = 3;

  const featuredArticle = articles[0];

  const filteredArticles = useMemo(() => {
    return articles.filter((article) => {
      const matchesCategory =
        activeCategory === "All" ||
        article.category === activeCategory;

      const searchText = search.trim().toLowerCase();

      const matchesSearch =
        !searchText ||
        article.title.toLowerCase().includes(searchText) ||
        article.description.toLowerCase().includes(searchText) ||
        article.category.toLowerCase().includes(searchText);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, search]);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredArticles.length / articlesPerPage)
  );

  const visibleArticles = filteredArticles.slice(
    (currentPage - 1) * articlesPerPage,
    currentPage * articlesPerPage
  );

  function handleCategoryChange(category) {
    setActiveCategory(category);
    setCurrentPage(1);
  }

  function handleSearchChange(event) {
    setSearch(event.target.value);
    setCurrentPage(1);
  }

  function handleSubscribe(event) {
    event.preventDefault();

    if (!email.trim()) return;

    // Demo only: connect this form to an email marketing service
    // before collecting real newsletter subscriptions.
    setSubscribed(true);
  }

  return (
    <div className="ailyticks-blog">
      {/* Blog heading and search */}
      <section className="blog-heading">
        <div className="blog-heading-copy">
          <h1>
            Digital marketing <span>insights</span>
          </h1>

          <p>Practical tips on SEO, ads, and growth.</p>
        </div>

        <label className="blog-search">
          <span aria-hidden="true">⌕</span>

          <input
            type="search"
            placeholder="Search articles"
            aria-label="Search articles"
            value={search}
            onChange={handleSearchChange}
          />
        </label>
      </section>

      {/* Category filters */}
      <nav className="blog-categories" aria-label="Article categories">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            className={`blog-category ${
              activeCategory === category ? "active" : ""
            }`}
            onClick={() => handleCategoryChange(category)}
            aria-pressed={activeCategory === category}
          >
            {category}
          </button>
        ))}
      </nav>

      {/* Featured article */}
      {activeCategory === "All" &&
        search.trim() === "" && (
          <section className="blog-featured">
            <ArticleVisual
              color={featuredArticle.visual}
              featured
            />

            <div className="blog-featured-content">
              <p className="blog-featured-label">
                Featured · {featuredArticle.category}
              </p>

              <h2>{featuredArticle.title}</h2>

              <p className="blog-featured-description">
                A short excerpt that explains what the reader
                will learn.
              </p>

              <p className="blog-article-meta">
                {featuredArticle.author} · {featuredArticle.date} ·{" "}
                {featuredArticle.readTime}
              </p>

              <Link
                to="/contact"
                className="blog-read-button"
                aria-label={`Read ${featuredArticle.title}`}
              >
                Read article
              </Link>
            </div>
          </section>
        )}

      {/* Article grid */}
      <section className="blog-articles" aria-label="Blog articles">
        {visibleArticles.length > 0 ? (
          <div className="blog-article-grid">
            {visibleArticles.map((article) => (
              <article className="blog-card" key={article.id}>
                <ArticleVisual color={article.visual} />

                <div className="blog-card-content">
                  <p className="blog-card-category">
                    {article.category}
                  </p>

                  <h2>{article.title}</h2>

                  <p className="blog-card-description">
                    {article.description}
                  </p>

                  <p className="blog-card-meta">
                    {article.author} · {article.readTime}
                  </p>

                  <Link
                    to="/contact"
                    className="blog-card-link"
                    aria-label={`Read ${article.title}`}
                  >
                    Read article <span aria-hidden="true">↗</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="blog-no-results">
            <h2>No articles found</h2>
            <p>
              Try another search term or select a different category.
            </p>

            <button
              type="button"
              onClick={() => {
                setSearch("");
                setActiveCategory("All");
                setCurrentPage(1);
              }}
            >
              Clear filters
            </button>
          </div>
        )}
      </section>

      {/* Pagination */}
      {filteredArticles.length > articlesPerPage && (
        <nav className="blog-pagination" aria-label="Blog pagination">
          {Array.from({ length: totalPages }, (_, index) => {
            const page = index + 1;

            return (
              <button
                key={page}
                type="button"
                className={`blog-page-number ${
                  currentPage === page ? "active" : ""
                }`}
                onClick={() => setCurrentPage(page)}
                aria-current={currentPage === page ? "page" : undefined}
                aria-label={`Page ${page}`}
              >
                {page}
              </button>
            );
          })}

          {currentPage < totalPages && (
            <button
              type="button"
              className="blog-next"
              onClick={() => setCurrentPage((page) => page + 1)}
            >
              Next
            </button>
          )}
        </nav>
      )}

      {/* Newsletter */}
      <section className="blog-newsletter">
        <div className="blog-newsletter-copy">
          <h2>Get one growth tip every week</h2>
          <p>Join our newsletter.</p>
        </div>

        {subscribed ? (
          <p className="blog-subscribe-success" role="status">
            Thanks for your interest!
          </p>
        ) : (
          <form
            className="blog-newsletter-form"
            onSubmit={handleSubscribe}
          >
            <input
              type="email"
              placeholder="name@company.com"
              aria-label="Your email address"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />

            <button type="submit">Subscribe</button>
          </form>
        )}
      </section>
    </div>
  );
}