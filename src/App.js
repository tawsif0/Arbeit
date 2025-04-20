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
        <div>
            <ScrollToTop />
            {validPaths.includes(location.pathname) && <CustomNavbar />}

            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <section id="hero">
                                <HeroSection />
                            </section>
                            <section id="why-choose-us" className="why-choose-us-section">
                                <WhyChooseUs />
                            </section>
                            <section id="our-services">
                                <OurServices />
                            </section>
                            <section id="our-expertise">
                                <OurExpertise />
                            </section>
                            <section id="get-in-touch">
                                <GetInTouch />
                            </section>
                        </>
                    }
                />
                <Route
                    path="/careers"
                    element={
                        <section className="careers" id="careers">
                            <Career />
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
