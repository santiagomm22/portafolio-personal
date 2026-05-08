import { useCallback } from "react";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

interface ParticlesBackgroundProps {
  children: React.ReactNode;
}

const ParticlesBackground: React.FC<ParticlesBackgroundProps> = ({ children }) => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (_container: Container | undefined) => {}, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden" style={{ background: "var(--bg)" }}>
      {/* Animated gradient orbs — behind particles */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
        <div className="orb orb-4" />
      </div>

      {/* Particles canvas */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        className="fixed inset-0"
        style={{ zIndex: 1 }}
        options={{
          background: { color: { value: "transparent" } },
          fpsLimit: 90,
          interactivity: {
            events: {
              onClick: { enable: true, mode: "repulse" },
              onHover: { enable: true, mode: "grab" },
              resize: true,
            },
            modes: {
              repulse: { distance: 120, duration: 0.4 },
              grab: { distance: 180, links: { opacity: 0.5 } },
            },
          },
          particles: {
            color: { value: ["#7c3aed", "#a855f7", "#c084fc", "#4f46e5"] },
            links: {
              color: "#7c3aed",
              distance: 140,
              enable: true,
              opacity: 0.18,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: { default: "bounce" },
              random: true,
              speed: 0.9,
              straight: false,
            },
            number: {
              density: { enable: true, area: 900 },
              value: 60,
            },
            opacity: {
              value: 0.5,
              random: { enable: true, minimumValue: 0.15 },
            },
            shape: { type: "circle" },
            size: {
              value: { min: 1, max: 3 },
              random: { enable: true, minimumValue: 1 },
            },
          },
          detectRetina: true,
          responsive: [
            {
              maxWidth: 768,
              options: {
                particles: {
                  number: { value: 35 },
                  links: { distance: 110 },
                },
              },
            },
          ],
        }}
      />

      {/* Page content */}
      <div className="relative" style={{ zIndex: 2 }}>
        {children}
      </div>
    </div>
  );
};

export default ParticlesBackground;
