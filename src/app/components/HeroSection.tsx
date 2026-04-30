import svgPaths from "../../imports/Html→Body/svg-pwbnva2dtm";

export function HeroSection() {
  const scrollToRegistration = () => {
    document.getElementById('registration')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="inicio" className="bg-white pt-20 sm:pt-24 md:pt-32 lg:pt-48 pb-12 sm:pb-16 md:pb-20 lg:pb-32 px-4 sm:px-6 md:px-12 relative overflow-hidden">
      {/* Background gradients */}
      <div
        className="absolute inset-0 opacity-100"
        style={{
          backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\"0 0 780 796.59\" xmlns=\"http://www.w3.org/2000/svg\" preserveAspectRatio=\"none\"><rect x=\"0\" y=\"0\" height=\"100%\" width=\"100%\" fill=\"url(%23grad)\" opacity=\"1\"/><defs><radialGradient id=\"grad\" gradientUnits=\"userSpaceOnUse\" cx=\"0\" cy=\"0\" r=\"10\" gradientTransform=\"matrix(55.154 0 0 56.327 390 398.3)\"><stop stop-color=\"rgba(0,108,70,0.05)\" offset=\"0.070711\"/><stop stop-color=\"rgba(0,108,70,0)\" offset=\"0.070711\"/></radialGradient></defs></svg>')"
        }}
      />
      <div className="absolute bg-[rgba(0,108,70,0.05)] blur-[48px] md:blur-[64px] h-[300px] md:h-[500px] left-[30%] md:left-[45%] right-[-20%] md:right-[-10%] top-10 md:top-20 rounded-full" />

      <div className="max-w-[896px] mx-auto relative z-10">
        {/* Badge */}
        <div className="flex items-center gap-2 bg-[#bfe9ff] px-2 sm:px-3 py-1 rounded-full w-fit mb-4 sm:mb-6">
          <div className="w-3 h-3 sm:w-[13.5px] sm:h-[15px]">
            <svg className="w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5 15">
              <path d={svgPaths.p3b95cda0} fill="#41697C" />
            </svg>
          </div>
          <span className="text-[#41697c] text-xs sm:text-sm md:text-base font-normal">Lunes | Typica Coffee, La Paz</span>
        </div>

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-6">
          <span className="text-[#006c46]">Cerrando la Brecha:</span><br />
          <span className="text-[#3b6376]">Gobernanza de Datos Ágil</span><br />
          <span className="text-[#006c46]">para una Operativización</span><br />
          <span className="text-[#006c46]">Tecnológica Real</span>
        </h1>

        {/* Description */}
        <p className="text-[#3b4a40] text-base sm:text-lg leading-relaxed mb-6 sm:mb-8 max-w-[672px]">
          Acompáñanos este lunes en un evento exclusivo para líderes de datos. Descubre
          cómo transformar la gobernanza en un motor de innovación real.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
          <button
            onClick={scrollToRegistration}
            className="bg-[#00e699] text-[#00613e] px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-normal flex items-center justify-center gap-2 hover:bg-[#00d68a] transition-colors text-sm sm:text-base"
          >
            <span>Regístrate Ahora</span>
            <div className="w-3 h-3 sm:w-4 sm:h-4">
              <svg className="w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                <path d={svgPaths.p1a406200} fill="#00613E" />
              </svg>
            </div>
          </button>
          <button className="border-2 border-[#3b6376] text-[#3b6376] px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-normal hover:bg-[#3b6376]/5 transition-colors text-sm sm:text-base">
            Ver Agenda
          </button>
        </div>
      </div>
    </section>
  );
}
