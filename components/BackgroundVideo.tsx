
import React, { useState } from 'react';
import { CONFIG } from '../constants';

export const BackgroundVideo: React.FC = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  // Common styles for the blur effect logic
  const blurStyle = {
    filter: `blur(${CONFIG.blurIntensity})`,
    transform: 'scale(1.1)', // Scaling ensures blur doesn't create soft edges
  };

  return (
    <div className="absolute inset-0 z-0 overflow-hidden w-full h-full bg-[#0A0C0A]">
      
      {/* ==============================================
          MODE A: MP4 VIDEO PLAYER
         ============================================== */}
      {CONFIG.backgroundType === 'video' && (
        <>
          {/* Poster / Fallback Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
            style={{ 
              backgroundImage: `url(${CONFIG.videoPoster})`,
              ...blurStyle 
            }}
          />

          {/* HTML5 Video Tag */}
          <video
            autoPlay
            loop
            muted
            playsInline
            poster={CONFIG.videoPoster}
            onCanPlay={() => setIsVideoLoaded(true)}
            className={`
              absolute inset-0 w-full h-full object-cover z-0
              transition-opacity duration-1000 ease-in-out
              ${isVideoLoaded ? 'opacity-100' : 'opacity-0'}
            `}
            style={blurStyle}
          >
            {CONFIG.mobileVideoUrl && (
              <source src={CONFIG.mobileVideoUrl} type="video/mp4" media="(max-width: 768px)" />
            )}
            <source src={CONFIG.videoUrl} type="video/mp4" />
          </video>
        </>
      )}

      {/* ==============================================
          MODE B: EMBED CODE / IFRAME (GIF)
         ============================================== */}
      {CONFIG.backgroundType === 'embed' && CONFIG.embedCode && (
        <div className="absolute inset-0 w-full h-full pointer-events-none select-none overflow-hidden flex items-center justify-center">
            {/* Wrapper to handle scaling and blur for iframes */}
            <div 
                className="relative w-full h-full min-w-[150%] min-h-[150%]"
                style={blurStyle}
                dangerouslySetInnerHTML={{ __html: CONFIG.embedCode }}
            />
        </div>
      )}

      {/* ==============================================
          OVERLAY SYSTEM (Controls Dark Layer)
         ============================================== */}
      
      {/* 1. Base Dark Layer */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>
      
      {/* 2. Gradient Layer (Controlled by CONFIG.overlayOpacity) */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-black/60 z-10"
        style={{ opacity: CONFIG.overlayOpacity }}
      ></div>

      {/* 3. Texture Noise (Premium Feel) */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none mix-blend-overlay z-10"
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
      ></div>
    </div>
  );
};
