
import React from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, Mail, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 bg-[#0B1F33] relative overflow-hidden">
      {/* Visual background decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C9A24D]/5 rounded-full blur-[120px] -z-0"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div>
            <motion.h4 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="gold-text-gradient font-black tracking-[0.4em] uppercase text-xs mb-6"
            >
              Contact Our Concierge
            </motion.h4>
            <h2 className="text-4xl md:text-7xl font-serif text-white mb-10 leading-tight">
              Begin Your <br />
              <span className="italic">Acquisition</span>
            </h2>
            
            <div className="space-y-12">
              <div className="flex items-center gap-8 group">
                <div className="w-16 h-16 rounded-2xl glass flex items-center justify-center text-[#C9A24D] group-hover:scale-110 transition-transform">
                  <Phone size={24} />
                </div>
                <div>
                  <div className="text-white/30 text-[10px] uppercase tracking-widest font-bold mb-1">Direct Line</div>
                  <div className="text-xl text-white">+92 21 3555 1234</div>
                </div>
              </div>
              <div className="flex items-center gap-8 group">
                <div className="w-16 h-16 rounded-2xl glass flex items-center justify-center text-[#C9A24D] group-hover:scale-110 transition-transform">
                  <Mail size={24} />
                </div>
                <div>
                  <div className="text-white/30 text-[10px] uppercase tracking-widest font-bold mb-1">Inquiries</div>
                  <div className="text-xl text-white">private@legacyrealty.pk</div>
                </div>
              </div>
              <div className="flex items-center gap-8 group">
                <div className="w-16 h-16 rounded-2xl glass flex items-center justify-center text-[#C9A24D] group-hover:scale-110 transition-transform">
                  <MapPin size={24} />
                </div>
                <div>
                  <div className="text-white/30 text-[10px] uppercase tracking-widest font-bold mb-1">HQ Address</div>
                  <div className="text-lg text-white">Al-Murtaza Commercial, DHA Phase 8</div>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-12 md:p-16 rounded-[4rem] border border-white/10 shadow-[0_50px_100px_rgba(0,0,0,0.5)]"
          >
            <form className="space-y-10">
              <div className="relative">
                <input type="text" placeholder="Full Name" className="w-full bg-transparent border-b border-white/10 py-4 text-white focus:outline-none focus:border-[#C9A24D] transition-all font-light text-lg placeholder:text-white/20" />
              </div>
              <div className="grid md:grid-cols-2 gap-10">
                <input type="email" placeholder="Email" className="w-full bg-transparent border-b border-white/10 py-4 text-white focus:outline-none focus:border-[#C9A24D] transition-all font-light text-lg placeholder:text-white/20" />
                <input type="tel" placeholder="Phone" className="w-full bg-transparent border-b border-white/10 py-4 text-white focus:outline-none focus:border-[#C9A24D] transition-all font-light text-lg placeholder:text-white/20" />
              </div>
              <div className="relative">
                <select className="w-full bg-transparent border-b border-white/10 py-4 text-white/50 focus:outline-none focus:border-[#C9A24D] transition-all font-light text-lg appearance-none">
                  <option className="bg-[#0B1F33]">Phase 8 Bungalow Purchase</option>
                  <option className="bg-[#0B1F33]">Commercial Plot Investment</option>
                  <option className="bg-[#0B1F33]">DHA City Farmhouse</option>
                  <option className="bg-[#0B1F33]">Portfolio Management</option>
                </select>
              </div>
              <div className="relative">
                <textarea rows={3} placeholder="Tell us about your requirements" className="w-full bg-transparent border-b border-white/10 py-4 text-white focus:outline-none focus:border-[#C9A24D] transition-all font-light text-lg placeholder:text-white/20"></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.02, boxShadow: '0 0 40px rgba(201, 162, 77, 0.4)' }}
                whileTap={{ scale: 0.98 }}
                className="w-full gold-gradient text-[#0B1F33] py-6 rounded-2xl font-black text-sm uppercase tracking-[0.3em] flex items-center justify-center gap-4 group shadow-2xl"
              >
                REQUEST CONSULTATION <Send size={16} className="group-hover:translate-x-2 group-hover:-translate-y-1 transition-transform" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
