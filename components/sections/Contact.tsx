"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faArrowRight, faCopy } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "manojmanu11011@gmail.com";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="section-container py-20">
      <div className="relative bg-brand-sage dark:bg-brand-sage/90 rounded-[3rem] p-8 md:p-16 overflow-hidden text-center">
        
        {/* Background Decorative Circles */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl" />

        <div className="relative z-10">
          <h2 className="text-white text-4xl md:text-6xl font-extrabold mb-6">
            Let's build the <br /> future together.
          </h2>
          
          <p className="text-white/80 text-lg md:text-xl max-w-xl mx-auto mb-12">
            Whether you have a hardware challenge or a software project, 
            I'm always open to discussing new opportunities and collaborations.
          </p>

          {/* Email Button Group */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-12">
            <a 
              href={`mailto:${email}`}
              className="group flex items-center gap-3 bg-white text-brand-sage px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all shadow-xl"
            >
              <FontAwesomeIcon icon={faEnvelope} />
              Say Hello
              <FontAwesomeIcon icon={faArrowRight} className="group-hover:translate-x-1 transition-transform" />
            </a>

            <button 
              onClick={copyToClipboard}
              className="flex items-center gap-2 text-white/90 hover:text-white font-medium px-6 py-4 transition-colors"
            >
              <FontAwesomeIcon icon={copied ? faArrowRight : faCopy} />
              {copied ? "Copied!" : "Copy Email"}
            </button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-8">
            <a 
              href="https://www.linkedin.com/in/manoj-r-218189356" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white text-3xl transition-all hover:-translate-y-1"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a 
              href="https://github.com/manoj748328" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white text-3xl transition-all hover:-translate-y-1"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-20 pt-8 border-t border-white/10 text-white/50 text-sm">
          © {new Date().getFullYear()} Manoj R. Designed with Sage & White.
        </div>
      </div>
    </section>
  );
}