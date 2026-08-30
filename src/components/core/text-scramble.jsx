import React, { useState, useEffect, useRef, useCallback } from 'react';

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+';

export function TextScramble({ children, className, duration = 800 }) {
  const [text, setText] = useState('');
  const originalText = children ? children.toString() : '';
  const ref = useRef(null);
  const isAnimatingRef = useRef(false);
  const frameRequestRef = useRef(null);

  const triggerScramble = useCallback(() => {
    if (isAnimatingRef.current) return;
    isAnimatingRef.current = true;
    let startTime = null;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);

      let newText = '';
      for (let i = 0; i < originalText.length; i++) {
        if (originalText[i] === ' ') {
          newText += ' ';
          continue;
        }

        const charProgress = i / originalText.length;
        if (progress > charProgress) {
          newText += originalText[i];
        } else {
          newText += CHARS[Math.floor(Math.random() * CHARS.length)];
        }
      }

      setText(newText);

      if (progress < 1) {
        frameRequestRef.current = requestAnimationFrame(animate);
      } else {
        setText(originalText);
        isAnimatingRef.current = false;
      }
    };

    frameRequestRef.current = requestAnimationFrame(animate);
  }, [originalText, duration]);

  useEffect(() => {
    // Initial scramble on intersection when scrolling into view
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        triggerScramble();
        if (ref.current) observer.unobserve(ref.current);
      }
    }, { threshold: 0.1 });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (frameRequestRef.current) cancelAnimationFrame(frameRequestRef.current);
      observer.disconnect();
    };
  }, [triggerScramble]);

  return (
    <span 
      ref={ref} 
      className={className}
      onMouseEnter={triggerScramble}
      style={{ cursor: 'pointer', display: 'inline-block' }}
    >
      {text || originalText}
    </span>
  );
}
