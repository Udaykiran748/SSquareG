import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { X, ChevronDown, Headphones, Layers, Code, Cloud, Briefcase } from 'lucide-react';
import '../styles/sidebar.css';

const Sidebar = ({ isOpen, onClose }) => {
  const [isProductPagesOpen, setIsProductPagesOpen] = useState(false);

  const productPages = [
    "BPO Services", "ERP Solutions", "Development",
    "Cloud & Infra", "IT Consulting & Outsourcing"
  ];

  return (
    <>
      <div 
        className={`sidebar-overlay ${isOpen ? 'open' : ''}`} 
        onClick={onClose} 
      />

      <div className={`sidebar-container ${isOpen ? 'open' : ''}`} style={{ padding: 0 }}>
        
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.5rem', borderBottom: '1px solid #F3F4F6' }}>
          <span style={{ fontSize: '1.2rem', fontWeight: '700', color: '#111827' }}>Menu</span>
          <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#111827', display: 'flex' }}>
            <X size={24} strokeWidth={2.5} />
          </button>
        </div>

        {/* Scrollable Content Area */}
        <div style={{ padding: '1.5rem', overflowY: 'auto', flex: 1, display: 'flex', flexDirection: 'column' }}>
          

          {/* Navigation Links */}
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2rem' }}>
            <Link to="/#platform" onClick={(e) => {
              onClose();
              if (window.location.pathname === '/') {
                e.preventDefault();
                const element = document.getElementById('platform');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }
            }} style={{ textDecoration: 'none', color: '#111827', fontSize: '1.1rem' }}>Platform</Link>
            <Link to="/#products" onClick={(e) => {
              onClose();
              if (window.location.pathname === '/') {
                e.preventDefault();
                const element = document.getElementById('products');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }
            }} style={{ textDecoration: 'none', color: '#111827', fontSize: '1.1rem' }}>Products</Link>
            <Link to="/pricing" onClick={onClose} style={{ textDecoration: 'none', color: '#111827', fontSize: '1.1rem' }}>Pricing</Link>
            <Link to="/contact" onClick={onClose} style={{ textDecoration: 'none', color: '#111827', fontSize: '1.1rem' }}>Contact</Link>
            
            {/* Product Pages Dropdown */}
            <div 
              style={{ 
                border: '1px solid #E5E7EB', 
                borderRadius: '12px', 
                padding: '1rem',
                cursor: 'pointer',
                background: '#FAFAFA'
              }}
              onClick={() => setIsProductPagesOpen(!isProductPagesOpen)}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ color: '#111827', fontSize: '1.1rem' }}>Solutions and Services</span>
                <ChevronDown size={18} style={{ 
                  transition: 'transform 0.3s ease', 
                  transform: isProductPagesOpen ? 'rotate(180deg)' : 'rotate(0)',
                  color: '#6B7280'
                }} />
              </div>
              
              {isProductPagesOpen && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1.5rem' }}>
                  {productPages.map((page, i) => (
                    page === "BPO Services" ? (
                      <Link key={i} to="/bpo-services" onClick={onClose} style={{ textDecoration: 'none', color: '#4B5563', fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <Headphones size={18} color="#ea580c" />
                        {page}
                      </Link>
                    ) : page === "ERP Solutions" ? (
                      <Link key={i} to="/erp-solutions" onClick={onClose} style={{ textDecoration: 'none', color: '#4B5563', fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <Layers size={18} color="#ea580c" />
                        {page}
                      </Link>
                    ) : page === "Development" ? (
                      <Link key={i} to="/development" onClick={onClose} style={{ textDecoration: 'none', color: '#4B5563', fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <Code size={18} color="#ea580c" />
                        {page}
                      </Link>
                    ) : page === "Cloud & Infra" ? (
                      <Link key={i} to="/cloud-infra" onClick={onClose} style={{ textDecoration: 'none', color: '#4B5563', fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <Cloud size={18} color="#ea580c" />
                        {page}
                      </Link>
                    ) : page === "IT Consulting & Outsourcing" ? (
                      <Link key={i} to="/it-consulting" onClick={onClose} style={{ textDecoration: 'none', color: '#4B5563', fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <Briefcase size={18} color="#ea580c" />
                        {page}
                      </Link>
                    ) : (
                      <span key={i} style={{ color: '#4B5563', fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        {page}
                      </span>
                    )
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Bottom Pinned Links */}
          <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '1.5rem', paddingTop: '2rem', borderTop: '1px solid #F3F4F6' }}>
            <Link to="#" onClick={(e) => { e.preventDefault(); alert('Coming Soon'); onClose(); }} style={{ textDecoration: 'none', color: '#111827', fontSize: '1.1rem' }}>Property List</Link>
            <Link to="/login" onClick={onClose} style={{ textDecoration: 'none', color: '#111827', fontSize: '1.1rem', fontWeight: '600' }}>Login</Link>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Sidebar;
