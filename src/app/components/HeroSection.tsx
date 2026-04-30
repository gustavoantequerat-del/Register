import damaLogo from "../../imports/dama-bolivia-logo.png";

export function HeroSection() {
  const scrollToRegistration = () => {
    document.getElementById('registration')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="inicio" className="relative bg-white min-h-screen flex items-center justify-center px-4 sm:px-6 py-8 sm:py-12 overflow-hidden">
      {/* Decorative Blue Waves - Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-[35%] sm:h-[40%] overflow-hidden pointer-events-none">
        <svg className="absolute bottom-0 w-full h-full" viewBox="0 0 1440 600" preserveAspectRatio="none">
          {/* Wave 1 - Darkest */}
          <path
            d="M0,300 C200,400 400,350 600,380 C800,410 1000,360 1200,390 C1300,405 1400,395 1440,400 L1440,600 L0,600 Z"
            fill="#1e3a8a"
            opacity="1"
          />
          {/* Wave 2 - Medium */}
          <path
            d="M0,350 C200,430 400,400 600,440 C800,480 1000,420 1200,460 C1300,475 1400,465 1440,470 L1440,600 L0,600 Z"
            fill="#1e40af"
            opacity="0.9"
          />
          {/* Wave 3 - Light */}
          <path
            d="M0,420 C200,490 400,460 600,500 C800,540 1000,490 1200,530 C1300,545 1400,535 1440,540 L1440,600 L0,600 Z"
            fill="#3b82f6"
            opacity="0.7"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center space-y-5 sm:space-y-7">
        {/* Invitación Especial Badge */}
        <div className="space-y-1">
          <h3 className="text-[#1e3a8a] text-lg sm:text-xl md:text-2xl font-bold tracking-tight">
            Invitación Especial
          </h3>
        </div>

        {/* CURSO OFICIAL */}
        <div className="space-y-1">
          <h1 className="text-[#1e3a8a] text-2xl sm:text-3xl md:text-4xl font-bold tracking-wide">
            CURSO OFICIAL
          </h1>
        </div>

        {/* CDMP - Grande */}
        <div>
          <h2 className="text-[#60a5fa] text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-wider leading-none">
            CDMP
          </h2>
        </div>

        {/* Pay if You Pass */}
        <div className="pt-2">
          <h3 className="text-[#1e3a8a] text-2xl sm:text-3xl md:text-4xl font-bold italic">
            Pay if You Pass
          </h3>
        </div>

        {/* Description */}
        <div className="max-w-2xl mx-auto px-4 pt-2">
          <p className="text-[#1e3a8a] text-sm sm:text-base md:text-lg leading-relaxed font-medium">
            Certificación Internacional en Administración de Datos<br />
            que valida tus conocimientos globalmente y certifica<br />
            tu experiencia en la gestión de datos
          </p>
        </div>

        {/* Dates - MAR 5 MAY */}
        <div className="flex items-center justify-center gap-3 sm:gap-6 pt-4 sm:pt-6">
          <div className="text-center">
            <div className="text-[#60a5fa] text-4xl sm:text-5xl md:text-6xl font-black">
              MAR
            </div>
          </div>
          <div className="text-[#1e3a8a] text-7xl sm:text-8xl md:text-9xl font-black px-2 sm:px-4">
            5
          </div>
          <div className="text-center">
            <div className="text-[#60a5fa] text-4xl sm:text-5xl md:text-6xl font-black">
              MAY
            </div>
          </div>
        </div>

        {/* Time */}
        <div className="pt-2">
          <p className="text-[#1e3a8a] text-base sm:text-lg md:text-xl font-bold">
            A PARTIR DE LAS 18:00
          </p>
        </div>

        {/* Details */}
        <div className="space-y-2 px-4 pt-4">
          <p className="text-[#1e3a8a] text-xs sm:text-sm md:text-base font-medium">
            Modalidad: Virtual, acceso desde cualquier lugar
          </p>
          <p className="text-[#1e3a8a] text-xs sm:text-sm md:text-base font-medium">
            Plataforma: Google Meet / Zoom
          </p>
        </div>

        {/* Small text */}
        <div className="pt-3 px-4">
          <p className="text-[#1e3a8a]/70 text-xs sm:text-sm">
            Te esperamos en este Curso Típico Ofrecer de alta calidad.
          </p>
        </div>

        {/* CTA Button */}
        <div className="pt-6 sm:pt-8">
          <button
            onClick={scrollToRegistration}
            className="bg-[#1e3a8a] text-white px-8 sm:px-12 py-3 sm:py-4 rounded-full text-sm sm:text-base md:text-lg font-bold hover:bg-[#1e40af] transition-all shadow-lg hover:shadow-xl hover:scale-105 active:scale-100"
          >
            Inscríbete Ahora
          </button>
        </div>

        {/* DAMA Logo */}
        <div className="pt-8 sm:pt-12 pb-4">
          <img
            src={damaLogo}
            alt="DAMA Bolivia"
            className="w-32 sm:w-40 md:w-48 mx-auto"
          />
        </div>
      </div>
    </section>
  );
}
