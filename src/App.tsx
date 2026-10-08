import AboutSection from './components/AboutSection';
import ProductionSuite from './components/ProductionSuite';
import ServiceScopeShowcase from './components/ServiceScopeShowcase';
import ContactSection from './components/ContactSection';

export default function App() {
  return (
    <div className="min-h-screen bg-[#05070B] text-slate-100 font-sans selection:bg-[#00E5FF]/30 selection:text-white relative overflow-x-hidden">
      {/* Ambient Cyber Mesh Gradient Backgrounds */}
      <div
        className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(0,229,255,0.15),rgba(255,255,255,0))]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none fixed bottom-0 right-0 z-0 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(0,229,255,0.06)_0%,transparent_70%)] blur-3xl"
        aria-hidden="true"
      />

      {/* Main Portfolio Sections */}
      <div className="relative z-10">
        {/* Sticky Executive Notification / Direction Bar */}
        <header className="w-full border-b border-white/10 bg-[#05070B]/80 backdrop-blur-xl sticky top-0 z-40 px-4 sm:px-8 py-3.5">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#00E5FF] animate-pulse shadow-[0_0_8px_#00E5FF]" />
              <span className="font-mono text-xs sm:text-sm font-bold tracking-widest uppercase text-white">
                ADAM BIYADI <span className="text-[#00E5FF]">//</span> DIRECTIVE
              </span>
            </div>
            <div className="flex items-center gap-4 text-xs font-mono text-slate-400">
              <span className="hidden sm:inline-block px-2.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-400/30 text-cyan-300">
                CONTINUOUS BIDIRECTIONAL SCROLL ACTIVE
              </span>
              <a
                href="#contact"
                className="px-3 py-1.5 rounded-full bg-[#00E5FF]/15 hover:bg-[#00E5FF] text-[#00E5FF] hover:text-black font-semibold border border-[#00E5FF]/40 transition-all duration-200"
              >
                CONNECT ↗
              </a>
            </div>
          </div>
        </header>

        {/* Section 02: About & Specialized Pillars */}
        <AboutSection />

        {/* Section 02B: Production Suite & Pipeline Arsenal */}
        <ProductionSuite />

        {/* Section 03: Service Scope Explorer Gallery */}
        <section className="relative py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <ServiceScopeShowcase />
        </section>

        {/* Section 05: Contact & Executive Collaborations */}
        <ContactSection />
      </div>
    </div>
  );
}
