import React from 'react';
import Blog from '../components/Blog';
import AnimatedSection from '../components/AnimatedSection';

const BlogPage: React.FC = () => {
  return (
    <div className="pt-20">
      <AnimatedSection>
        <Blog />
      </AnimatedSection>
    </div>
  );
};

export default BlogPage;