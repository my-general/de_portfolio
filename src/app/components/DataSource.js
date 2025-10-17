"use client";
import StageCard from './StageCard';

// This is the simplified, classic "pile of disks" icon.
const DataSourceIcon = () => (
  <svg width="100%" height="100%" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    {/* The stack of disks, drawn from bottom to top for correct layering */}
    {/* Bottom disk */}
    <ellipse cx="50" cy="80" rx="28" ry="8" fill="#1e293b" stroke="#475569" strokeWidth="2" />
    <rect x="22" y="60" width="56" height="20" fill="#334155" />
    
    {/* Middle disk */}
    <ellipse cx="50" cy="60" rx="28" ry="8" fill="#1e293b" stroke="#475569" strokeWidth="2" />
    <rect x="22" y="40" width="56" height="20" fill="#334155" />

    {/* Top disk with the cyan highlight */}
    <ellipse cx="50" cy="40" rx="28" ry="8" fill="#1e293b" stroke="#22d3ee" strokeWidth="2.5" />
    
    {/* Live status light on the top disk */}
    <circle cx="70" cy="40" r="4" fill="#22d3ee">
        <animate attributeName="opacity" values="1;0.4;1" dur="2s" repeatCount="indefinite" />
    </circle>
    
    {/* Data inflow arrow */}
    <path d="M50 15 L50 35 M42 27 L50 35 L58 27" stroke="#22d3ee" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);


export default function DataSource({ data, onNext }) {
  return (
    <StageCard title="Stage 1: Data Source">
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left">
        
        <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-4 border-slate-600 flex-shrink-0 p-1 bg-slate-900 flex items-center justify-center">
          <DataSourceIcon />
        </div>
        
        <div>
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

