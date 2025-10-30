import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-slate-900 to-slate-700 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-30"></div>
       <div className="absolute inset-0 animate-subtle-pulse" style={{backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '2rem 2rem'}}></div>
      <div className="container mx-auto px-6 text-center relative z-10">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-4 leading-tight tracking-tight">
          Transforming Complexity into Clarity
        </h1>
        <p className="text-lg md:text-2xl text-slate-300 max-w-4xl mx-auto mb-8">
          We help organizations simplify data, strengthen systems, and achieve measurable growth.
        </p>
        <p className="max-w-3xl mx-auto text-slate-400 mb-12">
            Whether you’re a startup building structure or an established organization seeking performance
            efficiency, C_S Insight and Solution Firm offers tailored consulting services that drive meaningful
            results.
        </p>
        <div className="flex justify-center items-center space-x-4">
          <a
            href="#contact"
            className="px-8 py-4 bg-blue-600 text-white font-bold rounded-lg shadow-md hover:bg-blue-700 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 ease-in-out"
          >
            Book an Appointment
          </a>
          <a
            href="#contact"
            className="px-8 py-4 bg-transparent border-2 border-blue-400 text-blue-300 font-bold rounded-lg hover:bg-blue-400 hover:text-white transition-colors duration-300"
          >
            Make an Enquiry
          </a>
        </div>
        <div className="mt-16 max-w-xl mx-auto">
        
        </div>
      </div>
    </section>
  );
};

export default Hero;