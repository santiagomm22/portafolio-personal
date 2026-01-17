// src/components/particles/ParticlesBackground.tsx
import { useCallback } from "react";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

interface ParticlesBackgroundProps {
  children: React.ReactNode;
}

const ParticlesBackground: React.FC<ParticlesBackgroundProps> = ({
  children,
}) => {
  const particlesInit = useCallback(async (engine: Engine) => {
    // Carga solo las características necesarias para optimizar rendimiento
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      // Opcional: callback cuando las partículas están cargadas
      console.log("Partículas cargadas", container);
    },
    []
  );

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Componente de partículas como fondo */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: "#1a0129", // Fondo negro
            },
          },
          fpsLimit: 120, // Límite de FPS para rendimiento
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "repulse", // Agrega partículas al hacer clic
              },
              onHover: {
                enable: true,
                mode: "bubble", // Efecto burbuja al pasar el mouse
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4, // Cantidad de partículas añadidas por clic
              },
              bubble: {
                distance: 250, // Distancia del efecto burbuja
                size: 35, // Tamaño máximo de la burbuja
                duration: 0.3, // Duración del efecto
                opacity: 1.5,
                speed: 3,
              },
            },
          },
          particles: {
            color: {
              value: ["#8B5CF6", "#A855F7", "#8135cd", "#4829db"], // Colores púrpura/violeta
            },
            links: {
              color: "#8B5CF6",
              distance: 150,
              enable: true,
              opacity: 0.3,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 2, // Velocidad suave
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80, // Cantidad de partículas (ajustable según rendimiento)
            },
            opacity: {
              value: 0.7,
              random: {
                enable: true,
                minimumValue: 0.3,
              },
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
              random: {
                enable: true,
                minimumValue: 1,
              },
            },
          },
          detectRetina: true, // Soporte para pantallas retina
          // Configuración responsive
          responsive: [
            {
              maxWidth: 768,
              options: {
                particles: {
                  number: {
                    value: 50, // Menos partículas en móviles
                  },
                  links: {
                    distance: 120,
                  },
                },
                interactivity: {
                  modes: {
                    bubble: {
                      distance: 100,
                      size: 20,
                    },
                  },
                },
              },
            },
            {
              maxWidth: 480,
              options: {
                particles: {
                  number: {
                    value: 70, // Aún menos partículas en móviles pequeños
                  },
                  links: {
                    distance: 250,
                    enable: true, // Desactivar líneas en móviles muy pequeños
                  },
                },
              },
            },
          ],
        }}
        className="absolute inset-0 z-0"
      />

      {/* Contenido de la aplicación */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default ParticlesBackground;
