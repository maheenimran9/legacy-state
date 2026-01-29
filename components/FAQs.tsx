
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const FAQs: React.FC = () => {
  const [active, setActive] = useState<number | null>(0);

  const faqs = [
    { q: "What is the typical timeline for a DHA transfer?", a: "Once the NDC is cleared, the actual transfer appointment usually takes 30-45 minutes. Total timeline from deal close to allotment is roughly 10-15 working days." },
    { q: "How do you vet off-market properties?", a: "We maintain a private database of owners. Every listing is cross-referenced with DHA's record department before we present it to our clients." },
    { q: "Can overseas Pakistanis buy remotely?", a: "Yes. Through the 'Special Power of Attorney' (SPA) protocol and Roshan Digital Accounts, we manage 100% of the process for our global clients." },
    { q: "What are the latest FBR tax implications for DHA Karachi?", a: "Current taxes include CVT and Stamp Duty. We provide a detailed tax-inclusive cost sheet for every potential transaction to ensure zero surprises." }
  ];

  return (
    <section className="py-32 bg-[#0B1F33]">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">Clarifications</h2>
          <div className="w-20 h-px bg-[#C9A24D] mx-auto"></div>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="glass rounded-3xl overflow-hidden border border-white/5">
              <button 
                onClick={() => setActive(active === idx ? null : idx)}
                className="w-full flex justify-between items-center p-8 text-left group"
              >
                <span className={`text-lg font-serif transition-colors ${active === idx ? 'text-[#C9A24D]' : 'text-white/80 group-hover:text-white'}`}>
                  {faq.q}
                </span>
                <div className={`transition-transform duration-300 ${active === idx ? 'rotate-180 text-[#C9A24D]' : 'text-white/20'}`}>
                  {active === idx ? <Minus size={20} /> : <Plus size={20} />}
                </div>
              </button>
              <AnimatePresence>
                {active === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-8 pt-0 text-white/40 leading-relaxed font-light border-t border-white/5 mx-8">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQs;
