"use client";
import { useState } from 'react';
import StageCard from './StageCard';
import CredentialModal from './CredentialModal';

const VerifiedIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1.5 inline-block text-cyan-400" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
    </svg>
);

export default function IngestionLayer({ data, onNext }) {
  const [selectedCert, setSelectedCert] = useState(null);

  const handleOpenModal = (tech) => {
    if (tech.certification) {
      setSelectedCert(tech);
    }
  };

  const handleCloseModal = () => {
    setSelectedCert(null);
  };

  return (
    <>
      <StageCard title="Stage 2: Ingestion & Schema">
        {/* --- RESPONSIVE ADJUSTMENTS APPLIED --- */}
        <p className="mb-4 text-sm sm:text-base">Defining the schema and tools for processing the data source. Click a certified skill to view details.</p>
        {/* Adjusted gap for better spacing on mobile */}
        <div className="flex flex-wrap gap-2 sm:gap-3">
          {data.map(tech => (
            tech.certification ? (
              <button
                key={tech.name}
                onClick={() => handleOpenModal(tech)}
                aria-label={`View details for ${tech.certification}`}
                /* Adjusted font size and padding for responsiveness */
                className="flex items-center bg-slate-700 text-slate-200 text-xs sm:text-sm font-semibold px-3 sm:px-4 py-2 rounded-full transition-colors hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              >
                {tech.name}
                <VerifiedIcon />
              </button>
            ) : (
              <div
                key={tech.name}
                 /* Adjusted font size and padding for responsiveness */
                className="flex items-center bg-slate-700 text-slate-200 text-xs sm:text-sm font-semibold px-3 sm:px-4 py-2 rounded-full cursor-default"
              >
                {tech.name}
              </div>
            )
          ))}
        </div>
        <button 
          onClick={onNext} 
          className="mt-6 bg-cyan-500 hover:bg-cyan-600 text-slate-900 font-bold py-2 px-4 text-sm sm:text-base rounded-md transition-colors"
        >
          [ Start Transformation ]
        </button>
      </StageCard>

      <CredentialModal
        isOpen={!!selectedCert}
        onClose={handleCloseModal}
        certification={selectedCert}
      />
    </>
  );
}

