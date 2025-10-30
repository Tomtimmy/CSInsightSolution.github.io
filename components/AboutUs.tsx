import React from 'react';
import { motion } from 'framer-motion';
import type { CoreValue } from '../types';

// Icons (You can move these into a separate file later: src/icons/CoreValueIcons.tsx)
const IntegrityIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);
const ServiceIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);
const InnovationIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
  </svg>
);
const CollaborationIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
);
const ExcellenceIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
  </svg>
);

// Core Values Data
const coreValues: CoreValue[] = [
  { icon: <IntegrityIcon />, title: 'Integrity', description: 'We build trust through transparency and consistency.' },
  { icon: <ServiceIcon />, title: 'Service', description: 'We go beyond expectations to create lasting value.' },
  { icon: <InnovationIcon />, title: 'Innovation', description: 'We thrive on new ideas that deliver practical solutions.' },
  { icon: <CollaborationIcon />, title: 'Collaboration', description: 'We believe great results come from collective intelligence.' },
  { icon: <ExcellenceIcon />, title: 'Excellence', description: 'We measure success by the difference we make.' },
];

// Value Card Component
const ValueCard: React.FC<{ value: CoreValue }> = ({ value }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="bg-white p-6 rounded-lg shadow-lg text-center transition-transform duration-300 hover:scale-105 hover:shadow-xl"
  >
    <div className="flex justify-center items-center mb-4">{value.icon}</div>
    <h3 className="text-xl font-bold text-slate-800 mb-2">{value.title}</h3>
    <p className="text-slate-600">{value.description}</p>
  </motion.div>
);

// About Us Section
const AboutUs: React.FC = () => {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="py-16 sm:py-20 bg-slate-100"
    >
      <h2 id="about-heading" className="sr-only">About C_S Insight and Solution Firm</h2>

      <div className="container mx-auto px-6">
        {/* Our Story */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-slate-800 mb-4">Our Story</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Founded with a commitment to clarity, insight, and measurable impact, C_S Insight and Solution
            Firm partners with businesses, NGOs, and government organizations to transform potential into
            performance.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-10 mb-16 items-stretch">
          <div className="bg-blue-600 text-white p-8 rounded-lg shadow-xl">
            <h3 className="text-3xl font-bold mb-3">Mission</h3>
            <p className="text-blue-200 text-lg leading-relaxed">
              To empower organizations with actionable insight that turns complexity into opportunity.
            </p>
          </div>
          <div className="bg-slate-700 text-white p-8 rounded-lg shadow-xl">
            <h3 className="text-3xl font-bold mb-3">Vision</h3>
            <p className="text-slate-300 text-lg leading-relaxed">
              To be the preferred consulting partner recognized for clarity, integrity, and impact across Africa and beyond.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-extrabold text-slate-800">Our Core Values</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {coreValues.map((value) => (
            <ValueCard key={value.title} value={value} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
