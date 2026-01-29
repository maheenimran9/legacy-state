
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import WhyUs from './components/WhyUs';
import Services from './components/Services';
import FeaturedProperties from './components/FeaturedProperties';
import Locations from './components/Locations';
import Testimonials from './components/Testimonials';
import FAQs from './components/FAQs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { motion, useScroll, useSpring } from 'framer-motion';

const App: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative bg-[#0B1F33] selection:bg-[#C9A24D] selection:text-[#0B1F33]">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#C9A24D] to-[#EAE3D2] z-[100] origin-left"
        style={{ scaleX }}
      />
      <Navbar />
      <main className="overflow-hidden">
        <section id="home">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="why-us">
          <WhyUs />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="properties">
          <FeaturedProperties />
        </section>
        <section id="locations">
          <Locations />
        </section>
        <section id="testimonials">
          <Testimonials />
        </section>
        <section id="faqs">
          <FAQs />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
