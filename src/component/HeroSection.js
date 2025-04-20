import React from 'react';
import { Button } from 'react-bootstrap';
import Hyperspeed from './Hyperspeed';
import { hyperspeedPresets } from './HyperspeedPresets'; // Import the presets

const HeroSection = () => {
    const handleSmoothScroll = (to) => {
        const element = document.getElementById(to);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="hero text-center p-5 position-relative overflow-hidden">
            {/* Hyperspeed Background */}
            <div className="position-absolute w-100 h-100 top-0 start-0">
                <Hyperspeed effectOptions={hyperspeedPresets.two} />
            </div>

            {/* Content */}
            <div className="hero-content" style={{ zIndex: 2 }}>
                <h1 className="hero-title display-4 ">Transforming Ideas into Digital Success</h1>
                <p className="hero-lead">
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
            </div>
        </section>
    );
};

export default HeroSection;
