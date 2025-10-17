"use client";

import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import dynamic from 'next/dynamic';

// Component Imports
import Blueprint from './components/Blueprint';
import DataSource from './components/DataSource';
import ContactModal from './components/ContactModal';

// Dynamically import the other components for performance
const IngestionLayer = dynamic(() => import('./components/IngestionLayer'));
const TransformationEngine = dynamic(() => import('./components/TransformationEngine'));
const DataWarehouse = dynamic(() => import('./components/DataWarehouse'));
const ServingLayer = dynamic(() => import('./components/ServingLayer'));
import portfolioData from '../../data/portfolioData.json';


export default function Home() {
  const [activeStage, setActiveStage] = useState(1);
  const [isContactModalOpen, setContactModalOpen] = useState(false);

  const handleStageSelect = (stageId) => {
    setActiveStage(stageId);
  };
  
  const handleOpenContactModal = () => setContactModalOpen(true);
  const handleCloseContactModal = () => setContactModalOpen(false);

  const renderContent = () => {
    switch (activeStage) {
      case 1:
        return <DataSource key={1} data={portfolioData.personalInfo} onNext={() => handleStageSelect(2)} />;
      case 2:
        return <IngestionLayer key={2} data={portfolioData.techStack} onNext={() => handleStageSelect(3)} />;
      case 3:
        return <TransformationEngine key={3} data={portfolioData.projects} onNext={() => handleStageSelect(4)} />;
      case 4:
        return <DataWarehouse key={4} data={portfolioData.experience} onNext={() => handleStageSelect(5)} />;
      case 5:
        return <ServingLayer key={5} onContact={handleOpenContactModal} />;
      default:
        return null;
    }
  };

  return (
    <>
      {/* --- RESPONSIVE ADJUSTMENTS APPLIED --- */}
      {/* Adjusted padding for mobile (pt-8) and larger screens (md:pt-12) */}
      <main className="flex min-h-screen flex-col items-center p-4 pt-8 md:p-12 bg-slate-900 text-slate-300">
        <div className="w-full max-w-5xl">
          {/* Adjusted margin for mobile (mb-8) and larger screens (sm:mb-12) */}
          <div className="text-center mb-8 sm:mb-12">
            {/* Responsive heading size for better fit on small screens */}
            <h1 className="text-3xl sm:text-4xl font-bold text-cyan-400">Data Pipeline: Alex Doe</h1>
            <p className="text-slate-400 mt-2">An interactive dashboard of my skills and experience.</p>
          </div>

          <Blueprint activeStage={activeStage} onStageSelect={handleStageSelect} />

          <div className="mt-8 min-h-[300px]">
            <AnimatePresence mode="wait">
              {renderContent()}
            </AnimatePresence>
          </div>
        </div>
      </main>
      
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={handleCloseContactModal}
        contactInfo={portfolioData.contact}
      />
    </>
  );
}

