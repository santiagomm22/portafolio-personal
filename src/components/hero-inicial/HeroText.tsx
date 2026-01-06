import DecryptedText from "@/components/ui/DecryptedText";

const HeroText = () => {
  return (
    <div className="min-h-screen flex flex-col z-10 px-8 md:px-16 lg:px-24 relative">
      {/* Título principal en la parte superior */}
      <div className="pt-16 md:pt-20 lg:pt-24 pb-12 relative z-20">
        <h1 className="text-5xl sm:text-5xl md:text-6xl lg:text-8xl font-bold tracking-wider uppercase text-white text-center">
          SANTIAGO MENDOZA
        </h1>
      </div>

      {/* Contenedor para imagen (izquierda) y subtítulo (derecha) */}
      <div className="flex-grow flex flex-col md:flex-row items-start justify-between gap-8 md:gap-12 lg:gap-16 relative">
        {/* Imagen en el lado izquierdo */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-center md:pr-8 lg:pr-12">
          <img
            src="/images/myself.png"
            alt="Santiago Mendoza"
            className="w-96 h-96 md:w-[650px] md:h-[650px] lg:w-[750px] lg:h-[750px] object-cover rounded-lg"
          />
        </div>

        {/* Subtítulo en el lado derecho */}
        <div className="w-full md:w-1/2 flex items-center justify-start md:pt-32 lg:pt-40">
          <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl uppercase tracking-widest font-medium text-gray-300 text-left">
            <DecryptedText
              text="DESARROLLADOR FRONT-END Y BACK-END"
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl uppercase tracking-widest font-medium text-gray-300"
              animateOn="view"
              speed={80}
              maxIterations={15}
              sequential={true}
              revealDirection="start"
            />
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroText;
