import "./App.css";
import ParticlesBackground from "./components/fondo-app/ParticlesBackground";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import Skills from "./components/sections/Skills";
import Experience from "./components/sections/Experience";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";

function App() {
  return (
    <ParticlesBackground>
      <Navbar />
      <main>
        <Hero />

        <div className="section-divider mx-6" />
        <Skills />

        <div className="section-divider mx-6" />
        <Experience />

        <div className="section-divider mx-6" />
        <Projects />

        <div className="section-divider mx-6" />
        <Contact />
      </main>
    </ParticlesBackground>
  );
}

export default App;
