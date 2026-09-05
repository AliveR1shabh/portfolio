import React, { useState, useEffect } from 'react';
import GooeyNav from './GooeyNav';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Prevent body scroll on small screens when mobile menu card is open
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') setIsMenuOpen(false);
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    const navItems = [
        { label: 'STORY', href: '#hero', icon: 'auto_stories' },
        { label: 'WORK', href: '#work', icon: 'code_blocks' },
        { label: 'CONTACT', href: '#contact', icon: 'alternate_email' }
    ];

    return (
        <header style={{ position: 'fixed', top: 0, width: '100%', zIndex: 50, backgroundColor: 'rgba(19,19,19,0.85)', backdropFilter: 'blur(16px)', borderBottom: '1px solid rgba(255,255,255,0.08)', transition: 'all 0.3s ease' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 var(--spacing-gutter, 24px)', height: '72px', width: '100%', maxWidth: '1400px', margin: '0 auto' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <a href="#" style={{ fontFamily: '"Open Sans", sans-serif', fontSize: 'clamp(18px, 4vw, 28px)', fontWeight: 700, letterSpacing: '-0.03em', color: '#e2e2e2', textDecoration: 'none', transition: 'opacity 0.2s' }}>
                        RISHABH.DEV_
                    </a>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:block">
                    <GooeyNav items={navItems} />
                </div>

                {/* Mobile/Tablet Hamburger Toggle */}
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
                    className="block md:hidden flex items-center justify-center p-2 rounded-xl text-white hover:text-[#4cf3f6] hover:bg-white/5 active:scale-95 transition-all"
                    style={{ background: 'none', border: '1px solid rgba(255,255,255,0.1)', cursor: 'pointer', outline: 'none' }}
                >
                    <span className="material-symbols-outlined" style={{ fontSize: '26px' }}>
                        {isMenuOpen ? 'close' : 'menu'}
                    </span>
                </button>
            </div>

            {/* Backdrop click dismiss */}
            {isMenuOpen && (
                <div 
                    onClick={() => setIsMenuOpen(false)}
                    style={{
                        position: 'fixed',
                        inset: 0,
                        backgroundColor: 'rgba(0,0,0,0.5)',
                        backdropFilter: 'blur(4px)',
                        zIndex: 90
                    }}
                    className="block md:hidden"
                />
            )}

            {/* Mobile & Tablet Sleek Top-Right Dropdown Card */}
            {isMenuOpen && (
                <div 
                    style={{
                        position: 'fixed',
                        top: '80px',
                        right: '16px',
                        width: 'min(280px, calc(100vw - 32px))',
                        backgroundColor: 'rgba(18,18,18,0.96)',
                        backdropFilter: 'blur(24px)',
                        border: '1px solid rgba(255,255,255,0.12)',
                        borderRadius: '16px',
                        boxShadow: '0 20px 40px rgba(0,0,0,0.6), 0 0 0 1px rgba(76,243,246,0.15)',
                        zIndex: 100,
                        padding: '12px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '6px'
                    }}
                    className="block md:hidden animate-in fade-in slide-in-from-top-2 duration-200"
                >
                    <div style={{ padding: '8px 12px 6px', fontSize: '11px', fontFamily: '"JetBrains Mono", monospace', color: '#888', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                        Navigation
                    </div>

                    <nav style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                        {navItems.map((item, idx) => (
                            <a
                                key={idx}
                                href={item.href}
                                onClick={() => setIsMenuOpen(false)}
                                style={{
                                    fontFamily: '"JetBrains Mono", monospace',
                                    fontSize: '14px',
                                    fontWeight: 600,
                                    letterSpacing: '0.05em',
                                    color: '#e2e2e2',
                                    textDecoration: 'none',
                                    padding: '10px 14px',
                                    borderRadius: '10px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    backgroundColor: 'rgba(255,255,255,0.03)',
                                    transition: 'all 0.2s ease'
                                }}
                                className="hover:bg-[#4cf3f6]/10 hover:text-[#4cf3f6] hover:translate-x-1 active:scale-98"
                            >
                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <span className="material-symbols-outlined" style={{ fontSize: '18px', opacity: 0.8 }}>{item.icon}</span>
                                    <span>{item.label}</span>
                                </div>
                                <span className="material-symbols-outlined" style={{ fontSize: '16px', opacity: 0.4 }}>arrow_forward_ios</span>
                            </a>
                        ))}
                    </nav>

                    <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', marginTop: '6px', paddingTop: '10px' }}>
                        <a
                            href="mailto:rishabhneedworks@gmail.com"
                            onClick={() => setIsMenuOpen(false)}
                            style={{
                                fontFamily: '"JetBrains Mono", monospace',
                                fontSize: '13px',
                                fontWeight: 700,
                                letterSpacing: '0.05em',
                                color: '#003738',
                                backgroundColor: '#4cf3f6',
                                textDecoration: 'none',
                                padding: '10px',
                                borderRadius: '10px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '6px',
                                boxShadow: '0 4px 12px rgba(76,243,246,0.3)',
                                transition: 'all 0.2s ease'
                            }}
                            className="hover:scale-[1.02] active:scale-95"
                        >
                            <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>mail</span>
                            <span>HIRE ME</span>
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
