
import React from 'react';
import { motion } from 'framer-motion';
import { Shield, TrendingUp, Search, Briefcase, Zap, Globe } from 'lucide-react';

const WhyUs: React.FC = () => {
  const points = [
    { icon: <Shield className="text-[#C9A24D]" />, title: "DHA Legal Authority", desc: "Comprehensive vetting of allotment letters and transfer records." },
    { icon: <TrendingUp className="text-[#C9A24D]" />, title: "Precision Valuation", desc: "Minutely analyzed market data for Phase 5, 6, and 8 properties." },
    { icon: <Search className="text-[#C9A24D]" />, title: "Elite Network", desc: "Private access to off-market luxury bungalows and commercial plots." },
    { icon: <Globe className="text-[#C9A24D]" />, title: "Overseas Specialization", desc: "End-to-end management for global Pakistani investors via Power of Attorney." },
    { icon: <Briefcase className="text-[#C9A24D]" />, title: "Transaction Concierge", desc: "Personalized handling of all DHA Office administrative protocols." },
    { icon: <Zap className="text-[#C9A24D]" />, title: "Market Agility", desc: "Rapid execution for time-sensitive commercial acquisitions." }
  ];

  return (
    <section id="why-us" className="py-32 bg-[#0B1F33] relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <motion.h4 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="gold-text-gradient font-black tracking-[0.3em] uppercase text-xs mb-4"
          >
            The Distinction
          </motion.h4>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-serif text-white mb-6"
          >
            The Legacy Advantage
          </motion.h2>
          <div className="w-24 h-px bg-[#C9A24D] mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {points.map((point, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -15, scale: 1.02, rotateX: 2, rotateY: 2 }}
              className="glass p-10 rounded-[2.5rem] group hover:bg-white/[0.05] transition-all border border-white/5 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-2 h-0 bg-[#C9A24D] group-hover:h-full transition-all duration-500"></div>
              <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-8 group-hover:bg-[#C9A24D]/10 group-hover:scale-110 transition-all">
                {point.icon}
              </div>
              <h3 className="text-2xl font-serif text-white mb-4 group-hover:text-[#C9A24D] transition-colors">{point.title}</h3>
              <p className="text-white/40 font-light leading-relaxed group-hover:text-white/60 transition-colors">{point.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
