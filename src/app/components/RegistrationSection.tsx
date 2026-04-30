import { useState } from 'react';

export function RegistrationSection() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Registro:', formData);
    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ fullName: '', email: '' });
    }, 3000);
  };

  return (
    <section id="registration" className="bg-gradient-to-br from-[#006c46] to-[#004d33] py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-12">
      <div className="max-w-2xl mx-auto text-center">
        {/* Header */}
        <div className="mb-8 sm:mb-12 space-y-3 sm:space-y-4">
          <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold px-4">Asegura tu Lugar</h2>
          <p className="text-white/90 text-base sm:text-lg leading-relaxed px-4">
            Completa el siguiente formulario para confirmar tu asistencia al evento.
            Solo necesitamos tu nombre y correo electrónico.
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 md:p-12 max-w-lg mx-auto">
          {isSubmitted ? (
            <div className="py-8 sm:py-12 text-center space-y-4">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#00e699]/20 rounded-full flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-[#006c46]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl sm:text-2xl font-bold text-[#006c46]">¡Registro Exitoso!</h3>
                <p className="text-[#3b4a40] text-sm sm:text-base">Te enviaremos la confirmación a tu correo electrónico</p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
              {/* Full Name */}
              <div className="text-left space-y-2">
                <label htmlFor="fullName" className="block text-[#191c1e] text-sm sm:text-base font-bold">
                  Nombre Completo
                </label>
                <input
                  type="text"
                  id="fullName"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="Ingresa tu nombre completo"
                  className="w-full px-3 sm:px-4 py-3 sm:py-3.5 bg-[#f7f9fb] border border-[#e5e7eb] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#006c46] focus:border-transparent transition-all placeholder:text-[#9ca3af] text-sm sm:text-base"
                />
              </div>

              {/* Email */}
              <div className="text-left space-y-2">
                <label htmlFor="email" className="block text-[#191c1e] text-sm sm:text-base font-bold">
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="tu@correo.com"
                  className="w-full px-3 sm:px-4 py-3 sm:py-3.5 bg-[#f7f9fb] border border-[#e5e7eb] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#006c46] focus:border-transparent transition-all placeholder:text-[#9ca3af] text-sm sm:text-base"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#00e699] text-[#00613e] font-bold text-base sm:text-lg py-3 sm:py-4 rounded-xl hover:bg-[#00d68a] transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0"
              >
                Confirmar Registro
              </button>

              {/* Privacy Note */}
              <p className="text-xs text-[#6b7280] text-center leading-relaxed">
                Al registrarte, aceptas recibir información sobre el evento.<br />
                Respetamos tu privacidad y no compartiremos tu información.
              </p>
            </form>
          )}
        </div>

        {/* Trust Indicators */}
        {!isSubmitted && (
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm text-white/80 px-4">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#00e699]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Registro seguro</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#00e699]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <span>Confirmación inmediata</span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
