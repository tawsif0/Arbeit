/* eslint-disable max-lines */
import React, { useState } from 'react';
import Slider from 'react-slick';
import { Card, Button, Modal } from 'react-bootstrap';
import { FaLaptop, FaBriefcase, FaShoppingCart, FaSchool, FaShoppingBasket } from 'react-icons/fa';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './OurServices.css';

const OurServices = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedService, setSelectedService] = useState(null);

    const services = [
        {
            icon: <FaLaptop className="benefit-icon" />,
            title: 'Company Website Development',
            description: 'Make a strong first impression with a professional, custom-built website that aligns with your brand.',
            keyFeatures: [
                'Custom UI/UX design for a unique look',
                'Mobile-friendly and fully responsive layout',
                'SEO-friendly structure for better search rankings',
                'Secure hosting with SSL integration',
                'Contact forms and lead generation tools',
                'Blog/news section (optional)',
                'Static or dynamic website options',
                'Admin dashboard for easy content management'
            ]
        },
        {
            icon: <FaBriefcase className="benefit-icon" />,
            title: 'Portfolio Website Development',
            description: 'Display your work beautifully and attract more clients with a sleek portfolio site.',
            keyFeatures: [
                'Smooth animations and elegant transitions',
                'Optimized structure for SEO and faster loading speed',
                'Contact & inquiry forms for client interaction',
                'Social media integration for better reach',
                'Blog integration (optional) for content marketing'
            ]
        },
        {
            icon: <FaShoppingCart className="benefit-icon" />,
            title: 'Single Vendor E-Commerce Website',
            description: 'Expand your business online with secure, user-friendly e-commerce solutions that drive sales.',
            keyFeatures: [
                'Modern, user-friendly storefront design',
                'Unlimited product and category management',
                'Secure checkout with multiple payment gateways',
                'Order tracking and customer management system',
                'SEO optimization and marketing tools',
                'Inventory and discount management',
                'Review and rating system'
            ]
        },
        {
            icon: <FaShoppingBasket className="benefit-icon" />,
            title: 'Multi-Vendor E-Commerce Website',
            description: 'Build a marketplace where multiple vendors can sell their products under one platform.',
            keyFeatures: [
                'Vendor registration and verification',
                'Dedicated vendor dashboard for product & order management',
                'Commission-based system for revenue sharing',
                'Product approval and moderation',
                'Multi-vendor order splitting',
                'Vendor subscription plans (optional)',
                'Real-time chat between vendors and customers (optional)',
                'Delivery and earnings management system'
            ]
        },
        {
            icon: <FaSchool className="benefit-icon" />,
            title: 'LMS (Learning Management System) Development',
            description: 'Build interactive, user-friendly LMS platforms for effective online learning experiences.',
            keyFeatures: [
                'Course management with video lessons and quizzes',
                'Student and instructor dashboards',
                'Secure payment gateway integration',
                'Certification generation upon course completion',
                'Membership/subscription plans for course access',
                'Live class integration (optional)',
                'AI-powered learning analytics for insights'
            ]
        }
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 600,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 2 } },
            { breakpoint: 768, settings: { slidesToShow: 1 } }
        ]
    };
    const handleSeeMore = (service) => {
        setSelectedService(service);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedService(null);
    };

    return (
        <section className="our-services">
            <h1 className="text-center">Our Services</h1>
            <Slider {...settings}>
                {services.map((service, index) => (
                    <div key={index} className="service-slide">
                        <Card className="service-card p-4">
                            <div className="service-icon-container">{service.icon}</div>
                            <Card.Body>
                                <Card.Title className="service-title text-center">{service.title}</Card.Title>
                                <Card.Text className="service-description text-center">{service.description}</Card.Text>
                            </Card.Body>
                            <div className="text-center">
                                <Button variant="outline-primary" className="customs-btns" onClick={() => handleSeeMore(service)}>
                                    See more
                                </Button>
                            </div>
                        </Card>
                    </div>
                ))}
            </Slider>

            {/* Service Details Modal */}
            <Modal show={showModal} onHide={handleCloseModal} centered className="service-modal">
                <Modal.Header className="modal-head">
                    <Modal.Title className="modal-name">{selectedService?.title}</Modal.Title>
                </Modal.Header>

                <Modal.Body className="modal-body">
                    <p className="modal-summary">{selectedService?.description}</p>

                    <h6 className="modal-subheading">Key Features:</h6>

                    <ul className="modal-features">
                        {selectedService?.keyFeatures.map((feature, index) => (
                            <li key={index} className="feature-item">
                                <span className="feature-icon">⚡</span> {feature}
                            </li>
                        ))}
                    </ul>
                    <div className="text-center mt-4">
                        <button className="btn-close-modal" onClick={handleCloseModal}>
                            Close
                        </button>
                    </div>
                </Modal.Body>
            </Modal>
        </section>
    );
};

export default OurServices;
