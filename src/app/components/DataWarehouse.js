"use client";
import StageCard from './StageCard';

export default function DataWarehouse({ data, onNext }) {
  return (
    <StageCard title="Stage 4: Data Warehouse">
        {/* --- RESPONSIVE ADJUSTMENTS APPLIED --- */}
        {/* Responsive text size for intro paragraph */}
        <p className="mb-6 text-sm sm:text-base text-slate-300">
            Storing the structured, transformed data as a reliable source of truth.
        </p>

        {/* Responsive padding and spacing for the timeline */}
        <div className="border-l-2 border-slate-600 pl-4 sm:pl-6 space-y-8">
            {data.map(exp => (
                <div key={exp.company}>
                    {/* Responsive typography for job roles and company names */}
                    <h3 className="text-lg sm:text-xl font-bold text-white">{exp.role}</h3>
                    <p className="text-base sm:text-lg text-slate-400">{exp.company}</p>
                    <p className="text-xs text-cyan-400 mt-1">{exp.period}</p>
                </div>
            ))}
        </div>
        
        {/* Responsive margin and text size for the button */}
        <button 
            onClick={onNext} 
            className="mt-8 bg-cyan-500 hover:bg-cyan-600 text-slate-900 font-bold py-2 px-4 text-sm sm:text-base rounded-md transition-colors"
        >
            [ Expose via API ]
        </button>
    </StageCard>
  );
}
