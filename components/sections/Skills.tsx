"use client";

import { useState } from "react";
import { 
  ArrowRight, 
  Cpu, 
  Code2, 
  Layers3, 
  Database, 
  Cloud,
  ChevronRight
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const hardwareSkills = [
  { 
    name: "VLSI Design", 
    detail: "CMOS, Verilog, IC Layout",
    bgColor: "bg-white dark:bg-slate-900", 
    iconColor: "text-brand-sage",
    tag: "Circuit"
  },
  { 
    name: "Embedded Systems", 
    detail: "ARM, AVR, RTOS",
    bgColor: "bg-brand-sage text-white", 
    iconColor: "text-white/80",
    tag: "Core"
  },
  { 
    name: "PCB Design", 
    detail: "KiCad, Fabrication",
    bgColor: "bg-slate-950 text-white", 
    iconColor: "text-brand-sage",
    tag: "Layout"
  },
  { 
    name: "IoT Architectures", 
    detail: "MQTT, Sensor Networks",
    bgColor: "bg-white dark:bg-slate-900", 
    iconColor: "text-brand-sage",
    tag: "Network"
  },
];

const softwareCategories = [
  {
    name: "Frontend",
    icon: <Layers3 className="text-brand-sage" />,
    skills: ["React.js", "Next.js", "TypeScript", "Tailwind"],
  },
  {
    name: "Backend",
    icon: <Database className="text-brand-sage" />,
    skills: ["Node.js", "Express.js", "MongoDB", "MySQL"],
  },
  {
    name: "Cloud & DevOps",
    icon: <Cloud className="text-brand-sage" />,
    skills: ["AWS", "Docker", "Git", "Vercel"],
  },
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState<"hardware" | "software">("hardware");

  return (
    <section id="skills" className="section-container bg-slate-50 dark:bg-slate-950 py-24 transition-colors duration-300">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4 text-slate-950 dark:text-white tracking-tight">Technical Stack</h2>
        <p className="max-w-xl mx-auto text-slate-600 dark:text-slate-400 font-medium">
          A dual-threat expertise spanning physical silicon and digital architecture.
        </p>
      </div>

      {/* 1. UNIQUE SLIDING TAB SWITCHER */}
      <div className="flex justify-center mb-20">
        <div className="relative flex p-1.5 bg-slate-200 dark:bg-slate-800 rounded-2xl w-full max-w-md shadow-inner">
          {/* Animated Background Slider */}
          <div 
            className={`absolute top-1.5 bottom-1.5 left-1.5 w-[calc(50%-6px)] bg-white dark:bg-slate-700 rounded-xl shadow-md transition-all duration-500 ease-out transform ${
              activeTab === "software" ? "translate-x-full" : "translate-x-0"
            }`}
          />
          
          <button
            onClick={() => setActiveTab("hardware")}
            className={`relative z-10 flex-1 flex items-center justify-center gap-2 py-3 font-bold transition-colors duration-300 ${
              activeTab === "hardware" ? "text-brand-sage" : "text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"
            }`}
          >
            <Cpu size={18} /> Hardware
          </button>
          
          <button
            onClick={() => setActiveTab("software")}
            className={`relative z-10 flex-1 flex items-center justify-center gap-2 py-3 font-bold transition-colors duration-300 ${
              activeTab === "software" ? "text-brand-sage" : "text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"
            }`}
          >
            <Code2 size={18} /> Software
          </button>
        </div>
      </div>

      {/* 2. ANIMATED TAB CONTENT */}
      <div className="min-h-[400px]">
        {activeTab === "hardware" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {hardwareSkills.map((skill, index) => (
              <div 
                key={index} 
                className={`group rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${skill.bgColor}`}
              >
                <div className="flex flex-col h-full justify-between">
                  <div>
                    <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded bg-slate-500/10 mb-4 inline-block`}>
                      {skill.tag}
                    </span>
                    <h3 className="text-xl font-bold mb-2 leading-tight">
                      {skill.name}
                    </h3>
                    <p className="text-sm opacity-80 font-medium mb-6">
                      {skill.detail}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {softwareCategories.map((category) => (
              <div key={category.name} className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-brand-sage/10 flex items-center justify-center">
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-bold text-slate-950 dark:text-white">{category.name}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((s) => (
                    <span 
                      key={s} 
                      className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs font-semibold hover:bg-brand-sage hover:text-white transition-colors cursor-default"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}