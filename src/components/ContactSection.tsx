import React, { useState } from 'react';
import {
  MessageSquare,
  Mail,
  Copy,
  Check,
  ArrowUpRight,
  Sparkles,
  Phone,
  MapPin,
  Clock,
  Send,
} from 'lucide-react';
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from './MotionWrappers';

export interface ContactSectionProps {
  className?: string;
  whatsappNumber?: string;
  displayPhone?: string;
  email?: string;
}

/**
 * ContactSection Component
 * "05 // CONNECT & COLLABORATE"
 * 
 * Executive Dark Glassmorphism Contact Hub for Adam Biyadi.
 * Features:
 * - Continuous Bidirectional Scroll Triggering (viewport={{ once: false, amount: 0.2 }})
 * - Direct WhatsApp integration with pre-filled commission inquiry message
 * - Native mailto link opening default mail client
 * - Interactive Copy Email button with 2-second copied state and checkmark feedback
 * - GPU-accelerated transforms, 60FPS fluid scroll, Electric Cyan (#00E5FF) glow
 */
export const ContactSection: React.FC<ContactSectionProps> = ({
  className = '',
  whatsappNumber = '212773186066',
  displayPhone = '+212 773-186066',
  email = 'adambiyadi5@gmail.com',
}) => {
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const [showToast, setShowToast] = useState<boolean>(false);

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Hello%20Adam,%20I%20would%20like%20to%20discuss%20a%20project%20with%20you.`;
  const mailtoUrl = `mailto:${email}?subject=Project%20Inquiry%20-%20Adam%20Biyadi`;

  const handleCopyEmail = async (e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(email);
      } else {
        const textArea = document.createElement('textarea');
        textArea.value = email;
        textArea.style.position = 'fixed';
        textArea.style.left = '-9999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
      }
      setIsCopied(true);
      setShowToast(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
      setTimeout(() => {
        setShowToast(false);
      }, 2500);
    } catch (err) {
      window.location.href = mailtoUrl;
    }
  };

  const handleScrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="contact"
      className={`relative w-full z-10 box-border py-20 md:py-28 px-4 sm:px-8 lg:px-12 bg-[#05070B]/85 backdrop-blur-xl border-t border-white/10 overflow-hidden ${className}`}
    >
      {/* Background Ambient Radial Glows */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[radial-gradient(ellipse_at_center,rgba(0,229,255,0.12)_0%,rgba(0,229,255,0.02)_50%,transparent_70%)] blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-0 left-1/4 w-[400px] h-[200px] bg-[radial-gradient(ellipse_at_center,rgba(0,229,255,0.06)_0%,transparent_70%)] blur-2xl"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center gap-10">
        
        {/* Main Executive Glass Card with Bidirectional Scroll Entrance */}
        <ScrollReveal
          direction="up"
          distance={30}
          duration={0.5}
          className="w-full relative rounded-3xl p-8 sm:p-12 md:p-14 bg-gradient-to-b from-[#0b0f17]/90 to-[#070a10]/95 backdrop-blur-2xl border border-white/10 shadow-[0_24px_70px_rgba(0,0,0,0.6)] hover:border-[#00E5FF]/40 transition-colors duration-500 overflow-hidden group"
        >
          {/* Subtle Top Specular Sheen */}
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:via-[#00E5FF]/60 transition-all duration-500"
            aria-hidden="true"
          />

          {/* Micro Grid Overlay Texture */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.03] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"
            aria-hidden="true"
          />

          {/* Section Subtitle Tag */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md text-[#00E5FF] font-mono text-xs tracking-widest uppercase mb-6 shadow-[0_0_15px_rgba(0,229,255,0.12)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] animate-pulse shadow-[0_0_8px_#00E5FF]" />
            <span>05 // CONNECT &amp; COLLABORATE</span>
          </div>

          {/* Main Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white font-['Orbitron',sans-serif] leading-tight mb-4">
            LET'S BUILD SOMETHING <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-[#00E5FF]">EXTRAORDINARY</span>
          </h2>

          {/* Description */}
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-slate-300 leading-relaxed font-sans mb-10">
            Available for select commissions, executive commercial direction, high-performance web development, and end-to-end bespoke visual storytelling worldwide.
          </p>

          {/* Contact Action Cards / Buttons Grid with Staggered Bidirectional Entrance */}
          <StaggerContainer
            staggerChildren={0.08}
            className="w-full flex flex-col md:flex-row items-stretch md:items-center justify-center gap-4 sm:gap-5 max-w-3xl mx-auto"
          >
            {/* 1. Direct WhatsApp Button */}
            <StaggerItem direction="up" distance={20} className="flex-1">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with Adam Biyadi on WhatsApp"
                className="w-full group/wa relative inline-flex items-center justify-between sm:justify-center gap-3.5 px-6 py-4 rounded-2xl bg-[#00E5FF]/10 hover:bg-[#00E5FF] border border-[#00E5FF]/50 hover:border-[#00E5FF] text-white hover:text-black font-mono text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all duration-300 shadow-[0_0_24px_rgba(0,229,255,0.2)] hover:shadow-[0_0_35px_rgba(0,229,255,0.6)] transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <span className="p-1.5 rounded-lg bg-[#00E5FF]/20 group-hover/wa:bg-black/10 transition-colors">
                    <MessageSquare className="w-4 h-4 text-[#00E5FF] group-hover/wa:text-black transition-colors" />
                  </span>
                  <span className="font-mono">WHATSAPP CHAT</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#00E5FF]/80 group-hover/wa:text-black transition-transform group-hover/wa:translate-x-0.5 group-hover/wa:-translate-y-0.5" />
              </a>
            </StaggerItem>

            {/* 2. Direct Email Mailto Button */}
            <StaggerItem direction="up" distance={20} className="flex-1">
              <a
                href={mailtoUrl}
                aria-label={`Send email to ${email}`}
                className="w-full group/mail relative inline-flex items-center justify-between sm:justify-center gap-3.5 px-6 py-4 rounded-2xl bg-white/[0.05] hover:bg-white/[0.12] border border-white/20 hover:border-[#00E5FF]/60 text-slate-100 hover:text-white font-mono text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_0_25px_rgba(0,229,255,0.25)] transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <div className="flex items-center gap-3 truncate">
                  <span className="p-1.5 rounded-lg bg-white/10 group-hover/mail:bg-[#00E5FF]/20 transition-colors">
                    <Mail className="w-4 h-4 text-[#00E5FF] transition-colors" />
                  </span>
                  <span className="truncate">{email}</span>
                </div>
                <Send className="w-3.5 h-3.5 text-slate-400 group-hover/mail:text-[#00E5FF] transition-transform group-hover/mail:translate-x-0.5" />
              </a>
            </StaggerItem>

            {/* 3. Copy Email Button with 2s State Management */}
            <StaggerItem direction="up" distance={20} className="flex-none">
              <button
                type="button"
                onClick={handleCopyEmail}
                aria-label="Copy email address to clipboard"
                className={`w-full group/copy relative inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl font-mono text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all duration-300 cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0 ${
                  isCopied
                    ? 'bg-emerald-500/20 border-emerald-400 text-emerald-300 shadow-[0_0_20px_rgba(52,211,153,0.3)]'
                    : 'bg-white/[0.04] hover:bg-white/[0.08] border-white/15 hover:border-[#00E5FF]/50 text-slate-300 hover:text-[#00E5FF] shadow-[0_4px_16px_rgba(0,0,0,0.25)]'
                } border`}
              >
                {isCopied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400 animate-in zoom-in-75 duration-200" />
                    <span className="text-emerald-300">COPIED!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-slate-400 group-hover/copy:text-[#00E5FF] transition-colors" />
                    <span>COPY EMAIL</span>
                  </>
                )}
              </button>
            </StaggerItem>
          </StaggerContainer>

          {/* Quick Direct Phone & Operational Details strip */}
          <div className="mt-8 pt-6 border-t border-white/[0.08] flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-xs font-mono text-slate-400">
            <div className="inline-flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-[#00E5FF]" />
              <span className="text-slate-300">{displayPhone}</span>
              <span className="text-slate-500">(Direct / WhatsApp)</span>
            </div>
            <div className="inline-flex items-center gap-2">
              <Clock className="w-3.5 h-3.5 text-[#00E5FF]" />
              <span>Response Time: &lt; 12 Hours</span>
            </div>
            <div className="inline-flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-[#00E5FF]" />
              <span>Status: Open for Q2/Q3 Projects</span>
            </div>
          </div>

        </ScrollReveal>

        {/* Footer Meta Row */}
        <ScrollReveal
          direction="up"
          distance={15}
          duration={0.45}
          className="w-full flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/[0.08] text-xs font-mono text-slate-400"
        >
          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-[#00E5FF]" />
            <span>CASABLANCA • LONDON • NYC</span>
          </div>

          <span>© {new Date().getFullYear()} ADAM BIYADI. ALL RIGHTS RESERVED.</span>

          <a
            href="#hero"
            onClick={handleScrollToTop}
            aria-label="Back to top"
            className="inline-flex items-center gap-1.5 text-slate-400 hover:text-[#00E5FF] transition-colors cursor-pointer group"
          >
            <span>BACK TO TOP</span>
            <span className="transition-transform group-hover:-translate-y-0.5">↑</span>
          </a>
        </ScrollReveal>

      </div>

      {/* Floating Copied Toast */}
      {showToast && (
        <div
          role="status"
          aria-live="polite"
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-[#0b0f17]/95 border border-[#00E5FF]/60 text-white font-mono text-xs shadow-[0_0_25px_rgba(0,229,255,0.35)] backdrop-blur-xl animate-in fade-in slide-in-from-bottom-2 duration-300"
        >
          <Check className="w-3.5 h-3.5 text-[#00E5FF]" />
          <span>Email copied to clipboard: {email}</span>
        </div>
      )}
    </footer>
  );
};

export default ContactSection;
