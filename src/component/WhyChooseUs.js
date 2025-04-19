/* eslint-disable max-lines */
import React, { useEffect } from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { FaCogs, FaRocket, FaUsers, FaStar } from 'react-icons/fa';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
    const benefits = [
        { icon: <FaCogs className="benefit-icon" />, title: 'Tailored Solutions', description: 'We customize each project to meet your specific business needs.' },
        { icon: <FaRocket className="benefit-icon" />, title: 'End-to-End Service', description: 'From design to deployment, we manage the entire development process.' },
        { icon: <FaUsers className="benefit-icon" />, title: 'Experienced Team', description: 'Our experts specialize in the latest technologies and design trends.' },
        { icon: <FaStar className="benefit-icon" />, title: 'Commitment to Quality', description: 'We’re committed to high standards in functionality, design, and performance.' }
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('show');
                        observer.unobserve(entry.target); // Ensures animation runs only once
                    }
                });
            },
            { threshold: 0.3 } // Trigger when 30% of the section is visible
        );

        document.querySelectorAll('.why-choose-us h1, .why-choose-us p, .why-choose-us .benefit-card').forEach((el) => {
            observer.observe(el);
        });

        return () => observer.disconnect(); // Cleanup on component unmount
    }, []);

    return (
        <section className="why-choose-us">
            <div className="container">
                <h1 className="text-center mb-4">Why Partner with Arbeit Technology?</h1>
                <p className="text-center mb-5 body-text text-bold">
                    At Arbeit Technology, we’re passionate about helping businesses excel in the digital space. Our team combines years of experience with cutting-edge technology to deliver powerful,
                    scalable solutions that drive growth and streamline operations.
                </p>
                <Row>
                    {benefits.map((benefit, index) => (
                        <Col key={index} md={6} lg={3} className="mb-4">
                            <Card className="benefit-card text-left p-4">
                                <Card.Body>
                                    <div className="benefit-icon-container">{benefit.icon}</div>
                                    <Card.Title className="benefit-title">{benefit.title}</Card.Title>
                                    <Card.Text className="benefit-description">{benefit.description}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        </section>
    );
};

export default WhyChooseUs;
