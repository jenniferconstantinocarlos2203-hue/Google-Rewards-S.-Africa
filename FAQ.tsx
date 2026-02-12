import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    q: "Is this legit?",
    a: "Yes. This system is based on real market research and ad verification needs from major companies like Google. They pay for accuracy and feedback."
  },
  {
    q: "Do I need experience?",
    a: "No. The tasks are very simple (e.g., 'Is this shop sign clear?', 'Is this ad relevant to you?'). If you can text on WhatsApp, you can do this."
  },
  {
    q: "How do I withdraw my money?",
    a: "You can usually withdraw directly to your local bank account or other payment methods supported in South Africa once you reach the minimum threshold."
  },
  {
    q: "Can I do it from South Africa?",
    a: "Yes! This page is specifically for South Africans. The demand for verification in our local cities is high right now."
  },
  {
    q: "How much can I make?",
    a: "It depends on how many tasks you do. Some people make R100 a day, others make R1000+. It is up to you."
  },
  {
    q: "Do I need to recruit people?",
    a: "Absolutely NOT. This is not a pyramid scheme. You earn money for YOUR work, not for bothering others."
  },
  {
    q: "How fast does it work?",
    a: "You can often start seeing tasks immediately after your account is verified. Payout speeds depend on the withdrawal method."
  },
  {
    q: "Is it safe?",
    a: "Yes. You do not need to provide sensitive banking passwords to do the tasks. It is a standard rewards platform."
  },
  {
    q: "Do I need a laptop?",
    a: "No. This system is designed 100% for smartphones."
  },
  {
    q: "Why is Google paying?",
    a: "Computers aren't perfect. They need real humans to verify that maps, ads, and search results are correct in local areas like yours."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-12 px-6 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <h3 className="text-3xl font-bold text-center text-gray-900 mb-8">Frequently Asked Questions</h3>
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200">
              <button
                className="w-full flex justify-between items-center p-4 text-left font-semibold text-gray-800 hover:bg-gray-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span>{faq.q}</span>
                {openIndex === index ? <ChevronUp className="w-5 h-5 text-gray-400" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
              </button>
              {openIndex === index && (
                <div className="p-4 pt-0 text-gray-600 bg-gray-50 border-t border-gray-100">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;