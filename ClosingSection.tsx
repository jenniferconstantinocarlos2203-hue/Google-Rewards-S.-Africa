import React from 'react';
import { Clock } from 'lucide-react';

const ClosingSection: React.FC = () => {
  return (
    <section className="py-12 px-6 bg-gray-900 text-white text-center">
      <div className="max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-1 rounded-full text-xs font-bold mb-6 animate-pulse">
          <Clock className="w-4 h-4" />
          LIMITED SPOTS FOR SOUTH AFRICA
        </div>
        
        <h3 className="text-2xl md:text-4xl font-bold mb-6 leading-tight">
          This Opportunity Is Only Available For Selected Regions
        </h3>
        
        <p className="text-gray-300 mb-8 text-lg">
          If you are seeing this page, it means spots are currently open in your area. However, inactive accounts are removed daily.
          <br /><br />
          Do not close this page without watching the video above, or you might lose your spot to someone else in the queue.
        </p>

        <div className="p-4 border-2 border-dashed border-gray-700 rounded-xl bg-gray-800/50">
           <p className="font-bold text-xl text-yellow-400 mb-2">If you’re watching this from South Africa…</p>
           <p className="text-white">You may have been selected. Watch the video above to claim your access.</p>
        </div>
      </div>
    </section>
  );
};

export default ClosingSection;