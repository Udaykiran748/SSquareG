import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, MessageCircle, Circle } from 'lucide-react';
import '../styles/global.css';
import '../styles/home.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Contact from './Contact';

const Home = () => {
  const navigate = useNavigate();

  const handleProductClick = (title) => {
    if (title === "Restaurant Billing System") navigate('/products?type=restaurant');
    else if (title === "Wholesale • Retail • POS") navigate('/products?type=wholesale');
    else if (title === "POS Restaurant Mini App") navigate('/products?type=miniapp');
    else if (title === "Property Management System") navigate('/products?type=pms');
    else if (title === "School & College ERP") navigate('/products?type=school');
    else if (title === "Transport ERP") navigate('/products?type=transport');
    else if (title === "Gym Booking System") navigate('/products?type=gym');
  };

  const products = [
    {
      title: "Restaurant Billing System",
      subtitle: "SMART • FAST • ACCURATE BILLING",
      features: ["Instant Bill Generation", "GST & Tax Calculation", "Digital Receipt & Invoice", "Order & Table Management", "Daily Sales Reports"]
    },
    {
      title: "Wholesale • Retail • POS",
      subtitle: "COMPLETE BUSINESS SOLUTION",
      features: ["Wholesale Orders", "Retail & POS Checkout", "Inventory Management", "Barcode & QR Scanner", "Customer & Supplier Management"]
    },
    {
      title: "POS Restaurant Mini App",
      subtitle: "FAST • SMART • DIGITAL DINING",
      features: ["Quick POS Billing", "Menu Management", "Kitchen Order Tickets (KOT)", "QR Code Menu & Ordering", "Customer Loyalty Management"]
    },
    {
      title: "Property Management System",
      subtitle: "COMPLETE HOTEL MANAGEMENT",
      features: ["Online Reservations", "Front Desk Management", "Room & Housekeeping", "Channel Manager Integration", "Automated Notifications"]
    },
    {
      title: "School & College ERP",
      subtitle: "COMPLETE EDUCATION MANAGEMENT",
      features: ["Student Admissions", "Attendance Tracking", "Fee Management", "Examination & Results", "Parent & Student Portal"]
    },
    {
      title: "Transport ERP",
      subtitle: "COMPLETE TRANSPORT MANAGEMENT",
      features: ["Fleet Management", "Trip & Route Planning", "GPS Vehicle Tracking", "Fuel & Maintenance", "Freight & Cargo Management"]
    },
    {
      title: "Gym Booking System",
      subtitle: "COMPLETE FITNESS MANAGEMENT",
      features: ["Online Registration", "QR Code Check-In", "Class & Session Booking", "Trainer Management", "Workout & Diet Plans"]
    }
  ];

  const platforms = [
    {
      title: "Independent Hotels",
      text: "Run reservations, front desk work, guest messaging, and direct-booking growth without stitching together multiple tools.",
      highlight: "Do more with a smaller team."
    },
    {
      title: "Boutique Stays",
      text: "Present a stronger digital identity with a cleaner website, clearer storytelling, and a better direct-booking journey.",
      highlight: "Turn brand quality into higher conversion."
    },
    {
      title: "Hostels",
      text: "Keep beds, dorms, and channel updates under control while reducing manual reconciliation across platforms.",
      highlight: "Handle volume with less channel chaos."
    },
    {
      title: "Vacation Rentals",
      text: "Strengthen your own booking funnel, reduce platform dependence, and centralize guest communication in one operating layer.",
      highlight: "Own more of the guest relationship."
    },
    {
      title: "Groups and Chains",
      text: "Standardize commercial and operational workflows across properties while maintaining clearer oversight for the team.",
      highlight: "Scale with more consistency."
    },
    {
      title: "Revenue Teams",
      text: "Use pricing support, inventory visibility, and reporting signals to make faster revenue decisions with better context.",
      highlight: "Improve control over pace, ADR, and mix."
    }
  ];

  return (
    <div className="home-container">
      {/* Shared Navigation */}
      <Navbar />

      {/* Hero Section */}
      <main className="home-hero">
        <div className="home-hero-bg"></div>
        <div className="home-hero-content-box">
          {/* Animated Badge */}
          <div className="home-badge animate-fade-in" style={{ marginTop: '-3rem' }}>
            SSQUAREG
          </div>

          {/* Premium Typography */}
          <h1 className="home-hero-title animate-slide-up delay-100">
            S SQUARE G TECH S0LUTIONS<br />SMART SOLUTIONS. STRONG GROWTH.
          </h1>

          {/* Feature Tags - Glassmorphic */}
          <div className="home-tags-container animate-slide-up delay-200">
            {['PMS', 'Booking Engine', 'Google Hotels Listing', 'AI Pricing', 'OTA Sync', 'SEO Websites', 'Dashboard', 'Housekeeping'].map((tag) => (
              <span key={tag} className="home-tag">
                {tag}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="home-action-buttons animate-slide-up delay-300">
            <a href="#products" className="home-btn-primary" onClick={(e) => {
              e.preventDefault();
              const element = document.getElementById('products');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}>
              Explore products <ArrowRight size={20} />
            </a>
            <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer" className="home-btn-secondary">
              <MessageCircle size={20} /> Contact Us <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </main>

      {/* Metrics Section */}
      <section className="home-stats-section">
        <div className="home-stats-grid">
          {[
            { value: "1000+", label: "Properties on SSquareG" },
            { value: "4x", label: "Increase in direct bookings" },
            { value: "100+", label: "OTA channels synced" },
            { value: "5 days", label: "To get fully onboarded" }
          ].map((stat, idx) => (
            <div key={idx} className="home-stat-card reveal-on-scroll" style={{ transitionDelay: `${idx * 100}ms` }}>
              <div className="stat-glow"></div>
              <h3 className="home-stat-value">{stat.value}</h3>
              <p className="home-stat-label">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Core Products Bento Grid Section */}
      <section id="products" className="home-products-section">
        <div className="home-products-header reveal-on-scroll">
          <span className="home-section-pretitle">CORE PRODUCTS</span>
          <h2 className="home-section-title">Built around business growth.</h2>
        </div>

        <div className="home-products-grid">
          {products.map((product, idx) => (
            <div
              key={idx}
              className="home-product-card reveal-on-scroll"
              style={{ transitionDelay: `${(idx % 3) * 100}ms`, cursor: 'pointer' }}
              onClick={() => handleProductClick(product.title)}
            >
              <div className="product-card-bg-circle-1"></div>
              <div className="product-card-bg-circle-2"></div>

              <div className="product-card-header">
                <h3>{product.title}</h3>
                <span className="product-badge">{product.subtitle}</span>
              </div>

              <ul className="product-feature-list">
                {product.features.map((feature, fIdx) => (
                  <li key={fIdx}>
                    <Circle size={20} className="feature-check" strokeWidth={3} />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Platform Section */}
      <section id="platform" className="home-platform-section" style={{ scrollMarginTop: '100px', marginTop: '-5rem' }}>
        <div className="home-platform-header reveal-on-scroll">
          <span className="home-platform-pretitle">PLATFORM</span>
          <h2 className="home-platform-title">Built for modern hospitality.</h2>
        </div>

        <div className="home-platform-grid">
          {platforms.map((item, idx) => (
            <div key={idx} className="home-platform-card reveal-on-scroll" style={{ transitionDelay: `${(idx % 3) * 100}ms` }}>
              <div className="platform-card-bg-circle"></div>
              <h3 className="platform-card-title">{item.title}</h3>
              <p className="platform-card-text">{item.text}</p>
              <div className="platform-card-highlight">{item.highlight}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Showcase Section */}
      <section className="home-showcase-section">
        <div className="home-showcase-header reveal-on-scroll">
          <span className="home-showcase-pretitle">SHOWCASE</span>
          <h2 className="home-showcase-title">Optimized for mobile.</h2>
        </div>

        <div className="home-showcase-grid">
          <div className="home-showcase-card reveal-on-scroll">
            <div className="showcase-content">
              <h3 className="showcase-heading">
                <span className="showcase-highlight">Hotel website</span><br />
                built to generate direct bookings.
              </h3>
            </div>
            <div className="showcase-image-wrapper">
              {/* Note: In a real app, you would place transparent PNGs of the hands/phones here */}
              <div className="showcase-phone-mockup">
                <img src="https://images.unsplash.com/photo-1616423640778-28d1b53229bd?auto=format&fit=crop&q=80&w=300" alt="Mobile website" className="showcase-img" />
              </div>
            </div>
          </div>

          <div className="home-showcase-card reveal-on-scroll" style={{ transitionDelay: '100ms' }}>
            <div className="showcase-content">
              <h3 className="showcase-heading">
                <span className="showcase-highlight">Owner portal</span><br />
                built for day-to-day operations.
              </h3>
            </div>
            <div className="showcase-image-wrapper">
              <div className="showcase-phone-mockup">
                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=300" alt="Mobile portal" className="showcase-img" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <div id="contact" className="home-contact-wrapper reveal-on-scroll">
        <Contact hideNavAndFooter={true} />
      </div>

      {/* Footer Component */}
      <Footer />
    </div>
  );
};

export default Home;
