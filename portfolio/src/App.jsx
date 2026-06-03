import Background from "./components/Background";
import Navbar from "./components/Navbar";
import About from "./sections/About/About";
import FloatingParticle from "./sections/Hero/FloatingParticles";
import Hero from "./sections/Hero/Hero";
import Skills from "./sections/Skills/Skills";
import Projects from "./sections/Project/Projects";
function App() {
  return (
    <>
      <Background />
      <main className="relative z-10 overflow-hidden">
        <Navbar />
        <FloatingParticle />
        <Hero />
        <About />
        <Skills />
        <Projects />
      </main>
    </>
  );
}

export default App;
