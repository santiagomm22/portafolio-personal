// src/App.tsx
import "./App.css";
import ParticlesBackground from "./components/fondo-app/ParticlesBackground";
import HeroText from "./components/hero-inicial/HeroText";
// import CardsLayout from "./components/cards/CardsLayout";
//import TextLayout from "./components/hero-inicial/TextLayout";

function App() {
  return (
    <ParticlesBackground>
      <HeroText />
    </ParticlesBackground>
  );
}

export default App;
