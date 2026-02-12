import React from 'react';
import { CheckCircle2, AlertTriangle, ShieldCheck } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="pt-3 pb-2 px-3 md:pt-8 md:pb-4 md:px-10 text-center">
      <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-800 px-2 py-0.5 md:px-3 md:py-1 rounded-full text-[10px] md:text-xs font-bold mb-2 md:mb-6 border border-blue-100">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
        </span>
        ATTENTION: SOUTH AFRICA
      </div>
      
      <h1 className="text-xl md:text-5xl font-black leading-tight text-gray-900 mb-2 md:mb-4 tracking-tight">
        Discover How Ordinary South Africans Are Getting Paid <span className="text-red-600 bg-red-50 px-1 md:px-2 rounded">R500 - R2,500 Daily</span> Using Just Their Smartphones...
      </h1>

      <p className="text-sm md:text-xl text-gray-600 font-medium mb-3 md:mb-8 max-w-2xl mx-auto leading-snug">
        (Even if you have zero experience, no laptop, and limited data)
      </p>

      <div className="bg-gray-50 border-l-2 md:border-l-4 border-blue-600 p-2 md:p-4 mb-3 md:mb-8 text-left max-w-xl mx-auto rounded-r-lg shadow-sm">
        <ul className="space-y-1 md:space-y-3">
          <li className="flex items-start gap-2 md:gap-3">
            <CheckCircle2 className="w-4 h-4 md:w-6 md:h-6 text-green-500 shrink-0" />
            <span className="font-semibold text-gray-800 text-xs md:text-base">Get paid directly into your account</span>
          </li>
          <li className="flex items-start gap-2 md:gap-3">
            <CheckCircle2 className="w-4 h-4 md:w-6 md:h-6 text-green-500 shrink-0" />
            <span className="font-semibold text-gray-800 text-xs md:text-base">Work from anywhere (JHB, Durban, Cape Town, etc.)</span>
          </li>
          <li className="flex items-start gap-2 md:gap-3">
            <CheckCircle2 className="w-4 h-4 md:w-6 md:h-6 text-green-500 shrink-0" />
            <span className="font-semibold text-gray-800 text-xs md:text-base">Start immediately - No interviews needed</span>
          </li>
          <li className="flex items-start gap-2 md:gap-3">
            <CheckCircle2 className="w-4 h-4 md:w-6 md:h-6 text-green-500 shrink-0" />
            <span className="font-semibold text-gray-800 text-xs md:text-base">100% Beginner Friendly</span>
          </li>
        </ul>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-2 text-[10px] md:text-sm font-bold text-gray-500 mb-1 md:mb-0">
        <div className="flex items-center gap-1 text-red-600 bg-red-50 px-2 py-0.5 rounded border border-red-100">
          <AlertTriangle className="w-3 h-3 md:w-4 md:h-4" />
          <span>This is NOT a job</span>
        </div>
        <div className="flex items-center gap-1 text-gray-700 bg-gray-100 px-2 py-0.5 rounded border border-gray-200">
          <AlertTriangle className="w-3 h-3 md:w-4 md:h-4" />
          <span>This is NOT gambling</span>
        </div>
        <div className="flex items-center gap-1 text-green-700 bg-green-50 px-2 py-0.5 rounded border border-green-100">
          <ShieldCheck className="w-3 h-3 md:w-4 md:h-4" />
          <span>No Experience Required</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;