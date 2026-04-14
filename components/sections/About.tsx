"use client";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileDownload } from '@fortawesome/free-solid-svg-icons';

export default function About() {
  // 1. Paste your direct image link here.
  // Make sure it ends with an image extension (like .jpg or .png).
  // For now, I have created a sample link representing your image.
  const imageUrl = "\WhatsApp Image 2026-04-14 at 17.58.47.jpeg";

  return (
    <section id="about" className="section-container pt-32 bg-white dark:bg-slate-950 transition-colors duration-300">
      {/* 40/60 Grid Split (5 cols / 7 cols) */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-20 items-center">

        {/* LEFT SIDE: Image Section (40% width) */}
        <div className="relative group md:col-span-5">
          {/* Decorative shadow element */}
          <div className="absolute -inset-4 bg-brand-sage/10 rounded-[2rem] scale-95 group-hover:scale-100 transition-transform duration-500" />

          {/* Image Container with rounded edges and aspect ratio */}
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 w-full">
            <img
              src={imageUrl}
              alt="Manoj R. Professional Portrait"
              className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
            />
            {/* Gradient overlay for professional depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60" />
          </div>

          {/* Floating Badge (Manoj R. Portfolio - ECE Engineer) */}
          <div className="absolute -bottom-6 -right-4 bg-white dark:bg-slate-900 p-4 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800 hidden lg:block">
            <p className="text-brand-sage font-bold text-sm">ECE ENGINEER</p>
            <p className="text-slate-400 text-[10px] font-medium uppercase tracking-widest">Manoj R. Portfolio</p>
          </div>
        </div>

        {/* RIGHT SIDE: Content Section (60% width) */}
        <div className="space-y-6 md:col-span-7">
          <header>
            <span className="px-3 py-1 bg-brand-sage/10 text-brand-sage rounded-full text-xs font-bold uppercase tracking-wider">
              About Me
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold mt-4 text-slate-900 dark:text-white leading-tight">
              Bridging <span className="text-brand-sage">Hardware</span> & <br />
              <span className="text-brand-sage">Software</span> Synergy.
            </h2>
          </header>

          {/* Body Content */}
          <div className="space-y-5">
            <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-400 font-medium">
              Studying <span className="text-slate-900 dark:text-white italic">Electronics and Communication Engineering (ECE)</span> has equipped me with a unique dual perspective on technology.
              I have spent my undergraduate years exploring the intricate world of VLSI design, microcontroller programming, and wireless communication, while simultaneously honing my skills in modern software development.
            </p>

            <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-400">
              My experience ranges from hands-on hardware prototyping and debugging with tools like oscilloscopes and logic analyzers to architecting scalable digital solutions.
              I am particularly interested in the intersection of <span className="text-brand-sage font-semibold">IoT and Embedded Intelligence</span>, aiming to create integrated systems that are not only functional but also sustainable and impactful.
            </p>
          </div>

          <div className="pt-6">
            <a
              href="/Resume.pdf"
              download="My_Resume.pdf" // This forces the download instead of opening it in a tab
              className="btn-primary flex items-center gap-3 w-fit"
            >
              <FontAwesomeIcon icon={faFileDownload} />
              Download Resume
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}