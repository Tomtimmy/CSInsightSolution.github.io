import React from 'react';
import AboutUs from '../../components/AboutUs';
import AnimatedSection from '../../components/AnimatedSection';

const AboutPage: React.FC = () => {
  return (
    <div className="pt-20">
      <AnimatedSection>
        <AboutUs />
      </AnimatedSection>
    </div>
  );
};

export default AboutPage;