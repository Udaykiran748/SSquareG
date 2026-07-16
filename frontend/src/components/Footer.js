import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className="home-footer" style={{ backgroundImage: "url('/footer_bg.png')" }}>
      <div className="home-footer-brand">SSQUAREG</div>
      <h2 className="home-footer-title">
        Growth, bookings, and operations in one<br />connected system for modern hotels
      </h2>

      <div className="home-footer-nav-pill">
        {['Home', 'Property List', 'About Us', 'Contact Us', 'Pricing', 'Privacy Policy', 'Terms & Conditions', 'Refund Policy'].map((link, i) => {
          let path = '/';
          if (link === 'Contact Us') path = '/contact';
          if (link === 'About Us') path = '/about';
          if (link === 'Terms & Conditions') path = '/terms';
          if (link === 'Pricing') path = '/pricing';
          if (link === 'Products') path = '/products';
          if (link === 'Refund Policy') path = '/refund';

          return (
            <Link
              key={i}
              to={path}
              className="home-footer-link"
              style={{ textDecoration: 'none' }}
              onClick={(e) => {
                if (path.includes('#')) {
                  if (window.location.pathname === '/') {
                    e.preventDefault();
                    const hash = path.split('#')[1];
                    const element = document.getElementById(hash);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }
                } else if (link === 'Property List') {
                  e.preventDefault();
                  alert('Coming Soon');
                } else {
                  window.scrollTo(0, 0);
                }
              }}
            >
              {link}
            </Link>
          );
        })}
      </div>

      <div className="home-footer-copyright">
        © 2026. SSQUAREG. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
