import { useState } from 'react';
import svgPaths from "../../imports/Html→Body/svg-pwbnva2dtm";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToRegistration = () => {
    document.getElementById('registration')?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full backdrop-blur-md bg-white/80 border-b border-[#f1f5f9] z-50">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-12 h-14 md:h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 md:gap-3">
          <div className="w-4 h-4 md:w-[18px] md:h-[18px]">
            <svg className="w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
              <path d={svgPaths.p4c2b800} fill="#2DD4BF" />
            </svg>
          </div>
          <span className="text-[#0f172a] text-base md:text-xl font-bold tracking-tight">DAMA Bolivia</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex gap-6 xl:gap-8">
          <button onClick={() => scrollToSection('inicio')} className="text-[#14b8a6] font-bold text-base border-b-2 border-[#14b8a6] pb-1">Inicio</button>
          <button onClick={() => scrollToSection('speakers')} className="text-[#475569] font-medium text-base hover:text-[#14b8a6] transition-colors">Speakers</button>
          <button onClick={() => scrollToSection('registration')} className="text-[#475569] font-medium text-base hover:text-[#14b8a6] transition-colors">Registro</button>
        </nav>

        {/* Desktop CTA Button */}
        <button
          onClick={scrollToRegistration}
          className="hidden sm:block bg-[#00e699] text-[#00613e] px-4 md:px-6 py-1.5 md:py-2 rounded-full font-normal text-sm md:text-base hover:bg-[#00d68a] transition-colors"
        >
          Regístrate
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-[#0f172a]"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-[#f1f5f9] shadow-lg">
          <nav className="flex flex-col p-4 space-y-3">
            <button onClick={() => scrollToSection('inicio')} className="text-[#14b8a6] font-bold text-base text-left py-2">Inicio</button>
            <button onClick={() => scrollToSection('speakers')} className="text-[#475569] font-medium text-base text-left py-2">Speakers</button>
            <button onClick={() => scrollToSection('registration')} className="text-[#475569] font-medium text-base text-left py-2">Registro</button>
            <button
              onClick={scrollToRegistration}
              className="bg-[#00e699] text-[#00613e] px-4 py-2 rounded-full font-normal text-center mt-2"
            >
              Regístrate Ahora
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
