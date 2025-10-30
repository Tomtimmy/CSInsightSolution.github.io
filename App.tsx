import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import CaseStudies from './components/CaseStudies';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    // Apply both light and dark background handling
    <div className="bg-white text-slate-900 dark:bg-slate-900 dark:text-white transition-colors duration-300 min-h-screen">
      <Header />
      <main>
        <Hero />
        <AboutUs />
        <Services />
        <CaseStudies />
        <Testimonials />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
