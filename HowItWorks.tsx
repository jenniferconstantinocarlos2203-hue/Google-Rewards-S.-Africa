import React from 'react';
import { UserPlus, MessageSquare, Search, Award, Wallet } from 'lucide-react';

const steps = [
  {
    icon: <UserPlus className="w-6 h-6 text-white" />,
    title: "Sign Up Free",
    desc: "Create your secure profile in less than 2 minutes."
  },
  {
    icon: <MessageSquare className="w-6 h-6 text-white" />,
    title: "Get Questions",
    desc: "Receive simple questions or tasks on your phone."
  },
  {
    icon: <Search className="w-6 h-6 text-white" />,
    title: "Complete Tasks",
    desc: "Verify ads, check locations, or give opinions."
  },
  {
    icon: <Award className="w-6 h-6 text-white" />,
    title: "Get Validated",
    desc: "Google's system instantly checks your answer."
  },
  {
    icon: <Wallet className="w-6 h-6 text-white" />,
    title: "Get Paid",
    desc: "Withdraw your earnings directly to your account."
  }
];

const HowItWorks: React.FC = () => {
  return (
    <section className="py-12 px-6 bg-gray-50">
      <div className="max-w-2xl mx-auto">
        <h3 className="text-3xl font-bold text-center text-gray-900 mb-10">How It Works</h3>
        
        <div className="space-y-6 relative">
          {/* Connecting line */}
          <div className="absolute left-6 top-4 bottom-4 w-1 bg-gray-200 hidden md:block"></div>

          {steps.map((step, index) => (
            <div key={index} className="relative flex items-start gap-4 md:gap-8 bg-white p-6 rounded-lg shadow-sm border border-gray-100 z-10">
              <div className="shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center shadow-md">
                {step.icon}
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-1">Step {index + 1}: {step.title}</h4>
                <p className="text-gray-600">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;