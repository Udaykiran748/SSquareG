import React from 'react';
import { Mail, Phone, MessageCircle, Briefcase, UserCircle, Handshake } from 'lucide-react';
import '../styles/contact.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Contact = ({ hideNavAndFooter = false }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent successfully!');
  };

  return (
    <>
      {!hideNavAndFooter && <Navbar />}
      <div className="contact-page-container">
        <div className="contact-layout">

          <div className="contact-header animate-fade-up">
            <span className="contact-badge">CONTACT</span>
            <h1 className="contact-title">Let's connect and make things happen.</h1>
            <p className="contact-subtitle">
              Reach out for a walkthrough, product questions, or anything related to growing your workflow with SSquareG.
            </p>
          </div>

          <div className="contact-grid">

            {/* Left Column: Form */}
            <div className="contact-card animate-fade-up" style={{ animationDelay: '100ms' }}>
              <h2 className="contact-card-title">Get in touch</h2>
              <form onSubmit={handleSubmit}>
                <div className="contact-form-group">
                  <label className="contact-form-label" htmlFor="name">Name</label>
                  <input type="text" id="name" className="contact-form-input" required />
                </div>

                <div className="contact-form-group">
                  <label className="contact-form-label" htmlFor="email">Email</label>
                  <input type="email" id="email" className="contact-form-input" required />
                </div>

                <div className="contact-form-group">
                  <label className="contact-form-label" htmlFor="phone">Phone</label>
                  <input type="tel" id="phone" className="contact-form-input" />
                </div>

                <div className="contact-form-group">
                  <label className="contact-form-label" htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    className="contact-form-input"
                    rows={4}
                    style={{ resize: 'vertical' }}
                    required
                  />
                </div>

                <button type="submit" className="contact-submit-btn">
                  Send Message
                </button>
              </form>
            </div>

            {/* Right Column: Info Cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>

              <div className="contact-card animate-fade-up" style={{ animationDelay: '200ms' }}>
                <h2 className="contact-card-title">Team contacts</h2>

                <div className="team-contact-list">
                  <div className="team-contact-header">
                    <span>ROLE</span>
                    <span>NAME</span>
                    <span style={{ textAlign: 'right' }}>CONNECT</span>
                  </div>

                  <div className="team-contact-row">
                    <div className="team-role">
                      <div className="role-icon-wrapper"><UserCircle size={16} /></div>
                      General
                    </div>
                    <div className="team-name">S2G Support</div>
                    <div className="team-actions">
                      <button className="action-icon-btn"><Mail size={16} /></button>
                    </div>
                  </div>

                  <div className="team-contact-row">
                    <div className="team-role">
                      <div className="role-icon-wrapper"><Briefcase size={16} /></div>
                      Sales
                    </div>
                    <div className="team-name"></div>
                    <div className="team-actions">
                      <button className="action-icon-btn"><Mail size={16} /></button>
                      <button className="action-icon-btn"><Phone size={16} /></button>
                      <button className="action-icon-btn"><MessageCircle size={16} /></button>
                    </div>
                  </div>

                  <div className="team-contact-row">
                    <div className="team-role">
                      <div className="role-icon-wrapper"><Handshake size={16} /></div>
                      Partnerships
                    </div>
                    <div className="team-name"></div>
                    <div className="team-actions">
                      <button className="action-icon-btn"><Mail size={16} /></button>
                      <button className="action-icon-btn"><Phone size={16} /></button>
                      <button className="action-icon-btn"><MessageCircle size={16} /></button>
                    </div>
                  </div>

                </div>
              </div>

              <div className="contact-card animate-fade-up" style={{ animationDelay: '300ms' }}>
                <h2 className="contact-card-title">Contact Information</h2>

                <div className="location-content" style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div className="location-text">
                    <p style={{ margin: 0, fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.25rem' }}>Location</p>
                    <p style={{ margin: 0, color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>Sindhanur, Raichur District, India</p>

                    <p style={{ margin: 0, fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.25rem' }}>Phone</p>
                    <p style={{ margin: 0, color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>+91 99801 90691 / +91 60059 20138</p>

                    <p style={{ margin: 0, fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.25rem' }}>Email</p>
                    <p style={{ margin: 0, color: 'var(--text-secondary)' }}>info@ssquareg.com</p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
      {!hideNavAndFooter && <Footer />}
    </>
  );
};

export default Contact;
