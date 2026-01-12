"use client";
import { motion } from 'framer-motion';

// Your stylish StageCard definition
const StageCard = ({ title, children }) => (
  <motion.div 
    className="bg-slate-800 border border-slate-700 rounded-xl p-6 shadow-2xl shadow-cyan-500/5"
    initial={{ opacity: 0, y: 50 }} 
    animate={{ opacity: 1, y: 0 }} 
    transition={{ duration: 0.5 }}
  >
    <div className="flex items-center gap-3 mb-6">
      <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
      <h2 className="text-2xl font-bold text-cyan-400">{title}</h2>
    </div>
    {children}
  </motion.div>
);

export default function ServingLayer({ onContact }) {
  return (
    <StageCard title="Stage 5: Final Output">
      <div className="max-w-xl mx-auto text-center">
        
        <p className="mb-8 text-slate-300 text-lg leading-relaxed">
          The data pipeline is complete. My professional profile is ready. I am eager to connect and discuss how my skills can bring value to your team.
        </p>

        {/* --- THE TWO PRIMARY ACTION BUTTONS --- */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <motion.a 
            href="/resume.pd" // Use the web-safe version of your resume
            target="_blank"
            className="group bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-bold py-3 px-6 text-lg rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/25"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Download Résumé
          </motion.a>
          
          <motion.button 
            onClick={onContact}
            className="group bg-slate-700 hover:bg-slate-600 text-white font-bold py-3 px-6 text-lg rounded-lg transition-all duration-300 border border-slate-600 hover:border-cyan-500"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Get in Touch
          </motion.button>
        </div>
      </div>
    </StageCard>
  );
}

