import React from 'react';
import type { Service } from '../types';

const ProjectManagementIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
);
const DataAnalyticsIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
    </svg>
);
const SupplyChainIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10l2-2h8a1 1 0 001-1z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 16h2a2 2 0 002-2V7a2 2 0 00-2-2h-2v11z" />
    </svg>
);
const StrategyIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
    </svg>
);
const CoachingIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 9.243a4.013 4.013 0 01-4.873 3.497-4.013 4.013 0 01-4.873-3.497A4.013 4.013 0 0112 5.23a4.013 4.013 0 015 4.013zM12 15v.01" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);
const AuditIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
    </svg>
);

const services: Service[] = [
    { icon: <ProjectManagementIcon />, title: 'Project Management Consulting', description: 'End-to-end project management support to ensure your projects deliver on time, within scope, and on budget.' },
    { icon: <DataAnalyticsIcon />, title: 'Data Analytics & Business Intelligence', description: 'We simplify complex data into clear insights that drive smarter decisions and uncover new opportunities for growth.' },
    { icon: <SupplyChainIcon />, title: 'Supply Chain Optimization', description: 'We streamline logistics and procurement systems, helping businesses reduce waste, cut costs, and improve reliability.' },
    { icon: <StrategyIcon />, title: 'Strategy & Business Process Improvement', description: 'We design agile strategies and process frameworks that align with your business goals and boost efficiency.' },
    { icon: <CoachingIcon />, title: 'Coaching & Capacity Development', description: 'Through customized coaching sessions, we build leadership capacity and organizational resilience.' },
    { icon: <AuditIcon />, title: 'Audit & Feasibility Studies', description: 'We assess operational and financial feasibility to guide investment, expansion, and sustainability decisions.' },
];

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => (
    <div className="group bg-white p-8 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
      <div className="flex justify-start mb-4">
        {/* Fix: With the corrected type for `service.icon` in `types.ts`, the type assertion is no longer needed. The element can now be cloned safely. */}
        {React.cloneElement(service.icon, { className: 'h-12 w-12 text-blue-600 group-hover:-translate-y-1 transition-transform duration-300' })}
      </div>
      <h3 className="text-xl font-bold text-slate-800 mb-3">{service.title}</h3>
      <p className="text-slate-600">{service.description}</p>
    </div>
);

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-slate-800 mb-4">Our Services</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            We offer a comprehensive suite of consulting services designed to address your most critical challenges and opportunities.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
