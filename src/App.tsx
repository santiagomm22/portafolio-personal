import "./App.css";
import PurpleGradientBackground from "./components/fondo-app/PurpleGradientBackground";
import CardsLayout from "./components/cards/CardsLayout";

function App() {
  return (
    <PurpleGradientBackground intensity="medium">
      <CardsLayout />
    </PurpleGradientBackground>
  );
}

export default App;
