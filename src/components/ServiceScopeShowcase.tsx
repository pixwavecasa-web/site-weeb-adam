import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
  MOTION_CONFIG,
} from './MotionWrappers';

interface ShowcaseCard {
  id: string;
  title: string;
  desc: string;
  format: string;
  badges: [string, string];
  thumb: string;
  videoUrl: string;
}

interface DomainData {
  key: string;
  label: string;
  galleryTitle: string;
  counterBadge: string;
  cards: ShowcaseCard[];
}

const DOMAIN_DATA: Record<string, DomainData> = {
  video_editing: {
    key: 'video_editing',
    label: 'VIDEO EDITING',
    galleryTitle: 'VIDEO EDITING // SHOWCASE GALLERY',
    counterBadge: '• 4 ACTIVE REELS & MASTERS',
    cards: [
      {
        id: 've-1',
        title: 'Short-Form Reels & TikToks',
        desc: 'High-velocity retention hooks, synchronized sound design, dynamic auto-tracking kinetic subtitles, and micro-cuts optimized for viral reach.',
        format: '9:16 VERTICAL REEL',
        badges: ['VIRAL REELS', '2.4M+ ORGANIC VIEWS'],
        thumb: '/video_cinematic_reel_1790992715313.jpg',
        videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-set-of-plateaus-seen-from-the-sky-in-a-sunset-26070-large.mp4',
      },
      {
        id: 've-2',
        title: 'Commercial & VFX Editing',
        desc: 'High-end CGI integration, clean plate reconstructions, dynamic screen replacements, motion tracking, and commercial broadcast pacing.',
        format: '16:9 VFX COMMERCIAL',
        badges: ['CGI & 3D COMPOSITING', '4K CINEMA MASTER'],
        thumb: '/motion_vfx_render_1790992748843.jpg',
        videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-futuristic-robotic-arm-moving-in-a-lab-41130-large.mp4',
      },
      {
        id: 've-3',
        title: 'Color Grading & Sound Design',
        desc: 'Hollywood film print emulation, custom ACES workflows, skin-tone isolation, spatial sound design, and Dolby Atmos audio mastering.',
        format: 'COLOR GRADE & MASTER',
        badges: ['ACES / LUT MASTERING', 'DAVINCI REC.709 & HDR'],
        thumb: '/2ef098cf-5bca-4263-9325-5a521b1d5e02 (1).jpg',
        videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-cinematographer-taking-shots-in-a-studio-41132-large.mp4',
      },
      {
        id: 've-4',
        title: 'Real Estate Video Editing',
        desc: 'Smooth architectural speed ramps, twilight sky replacements, 3D callouts for luxury amenities, and drone trajectory stabilization.',
        format: 'PROPERTY TOUR MASTER',
        badges: ['ARCHITECTURAL CINEMA', '4K 60FPS TOUR'],
        thumb: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
        videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-a-luxurious-hotel-resort-with-swimming-pools-41078-large.mp4',
      },
    ],
  },
  graphic_design: {
    key: 'graphic_design',
    label: 'GRAPHIC DESIGN',
    galleryTitle: 'GRAPHIC DESIGN // SHOWCASE GALLERY',
    counterBadge: '• 4 ACTIVE SYSTEMS & ASSETS',
    cards: [
      {
        id: 'gd-1',
        title: 'Brand Identity & Logos',
        desc: 'Modular vector marks, typographic hierarchies, color psychology theory, and production-ready enterprise brand guideline books.',
        format: 'IDENTITY SYSTEM',
        badges: ['BRAND ARCHITECTURE', 'COMPLETE SUITE'],
        thumb: '/brand_identity_system_1790992727488.jpg',
        videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-animation-of-futuristic-devices-99786-large.mp4',
      },
      {
        id: 'gd-2',
        title: 'Social Media Visuals',
        desc: 'Multi-slide storytelling carousels, striking digital ad creatives, and kinetic typography packs engineered for brand authority.',
        format: 'CAROUSEL & SOCIAL',
        badges: ['HIGH-CONVERSION', 'VIRAL CAROUSELS'],
        thumb: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
        videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-set-of-plateaus-seen-from-the-sky-in-a-sunset-26070-large.mp4',
      },
      {
        id: 'gd-3',
        title: 'Print & Marketing Assets',
        desc: 'Packaging die-lines, large-format out-of-home billboards, corporate pitch decks, and luxury foiled business stationery.',
        format: 'EDITORIAL & PRINT',
        badges: ['PRINT-READY CMYK', 'LUXURY FOILING'],
        thumb: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=1200&q=80',
        videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-cinematographer-taking-shots-in-a-studio-41132-large.mp4',
      },
      {
        id: 'gd-4',
        title: 'UI/UX Design Concepts',
        desc: 'Bespoke design systems, responsive component libraries, high-fidelity wireframes, and intuitive user journey prototypes.',
        format: 'UI/UX SYSTEM',
        badges: ['FIGMA ATOMIC DESIGN', 'DESIGN SYSTEMS'],
        thumb: '/web_canvas_interface_1790992739274.jpg',
        videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-futuristic-robotic-arm-moving-in-a-lab-41130-large.mp4',
      },
    ],
  },
  web_development: {
    key: 'web_development',
    label: 'WEB DEVELOPMENT',
    galleryTitle: 'WEB DEVELOPMENT // SHOWCASE GALLERY',
    counterBadge: '• 4 ACTIVE ENGINES & BUILDS',
    cards: [
      {
        id: 'wd-1',
        title: 'Custom Webflow & Readymag Sites',
        desc: 'Pixel-perfect CSS grid implementations, custom JavaScript micro-interactions, responsive fluid typography, and zero-maintenance CMS architectures.',
        format: 'FLAGSHIP EXPERIENCE',
        badges: ['99/100 LIGHTHOUSE', 'FLAGSHIP WEB'],
        thumb: '/web_canvas_interface_1790992739274.jpg',
        videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-hands-of-a-man-working-on-a-computer-2287-large.mp4',
      },
      {
        id: 'wd-2',
        title: 'E-Commerce Solutions',
        desc: 'Frictionless checkout pipelines, custom cart logic, inventory synchronization, and high-converting product showcase landing pages.',
        format: 'E-COMMERCE ENGINE',
        badges: ['HEADLESS COMMERCE', 'STRIPE & SHOPIFY'],
        thumb: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
        videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-futuristic-robotic-arm-moving-in-a-lab-41130-large.mp4',
      },
      {
        id: 'wd-3',
        title: 'Interactive Web Experiences',
        desc: 'Three.js interactive scenes, custom GLSL shaders, kinetic scroll triggers, and immersive audio-reactive WebGL canvas experiments.',
        format: 'SPATIAL WEB',
        badges: ['THREE.JS / WEBGL', '60 FPS 3D SCENES'],
        thumb: '/motion_vfx_render_1790992748843.jpg',
        videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-animation-of-futuristic-devices-99786-large.mp4',
      },
      {
        id: 'wd-4',
        title: 'API & Workflow Automations',
        desc: 'Custom webhook pipelines, CRM sync integrations, automated client onboarding portals, and serverless background event dispatchers.',
        format: 'AUTOMATION ENGINE',
        badges: ['PIPELINE AUTOMATION', 'FULL CRM SYNC'],
        thumb: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
        videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-hands-of-a-man-working-on-a-computer-2287-large.mp4',
      },
    ],
  },
  videography: {
    key: 'videography',
    label: 'VIDEOGRAPHY',
    galleryTitle: 'VIDEOGRAPHY // SHOWCASE GALLERY',
    counterBadge: '• 4 ACTIVE PRODUCTIONS',
    cards: [
      {
        id: 'vg-1',
        title: 'Commercial & Brand Shoots',
        desc: 'Full-service lighting design, motorized gimbal camera stabilization, directional audio capture, and bespoke executive interview direction.',
        format: 'COMMERCIAL SHOOT',
        badges: ['DIRECTOR OF PHOTO', '4K RED & SONY CINE'],
        thumb: '/video_cinematic_reel_1790992715313.jpg',
        videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-cinematographer-taking-shots-in-a-studio-41132-large.mp4',
      },
      {
        id: 'vg-2',
        title: 'Drone & Aerial Footage',
        desc: 'Ultra-smooth high-altitude cinematic sweeps, high-speed FPV chase shots, and architectural aerial mappings in uncompressed ProRes RAW.',
        format: 'AERIAL MASTER',
        badges: ['FPV & CINEMA RAW', 'LICENSED PILOT'],
        thumb: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=1200&q=80',
        videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-set-of-plateaus-seen-from-the-sky-in-a-sunset-26070-large.mp4',
      },
      {
        id: 'vg-3',
        title: 'Event Coverage',
        desc: 'Fast-turnaround executive summit coverage, high-energy festival recap films, keynote multi-cam switching, and dynamic crowd pacing.',
        format: 'EVENT RECAP 4K',
        badges: ['LIVE PRODUCTION', 'MULTI-CAM 4K'],
        thumb: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80',
        videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-hands-of-a-man-working-on-a-computer-2287-large.mp4',
      },
      {
        id: 'vg-4',
        title: 'Music Video Production',
        desc: 'Stylized neon lighting, dynamic camera blocking, speed changes, dramatic choreography framing, and creative conceptual storytelling.',
        format: 'MUSIC VIDEO 4K',
        badges: ['NARRATIVE CINEMA', 'ARTISTIC DIRECTION'],
        thumb: '/2ef098cf-5bca-4263-9325-5a521b1d5e02 (1).jpg',
        videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-cinematographer-taking-shots-in-a-studio-41132-large.mp4',
      },
    ],
  },
  photography: {
    key: 'photography',
    label: 'PHOTOGRAPHY',
    galleryTitle: 'PHOTOGRAPHY // SHOWCASE GALLERY',
    counterBadge: '• 4 ACTIVE ESSAYS & MASTERS',
    cards: [
      {
        id: 'ph-1',
        title: 'Product & Commercial Photography',
        desc: 'Precision strobe control, focus-stacked macro clarity, zero-glare product rendering, and frequency-separated luxury catalog masters.',
        format: 'STUDIO PACKSHOT',
        badges: ['PRODUCT MASTERS', 'MACRO & STROBES'],
        thumb: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=80',
        videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-cinematographer-taking-shots-in-a-studio-41132-large.mp4',
      },
      {
        id: 'ph-2',
        title: 'Real Estate & Architecture',
        desc: 'Perspective-corrected tilt-shift captures, natural bracketed ambient HDR blends, and luxury twilight architectural essays.',
        format: 'ARCHITECTURE 4K',
        badges: ['ARCHITECTURAL', 'HDR & TILT-SHIFT'],
        thumb: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
        videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-a-luxurious-hotel-resort-with-swimming-pools-41078-large.mp4',
      },
      {
        id: 'ph-3',
        title: 'Executive Portraits',
        desc: 'Rembrandt studio lighting, natural skin frequency separation, character-driven lighting setups for CEOs, artists, and leaders.',
        format: 'EXECUTIVE PORTRAIT',
        badges: ['EDITORIAL PORTRAITS', 'HIGH-END RETOUCHING'],
        thumb: '/9015ab7b-258d-4387-82ed-f8c188c6e085.jpg',
        videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-cinematographer-taking-shots-in-a-studio-41132-large.mp4',
      },
      {
        id: 'ph-4',
        title: 'Brand Lifestyle Content',
        desc: 'Authentic narrative moments, location campaigns, dynamic natural light shaping, and cohesive color palettes for luxury lifestyle brands.',
        format: 'LIFESTYLE CAMPAIGN',
        badges: ['LIFESTYLE & FASHION', 'NATURAL LIGHT MASTERS'],
        thumb: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1200&q=80',
        videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-set-of-plateaus-seen-from-the-sky-in-a-sunset-26070-large.mp4',
      },
    ],
  },
};

