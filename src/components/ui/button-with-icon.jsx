import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const LetCollaborateButton = () => {
  return (
    <a
      href="mailto:rishabhneedworks@gmail.com"
      className="relative text-sm font-medium rounded-full h-12 p-1 ps-6 pe-14 group transition-all duration-500 hover:ps-14 hover:pe-6 w-fit overflow-hidden cursor-pointer inline-flex items-center no-underline"
      style={{
        backgroundColor: '#131313',
        color: '#ffffff',
        boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
        border: '1px solid rgba(255,255,255,0.1)'
      }}
    >
      <span className="relative z-10 transition-all duration-500 font-mono tracking-wide">
        Let's Collaborate
      </span>
      <div 
        className="absolute right-1 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 group-hover:right-[calc(100%-44px)] group-hover:rotate-45"
        style={{
          backgroundColor: '#4cf3f6',
          color: '#003738'
        }}
      >
        <ArrowUpRight size={18} />
      </div>
    </a>
  );
};

export default LetCollaborateButton;
