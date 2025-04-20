/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable max-lines */
import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';

import './Footer.css'; // Import the custom CSS file
import logo from '../assets/images/logo.png';
export default function App() {
    const location = useLocation();
    const navigate = useNavigate();

    const handleScrollTo = (sectionId) => {
        if (location.pathname === '/') {
            const el = document.getElementById(sectionId);
            if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            navigate('/', { state: { scrollTo: sectionId }, replace: true });
        }
    };

    return (
        <MDBFooter className="footer-custom text-left text-lg-start text-ash">
            <div className="container custom-footer">
                {/* Social Media Section */}
                <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom border-ash">
                    <div className="me-5 d-none d-lg-block">
                        <span>Get connected with us on social networks:</span>
                    </div>

                    <div>
                        <a href="https://www.facebook.com/arbeittechnology" target="_blank" rel="noopener noreferrer" className="me-4 social-link facebook">
                            <MDBIcon fab icon="facebook-f" />
                        </a>
                        {/* <a href="#!" className="me-4 social-link twitter">
                            <MDBIcon fab icon="twitter" />
                        </a> */}
                        <a href="https://www.linkedin.com/company/arbeit-technology/" className="me-4 social-link linkedin">
                            <MDBIcon fab icon="linkedin" />
                        </a>
                        <a href="https://wa.me/+8801707387608" target="_blank" rel="noopener noreferrer" className="me-4 social-link whatsapp">
                            <MDBIcon fab icon="whatsapp" />
                        </a>
                    </div>
                </section>

                {/* Footer Links Section */}
                <section className="container">
                    <MDBContainer className="text-md-start mt-5">
                        <MDBRow className="mt-3">
                            {/* Company Info */}
                            <MDBCol md="4" lg="5" xl="4" className="mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">
                                    <img src={logo} alt="Arbeit Logo" className="navbar-logo" />
                                </h6>
                                <p>
                                    Arbeit Technology delivers cutting-edge IT solutions, from custom websites to advanced management systems. We blend innovation, expertise, and technology to help
                                    businesses grow and streamline operations efficiently.
                                </p>
                            </MDBCol>

                            {/* Useful Links */}
                            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">Useful Links</h6>
                                <p>
                                    <a onClick={() => handleScrollTo('why-choose-us')} className="text-reset" role="button">
                                        Why Choose Us
                                    </a>
                                </p>
                                <p>
                                    <a onClick={() => handleScrollTo('our-services')} className="text-reset" role="button">
                                        Our Services
                                    </a>
                                </p>
                                <p>
                                    <a onClick={() => handleScrollTo('our-expertise')} className="text-reset" role="button">
                                        Our Expertise
                                    </a>
                                </p>
                                {/* <p>
                                    <a onClick={() => handleScrollTo('client-success-stories')} className="text-reset" role="button">
                                        Success Stories
                                    </a>
                                </p> */}
                                <p>
                                    <RouterLink to="/careers" className="text-reset">
                                        Careers
                                    </RouterLink>
                                </p>
                            </MDBCol>

                            {/* Contact Info */}
                            <MDBCol md="4" lg="2" xl="3" className="mx-auto mb-md-0 mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                                <p>
                                    <MDBIcon icon="envelope" className="me-3" />
                                    <a href="mailto:aliakbor@arbeittechnology.com" className="custom-contact-links">
                                        aliakbor@arbeittechnology.com
                                    </a>
                                </p>
                                <p>
                                    <MDBIcon icon="phone" className="me-3" />
                                    <a href="tel:+880 1707-387608" className="custom-contact-links">
                                        +880 1707-387608
                                    </a>
                                </p>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </section>
            </div>

            {/* Copyright Section */}
            <div className="text-center p-4 copyright">© {new Date().getFullYear()} Copyright - Arbeit Technology</div>
        </MDBFooter>
    );
}
