const HeroText = () => {
  return (
    <div className="min-h-screen flex items-center px-6 pt-16 md:pt-0">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-16 md:items-center">
        {/* Texto */}
        <div className="text-center md:text-left md:self-end md:pb-30">
          <h1 className="text-6xl md:text-8xl font-bold uppercase text-white mb-6">
            SANTIAGO MENDOZA
          </h1>
          <p className="text-xl uppercase tracking-widest text-gray-300">
            DESARROLLADOR FRONT-END & BACK-END
          </p>
        </div>

        {/* Imágenes */}
        <div className="space-y-4">
          <img
            src="https://th.bing.com/th/id/OIP.-L6-_RP_iqao2xlw6aKcOQHaD4?w=304&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
            alt="Paisaje montañoso"
            className="w-full h-80 object-cover rounded-lg"
          />
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://th.bing.com/th/id/OIP.-L6-_RP_iqao2xlw6aKcOQHaD4?w=304&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
              alt="Sendero forestal"
              className="w-full h-48 object-cover rounded-lg"
            />
            <img
              src="https://th.bing.com/th/id/OIP.-L6-_RP_iqao2xlw6aKcOQHaD4?w=304&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
              alt="Cascada"
              className="w-full h-48 object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroText;
