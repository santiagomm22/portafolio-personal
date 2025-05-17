// src/components/PurpleGradientBackground.tsx
import React from "react";

interface GradientProps {
  children: React.ReactNode;
  intensity?: "light" | "medium" | "strong";
}

const PurpleGradientBackground: React.FC<GradientProps> = ({
  children,
  intensity = "medium",
}) => {
  // Configuración de opacidad basada en la intensidad
  const opacityConfig = {
    light: {
      primary: 0.5,
      secondary: 0.3,
      tertiary: 0.4,
      accent: 0.4,
    },
    medium: {
      primary: 0.7,
      secondary: 0.4,
      tertiary: 0.5,
      accent: 0.6,
    },
    strong: {
      primary: 0.9,
      secondary: 0.6,
      tertiary: 0.7,
      accent: 0.8,
    },
  };

  // Configuración de desenfoque basada en la intensidad
  const blurConfig = {
    light: {
      primary: 60,
      secondary: 80,
      tertiary: 50,
      accent: 40,
    },
    medium: {
      primary: 80,
      secondary: 100,
      tertiary: 70,
      accent: 50,
    },
    strong: {
      primary: 100,
      secondary: 120,
      tertiary: 90,
      accent: 60,
    },
  };

  const opacity = opacityConfig[intensity];
  const blur = blurConfig[intensity];

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Gradiente principal (superior derecho) */}
      <div
        className="absolute -top-[10%] -right-[10%] w-[60%] h-[60%] rounded-full"
        style={{
          background: `radial-gradient(circle, rgba(46, 16, 101, ${
            opacity.primary
          }) 0%, rgba(46, 16, 101, ${
            opacity.primary / 2
          }) 30%, rgba(0, 0, 0, 0) 70%)`,
          filter: `blur(${blur.primary}px)`,
        }}
      ></div>

      {/* Gradiente secundario (centro-izquierda) */}
      <div
        className="absolute top-[30%] -left-[15%] w-[50%] h-[50%] rounded-full"
        style={{
          background: `radial-gradient(circle, rgba(91, 33, 182, ${
            opacity.secondary
          }) 0%, rgba(91, 33, 182, ${
            opacity.secondary / 3
          }) 40%, rgba(0, 0, 0, 0) 70%)`,
          filter: `blur(${blur.secondary}px)`,
        }}
      ></div>

      {/* Gradiente terciario (inferior derecho) */}
      <div
        className="absolute -bottom-[10%] right-[20%] w-[40%] h-[40%] rounded-full"
        style={{
          background: `radial-gradient(circle, rgba(67, 26, 143, ${
            opacity.tertiary
          }) 0%, rgba(67, 26, 143, ${
            opacity.tertiary / 2
          }) 30%, rgba(0, 0, 0, 0) 60%)`,
          filter: `blur(${blur.tertiary}px)`,
        }}
      ></div>

      {/* Pequeño detalle de luz en la esquina superior izquierda */}
      <div
        className="absolute top-[15%] left-[10%] w-[15%] h-[15%] rounded-full"
        style={{
          background: `radial-gradient(circle, rgba(124, 58, 237, ${
            opacity.accent
          }) 0%, rgba(124, 58, 237, ${
            opacity.accent / 5
          }) 50%, rgba(0, 0, 0, 0) 70%)`,
          filter: `blur(${blur.accent}px)`,
        }}
      ></div>

      {/* Contenido de la aplicación */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default PurpleGradientBackground;
