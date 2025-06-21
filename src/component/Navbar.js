/* eslint-disable max-lines */
import React, { useEffect, useState } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/images/logo.png';

const CustomNavbar = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [activeSection, setActiveSection] = useState('hero');

    const handleSmoothScroll = (to) => {
        if (location.pathname === '/') {
            const element = document.getElementById(to);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
            // Clear any existing history state
            window.history.replaceState({}, document.title, window.location.pathname);
        } else {
            // Navigate to home without hash and scroll after render
            navigate('/', {
                state: { scrollTo: to },
                replace: true
            });
        }
    };

    const isActive = (to) => {
        return activeSection === to;
    };

    useEffect(() => {
        const sections = ['hero', 'why-choose-us', 'our-services', 'our-expertise', 'client-success-stories', 'get-in-touch'];

        const handleScroll = () => {
            const scrollPosition = window.scrollY + 100;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element && element.offsetTop <= scrollPosition && element.offsetTop + element.offsetHeight > scrollPosition) {
                    setActiveSection(section);
                    return;
                }
            }

            // If none match, fallback to clearing the active section (optional)
            setActiveSection('hero');
        };

        if (location.pathname === '/') {
            window.addEventListener('scroll', handleScroll);

            // Handle scroll from navigation state
            if (location.state?.scrollTo) {
                const section = location.state.scrollTo;
                const element = document.getElementById(section);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }

            // Reset active section when we are back on home page
            setActiveSection('hero');
        } else if (location.pathname === '/careers') {
            setActiveSection('careers');
        }

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [location.pathname, location.state]);

    return (
        <div className="navbar-container">
            <Navbar expand="lg" className="custom-navbar">
                <Container>
                    <Navbar.Brand as={RouterLink} to="/" onClick={() => window.history.replaceState({}, '', '/')}>
                        <img src={logo} alt="Arbeit Logo" className="navbar-logo" />
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />

                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto">
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
                            <Nav.Link as={RouterLink} to="/careers" className={isActive('careers') ? 'active' : ''}>
                                Careers
                            </Nav.Link>
                        </Nav>

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
