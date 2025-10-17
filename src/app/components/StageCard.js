// src/components/StageCard.js
"use client";
import { motion } from 'framer-motion';
import { memo } from 'react'; // <-- Import memo

const StageCardComponent = ({ title, children }) => {
  return (
    <motion.div
      className="bg-slate-800 border border-slate-700 rounded-lg p-6"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold text-cyan-400 mb-4">{title}</h2>
      {children}
    </motion.div>
  );
};

// Export the memoized version
export default memo(StageCardComponent);