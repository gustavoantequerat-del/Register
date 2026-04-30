import { useEffect, useState } from 'react';
import svgPaths from "../../imports/Html→Body/svg-pwbnva2dtm";

export function EventDetailsSection() {
  const targetDate = new Date('2026-10-23T18:30:00-04:00');
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const diff = targetDate.getTime() - now.getTime();

      if (diff > 0) {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-[#006c46] py-12 sm:py-16 md:py-20 px-4 sm:px-6">
      <div className="max-w-[896px] mx-auto text-center space-y-8 sm:space-y-12">
        {/* Title */}
        <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold px-4">La cita es este Lunes</h2>

        {/* Countdown */}
        <div className="flex justify-center gap-3 sm:gap-4 md:gap-8 flex-wrap px-4">
          <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-xl w-24 h-32 sm:w-28 sm:h-36 md:w-32 md:h-40 flex flex-col items-center justify-center">
            <span className="text-white text-3xl sm:text-4xl font-bold">{String(timeLeft.days).padStart(2, '0')}</span>
            <span className="text-white/70 text-xs sm:text-sm md:text-base uppercase tracking-wide mt-1">DÍAS</span>
          </div>
          <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-xl w-24 h-32 sm:w-28 sm:h-36 md:w-32 md:h-40 flex flex-col items-center justify-center">
            <span className="text-white text-3xl sm:text-4xl font-bold">{String(timeLeft.hours).padStart(2, '0')}</span>
            <span className="text-white/70 text-xs sm:text-sm md:text-base uppercase tracking-wide mt-1">HORAS</span>
          </div>
          <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-xl w-24 h-32 sm:w-28 sm:h-36 md:w-32 md:h-40 flex flex-col items-center justify-center">
            <span className="text-white text-3xl sm:text-4xl font-bold">{String(timeLeft.minutes).padStart(2, '0')}</span>
            <span className="text-white/70 text-xs sm:text-sm md:text-base uppercase tracking-wide mt-1">MINUTOS</span>
          </div>
        </div>

        {/* Event Details */}
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 pt-4 px-4">
          {/* Date & Time */}
          <div className="bg-white/10 border border-white/20 rounded-xl p-4 sm:p-5 md:p-6 flex items-center gap-3 sm:gap-4 md:gap-6">
            <div className="bg-[#00e699] rounded-md w-12 h-14 sm:w-14 sm:h-16 flex flex-col items-center justify-center shrink-0">
              <span className="text-[#00613e] text-xs font-bold uppercase">OCT</span>
              <span className="text-[#00613e] text-xl sm:text-2xl font-bold">23</span>
            </div>
            <div className="text-left flex-1">
              <h3 className="text-white text-sm sm:text-base font-normal mb-1">Fecha y Hora</h3>
              <p className="text-white/80 text-xs sm:text-sm md:text-base">
                Próximo Lunes, 18:30<br />
                GMT-4
              </p>
            </div>
          </div>

          {/* Location */}
          <div className="bg-white/10 border border-white/20 rounded-xl p-4 sm:p-5 md:p-6 flex items-center gap-3 sm:gap-4 md:gap-6">
            <div className="bg-[#bfe9ff] rounded-md w-12 h-14 sm:w-14 sm:h-16 flex items-center justify-center shrink-0">
              <div className="w-4 h-5 sm:w-5 sm:h-6">
                <svg className="w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 25">
                  <path d={svgPaths.p682b940} fill="#41697C" />
                </svg>
              </div>
            </div>
            <div className="text-left flex-1">
              <h3 className="text-white text-sm sm:text-base font-normal mb-1">Lugar</h3>
              <p className="text-white/80 text-xs sm:text-sm md:text-base">
                Typica Coffee, La Paz,<br />
                Bolivia
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
