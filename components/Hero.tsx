import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 text-white overflow-hidden"
    >
      {/* Overlay Layers */}
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div
        className="absolute inset-0 animate-subtle-pulse"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)',
          backgroundSize: '2rem 2rem',
        }}
      ></div>

      {/* Content */}
      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Heading */}
        <motion.h1
          id="hero-heading"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight tracking-tight"
        >
          Transforming <span className="text-blue-400">Complexity</span> into Clarity
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-lg md:text-2xl text-slate-300 max-w-4xl mx-auto mb-6"
        >
          We help organizations simplify data, strengthen systems, and achieve measurable growth.
        </motion.p>

        {/* Supporting paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="max-w-3xl mx-auto text-slate-400 mb-12 leading-relaxed"
        >
          Whether you’re a startup building structure or an established organization seeking performance
          efficiency, C_S Insight and Solution Firm offers tailored consulting services that drive meaningful
          results.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a
            href="#contact"
            className="px-8 py-4 bg-blue-600 text-white font-bold rounded-lg shadow-md hover:bg-blue-700 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 ease-in-out"
          >
            Book an Appointment
          </a>
          <a
            href="#contact"
            className="px-8 py-4 border-2 border-blue-400 text-blue-300 font-bold rounded-lg hover:bg-blue-400 hover:text-white transition-colors duration-300"
          >
            Make an Enquiry
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

