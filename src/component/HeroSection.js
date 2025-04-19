import React from 'react';
import { Button } from 'react-bootstrap';

const HeroSection = () => {
    // Function to handle smooth scrolling
    const handleSmoothScroll = (to) => {
        const element = document.getElementById(to);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="hero-section text-center p-5">
            <h1 className="display-4">Transforming Ideas into Digital Success</h1>
            <p className="lead">
                Arbeit Technology is your trusted partner in crafting tailored IT solutions, from powerful websites to innovative management systems. Let’s bring your vision to life!
            </p>
            <div className="mt-4">
                <Button
                    onClick={() => handleSmoothScroll('get-in-touch')} // Use onClick instead of href
                    variant="primary"
                    className="m-2 custom-btn">
                    Get a Free Consultation
                </Button>
                <Button
                    onClick={() => handleSmoothScroll('our-services')} // Use onClick instead of href
                    variant="outline-primary"
                    className="m-2 custom-btn">
                    Explore Our Services
                </Button>
            </div>
        </section>
    );
};

export default HeroSection;
