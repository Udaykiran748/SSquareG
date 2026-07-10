import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className="home-footer">
      <div className="home-footer-brand">SSQUAREG</div>
      <h2 className="home-footer-title">
        Growth, operations, and workflow in one<br />connected system for modern teams
      </h2>

      <div className="home-footer-nav-pill">
        {['Home', 'Products', 'About Us', 'Contact Us', 'Pricing', 'Privacy Policy', 'Terms & Conditions'].map((link, i) => {
          let path = '/';
          if (link === 'Contact Us') path = '/contact';
          if (link === 'About Us') path = '/about';
          if (link === 'Terms & Conditions') path = '/terms';
          
          return (
            <Link 
              key={i} 
              to={path} 
              className="home-footer-link" 
              style={{ textDecoration: 'none' }}
              onClick={() => window.scrollTo(0, 0)}
            >
              {link}
            </Link>
          );
        })}
      </div>

      <div className="home-footer-copyright">
        © 2026. SSquareG. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
