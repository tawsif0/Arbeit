/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable max-lines */
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './WhyChooseUs.css';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const WhyChooseUs = () => {
    const sectionRef = useRef(null);
    const containerRef = useRef(null);
    const tagRef = useRef(null);
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);
    const featuresRef = useRef([]);

    const features = [
        {
            title: 'Collaborative Approach',
            description: 'Client-first methodology with transparent communication at every stage.',
            accent: '#35a7b2'
        },
        {
            title: 'Bespoke Strategies',
            description: 'Custom design & development strategies tailored to your business goals.',
            accent: '#4ecdc4'
        },
        {
            title: 'Multi-Platform Mastery',
            description: 'Seamless experiences across all devices and platforms.',
            accent: '#3a86ff'
        },
        {
            title: 'Built-In Security',
            description: 'Enterprise-grade security, scalability, and performance from the ground up.',
            accent: '#8338ec'
        }
    ];

    const addToFeaturesRef = (el) => {
        if (el && !featuresRef.current.includes(el)) {
            featuresRef.current.push(el);
        }
    };

    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top 70%',
                toggleActions: 'play none none none'
            }
        });

        tl.from(tagRef.current, {
            y: 20,
            opacity: 0,
            duration: 0.6,
            ease: 'power3.out'
        })
            .from(
                titleRef.current.querySelector('.expertise-heading--gradient'),
                {
                    y: 40,
                    opacity: 0,
                    duration: 0.8,
                    ease: 'power3.out'
                },
                '-=0.3'
            )
            .from(
                titleRef.current.querySelector('.expertise-heading--outline'),
                {
                    y: 40,
                    opacity: 0,
                    duration: 0.8,
                    ease: 'power3.out'
                },
                '-=0.5'
            )
            .from(
                subtitleRef.current,
                {
                    y: 30,
                    opacity: 0,
                    duration: 0.6,
                    ease: 'power2.out'
                },
                '-=0.4'
            )
            .from(
                featuresRef.current,
                {
                    y: 50,
                    opacity: 0,
                    stagger: 0.15,
                    duration: 0.8,
                    ease: 'back.out(1.7)'
                },
                '-=0.4'
            );

        // Hover animations
        featuresRef.current.forEach((feature, index) => {
            // eslint-disable-next-line no-unused-vars
            const accent = features[index].accent;

            feature.addEventListener('mouseenter', () => {
                gsap.to(feature, {
                    y: -10,
                    duration: 0.4,
                    ease: 'power2.out'
                });
                gsap.to(feature.querySelector('.expertise-feature-glow'), {
                    opacity: 0.3,
                    duration: 0.4
                });
                gsap.to(feature.querySelector('.expertise-feature-accent'), {
                    width: '100%',
                    duration: 0.6,
                    ease: 'power2.out'
                });
            });

            feature.addEventListener('mouseleave', () => {
                gsap.to(feature, {
                    y: 0,
                    duration: 0.4,
                    ease: 'power2.out'
                });
                gsap.to(feature.querySelector('.expertise-feature-glow'), {
                    opacity: 0,
                    duration: 0.4
                });
                gsap.to(feature.querySelector('.expertise-feature-accent'), {
                    width: '0%',
                    duration: 0.4,
                    ease: 'power2.in'
                });
            });
        });

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    return (
        <section className="expertise-choose-us" ref={sectionRef}>
            <div className="container" ref={containerRef}>
                <div className="expertise-header text-center">
                    <div className="expertise-tag" ref={tagRef}>
                        WHY CHOOSE US
                    </div>
                    <h2 className="expertise-heading" ref={titleRef}>
                        <span className="expertise-heading--gradient">Why Clients Will</span>
                        <span className="expertise-heading--outline"> Choose Us?</span>
                    </h2>
                    <p className="expertise-subtitle" ref={subtitleRef}>
                        At <span className="highlight">Arbeit Technology</span>, we combine innovation with reliability to deliver exceptional digital experiences that drive real business results.
                    </p>
                </div>

                <div className="expertise-features-grid">
                    {features.map((feature, index) => (
                        <div className="expertise-feature-card" key={index} ref={addToFeaturesRef} style={{ '--accent-color': feature.accent }}>
                            <div className="expertise-feature-glow"></div>
                            <div className="expertise-feature-content">
                                <h3 className="expertise-feature-title">{feature.title}</h3>
                                <p className="expertise-feature-description">{feature.description}</p>
                            </div>
                            <div className="expertise-feature-accent"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
