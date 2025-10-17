"use client";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- PROFESSIONAL SVG ICONS ---
const LinkedInIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>;
const GitHubIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.034c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>;
const EmailIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z"/></svg>;

export default function ContactModal({ isOpen, onClose, contactInfo }) {
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    if (isCopied) {
      const timer = setTimeout(() => setIsCopied(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [isCopied]);

  const handleCopyEmail = () => {
    // navigator.clipboard might not be available in all contexts (e.g., http)
    if (navigator.clipboard && contactInfo.email) {
      navigator.clipboard.writeText(contactInfo.email);
      setIsCopied(true);
    } else {
      // Fallback for older browsers or insecure contexts
      console.error("Clipboard API not available or email is missing.");
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div className="absolute inset-0 bg-black/80 backdrop-blur-sm" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}></motion.div>
          <motion.div className="relative z-10 w-full max-w-2xl rounded-lg border border-slate-700 bg-slate-900 p-8 text-slate-300 shadow-2xl" initial={{ y: "100vh", opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: "100vh", opacity: 0 }} transition={{ type: 'spring', stiffness: 120, damping: 20 }}>
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-cyan-400">Get in Touch</h2>
            {/* --- APOSTROPHE FIX APPLIED HERE --- */}
            <p className="mt-2 text-center text-slate-400">
              I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of an ambitious team.
            </p>
            
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
              <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center p-4 text-center rounded-md bg-slate-800 border border-slate-700 transition hover:border-cyan-400 hover:bg-slate-700">
                <LinkedInIcon />
                <span className="mt-2 text-lg font-bold">LinkedIn</span>
              </a>
              <a href={contactInfo.github} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center p-4 text-center rounded-md bg-slate-800 border border-slate-700 transition hover:border-cyan-400 hover:bg-slate-700">
                <GitHubIcon />
                <span className="mt-2 text-lg font-bold">GitHub</span>
              </a>
              <button onClick={handleCopyEmail} className="break-all flex flex-col items-center justify-center p-4 text-center rounded-md bg-slate-800 border border-slate-700 transition hover:border-cyan-400 hover:bg-slate-700">
                <EmailIcon />
                <span className="mt-2 text-lg font-bold">{isCopied ? 'Copied!' : 'Copy Email'}</span>
                <span className="text-sm text-slate-400">{contactInfo?.email}</span>
              </button>
            </div>
            
            <button onClick={onClose} className="absolute top-4 right-4 text-slate-500 transition hover:text-white" aria-label="Close modal">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

