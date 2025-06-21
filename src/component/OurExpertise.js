/* eslint-disable max-lines */
import React, { useRef, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import './OurExpertise.css';

// Import logos
import wordpressLogo from '../assets/images/wordpress-logo.png';
import mernLogo from '../assets/images/mern-logo.png';
import frontendLogo from '../assets/images/frontend-logo.png';
import backendLogo from '../assets/images/backend-logo.png';
import laravelLogo from '../assets/images/laravel-logo.png';
import uiuxLogo from '../assets/images/uiux-logo.png';

const OurExpertise = () => {
    const expertise = [
        { title: 'WordPress', description: 'High-performance, SEO-friendly websites.', logo: wordpressLogo },
        { title: 'MERN Stack', description: 'Dynamic and interactive web applications.', logo: mernLogo },
        { title: 'Frontend Development', description: 'Clean, responsive designs for seamless UX.', logo: frontendLogo },
        { title: 'Backend Development', description: 'Reliable, secure, and efficient backend structures.', logo: backendLogo },
        { title: 'Laravel', description: 'Custom applications built with robust frameworks.', logo: laravelLogo },
        { title: 'UI/UX Design', description: 'Engaging designs crafted to maximize user satisfaction.', logo: uiuxLogo }
    ];

    const [activeCard, setActiveCard] = useState(null);
    const containerRef = useRef(null);

    return (
        <section className="expertise-section" ref={containerRef}>
            <div className="floating-orb orb-1"></div>
            <div className="floating-orb orb-2"></div>

            <div className="container">
                <Row className="align-items-center">
                    <Col lg={5} className="expertise-intro">
                        <h2 className="section-title">
                            <span className="title-gradient">Technology</span>
                            <span className="title-outline"> That Powers</span>
                            <span className="title-accent"> Innovation</span>
                        </h2>
                        <p className="section-description">
                            Our developers and designers master cutting-edge technologies to deliver
                            <span className="highlight"> exceptional digital experiences</span> tailored to your needs.
                        </p>
                    </Col>

                    <Col lg={7} className="expertise-cards">
                        <div className="cards-grid">
                            {expertise.map((skill, index) => (
                                <div className={`tech-card ${activeCard === index ? 'active' : ''}`} key={index} onMouseEnter={() => setActiveCard(index)} onMouseLeave={() => setActiveCard(null)}>
                                    <div className="card-glow"></div>
                                    <div className="card-content">
                                        <div className="tech-logo">
                                            <img src={skill.logo} alt={skill.title} />
                                        </div>
                                        <h3 className="tech-title">{skill.title}</h3>
                                        <p className="tech-description">{skill.description}</p>
                                        <div className="tech-border"></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Col>
                </Row>
            </div>
        </section>
    );
};

export default OurExpertise;
