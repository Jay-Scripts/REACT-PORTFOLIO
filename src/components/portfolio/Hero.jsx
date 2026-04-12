import { personalInfo } from "../../data/portfolioData";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-20 text-center transition-colors duration-300"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/3 h-[min(90vw,36rem)] w-[min(90vw,36rem)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-400/10 blur-3xl dark:bg-amber-500/10" />
        <div className="bg-grid-slate absolute inset-0 opacity-40 dark:opacity-25" />
      </div>
      <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-amber-600 dark:text-amber-400">
        Hello, I&apos;m
      </p>
      <h1 className="mb-3 max-w-4xl text-5xl font-bold tracking-tight text-slate-900 dark:text-white md:text-7xl md:leading-[1.05]">
        {personalInfo.name}
      </h1>
      <h2 className="mb-5 text-xl font-medium text-amber-600 dark:text-amber-400 md:text-2xl">
        {personalInfo.title}
      </h2>
      <p className="mb-12 max-w-xl text-lg leading-relaxed text-slate-600 dark:text-slate-400">
        {personalInfo.tagline}
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <a
          href="#projects"
          className="rounded-full bg-amber-500 px-8 py-3.5 font-semibold text-slate-900 shadow-lg shadow-amber-500/25 transition hover:bg-amber-400 dark:shadow-amber-500/15"
        >
          View my work
        </a>
        <a
          href="#contact"
          className="rounded-full border border-slate-300 bg-white/60 px-8 py-3.5 font-semibold text-slate-800 backdrop-blur-sm transition hover:border-amber-500/50 hover:bg-amber-500/5 dark:border-slate-600 dark:bg-slate-900/40 dark:text-amber-100 dark:hover:border-amber-400/40"
        >
          Get in touch
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
