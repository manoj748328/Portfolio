"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { 
  faTowerBroadcast, 
  faRobot, 
  faEye, 
  faMicrochip, 
  faArrowRight 
} from "@fortawesome/free-solid-svg-icons";

const projects = [
  {
    title: "5G NR Performance",
    status: "Research",
    desc: "SDR-based evaluation of 5G New Radio protocols.",
    tags: ["5G NR", "SDR", "Wireless"],
    icon: faTowerBroadcast,
    isResearch: true,
  },
  {
    title: "Pick & Place Robot",
    status: "Real-time",
    desc: "Integrated robotic system for automated handling.",
    tags: ["Robotics", "Embedded"],
    icon: faRobot,
  },
  {
    title: "ESP32 Bird Detection",
    status: "IoT",
    desc: "Intelligent monitoring using ESP32-CAM module.",
    tags: ["Computer Vision", "IoT"],
    icon: faEye,
  },
  {
    title: "Arduino Series",
    status: "Core",
    desc: "Automation suite using the Arduino ecosystem.",
    tags: ["C++", "Prototyping"],
    icon: faMicrochip,
  }
];

export default function Projects() {
  return (
    <section id="projects" className="section-container">
      <div className="mb-10">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Featured Projects</h2>
        <div className="w-16 h-1 bg-brand-sage mt-2"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="group p-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl transition-all hover:border-brand-sage hover:-translate-y-1"
          >
            {/* Minimal Header */}
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-brand-sage/10 rounded-lg text-brand-sage">
                <FontAwesomeIcon icon={project.icon} className="text-lg" />
              </div>
              <span className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-tighter ${
                project.isResearch ? 'bg-amber-100 text-amber-700' : 'bg-slate-100 dark:bg-slate-800 text-slate-500'
              }`}>
                {project.status}
              </span>
            </div>

            {/* Content */}
            <h3 className="font-bold text-slate-900 dark:text-white mb-2 line-clamp-1 group-hover:text-brand-sage">
              {project.title}
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-4 line-clamp-2">
              {project.desc}
            </p>

            {/* Small Tags */}
            <div className="flex flex-wrap gap-1 mb-6">
              {project.tags.map(tag => (
                <span key={tag} className="text-[10px] px-2 py-0.5 bg-slate-50 dark:bg-slate-800 text-slate-400 rounded">
                  {tag}
                </span>
              ))}
            </div>

            {/* Simple Footer Links */}
            <div className="flex items-center justify-between border-t border-slate-100 dark:border-slate-800 pt-4">
              <a href="#" className="text-xs font-bold text-slate-400 hover:text-brand-sage transition-colors">
                <FontAwesomeIcon icon={faGithub} className="mr-1" /> Code
              </a>
              <button className="text-brand-sage text-xs font-bold">
                Details <FontAwesomeIcon icon={faArrowRight} className="ml-1 text-[10px]" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}