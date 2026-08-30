import React from 'react';
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { SiReaddotcv, SiLeetcode } from "react-icons/si";

const Footer = () => {
    return (
        <footer id="footer" style={{ backgroundColor: '#fafaf8', width: '100%', padding: '32px 64px', borderTop: '1px solid #3b4949', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
            <div style={{ fontFamily: '"Open Sans", sans-serif', fontSize: '32px', fontWeight: 600, color: '#131313' }}>
                RISHABH.DEV_
            </div>
            <nav style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
                <a href="https://github.com/AliveR1shabh" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontFamily: '"JetBrains Mono", monospace', fontSize: '18px', letterSpacing: '0.05em', color: '#666', textDecoration: 'none', transition: 'color 0.2s' }}>
                    <FaGithub size={22} /> GITHUB
                </a>
                <a href="https://www.linkedin.com/in/aliverishabh/" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontFamily: '"JetBrains Mono", monospace', fontSize: '18px', letterSpacing: '0.05em', color: '#666', textDecoration: 'none', transition: 'color 0.2s' }}>
                    <FaLinkedin size={22} /> LINKEDIN
                </a>
                <a href="https://drive.google.com/file/d/1BmcU3GX8PtUA92br0svTbnyHZZukKvEq/view?usp=sharing" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontFamily: '"JetBrains Mono", monospace', fontSize: '18px', letterSpacing: '0.05em', color: '#666', textDecoration: 'none', transition: 'color 0.2s' }}>
                    <SiReaddotcv size={22} /> READCV
                </a>
                <a href="https://leetcode.com/u/AliveRishabh/" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontFamily: '"JetBrains Mono", monospace', fontSize: '18px', letterSpacing: '0.05em', color: '#666', textDecoration: 'none', transition: 'color 0.2s' }}>
                    <SiLeetcode size={22} /> LEETCODE
                </a>
            </nav>
            <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '12px', letterSpacing: '0.05em', color: '#666' }}>
                © 2026 RISHABH GUPTA. ALL RIGHTS RESERVED.
            </div>
        </footer>
    );
};

export default Footer;
