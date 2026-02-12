import React from 'react';
import { Volume2, Lock } from 'lucide-react';

const VSLSection: React.FC = () => {
  return (
    <section className="px-4 pb-8 md:pb-12 pt-1 md:pt-0">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-center text-sm md:text-2xl font-bold mb-2 md:mb-4 text-gray-800">
          Watch This Short Presentation Before It’s Removed
        </h2>
        
        <div className="relative w-full aspect-video bg-black rounded-xl shadow-2xl overflow-hidden group cursor-pointer border-2 md:border-4 border-gray-900">
          <div className="absolute inset-0 flex items-center justify-center flex-col z-10">
             <div className="w-14 h-14 md:w-20 md:h-20 bg-red-600 rounded-full flex items-center justify-center mb-2 md:mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <svg className="w-6 h-6 md:w-8 md:h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
             </div>
             <p className="text-white text-xs md:text-base font-bold tracking-widest animate-pulse">[VSL VIDEO EMBED GOES HERE]</p>
          </div>
          
          {/* Faux progress bar */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-800">
            <div className="h-full w-0 bg-red-600"></div>
          </div>
        </div>

        <div className="mt-3 md:mt-4 flex flex-col items-center space-y-1 md:space-y-2 text-center">
          <div className="flex items-center gap-2 text-gray-700 font-semibold text-xs md:text-sm animate-bounce">
            <Volume2 className="w-4 h-4 md:w-5 md:h-5" />
            <span>Turn up your volume to hear clearly</span>
          </div>
          <p className="text-xs md:text-sm text-gray-500 flex items-center gap-1">
            <Lock className="w-3 h-3" />
            Watch until the end to unlock the full method
          </p>
          <p className="text-[10px] md:text-xs text-red-500 font-medium">
            * This works best if you watch without distractions
          </p>
        </div>
      </div>
    </section>
  );
};

export default VSLSection;