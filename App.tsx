import React, { useState, useEffect } from 'react';
import { BackgroundVideo } from './components/BackgroundVideo';
import { Button } from './components/Button';
import { CONFIG } from './constants';

const App: React.FC = () => {
  // Staggered animation states
  const [showLogo, setShowLogo] = useState(false);
  const [showHeadline, setShowHeadline] = useState(false);
  const [showSub, setShowSub] = useState(false);
  const [showActions, setShowActions] = useState(false);
  
  // Interaction states
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Orchestrate entrance animations
    const t1 = setTimeout(() => setShowLogo(true), 100);
    const t2 = setTimeout(() => setShowHeadline(true), 300);
    const t3 = setTimeout(() => setShowSub(true), 600); // +300ms from headline
    const t4 = setTimeout(() => setShowActions(true), 1000);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, []);

  const handleVerify = () => {
    setIsExiting(true);
    // Simulate navigation delay for smooth exit animation
    setTimeout(() => {
      window.location.href = CONFIG.redirectUrl;
    }, 600);
  };

  const handleReject = () => {
    window.location.href = CONFIG.rejectUrl;
  };

  return (
    <main className="relative w-full h-[100vh] flex flex-col items-center justify-center overflow-hidden">
      
      {/* 1. Background Layer */}
      <BackgroundVideo />

      {/* 2. Content Layer - Z-index above video */}
      <div 
        className={`
          relative z-10 w-full max-w-md px-6 flex flex-col items-center text-center
          transition-opacity duration-700 ease-in-out
          ${isExiting ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}
        `}
      >
        
        {/* Brand / Logo */}
        <div 
          className={`
            mb-12 md:mb-16 fade-enter
            ${showLogo ? 'fade-enter-active' : ''}
          `}
        >
          {CONFIG.logoUrl ? (
            <img 
              src={CONFIG.logoUrl} 
              alt={CONFIG.brandName}
              className="h-10 md:h-12 w-auto object-contain opacity-95"
            />
          ) : (
            <span 
              className="text-4xl md:text-5xl font-normal tracking-[0.2em] uppercase"
              style={{ color: CONFIG.colors.primary }}
            >
              {CONFIG.brandName}
            </span>
          )}
        </div>

        {/* Primary Content Card Area */}
        <div className="flex flex-col items-center w-full">
          
          {/* Headline */}
          <h1 
            className={`
              text-3xl md:text-4xl font-bold tracking-widest uppercase mb-4
              fade-enter
              ${showHeadline ? 'fade-enter-active' : ''}
            `}
            style={{ color: CONFIG.colors.text }}
          >
            Are you over {CONFIG.minAge}?
          </h1>

          {/* Sub-headline (Trust Builder) */}
          <p 
            className={`
              text-sm md:text-base font-light tracking-wide mb-12 max-w-[280px] md:max-w-none
              fade-enter
              ${showSub ? 'fade-enter-active' : ''}
            `}
            style={{ color: CONFIG.colors.textSecondary }}
          >
            This experience is intended for adults only.
          </p>

          {/* Actions Container */}
          <div 
            className={`
              flex flex-col items-center w-full
              fade-enter
              ${showActions ? 'fade-enter-active' : ''}
            `}
          >
            {/* Primary CTA */}
            <Button onClick={handleVerify} aria-label={`Confirm I am over ${CONFIG.minAge}`}>
              YES, I’M AT LEAST {CONFIG.minAge}
            </Button>

            {/* Secondary CTA */}
            <Button variant="secondary" onClick={handleReject}>
              NO, TAKE ME BACK
            </Button>
          </div>

        </div>

        {/* Footer / Compliance Text (Optional but adds 'Official' feel) */}
        <div 
          className={`
            absolute bottom-[-15vh] md:bottom-[-20vh] left-0 right-0 
            text-[10px] uppercase tracking-widest opacity-30 text-center
            pointer-events-none
          `}
        >
          Secure Entry &bull; Compliance Check
        </div>

      </div>
    </main>
  );
};

export default App;