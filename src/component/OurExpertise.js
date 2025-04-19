/* eslint-disable no-unused-vars */
/* eslint-disable max-lines */
import React, { useEffect, useRef, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import './OurExpertise.css'; // Import custom CSS for styling

// Import logos for each expertise
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
        { title: 'Frontend Development', description: 'Clean, responsive designs for a seamless user experience.', logo: frontendLogo },
        { title: 'Backend Development', description: 'Reliable, secure, and efficient backend structures.', logo: backendLogo },
        { title: 'Laravel', description: 'Custom applications built with robust frameworks.', logo: laravelLogo },
        { title: 'UI/UX Design', description: 'Engaging designs crafted to maximize user satisfaction.', logo: uiuxLogo }
    ];

    const sliderRef = useRef(null);
    const [isUserInteracting, setIsUserInteracting] = useState(false);

    useEffect(() => {
        const slider = sliderRef.current;
        if (!slider) return;

        // Duplicate content for seamless infinite scrolling
        slider.innerHTML += slider.innerHTML;
        const scrollStep = 6; // Adjust scroll speed

        let animationFrame;
        const scroll = () => {
            if (slider.scrollTop >= slider.scrollHeight / 1) {
                slider.scrollTop = 0;
            }
            slider.scrollTop += scrollStep;
            animationFrame = requestAnimationFrame(scroll);
        };

        const stopScroll = () => {
            setIsUserInteracting(true);
            cancelAnimationFrame(animationFrame);
        };
        const startScroll = () => {
            setIsUserInteracting(false);
            animationFrame = requestAnimationFrame(scroll);
        };

        slider.addEventListener('mouseenter', stopScroll);
        slider.addEventListener('mouseleave', startScroll);
        slider.addEventListener('wheel', stopScroll);
        slider.addEventListener('touchstart', stopScroll);
        slider.addEventListener('touchend', startScroll);

        startScroll();

        return () => {
            cancelAnimationFrame(animationFrame);
            slider.removeEventListener('mouseenter', stopScroll);
            slider.removeEventListener('mouseleave', startScroll);
            slider.removeEventListener('wheel', stopScroll);
            slider.removeEventListener('touchstart', stopScroll);
            slider.removeEventListener('touchend', startScroll);
        };
    }, []);

    return (
        <section className="our-expertise">
            <div className="container">
                <Row>
                    {/* Left Side: Heading and Description */}
                    <Col lg={7} className="left-content">
                        <h1 className="section-title">Technology that Powers Innovation</h1>
                        <p className="section-subtitle">
                            Our developers and designers are skilled in a wide range of tools and technologies, ensuring that we deliver the best solutions for our clients’ specific needs.
                        </p>
                    </Col>

                    {/* Right Side: Card Slider */}
                    <Col lg={5} className="right-content">
                        <div className="card-slider" ref={sliderRef}>
                            {expertise.map((skill, index) => (
                                <div className="expertise-card" key={index}>
                                    <div className="card-logo-container">
                                        <img src={skill.logo} alt={`${skill.title} Logo`} className="card-logo" draggable="false" />
                                    </div>
                                    <div className="card-body">
                                        <h3 className="card-title">{skill.title}</h3>
                                        <p className="card-text">{skill.description}</p>
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
