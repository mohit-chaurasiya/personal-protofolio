import Background from "./components/Background";
import Navbar from "./components/Navbar";
import About from "./sections/About/About";
import FloatingParticle from "./sections/Hero/FloatingParticles";
import Hero from "./sections/Hero/Hero";
function App() {
  return (
    <>
      <Background />
      <main className="relative z-10 overflow-hidden">
        <Navbar />
        <FloatingParticle />
        <Hero />
        <About />
      </main>
    </>
  );
}

export default App;
