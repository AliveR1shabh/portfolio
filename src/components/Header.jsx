import React, { useState, useEffect } from 'react';
import GooeyNav from './GooeyNav';
import CoffeeLoader from './CoffeeLoader';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isMenuOpen]);

    const navItems = [
        { label: 'STORY', href: '#hero' },
        { label: 'WORK', href: '#work' },
        { label: 'CONTACT', href: '#contact' }
    ];

    return (
        <header style={{ position: 'fixed', top: 0, width: '100%', zIndex: 50, backgroundColor: 'rgba(19,19,19,0.8)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(255,255,255,0.1)', transition: 'all 0.3s ease' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 var(--spacing-gutter, 24px)', height: '80px', width: '100%' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <a href="#" style={{ fontFamily: '"Open Sans", sans-serif', fontSize: 'clamp(20px, 4.5vw, 32px)', fontWeight: 700, letterSpacing: '-0.03em', color: '#e2e2e2', textDecoration: 'none', transition: 'opacity 0.2s' }}>
                        RISHABH.DEV_
                    </a>
                    <div style={{ marginLeft: 'clamp(8px, 2vw, 28px)', display: 'flex', alignItems: 'center' }}>
                        <CoffeeLoader />
                    </div>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:block">
                    <GooeyNav items={navItems} />
                </div>

                {/* Mobile Hamburger Toggle */}
                <button
                    onClick={() => setIsMenuOpen(true)}
                    aria-label="Open Menu"
                    className="block md:hidden flex items-center justify-center p-2 text-white hover:text-[#4cf3f6] transition-colors"
                    style={{ background: 'none', border: 'none', cursor: 'pointer', outline: 'none' }}
                >
                    <span className="material-symbols-outlined" style={{ fontSize: '32px' }}>menu</span>
                </button>
            </div>

            {/* Mobile Navigation Overlay */}
            {isMenuOpen && (
                <div 
                    style={{
                        position: 'fixed',
                        inset: 0,
                        backgroundColor: 'rgba(13,13,13,0.98)',
                        backdropFilter: 'blur(20px)',
                        zIndex: 100,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <button
                        onClick={() => setIsMenuOpen(false)}
                        aria-label="Close Menu"
                        style={{
                            position: 'absolute',
                            top: '24px',
                            right: '24px',
                            background: 'none',
                            border: 'none',
                            color: '#ffffff',
                            cursor: 'pointer',
                            padding: '8px',
                            outline: 'none'
                        }}
                        className="hover:text-[#4cf3f6] transition-colors"
                    >
                        <span className="material-symbols-outlined" style={{ fontSize: '36px' }}>close</span>
                    </button>

                    <nav style={{ display: 'flex', flexDirection: 'column', gap: '32px', alignItems: 'center' }}>
                        {navItems.map((item, idx) => (
                            <a
                                key={idx}
                                href={item.href}
                                onClick={() => setIsMenuOpen(false)}
                                style={{
                                    fontFamily: '"JetBrains Mono", monospace',
                                    fontSize: '28px',
                                    fontWeight: 700,
                                    letterSpacing: '0.1em',
                                    color: '#ffffff',
                                    textDecoration: 'none',
                                    transition: 'color 0.2s',
                                    padding: '10px 20px'
                                }}
                                className="hover:text-[#4cf3f6] transition-all"
                            >
                                {item.label}
                            </a>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;
