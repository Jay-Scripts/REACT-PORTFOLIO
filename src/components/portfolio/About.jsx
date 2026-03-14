import { personalInfo } from "../../data/portfolioData";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-12 border-b-2 border-amber-500 w-fit pb-2">
          About Me
        </h2>
        <div className="space-y-6 text-slate-600 dark:text-slate-300 leading-relaxed">
          <p>
            I'm a passionate full stack developer with a knack for turning
            complex problems into elegant solutions. With experience across the
            entire development lifecycle, I specialize in building responsive,
            performant web applications that delight users.
          </p>
          <p>
            When I'm not coding, you'll find me contributing to open source,
            exploring new technologies, or sharing knowledge with the dev
            community. I believe in clean code, continuous learning, and
            collaboration.
          </p>
        </div>
        <div className="flex gap-6 mt-10">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-600 dark:text-amber-400 hover:text-amber-500 dark:hover:text-amber-300 font-medium transition-colors"
          >
            GitHub
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-600 dark:text-amber-400 hover:text-amber-500 dark:hover:text-amber-300 font-medium transition-colors"
          >
            LinkedIn
          </a>
          {personalInfo.resume && (
            <a
              href={personalInfo.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-600 dark:text-amber-400 hover:text-amber-500 dark:hover:text-amber-300 font-medium transition-colors"
            >
              Resume
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
