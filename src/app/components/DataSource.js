"use client";
import StageCard from './StageCard';

export default function DataSource({ data, onNext }) {
  return (
    <StageCard title="Stage 1: Data Source">
      {/* --- RESPONSIVE ADJUSTMENTS APPLIED --- */}
      {/* Flex direction changes from column on mobile to row on small screens and up */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left">
        {/* Responsive image size */}
        <img 
          src={data.headshot} 
          alt={`Headshot of ${data.name}`} 
          className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-4 border-slate-600 flex-shrink-0"
        />
        <div>
          {/* Responsive typography */}
          <h3 className="text-2xl sm:text-3xl font-bold text-white">{data.name}</h3>
          <p className="text-lg sm:text-xl text-slate-400 mb-2">{data.title}</p>
          <p className="text-slate-300">{data.summary}</p>
          <button 
            onClick={onNext}
            className="mt-4 bg-cyan-500 hover:bg-cyan-600 text-slate-900 font-bold py-2 px-4 rounded-md transition-colors"
          >
            [ Begin Ingestion ]
          </button>
        </div>
      </div>
    </StageCard>
  );
}
