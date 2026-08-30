import React from 'react';
import GooeyNav from './GooeyNav';
import CoffeeLoader from './CoffeeLoader';

const Header = () => {
    return (
        <header style={{ position: 'fixed', top: 0, width: '100%', zIndex: 50, backgroundColor: 'rgba(19,19,19,0.8)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(255,255,255,0.1)', transition: 'all 0.3s ease' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 64px', height: '80px', width: '100%' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <a href="#" style={{ fontFamily: '"Open Sans", sans-serif', fontSize: '32px', fontWeight: 700, letterSpacing: '-0.03em', color: '#e2e2e2', textDecoration: 'none', transition: 'opacity 0.2s' }}>
                        RISHABH.DEV_
                    </a>
                    <CoffeeLoader />
                </div>
                <GooeyNav
                    items={[
                        { label: 'STORY', href: '#hero' },
                        { label: 'WORK', href: '#work' },
                        { label: 'CONTACT', href: '#contact' }
                    ]}
                />
            </div>
        </header>
    );
};

export default Header;
