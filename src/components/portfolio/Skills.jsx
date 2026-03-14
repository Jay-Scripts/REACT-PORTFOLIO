import { skills } from "../../data/portfolioData";
import { skillIcons } from "./skillIcons";

export default function Skills() {
  const skillCategories = [
    { title: "Frontend", items: skills.frontend },
    { title: "Backend", items: skills.backend },
    { title: "Tools & More", items: skills.tools },
  ];

  return (
    <section id="skills" className="py-24 px-6 bg-slate-100 dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-16 border-b-2 border-amber-500 w-fit pb-2">
          Skills
        </h2>
        <div className="grid md:grid-cols-3 gap-12">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-white dark:bg-slate-900/50 p-8 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-none transition-colors duration-300"
            >
              <h3 className="text-lg font-semibold text-amber-600 dark:text-amber-400 mb-6">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.items.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg text-sm hover:bg-slate-300 dark:hover:bg-slate-700 hover:border-slate-400 dark:hover:border-slate-600 border border-transparent transition-all duration-200"
                  >
                    {(() => {
                      const Icon = skillIcons[skill];
                      return Icon ? (
                        <span className="shrink-0">
                          <Icon className="size-5" />
                        </span>
                      ) : null;
                    })()}
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
