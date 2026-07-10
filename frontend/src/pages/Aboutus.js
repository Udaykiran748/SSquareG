import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/global.css';
import '../styles/aboutus.css';

const Aboutus = () => {
    return (
        <div className="about-container">
            {/* Mesh Gradients */}
            <div className="about-mesh-bg-1" />
            <div className="about-mesh-bg-2" />

            {/* Navigation */}
            <Navbar />

            {/* Main Content */}
            <main className="about-content">
                <div className="about-header animate-fade-up">
                    <div className="about-badge">Our Story</div>
                    <h1 className="about-title">
                        Empowering modern teams to <br />
                        <span className="about-title-highlight">work smarter, together.</span>
                    </h1>
                    <p className="about-subtitle">
                        SSquareG Tech Solutions was founded on a simple belief: the tools we use to manage our businesses shouldn't be the hardest part of running them. We build intelligent, seamless systems that empower teams to scale with confidence.
                    </p>
                </div>

                <div className="about-grid animate-fade-up delay-200">
                    <div className="about-card">
                        <h2 className="about-card-title">Our Mission</h2>
                        <p className="about-card-text">
                            We aim to break down the silos between departments, platforms, and people. By providing an all-in-one operating system for modern revenue teams, we free up your time so you can focus on what truly matters: growth, strategy, and innovation.
                        </p>
                    </div>

                    <div className="about-card">
                        <h2 className="about-card-title">Our Values</h2>
                        <p className="about-card-text">
                            <strong>Simplicity:</strong> We turn complex problems into elegant, easy-to-use solutions.
                        </p>
                        <p className="about-card-text">
                            <strong>Security:</strong> We treat your data as if it were our own. Enterprise-grade security is built into our core.
                        </p>
                        <p className="about-card-text">
                            <strong>Velocity:</strong> We move fast and empower our clients to do the same by automating the mundane.
                        </p>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default Aboutus;
