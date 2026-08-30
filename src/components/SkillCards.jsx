import React from 'react';
import styled from 'styled-components';

const skillsData = [
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="#4cf3f6" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        ),
        title: 'Full-Stack Dev',
        description: 'React, FastAPI, Node.js — building scalable web apps from front to back with clean architecture.',
    },
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" stroke="#4cf3f6" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        ),
        title: 'AI & Automation',
        description: 'LLMs, RAG pipelines, multi-agent systems — turning cutting-edge AI into real, usable products.',
    },
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" stroke="#4cf3f6" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        ),
        title: 'API & Backend',
        description: 'REST APIs, GraphQL, Python — robust backends that power intelligent, data-driven systems.',
    },
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" stroke="#4cf3f6" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        ),
        title: 'UI / UX Design',
        description: 'Pixel-perfect interfaces, smooth animations, and design systems that communicate intent.',
    },
];

const StyledWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
    justify-content: center;
    width: 100%;
    padding: 4rem 0 2rem;

    .card {
        position: relative;
        width: 280px;
        height: 190px;
        background-color: #131313;
        border-radius: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        perspective: 1000px;
        box-shadow: 0 0 0 1px rgba(76, 243, 246, 0.15);
        transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        border: 1px solid rgba(76, 243, 246, 0.1);
    }

    .card svg {
        width: 48px;
        transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }

    .card:hover {
        transform: scale(1.05);
        box-shadow: 0 8px 32px rgba(76, 243, 246, 0.15), 0 0 0 1px rgba(76, 243, 246, 0.3);
    }

    .card__content {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        padding: 20px;
        box-sizing: border-box;
        background-color: #1a1a1a;
        transform: rotateX(-90deg);
        transform-origin: bottom;
        transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .card:hover .card__content {
        transform: rotateX(0deg);
    }

    .card__title {
        margin: 0;
        font-size: 18px;
        color: #4cf3f6;
        font-weight: 700;
        font-family: 'Open Sans', sans-serif;
        letter-spacing: -0.02em;
    }

    .card:hover svg {
        scale: 0;
    }

    .card__description {
        margin: 10px 0 0;
        font-size: 13px;
        color: #9ca3af;
        line-height: 1.5;
        font-family: 'JetBrains Mono', monospace;
    }
`;

const SkillCards = () => {
    return (
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', paddingBottom: '4rem' }}>
            <p style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '12px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#4cf3f6', marginBottom: '8px' }}>WHAT I BRING</p>
            <h3 style={{ fontFamily: '"Open Sans", sans-serif', fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 700, letterSpacing: '-0.03em', color: '#131313', marginBottom: '0' }}>SKILLS & EXPERTISE</h3>
            <StyledWrapper>
                {skillsData.map((skill, i) => (
                    <div className="card" key={i}>
                        {skill.icon}
                        <div className="card__content">
                            <p className="card__title">{skill.title}</p>
                            <p className="card__description">{skill.description}</p>
                        </div>
                    </div>
                ))}
            </StyledWrapper>
        </div>
    );
};

export default SkillCards;
