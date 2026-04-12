"use client";

import Navbar from "../components/portfolio/Navbar";
import Hero from "../components/portfolio/Hero";
import About from "../components/portfolio/About";
import Skills from "../components/portfolio/Skills";
import Projects from "../components/portfolio/Projects";
import Experience from "../components/portfolio/Experience";
import Contact from "../components/portfolio/Contact";
import Footer from "../components/portfolio/Footer";
import BackToTop from "../components/portfolio/BackToTop";
import { ThemeProvider } from "../context/ThemeContext";

export default function Page() {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen bg-slate-50 text-slate-900 antialiased transition-colors duration-300 selection:bg-amber-500/25 selection:text-slate-900 dark:bg-slate-950 dark:text-white dark:selection:bg-amber-400/20 dark:selection:text-white">
        <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-32 right-[-10%] h-[28rem] w-[28rem] rounded-full bg-amber-400/12 blur-3xl dark:bg-amber-500/8" />
          <div className="absolute top-[40%] -left-20 h-80 w-80 rounded-full bg-sky-500/10 blur-3xl dark:bg-sky-500/8" />
          <div className="absolute bottom-0 left-1/2 h-64 w-[min(100%,48rem)] -translate-x-1/2 rounded-full bg-violet-500/5 blur-3xl dark:bg-violet-500/10" />
        </div>
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
    </ThemeProvider>
  );
}

