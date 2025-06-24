/* eslint-disable max-lines */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './WhyChooseUs.css';

gsap.registerPlugin(ScrollTrigger);

const WhyChooseUs = () => {
    const sectionRef = useRef(null);
    const containerRef = useRef(null);
    const tagRef = useRef(null);
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);

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

    useEffect(() => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

        // Header animation
        gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top 70%',
                toggleActions: 'play reverse play reverse'
            }
        })
            .from(tagRef.current, {
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
            );

        // Feature cards animation (staggered and replayable)
        ScrollTrigger.batch('.expertise-feature-card', {
            start: 'top 80%',
            onEnter: (batch) => {
                gsap.fromTo(
                    batch,
                    {
                        opacity: 0,
                        y: 50
                    },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.8,
                        ease: 'back.out(1.7)',
                        stagger: 0.15
                    }
                );
            },
            onLeaveBack: (batch) => {
                gsap.to(batch, {
                    opacity: 0,
                    y: 50,
                    duration: 0.5
                });
            }
        });

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    return (
        <section className="expertise-choose-us" ref={sectionRef}>
            <div className="expertise-background-overlay">
                <div className="expertise-orb expertise-orb--teal"></div>
            </div>

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
                        <div className="expertise-feature-card" key={index} style={{ '--accent-color': feature.accent }}>
                            <div className="expertise-feature-glow" style={{ backgroundColor: feature.accent }}></div>
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
