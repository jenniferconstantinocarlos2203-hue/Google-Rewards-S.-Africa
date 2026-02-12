import React from 'react';
import { XCircle } from 'lucide-react';

const DifferenceSection: React.FC = () => {
  return (
    <section className="py-12 px-6 bg-white">
      <div className="max-w-3xl mx-auto text-center">
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
          Why This Is Different From Everything Else You’ve Tried…
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
          {['NOT Forex', 'NOT Crypto', 'NOT Betting', 'NOT MLM', 'NOT Referrals', 'NOT Complicated'].map((item) => (
            <div key={item} className="flex items-center justify-center gap-2 bg-red-50 p-3 rounded font-bold text-red-700 border border-red-100">
              <XCircle className="w-5 h-5" />
              <span className="text-sm md:text-base">{item}</span>
            </div>
          ))}
        </div>

        <p className="text-gray-700 leading-relaxed text-lg">
          Most online "opportunities" ask you to pay money to join, or force you to annoy your family and friends to join under you. <br/><br/>
          <strong className="text-gray-900">Google Rewards is different.</strong> You don't sell anything. You don't recruit anyone. It is just YOU and your PHONE. Simple. Honest. Real.
        </p>
      </div>
    </section>
  );
};

export default DifferenceSection;