import React from 'react';
import styled from 'styled-components';

const FigmaCard = () => {
  return (
    <StyledWrapper>
      <div className="comment-card">
        <div className="comment-body">
          <div className="line">Rishabh Gupta,</div>
          <div className="line">Full-Stack Dev,</div>
          <div className="line highlight">CODE, CREATE.</div>
        </div>

        {/* Animated Pink Cursor Badge */}
        <div className="pink-cursor">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="#fe2fd8" stroke="white" strokeWidth="1.5">
            <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"></path>
          </svg>
          <div className="pink-badge">SOFTWARE DEVELOPER</div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  position: relative;
  margin-top: 10px;

  .comment-card {
    background-color: #1c1c1e;
    border: 1px solid rgba(255, 255, 255, 0.12);
    border-radius: 16px;
    padding: 24px 28px;
    width: 380px;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.6);
    position: relative;
  }

  .comment-body {
    color: #ffffff;
    font-family: 'Open Sans', 'Inter', sans-serif;
    font-size: 26px;
    font-weight: 700;
    line-height: 1.35;
    letter-spacing: -0.02em;
  }

  .line {
    color: #ffffff;
  }

  .highlight {
    font-weight: 800;
    color: #ffffff;
  }

  .pink-cursor {
    position: absolute;
    bottom: -18px;
    left: -10px;
    display: flex;
    align-items: center;
    gap: 4px;
    z-index: 10;
    animation: cursorDrift 4s ease-in-out infinite alternate;
  }

  .pink-badge {
    background-color: #fe2fd8;
    color: #ffffff;
    font-family: 'JetBrains Mono', monospace;
    font-size: 11px;
    font-weight: 700;
    padding: 4px 12px;
    border-radius: 9999px;
    white-space: nowrap;
    box-shadow: 0 4px 14px rgba(254, 47, 216, 0.5);
    letter-spacing: 0.05em;
  }

  @keyframes cursorDrift {
    0% {
      transform: translate(0, 0) scale(1);
    }
    50% {
      transform: translate(14px, -6px) scale(1.03);
    }
    100% {
      transform: translate(-4px, 4px) scale(0.98);
    }
  }
`;

export default FigmaCard;
