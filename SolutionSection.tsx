import React from 'react';
import { Smartphone, DollarSign, CheckCircle } from 'lucide-react';

const SolutionSection: React.FC = () => {
  return (
    <section className="py-12 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-red-600 font-black tracking-widest text-sm uppercase mb-2">Introducing</h2>
          <h3 className="text-4xl font-extrabold text-gray-900 mb-4">GOOGLE REWARDS</h3>
          <p className="text-xl text-gray-600">The "Secret" Economy Hiding In Your Smartphone</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-blue-50 p-6 rounded-xl text-center border border-blue-100">
            <Smartphone className="w-10 h-10 text-blue-600 mx-auto mb-3" />
            <h4 className="font-bold text-gray-900 mb-2">100% Mobile Based</h4>
            <p className="text-sm text-gray-600">No laptop needed. Do this from your bed, a taxi, or anywhere.</p>
          </div>
          <div className="bg-green-50 p-6 rounded-xl text-center border border-green-100">
            <DollarSign className="w-10 h-10 text-green-600 mx-auto mb-3" />
            <h4 className="font-bold text-gray-900 mb-2">Real Cash Rewards</h4>
            <p className="text-sm text-gray-600">Not points. Not coupons. Real money you can spend.</p>
          </div>
          <div className="bg-purple-50 p-6 rounded-xl text-center border border-purple-100">
            <CheckCircle className="w-10 h-10 text-purple-600 mx-auto mb-3" />
            <h4 className="font-bold text-gray-900 mb-2">Simple Tasks</h4>
            <p className="text-sm text-gray-600">Answer questions. Verify ads. Give feedback. That's it.</p>
          </div>
        </div>

        <div className="bg-gray-900 text-white p-6 rounded-2xl shadow-lg">
          <p className="text-lg leading-relaxed font-medium">
            This is a legitimate reward system used by one of the biggest companies in the world. They need REAL people (like you) to help them improve their services, check their ads, and verify data. 
            <br/><br/>
            And they are willing to pay for your time. No interviews. No CVs. No referrals.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;