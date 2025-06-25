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
        { title: 'UI/UX Design', description: 'Engaging designs crafted to maximize user satisfaction.', logo: uiuxLogo },
        { title: 'MERN Stack', description: 'Dynamic and interactive web applications.', logo: mernLogo },
        { title: 'App Development', description: 'Apps with React Native & Flutter for seamless UX.', logo: frontendLogo },
        { title: 'Backend Development', description: 'Reliable, secure, and efficient backend structures.', logo: backendLogo },
        { title: 'WordPress', description: 'High-performance, SEO-friendly websites.', logo: wordpressLogo },
        { title: 'Laravel', description: 'Custom applications built with robust frameworks.', logo: laravelLogo }
    ];

    const [activeItem, setActiveItem] = useState(null);
    const containerRef = useRef(null);

    return (
        <section className="expertise-container" ref={containerRef}>
            <div className="expertise-background">
                <div className="expertise-orb expertise-orb--primary"></div>
            </div>

            <div className="expertise-content">
                <Row className="align-items-center">
                    <Col lg={5} className="expertise-intro">
                        <div className="expertise-tag">OUR EXPERTISE</div>
                        <h2 className="expertise-heading">
                            <span className="expertise-heading--gradient">Next-Level</span>
                            <span className="expertise-heading--outline">Tech Stack</span>
                            <span className="expertise-heading--highlight"> Expertise</span>
                        </h2>
                        <p className="expertise-description">
                            We harness the power of modern technologies to craft
                            <span className="expertise-description--accent"> digital experiences that captivate</span> and convert.
                        </p>
                    </Col>

                    <Col lg={7} className="expertise-showcase">
                        <div className="expertise-hologram">
                            {expertise.map((skill, index) => (
                                <div
                                    className={`expertise-hologram-item ${activeItem === index ? 'expertise-hologram-item--active' : ''}`}
                                    key={index}
                                    onMouseEnter={() => setActiveItem(index)}
                                    onMouseLeave={() => setActiveItem(null)}>
                                    <div className="expertise-hologram-glow"></div>
                                    <div className="expertise-hologram-content">
                                        <div className="expertise-hologram-icon">
                                            <img src={skill.logo} alt={skill.title} />
                                        </div>
                                        <div className="expertise-hologram-text">
                                            <h3 className="expertise-hologram-title">{skill.title}</h3>
                                            <p className="expertise-hologram-description">{skill.description}</p>
                                        </div>
                                        <div className="expertise-hologram-beam"></div>
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
