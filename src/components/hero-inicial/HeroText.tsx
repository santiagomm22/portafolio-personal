const HeroText = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Elemento decorativo en la parte superior */}
      <div className="flex justify-center items-center pt-8">
        <span className="text-lg md:text-xl  tracking-widest font-medium text-gray-300">
          &lt;
        </span>
        <span className="text-lg md:text-xl  tracking-widest font-medium text-violet-600">
          SantiagoMendoza
        </span>
        <span className="text-lg md:text-xl  tracking-widest font-medium text-yellow-500">
          /
        </span>
        <span className="text-lg md:text-xl  tracking-widest font-medium text-gray-300">
          &gt;
        </span>
      </div>

      {/* Contenedor para el título y subtítulo centrados */}
      <div className="flex-grow flex flex-col justify-center items-center text-center">
        {/* Título principal en grande */}
        <h1 className="text-6xl md:text-8xl font-bold tracking-wider mb-6 uppercase text-white">
          SANTIAGO MENDOZA
        </h1>

        {/* Subtítulo */}
        <p className="text-lg md:text-xl uppercase tracking-widest font-medium text-gray-300">
          DESARROLLADOR FRONT-END & BACK-END
        </p>
      </div>
    </div>
  );
};

export default HeroText;
