// src/components/PurpleGradientBackground.tsx
import React, { useEffect, useState } from "react";

interface GradientProps {
  children: React.ReactNode;
  intensity?: "light" | "medium" | "strong";
}

// Crear un estilo CSS para las animaciones
// Esto lo incluiremos en un archivo CSS o insertaremos con useEffect
const createBreathingCss = (opacities: Record<string, number>) => {
  return `
    @keyframes breathe1 {
      0% {
        opacity: ${opacities.primary};
        transform: scale(1);
      }
      50% {
        opacity: ${opacities.primary * 0.3};
        transform: scale(0.95);
      }
      100% {
        opacity: ${opacities.primary};
        transform: scale(1);
      }
    }
    
    @keyframes breathe2 {
      0% {
        opacity: ${opacities.secondary * 0.35};
        transform: scale(0.94);
      }
      50% {
        opacity: ${opacities.secondary};
        transform: scale(1.03);
      }
      100% {
        opacity: ${opacities.secondary * 0.35};
        transform: scale(0.94);
      }
    }
    
    @keyframes breathe3 {
      0% {
        opacity: ${opacities.tertiary * 0.25};
        transform: scale(0.93);
      }
      50% {
        opacity: ${opacities.tertiary};
        transform: scale(1.02);
      }
      100% {
        opacity: ${opacities.tertiary * 0.25};
        transform: scale(0.93);
      }
    }
    
    @keyframes breathe4 {
      0% {
        opacity: ${opacities.quaternary};
        transform: scale(1.01);
      }
      50% {
        opacity: ${opacities.quaternary * 0.3};
        transform: scale(0.95);
      }
      100% {
        opacity: ${opacities.quaternary};
        transform: scale(1.01);
      }
    }

    @keyframes breathe5 {
      0% {
        opacity: ${opacities.central * 0.2};
        transform: scale(0.96);
      }
      50% {
        opacity: ${opacities.central};
        transform: scale(1.04);
      }
      100% {
        opacity: ${opacities.central * 0.2};
        transform: scale(0.96);
      }
    }

    @keyframes breathe6 {
      0% {
        opacity: ${opacities.midLeft};
        transform: scale(1.02);
      }
      50% {
        opacity: ${opacities.midLeft * 0.25};
        transform: scale(0.92);
      }
      100% {
        opacity: ${opacities.midLeft};
        transform: scale(1.02);
      }
    }
  `;
};

