
import React from 'react';
import { motion } from 'framer-motion';
import { Map, Pin } from 'lucide-react';

const Locations: React.FC = () => {
  const phases = [
    { name: "DHA Phase 1-5", stats: "Legacy Estates", desc: "The established core of luxury living in Karachi." },
    { name: "DHA Phase 6", stats: "High-Yield Hub", desc: "The commercial heartbeat and elite residential mix." },
    { name: "DHA Phase 8", stats: "Coastal Elite", desc: "Premium seafront villas and modern architecture." },
    { name: "DHA City", stats: "The Future", desc: "Sustainable living and long-term capital growth." },
    { name: "Emaar Crescent", stats: "Seafront Luxury", desc: "Exclusive high-rise luxury at the water's edge." }
  ];

  return (
    <section id="locations" className="py-32 bg-[#0B1F33] relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-block p-4 rounded-full bg-[#C9A24D]/10 text-[#C9A24D] mb-6"
          >
            <Map size={32} />
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-serif text-white mb-6"
          >
            Our Primary Footprint
          </motion.h2>
          <p className="text-white/40 max-w-xl mx-auto font-light leading-relaxed">
            Specializing in the most prestigious zones of DHA Karachi, where value meets exclusivity.
          </p>
          <div className="w-24 h-px bg-[#C9A24D] mx-auto mt-8"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {phases.map((phase, index) => (
            <motion.div 
              key={index} 
              whileHover={{ y: -15, rotateX: 5, scale: 1.05 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass p-8 rounded-[2rem] text-center group cursor-pointer hover:bg-white/[0.05] border border-white/5 transition-all shadow-xl"
            >
              <div className="mb-6 flex justify-center text-[#C9A24D] group-hover:scale-125 transition-transform duration-500">
                <Pin size={24} />
              </div>
              <h3 className="text-xl font-serif text-white mb-2 group-hover:text-[#C9A24D] transition-colors">{phase.name}</h3>
              <p className="text-[#C9A24D] text-[10px] font-bold uppercase tracking-[0.2em] mb-4">{phase.stats}</p>
              <p className="text-white/30 text-xs leading-relaxed font-light group-hover:text-white/60 transition-colors">
                {phase.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Locations;
