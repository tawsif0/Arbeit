/* eslint-disable max-lines */
import React, { useEffect, useState } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link as RouterLink, useLocation } from 'react-router-dom'; // Import useLocation
import './Navbar.css'; // Import custom CSS for Navbar
import logo from '../assets/images/logo.png';

const CustomNavbar = () => {
    const location = useLocation();
    const [activeSection, setActiveSection] = useState('hero'); // State to track active section

    // Function to handle smooth scrolling
    const handleSmoothScroll = (to) => {
        if (location.pathname === '/') {
            // If already on the home page, smooth scroll to the section
            document.getElementById(to).scrollIntoView({ behavior: 'smooth' });
        } else {
            // If not on the home page, navigate to the home page first
            window.location.href = `/#${to}`;
        }
    };

    // Function to check if a link is active
    const isActive = (to) => {
        return activeSection === to;
    };

    // Effect to add scroll event listener and update active section
    useEffect(() => {
        const sections = ['hero', 'why-choose-us', 'our-services', 'our-expertise', 'client-success-stories', 'careers', 'get-in-touch'];

        const handleScroll = () => {
            const scrollPosition = window.scrollY + 100; // Adjust offset for better accuracy

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element && element.offsetTop <= scrollPosition && element.offsetTop + element.offsetHeight > scrollPosition) {
                    setActiveSection(section); // Update active section
                    break;
                }
            }
        };

        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Set initial active section based on hash (if any)
        if (location.hash) {
            const hash = location.hash.replace('#', '');
            if (sections.includes(hash)) {
                setActiveSection(hash);
            }
        }

        // Cleanup event listener on unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [location.hash]);

    return (
        <div className="navbar-container">
            <Navbar expand="lg" className="custom-navbar">
                <Container>
                    {/* Brand Logo */}
                    <Navbar.Brand as={RouterLink} to="/">
                        <img src={logo} alt="Arbeit Logo" className="navbar-logo" />
                    </Navbar.Brand>

                    {/* Hamburger Menu Toggle */}
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />

                    {/* Navbar Links */}
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            {/* Link to Root ('/') and then smoothly scroll to respective sections */}
                            <Nav.Link onClick={() => handleSmoothScroll('hero')} className={isActive('hero') ? 'active' : ''}>
                                Home
                            </Nav.Link>
                            <Nav.Link onClick={() => handleSmoothScroll('why-choose-us')} className={isActive('why-choose-us') ? 'active' : ''}>
                                Why Choose Us
                            </Nav.Link>
                            <Nav.Link onClick={() => handleSmoothScroll('our-services')} className={isActive('our-services') ? 'active' : ''}>
                                Our Services
                            </Nav.Link>
                            <Nav.Link onClick={() => handleSmoothScroll('our-expertise')} className={isActive('our-expertise') ? 'active' : ''}>
                                Our Expertise
                            </Nav.Link>
                            <Nav.Link onClick={() => handleSmoothScroll('client-success-stories')} className={isActive('client-success-stories') ? 'active' : ''}>
                                Success Stories
                            </Nav.Link>
                            <Nav.Link onClick={() => handleSmoothScroll('careers')} className={isActive('careers') ? 'active' : ''}>
                                Careers
                            </Nav.Link>
                        </Nav>

                        {/* CTA Button */}
                        <Button onClick={() => handleSmoothScroll('get-in-touch')} className="ms-lg-3 btn-darks">
                            Get a Free Consultation
                        </Button>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default CustomNavbar;
