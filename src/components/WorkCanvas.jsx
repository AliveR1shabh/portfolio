import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextScramble } from './core/text-scramble';
import SkillCards from './SkillCards';
import HandLoader from './HandLoader';
import InteractiveHelloSection from './InteractiveHelloSection';

gsap.registerPlugin(ScrollTrigger);

const WorkCanvas = () => {
    const canvasRef = useRef(null);
    const card1Ref = useRef(null);
    const card2Ref = useRef(null);
    const [screenState, setScreenState] = useState({ isDesktop: false, isTablet: false });

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            setScreenState({
                isDesktop: width >= 1024,
                isTablet: width >= 768 && width < 1024
            });
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        let mm = gsap.matchMedia();

        mm.add("(min-width: 1024px)", () => {
            const refs = [card1Ref, card2Ref];
            const speeds = [-100, -200];
            const triggers = refs.map((ref, i) => {
                return gsap.to(ref.current, {
                    y: speeds[i],
                    ease: 'none',
                    scrollTrigger: {
                        trigger: canvasRef.current,
                        start: 'top bottom',
                        end: 'bottom top',
                        scrub: true,
                    },
                });
            });

            return () => triggers.forEach(t => t.scrollTrigger?.kill());
        });

        return () => mm.revert();
    }, []);

    const cardStyle = (top, side, width, isRight) => ({
        position: 'absolute',
        top,
        [isRight ? 'right' : 'left']: side,
        width: `min(${width}, 100%)`,
        zIndex: isRight ? 0 : 10,
        cursor: 'pointer',
    });

    return (
        <section
            id="work"
            ref={canvasRef}
            style={{ backgroundColor: '#fafaf8', color: '#131313', minHeight: '100vh', padding: 'clamp(4rem, 8vw, 8rem) var(--spacing-gutter, 24px) 96px', position: 'relative', overflow: 'hidden' }}
        >
            {/* Wireframe grid bg */}
            <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(to right, rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.03) 1px, transparent 1px)', backgroundSize: '64px 64px', pointerEvents: 'none' }}></div>

            <div style={{ position: 'relative', zIndex: 2, marginBottom: 'clamp(4rem, 10vw, 8rem)', maxWidth: '56rem' }} className="reveal-on-scroll">
                <h2 style={{ fontFamily: '"Open Sans", sans-serif', fontSize: 'clamp(32px, 6vw, 72px)', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.1, display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                    <TextScramble>SELECTED WORK</TextScramble>
                    <HandLoader />
                </h2>
                <p style={{ fontFamily: '"Open Sans", sans-serif', fontSize: '18px', lineHeight: 1.6, color: '#666', marginTop: '16px', maxWidth: '40rem' }}>
                    A selection of projects where ideas became interfaces, APIs, intelligent systems, and everything in between.
                </p>
            </div>

            {/* Simulated Cursors with drift animations from MCP */}
            <div className="cursor-drift-1 hidden lg:block" style={{ position: 'absolute', top: '15%', left: '18%', zIndex: 20, pointerEvents: 'none' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fe2fd8" strokeWidth="2">
                    <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"></path>
                </svg>
                <div style={{ backgroundColor: '#fe2fd8', color: '#530045', fontFamily: '"JetBrains Mono", monospace', fontSize: '10px', padding: '2px 8px', borderRadius: '2px', marginTop: '4px', display: 'inline-block' }}>Designer</div>
            </div>
            <div className="cursor-drift-2 hidden lg:block" style={{ position: 'absolute', top: '48%', right: '22%', zIndex: 20, pointerEvents: 'none' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4cf3f6" strokeWidth="2">
                    <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"></path>
                </svg>
                <div style={{ backgroundColor: '#4cf3f6', color: '#003738', fontFamily: '"JetBrains Mono", monospace', fontSize: '10px', padding: '2px 8px', borderRadius: '2px', marginTop: '4px', display: 'inline-block' }}>Developer</div>
            </div>

            {/* Cards area */}
            <div style={{ 
                position: 'relative', 
                width: '100%', 
                maxWidth: '80rem', 
                margin: '0 auto', 
                minHeight: screenState.isDesktop ? '1200px' : 'auto',
                display: screenState.isDesktop ? 'block' : 'flex',
                flexDirection: 'column',
                gap: screenState.isDesktop ? '0' : '64px'
            }}>
                {/* Interactive HELLO Button & Card in empty space */}
                <div style={{ 
                    position: screenState.isDesktop ? 'absolute' : 'relative', 
                    top: screenState.isDesktop ? '-40px' : 'auto', 
                    right: screenState.isDesktop ? '0px' : 'auto', 
                    display: 'flex',
                    justifyContent: screenState.isDesktop ? 'flex-end' : screenState.isTablet ? 'flex-end' : 'center',
                    marginBottom: screenState.isDesktop ? '0' : '2rem',
                    zIndex: 25 
                }}>
                    <InteractiveHelloSection />
                </div>

                {/* Card 1 – active, left */}
                <article 
                    ref={card1Ref} 
                    style={screenState.isDesktop ? cardStyle('0px', '0px', '600px', false) : {
                        position: 'relative',
                        width: '100%',
                        maxWidth: '600px',
                        margin: screenState.isTablet ? '0 auto 0 0' : '0 auto',
                        cursor: 'pointer'
                    }}
                >
                    <div style={{ position: 'absolute', inset: '-8px', border: '2px solid #4cf3f6', pointerEvents: 'none', zIndex: 10 }}>
                        {['-top-1 -left-1', '-top-1 -right-1', '-bottom-1 -left-1', '-bottom-1 -right-1'].map((_, i) => (
                            <div key={i} style={{ position: 'absolute', width: 8, height: 8, backgroundColor: 'white', border: '1px solid #4cf3f6', ...(i === 0 ? { top: -4, left: -4 } : i === 1 ? { top: -4, right: -4 } : i === 2 ? { bottom: -4, left: -4 } : { bottom: -4, right: -4 }) }}></div>
                        ))}
                        <div style={{ position: 'absolute', top: '-24px', left: '50%', transform: 'translateX(-50%)', backgroundColor: '#4cf3f6', color: '#003738', fontFamily: '"JetBrains Mono", monospace', fontSize: '10px', padding: '2px 4px', whiteSpace: 'nowrap' }}>600 x 400</div>
                    </div>
                    <div style={{ width: '100%', aspectRatio: '4/3', backgroundColor: '#131313', overflow: 'hidden', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)', transition: 'transform 0.5s', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <img src="/AnythingLibrary.png" alt="AnythingLibrary" style={{ width: '90%', height: '90%', objectFit: 'contain', opacity: 1, transition: 'all 0.7s', borderRadius: '8px' }} />
                    </div>
                    <div style={{ marginTop: '16px', paddingLeft: '8px' }}>
                        <h3 style={{ fontFamily: '"Open Sans", sans-serif', fontSize: '32px', fontWeight: 600, letterSpacing: '-0.02em' }}>AnythingLibrary</h3>
                        <p style={{ fontFamily: '"Open Sans", sans-serif', fontSize: '15px', color: '#666', marginTop: '8px', marginBottom: '16px', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                            A multi-AI platform that compares responses from multiple AI models side by side, powered by parallel processing and real-time orchestration.
                        </p>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                            {['Python', 'React', 'FastAPI'].map(tag => (
                                <span key={tag} style={{ padding: '4px 12px', borderRadius: '9999px', border: '1px solid #3b4949', fontFamily: '"JetBrains Mono", monospace', fontSize: '12px', letterSpacing: '0.05em' }}>{tag}</span>
                            ))}
                        </div>
                    </div>
                </article>

                <article 
                    ref={card2Ref} 
                    style={screenState.isDesktop ? cardStyle('400px', '0px', '500px', true) : {
                        position: 'relative',
                        width: '100%',
                        maxWidth: '500px',
                        margin: screenState.isTablet ? '0 0 0 auto' : '0 auto',
                        cursor: 'pointer'
                    }} 
                    className="group"
                >
                    <div style={{ width: '100%', aspectRatio: '3/4', backgroundColor: '#131313', overflow: 'hidden', transition: 'transform 0.5s', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <img src="/GitHubPortfolioAnalyzer.png" alt="GitHub Portfolio Analyzer" style={{ width: '90%', height: '90%', objectFit: 'contain', opacity: 1, transition: 'all 0.7s', borderRadius: '8px' }} />
                    </div>
                    <div style={{ marginTop: '16px', paddingLeft: '8px' }}>
                        <h3 style={{ fontFamily: '"Open Sans", sans-serif', fontSize: '32px', fontWeight: 600, letterSpacing: '-0.02em' }}>GitHub Portfolio Analyzer</h3>
                        <p style={{ fontFamily: '"Open Sans", sans-serif', fontSize: '15px', color: '#666', marginTop: '8px', marginBottom: '16px' }}>
                            Turn GitHub activity into actionable insights to identify skill gaps for your next career move.
                        </p>
                        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                            {['Python', 'GitHub API', 'REST API'].map(tag => (
                                <span key={tag} style={{ padding: '4px 12px', borderRadius: '9999px', border: '1px solid #3b4949', fontFamily: '"JetBrains Mono", monospace', fontSize: '12px', letterSpacing: '0.05em' }}>{tag}</span>
                            ))}
                        </div>
                    </div>
                </article>
            </div>

            {/* Skill Cards below projects */}
            <div style={{ position: 'relative', zIndex: 2, width: '100%', maxWidth: '80rem', margin: '0 auto', marginTop: '2rem' }}>
                <SkillCards />
            </div>

            <div style={{ height: '200px' }}></div>
        </section>
    );
};

export default WorkCanvas;
