"use client";
import { motion, AnimatePresence } from 'framer-motion';

export default function CredentialModal({ isOpen, onClose, certification }) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          ></motion.div>

          {/* Modal Content */}
          <motion.div
            className="relative z-10 w-full max-w-lg rounded-lg border border-slate-700 bg-slate-800 p-6 text-slate-300 shadow-2xl"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 200, damping: 25 }}
          >
            <h3 className="mb-1 text-2xl font-bold text-cyan-400">{certification.certification}</h3>
            <p className="mb-4 text-sm text-slate-400">Issued: {certification.issueDate || 'N/A'}</p>
            
            <div className="mt-6 flex flex-wrap gap-4">
              {/* "Verify Online" button (no changes) */}
              {certification.credentialUrl && (
                <a href={certification.credentialUrl} target="_blank" rel="noopener noreferrer" className="flex-1 rounded-md bg-cyan-500 px-4 py-2 text-center font-bold text-slate-900 transition hover:bg-cyan-600">
                  Verify Online
                </a>
              )}

              {/* --- MODIFICATION APPLIED HERE --- */}
              {/* This button now opens the PDF in a new tab instead of downloading it. */}
              {certification.certificateFile && (
                <a 
                  href={certification.certificateFile} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 rounded-md border border-slate-600 bg-slate-700 px-4 py-2 text-center font-bold text-white transition hover:bg-slate-600"
                >
                  View Certificate
                </a>
              )}
            </div>

            <button
              onClick={onClose}
              className="absolute top-3 right-3 text-slate-500 transition hover:text-white"
              aria-label="Close modal"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}