import { skills } from "../../data/portfolioData";

export default function Skills() {
  const skillCategories = [
    { title: "Frontend", items: skills.frontend },
    { title: "Backend", items: skills.backend },
    { title: "Tools & More", items: skills.tools },
  ];

  return (
    <section id="skills" className="py-24 px-6 bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 border-b-2 border-amber-500 w-fit pb-2">
          Skills
        </h2>
        <div className="grid md:grid-cols-3 gap-12">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-slate-900/50 p-8 rounded-xl border border-slate-800"
            >
              <h3 className="text-lg font-semibold text-amber-400 mb-6">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-slate-800 text-slate-300 rounded-lg text-sm"
                  >
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
