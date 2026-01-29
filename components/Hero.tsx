
import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0B1F33]">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-[#0B1F33]/40 to-[#0B1F33]"></div>
        <img 
          src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=2000" 
          alt="Luxury background" 
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center relative z-10 pt-20">
        <div className="text-center lg:text-left">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block gold-text-gradient font-bold tracking-[0.4em] uppercase text-xs mb-6"
          >
            Established 2004 • DHA Karachi
          </motion.span>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-8xl font-serif text-white leading-[1.1] mb-8"
          >
            Preserving <br />
            <span className="italic font-light">Your</span> Legacy
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-white/60 mb-12 max-w-lg mx-auto lg:mx-0 leading-relaxed font-light"
          >
            Karachi's most exclusive real estate consultancy. We specialize in high-yield assets and luxury residences for the global Pakistani elite.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start"
          >
            <button className="gold-gradient text-[#0B1F33] px-12 py-5 rounded-full font-black tracking-widest hover:shadow-[0_0_30px_rgba(201,162,77,0.5)] transition-all">
              VIEW LISTINGS
            </button>
            <button className="border border-white/20 px-12 py-5 rounded-full text-white font-bold tracking-widest hover:bg-white/5 transition-all">
              PRIVATE CONSULT
            </button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="hidden lg:block relative"
        >
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-10 rounded-2xl overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.5)] border border-white/10"
          >
            <img 
              src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1000" 
              alt="Elite Property" 
              className="w-full grayscale hover:grayscale-0 transition-all duration-700"
            />
          </motion.div>
          {/* Accent decoration */}
          <div className="absolute -top-10 -right-10 w-64 h-64 border-2 border-[#C9A24D]/20 rounded-full -z-0"></div>
          <div className="absolute -bottom-10 -left-10 w-48 h-48 border border-white/10 rounded-full -z-0"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
