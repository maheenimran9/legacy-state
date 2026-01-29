
import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0B1F33] pt-32 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-4xl font-serif font-bold text-white mb-10 tracking-tighter"
          >
            LEGACY <span className="text-[#C9A24D]">CONSULTANTS</span>
          </motion.div>
          
          <div className="flex gap-10 mb-20">
            <motion.a whileHover={{ y: -5, color: '#C9A24D', filter: 'drop-shadow(0 0 10px rgba(201,162,77,0.5))' }} href="#" className="text-white/30 transition-all"><Facebook size={24}/></motion.a>
            <motion.a whileHover={{ y: -5, color: '#C9A24D', filter: 'drop-shadow(0 0 10px rgba(201,162,77,0.5))' }} href="#" className="text-white/30 transition-all"><Instagram size={24}/></motion.a>
            <motion.a whileHover={{ y: -5, color: '#C9A24D', filter: 'drop-shadow(0 0 10px rgba(201,162,77,0.5))' }} href="#" className="text-white/30 transition-all"><MessageCircle size={24}/></motion.a>
            <motion.a whileHover={{ y: -5, color: '#C9A24D', filter: 'drop-shadow(0 0 10px rgba(201,162,77,0.5))' }} href="#" className="text-white/30 transition-all"><Linkedin size={24}/></motion.a>
          </div>

          <div className="w-full h-px bg-white/5 mb-12"></div>
          
          <div className="flex flex-col md:flex-row justify-between w-full items-center gap-6">
            <p className="text-white/20 text-xs font-bold uppercase tracking-widest">
              © {new Date().getFullYear()} Legacy Real Estate Consultants. Elite DHA Specialist.
            </p>
            <p className="text-[#C9A24D] font-bold tracking-[0.3em] uppercase text-[10px]">
              Built, Designed & Developed by Maheen
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
