import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 bg-[#0B1F33] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-24 items-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative group"
        >
          {/* LINE 31: Yahan motion.div shuru ho raha hai */}
          <motion.div 
            whileHover={{ rotateY: -10, rotateX: 5, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="rounded-3xl overflow-hidden shadow-2xl relative z-10 border border-white/5"
          >
            <img 
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800" 
              alt="Luxury Office" 
              className="w-full aspect-[4/5] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F33] via-transparent to-transparent"></div>
          </motion.div> {/* LINE 41: Yahan pehle motion.h4 likha tha, maine div kar diya */}
          
          <div className="absolute -inset-4 border-2 border-[#C9A24D]/30 rounded-3xl -z-0 translate-x-4 translate-y-4"></div>
        </motion.div>

        <div className="space-y-10">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h4 className="gold-text-gradient font-black tracking-[0.3em] uppercase text-xs mb-4">Integrity in Property</h4>
            <h2 className="text-4xl md:text-6xl font-serif text-white leading-tight">
              Two Decades of <br />
              <span className="italic">Unrivaled Expertise</span>
            </h2>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-white/50 leading-relaxed font-light"
          >
            Legacy Real Estate Consultants isn't just a brokerage—it's a multi-generational gateway to Pakistan's most prestigious postal codes. We bridge the gap between discerning investors and the intricate market of DHA Karachi.
          </motion.p>

          <div className="grid grid-cols-2 gap-8">
            <motion.div 
              whileHover={{ y: -5 }}
              className="glass p-8 rounded-2xl"
            >
              <div className="text-4xl font-serif text-[#C9A24D] mb-2">$2B+</div>
              <div className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Transaction Value</div>
            </motion.div>
            <motion.div 
              whileHover={{ y: -5 }}
              className="glass p-8 rounded-2xl"
            >
              <div className="text-4xl font-serif text-[#C9A24D] mb-2">500+</div>
              <div className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Luxury Estates</div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;