import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/global.css';
import '../styles/terms.css';

const TermsAndConditions = () => {
    return (
        <div className="terms-container">
            {/* Mesh Gradients */}
            <div className="terms-mesh-bg-1" />
            <div className="terms-mesh-bg-2" />

            {/* Navigation */}
            <Navbar />

            {/* Main Content */}
            <main className="terms-content">
                <div className="terms-header animate-fade-up">
                    <div className="terms-badge">Legal Information</div>
                    <h1 className="terms-title">
                        Terms and Conditions
                    </h1>
                    <p className="terms-subtitle">
                        Please read these terms and conditions carefully before using our platform. These terms govern your use of SSquareG Tech Solutions and outline your legal rights.
                    </p>
                </div>

                <div className="terms-card animate-fade-up delay-200">
                    <section className="terms-section">
                        <h2 className="terms-section-title">1. Acceptance of Terms</h2>
                        <p className="terms-section-text">
                            By accessing or using the SSquareG Tech Solutions platform, you agree to be bound by these Terms and Conditions and all applicable laws and regulations. If you do not agree with any part of these terms, you may not use our services.
                        </p>
                    </section>

                    <section className="terms-section">
                        <h2 className="terms-section-title">2. Use License</h2>
                        <p className="terms-section-text">
                            Permission is granted to temporarily download one copy of the materials (information or software) on SSquareG Tech Solutions's website for personal, non-commercial transitory viewing only.
                        </p>
                        <p className="terms-section-text">
                            This is the grant of a license, not a transfer of title, and under this license you may not: modify or copy the materials; use the materials for any commercial purpose, or for any public display; attempt to decompile or reverse engineer any software contained on the platform.
                        </p>
                    </section>

                    <section className="terms-section">
                        <h2 className="terms-section-title">3. User Accounts</h2>
                        <p className="terms-section-text">
                            When you create an account with us, you must provide information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the terms, which may result in immediate termination of your account on our platform.
                        </p>
                    </section>

                    <section className="terms-section">
                        <h2 className="terms-section-title">4. Privacy Policy</h2>
                        <p className="terms-section-text">
                            Your use of the platform is also governed by our Privacy Policy. Please review our Privacy Policy, which also governs the platform and informs users of our data collection practices.
                        </p>
                    </section>

                    <section className="terms-section">
                        <h2 className="terms-section-title">5. Modifications</h2>
                        <p className="terms-section-text">
                            SSquareG Tech Solutions may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.
                        </p>
                    </section>
                </div>
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default TermsAndConditions;
