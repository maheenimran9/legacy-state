
import React from 'react';
import { motion } from 'framer-motion';
import { Home, Building2, Landmark, Gavel } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    { 
      title: "Luxury Residential", 
      icon: <Home size={32} />, 
      img: "https://plus.unsplash.com/premium_photo-1661915661139-5b6a4e4a6fcc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bHV4dXJ5JTIwaG91c2V8ZW58MHx8MHx8fDA%3D",
      desc: "Curating Phase 5, 6, and 8 bungalows for modern living."
    },
    { 
      title: "Commercial Prime", 
      icon: <Building2 size={32} />, 
      img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
      desc: "High-visibility retail and corporate office placements."
    },
    { 
      title: "Strategic Investment", 
      icon: <Landmark size={32} />, 
      img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
      desc: "Capital growth strategies in DHA City and upcoming phases."
    },
    { 
      title: "Legal & Transfers", 
      icon: <Gavel size={32} />, 
      img: "https://media.istockphoto.com/id/1066711856/photo/lawyer-working-with-documents-justice-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=3-RWS5gTynbEM9U2jOQeDh2Enru6wTcstpjwMyEDQYY=",
      desc: "Streamlined DHA office processing and document vetting."
    }
  ];

  return (
    <section id="services" className="py-32 bg-[#0B1F33]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20 text-center lg:text-left flex flex-col lg:flex-row items-end justify-between gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-serif text-white mb-6 italic">Mastering the Market</h2>
            <p className="text-white/40 text-lg font-light">Comprehensive real estate solutions designed for the most demanding institutional and private clients.</p>
          </div>
          <button className="text-[#C9A24D] font-bold tracking-widest uppercase text-xs border-b border-[#C9A24D] pb-2 hover:opacity-70 transition-opacity">
            All Services
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="relative group h-[500px] overflow-hidden rounded-[2rem] border border-white/5"
            >
              <img src={s.img} className="absolute inset-0 w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-60 transition-all duration-700" alt={s.title} />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F33] via-[#0B1F33]/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-10 w-full">
                <div className="text-[#C9A24D] mb-6 transform group-hover:scale-110 transition-transform origin-left">
                  {s.icon}
                </div>
                <h3 className="text-2xl font-serif text-white mb-3">{s.title}</h3>
                <p className="text-white/40 text-sm font-light leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {s.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
