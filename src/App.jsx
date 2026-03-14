import Navbar from "./components/portfolio/Navbar";
import Hero from "./components/portfolio/Hero";
import About from "./components/portfolio/About";
import Skills from "./components/portfolio/Skills";
import Projects from "./components/portfolio/Projects";
import Experience from "./components/portfolio/Experience";
import Contact from "./components/portfolio/Contact";
import Footer from "./components/portfolio/Footer";
import BackToTop from "./components/portfolio/BackToTop";

function App() {
  return (
    <div className="bg-slate-950 text-white">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
