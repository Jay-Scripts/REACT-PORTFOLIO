import { personalInfo } from "../../data/portfolioData";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 pt-20 bg-slate-100 dark:bg-slate-950 transition-colors duration-300"
    >
      <p className="text-amber-600 dark:text-amber-400 font-medium tracking-widest uppercase text-sm mb-4">
        Hello, I'm
      </p>
      <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-2">
        {personalInfo.name}
      </h1>
      <h2 className="text-xl md:text-2xl text-amber-600 dark:text-amber-400 mb-4">
        {personalInfo.title}
      </h2>
      <p className="text-slate-600 dark:text-slate-400 text-lg max-w-xl mb-12">
        {personalInfo.tagline}
      </p>
      <div className="flex flex-wrap gap-4 justify-center">
        <a
          href="#projects"
          className="px-8 py-3 bg-amber-500 text-slate-900 font-semibold rounded-lg hover:bg-amber-400 transition-colors"
        >
          View My Work
        </a>
        <a
          href="#contact"
          className="px-8 py-3 border border-amber-500 text-amber-600 dark:text-amber-400 font-semibold rounded-lg hover:bg-amber-500/10 transition-colors"
        >
          Get In Touch
        </a>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 text-sm">
        <span>Scroll</span>
        <div className="w-6 h-10 border-2 border-slate-600 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-amber-400 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
