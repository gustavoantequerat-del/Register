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
    <section id="registration" className="relative bg-gradient-to-br from-[#1e3a8a] via-[#1e40af] to-[#3b82f6] py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-12 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 space-y-3 sm:space-y-4">
          <div className="inline-block bg-white/20 backdrop-blur-sm px-4 sm:px-6 py-2 rounded-full mb-2">
            <p className="text-white text-xs sm:text-sm font-bold uppercase tracking-wide">Registro CDMP</p>
          </div>
          <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold px-4">
            Asegura tu Cupo
          </h2>
          <p className="text-white/90 text-base sm:text-lg leading-relaxed px-4 max-w-xl mx-auto">
            Completa el formulario para confirmar tu participación en el curso oficial CDMP.
            <br />
            ¡Los cupos son limitados!
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-10 md:p-12">
          {isSubmitted ? (
            <div className="py-12 sm:py-16 text-center space-y-6">
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-[#60a5fa]/20 rounded-full flex items-center justify-center mx-auto">
                <svg className="w-10 h-10 sm:w-12 sm:h-12 text-[#1e3a8a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl sm:text-3xl font-bold text-[#1e3a8a]">¡Inscripción Exitosa!</h3>
                <p className="text-gray-600 text-sm sm:text-base px-4">
                  Te hemos enviado un correo de confirmación con todos los detalles del curso CDMP.
                  <br />
                  ¡Nos vemos el 5 de Mayo!
                </p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-7">
              {/* Full Name */}
              <div className="space-y-2">
                <label htmlFor="fullName" className="block text-[#1e3a8a] text-sm sm:text-base font-bold">
                  Nombre Completo <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="Ingresa tu nombre completo"
                  className="w-full px-4 sm:px-5 py-3.5 sm:py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#60a5fa] focus:border-[#60a5fa] transition-all placeholder:text-gray-400 text-sm sm:text-base"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label htmlFor="email" className="block text-[#1e3a8a] text-sm sm:text-base font-bold">
                  Correo Electrónico <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="tu@correo.com"
                  className="w-full px-4 sm:px-5 py-3.5 sm:py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#60a5fa] focus:border-[#60a5fa] transition-all placeholder:text-gray-400 text-sm sm:text-base"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6] text-white font-bold text-base sm:text-lg py-4 sm:py-5 rounded-xl hover:from-[#1e40af] hover:to-[#60a5fa] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 active:translate-y-0"
              >
                Confirmar Inscripción
              </button>

              {/* Privacy Note */}
              <p className="text-xs sm:text-sm text-gray-500 text-center leading-relaxed pt-2">
                Al inscribirte, recibirás información detallada del curso CDMP y material de preparación.
                <br />
                <span className="font-semibold text-[#1e3a8a]">Respetamos tu privacidad</span> y no compartiremos tu información con terceros.
              </p>
            </form>
          )}
        </div>

        {/* Trust Indicators */}
        {!isSubmitted && (
          <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center px-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <svg className="w-8 h-8 text-white mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <p className="text-white text-xs sm:text-sm font-medium">Certificación Internacional</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <svg className="w-8 h-8 text-white mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <p className="text-white text-xs sm:text-sm font-medium">Confirmación Inmediata</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <svg className="w-8 h-8 text-white mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <p className="text-white text-xs sm:text-sm font-medium">Pay if You Pass</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
