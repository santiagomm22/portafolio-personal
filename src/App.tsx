// src/App.tsx
import "./App.css";
import ParticlesBackground from "./components/fondo-app/ParticlesBackground";
import HeroText from "./components/hero-inicial/HeroText";
// import CardsLayout from "./components/cards/CardsLayout";

function App() {
  return (
    <ParticlesBackground>
      <HeroText />
      {/* <CardsLayout /> */}
    </ParticlesBackground>
  );
}

export default App;
