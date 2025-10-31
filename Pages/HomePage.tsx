import React from 'react';
import Hero from '../components/Hero';
import AnimatedSection from '../components/AnimatedSection';
import AboutUs from '../components/AboutUs';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import CaseStudies from '../components/CaseStudies';
import Blog from '../components/Blog';
import Contact from '../components/Contact';



const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <AnimatedSection>
        <AboutUs />
      </AnimatedSection>
      <AnimatedSection>
        <Services />
      </AnimatedSection>
      <AnimatedSection>
        <CaseStudies />
      </AnimatedSection>
      <AnimatedSection>
        <Testimonials />
      </AnimatedSection>
      <AnimatedSection>
        <Blog/>
      </AnimatedSection>
      <AnimatedSection>
        <Contact/>
      </AnimatedSection>
    </>
  );
};

export default HomePage;