/* eslint-disable max-lines */
import React, { useEffect, useState } from 'react';

import './ClientSuccessStories.css'; // Import custom CSS for styling and animations

const ClientSuccessStories = () => {
    const testimonials = [
        {
            quote: 'Arbeit Technology created a stunning company website that truly represents our brand. Our online presence has never been stronger!',
            author: 'Client A'
        },
        {
            quote: 'Thanks to Arbeit Technology, our portfolio website now showcases our work beautifully and has helped us attract more clients!',
            author: 'Client B'
        }
    ];

    const [expanded, setExpanded] = useState(false);

    // Add scroll reveal effect for word-by-word animation
    useEffect(() => {
        const handleScroll = () => {
            const testimonialElements = document.querySelectorAll('.testimonial-item');
            testimonialElements.forEach((element) => {
                const elementTop = element.getBoundingClientRect().top;
                const elementBottom = element.getBoundingClientRect().bottom;
                const isVisible = elementTop < window.innerHeight && elementBottom >= 0;

                if (isVisible) {
                    element.classList.add('reveal');
                } else {
                    element.classList.remove('reveal');
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    const handleSeeMore = () => {
        setExpanded(!expanded);
    };
    return (
        <section className="client-success-stories">
            <div class="container">
                <h1 className="sections-title">Satisfied Clients</h1>
                <div className="dividers"></div>
                <div className="testimonials-container">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className={`testimonial-item ${index > 0 && expanded ? 'expanded' : ''}`}>
                            <p className="testimonial-quote">
                                {testimonial.quote.split(' ').map((word, i) => (
                                    <span
                                        key={i}
                                        className="quote-word"
                                        style={{ '--word-index': i + 1 }} // Dynamically set the word index
                                    >
                                        {word}{' '}
                                    </span>
                                ))}
                            </p>
                            <p className="testimonial-author">- {testimonial.author}</p>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-5">
                    <button className="glossy-neon-button" onClick={handleSeeMore}>
                        <span className="button-text">{expanded ? 'See Less' : 'See More'}</span>
                        <span className="button-arrow">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path fill="none" d="M0 0h24v24H0z"></path>
                                <path fill="currentColor" d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"></path>
                            </svg>
                        </span>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ClientSuccessStories;
