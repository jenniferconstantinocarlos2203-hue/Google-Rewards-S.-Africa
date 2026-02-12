import React from 'react';
import Hero from './components/Hero';
import VSLSection from './components/VSLSection';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import HowItWorks from './components/HowItWorks';
import DifferenceSection from './components/DifferenceSection';
import Testimonials from './components/Testimonials';
import WhoIsItFor from './components/WhoIsItFor';
import FAQ from './components/FAQ';
import ClosingSection from './components/ClosingSection';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Top Warning Bar */}
      <div className="bg-red-700 text-white text-center py-2 text-xs md:text-sm font-bold uppercase tracking-wider px-4">
        Warning: This presentation may be taken down at any time. Watch now.
      </div>

      <div className="max-w-3xl mx-auto bg-white shadow-xl overflow-hidden">
        <Hero />
        <VSLSection />
        <Testimonials />
        <ProblemSection />
        <SolutionSection />
        <HowItWorks />
        <DifferenceSection />
        <WhoIsItFor />
        <FAQ />
        <ClosingSection />
        
        <footer className="bg-gray-100 py-8 text-center text-gray-500 text-xs">
          <p className="mb-2">© 2024 Digital Rewards SA. All rights reserved.</p>
          <p>This site is not part of the Google website or Google Inc. Additionally, This site is NOT endorsed by Google in any way.</p>
        </footer>
      </div>
    </div>
  );
};

export default App;