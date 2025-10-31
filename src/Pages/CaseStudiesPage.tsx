import React from 'react';
import CaseStudies from '../../components/CaseStudies';
import AnimatedSection from '../../components/AnimatedSection';

const CaseStudiesPage: React.FC = () => {
  return (
    <div className="pt-20">
      <AnimatedSection>
        <CaseStudies />
      </AnimatedSection>
    </div>
  );
};

export default CaseStudiesPage;