/* eslint-disable max-lines */
import React, { useEffect } from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { FaCogs, FaRocket, FaUsers, FaStar } from 'react-icons/fa';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
    const features = [
        { icon: <FaCogs className="benefit-icon" />, title: 'Tailored Solutions', description: 'We customize each project to meet your specific business needs with precision-engineered solutions.' },
        { icon: <FaRocket className="benefit-icon" />, title: 'End-to-End Service', description: 'From concept to deployment, we manage the entire development lifecycle seamlessly.' },
        { icon: <FaUsers className="benefit-icon" />, title: 'Elite Team', description: 'Our specialists master cutting-edge technologies and futuristic design paradigms.' },
        { icon: <FaStar className="benefit-icon" />, title: 'Excellence Guaranteed', description: 'We deliver unmatched quality in functionality, design, and performance metrics.' }
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('show');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.2 }
        );

        document.querySelectorAll('.why-choose-us h1, .why-choose-us p, .why-choose-us .benefit-card').forEach((el) => {
            observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <section className="why-choose-us">
            <div className="floating-orb orb-1"></div>
            <div className="floating-orb orb-2"></div>
            <div className="container">
                <div className="section-header">
                    <h1 className="text-center">
                        <span className="title-main">Why Partner</span>
                        <span className="title-accent"> With Us?</span>
                    </h1>
                    <p className="text-center section-subtitle">
                        At <span className="highlights">Arbeit Technology</span>, we transform digital landscapes with innovative solutions that propel businesses into the future. Our fusion of
                        expertise and cutting-edge technology delivers powerful, scalable platforms.
                    </p>
                </div>
                <Row className="g-4">
                    {features.map((feature, index) => (
                        <Col key={index} md={6} lg={3}>
                            <Card className="feature-card">
                                <Card.Body>
                                    <div className="feature-icon-container">{feature.icon}</div>
                                    <Card.Title className="feature-title">{feature.title}</Card.Title>
                                    <Card.Text className="feature-description">{feature.description}</Card.Text>
                                </Card.Body>
                                <div className="card-accent-bar"></div>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        </section>
    );
};

export default WhyChooseUs;