const PurpleGradientBackground: React.FC<GradientProps> = ({
  children,
  intensity = "medium",
}) => {
  const [windowWidth, setWindowWidth] = useState<number>(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  // Detectar el ancho de la ventana para ajustar gradientes en móviles
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Inicializar
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Inyectar las animaciones CSS al montaje del componente
  useEffect(() => {
    // Crear un elemento de estilo
    const styleEl = document.createElement("style");
    styleEl.setAttribute("id", "purple-gradient-animations");

    // Verificar si ya existe para evitar duplicados
    if (!document.getElementById("purple-gradient-animations")) {
      // Generar e insertar los estilos
      styleEl.innerHTML = createBreathingCss(getOpacity());
      document.head.appendChild(styleEl);
    }

    // Limpieza al desmontar
    return () => {
      const existingStyle = document.getElementById(
        "purple-gradient-animations"
      );
      if (existingStyle) {
        existingStyle.remove();
      }
    };
  }, [intensity, windowWidth]); // Regenerar cuando cambie intensidad o tamaño de ventana

  // Determinar si estamos en un dispositivo móvil o tablet
  const isMobile = windowWidth < 768;
  const isTablet = windowWidth >= 768 && windowWidth < 1024;

  // Configuración de opacidad basada en la intensidad y tipo de dispositivo
  function getOpacity() {
    const baseOpacity = {
      light: {
        primary: 0.6,
        secondary: 0.5,
        tertiary: 0.55,
        quaternary: 0.45,
        central: 0.5,
        midLeft: 0.5,
      },
      medium: {
        primary: 0.75,
        secondary: 0.65,
        tertiary: 0.7,
        quaternary: 0.6,
        central: 0.65,
        midLeft: 0.65,
      },
      strong: {
        primary: 0.9,
        secondary: 0.8,
        tertiary: 0.85,
        quaternary: 0.75,
        central: 0.8,
        midLeft: 0.8,
      },
    };

    // Aumentar opacidad para dispositivos más pequeños para mejorar visibilidad
    const deviceMultiplier = isMobile ? 1.4 : isTablet ? 1.2 : 1;

    return {
      primary: Math.min(baseOpacity[intensity].primary * deviceMultiplier, 1),
      secondary: Math.min(
        baseOpacity[intensity].secondary * deviceMultiplier,
        1
      ),
      tertiary: Math.min(baseOpacity[intensity].tertiary * deviceMultiplier, 1),
      quaternary: Math.min(
        baseOpacity[intensity].quaternary * deviceMultiplier,
        1
      ),
      central: Math.min(baseOpacity[intensity].central * deviceMultiplier, 1),
      midLeft: Math.min(baseOpacity[intensity].midLeft * deviceMultiplier, 1),
    };
  }

  // Configuración de desenfoque basada en la intensidad
  function getBlur() {
    const baseBlur = {
      light: {
        primary: 80,
        secondary: 70,
        tertiary: 75,
        quaternary: 65,
        central: 85,
        midLeft: 75,
      },
      medium: {
        primary: 100,
        secondary: 90,
        tertiary: 95,
        quaternary: 85,
        central: 105,
        midLeft: 95,
      },
      strong: {
        primary: 120,
        secondary: 110,
        tertiary: 115,
        quaternary: 105,
        central: 125,
        midLeft: 115,
      },
    };

    // Reducir el desenfoque en móviles para que el gradiente sea más visible
    const deviceMultiplier = isMobile ? 0.7 : isTablet ? 0.85 : 1;

    return {
      primary: baseBlur[intensity].primary * deviceMultiplier,
      secondary: baseBlur[intensity].secondary * deviceMultiplier,
      tertiary: baseBlur[intensity].tertiary * deviceMultiplier,
      quaternary: baseBlur[intensity].quaternary * deviceMultiplier,
      central: baseBlur[intensity].central * deviceMultiplier,
      midLeft: baseBlur[intensity].midLeft * deviceMultiplier,
    };
  }

  // Ajustar tamaño según el dispositivo
  function getSize() {
    const baseSize = {
      primary: {
        width: "70%",
        height: "70%",
      },
      secondary: {
        width: "60%",
        height: "60%",
      },
      tertiary: {
        width: "65%",
        height: "65%",
      },
      quaternary: {
        width: "55%",
        height: "55%",
      },
      central: {
        width: "50%",
        height: "50%",
      },
      midLeft: {
        width: "45%",
        height: "45%",
      },
    };

    // Aumentar el tamaño relativo en móviles para mejor visibilidad
    const deviceMultiplier = isMobile ? 1.3 : isTablet ? 1.15 : 1;

    return {
      primary: {
        width: `calc(${baseSize.primary.width} * ${deviceMultiplier})`,
        height: `calc(${baseSize.primary.height} * ${deviceMultiplier})`,
      },
      secondary: {
        width: `calc(${baseSize.secondary.width} * ${deviceMultiplier})`,
        height: `calc(${baseSize.secondary.height} * ${deviceMultiplier})`,
      },
      tertiary: {
        width: `calc(${baseSize.tertiary.width} * ${deviceMultiplier})`,
        height: `calc(${baseSize.tertiary.height} * ${deviceMultiplier})`,
      },
      quaternary: {
        width: `calc(${baseSize.quaternary.width} * ${deviceMultiplier})`,
        height: `calc(${baseSize.quaternary.height} * ${deviceMultiplier})`,
      },
      central: {
        width: `calc(${baseSize.central.width} * ${deviceMultiplier})`,
        height: `calc(${baseSize.central.height} * ${deviceMultiplier})`,
      },
      midLeft: {
        width: `calc(${baseSize.midLeft.width} * ${deviceMultiplier})`,
        height: `calc(${baseSize.midLeft.height} * ${deviceMultiplier})`,
      },
    };
  }

  const opacity = getOpacity();
  const blur = getBlur();
  const size = getSize();

  // Estilo para las animaciones de respiración con tiempos reducidos
  const breathingStyle = {
    // Estos estilos serán aplicados en línea a los elementos
    animationTiming: {
      primary: "breathe1 8s ease-in-out infinite alternate",
      secondary: "breathe2 9s ease-in-out infinite alternate",
      tertiary: "breathe3 10s ease-in-out infinite alternate",
      quaternary: "breathe4 7s ease-in-out infinite alternate",
      central: "breathe5 11s ease-in-out infinite alternate",
      midLeft: "breathe6 8.5s ease-in-out infinite alternate",
    },
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Gradiente superior izquierdo (animación 1) */}
      <div
        className="absolute -top-[10%] -left-[10%] rounded-full"
        style={{
          width: size.primary.width,
          height: size.primary.height,
          background: `radial-gradient(circle, rgba(67, 26, 143, ${
            opacity.primary
          }) 0%, rgba(67, 26, 143, ${
            opacity.primary / 2.5
          }) 40%, rgba(0, 0, 0, 0) 70%)`,
          filter: `blur(${blur.primary}px)`,
          animation: breathingStyle.animationTiming.primary,
        }}
      ></div>

      {/* Gradiente inferior derecho (animación 2) */}
      <div
        className="absolute -bottom-[10%] -right-[10%] rounded-full"
        style={{
          width: size.secondary.width,
          height: size.secondary.height,
          background: `radial-gradient(circle, rgba(76, 29, 149, ${
            opacity.secondary
          }) 0%, rgba(76, 29, 149, ${
            opacity.secondary / 2.5
          }) 40%, rgba(0, 0, 0, 0) 70%)`,
          filter: `blur(${blur.secondary}px)`,
          animation: breathingStyle.animationTiming.secondary,
        }}
      ></div>

      {/* Gradiente superior derecho (animación 3) */}
      <div
        className="absolute -top-[10%] -right-[10%] rounded-full"
        style={{
          width: size.tertiary.width,
          height: size.tertiary.height,
          background: `radial-gradient(circle, rgba(79, 29, 143, ${
            opacity.tertiary
          }) 0%, rgba(79, 29, 143, ${
            opacity.tertiary / 2.5
          }) 40%, rgba(0, 0, 0, 0) 70%)`,
          filter: `blur(${blur.tertiary}px)`,
          animation: breathingStyle.animationTiming.tertiary,
        }}
      ></div>

      {/* Gradiente inferior izquierdo (animación 4) */}
      <div
        className="absolute -bottom-[10%] -left-[10%] rounded-full"
        style={{
          width: size.quaternary.width,
          height: size.quaternary.height,
          background: `radial-gradient(circle, rgba(85, 33, 160, ${
            opacity.quaternary
          }) 0%, rgba(85, 33, 160, ${
            opacity.quaternary / 2.5
          }) 40%, rgba(0, 0, 0, 0) 70%)`,
          filter: `blur(${blur.quaternary}px)`,
          animation: breathingStyle.animationTiming.quaternary,
        }}
      ></div>

      {/* Gradiente central (animación 5) */}
      <div
        className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          width: size.central.width,
          height: size.central.height,
          background: `radial-gradient(circle, rgba(74, 30, 150, ${
            opacity.central
          }) 0%, rgba(74, 30, 150, ${
            opacity.central / 3
          }) 40%, rgba(0, 0, 0, 0) 70%)`,
          filter: `blur(${blur.central}px)`,
          animation: breathingStyle.animationTiming.central,
        }}
      ></div>

      {/* Gradiente medio izquierdo (animación 6) */}
      <div
        className="absolute top-[30%] -left-[5%] rounded-full"
        style={{
          width: size.midLeft.width,
          height: size.midLeft.height,
          background: `radial-gradient(circle, rgba(64, 23, 127, ${
            opacity.midLeft
          }) 0%, rgba(64, 23, 127, ${
            opacity.midLeft / 2.5
          }) 40%, rgba(0, 0, 0, 0) 70%)`,
          filter: `blur(${blur.midLeft}px)`,
          animation: breathingStyle.animationTiming.midLeft,
        }}
      ></div>

      {/* Contenido de la aplicación */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default PurpleGradientBackground;
