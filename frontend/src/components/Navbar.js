import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Menu, ChevronDown } from 'lucide-react';
import { AuthContext } from '../context/AuthContext';
import Sidebar from './Sidebar';
import '../styles/global.css';
import '../styles/home.css';

const Navbar = () => {
  const { isAuthenticated, user, logout } = useContext(AuthContext);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);

  const applications = [
    "Booking engine & Google", "Hotel website & SEO",
    "Channel manager", "AI Smart Pricing",
    "Front desk", "WhatsApp",
    "Revenue Management", "POS",
    "F&B & inventory", "Housekeeping",
    "Multi-property", "Reviews"
  ];

  return (
    <>
      <nav className="home-nav">
        <div className="home-brand-wrapper">
          <div className="home-logo-box">S2G</div>
          <span className="home-brand-name">SSquareG.</span>
        </div>

        <div className="home-nav-links">
          {['Platform', 'Solutions', 'Pricing', 'Contact Us'].map((item) => (
            item === 'Solutions' ? (
              <div
                key={item}
                style={{ position: 'relative', padding: '1rem 0' }}
                onMouseEnter={() => setIsSolutionsOpen(true)}
                onMouseLeave={() => setIsSolutionsOpen(false)}
              >
                <span
                  className="home-nav-link"
                  style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}
                >
                  {item}
                  <ChevronDown size={16} style={{
                    transition: 'transform 0.3s ease',
                    transform: isSolutionsOpen ? 'rotate(180deg)' : 'rotate(0)'
                  }} />
                </span>

                {isSolutionsOpen && (
                  <div className="solutions-dropdown" style={{ top: '100%', paddingTop: '0.5rem' }}>
                    <div className="solutions-dropdown-inner">
                      <div className="solutions-dropdown-header">
                        All products
                      </div>
                      <div className="solutions-dropdown-grid">
                        {applications.map((app, i) => (
                          <div key={i} className="solutions-dropdown-item">
                            {app}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item}
                to={item === 'Contact Us' ? '/contact' : '/'}
                className="home-nav-link"
                style={{ textDecoration: 'none' }}
              >
                {item}
              </Link>
            )
          ))}
        </div>

        <div className="home-auth-actions">
          {isAuthenticated ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <span style={{ fontWeight: '600', color: 'var(--text-primary)' }}>
                Hi, {user?.name?.split(' ')[0] || 'User'}
              </span>
              <button
                onClick={logout}
                className="home-login-btn"
                style={{ background: 'none', border: 'none', padding: '0', color: 'var(--primary-dark)', cursor: 'pointer' }}
              >
                Log out
              </button>
            </div>
          ) : (
            <>
              <Link to="/login" className="home-login-btn">
                Log in
              </Link>
              <Link to="/register" className="home-register-btn">
                Get Started
              </Link>
            </>
          )}
          <button
            className="home-menu-btn"
            onClick={() => setIsSidebarOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={20} />
          </button>
        </div>
      </nav>

      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />
    </>
  );
};

export default Navbar;
