import React, { useState } from 'react';
import HelloButton from './HelloButton';
import FigmaCard from './FigmaCard';

const InteractiveHelloSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '16px' }}
      onMouseLeave={() => setIsOpen(false)}
    >
      <HelloButton 
        onMouseEnter={() => setIsOpen(true)}
        onClick={() => setIsOpen(prev => !prev)}
      />
      <div 
        style={{ 
          opacity: isOpen ? 1 : 0, 
          transform: isOpen ? 'translateY(0) scale(1)' : 'translateY(-15px) scale(0.95)',
          transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
          pointerEvents: isOpen ? 'auto' : 'none',
          visibility: isOpen ? 'visible' : 'hidden'
        }}
      >
        <FigmaCard />
      </div>
    </div>
  );
};

export default InteractiveHelloSection;
