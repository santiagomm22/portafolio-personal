import DecryptedText from "@/components/ui/DecryptedText";

const HeroText = () => {
  return (
    <div className="min-h-screen flex flex-col z-10 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-24 relative">
      {/* Título principal en la parte superior */}
      <div className="pt-12 sm:pt-16 md:pt-20 lg:pt-24 pb-2 sm:pb-4 md:pb-12 relative z-20">
        <h1 className="text-5xl sm:text-5xl md:text-5xl lg:text-7xl xl:text-8xl font-bold tracking-wider uppercase text-white text-center md:whitespace-nowrap">
          SANTIAGO MENDOZA
        </h1>
      </div>

      {/* Contenedor para imagen (izquierda) y subtítulo (derecha) */}
      <div className="flex-grow flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between gap-4 md:gap-8 lg:gap-12 xl:gap-16 relative">
        {/* Imagen en el lado izquierdo */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-center">
          <img
            src="/images/myself.png"
            alt="Santiago Mendoza"
            className="w-72 h-72 sm:w-80 sm:h-80 md:w-[450px] md:h-[450px] lg:w-[550px] lg:h-[550px] xl:w-[650px] xl:h-[650px] 2xl:w-[750px] 2xl:h-[750px] object-contain rounded-lg"
          />
        </div>

        {/* Subtítulo en el lado derecho */}
        <div className="w-full md:w-1/2 flex items-center justify-center md:pt-32 lg:pt-40 xl:pt-48 2xl:pt-56 md:pl-4 lg:pl-8 xl:pl-12">
          <p className="text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl uppercase tracking-widest font-medium text-gray-300 text-center px-4">
            <DecryptedText
              text="DESARROLLADOR FRONT-END Y BACK-END"
              className="text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-5xl 2xl:text-6xl uppercase tracking-widest font-medium text-gray-300"
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
