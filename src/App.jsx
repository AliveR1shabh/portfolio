import React, { useEffect, useRef } from 'react'
import { ReactLenis } from 'lenis/react'
import Header from './components/Header'
import Hero from './components/Hero'
import CtaPivot from './components/CtaPivot'
import WorkCanvas from './components/WorkCanvas'
import Footer from './components/Footer'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function App() {
  const scrollBtnRef = useRef(null);

  useEffect(() => {
    // Prevent the browser from keeping #hero in the URL on initial load/refresh
    if (window.location.hash === '#hero') {
      window.history.replaceState(null, '', window.location.pathname + window.location.search);
    }
  }, []);

  useEffect(() => {
    const btn = scrollBtnRef.current;
    if (!btn) return;

    // Show scroll-to-top button after scrolling past viewport height
    const trigger = ScrollTrigger.create({
      start: "top -500px",
      onEnter: () => gsap.to(btn, { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" }),
      onLeaveBack: () => gsap.to(btn, { opacity: 0, y: 20, duration: 0.3, ease: "power2.in" }),
    });

    gsap.set(btn, { opacity: 0, y: 20 });

    return () => {
      trigger.kill();
    };
  }, []);

  return (
    <ReactLenis root>
      <div className="fixed inset-0 pointer-events-none z-[-1] opacity-20" style={{ background: "radial-gradient(circle at 50% 50%, rgba(76, 243, 246, 0.05) 0%, transparent 70%)" }}></div>
      <Header />
      <main>
        <Hero />
        <CtaPivot />
        <WorkCanvas />
      </main>

      <button
        ref={scrollBtnRef}
        id="scroll-to-top"
        aria-label="Scroll to top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 sm:bottom-12 sm:right-10 w-11 h-11 rounded-full bg-white text-black flex items-center justify-center z-40 shadow-lg hover:scale-110 hover:bg-[#4cf3f6] hover:text-[#003738] transition-transform duration-200">
        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>arrow_upward</span>
      </button>

      <Footer />
    </ReactLenis>
  )
}

export default App
