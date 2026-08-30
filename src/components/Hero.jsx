import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Particles from './Particles';
import Loader from './Loader';
import HireButton from './HireButton';
import ScrollDownIndicator from './ScrollDownIndicator';

const accentWords = ["FULL-STACK", "CREATIVE", "AI WEB"];
let wordIndex = 0;

const Hero = () => {
    const textRef = useRef(null);

    useEffect(() => {
        const el = textRef.current;
        if (!el) return;

        const interval = setInterval(() => {
            gsap.to(el, {
                y: '100%',
                opacity: 0,
                duration: 0.4,
                ease: 'power2.in',
                onComplete: () => {
                    wordIndex = (wordIndex + 1) % accentWords.length;
                    el.textContent = accentWords[wordIndex];
                    gsap.fromTo(el,
                        { y: '-100%', opacity: 0 },
                        { y: '0%', opacity: 1, duration: 0.7, ease: 'power3.out' }
                    );
                }
            });
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section id="hero" style={{ minHeight: '100svh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '80px var(--spacing-gutter, 24px) 40px', position: 'relative', overflow: 'hidden' }}>

            {/* Particles Background */}
            <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
                <Particles
                    particleColors={['#4cf3f6', '#ffffff', '#bacac9']}
                    particleCount={180}
                    particleSpread={10}
                    speed={0.08}
                    particleBaseSize={80}
                    moveParticlesOnHover={true}
                    particleHoverFactor={0.5}
                    alphaParticles={true}
                    sizeRandomness={1.2}
                    cameraDistance={22}
                    disableRotation={false}
                    pixelRatio={window.devicePixelRatio || 1}
                />
            </div>

            {/* Main text content */}
            <div style={{ textAlign: 'center', width: '100%', maxWidth: '64rem', position: 'relative', zIndex: 10 }}>
                <h1 style={{ fontFamily: '"Open Sans", sans-serif', fontSize: 'clamp(32px, 6.5vw, 72px)', fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.03em', color: '#e2e2e2', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
                    <span>SAY HELLO TO YOUR</span>
                    <span style={{ height: '1.2em', position: 'relative', overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                        <span
                            ref={textRef}
                            style={{ fontFamily: '"EB Garamond", serif', fontSize: 'clamp(36px, 7.5vw, 80px)', fontStyle: 'italic', color: '#4cf3f6', position: 'absolute', willChange: 'transform, opacity' }}
                        >
                            {accentWords[0]}
                        </span>
                    </span>
                    <span>DEVELOPER</span>
                </h1>

                {/* Animated Loader Component */}
                <div style={{ marginTop: 'clamp(3rem, 10vw, 5.5rem)', display: 'flex', justifyContent: 'center' }}>
                    <Loader />
                </div>
            </div>

            {/* Scroll hint & Hire Button */}
            <div style={{ position: 'relative', zIndex: 10, marginTop: 'clamp(2rem, 8vw, 3rem)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'clamp(2rem, 6vw, 3rem)' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', opacity: 0.7 }}>
                    <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '12px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#bacac9' }}>Scroll</span>
                    <ScrollDownIndicator />
                </div>

                {/* Hire Button */}
                <HireButton />
            </div>
        </section>
    );
};

export default Hero;
