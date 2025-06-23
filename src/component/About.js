/* eslint-disable max-lines */
import React, { useEffect, useRef } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './About.css';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const sectionRef = useRef(null);

    const contentRef = useRef(null);
    const missionRef = useRef(null);
    const visionRef = useRef(null);

    useEffect(() => {
        // Animate title characters
        gsap.fromTo(
            '.about-char',
            { y: 60, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1.5,
                stagger: 0.06,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 85%',
                    toggleActions: 'restart none none reset'
                }
            }
        );

        // Animate content
        gsap.fromTo(
            contentRef.current,
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: contentRef.current,
                    start: 'top 85%',
                    toggleActions: 'restart none none reset'
                }
            }
        );

        // Animate cards (mission + vision)
        gsap.fromTo(
            [missionRef.current, visionRef.current],
            { y: 80, opacity: 0, scale: 0.95 },
            {
                y: 0,
                opacity: 1,
                scale: 1,
                duration: 1,
                ease: 'back.out(1.7)',
                stagger: 0.2,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 85%',
                    toggleActions: 'restart none none reset'
                }
            }
        );

        // Kill on unmount
        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    return (
        <section className="about-section" ref={sectionRef}>
            {/* Background elements */}

            <Container>
                <div className="about-section-header">
                    <div className="about-title">
                        <span className="about-title-main">
                            {'About'.split('').map((char, i) => (
                                <span key={`main-${i}`} className="about-char">
                                    {char}
                                </span>
                            ))}
                        </span>
                        <span className="about-title-accent">
                            {' Us'.split('').map((char, i) => (
                                <span key={`accent-${i}`} className="about-char">
                                    {char}
                                </span>
                            ))}
                        </span>
                    </div>
                    <div className="about-content-wrapper" ref={contentRef}>
                        <div className="about-content-inner">
                            <p className="about-lead-text">
                                At <span className="highlight">Arbeit Technology</span>, we design and develop smart, scalable, and tailored digital solutions to help businesses succeed in a rapidly
                                evolving world.
                            </p>
                            <div className="about-divider"></div>
                            <p className="about-sub-text">From intuitive websites and powerful e-commerce platforms to custom software and mobile apps — we do it all, and we do it with purpose.</p>
                            <p className="about-sub-text">
                                We're more than just developers — we're your technology partner, guiding you from idea to launch and beyond. Our team blends creativity with cutting-edge technology to
                                build solutions that solve problems, simplify processes, and deliver measurable value.
                            </p>
                        </div>
                    </div>
                </div>

                <Row className="g-4 justify-content-center mt-5">
                    <Col lg={6} ref={missionRef}>
                        <Card className="about-card about-mission-card h-100">
                            <div className="about-card-glow"></div>
                            <Card.Body>
                                <div className="about-icon-container">
                                    <svg className="about-icon about-mission-icon" viewBox="0 0 24 24">
                                        <path d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3zm-1.06 13.54L7.4 12l1.41-1.41 2.12 2.12 4.24-4.24 1.41 1.41-5.64 5.66z" />
                                    </svg>
                                </div>
                                <Card.Title className="about-card-title">Our Mission</Card.Title>
                                <Card.Text className="about-card-text">
                                    To empower businesses of all sizes with high-quality digital solutions that solve real-world challenges and fuel growth.
                                </Card.Text>
                            </Card.Body>
                            <div className="about-card-accent"></div>
                        </Card>
                    </Col>

                    <Col lg={6} ref={visionRef}>
                        <Card className="about-card about-vision-card h-100">
                            <div className="about-card-glow"></div>
                            <Card.Body>
                                <div className="about-icon-container">
                                    <svg className="about-icon about-vision-icon" viewBox="0 0 24 24">
                                        <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
                                    </svg>
                                </div>
                                <Card.Title className="about-card-title">Our Vision</Card.Title>
                                <Card.Text className="about-card-text">
                                    To be a global leader in delivering smart, reliable, and future-ready web and software solutions that drive innovation and efficiency.
                                </Card.Text>
                            </Card.Body>
                            <div className="about-card-accent"></div>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default About;
