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
      <main className="min-h-screen bg-slate-900 text-slate-300 w-full overflow-x-hidden">
        <div className="w-full mx-auto px-4 py-4 sm:px-4 sm:py-6 md:px-6 md:py-8 lg:px-8 lg:py-12">
          {/* Header */}
          <div className="text-center mb-6 sm:mb-8 md:mb-12 w-full">
            <h1 className="text-xl font-bold text-cyan-400 break-words 
                          xs:text-2xl 
                          sm:text-3xl 
                          md:text-4xl
                          leading-tight">
              Data Pipeline: Alex Doe
            </h1>
            <p className="text-slate-400 mt-1 sm:mt-2 text-xs sm:text-sm md:text-base">
              An interactive dashboard of my skills and experience.
            </p>
          </div>

          {/* Blueprint - FIXED FOR SAMSUNG MOBILE */}
          <div className="w-full flex justify-center">
            <div className="w-full max-w-full overflow-x-auto">
              <div className="min-w-min px-2 py-2 flex justify-center">
                <Blueprint activeStage={activeStage} onStageSelect={handleStageSelect} />
              </div>
            </div>
          </div>

          {/* Content Area */}
          <div className="mt-4 sm:mt-6 md:mt-8 min-h-[250px] sm:min-h-[300px] w-full">
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
