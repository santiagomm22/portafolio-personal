import { useState } from "react";
import "./App.css";
import PurpleGradientBackground from "./components/fondo-app/PurpleGradientBackground";

function App() {
  const [count, setCount] = useState(0);

  return (
    <PurpleGradientBackground intensity="medium">
      <div className="p-6">
        <div>
          <a href="https://vite.dev" target="_blank"></a>
          <a href="https://react.dev" target="_blank"></a>
        </div>
        <h1 className="text-white text-3xl font-bold mb-4">Vite + React</h1>
        <div className="card bg-black/30 p-4 rounded-lg border border-violet-900/30 backdrop-blur-sm">
          <button
            onClick={() => setCount((count) => count + 1)}
            className="bg-violet-900 hover:bg-violet-800 text-white px-4 py-2 rounded mb-4"
          >
            count is {count}
          </button>
          <p className="text-gray-300">
            Edit <code className="text-violet-300">src/App.tsx</code> and save
            to test HMR
          </p>
        </div>
        <p className="text-gray-400 mt-4">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </PurpleGradientBackground>
  );
}

export default App;
