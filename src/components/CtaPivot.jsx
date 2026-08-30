import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// SVG icon paths for the logo loop marquee
const LOGO_ICONS = [
  // Python
  <svg key="python" className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.38.31-.44.25-.54.17-.58.08-.6.02H10.2l-.3.02-.27.05-.26.07-.25.09-.25.14-.21.17-.18.22-.15.25-.1.3-.07.4-.01.47V15.75l.02.63.05.56.12.53.18.46.26.38.35.31.42.24.51.17.57.08.62.02h2.33l.28.02.28.06.27.1.26.14.21.18.18.22.15.25.1.3.07.4.01.47v3.12l-.01.36-.05.33-.09.3-.13.25-.19.23-.24.18-.3.15-.35.1-.41.05-.48.01H9.56l-.7-.02-.67-.05-.6-.1-.54-.15-.44-.2-.36-.24-.28-.28-.2-.33-.12-.36-.05-.4-.02-.44V18.85l.01-.57.06-.53.13-.47.22-.41.3-.34.4-.28.48-.2.55-.12.6-.05.62-.01h2.09l.31-.02.3-.05.28-.09.25-.14.21-.18.18-.22.15-.25.1-.3.07-.4.01-.47V8.56l-.02-.63-.05-.56-.12-.53-.18-.46-.26-.38-.35-.31-.42-.24-.51-.17-.57-.08-.62-.02H9.58l-.3-.02-.28-.06-.27-.1-.26-.14-.21-.18-.18-.22-.15-.25-.1-.3-.07-.4-.01-.47V1.5l.01-.36.05-.33.09-.3.13-.25.19-.23.24-.18.3-.15.35-.1.41-.05.48-.01h4.29z"/></svg>,
  // Tailwind
  <svg key="tailwind" className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M13.983 11.078h2.119c.102 0 .186.084.186.186v2.119c0 .102-.084.186-.186.186h-2.119a.186.186 0 01-.186-.186v-2.119c0-.102.084-.186.186-.186zM11.221 11.078h2.119c.102 0 .186.084.186.186v2.119c0 .102-.084.186-.186.186h-2.119a.186.186 0 01-.186-.186v-2.119c0-.102.084-.186.186-.186zM11.221 8.315h2.119c.102 0 .186.084.186.186v2.119c0 .102-.084.186-.186.186h-2.119a.186.186 0 01-.186-.186V8.501c0-.102.084-.186.186-.186zM8.458 11.078h2.119c.102 0 .186.084.186.186v2.119c0 .102-.084.186-.186.186H8.458a.186.186 0 01-.186-.186v-2.119c0-.102.084-.186.186-.186zM11.221 5.553h2.119c.102 0 .186.084.186.186v2.119c0 .102-.084.186-.186.186h-2.119a.186.186 0 01-.186-.186V5.739c0-.102.084-.186.186-.186zM5.695 11.078h2.119c.102 0 .186.084.186.186v2.119c0 .102-.084.186-.186.186H5.695a.186.186 0 01-.186-.186v-2.119c0-.102.084-.186.186-.186z"/></svg>,
  // GitHub
  <svg key="github" className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.113.793-.261.793-.577v-2.234c-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>,
  // HTML5
  <svg key="html5" className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.625 10.056.002.236-2.625H5.412l.683 7.875H15.64l-.28 3.135-3.388.915-3.393-.913-.21-2.372H5.75l.428 4.856 5.799 1.563 5.805-1.565.783-8.875H8.531z"/></svg>,
  // Code brackets
  <svg key="code" className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/></svg>,
];

const LogoRow = ({ direction }) => {
  const icons = [...LOGO_ICONS, ...LOGO_ICONS]; // doubled for seamless loop
  return (
    <div className={`flex w-[200%] ${direction === 'left' ? 'animate-loop-left' : 'animate-loop-right'}`}>
      <div className="flex w-1/2 justify-around items-center gap-[60px]">
        {icons}
      </div>
      <div className="flex w-1/2 justify-around items-center gap-[60px]">
        {icons}
      </div>
    </div>
  );
};

