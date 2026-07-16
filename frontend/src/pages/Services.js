import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/global.css';
import '../styles/services.css';

const Services = () => {
    const location = useLocation();
    const isERP = location.pathname === '/erp-solutions';
    const isDev = location.pathname === '/development';
    const isCloud = location.pathname === '/cloud-infra';
    const isIT = location.pathname === '/it-consulting';

    const themeClass = isERP ? 'theme-erp' : isDev ? 'theme-dev' : isCloud ? 'theme-cloud' : isIT ? 'theme-it' : 'theme-bpo';

    const content = isERP ? {
        title: "Enterprise Resource Planning",
        subtitle: "Our comprehensive ERP solutions streamline your entire operation — from finance to HR to supply chain — into a single, powerful platform.",
        features: [
            "Financial Management",
            "Inventory & Supply Chain",
            "HR & Payroll Module",
            "Business Intelligence Dashboard",
            "Multi-location Support"
        ],
        image: "/erp-dashboard.png",
        imageAlt: "ERP Dashboard",
    } : isDev ? {
        title: "Software Development",
        subtitle: "From sleek web apps to powerful mobile experiences, our development team builds robust, scalable solutions tailored to your exact business needs.",
        features: [
            "Web Application Development",
            "React / Angular / Vue",
            "Android & iOS Mobile Apps",
            "Spring Boot / Node.js Backend",
            "REST API & Microservices"
        ],
        image: "/dev-dashboard.png",
        imageAlt: "Software Development",
    } : isCloud ? {
        title: "Cloud & Infrastructure",
        subtitle: "Modernize your IT infrastructure with our cloud migration, DevOps, and integration services — delivering reliability, scalability, and security.",
        features: [
            "AWS / Azure / GCP",
            "Docker & Kubernetes",
            "CI/CD Pipeline Setup",
            "Database Management",
            "Security & Compliance"
        ],
        image: "/cloud-infra.png",
        imageAlt: "Cloud Infrastructure",
    } : isIT ? {
        title: "IT Consulting & Outsourcing",
        subtitle: "Partner with our seasoned IT consultants and dedicated outsourcing teams to drive digital transformation, optimize costs, and accelerate your business outcomes with expert guidance.",
        features: [
            "IT Strategy & Roadmap Planning",
            "Digital Transformation Advisory",
            "Dedicated Offshore Development Teams",
            "IT Project Management & Governance",
            "Technology Audit & Risk Assessment",
            "Staff Augmentation & Resource Outsourcing"
        ],
        image: "/it-consulting.png",
        imageAlt: "IT Consulting",
    } : {
        title: "Business Process Outsourcing",
        subtitle: "We deliver end-to-end BPO solutions with trained specialists, streamlined workflows, and measurable outcomes that reduce costs and increase efficiency.",
        features: [
            "Customer Support & Helpdesk",
            "Data Entry & Processing",
            "Back Office Operations",
            "HR & Payroll Processing",
            "Finance & Accounting"
        ],
        image: "/bpo-team.png",
        imageAlt: "Team working",
    };

    return (
        <div className={`bpo-container ${themeClass}`}>
            {/* Navigation */}
            <Navbar />

            {/* Main Content */}
            <main className="bpo-content">
                <div className="bpo-hero-section">
                    <div className="bpo-text-content">
                        <h1 className="bpo-title">{content.title}</h1>
                        <p className="bpo-subtitle">
                            {content.subtitle}
                        </p>

                        <ul className="bpo-features-list">
                            {content.features.map((feature, index) => (
                                <li key={index}>
                                    <span className="check-icon">✓</span>
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>

                        <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer" className="bpo-cta-btn" style={{ textDecoration: 'none', display: 'inline-block', textAlign: 'center', boxSizing: 'border-box' }}>Get Started &rarr;</a>
                    </div>
                    <div className="bpo-image-content">
                        <img src={content.image} alt={content.imageAlt} className="bpo-hero-image" />
                    </div>
                </div>
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default Services;
