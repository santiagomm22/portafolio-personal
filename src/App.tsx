import "./App.css";
import PurpleGradientBackground from "./components/fondo-app/PurpleGradientBackground";
//import CardsLayout from "./components/cards/CardsLayout";

function App() {
  return (
    <PurpleGradientBackground intensity="strong">
      {/* <CardsLayout /> */}
      <h1 style={{ color: "#ffffff" }}>bienvenido</h1>
    </PurpleGradientBackground>
  );
}

export default App;