const CATEGORIES = [
  { key: 'video_editing', label: 'VIDEO EDITING' },
  { key: 'graphic_design', label: 'GRAPHIC DESIGN' },
  { key: 'web_development', label: 'WEB DEVELOPMENT' },
  { key: 'videography', label: 'VIDEOGRAPHY' },
  { key: 'photography', label: 'PHOTOGRAPHY' },
];

export default function ServiceScopeShowcase() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [activeModalVideo, setActiveModalVideo] = useState<{
    url: string;
    title: string;
    format: string;
  } | null>(null);

  // Global Theme Sync (Day / Night mode)
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    if (typeof document !== 'undefined') {
      const themeAttr = document.documentElement.getAttribute('data-theme');
      if (themeAttr === 'light') return false;
      if (document.documentElement.classList.contains('light')) return false;
    }
    return true; // Default to Dark / Night Mode
  });

  React.useEffect(() => {
    const checkTheme = () => {
      const isLight =
        document.documentElement.getAttribute('data-theme') === 'light' ||
        document.documentElement.classList.contains('light');
      setIsDarkMode(!isLight);
    };

    const handleThemeChange = (e: any) => {
      if (e && e.detail && typeof e.detail.isDark === 'boolean') {
        setIsDarkMode(e.detail.isDark);
      } else {
        checkTheme();
      }
    };

    window.addEventListener('themechange', handleThemeChange as EventListener);

    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme', 'class'],
    });

    return () => {
      window.removeEventListener('themechange', handleThemeChange as EventListener);
      observer.disconnect();
    };
  }, []);

  const handleTabClick = (key: string) => {
    // If user clicks active tab, deselect (toggle off)
    setActiveCategory((prev) => (prev === key ? null : key));
  };

  const handlePlayCard = (card: ShowcaseCard) => {
    // Open preview video modal
    if (typeof (window as any).openVideoModal === 'function') {
      (window as any).openVideoModal(card.videoUrl, card.title, card.format);
    } else {
      setActiveModalVideo({
        url: card.videoUrl,
        title: card.title,
        format: card.format,
      });
    }
  };

  const currentData = activeCategory ? DOMAIN_DATA[activeCategory] : null;

  return (
    <div className="w-full bg-transparent text-slate-100 font-sans selection:bg-cyan-500/30 py-4 sm:py-6 relative z-10">
      <div className="w-full max-w-7xl mx-auto">
        {/* 1. Header Area: Left-aligned and crisp with continuous bidirectional ScrollReveal */}
        <ScrollReveal direction="down" duration={0.5} className="flex flex-col items-start gap-4 mb-10">
          {/* Top Badge: Glowing cyan pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/70 border border-cyan-400/40 text-cyan-400 text-xs font-bold tracking-widest uppercase shadow-[0_0_15px_rgba(0,240,255,0.25)]">
            <span className="w-2 h-2 rounded-full bg-[#00f0ff] animate-pulse" />
            <span>• SERVICE SCOPE EXPLORER</span>
          </div>

          {/* Main Title: Crisp white in Night mode, Deep slate (#0f172a) in Day mode */}
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight uppercase font-mono drop-shadow-sm transition-colors duration-300 ${
              isDarkMode ? 'text-white' : 'text-[#0f172a]'
            }`}
          >
            SERVICE SCOPE <span className="text-[#00f0ff]">//</span> DOMAIN CAPABILITIES
          </h2>

          {/* Subtitle: Light silver-slate (#94a3b8) in Night mode, Slate (#475569) in Day mode */}
          <p
            className={`text-sm sm:text-base max-w-3xl leading-relaxed font-normal transition-colors duration-300 ${
              isDarkMode ? 'text-[#94a3b8]' : 'text-[#475569]'
            }`}
          >
            An executive breakdown of commercial video editing, brand &amp; graphic design, web development, videography, and high-end photography deliverables.
          </p>
        </ScrollReveal>

        {/* 2. Category Selector Pills with Staggered Bidirectional Entrance */}
        <StaggerContainer
          staggerChildren={0.06}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-10"
        >
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.key;
            return (
              <StaggerItem key={cat.key} direction="up" distance={20} className="w-full">
                <button
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => handleTabClick(cat.key)}
                  className={`w-full relative px-4 py-3.5 rounded-full text-xs sm:text-sm font-bold tracking-wider uppercase transition-all duration-300 text-center select-none cursor-pointer flex items-center justify-center backdrop-blur-md outline-none ${
                    isActive
                      ? 'bg-[#00f0ff] text-[#030712] font-extrabold border border-[#00f0ff] shadow-[0_0_25px_rgba(0,240,255,0.6)] translate-y-[-2px]'
                      : isDarkMode
                        ? 'bg-slate-900/60 bg-white/5 text-slate-300 border border-white/10 hover:border-cyan-400/50 hover:text-cyan-300 hover:bg-slate-800/70'
                        : 'bg-[#1e293b]/75 text-white border border-slate-700/30 hover:border-cyan-400/50 hover:text-cyan-300 hover:bg-[#0f172a]/85'
                  }`}
                >
                  <span>{cat.label}</span>
                </button>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

      {/* 3. Showcase Gallery Section (Conditionally Mounted with AnimatePresence mode="wait") */}
      <AnimatePresence mode="wait">
        {currentData && (
          <motion.div
            key={currentData.key}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15, transition: { duration: 0.25 } }}
            transition={{ duration: 0.45, ease: MOTION_CONFIG.ease }}
            className="w-full mt-8"
          >
            {/* Header above cards */}
            <div className={`flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b transition-colors duration-300 ${
              isDarkMode ? 'border-white/10' : 'border-slate-400/30'
            }`}>
              <div className="flex items-center gap-3">
                <span className="w-1.5 h-6 bg-[#00f0ff] rounded-full" />
                <h3 className={`text-xl sm:text-2xl font-bold tracking-wide uppercase font-mono transition-colors duration-300 ${
                  isDarkMode ? 'text-white' : 'text-[#0f172a]'
                }`}>
                  {currentData.galleryTitle}
                </h3>
              </div>

              <div className="flex items-center gap-3">
                <span className="px-3 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-400/30 text-cyan-300 text-xs font-semibold tracking-wider uppercase">
                  {currentData.counterBadge}
                </span>
                <button
                  type="button"
                  onClick={() => setActiveCategory(null)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 cursor-pointer ${
                    isDarkMode
                      ? 'bg-white/5 border border-white/15 text-slate-400 hover:text-rose-400 hover:border-rose-400/50 hover:bg-rose-950/20'
                      : 'bg-[#1e293b]/75 border border-slate-700/30 text-white hover:text-rose-400 hover:border-rose-400/50 hover:bg-rose-950/20'
                  }`}
                >
                  CLOSE ✕
                </button>
              </div>
            </div>

            {/* 4. 4-Column Responsive Grid with Continuous Bidirectional Stagger */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.15 }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.08, // 0.08s sequential delay increment per card
                  },
                },
              }}
            >
              {currentData.cards.map((card) => (
                <motion.div
                  key={card.id}
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: 30,
                      scale: 0.98,
                    },
                    visible: {
                      opacity: 1,
                      y: 0,
                      scale: 1,
                      transition: {
                        duration: 0.5,
                        ease: MOTION_CONFIG.ease,
                      },
                    },
                  }}
                  style={{ willChange: 'transform, opacity' }}
                  onClick={() => handlePlayCard(card)}
                  className={`group relative flex flex-col rounded-2xl overflow-hidden cursor-pointer backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 select-none ${
                    isDarkMode
                      ? 'bg-[#0a1120]/90 border border-[#00f0ff]/20 shadow-[0_0_20px_rgba(0,240,255,0.05)] hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(0,240,255,0.35)]'
                      : 'bg-[#1e293b]/75 border border-slate-700/30 shadow-xl hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(0,240,255,0.35)]'
                  }`}
                >
                  {/* Media Header with Background Looped Video */}
                  <div className="relative w-full h-56 bg-slate-950 overflow-hidden flex items-center justify-center">
                    {/* Background Preview Video (10s loop, muted, playsinline) */}
                    <video
                      src={card.videoUrl}
                      poster={card.thumb}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 pointer-events-none"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#070e17] via-transparent to-black/40 pointer-events-none" />

                    {/* Top Micro-Badges */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 z-10 pointer-events-none">
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-black/75 border border-cyan-400/50 text-cyan-300 backdrop-blur-md">
                        {card.badges[0]}
                      </span>
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-cyan-950/80 border border-cyan-400/40 text-white backdrop-blur-md">
                        {card.badges[1]}
                      </span>
                    </div>

                    {/* Center Glowing Play Button */}
                    <div className="relative z-10 w-12 h-12 rounded-full bg-cyan-400/90 text-slate-950 flex items-center justify-center shadow-[0_0_20px_rgba(0,240,255,0.6)] group-hover:scale-115 group-hover:bg-[#00f0ff] group-hover:shadow-[0_0_30px_rgba(0,240,255,0.9)] transition-all duration-300">
                      <svg className="w-5 h-5 fill-current ml-0.5" viewBox="0 0 24 24">
                        <polygon points="6 4 20 12 6 20 6 4" />
                      </svg>
                    </div>
                  </div>

                  {/* Card Content Container */}
                  <div className="flex flex-col flex-grow p-5">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#00f0ff] mb-1.5 font-mono">
                      {card.format}
                    </span>
                    <h4 className="text-base font-bold text-white mb-2 leading-snug group-hover:text-cyan-200 transition-colors">
                      {card.title}
                    </h4>
                    <p className={`text-xs leading-relaxed line-clamp-3 mb-4 flex-grow transition-colors duration-300 ${
                      isDarkMode ? 'text-[#94a3b8]' : 'text-slate-300'
                    }`}>
                      {card.desc}
                    </p>

                    {/* Action CTA */}
                    <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-bold text-[#00f0ff] tracking-wider">
                      <span className="group-hover:text-white transition-colors">
                        WATCH PREVIEW
                      </span>
                      <span className="transform transition-transform duration-300 group-hover:translate-x-1.5">
                        →
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Fallback In-Component Modal if external video modal is not available */}
      {activeModalVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          onClick={() => setActiveModalVideo(null)}
        >
          <div
            className="relative w-full max-w-4xl bg-slate-900 border border-cyan-400/40 rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-slate-950/60">
              <div>
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                  {activeModalVideo.format}
                </span>
                <h3 className="text-lg font-bold text-white">
                  {activeModalVideo.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setActiveModalVideo(null)}
                className="p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-full transition-colors cursor-pointer"
              >
                ✕
              </button>
            </div>
            <div className="relative w-full aspect-video bg-black">
              <video
                src={activeModalVideo.url}
                autoPlay
                controls
                playsInline
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      )}
      </div>
    </div>
  );
}
