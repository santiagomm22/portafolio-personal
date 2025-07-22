import MetaBalls from "../ui/MetaBalls";

const CornerTextLayout = () => {
  return (
    <div className="min-h-screen relative">
      {/* Texto Superior Izquierda */}
      <div className="absolute top-6 left-6 md:top-12 md:left-12 z-10">
        <div className="text-white">
          {/* Título principal */}
          <h1 className="text-4xl md:text-6xl font-bold tracking-wider mb-2 uppercase">
            Santiago Mendoza
          </h1>

          {/* Información adicional */}
          <div className="text-sm md:text-base font-mono">
            <div className="mb-1">LOCAL TIME (UTC-6:00)</div>
            <div className="text-2xl md:text-4xl font-bold">01:30</div>
            <div className="flex items-center space-x-2 text-xs md:text-sm">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              <span>PM</span>
            </div>
          </div>
        </div>
      </div>

      {/* MetaBalls Centrados */}
      <div className="flex items-center justify-center min-h-screen p-4">
        <div className="w-full max-w-8xl aspect-square max-h-[90vh] flex items-center justify-center">
          {/* Reemplaza "MetaBalls" por el nombre exacto de tu componente */}
          {/* <MetaBalls /> */}

          <MetaBalls
            color="#6d28d9"
            cursorBallColor="#8b5cf6"
            cursorBallSize={2}
            ballCount={25}
            animationSize={33}
            enableMouseInteraction={true}
            enableTransparency={true}
            hoverSmoothness={0.25}
            clumpFactor={1.5}
            speed={0.3}
          />
        </div>
      </div>

      {/* Texto Inferior Izquierda - Desktop */}
      <div className="hidden md:block absolute bottom-6 left-6 md:bottom-12 md:left-12 z-10">
        <div className="text-white max-w-md">
          <p className="text-lg md:text-xl leading-relaxed">
            <span className="text-purple-300">UI Engineer</span> who dips his
            toes in <span className="text-purple-300">Realtime 3D</span>
          </p>
          <p className="text-lg md:text-xl leading-relaxed">
            <span className="text-purple-300">Interaction</span> &{" "}
            <span className="text-purple-300">Perf</span>
          </p>

          <div className="mt-4 text-sm text-gray-300 font-mono">
            <div>FORT COLLINS, COLORADO → US OF A</div>
            <div>DESIGN ENGINEER @HEX</div>
          </div>
        </div>
      </div>

      {/* Texto Inferior - Móvil (al final de la página) */}
      <div className="md:hidden mt-8 px-6 pb-12">
        <div className="text-white">
          <p className="text-lg leading-relaxed text-center">
            <span className="text-purple-300">UI Engineer</span> who dips his
            toes in <span className="text-purple-300">Realtime 3D</span>
          </p>
          <p className="text-lg leading-relaxed text-center">
            <span className="text-purple-300">Interaction</span> &{" "}
            <span className="text-purple-300">Perf</span>
          </p>

          <div className="mt-4 text-sm text-gray-300 font-mono text-center">
            <div>FORT COLLINS, COLORADO → US OF A</div>
            <div>DESIGN ENGINEER @HEX</div>
          </div>
        </div>
      </div>

      {/* Enlaces de navegación - Esquina superior derecha */}
      <div className="absolute bottom-6 right-6 md:bottom-12 md:right-12 z-10">
        <div className="text-white text-right text-sm font-mono space-y-2">
          <div>Github</div>
          <div>LinkedIn</div>
          <div>Twitter / X</div>
          <div>Email</div>
        </div>
      </div>
    </div>
  );
};

export default CornerTextLayout;
