"use client";

import { useSyncExternalStore } from "react";
import { skills } from "../../data/portfolioData";
import { skillIcons } from "./skillIcons";

function subscribeReducedMotion(cb) {
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  mq.addEventListener("change", cb);
  return () => mq.removeEventListener("change", cb);
}

function getReducedMotionSnapshot() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getReducedMotionServerSnapshot() {
  return false;
}

function usePrefersReducedMotion() {
  return useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot
  );
}

function SkillChip({ name }) {
  const Icon = skillIcons[name];
  return (
    <span className="inline-flex shrink-0 items-center gap-2.5 rounded-full border border-slate-200/90 bg-white/90 px-5 py-2.5 text-sm font-medium text-slate-800 shadow-sm backdrop-blur-sm dark:border-slate-700/80 dark:bg-slate-800/90 dark:text-slate-100">
      {Icon ? (
        <span className="flex size-5 shrink-0 items-center justify-center [&_img]:size-5 [&_svg]:size-5">
          <Icon className="size-5" />
        </span>
      ) : null}
      {name}
    </span>
  );
}

function SkillMarqueeRow({ label, items, reverse }) {
  const reducedMotion = usePrefersReducedMotion();

  if (reducedMotion) {
    return (
      <div className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
          {label}
        </p>
        <div className="flex flex-wrap gap-3 py-1">
          {items.map((skill) => (
            <SkillChip key={skill} name={skill} />
          ))}
        </div>
      </div>
    );
  }

  const loop = [...items, ...items];
  return (
    <div className="skill-marquee space-y-3">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
        {label}
      </p>
      <div className="relative">
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-slate-100 to-transparent dark:from-slate-950"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-slate-100 to-transparent dark:from-slate-950"
          aria-hidden
        />
        <div className="overflow-hidden py-1">
          <div
            className={`skill-marquee-track py-0.5 ${reverse ? "skill-marquee-track--reverse" : ""}`}
          >
            {loop.map((skill, i) => (
              <SkillChip key={`${skill}-${i}`} name={skill} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Skills() {
  const rows = [
    { label: "Frontend", items: skills.frontend, reverse: false },
    { label: "Backend", items: skills.backend, reverse: true },
    { label: "Tools & workflow", items: skills.tools, reverse: false },
  ];

  return (
    <section
      id="skills"
      className="relative overflow-hidden border-y border-slate-200/80 bg-slate-100 py-28 px-6 dark:border-slate-800/80 dark:bg-slate-950"
    >
      <div
        className="bg-grid-slate pointer-events-none absolute inset-0 opacity-60 dark:opacity-40"
        aria-hidden
      />
      <div className="pointer-events-none absolute -left-24 top-1/4 h-72 w-72 rounded-full bg-amber-400/15 blur-3xl dark:bg-amber-500/10" aria-hidden />
      <div className="pointer-events-none absolute -right-24 bottom-1/4 h-72 w-72 rounded-full bg-sky-500/10 blur-3xl dark:bg-sky-500/10" aria-hidden />

      <div className="relative mx-auto max-w-6xl">
        <div className="mb-14 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-amber-600 dark:text-amber-400">
            Stack
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white md:text-4xl">
            Skills &amp; tools
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-600 dark:text-slate-400">
            Technologies I use to design, build, and ship modern web applications.
          </p>
        </div>

        <div className="space-y-12 rounded-3xl border border-slate-200/90 bg-white/70 p-8 shadow-xl shadow-slate-900/5 backdrop-blur-md dark:border-slate-800/90 dark:bg-slate-900/50 dark:shadow-black/20 md:p-10">
          {rows.map((row) => (
            <SkillMarqueeRow
              key={row.label}
              label={row.label}
              items={row.items}
              reverse={row.reverse}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
