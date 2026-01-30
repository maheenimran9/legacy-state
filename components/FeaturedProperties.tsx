
import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Expand, BedDouble, Bath } from 'lucide-react';

const FeaturedProperties: React.FC = () => {
  const listings = [
    {
      title: "The Ittehad Grandeur",
      loc: "Phase 8, Khayaban-e-Ittehad",
      price: "PKR 315M",
      size: "1000 Yards",
      beds: 6,
      baths: 7,
      img: "https://images.unsplash.com/photo-1706808849780-7a04fbac83ef?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1vZGVybiUyMGhvdXNlfGVufDB8fDB8fHww"
    },
    {
      title: "Modernist Bukhari Hub",
      loc: "Phase 6, Bukhari Commercial",
      price: "PKR 145M",
      size: "200 Yards",
      beds: "Office",
      baths: 4,
      img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200"
    },
    {
      title: "Coastal Penthouse",
      loc: "Phase 8, Emaar Crescent",
      price: "PKR 95M",
      size: "Flat",
      beds: 3,
      baths: 3,
      img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200"
    }
  ];

  return (
    <section id="properties" className="py-32 bg-[#0B1F33]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <h4 className="gold-text-gradient font-bold tracking-[0.3em] uppercase text-xs mb-4">Curated Collection</h4>
            <h2 className="text-4xl md:text-6xl font-serif text-white">Elite Holdings</h2>
          </div>
          <div className="flex gap-4">
            <button className="glass p-4 rounded-full text-white hover:bg-[#C9A24D] hover:text-[#0B1F33] transition-all">
              <Expand size={20} />
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          {listings.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              className="glass group rounded-[2.5rem] overflow-hidden border border-white/5"
            >
              <div className="h-80 relative overflow-hidden">
                <img 
                  src={item.img} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                  alt={item.title} 
                />
                <div className="absolute top-8 left-8 bg-[#0B1F33]/80 backdrop-blur-md px-6 py-2 rounded-full border border-white/10 text-xs font-black text-[#C9A24D] tracking-widest uppercase">
                  Featured
                </div>
              </div>
              <div className="p-10">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-serif text-white mb-2 group-hover:text-[#C9A24D] transition-colors">{item.title}</h3>
                    <p className="text-white/40 flex items-center gap-2 text-sm">
                      <MapPin size={14} className="text-[#C9A24D]" /> {item.loc}
                    </p>
                  </div>
                  <div className="text-2xl font-black gold-text-gradient">{item.price}</div>
                </div>
                
                <div className="grid grid-cols-3 gap-4 pt-8 border-t border-white/5">
                  <div className="text-center">
                    <div className="text-white/30 mb-1 flex justify-center"><Expand size={16}/></div>
                    <div className="text-xs text-white/60 font-bold">{item.size}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-white/30 mb-1 flex justify-center"><BedDouble size={16}/></div>
                    <div className="text-xs text-white/60 font-bold">{item.beds}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-white/30 mb-1 flex justify-center"><Bath size={16}/></div>
                    <div className="text-xs text-white/60 font-bold">{item.baths}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
