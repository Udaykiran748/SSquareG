import React from 'react';
import '../styles/global.css';
import '../styles/home.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="home-container">
      {/* Premium Mesh Gradient Background */}
      <div className="home-mesh-bg-1" />
      <div className="home-mesh-bg-2" />

      {/* Shared Navigation */}
      <Navbar />

      {/* Hero Section */}
      <main className="home-hero">
        <div className="home-hero-content-box animate-fade-up">
          {/* Animated Badge */}
          <div className="home-badge">
            ✨ Next-Generation Workspace
          </div>

          {/* Massive Typography */}
          <h1 className="animate-fade-up delay-100 home-hero-title">
            S Square G Tech Solutions <br />
            <span className="home-hero-title-gradient">Smart Solutions. Strong Growth.</span>
          </h1>

          <p className="animate-fade-up delay-200 home-hero-subtitle">
            Unify your applications, automate tedious tasks, and gain unparalleled insights. The operating system built specifically for modern revenue teams.
          </p>

          {/* Feature Tags - Glassmorphic */}
          <div className="animate-fade-up delay-300 home-tags-container">
            {['Intelligent Dashboard', 'Unified Analytics', 'Team Collaboration', 'API Integrations', 'Automated Reporting', 'Enterprise Security'].map((tag, idx) => (
              <span key={tag} className="home-tag">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </main>

      {/* Metrics Section */}
      <section className="home-stats-section">
        <div className="home-stats-grid">
          <div className="home-stat-card animate-fade-up" style={{ animationDelay: '100ms' }}>
            <h3 className="home-stat-value">1000+</h3>
            <p className="home-stat-label">properties on SSquareG</p>
          </div>
          <div className="home-stat-card animate-fade-up" style={{ animationDelay: '200ms' }}>
            <h3 className="home-stat-value">4x</h3>
            <p className="home-stat-label">increase in direct bookings</p>
          </div>
          <div className="home-stat-card animate-fade-up" style={{ animationDelay: '300ms' }}>
            <h3 className="home-stat-value">100+</h3>
            <p className="home-stat-label">OTA channels synced</p>
          </div>
          <div className="home-stat-card animate-fade-up" style={{ animationDelay: '400ms' }}>
            <h3 className="home-stat-value">5 days</h3>
            <p className="home-stat-label">to get onboarded</p>
          </div>
        </div>
      </section>

      {/* Footer Component */}
      <Footer />
    </div>
  );
};

export default Home;
