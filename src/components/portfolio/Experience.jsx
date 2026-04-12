import { experience } from "../../data/portfolioData";

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-24 px-6 bg-slate-100 dark:bg-slate-950 transition-colors duration-300"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-16 border-b-2 border-amber-500 w-fit pb-2">
          Experience
        </h2>
        <div className="space-y-12 relative border-l-2 border-slate-300 dark:border-slate-800 pl-8 md:pl-12">
          {experience.map((job) => (
            <div key={job.id} className="relative">
              <div className="absolute -left-[40px] md:-left-[56px] top-1 w-4 h-4 rounded-full bg-amber-500" />
              <span className="text-amber-600 dark:text-amber-400 text-sm font-medium">
                {job.period}
              </span>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mt-1">
                {job.role}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 font-medium">
                {job.company}
              </p>
              <p className="text-slate-600 dark:text-slate-300 mt-3 leading-relaxed">
                {job.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
