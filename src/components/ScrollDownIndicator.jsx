import React from 'react';
import styled from 'styled-components';

const ScrollDownIndicator = ({ onClick }) => {
  return (
    <StyledWrapper onClick={onClick}>
      <div className="scrolldown" style={{'--color': 'skyblue'}}>
        <div className="chevrons">
          <div className="chevrondown" />
          <div className="chevrondown" />
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  cursor: pointer;
  display: inline-block;
  transition: transform 0.3s ease, filter 0.3s ease;

  &:hover {
    transform: translateY(3px) scale(1.08);
    filter: drop-shadow(0 0 8px rgba(76, 243, 246, 0.6));
  }

  .scrolldown {
    --color: white;
    --sizeX: 30px;
    --sizeY: 50px;
    position: relative;
    width: var(--sizeX);
    height: var(--sizeY);
    border: calc(var(--sizeX) / 10) solid var(--color);
    border-radius: 50px;
    box-sizing: border-box;
    margin-bottom: 16px;
    cursor: pointer;
    transition: border-color 0.3s ease;
  }

  &:hover .scrolldown {
    --color: #4cf3f6;
  }

  .scrolldown::before {
    content: "";
    position: absolute;
    bottom: 30px;
    left: 50%;
    width: 6px;
    height: 6px;
    margin-left: -3px;
    background-color: var(--color);
    border-radius: 100%;
    animation: scrolldown-anim 2s infinite;
    box-sizing: border-box;
    box-shadow: 0px -5px 3px 1px #2a547066;
  }

  @keyframes scrolldown-anim {
    0% {
      opacity: 0;
      height: 6px;
    }

    40% {
      opacity: 1;
      height: 10px;
    }

    80% {
      transform: translate(0, 20px);
      height: 10px;
      opacity: 0;
    }

    100% {
      height: 3px;
      opacity: 0;
    }
  }

  .chevrons {
    padding: 6px 0 0 0;
    margin-left: -3px;
    margin-top: 48px;
    width: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .chevrondown {
    margin-top: -6px;
    position: relative;
    border: solid var(--color);
    border-width: 0 3px 3px 0;
    display: inline-block;
    width: 10px;
    height: 10px;
    transform: rotate(45deg);
    transition: border-color 0.3s ease;
  }

  .chevrondown:nth-child(odd) {
    animation: pulse54012 500ms ease infinite alternate;
  }

  .chevrondown:nth-child(even) {
    animation: pulse54012 500ms ease infinite alternate 250ms;
  }

  @keyframes pulse54012 {
    from {
      opacity: 0;
    }

    to {
      opacity: 0.5;
    }
  }`;

export default ScrollDownIndicator;
