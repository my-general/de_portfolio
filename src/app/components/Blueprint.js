"use client";

const stages = [
  { id: 1, title: "Source" },
  { id: 2, title: "Ingest" },
  { id: 3, title: "Transform" },
  { id: 4, title: "Warehouse" },
  { id: 5, title: "Serve" },
];

export default function Blueprint({ activeStage, onStageSelect }) {
  return (
    <div className="flex items-center justify-center space-x-1 sm:space-x-2 md:space-x-4">
      {stages.map((stage, index) => (
        <div key={stage.id} className="flex items-center">
          {/* --- RESPONSIVENESS FIX APPLIED HERE --- */}
          <button
            onClick={() => onStageSelect(stage.id)}
            className={`
              flex flex-col items-center justify-center rounded-full border-2 p-1 transition-all duration-300
              h-16 w-16 sm:h-20 sm:w-20
              ${
                activeStage >= stage.id
                  ? 'border-cyan-400 bg-cyan-400/10 text-cyan-300'
                  : 'border-slate-600 bg-slate-800 text-slate-500 hover:border-cyan-500'
              }
            `}
          >
            <span className="text-[10px] sm:text-xs font-semibold uppercase">{stage.title}</span>
            <span className="text-xl sm:text-2xl font-bold">{stage.id}</span>
          </button>
          
          {index < stages.length - 1 && (
            <div className={`
              h-1 transition-colors duration-500
              w-4 sm:w-8 md:w-12
              ${activeStage > stage.id ? 'bg-cyan-400' : 'bg-slate-700'}
            `}></div>
          )}
        </div>
      ))}
    </div>
  );
}