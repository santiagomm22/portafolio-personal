import DecryptedText from "@/components/ui/DecryptedText";

const HeroText = () => {
  return (
    <div className="min-h-screen flex flex-col z-10">
      {/* Contenedor para el título y subtítulo centrados */}
      <div className="flex-grow flex flex-col justify-center items-center text-center">
        {/* Título principal en grande */}
        <h1 className="text-5xl sm:text-5xl md:text-6xl lg:text-8xl font-bold tracking-wider mb-6 uppercase text-white">
          SANTIAGO MENDOZA
        </h1>

        {/* Subtítulo */}
        <p className="text-sm sm:text-base md:text-lg lg:text-xl uppercase tracking-widest font-medium text-gray-300">
          <DecryptedText
            text="DESARROLLADOR FRONT-END Y BACK-END"
            className="text-sm sm:text-base md:text-lg lg:text-xl uppercase tracking-widest font-medium text-gray-300"
            animateOn="view"
            speed={80}
            maxIterations={15}
            sequential={true}
            revealDirection="start"
          />
        </p>
      </div>
    </div>
  );
};

export default HeroText;
