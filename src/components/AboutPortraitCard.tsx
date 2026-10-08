import React, { useState } from 'react';
import profileImg from '../assets/adam.jpg';

export interface AboutPortraitCardProps {
  className?: string;
  imageSrc?: string;
  altText?: string;
}

/**
 * AboutPortraitCard
 * 
 * High-performance dark glassmorphism portrait frame for Adam Biyadi's VFX asset.
 * 
 * Specifications:
 * - Contained dimensions inside a styled glassmorphic frame (rounded-2xl border border-cyan-500/20 bg-black/40 backdrop-blur-md)
 * - Dark gradient masks (bg-gradient-to-t from-[#090a0f] via-transparent to-[#090a0f] and horizontal masks)
 *   so the bright cyan lightning effect blends smoothly into the dark theme without bleeding or reducing text contrast.
 * - Layered z-index for crisp UI hierarchy.
 */
export const AboutPortraitCard: React.FC<AboutPortraitCardProps> = ({
  className = '',
  imageSrc = profileImg,
  altText = 'Adam Biyadi — Creative Direction & Multimedia',
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div
      className={`relative w-full h-[460px] sm:h-[500px] lg:h-full min-h-[460px] max-h-[620px] rounded-2xl overflow-hidden border border-cyan-500/20 bg-black/40 backdrop-blur-md shadow-[0_20px_50px_rgba(0,0,0,0.6)] transition-all duration-500 hover:border-[#00E5FF]/50 hover:shadow-[0_0_35px_rgba(0,229,255,0.25)] group ${className}`}
    >
      {/* Sleek blacked-out skeleton base while image is loading */}
      <div
        className={`absolute inset-0 bg-[#090a0f] transition-opacity duration-700 z-0 ${
          isLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      >
        <div className="w-full h-full animate-pulse bg-gradient-to-br from-[#090a0f] via-slate-900/60 to-[#05070a]" />
      </div>

      {/* Main Portrait / VFX Asset with containment */}
      <img
        src={imageSrc}
        alt={altText}
        loading="lazy"
        decoding="async"
        onLoad={() => setIsLoaded(true)}
        className={`relative z-10 w-full h-full object-cover object-[center_18%] transition-all duration-700 ease-out group-hover:scale-105 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      />

      {/* Dark Vignette & Dual-Axis Gradient Masks for Seamless Contrast & Dark Theme Blending */}
      {/* 1. Vertical Gradient Mask (top & bottom dark tint) */}
      <div className="absolute inset-0 z-20 pointer-events-none bg-gradient-to-t from-[#090a0f] via-transparent to-[#090a0f]/80" />

      {/* 2. Horizontal Gradient Masks (left & right edge softening) */}
      <div className="absolute inset-0 z-20 pointer-events-none bg-gradient-to-r from-[#090a0f]/60 via-transparent to-[#090a0f]/40" />
      <div className="absolute inset-0 z-20 pointer-events-none bg-gradient-to-l from-[#090a0f]/60 via-transparent to-transparent" />

      {/* 3. Subtle Cyber Cyan Corner Illumination */}
      <div className="absolute -top-12 -right-12 w-36 h-36 bg-[#00E5FF]/15 blur-3xl pointer-events-none rounded-full group-hover:bg-[#00E5FF]/25 transition-all duration-500 z-20" />

      {/* 4. Top Specular Glass Highlight */}
      <div className="absolute top-0 inset-x-0 h-28 pointer-events-none bg-gradient-to-b from-white/10 to-transparent z-20" />

      {/* 5. Interactive Directive Status Badge */}
      <div className="absolute bottom-5 left-5 z-30 flex items-center gap-2.5 px-4 py-2 rounded-full bg-black/70 backdrop-blur-md border border-white/15 shadow-xl group-hover:border-[#00E5FF]/50 transition-colors duration-300">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00E5FF] opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00E5FF]" />
        </span>
        <span className="font-mono text-[10px] tracking-widest text-slate-200 uppercase font-medium">
          ADAM BIYADI // DIRECTIVE
        </span>
      </div>
    </div>
  );
};

export default AboutPortraitCard;
