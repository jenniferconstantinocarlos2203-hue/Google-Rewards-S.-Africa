import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Thando Peter",
    location: "Durban",
    role: "Student",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=200&h=200&q=80",
    quote: "I honestly thought it was another scam… but after day 2 I got my first payout. It helped me buy textbooks and data for the month.",
    earnings: "Earned R1,200 this week"
  },
  {
    name: "Lerato Mokoena",
    location: "Johannesburg (Soweto)",
    role: "Unemployed Mom",
    image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=200&h=200&q=80",
    quote: "Being a single mom is tough. This system saved me. I do the tasks while my baby sleeps. It's not millions, but it puts food on the table.",
    earnings: "Earned R3,500 last month"
  },
  {
    name: "Johan Van Der Merwe",
    location: "Cape Town",
    role: "Part-time Worker",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&h=200&q=80",
    quote: "I was skeptical. But the tasks are actually interesting. I do it during my lunch break. The extra cash helps with petrol costs.",
    earnings: "Earned R850 in 3 days"
  },
  {
    name: "Sipho Dlamini",
    location: "Pretoria",
    role: "Job Seeker",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200&q=80",
    quote: "I've been looking for a job for 2 years. This isn't a salary, but it stops me from being broke. Best thing I found online.",
    earnings: "Earned R450 today"
  },
  {
    name: "Noluthando Zulu",
    location: "Polokwane",
    role: "Student",
    image: "https://images.unsplash.com/photo-1589156280159-27698a70f29e?auto=format&fit=crop&w=200&h=200&q=80",
    quote: "Data is expensive, so I use this to pay for my bundles. It's legit guys. Just follow the instructions in the video.",
    earnings: "Earned R1,800 this month"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-14 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-3xl font-bold text-center text-gray-900 mb-10">Real Results From Real South Africans</h3>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className={`bg-white p-6 rounded-xl shadow-sm border border-gray-100 ${i === 3 || i === 4 ? 'md:col-span-1 lg:col-span-1' : ''}`}>
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, idx) => (
                  <Star key={idx} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 italic mb-4 text-sm">"{t.quote}"</p>
              <div className="flex items-center gap-3 border-t border-gray-100 pt-4">
                <div className="w-10 h-10 bg-gray-200 rounded-full overflow-hidden shrink-0">
                   <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h5 className="font-bold text-gray-900 text-sm">{t.name}</h5>
                  <p className="text-xs text-gray-500">{t.location}</p>
                </div>
              </div>
              <div className="mt-3 bg-green-50 text-green-700 text-xs font-bold px-2 py-1 inline-block rounded">
                {t.earnings}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;