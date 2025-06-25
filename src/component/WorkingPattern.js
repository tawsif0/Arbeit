/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable max-lines */
import React, { useRef, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './WorkingPattern.css';

gsap.registerPlugin(ScrollTrigger);

const WorkingPattern = () => {
    const sectionRef = useRef(null);
    const headingRef = useRef(null);
    const subtitleRef = useRef(null);
    const processItemsRef = useRef([]);
    const lineRef = useRef(null);
    const dotsRef = useRef([]);
    const lineProgressRef = useRef(null);
    const lineDotsRef = useRef([]);

    const processSteps = [
        {
            title: 'Consultation',
            description: 'We begin by understanding your business needs and vision.',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"
                        fill="currentColor"
                    />
                </svg>
            )
        },
        {
            title: 'Planning & Strategy',
            description: 'We design a custom roadmap aligned with your goals.',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"
                        fill="currentColor"
                    />
                </svg>
            )
        },
        {
            title: 'Design & Development',
            description: 'We build high-quality solutions with care and precision.',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"
                        fill="currentColor"
                    />
                </svg>
            )
        },
        {
            title: 'Testing & Launch',
            description: 'We test thoroughly and launch with confidence.',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"
                        fill="currentColor"
                    />
                </svg>
            )
        },
        {
            title: 'Support & Maintenance',
            description: 'We stay with you, offering updates, fixes, and improvements.',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"
                        fill="currentColor"
                    />
                </svg>
            )
        }
    ];
    useEffect(() => {
        // Reset all animations
        gsap.set([lineRef.current, ...processItemsRef.current, ...dotsRef.current, ...lineDotsRef.current], {
            opacity: 1,
            y: 30
        });

        gsap.set(lineProgressRef.current, {
            scaleY: 0,
            transformOrigin: 'top center'
        });

        // Create master timeline
        const masterTl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top 75%',
                end: 'bottom center',
                scrub: 0.8,
                markers: false,
                toggleActions: 'play none none reverse'
            }
        });

        // Header animation
        masterTl.from(
            headingRef.current,
            {
                y: 50,
                opacity: 0,
                duration: 0.8,
                ease: 'power3.out'
            },
            0
        );

        masterTl.from(
            subtitleRef.current,
            {
                y: 30,
                opacity: 0,
                duration: 0.6,
                ease: 'back.out'
            },
            0.3
        );

        // Line animation
        masterTl.to(
            lineProgressRef.current,
            {
                scaleY: 1,
                duration: 2,
                ease: 'power2.inOut'
            },
            0.4
        );

        // Process items animation
        processSteps.forEach((_, i) => {
            const position = i / processSteps.length;
            const fromX = i % 2 === 0 ? -50 : 50;
            const delay = 0.5 + i * 0.25;

            // Line dot animation
            masterTl.to(
                lineDotsRef.current[i],
                {
                    opacity: 1,
                    scale: 1,
                    duration: 0.6,
                    ease: 'elastic.out(1, 0.5)',
                    onStart: () => {
                        // Pulse effect when dot appears
                        gsap.to(lineDotsRef.current[i], {
                            opacity: 1,
                            y: 0,
                            duration: 0.4,
                            ease: 'power2.out'
                        });
                    }
                },
                delay
            );

            // Process dot animation
            masterTl.to(
                dotsRef.current[i],
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: 'back.out(3)',
                    onStart: () => {
                        // Glow effect when dot appears
                        gsap.to(dotsRef.current[i], {
                            opacity: 1,
                            y: 0,
                            duration: 1.2,
                            ease: 'back.out(3)'
                        });
                    }
                },
                delay
            );

            // Item content animation
            masterTl.fromTo(
                processItemsRef.current[i],
                { x: fromX, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: 'power2.out'
                },
                delay
            );

            // Line progress animation
            masterTl.to(
                lineProgressRef.current,
                {
                    scaleY: position + 0.2,
                    duration: 0.4,
                    ease: 'power2.inOut'
                },
                delay - 0.1
            );
        });

        // Final line completion
        masterTl.to(
            lineProgressRef.current,
            {
                scaleY: 1,
                duration: 0.6,
                ease: 'power2.inOut'
            },
            0.5 + processSteps.length * 0.25
        );

        return () => {
            masterTl.kill();
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    return (
        <section className="work-section" ref={sectionRef}>
            <div className="work-floating-orb orb-1"></div>

            <Container>
                <div className="work-header">
                    <div className="expertise-tag">WORKING PATTERN</div>
                    <h1 className="work-title text-center" ref={headingRef}>
                        <span className="work-title-main">How We Work</span>
                        <span className="work-title-accent"> With You?</span>
                    </h1>
                    <p className="work-subtitle text-center" ref={subtitleRef}>
                        We believe in a collaborative approach — understanding your goals and working side-by-side to build something exceptional.
                    </p>
                </div>
                <div className="work-process-container">
                    <div className="work-process-line" ref={lineRef}>
                        <div className="work-process-line-progress" ref={lineProgressRef}></div>
                        {processSteps.map((_, index) => (
                            <div
                                key={`line-dot-${index}`}
                                className="work-process-line-dot"
                                ref={(el) => (lineDotsRef.current[index] = el)}
                                style={{ top: `${(index / (processSteps.length - 1)) * 100}%` }}></div>
                        ))}
                    </div>
                    {processSteps.map((step, index) => (
                        <div key={index} className={`work-process-item ${index % 2 === 0 ? 'left' : 'right'}`} ref={(el) => (processItemsRef.current[index] = el)}>
                            <div className="work-process-dot" ref={(el) => (dotsRef.current[index] = el)}>
                                {step.icon}
                            </div>
                            <div className="work-process-content">
                                <h3 className="work-process-title">{step.title}</h3>
                                <p className="work-process-description">{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default WorkingPattern;
