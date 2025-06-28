/* eslint-disable max-lines */
import React, { useState, useEffect, useRef } from 'react';
import { Container, Row, Col, Card, Button, Modal } from 'react-bootstrap';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Careers.css';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const Career = () => {
    const [jobs] = useState([
        {
            id: 1,
            title: 'WordPress Developer Intern',
            location: 'Kuril, Dhaka (On-site)',
            type: 'Internship (3 Months)',
            description: 'Master WordPress theme & plugin customization, develop production-ready Webflow sites, and work on live projects for your portfolio.',
            compensation: 'Travel allowance only',
            responsibilities: [
                'Master WordPress theme & plugin customization',
                'Develop production-ready Webflow sites',
                'Work on 5+ live projects for your portfolio',
                'Receive professional development certification'
            ],
            requirements: ['WordPress theme development skills', 'Webflow platform experience', 'HTML5/CSS3/JS fundamentals', 'PHP basics for customization', 'UI/UX design sensibility'],
            benefits: ['Real project experience', 'Portfolio building opportunity', 'Professional development certification'],
            applyLink: 'https://forms.gle/ZZDuWMWf1FsYeSG97',
            deadline: '3 July 2025'
        },
        {
            id: 2,
            title: 'MERN Stack Developer Intern',
            location: 'Kuril, Dhaka (On-site)',
            type: 'Internship (3 Months)',
            description: 'Build full-stack applications with MERN, develop RESTful APIs, and gain cloud deployment experience.',
            compensation: 'Travel allowance only',
            responsibilities: ['Build full-stack applications with MERN', 'Develop RESTful APIs with Node.js/Express', 'Implement MongoDB database solutions', 'Gain experience with cloud deployment'],
            requirements: ['JavaScript proficiency', 'React.js fundamentals', 'Interest in Node.js/Express', 'Database concepts (SQL/NoSQL)'],
            benefits: ['Real project experience', 'Portfolio building opportunity', 'Professional development certification'],
            applyLink: 'https://forms.gle/zoFx7hLn2hWNYKLi6',
            deadline: '3 July 2025'
        }
    ]);

    const [selectedJob, setSelectedJob] = useState(null);
    const [showModal, setShowModal] = useState(false);

    // Refs for GSAP animations
    const heroRef = useRef(null);

    const scrollIndicatorRef = useRef(null);
    const jobCardsRef = useRef([]);
    const animatedBackgroundRef = useRef(null);

    useEffect(() => {
        // Scroll to the career-hero section when this page is loaded
        const careerHero = document.getElementById('career-hero');
        if (careerHero) {
            careerHero.scrollIntoView({ behavior: 'smooth' });
        }

        // GSAP Animations
        const ctx = gsap.context(() => {
            // Hero section animations

            gsap.from(scrollIndicatorRef.current, {
                opacity: 0,
                y: 20,
                delay: 0.5,
                duration: 1,
                ease: 'power2.out'
            });

            // Scroll animations for hero section
            gsap.to(heroRef.current, {
                scrollTrigger: {
                    trigger: heroRef.current,
                    start: 'top top',
                    end: '+=300',
                    scrub: true,
                    pin: false
                },
                height: '50vh',
                ease: 'none'
            });

            // Job cards animations
            jobCardsRef.current.forEach((card, index) => {
                gsap.from(card, {
                    scrollTrigger: {
                        trigger: card,
                        start: 'top 80%',
                        toggleActions: 'play none none none'
                    },
                    opacity: 0,
                    y: 50,
                    duration: 0.8,
                    delay: index * 0.1,
                    ease: 'back.out(1.2)'
                });
            });

            // Animated background particles
            const particles = gsap.utils.toArray('.particle');
            particles.forEach((particle, i) => {
                const duration = 15 + i * 5;
                gsap.to(particle, {
                    x: () => gsap.utils.random(-50, 50),
                    y: () => gsap.utils.random(-50, 50),
                    rotation: 360,
                    duration: duration,
                    repeat: -1,
                    ease: 'none',
                    yoyo: true
                });
            });
        }, animatedBackgroundRef); // scope

        return () => ctx.revert(); // cleanup
    }, []);

    const handleShowModal = (job) => {
        setSelectedJob(job);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedJob(null);
    };

    return (
        <div className="career-page-wrapper" ref={animatedBackgroundRef}>
            {/* Hero Section */}
            <section className="career-hero" id="career-hero" ref={heroRef}>
                <div className="hero-content">
                    <div className="expertise-tag">Careers</div>
                    <h1 className="career-main-title">
                        Join Our <span className="highlight">Innovative</span> Team
                    </h1>
                    <p className="career-subtitle">Shape the future with cutting-edge technology and creative solutions</p>
                    <div className="scroll-indicator" ref={scrollIndicatorRef}>
                        <div className="mouse"></div>
                    </div>
                </div>
            </section>

            {/* Job Cards Section */}
            <Container className="career-container">
                {jobs.length > 0 ? (
                    <Row className="career-job-grid">
                        {jobs.map((job, index) => (
                            <Col key={job.id} xs={12} md={6} className="career-job-col">
                                <Card className="career-job-card" ref={(el) => (jobCardsRef.current[index] = el)}>
                                    <div className="card-gradient-border">
                                        <Card.Body className="career-job-card-body">
                                            <div className="job-header">
                                                <Card.Title className="career-job-title">{job.title}</Card.Title>
                                                <Card.Subtitle className="career-job-subtitle">
                                                    <span className="location-icon">📍</span> {job.location}
                                                </Card.Subtitle>
                                                <div className="compensation-badge">
                                                    <span className="coin-icon">💰</span> {job.compensation}
                                                </div>
                                            </div>

                                            <Card.Text className="career-job-description">{job.description}</Card.Text>

                                            <div className="card-footer">
                                                <div className="deadline-badge">
                                                    <span className="clock-icon">⏳</span> Apply before: {job.deadline}
                                                </div>
                                                <div className="button-group">
                                                    <Button className="career-apply-button" href={job.applyLink} target="_blank" rel="noopener noreferrer">
                                                        Apply Now <span className="button-icon">🚀</span>
                                                    </Button>
                                                    <Button variant="outline-info" className="career-expand-button" onClick={() => handleShowModal(job)}>
                                                        View Details <span className="button-icon">🔍</span>
                                                    </Button>
                                                </div>
                                            </div>
                                        </Card.Body>
                                    </div>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                ) : (
                    <div className="no-jobs-message text-center">
                        <h2>
                            🚫 <span className="no-jobs-title">No Openings at the Moment</span>
                        </h2>
                        <p className="no-jobs-description">We’re not hiring right now — but don’t worry, exciting opportunities are always on the horizon. Stay tuned!</p>
                    </div>
                )}
            </Container>

            {/* Job Details Modal */}
            <Modal show={showModal} onHide={handleCloseModal} centered className="career-modal" size="lg">
                <div className="career-modal-gradient-border">
                    <Modal.Header className="career-modal-header">
                        <Modal.Title className="career-modal-title"></Modal.Title>
                        <button type="button" className="career-modal-close" onClick={handleCloseModal}>
                            &times;
                        </button>
                    </Modal.Header>
                    <Modal.Body className="career-modal-body">
                        <div className="career-modal-content">
                            <div className="career-modal-section">
                                <h5 className="career-modal-section-title">
                                    <span className="section-icon">📍</span> Location & Compensation
                                </h5>
                                <div className="career-modal-info">
                                    <p>
                                        <strong>Title:</strong> {selectedJob?.title}
                                    </p>
                                    <p>
                                        <strong>Type:</strong> {selectedJob?.type}
                                    </p>
                                    <p>
                                        <strong>Location:</strong> {selectedJob?.location}
                                    </p>
                                    <p>
                                        <strong>Compensation:</strong> {selectedJob?.compensation}
                                    </p>
                                    <p>
                                        <strong>Deadline:</strong> {selectedJob?.deadline}
                                    </p>
                                </div>
                            </div>

                            <div className="career-modal-section">
                                <h5 className="career-modal-section-title">
                                    <span className="section-icon">📌</span> Key Responsibilities
                                </h5>
                                <ul className="career-modal-list">
                                    {selectedJob?.responsibilities.map((item, idx) => (
                                        <li key={idx} className="career-modal-list-item">
                                            <span className="list-icon">→</span> {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="career-modal-section">
                                <h5 className="career-modal-section-title">
                                    <span className="section-icon">🎯</span> Requirements
                                </h5>
                                <ul className="career-modal-list">
                                    {selectedJob?.requirements.map((item, idx) => (
                                        <li key={idx} className="career-modal-list-item">
                                            <span className="list-icon">→</span> {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="career-modal-section">
                                <h5 className="career-modal-section-title">
                                    <span className="section-icon">✨</span> What You'll Gain
                                </h5>
                                <ul className="career-modal-list">
                                    {selectedJob?.benefits.map((item, idx) => (
                                        <li key={idx} className="career-modal-list-item">
                                            <span className="list-icon">→</span> {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer className="career-modal-footer">
                        <Button className="career-apply-button" href={selectedJob?.applyLink} target="_blank" rel="noopener noreferrer">
                            Apply Now <span className="button-icon">🚀</span>
                        </Button>
                    </Modal.Footer>
                </div>
            </Modal>

            {/* Animated Background Elements */}
            <div className="animated-background">
                <div className="particle particle-1"></div>
                <div className="particle particle-2"></div>
                <div className="particle particle-3"></div>
                <div className="particle particle-4"></div>
            </div>
        </div>
    );
};

export default Career;
