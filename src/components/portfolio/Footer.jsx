import { personalInfo } from "../../data/portfolioData";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 bg-slate-100 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex gap-8">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-600 dark:text-slate-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
          >
            GitHub
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-600 dark:text-slate-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
          >
            LinkedIn
          </a>
        </div>
        <p className="text-slate-500 text-sm">
          © {year} {personalInfo.name}. Built with React.
        </p>
      </div>
    </footer>
  );
}
