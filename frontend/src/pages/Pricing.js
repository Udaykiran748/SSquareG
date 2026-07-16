import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/pricing.css';

const Pricing = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pricing-page">
      <Navbar />

      <main className="pricing-main">
        <section className="pricing-section">
          <div className="pricing-hero">
            <span className="pricing-label">PRICING</span>
            <h1 className="pricing-title">Flexible plans for hotels at different stages of growth.</h1>
            <p className="pricing-subtitle">
              Choose the setup that fits your property—compare Essential and Elite below, then talk to us for a tailored quote.
            </p>
          </div>

          <div className="pricing-cards-container">
            {/* Essential Plan Card */}
            <div className="pricing-card">
              <div className="pricing-card-header">
                <span className="pricing-stack-label">CORE OPERATING STACK</span>
                <h2>Essential</h2>
                <p className="pricing-card-desc">Direct bookings and hotel operations in one setup.</p>
              </div>
              <div className="pricing-features">
                <ul className="pricing-features-list">
                  <li><span className="check-icon">✓</span> Branded Website</li>
                  <li><span className="check-icon">✓</span> Direct Booking Engine</li>
                  <li><span className="check-icon">✓</span> Google Hotels Integration</li>
                  <li><span className="check-icon">✓</span> Channel manager - 100+ OTAs</li>
                  <li><span className="check-icon">✓</span> Front Desk PMS</li>
                  <li><span className="check-icon">✓</span> Housekeeping</li>
                  <li><span className="check-icon">✓</span> Mobile-Friendly Owner Portal</li>
                  <li><span className="check-icon">✓</span> WhatsApp Confirmations</li>
                  <li><span className="check-icon">✓</span> Invoicing and Basic Reports</li>
                  <li><span className="check-icon">✓</span> 7-Day Support</li>
                </ul>
              </div>
              <div className="pricing-card-footer">
                <button className="pricing-contact-btn" onClick={() => navigate('/contact')}>
                  <span className="whatsapp-icon">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                    </svg>
                  </span>
                  Contact Us <span className="arrow">→</span>
                </button>
              </div>
            </div>

            {/* Elite Plan Card */}
            <div className="pricing-card elite-card">
              <div className="pricing-card-header">
                <div className="elite-header-top">
                  <span className="pricing-stack-label">GROWTH STACK</span>
                  <span className="recommended-badge">RECOMMENDED</span>
                </div>
                <h2>Elite</h2>
                <p className="pricing-card-desc">Automate tasks, strengthen your brand, and drive more bookings.</p>
              </div>
              <div className="pricing-features">
                <ul className="pricing-features-list">
                  <li><span className="check-icon">✓</span> Everything in Essential</li>
                  <li><span className="check-icon">✓</span> Advanced Website</li>
                  <li><span className="check-icon">✓</span> Price Automations with AI</li>
                  <li><span className="check-icon">✓</span> Demand Calendar</li>
                  <li><span className="check-icon">✓</span> AI Website Chatbot</li>
                  <li><span className="check-icon">✓</span> Add-On Upsells</li>
                  <li><span className="check-icon">✓</span> Payment Request Automations</li>
                  <li><span className="check-icon">✓</span> Guest CRM</li>
                  <li><span className="check-icon">✓</span> Guest Self Check-In</li>
                  <li><span className="check-icon">✓</span> Automated Review Requests</li>
                </ul>
              </div>
              <div className="pricing-card-footer">
                <button className="pricing-contact-btn">
                  <span className="whatsapp-icon">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                    </svg>
                  </span>
                  Contact Us <span className="arrow">→</span>
                </button>
              </div>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Pricing;
