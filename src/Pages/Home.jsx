import React from "react";
import { 
  ArrowRight, 
  Sparkles, 
  Search, 
  Megaphone, 
  Target, 
  CloudRain, 
  ShoppingCart, 
  Building2, 
  TrendingUp, 
  Stethoscope, 
  GraduationCap, 
  Briefcase, 
  HeartHandshake, 
  UtensilsCrossed, 
  Factory,
  MessageCircle
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      {/* 1. HERO SECTION */}
      <section className="hero-section">
        <div className="container hero-grid-layout">
          <div className="hero-left-col">
            <div className="hero-badge">
              <Sparkles size={14} /> Performance-focused digital systems
            </div>
            <h1>
              Make your brand <span>impossible to ignore.</span>
            </h1>
            <p>
              We are Ailyticks, a performance focused digital marketing agency designed to build trust and convert attention into growth for you.
            </p>
            <div className="hero-btn-group">
              <Link to="/contact" className="btn btn-primary">
                Start a conversation <ArrowRight size={16} />
              </Link>
              <Link to="/services" className="btn btn-ghost">
                See our services
              </Link>
            </div>
          </div>

          <div className="hero-right-col">
            <div className="dash-card">
              <div className="dash-card-header">
                <span>Smart - dashboard</span>
                <span className="live-badge">● LIVE</span>
              </div>
              <div className="dash-campaign-title">Campaign conference</div>
              <div className="dash-metric-value">+184%</div>
              <div className="dash-subtext">↑ 28.6% this month</div>
              
              <div className="dash-chart-bars">
                {[40, 52, 45, 68, 62, 80, 75, 92, 88, 100].map((h, i) => (
                  <div key={i} className="bar" style={{ height: `${h}%` }}></div>
                ))}
              </div>

              <div className="dash-footer-stats">
                <div>
                  <small>Reach</small>
                  <strong>1.84M</strong>
                </div>
                <div>
                  <small>Conversion</small>
                  <strong>12.6K</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. BUILT FOR MEASURABLE GROWTH STRIP */}
      <section className="growth-strip">
        <div className="container growth-strip-inner">
          <strong>Built for measurable growth</strong>
          <span className="dot-sep">•</span>
          <span>Clear reporting</span>
          <span className="dot-sep">•</span>
          <span>Omnichannel access</span>
          <span className="dot-sep">•</span>
          <span>Proven systems</span>
          <span className="dot-sep">•</span>
          <span>Paid ad sessions</span>
        </div>
      </section>

      {/* 3. MARKETING CHALLENGE CARDS SECTION */}
      <section className="challenge-section">
        <div className="container">
          <p className="eyebrow-center">FIND YOUR FIT</p>
          <h2>What's your biggest marketing challenge right now?</h2>
          <p className="challenge-subtitle">Choose an option to let us guide you straight to right services.</p>

          <div className="challenge-grid">
            {/* Card 1 */}
            <div className="challenge-card">
              <div className="challenge-icon-box"><Search size={22} /></div>
              <h3>I want more visibility.</h3>
              <p>I want more visibility, attention and builds trust over time.</p>
              <Link to="/contact" className="btn btn-primary card-cta">
                Find SEO help
              </Link>
            </div>

            {/* Card 2 */}
            <div className="challenge-card">
              <div className="challenge-icon-box"><Megaphone size={22} /></div>
              <h3>I want more engagement.</h3>
              <p>I want visitors engagement funnels, landing... and follow-ups.</p>
              <Link to="/contact" className="btn btn-primary card-cta">
                Explore SMM
              </Link>
            </div>

            {/* Card 3 */}
            <div className="challenge-card">
              <div className="challenge-icon-box"><Target size={22} /></div>
              <h3>I want more leads.</h3>
              <p>Turn visitors into enquiries that explore Performance Ads.</p>
              <Link to="/contact" className="btn btn-primary card-cta">
                Explore Performance Ads
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. WHO WE HELP SECTION */}
      <section className="industries-section">
        <div className="container">
          <h2>Who we help</h2>
          
          <div className="industries-grid">
            {[
              { label: "Tech & SaaS", icon: CloudRain },
              { label: "E-commerce", icon: ShoppingCart },
              { label: "Real Estate", icon: Building2 },
              { label: "Fintech", icon: TrendingUp },
              { label: "Healthcare", icon: Stethoscope },
              { label: "Education", icon: GraduationCap },
              { label: "Professional Services", icon: Briefcase },
              { label: "Non-Profits", icon: HeartHandshake },
              { label: "Hospitality", icon: UtensilsCrossed },
              { label: "Manufacturing", icon: Factory },
            ].map((ind, idx) => {
              const Icon = ind.icon;
              return (
                <div key={idx} className="industry-pill">
                  <Icon size={20} />
                  <span>{ind.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. MASSIVE YELLOW CONVERSION BANNER */}
      <section className="yellow-cta-section">
        <div className="container yellow-content">
          <p className="ready-eyebrow">READY WHEN YOU ARE</p>
          <h2>Your next customer is searching right now.</h2>
          <h2>Your next customer is searching right now.</h2>
          <p className="yellow-desc">
            Let's make sure they find you. Tell us your goal and we'll show you the plan to reach it.
          </p>

          <div className="yellow-actions">
            <Link to="/contact" className="btn btn-black">
              Book a strategy call <ArrowRight size={16} />
            </Link>
            <a href="https://whatsapp.com" target="_blank" rel="noreferrer" className="btn btn-outline-black">
              <MessageCircle size={16} /> Chat on WhatsApp
            </a>
          </div>

          <div className="yellow-perks">
            <span>✓ Reply within one working day</span>
            <span>✓ No long services</span>
            <span>✓ Chatting firm day one</span>
          </div>
        </div>
      </section>
    </>
  );
}