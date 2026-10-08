import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  CheckCircle2,
  Zap,
} from 'lucide-react';
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
  MOTION_CONFIG,
} from './MotionWrappers';

const PRODUCTION_TOOLS = [
  {
    id: 'davinci-resolve',
    name: 'DaVinci Resolve Studio',
    category: 'color_post',
    categoryLabel: 'Color & Post',
    role: 'ACES Color Science & Cinema Mastering',
    badge: 'PIPELINE CORE',
    badgeColor: '#00E5FF',
    proficiency: 98,
    highlight: 'Film Print Emulation • HDR Dolby Vision',
    specPill: 'ACES 1.3 REC.709 & HDR',
    brandColor: '#EC5E2A',
    description:
      'Primary color grading engine utilizing DaVinci Wide Gamut, mathematical LUT transforms, spatial noise reduction, and custom nodal grade architectures.',
    tags: ['Color Grading', 'ACEScg', 'Dolby Vision', 'Node Trees'],
    iconSvg: (
      <svg viewBox="0 0 100 100" className="w-full h-full fill-current" aria-label="DaVinci Resolve Logo">
        <circle cx="50" cy="50" r="46" fill="#111827" stroke="rgba(255,255,255,0.15)" strokeWidth="2" />
        <path d="M50 18 C58 18 67 24 70 32 C62 36 52 38 43 45 C41 33 44 22 50 18 Z" fill="#EC5E2A" />
        <path d="M74 48 C76 56 73 66 65 72 C60 63 54 55 45 50 C56 46 68 46 74 48 Z" fill="#00B4D8" />
        <path d="M38 72 C30 68 26 59 28 50 C36 53 45 57 52 65 C45 71 39 72 38 72 Z" fill="#EAB308" />
        <circle cx="50" cy="50" r="7" fill="#FFFFFF" opacity="0.9" />
      </svg>
    ),
  },
  {
    id: 'premiere-pro',
    name: 'Adobe Premiere Pro',
    category: 'color_post',
    categoryLabel: 'Color & Post',
    role: 'Non-Linear Editing & Narrative Assembly',
    badge: 'EXPERT LEVEL',
    badgeColor: '#9999FF',
    proficiency: 96,
    highlight: 'Commercial Pacing • High-Velocity Micro-Cuts',
    specPill: 'PRORES 422 HQ • MULTI-CAM',
    brandColor: '#9999FF',
    description:
      'High-velocity timeline cutting, multi-channel dialogue editing, dynamic link roundtrips, and retention-engineered narrative pacing.',
    tags: ['NLE Editing', 'Sound Design', 'Dynamic Link', 'Multi-Camera'],
    iconSvg: (
      <svg viewBox="0 0 100 100" className="w-full h-full" aria-label="Adobe Premiere Pro Logo">
        <rect width="100" height="100" rx="22" fill="#00005B" />
        <text
          x="50%"
          y="62%"
          textAnchor="middle"
          fill="#9999FF"
          fontFamily="ui-sans-serif, system-ui, -apple-system, sans-serif"
          fontWeight="800"
          fontSize="48"
          letterSpacing="-2"
        >
          Pr
        </text>
      </svg>
    ),
  },
  {
    id: 'blender-3d',
    name: 'Blender 3D Suite',
    category: '3d_vfx',
    categoryLabel: '3D & VFX',
    role: 'Procedural 3D & Camera Motion Tracking',
    badge: 'PIPELINE CORE',
    badgeColor: '#00E5FF',
    proficiency: 93,
    highlight: 'Cycles Photorealism • Geometry Nodes',
    specPill: 'OPTIX ACCELERATED • 3D TRACK',
    brandColor: '#EA7600',
    description:
      'Nodal procedural texturing, 3D point cloud camera solves, rigid body physics simulations, and seamless CGI element compositing.',
    tags: ['Geometry Nodes', 'Cycles Engine', 'Face Tracking', 'Photoreal 3D'],
    iconSvg: (
      <svg viewBox="0 0 100 100" className="w-full h-full" aria-label="Blender 3D Logo">
        <rect width="100" height="100" rx="22" fill="#0e1726" />
        <circle cx="50" cy="52" r="18" fill="#EA7600" />
        <circle cx="50" cy="52" r="10" fill="#225C99" />
        <path d="M50 20 L50 34" stroke="#EA7600" strokeWidth="7" strokeLinecap="round" />
        <path d="M22 68 L34 59" stroke="#EA7600" strokeWidth="7" strokeLinecap="round" />
        <path d="M78 68 L66 59" stroke="#EA7600" strokeWidth="7" strokeLinecap="round" />
        <circle cx="50" cy="52" r="4.5" fill="#FFFFFF" />
      </svg>
    ),
  },
  {
    id: 'after-effects',
    name: 'Adobe After Effects',
    category: '3d_vfx',
    categoryLabel: '3D & VFX',
    role: 'Motion Design & Multi-Pass Compositing',
    badge: 'EXPERT LEVEL',
    badgeColor: '#9999FF',
    proficiency: 95,
    highlight: 'Mocha Planar Tracking • Screen Replacements',
    specPill: '32-BIT FLOAT • OPENEXR',
    brandColor: '#9999FF',
    description:
      'Complex nodal compositing, optical flares, kinetic title typography, planar clean-plate reconstructions, and visual effects finishing.',
    tags: ['VFX Compositing', 'Kinetic Type', 'Mocha Tracking', 'Color Pass'],
    iconSvg: (
      <svg viewBox="0 0 100 100" className="w-full h-full" aria-label="Adobe After Effects Logo">
        <rect width="100" height="100" rx="22" fill="#00005B" />
        <text
          x="50%"
          y="62%"
          textAnchor="middle"
          fill="#D291FF"
          fontFamily="ui-sans-serif, system-ui, -apple-system, sans-serif"
          fontWeight="800"
          fontSize="48"
          letterSpacing="-2"
        >
          Ae
        </text>
      </svg>
    ),
  },
  {
    id: 'photoshop',
    name: 'Adobe Photoshop',
    category: 'design_ai',
    categoryLabel: 'Design & AI',
    role: 'High-End Retouching & Key Art Direction',
    badge: 'EXPERT LEVEL',
    badgeColor: '#31A8FF',
    proficiency: 97,
    highlight: 'Frequency Separation • Luxury Lookbooks',
    specPill: '16-BIT PROPHOTO • MATTE ART',
    brandColor: '#31A8FF',
    description:
      'Commercial beauty frequency separation, high-resolution key visual matte paintings, digital composite art, and billboard campaign rendering.',
    tags: ['Key Art', 'Frequency Retouch', 'Matte Painting', 'Lookbooks'],
    iconSvg: (
      <svg viewBox="0 0 100 100" className="w-full h-full" aria-label="Adobe Photoshop Logo">
        <rect width="100" height="100" rx="22" fill="#001E36" />
        <text
          x="50%"
          y="62%"
          textAnchor="middle"
          fill="#31A8FF"
          fontFamily="ui-sans-serif, system-ui, -apple-system, sans-serif"
          fontWeight="800"
          fontSize="48"
          letterSpacing="-2"
        >
          Ps
        </text>
      </svg>
    ),
  },
  {
    id: 'illustrator',
    name: 'Adobe Illustrator',
    category: 'design_ai',
    categoryLabel: 'Design & AI',
    role: 'Vector Identity Systems & Typographic Books',
    badge: 'EXPERT LEVEL',
    badgeColor: '#FF9A00',
    proficiency: 92,
    highlight: 'Modular Logotypes • Brand Design Systems',
    specPill: 'VECTOR RESOLUTION-INDEPENDENT',
    brandColor: '#FF9A00',
    description:
      'Mathematical vector architecture, geometric icon sets, enterprise typography hierarchy rules, and print-ready packaging die-lines.',
    tags: ['Vector Marks', 'Brand Guidelines', 'Typography', 'Iconography'],
    iconSvg: (
      <svg viewBox="0 0 100 100" className="w-full h-full" aria-label="Adobe Illustrator Logo">
        <rect width="100" height="100" rx="22" fill="#330000" />
        <text
          x="50%"
          y="62%"
          textAnchor="middle"
          fill="#FF9A00"
          fontFamily="ui-sans-serif, system-ui, -apple-system, sans-serif"
          fontWeight="800"
          fontSize="48"
          letterSpacing="-2"
        >
          Ai
        </text>
      </svg>
    ),
  },
  {
    id: 'obs-studio',
    name: 'OBS Studio Professional',
    category: '3d_vfx',
    categoryLabel: '3D & VFX',
    role: 'Lossless Live Capture & Virtual Production',
    badge: 'PIPELINE CORE',
    badgeColor: '#00E5FF',
    proficiency: 95,
    highlight: 'NDI Low-Latency • Uncompressed Master Feed',
    specPill: '60FPS LOSSLESS NVENC',
    brandColor: '#FFFFFF',
    description:
      'Multi-source broadcast switching, ASIO multichannel audio routing, hardware NVENC lossless recording for studio playback and client monitoring.',
    tags: ['Live Capture', 'Virtual Camera', 'Low-Latency NDI', 'Broadcast'],
    iconSvg: (
      <svg viewBox="0 0 100 100" className="w-full h-full" aria-label="OBS Studio Logo">
        <rect width="100" height="100" rx="22" fill="#1e2530" />
        <circle cx="50" cy="50" r="32" fill="none" stroke="#FFFFFF" strokeWidth="4" opacity="0.2" />
        <path d="M50 28 C56 28 62 33 63 39 C56 41 51 47 48 53 C43 47 43 38 50 28 Z" fill="#FFFFFF" />
        <path d="M68 56 C68 62 63 68 57 69 C55 62 49 57 43 54 C49 49 58 49 68 56 Z" fill="#FFFFFF" />
        <path d="M38 64 C32 60 30 52 33 46 C38 51 45 53 52 51 C48 58 43 64 38 64 Z" fill="#FFFFFF" />
      </svg>
    ),
  },
  {
    id: 'midjourney-ai',
    name: 'Midjourney & AI Diffusion',
    category: 'design_ai',
    categoryLabel: 'Design & AI',
    role: 'Generative Concept Ideation & Style Exploration',
    badge: 'AI ACCELERATOR',
    badgeColor: '#00E5FF',
    proficiency: 95,
    highlight: 'Rapid Moodboarding • Style Matrix Seeds',
    specPill: 'LATENT DIFFUSION • V6 DUAL-PASS',
    brandColor: '#00E5FF',
    description:
      'High-velocity creative direction ideation, cinematic framing exploration, texture synthesis, and custom prompt parameter tuning for pre-production.',
    tags: ['AI Ideation', 'Moodboards', 'Texture Synthesis', 'Pre-Production'],
    iconSvg: (
      <svg viewBox="0 0 100 100" className="w-full h-full" aria-label="Midjourney Logo">
        <rect width="100" height="100" rx="22" fill="#08101e" />
        <path
          d="M50 18 L76 76 L50 64 L24 76 Z"
          fill="none"
          stroke="#00E5FF"
          strokeWidth="6"
          strokeLinejoin="round"
        />
        <line x1="50" y1="18" x2="50" y2="64" stroke="#00E5FF" strokeWidth="5" />
        <circle cx="50" cy="40" r="5" fill="#FFFFFF" />
      </svg>
    ),
  },
];

