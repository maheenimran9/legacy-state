
import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  const reviews = [
    { name: "Sohail Ahmed", role: "CEO, Ahmed Industries", text: "Legacy Consultants redefined my expectations of Karachi real estate. Their discretion and market insight in Phase 8 were surgical." },
    { name: "Dr. Farah Naz", role: "Resident, DHA", text: "Finding a home for our family was personal. Maheen and her team treated it as such, securing a property that wasn't even listed yet." },
    { name: "Kamran Siddiqui", role: "Overseas Investor", text: "As someone based in London, I needed a boots-on-the-ground partner I could trust. Legacy managed my multi-million dollar portfolio flawlessly." }
  ];

  return (
    <section className="py-32 bg-[#0B1F33] relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <Quote size={48} className="text-[#C9A24D]/20 mx-auto mb-8" />
          <h2 className="text-4xl md:text-6xl font-serif text-white italic">Trusted by the Elite</h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.2 }}
              className="glass p-12 rounded-[3rem] relative"
            >
              <div className="flex gap-1 mb-8">
                {[...Array(5)].map((_, j) => <Star key={j} size={14} className="fill-[#C9A24D] text-[#C9A24D]" />)}
              </div>
              <p className="text-xl text-white/70 italic font-light leading-relaxed mb-10">"{r.text}"</p>
              <div>
                <h4 className="text-white font-bold tracking-widest uppercase text-sm">{r.name}</h4>
                <p className="text-[#C9A24D] text-[10px] font-bold uppercase tracking-[0.2em]">{r.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
