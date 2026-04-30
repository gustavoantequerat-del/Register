import svgPaths from "../../imports/Html→Body/svg-pwbnva2dtm";

export function Footer() {
  return (
    <footer className="bg-[#0f172a] border-t-4 border-[#2dd4bf] py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-12">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
          {/* Left Column */}
          <div className="space-y-4 sm:space-y-6">
            <p className="text-[#2dd4bf] text-sm sm:text-base tracking-[1.6px] uppercase font-bold">DAMA BOLIVIA CHAPTER</p>

            <p className="text-[#94a3b8] text-xs sm:text-sm leading-relaxed">
              © 2024 DAMA Bolivia Chapter. Gobernanza de Datos Ágil.
            </p>

            {/* Social Links */}
            <div className="flex gap-4 sm:gap-6 items-center flex-wrap">
              <a href="#" className="flex items-center gap-2 text-[#94a3b8] hover:text-[#2dd4bf] transition-colors">
                <div className="w-3.5 h-3.5 sm:w-4 sm:h-4">
                  <svg className="w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 16.6667">
                    <path d={svgPaths.p1e78c320} fill="currentColor" />
                  </svg>
                </div>
                <span className="text-sm sm:text-base">LinkedIn</span>
              </a>

              <a href="#" className="flex items-center gap-2 text-[#94a3b8] hover:text-[#2dd4bf] transition-colors">
                <div className="w-3.5 h-3.5 sm:w-4 sm:h-4">
                  <svg className="w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 16.6667">
                    <path d={svgPaths.p9b76400} fill="currentColor" />
                  </svg>
                </div>
                <span className="text-sm sm:text-base">YouTube</span>
              </a>
            </div>
          </div>

          {/* Right Column - Links */}
          <div className="flex gap-4 sm:gap-6 md:gap-8 justify-start md:justify-end items-start flex-wrap">
            <a href="#" className="text-[#94a3b8] text-xs sm:text-sm hover:text-[#2dd4bf] transition-colors">Privacidad</a>
            <a href="#" className="text-[#94a3b8] text-xs sm:text-sm hover:text-[#2dd4bf] transition-colors">Contacto</a>
            <a href="#" className="text-[#94a3b8] text-xs sm:text-sm hover:text-[#2dd4bf] transition-colors whitespace-nowrap">Eventos Anteriores</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
