import React from 'react';
import Services from '../components/Services';
import AnimatedSection from '../components/AnimatedSection';

const ServicesPage: React.FC = () => {
  return (
    <div className="pt-20">
      <AnimatedSection>
        <Services />
      </AnimatedSection>
    </div>
  );
};

export default ServicesPage;