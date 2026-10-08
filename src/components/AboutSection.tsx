import React from 'react';
import { motion } from 'framer-motion';
import AboutPortraitCard from './AboutPortraitCard';
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
  MOTION_CONFIG,
} from './MotionWrappers';

/**
 * AboutSection Component
 * 
 * "02 // ABOUT & SKILLS"
 * Features:
 * - High-impact 2-column desktop layout: Bio Text on Left (col-span-7), Profile Card/VFX on Right (col-span-5)
 * - Neatly contained glassmorphic portrait frame with dark gradient masks to avoid full-width background bleed
 * - Continuous bidirectional scroll triggers (viewport: { once: false, amount: 0.2 })
 * - 4 Core specialized workflow pillars with animated progress bars
 * - Layered z-index hierarchy ensuring high contrast and clean text readability
 */
export default function AboutSection() {
  const competencies = [
    { title: 'Post-Production & Color Science', desc: 'Editing, Videography, ACES', percent: 85 },
    { title: 'Brand & Visual Design', desc: 'Design, Photography, Visual Direction', percent: 85 },
    { title: 'AI Architecture & Web Dev', desc: 'AI Workflows, Web Systems', percent: 80 },
    { title: '3D Procedural & VFX', desc: 'Blender, C4D, Compositing', percent: 60 },
  ];

  return (
    <section id="about" className="relative z-10 py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* 1. Section Header: Bidirectional Reveal */}
      <ScrollReveal direction="down" duration={0.5} className="text-center max-w-3xl mx-auto mb-16 relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00E5FF]/10 border border-[#00E5FF]/30 backdrop-blur-md text-[#00E5FF] font-mono text-xs tracking-wider uppercase mb-4 shadow-[0_0_15px_rgba(0,229,255,0.15)]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#00E5FF] animate-pulse" />
          CREATIVE DIRECTION &amp; MULTIMEDIA
        </div>
        <div className="font-mono text-xs text-slate-400 tracking-widest uppercase mb-2">
          02 // ABOUT &amp; SKILLS
        </div>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4 drop-shadow-[0_2px_20px_rgba(0,0,0,0.8)]">
          ABOUT ADAM BIYADI
        </h2>
        <p className="text-slate-300 text-sm md:text-base leading-relaxed">
          Bridging high-impact cinematic filmmaking with procedural 3D art and mathematical ACES color science to forge unforgettable visual worlds.
        </p>
      </ScrollReveal>

      {/* 2. 2-Column Split Layout: Bio Text on Left, Profile Card on Right */}
      <StaggerContainer
        staggerChildren={0.08}
        className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch relative z-10"
      >
        {/* Left Column (lg:col-span-7): Bio & Core Competencies */}
        <div className="lg:col-span-7 flex flex-col gap-6 justify-between order-1">
          {/* Director's Statement Card */}
          <StaggerItem direction="left">
            <div className="relative rounded-2xl md:rounded-3xl bg-black/40 backdrop-blur-xl border border-white/10 p-6 md:p-8 shadow-xl transition-all duration-300 hover:border-white/20">
              <div className="font-mono text-[11px] text-[#00E5FF] tracking-widest uppercase mb-2">
                DIRECTOR'S STATEMENT
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-white tracking-tight mb-4">
                CINEMATIC INTENTION &amp; BESPOKE PIPELINES
              </h3>
              <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                Every frame is crafted with discipline and intention. Rather than relying on generic editing presets or automated templates, I architect{' '}
                <strong className="text-white font-medium">bespoke end-to-end production pipelines</strong>—seamlessly merging physical camera cinematography with{' '}
                <strong className="text-[#00E5FF] font-medium">procedural 3D art</strong> and mathematical{' '}
                <strong className="text-[#00E5FF] font-medium">ACES color science</strong>. Collaborating with visionary brands, directors, and cultural labels, my directive is singular: transform complex narratives into polished, high-impact visual stories that command attention and stand the test of time.
              </p>
            </div>
          </StaggerItem>

          {/* Core Competencies Card with Bidirectional Staggered Skills */}
          <StaggerItem direction="up">
            <div className="relative rounded-2xl md:rounded-3xl bg-black/40 backdrop-blur-xl border border-white/10 p-6 md:p-8 shadow-xl transition-all duration-300 hover:border-white/20">
              <div className="flex items-center justify-between gap-4 mb-4">
                <div>
                  <div className="font-mono text-[11px] text-[#00E5FF] tracking-widest uppercase mb-1">
                    CORE COMPETENCIES
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-white tracking-tight">
                    SPECIALIZED WORKFLOWS &amp; CAPABILITIES
                  </h3>
                </div>
                <span className="hidden sm:inline-flex px-3 py-1 rounded-full bg-white/5 border border-white/10 font-mono text-[10px] tracking-wider text-slate-300 uppercase">
                  4 CORE PILLARS
                </span>
              </div>

              <StaggerContainer staggerChildren={0.08} className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                {competencies.map((comp) => (
                  <StaggerItem key={comp.title} direction="up" distance={20}>
                    <div className="rounded-xl bg-white/[0.03] border border-white/5 p-4 transition-all duration-300 hover:border-white/15 group/skill">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <div>
                          <div className="text-sm font-medium text-white">{comp.title}</div>
                          <div className="text-xs text-slate-400 mt-0.5">{comp.desc}</div>
                        </div>
                        <span className="font-mono text-xs text-[#00E5FF] font-semibold">
                          {comp.percent}%
                        </span>
                      </div>
                      <div className="w-full h-1.5 rounded-full bg-white/10 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${comp.percent}%` }}
                          viewport={{ once: false, amount: 0.2 }}
                          transition={{ duration: 0.6, ease: MOTION_CONFIG.ease, delay: 0.1 }}
                          className="h-full bg-gradient-to-r from-[#00E5FF]/70 to-[#00E5FF] rounded-full shadow-[0_0_8px_rgba(0,229,255,0.7)]"
                          style={{ willChange: 'width' }}
                        />
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </StaggerItem>
        </div>

        {/* Right Column (lg:col-span-5): Contained Glassmorphic Portrait Frame */}
        <StaggerItem direction="right" className="lg:col-span-5 h-full min-h-[460px] flex flex-col justify-center order-2">
          <AboutPortraitCard />
        </StaggerItem>
      </StaggerContainer>
    </section>
  );
}
