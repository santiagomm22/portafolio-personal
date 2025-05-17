// src/components/PurpleGradientBackground.tsx
import React, { useEffect, useState } from "react";

interface GradientProps {
  children: React.ReactNode;
  intensity?: "light" | "medium" | "strong";
}

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

  // Determinar si estamos en un dispositivo móvil o tablet
  const isMobile = windowWidth < 768;
  const isTablet = windowWidth >= 768 && windowWidth < 1024;

  // Configuración de opacidad basada en la intensidad y tipo de dispositivo
  const getOpacity = () => {
    const baseOpacity = {
      light: {
        primary: 0.6,
        secondary: 0.5,
      },
      medium: {
        primary: 0.75,
        secondary: 0.65,
      },
      strong: {
        primary: 0.9,
        secondary: 0.8,
      },
    };

    // Aumentar opacidad para dispositivos más pequeños para mejorar visibilidad
    const deviceMultiplier = isMobile ? 1.2 : isTablet ? 1.2 : 1;

    return {
      primary: Math.min(baseOpacity[intensity].primary * deviceMultiplier, 1),
      secondary: Math.min(
        baseOpacity[intensity].secondary * deviceMultiplier,
        1
      ),
    };
  };

  // Configuración de desenfoque basada en la intensidad
  const getBlur = () => {
    const baseBlur = {
      light: {
        primary: 80,
        secondary: 70,
      },
      medium: {
        primary: 100,
        secondary: 90,
      },
      strong: {
        primary: 120,
        secondary: 110,
      },
    };

    // Reducir el desenfoque en móviles para que el gradiente sea más visible
    const deviceMultiplier = isMobile ? 0.7 : isTablet ? 0.85 : 1;

    return {
      primary: baseBlur[intensity].primary * deviceMultiplier,
      secondary: baseBlur[intensity].secondary * deviceMultiplier,
    };
  };

  // Ajustar tamaño según el dispositivo
  const getSize = () => {
    const baseSize = {
      primary: {
        width: "70%",
        height: "70%",
      },
      secondary: {
        width: "60%",
        height: "60%",
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
    };
  };

  const opacity = getOpacity();
  const blur = getBlur();
  const size = getSize();

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Gradiente superior izquierdo (más grande) */}
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
        }}
      ></div>

      {/* Gradiente inferior derecho */}
      <div
        className="absolute -bottom-[10%] -right-[10%] rounded-full"
        style={{
          width: size.secondary.width,
          height: size.secondary.height,
          background: `radial-gradient(circle, rgba(91, 33, 182, ${
            opacity.secondary
          }) 0%, rgba(91, 33, 182, ${
            opacity.secondary / 2.5
          }) 40%, rgba(0, 0, 0, 0) 70%)`,
          filter: `blur(${blur.secondary}px)`,
        }}
      ></div>

      {/* Contenido de la aplicación */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default PurpleGradientBackground;
