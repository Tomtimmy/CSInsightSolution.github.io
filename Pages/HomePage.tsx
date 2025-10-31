import React from 'react';
import Hero from '../components/Hero';
import AnimatedSection from '../components/AnimatedSection';
import AboutUs from '../components/AboutUs';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import CaseStudies from '../components/CaseStudies';

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
    </>
  );
};

export default HomePage;