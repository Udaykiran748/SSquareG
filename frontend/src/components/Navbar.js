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
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  
  const applications = [
    "Restaurant Billing System",
    "Wholesale • Retail • POS",
    "POS Restaurant Mini App",
    "Property Management System",
    "School & College ERP",
    "Transport ERP",
    "Gym Booking System"
  ];

  return (
    <>
      <nav className="home-nav">
        <Link to="/" className="home-brand-wrapper" style={{ textDecoration: 'none', color: 'inherit' }} onClick={() => window.scrollTo(0, 0)}>
          <div className="home-logo-box">S2G</div>
          <div className="home-brand-name">
            SSquareG
            <span className="home-brand-sub">smart solutions made easier</span>
          </div>
        </Link>

        <div className="home-nav-links">
          {['Platform', 'Products', 'Pricing', 'Contact'].map((item) => (
            item === 'Products' ? (
              <div
                key={item}
                style={{ position: 'relative', padding: '1.5rem 0' }}
                onMouseEnter={() => setIsProductsOpen(true)}
                onMouseLeave={() => setIsProductsOpen(false)}
              >
                <span
                  className="home-nav-link"
                  style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', cursor: 'pointer' }}
                >
                  {item}
                  <ChevronDown size={14} style={{
                    transition: 'transform 0.3s ease',
                    transform: isProductsOpen ? 'rotate(180deg)' : 'rotate(0)'
                  }} />
                </span>

                {isProductsOpen && (
                  <div className="products-dropdown">
                    <div className="products-dropdown-inner">
                      <div className="products-dropdown-header">
                        All products
                      </div>
                      <div className="products-dropdown-grid">
                        {applications.map((app, i) => (
                          app === "Restaurant Billing System" ? (
                            <Link key={i} to="/products?type=restaurant" style={{ textDecoration: 'none', color: 'inherit' }} onClick={() => { setIsProductsOpen(false); window.scrollTo(0, 0); }}>
                              <div className="products-dropdown-item">
                                {app}
                              </div>
                            </Link>
                          ) : app === "Wholesale • Retail • POS" ? (
                            <Link key={i} to="/products?type=wholesale" style={{ textDecoration: 'none', color: 'inherit' }} onClick={() => { setIsProductsOpen(false); window.scrollTo(0, 0); }}>
                              <div className="products-dropdown-item">
                                {app}
                              </div>
                            </Link>
                          ) : app === "POS Restaurant Mini App" ? (
                            <Link key={i} to="/products?type=miniapp" style={{ textDecoration: 'none', color: 'inherit' }} onClick={() => { setIsProductsOpen(false); window.scrollTo(0, 0); }}>
                              <div className="products-dropdown-item">
                                {app}
                              </div>
                            </Link>
                          ) : app === "Property Management System" ? (
                            <Link key={i} to="/products?type=pms" style={{ textDecoration: 'none', color: 'inherit' }} onClick={() => { setIsProductsOpen(false); window.scrollTo(0, 0); }}>
                              <div className="products-dropdown-item">
                                {app}
                              </div>
                            </Link>
                          ) : app === "School & College ERP" ? (
                            <Link key={i} to="/products?type=school" style={{ textDecoration: 'none', color: 'inherit' }} onClick={() => { setIsProductsOpen(false); window.scrollTo(0, 0); }}>
                              <div className="products-dropdown-item">
                                {app}
                              </div>
                            </Link>
                          ) : app === "Transport ERP" ? (
                            <Link key={i} to="/products?type=transport" style={{ textDecoration: 'none', color: 'inherit' }} onClick={() => { setIsProductsOpen(false); window.scrollTo(0, 0); }}>
                              <div className="products-dropdown-item">
                                {app}
                              </div>
                            </Link>
                          ) : app === "Gym Booking System" ? (
                            <Link key={i} to="/products?type=gym" style={{ textDecoration: 'none', color: 'inherit' }} onClick={() => { setIsProductsOpen(false); window.scrollTo(0, 0); }}>
                              <div className="products-dropdown-item">
                                {app}
                              </div>
                            </Link>
                          ) : (
                            <div key={i} className="products-dropdown-item">
                              {app}
                            </div>
                          )
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item}
                to={item === 'Contact' ? '/contact' : item === 'Pricing' ? '/pricing' : item === 'Platform' ? '/#platform' : '/'}
                className="home-nav-link"
                style={{ textDecoration: 'none' }}
                onClick={(e) => {
                  if (item === 'Platform') {
                    if (window.location.pathname === '/') {
                      e.preventDefault();
                      const element = document.getElementById('platform');
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    } else {
                      e.preventDefault();
                      window.location.href = '/#platform';
                    }
                  } else {
                    window.scrollTo(0, 0);
                  }
                }}
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
              <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer" className="home-register-btn" style={{ textDecoration: 'none' }}>
                Book a Demo
              </a>
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
