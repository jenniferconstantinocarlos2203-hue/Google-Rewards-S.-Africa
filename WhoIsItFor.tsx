import React from 'react';
import { Check, X } from 'lucide-react';

const WhoIsItFor: React.FC = () => {
  return (
    <section className="py-12 px-6 bg-white">
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
        
        <div className="bg-green-50 p-8 rounded-2xl border border-green-100">
          <h3 className="text-xl font-bold text-green-800 mb-6 flex items-center gap-2">
            <Check className="w-6 h-6" />
            This Is Perfect For You If...
          </h3>
          <ul className="space-y-3">
            {[
              "You are a student needing extra cash",
              "You are currently unemployed",
              "You are a mom at home with kids",
              "You have a full-time job but want more",
              "You have a smartphone with data/wifi",
              "You want honest income without stress"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-gray-700">
                <div className="mt-1 min-w-[16px]"><Check className="w-4 h-4 text-green-600" /></div>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-red-50 p-8 rounded-2xl border border-red-100">
          <h3 className="text-xl font-bold text-red-800 mb-6 flex items-center gap-2">
            <X className="w-6 h-6" />
            This Is NOT For You If...
          </h3>
          <ul className="space-y-3">
            {[
              "You are lazy and don't want to do tasks",
              "You are looking for 'instant millions' overnight",
              "You don't know how to use a smartphone",
              "You refuse to follow simple instructions",
              "You think everything online is a scam"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-gray-700">
                <div className="mt-1 min-w-[16px]"><X className="w-4 h-4 text-red-600" /></div>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
};

export default WhoIsItFor;