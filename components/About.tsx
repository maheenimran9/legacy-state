import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 bg-[#0B1F33] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-24 items-center">
        
        {/* IMAGE SECTION */}
<motion.div
  initial={{ opacity: 0, scale: 0.95 }}
  whileInView={{ opacity: 1, scale: 1 }}
  viewport={{ once: true }}
  className="relative flex justify-center lg:justify-start"
>
  {/* Is wrapper div ko dhiyaan se dekhein, ye image aur border ko lock kar raha hai */}
  <div className="relative w-full max-w-[500px] aspect-[4/5] group">
    
    {/* 1. Decorative Border - Fixed relative to the image edges */}
    <div className="absolute top-[5%] left-[5%] right-[-5%] bottom-[-5%] border-2 border-[#C9A24D]/30 rounded-3xl -z-0 transition-all duration-500 group-hover:top-[3%] group-hover:left-[3%]"></div>

    {/* 2. Main Image Wrapper */}
    <motion.div 
      whileHover={{ x: -10, y: -10 }} 
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      className="relative z-10 w-full h-full rounded-3xl overflow-hidden shadow-2xl border border-white/5 bg-[#0B1F33]"
    >
      <img 
        src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&auto=format&fit=crop&q=80" 
        alt="Luxury Estate" 
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F33]/60 via-transparent to-transparent"></div>
    </motion.div>
  </div>
</motion.div>

        {/* CONTENT SECTION */}
        <div className="space-y-10">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h4 className="text-[#C9A24D] font-black tracking-[0.3em] uppercase text-xs mb-4">Integrity in Property</h4>
            <h2 className="text-4xl md:text-6xl font-serif text-white leading-tight">
              Two Decades of <br />
              <span className="italic">Unrivaled Expertise</span>
            </h2>
          </motion.div>
          
          <p className="text-lg text-white/50 leading-relaxed font-light">
            Legacy Real Estate Consultants isn't just a brokerage—it's a multi-generational gateway to Pakistan's most prestigious postal codes.
          </p>

          <div className="grid grid-cols-2 gap-8">
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
              <div className="text-4xl font-serif text-[#C9A24D] mb-2">$2B+</div>
              <div className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Transaction Value</div>
            </div>
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
              <div className="text-4xl font-serif text-[#C9A24D] mb-2">500+</div>
              <div className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Luxury Estates</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;