const CATEGORIES = [
  { key: 'all', label: 'ALL TOOLS', count: 8 },
  { key: 'color_post', label: 'COLOR & POST', count: 2 },
  { key: '3d_vfx', label: '3D & VFX', count: 3 },
  { key: 'design_ai', label: 'DESIGN & AI', count: 3 },
];

export default function ProductionSuite() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedTool, setSelectedTool] = useState(null);

  const filteredTools =
    activeCategory === 'all'
      ? PRODUCTION_TOOLS
      : PRODUCTION_TOOLS.filter((tool) => tool.category === activeCategory);

  return (
    <section id="pipeline" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Ambient Cyber Background Accents */}
      <div
        className="pointer-events-none absolute -top-40 right-10 w-96 h-96 bg-[#00E5FF]/10 blur-[120px] rounded-full"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-32 left-10 w-80 h-80 bg-blue-600/10 blur-[100px] rounded-full"
        aria-hidden="true"
      />

      {/* 1. Section Header (Continuous Bidirectional Entrance) */}
      <ScrollReveal direction="down" duration={0.5} className="text-center max-w-3xl mx-auto mb-14">
        {/* Top Glowing Cyan Pill */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-400/40 backdrop-blur-md text-[#00E5FF] font-mono text-xs tracking-widest uppercase mb-4 shadow-[0_0_20px_rgba(0,229,255,0.2)]">
          <span className="w-2 h-2 rounded-full bg-[#00E5FF] animate-pulse shadow-[0_0_8px_#00E5FF]" />
          <span>ENTERPRISE SUITE &amp; PIPELINE</span>
        </div>

        <div className="font-mono text-xs text-slate-400 tracking-widest uppercase mb-2">
          02B // PRODUCTION SOFTWARE ARSENAL
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white font-mono drop-shadow-md leading-tight mb-4">
          PRODUCTION SUITE <span className="text-[#00E5FF]">//</span> HARDWARE &amp; PIPELINE
        </h2>

        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          An elite, calibrated creative suite combining Hollywood-grade ACES color science, procedural 3D motion tracking, high-performance visual effects, and accelerated generative AI tools.
        </p>
      </ScrollReveal>

      {/* 2. Interactive Category Filter Tabs */}
      <ScrollReveal direction="up" delay={0.1} duration={0.45} className="flex justify-center mb-12">
        <div className="flex flex-wrap items-center justify-center gap-2.5 p-1.5 rounded-full bg-[#090d16]/80 border border-white/10 backdrop-blur-xl shadow-lg">
          {CATEGORIES.map((tab) => {
            const isActive = activeCategory === tab.key;
            return (
              <button
                key={tab.key}
                type="button"
                onClick={() => setActiveCategory(tab.key)}
                className={`relative px-4 sm:px-5 py-2 rounded-full text-xs font-mono font-semibold tracking-wider uppercase transition-all duration-300 flex items-center gap-2 cursor-pointer outline-none select-none ${
                  isActive
                    ? 'bg-[#00E5FF] text-black font-extrabold shadow-[0_0_20px_rgba(0,229,255,0.6)]'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                <span>{tab.label}</span>
                <span
                  className={`px-1.5 py-0.5 rounded-full text-[10px] font-bold ${
                    isActive ? 'bg-black/20 text-black' : 'bg-white/10 text-slate-400'
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>
      </ScrollReveal>

      {/* 3. 4-Column Responsive Grid (Bidirectional Staggered Animation) */}
      <StaggerContainer
        key={activeCategory}
        staggerChildren={0.08}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch"
      >
        {filteredTools.map((tool) => (
          <StaggerItem key={tool.id} direction="up" distance={30} className="h-full">
            <div
              onClick={() => setSelectedTool(tool)}
              className="group/card relative h-full flex flex-col justify-between rounded-2xl p-6 bg-[#0d131f]/60 backdrop-blur-lg border border-white/10 hover:border-[#00E5FF]/60 shadow-[0_12px_35px_rgba(0,0,0,0.4)] hover:shadow-[0_0_35px_rgba(0,229,255,0.25)] transition-all duration-400 transform hover:-translate-y-2 cursor-pointer select-none overflow-hidden"
            >
              {/* Top Ambient Corner Glow (Brand Color Accent on Hover) */}
              <div
                className="pointer-events-none absolute -top-16 -right-16 w-36 h-36 rounded-full blur-3xl opacity-0 group-hover/card:opacity-40 transition-opacity duration-500"
                style={{ backgroundColor: tool.brandColor }}
              />

              {/* Specular Top Border Sheen */}
              <div className="pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover/card:via-[#00E5FF]/70 transition-all duration-500" />

              <div>
                {/* Header Row: Tool Icon + Status Badge */}
                <div className="flex items-start justify-between gap-3 mb-5">
                  <div className="relative w-14 h-14 rounded-xl p-2 bg-[#080d16] border border-white/10 group-hover/card:border-[#00E5FF]/50 shadow-inner transition-all duration-300 transform group-hover/card:scale-105 flex items-center justify-center">
                    <div className="w-10 h-10 filter grayscale group-hover/card:grayscale-0 transition-all duration-400">
                      {tool.iconSvg}
                    </div>
                  </div>

                  <div className="flex flex-col items-end gap-1">
                    <span
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase border backdrop-blur-md"
                      style={{
                        borderColor: `${tool.badgeColor}40`,
                        backgroundColor: `${tool.badgeColor}15`,
                        color: tool.badgeColor,
                      }}
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full animate-pulse"
                        style={{ backgroundColor: tool.badgeColor }}
                      />
                      {tool.badge}
                    </span>
                    <span className="text-[10px] font-mono text-slate-400">
                      {tool.proficiency}% Mastery
                    </span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white group-hover/card:text-[#00E5FF] transition-colors duration-300 font-mono mb-1 leading-snug">
                  {tool.name}
                </h3>

                <div className="text-xs font-medium text-cyan-300/90 font-mono mb-3">
                  {tool.role}
                </div>

                <p className="text-xs text-slate-300 leading-relaxed line-clamp-3 mb-5">
                  {tool.description}
                </p>
              </div>

              {/* Footer Section: Specs & Interaction Indicator */}
              <div className="pt-4 border-t border-white/10 mt-auto">
                <div className="flex items-center justify-between text-[11px] font-mono mb-3">
                  <span className="text-slate-400 truncate max-w-[170px]">{tool.specPill}</span>
                  <span className="text-[#00E5FF] group-hover/card:translate-x-1 transition-transform inline-flex items-center gap-0.5 font-bold">
                    DETAILS <span>→</span>
                  </span>
                </div>

                <div className="w-full h-1 rounded-full bg-white/10 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-cyan-500 to-[#00E5FF] rounded-full transition-all duration-700 group-hover/card:shadow-[0_0_10px_#00E5FF]"
                    style={{ width: `${tool.proficiency}%` }}
                  />
                </div>
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>

      {/* 4. Executive Pipeline Architecture Summary Strip */}
      <ScrollReveal direction="up" delay={0.2} duration={0.5} className="mt-14">
        <div className="rounded-2xl p-6 sm:p-8 bg-[#090e18]/80 border border-white/10 backdrop-blur-xl shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#00E5FF]/10 border border-[#00E5FF]/30 flex items-center justify-center text-[#00E5FF] shadow-[0_0_20px_rgba(0,229,255,0.2)] flex-shrink-0">
              <Zap className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white font-mono uppercase tracking-wider">
                ACES &amp; REAL-TIME COLOR PIPELINE GUARANTEE
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 mt-0.5">
                Full dynamic range preservation from camera capture RAW (Sony FX / RED / ARRI) through Blender 3D nodal passes to final master delivery.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 flex-shrink-0">
            <a
              href="#works"
              className="px-5 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-xs font-mono font-bold tracking-wider text-slate-200 hover:text-white transition-colors"
            >
              EXPLORE WORKS
            </a>
            <a
              href="#contact"
              className="px-5 py-2.5 rounded-full bg-[#00E5FF] hover:bg-cyan-300 text-black text-xs font-mono font-bold tracking-wider transition-all shadow-[0_0_20px_rgba(0,229,255,0.4)]"
            >
              HIRE TALENT ↗
            </a>
          </div>
        </div>
      </ScrollReveal>

      {/* 5. Tool Detail Modal / Lightbox */}
      <AnimatePresence>
        {selectedTool && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            onClick={() => setSelectedTool(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: MOTION_CONFIG.ease }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-xl rounded-3xl bg-[#0d131f] border border-[#00E5FF]/40 p-6 sm:p-8 shadow-[0_25px_70px_rgba(0,0,0,0.8)] overflow-hidden"
            >
              <div
                className="pointer-events-none absolute -top-20 -right-20 w-44 h-44 rounded-full blur-3xl opacity-30"
                style={{ backgroundColor: selectedTool.brandColor }}
              />

              <button
                type="button"
                onClick={() => setSelectedTool(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                ✕
              </button>

              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl p-2.5 bg-[#070b13] border border-white/15 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <div className="w-11 h-11">{selectedTool.iconSvg}</div>
                </div>
                <div>
                  <span
                    className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase mb-1 border"
                    style={{
                      borderColor: `${selectedTool.badgeColor}50`,
                      backgroundColor: `${selectedTool.badgeColor}15`,
                      color: selectedTool.badgeColor,
                    }}
                  >
                    {selectedTool.badge}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white font-mono">
                    {selectedTool.name}
                  </h3>
                  <div className="text-xs font-mono text-cyan-300">
                    {selectedTool.role}
                  </div>
                </div>
              </div>

              <div className="space-y-4 text-sm text-slate-300 leading-relaxed mb-6">
                <p>{selectedTool.description}</p>

                <div className="p-4 rounded-xl bg-black/40 border border-white/5 space-y-2">
                  <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                    KEY PIPELINE DELIVERABLE
                  </div>
                  <div className="text-white font-medium text-sm flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#00E5FF] flex-shrink-0" />
                    <span>{selectedTool.highlight}</span>
                  </div>
                  <div className="text-slate-400 text-xs font-mono">
                    Spec: {selectedTool.specPill}
                  </div>
                </div>

                <div>
                  <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                    SPECIALIZED WORKFLOW MODULES
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {selectedTool.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full text-xs font-mono bg-white/5 border border-white/10 text-cyan-200"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div className="text-xs font-mono text-slate-400">
                  Proficiency Rating: <span className="text-[#00E5FF] font-bold">{selectedTool.proficiency}%</span>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedTool(null)}
                  className="px-5 py-2 rounded-full bg-[#00E5FF] text-black text-xs font-mono font-bold tracking-wider hover:bg-cyan-300 transition-colors cursor-pointer"
                >
                  DONE
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
