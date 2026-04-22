"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCertificate, faTimes, faExpand } from "@fortawesome/free-solid-svg-icons";

export default function Honors() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="hackathons" className="section-container py-20">
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Hackathons & Innovation</h2>
        <div className="w-16 h-1 bg-brand-sage mt-2"></div>
      </div>

      <div className="flex items-start gap-4 p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl">
        <div className="p-3 bg-brand-sage/10 text-brand-sage rounded-xl">
          <FontAwesomeIcon icon={faCertificate} className="text-xl" />
        </div>
        <div className="flex-1">
          <h3 className="font-bold text-slate-900 dark:text-white">Smart India Hackathon (SIH)</h3>
          <p className="text-sm text-slate-500">Official Participation Certificate</p>
          <p className="text-xs font-bold text-brand-sage mt-1 mb-3">September 22, 2025</p>
          
          <button 
            onClick={() => setIsOpen(true)}
            className="flex items-center gap-2 text-xs font-bold text-slate-900 dark:text-white hover:text-brand-sage transition-colors"
          >
            <FontAwesomeIcon icon={faExpand} /> View Certificate
          </button>
        </div>
      </div>

      {/* PDF Modal Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="relative max-w-5xl w-full h-[80vh] bg-white dark:bg-slate-900 p-2 rounded-2xl shadow-2xl">
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute -top-12 right-0 text-white hover:text-brand-sage text-2xl"
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
            
            {/* The PDF viewer */}
            <iframe 
              src="/Manoj RVishuddhi .pdf" 
              className="w-full h-full rounded-xl"
              title="SIH Certificate"
            />
          </div>
        </div>
      )}
    </section>
  );
}