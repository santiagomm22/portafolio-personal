import "./App.css";
import PurpleGradientBackground from "./components/fondo-app/PurpleGradientBackground";
import HeroText from "./components/hero-inicial/HeroText";
// import CardsLayout from "./components/cards/CardsLayout";

function App() {
  return (
    <PurpleGradientBackground intensity="strong">
      <HeroText />
      {/* <CardsLayout /> */}
    </PurpleGradientBackground>
  );
}

export default App;
