"use client";
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import StageCard from './StageCard'; // Import the memoized StageCard

// SVG Icon for GitHub link.
const GitHubIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 16 16">
        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
    </svg>
);

function ProjectCard({ project }) {
    const [lastCommit, setLastCommit] = useState('pending...');

    useEffect(() => {
        fetch(`/api/github-status?repo=${project.repo}`)
            .then(res => res.json())
            .then(data => {
                if (data.lastCommitDate) {
                    const date = new Date(data.lastCommitDate);
                    setLastCommit(date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }));
                } else {
                    setLastCommit('Not available');
                }
            })
            .catch(() => setLastCommit('Error fetching status'));
    }, [project.repo]);

    return (
        // --- RESPONSIVE ADJUSTMENTS APPLIED ---
        <div className="bg-slate-900 p-3 sm:p-4 rounded-md">
            <div className="flex justify-between items-start">
                <div>
                    {/* Responsive title font size */}
                    <h3 className="font-bold text-white text-base sm:text-lg">
                      <a 
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          bg-gradient-to-r from-cyan-400 to-cyan-400 
                          bg-no-repeat 
                          [background-position:0_100%] 
                          [background-size:0%_2px] 
                          hover:[background-size:100%_2px] 
                          transition-all duration-300
                        "
                      >
                        {project.title}
                      </a>
                    </h3>
                    <p className="text-sm text-slate-400 mt-1">{project.description}</p>
                </div>
                {/* Responsive margin for the icon */}
                <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    title="View Repository on GitHub"
                    aria-label={`View the ${project.title} repository on GitHub`}
                    className="ml-2 sm:ml-4 flex-shrink-0 text-slate-400 hover:text-cyan-400 transition-colors"
                >
                    <GitHubIcon />
                </a>
            </div>
            <div className="text-xs text-cyan-400 mt-2">
                Live Status (Last Commit): <span className="text-slate-300">{lastCommit}</span> 
            </div>
        </div>
    );
}

export default function TransformationEngine({ data, onNext }) {
    return (
        <StageCard title="Stage 3: Transformation Engine">
            {/* Responsive text size for intro paragraph */}
            <p className="mb-4 text-sm sm:text-base">Applying business logic to enrich the data. These projects represent key transformations.</p>
            <div className="space-y-4">
                {data.map(project => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
            {/* Responsive text size for button */}
            <button 
                onClick={onNext} 
                className="mt-6 bg-cyan-500 hover:bg-cyan-600 text-slate-900 font-bold py-2 px-4 text-sm sm:text-base rounded-md transition-colors"
            >
                [ Load to Warehouse ]
            </button>
        </StageCard>
    );
}

