import imgMauricioLara from "../../imports/Html→Body/094ae491900bf02b5c8418ec88e454c850373bc8.png";
import imgFabianColonel from "../../imports/Html→Body/4df47733de6430f97e2c071e3ae352c665b91eee.png";

interface Speaker {
  name: string;
  title: string;
  image: string;
  isPresident?: boolean;
}

const speakers: Speaker[] = [
  {
    name: "Mauricio Lara",
    title: "Especialista en Estrategias de Transformación Digital",
    image: imgMauricioLara
  },
  {
    name: "Fabián D. Colonel",
    title: "Gerente Regional de Consultoría Estratégica",
    image: imgFabianColonel
  },
  {
    name: "Luis Gustavo Arenaza",
    title: "Líder de Gobierno y Estrategia de Datos",
    image: imgMauricioLara
  },
  {
    name: "Estefani Pilar Tuano Vilca",
    title: "Responsable de Gobierno de Datos",
    image: imgFabianColonel
  },
  {
    name: "Marlon Cantillo",
    title: "Equipo DAMA Bolivia",
    image: imgMauricioLara
  },
  {
    name: "Raúl De Los Santos Cáceres Penayo",
    title: "Presidente Sociedad de Tecnología de la Información y la Comunicación del Paraguay",
    image: imgFabianColonel
  }
];

const president: Speaker = {
  name: "Diego Poppe",
  title: "Presidente de DAMA Bolivia",
  image: imgMauricioLara,
  isPresident: true
};

export function SpeakersSection() {
  return (
    <section id="speakers" className="bg-white py-12 md:py-20 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 md:mb-16 space-y-3 md:space-y-4">
          <h2 className="text-[#191c1e] text-3xl md:text-5xl font-bold px-4">Nuestros Speakers</h2>
          <p className="text-[#3b4a40] text-sm md:text-base leading-relaxed max-w-2xl mx-auto px-4">
            Líderes de la industria compartiendo su visión sobre la gobernanza de datos en el mercado latinoamericano.
          </p>
        </div>

        {/* Speakers Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 mb-8 md:mb-12 px-4">
          {speakers.map((speaker, index) => (
            <div key={index} className="flex flex-col items-center space-y-3">
              {/* Circular Photo */}
              <div className="relative w-20 h-20 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-[#00e699] shadow-lg">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Name Button */}
              <div className="bg-[#00e699] text-[#00613e] px-3 md:px-4 py-2 md:py-2.5 rounded-lg font-bold text-xs md:text-sm text-center w-full max-w-[140px] md:max-w-[180px] min-h-[40px] md:min-h-[44px] flex items-center justify-center">
                {speaker.name}
              </div>

              {/* Title */}
              <p className="text-[#3b4a40] text-xs md:text-sm text-center leading-tight max-w-[140px] md:max-w-[180px] min-h-[48px] md:min-h-[56px] flex items-center justify-center">
                {speaker.title}
              </p>
            </div>
          ))}
        </div>

        {/* President - Centered */}
        <div className="flex flex-col items-center space-y-4 pt-6 md:pt-8 border-t border-gray-200">
          <div className="relative w-24 h-24 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-[#006c46] shadow-xl">
            <img
              src={president.image}
              alt={president.name}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="text-center space-y-2">
            <h3 className="text-[#006c46] text-lg md:text-2xl font-bold">{president.name}</h3>
            <p className="text-[#3b6376] text-sm md:text-base font-semibold">{president.title}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
