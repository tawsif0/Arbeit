/* eslint-disable max-lines */
import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import CustomNavbar from './component/Navbar';
import HeroSection from './component/HeroSection';
import WhyChooseUs from './component/WhyChooseUs';
import OurServices from './component/OurServices';
import OurExpertise from './component/OurExpertise';
import GetInTouch from './component/GetInTouch';
import Footer from './component/Footer';
import ScrollToTop from './component/scroll-top/ScrollToTop';
import Error from './pages/Error';
import Career from './component/Careers';
import About from './component/About';
import WorkingPattern from './component/WorkingPattern';

const App = () => {
    const location = useLocation();

    useEffect(() => {
        // Handle scroll from navigation state
        if (location.state?.scrollTo) {
            const sectionId = location.state.scrollTo;
            const sectionElement = document.getElementById(sectionId);

            if (sectionElement) {
                setTimeout(() => {
                    sectionElement.scrollIntoView({ behavior: 'smooth' });
                    // Clear the state after scrolling
                    window.history.replaceState({}, document.title);
                }, 100);
            }
        }
    }, [location.state]);

    const validPaths = ['/', '/careers'];

    return (
        <div className="app-container">
            <ScrollToTop />
            {validPaths.includes(location.pathname) && <CustomNavbar />} {/* Pass activeSection to navbar */}
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <section id="hero">
                                <HeroSection />
                            </section>
                            <section id="about">
                                <div className="section-with-orb right-orb">
                                    <div className="floating-orb orb-2"></div>
                                    <About />
                                </div>
                            </section>
                            {/* Why Choose Us */}
                            <section id="why-choose-us" className="why-choose-us-section">
                                <div className="section-with-orb left-orb">
                                    <div className="floating-orb orb-1"></div>
                                    <WhyChooseUs />
                                </div>
                            </section>
                            <section id="working-pattern">
                                <div className="section-with-orb left-orb">
                                    <div className="floating-orb orb-1"></div>
                                    <WorkingPattern />
                                </div>
                            </section>
                            {/* Our Services */}
                            <section id="our-services">
                                <div className="section-with-orb right-orb">
                                    <div className="floating-orb orb-2"></div>
                                    <OurServices />
                                </div>
                            </section>
                            {/* Our Expertise */}
                            <section id="our-expertise">
                                <div className="section-with-orb left-orb">
                                    <div className="floating-orb orb-3"></div>
                                    <OurExpertise />
                                </div>
                            </section>
                            {/* Get In Touch */}
                            <section id="get-in-touch">
                                <div className="section-with-orb right-orb">
                                    <div className="floating-orb orb-4"></div>
                                    <GetInTouch />
                                </div>
                            </section>
                        </>
                    }
                />
                <Route
                    path="/careers"
                    element={
                        <section className="careers" id="careers">
                            <div className="section-with-orb right-orb">
                                <div className="floating-orb orb-4"></div>
                                <Career />
                            </div>
                        </section>
                    }
                />
                <Route path="*" element={<Error />} />
            </Routes>
            {validPaths.includes(location.pathname) && <Footer />}
        </div>
    );
};

export default App;