const CtaPivot = () => {
    const sectionRef = useRef(null);
    const cursorRef = useRef(null);

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        // Mode Flip via GSAP ScrollTrigger
        const flipTrigger = ScrollTrigger.create({
            trigger: section,
            start: "top center",
            end: "bottom center",
            onEnter: () => {
                gsap.to(section, { backgroundColor: '#ffffff', color: '#000000', duration: 0.8, ease: 'power2.inOut' });
            },
            onLeaveBack: () => {
                gsap.to(section, { backgroundColor: '#000000', color: '#e2e2e2', duration: 0.8, ease: 'power2.inOut' });
            }
        });

        // Parallax cursor following mouse
        const handleMouseMove = (e) => {
            const rect = section.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            gsap.to(cursorRef.current, { x: x * 0.05, y: y * 0.05, duration: 0.5, ease: 'power2.out' });
        };

        // Show/hide cursor on hover
        const showCursor = () => gsap.to(cursorRef.current, { opacity: 1, duration: 0.3 });
        const hideCursor = () => gsap.to(cursorRef.current, { opacity: 0, duration: 0.3 });

        section.addEventListener('mousemove', handleMouseMove);
        section.addEventListener('mouseenter', showCursor);
        section.addEventListener('mouseleave', hideCursor);

        return () => {
            section.removeEventListener('mousemove', handleMouseMove);
            section.removeEventListener('mouseenter', showCursor);
            section.removeEventListener('mouseleave', hideCursor);
            flipTrigger.kill();
        };
    }, []);

    return (
        <section
            id="contact"
            ref={sectionRef}
            style={{ minHeight: '100svh', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden', padding: '0 64px', backgroundColor: '#000000', color: '#e2e2e2', transition: 'background-color 0.1s, color 0.1s' }}
        >
            {/* ── Logo Loop Marquee Background ── */}
            <div style={{ position: 'absolute', inset: 0, zIndex: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '60px', overflow: 'hidden', pointerEvents: 'none', opacity: 0.15 }}>
                <LogoRow direction="left" />
                <LogoRow direction="right" />
                <LogoRow direction="left" />
            </div>

            {/* ── Ghost Text ── */}
            <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', pointerEvents: 'none', zIndex: 1 }}>
                <div style={{ fontFamily: '"Open Sans", sans-serif', fontSize: '15vw', lineHeight: 1, color: 'transparent', WebkitTextStroke: '1px rgba(0,0,0,0.05)', whiteSpace: 'nowrap', transform: 'rotate(-6deg)', opacity: 0.15, userSelect: 'none' }}>
                    CRAFT CODE CRAFT CODE CRAFT
                </div>
            </div>

            {/* ── Main Content ── */}
            <div style={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', maxWidth: '56rem', gap: '2rem' }}>
                <h2 style={{ fontFamily: '"Open Sans", sans-serif', fontSize: 'clamp(40px, 7vw, 72px)', fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.03em', textTransform: 'uppercase', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <span>LET'S CREATE</span>
                    <span style={{ whiteSpace: 'nowrap' }}>SOMETHING BEYOND <span style={{ color: '#4cf3f6' }}>IDEA</span></span>
                </h2>
                <p style={{ fontFamily: '"Open Sans", sans-serif', fontSize: '18px', lineHeight: 1.6, maxWidth: '36rem', opacity: 0.8 }}>
                    I explore the space between code, creativity, and intelligence to build experiences that actually do something.
                </p>
                <a
                    href="#footer"
                    className="outline-pill"
                    onClick={(e) => {
                        e.preventDefault();
                        document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', padding: '16px 32px', border: '2px solid currentColor', fontFamily: '"JetBrains Mono", monospace', fontSize: '12px', letterSpacing: '0.05em', textTransform: 'uppercase', borderRadius: '9999px', textDecoration: 'none', color: 'inherit', transition: 'all 0.3s', marginTop: '1rem', cursor: 'pointer' }}
                >
                    GET IN TOUCH
                    <span className="material-symbols-outlined" style={{ marginLeft: '8px', fontSize: '18px' }}>arrow_forward</span>
                </a>
            </div>

            {/* ── Multiplayer Cursor ── */}
            <div
                ref={cursorRef}
                style={{ position: 'absolute', zIndex: 20, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', left: '60%', top: '40%', pointerEvents: 'none', opacity: 0 }}
            >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ color: '#4cf3f6', filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.1))' }}>
                    <path d="M5.5 3.5L18.5 10.5L12 13L9.5 20.5L5.5 3.5Z" fill="currentColor" stroke="white" strokeWidth="1.5" strokeLinejoin="round"/>
                </svg>
                <div style={{ backgroundColor: '#4cf3f6', color: '#003738', fontFamily: '"JetBrains Mono", monospace', fontSize: '10px', padding: '2px 8px', borderRadius: '2px', marginTop: '4px', whiteSpace: 'nowrap' }}>
                    Guest_001
                </div>
            </div>

            {/* ── Decorative Wireframe Corner ── */}
            <div style={{ position: 'absolute', bottom: '40px', left: '40px', width: '96px', height: '96px', border: '1px solid rgba(255,255,255,0.1)', pointerEvents: 'none', zIndex: 1 }}>
                <div style={{ position: 'absolute', top: -4, left: -4, width: 8, height: 8, backgroundColor: 'rgba(255,255,255,0.1)' }}></div>
                <div style={{ position: 'absolute', top: -4, right: -4, width: 8, height: 8, backgroundColor: 'rgba(255,255,255,0.1)' }}></div>
                <div style={{ position: 'absolute', bottom: -4, left: -4, width: 8, height: 8, backgroundColor: 'rgba(255,255,255,0.1)' }}></div>
                <div style={{ position: 'absolute', bottom: -4, right: -4, width: 8, height: 8, backgroundColor: 'rgba(255,255,255,0.1)' }}></div>
            </div>

            {/* ── Scroll Hint ── */}
            <div style={{ position: 'absolute', bottom: '32px', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', opacity: 0.6 }}>
                <div style={{ width: '1px', height: '48px', background: 'currentColor', transformOrigin: 'top', animation: 'pulse 2s ease-in-out infinite' }}></div>
            </div>
        </section>
    );
};

export default CtaPivot;
