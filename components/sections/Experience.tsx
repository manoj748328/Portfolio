"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrochip, faCode, faCalendarAlt } from "@fortawesome/free-solid-svg-icons";

const experiences = [
  {
    company: "SanHut",
    role: "Full Stack Developer Intern",
    period: "Recent",
    type: "Software",
    icon: faCode,
    points: [
      "Developing and maintaining web applications using the MERN stack (MongoDB, Express, React, Node.js).",
      "Collaborating on UI/UX improvements and optimizing backend API performance.",
      "Implementing responsive front-end components and integrating RESTful services."
    ]
  },
  {
    company: "TechnoSphere Private Ltd.",
    role: "Hardware Engineering Intern",
    period: "Previous",
    type: "Hardware",
    icon: faMicrochip,
    points: [
      "Gained hands-on experience in a high-precision manufacturing environment.",
      "Mastered industrial soldering techniques and PCB component assembly.",
      "Assisted in the operation and troubleshooting of Pick and Place robotic systems for SMT lines.",
      "Performed hardware debugging and quality control testing for manufactured electronic modules."
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="section-container">
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Professional Journey</h2>
        <div className="w-12 h-1 bg-brand-sage mt-2"></div>
      </div>

      <div className="relative border-l-2 border-slate-100 dark:border-slate-800 ml-4 md:ml-8 space-y-12">
        {experiences.map((exp, index) => (
          <div key={index} className="relative pl-8 group">
            {/* Timeline Dot */}
            <div className="absolute -left-[11px] top-1 w-5 h-5 bg-white dark:bg-slate-950 border-2 border-brand-sage rounded-full group-hover:bg-brand-sage transition-colors" />

            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm transition-all hover:shadow-md hover:border-brand-sage/30">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">{exp.role}</h3>
                  <p className="text-brand-sage font-semibold">{exp.company}</p>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-widest">
                  <FontAwesomeIcon icon={faCalendarAlt} />
                  {exp.period}
                </div>
              </div>

              <ul className="space-y-3">
                {exp.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-400">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-sage shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>

              {/* Tag for Hardware/Software distinction */}
              <div className="mt-6 flex gap-2">
                <span className="text-[10px] font-bold px-2 py-1 bg-brand-sage/10 text-brand-sage rounded uppercase">
                  {exp.type}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}