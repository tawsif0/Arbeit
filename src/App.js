/* eslint-disable max-lines */
import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import CustomNavbar from './component/Navbar';
import HeroSection from './component/HeroSection';
import WhyChooseUs from './component/WhyChooseUs';
import OurServices from './component/OurServices';
import OurExpertise from './component/OurExpertise';
import ClientSuccessStories from './component/ClientSuccessStories';
import GetInTouch from './component/GetInTouch';
import Footer from './component/Footer';
import ScrollToTop from './component/scroll-top/ScrollToTop';
import Error from './pages/Error';
import Career from './component/Careers';

const App = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            // Extract the section ID from the hash (e.g., #why-choose-us)
            const sectionId = location.hash.replace('#', '');
            const sectionElement = document.getElementById(sectionId);

            if (sectionElement) {
                // Wait for the page to load, then scroll to the section
                setTimeout(() => {
                    sectionElement.scrollIntoView({ behavior: 'smooth' });
                }, 100); // Small delay to ensure the page has fully rendered
            }
        }
    }, [location]);

    const validPaths = ['/', '/services'];
    return (
        <div>
            <ScrollToTop />
            {validPaths.includes(location.pathname) && <CustomNavbar />}

            <Routes>
                {/* Home Page Route */}
                <Route
                    path="/"
                    element={
                        <>
                            <section className="hero" id="hero">
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
                            <section id="client-success-stories">
                                <ClientSuccessStories />
                            </section>
                            <section className="careers" id="careers">
                                <Career />
                            </section>
                            <section id="get-in-touch">
                                <GetInTouch />
                            </section>
                            <Footer />
                        </>
                    }
                />

                <Route path="*" element={<Error />} />
            </Routes>
        </div>
    );
};

export default App;
