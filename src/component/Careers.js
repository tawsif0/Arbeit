/* eslint-disable max-lines */
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Modal } from 'react-bootstrap';
import { motion, useScroll, useTransform } from 'framer-motion';
import './Careers.css';

const Career = () => {
    const [jobs] = useState([
        {
            id: 1,
            title: 'UI/UX Design Intern',
            location: 'Kuril, Dhaka (On-site)',
            type: 'Internship (3 Months)',
            description: 'Join Arbeit Technology as a UI/UX Design Intern. Collaborate on real projects, design interfaces, and gain hands-on experience in a startup environment.',
            compensation: 'Travel allowance only',
            responsibilities: [
                'Design interfaces for web and mobile apps',
                'Create wireframes, prototypes, and mockups',
                'Work on product UI/UX and landing pages',
                'Collaborate with developers',
                'Apply motion/animated design concepts'
            ],
            requirements: [
                'Must be a fresh graduate',
                'Strong UI/UX principles knowledge',
                'Proficiency in Figma (preferred), Photoshop, Illustrator',
                'Basic graphic design understanding',
                'Passion for animation and modern UI trends'
            ],
            benefits: ['Real project experience', 'Portfolio building opportunity', 'Mentorship from experienced designers', 'Potential full-time position', 'Startup environment insight'],
            applyLink: 'https://forms.gle/tyLY9PbWTYKBYtr36',
            deadline: '24 June 2025'
        },
        {
            id: 2,
            title: 'Digital Marketing Specialist',
            location: 'Kuril, Dhaka (On-site)',
            type: 'Full-time (6 Months Probation)',
            description: 'Manage and grow our digital presence. Expert in Meta ads with SEO knowledge wanted. Opportunity for career growth in a startup.',
            compensation: 'BDT 12,000 – 15,000/month during probation',
            responsibilities: [
                'Plan and manage Meta (Facebook/Instagram) Ads',
                'Optimize ad campaigns for conversions',
                'Manage social media pages and content',
                'Work on SEO for websites',
                'Track and report performance metrics'
            ],
            requirements: [
                '0–1 year digital marketing experience',
                'Expert in Meta Ads (hands-on experience)',
                'Basic to intermediate SEO knowledge',
                'Social media management skills',
                'Understanding of ad targeting and budgeting'
            ],
            benefits: ['Salary increment after probation', 'Permanent position opportunity', 'Creative freedom in marketing', 'Career growth with real projects', 'Supportive team environment'],
            applyLink: 'https://forms.gle/hUL7apBxY1uTuAEX6',
            deadline: '24 June 2025'
        }
    ]);

    const [selectedJob, setSelectedJob] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const { scrollY } = useScroll();
    const height = useTransform(scrollY, [0, 300], ['100vh', '30vh']);
    const opacity = useTransform(scrollY, [0, 200], [1, 0.7]);
    const scale = useTransform(scrollY, [0, 200], [1, 0.95]);

    const handleShowModal = (job) => {
        setSelectedJob(job);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedJob(null);
    };
    useEffect(() => {
        // Scroll to the career-hero section when this page is loaded
        const careerHero = document.getElementById('career-hero');
        if (careerHero) {
            careerHero.scrollIntoView({ behavior: 'smooth' });
        }
    }, []);
    return (
        <div className="career-page-wrapper">
            {/* Animated Hero Section */}
            <motion.section className="career-hero" id="career-hero" style={{ height, opacity }}>
                <motion.div className="hero-content" style={{ scale }}>
                    <h1 className="career-main-title">
                        Join Our <span className="highlight">Innovative</span> Team
                    </h1>
                    <p className="career-subtitle">Shape the future with cutting-edge technology and creative solutions</p>
                    <div className="scroll-indicator">
                        <div className="mouse"></div>
                    </div>
                </motion.div>
            </motion.section>

            {/* Job Cards Section */}
            <Container className="career-container">
                <Row className="career-job-grid">
                    {jobs.map((job) => (
                        <Col key={job.id} xs={12} md={6} className="career-job-col">
                            <Card className="career-job-card">
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
