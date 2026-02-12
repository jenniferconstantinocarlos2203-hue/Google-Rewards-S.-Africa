import React from 'react';

const ProblemSection: React.FC = () => {
  return (
    <section className="py-12 px-6 bg-gray-50 border-t border-b border-gray-200">
      <div className="max-w-2xl mx-auto text-center">
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
          Let's Be Honest About The Situation in South Africa Right Now...
        </h3>
        
        <div className="space-y-4 text-left text-gray-700 leading-relaxed">
          <p>
            Does it feel like no matter how hard you try, it's just getting harder to survive?
          </p>
          <p>
            Unemployment is at an all-time high. The cost of living is rising every single month. Petrol is expensive. Taxi fares are going up. And data bundles? They disappear before you can even use them.
          </p>
          <p className="font-semibold text-gray-900">
            Most people are tired.
          </p>
          <ul className="list-disc pl-5 space-y-2 marker:text-red-500">
            <li>Tired of applying for jobs and never getting a call back.</li>
            <li>Tired of "online opportunities" that turn out to be scams or pyramid schemes.</li>
            <li>Tired of borrowing money just to make it through the month.</li>
          </ul>
          <p className="bg-yellow-50 p-4 rounded-lg border border-yellow-200 italic text-gray-800 mt-4">
            "I just want something real. Something simple. Something that actually pays."
          </p>
          <p>
            If you've ever said that to yourself, then what you are about to see is exactly what you've been praying for.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;