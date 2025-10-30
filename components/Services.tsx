import React from 'react';
import { motion } from 'framer-motion';
import { ProjectManagementIcon, DataAnalyticsIcon, SupplyChainIcon, StrategyIcon, CoachingIcon, AuditIcon } from '../icons/ServiceIcons';
import type { Service } from '../types';

// Service definitions
const services: Service[] = [
  {
    icon: <ProjectManagementIcon />,
    title: 'Project Management Consulting',
    description: 'End-to-end project management support to ensure your projects deliver on time, within scope, and on budget.'
  },
  {
    icon: <DataAnalyticsIcon />,
    title: 'Data Analytics & Business Intelligence',
    description: 'We simplify complex data into clear insights that drive smarter decisions and uncover new opportunities for growth.'
  },
  {
    icon: <SupplyChainIcon />,
    title: 'Supply Chain Optimization',
    description: 'We streamline logistics and procurement systems, helping businesses reduce waste, cut costs, and improve reliability.'
  },
  {
    icon: <StrategyIcon />,
    title: 'Strategy & Business Process Improvement',
    description: 'We design agile strategies and process frameworks that align with your business goals and boost efficiency.'
  },
  {
    icon: <CoachingIcon />,
    title: 'Coaching & Capacity Development',
    description: 'Through customized coaching sessions, we build leadership capacity and organizational resilience.'
  },
  {
    icon: <AuditIcon />,
    title: 'Audit & Feasibility Studies',
    description: 'We assess operational and financial feasibility to guide investment, expansion, and sustainability decisions.'
  }
];

const cardVariants = {
  offscreen: { opacity: 0, y: 40 },
  onscreen: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.12 * i,
      duration: 0.7,
      type: 'spring'
    }
  })
};

const ServiceCard: React.FC<{ service: Service; index: number }> = ({ service, index }) => (
  <motion.div
    variants={cardVariants}
    initial="offscreen"
    whileInView="onscreen"
    viewport={{ once: true }}
    custom={index}
    className="group bg-white p-8 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
  >
    <div className="flex justify-start mb-4">
      {React.cloneElement(service.icon, {
        className: 'h-12 w-12 text-blue-600 group-hover:-translate-y-1 transition-transform duration-300'
      })}
    </div>
    <h3 className="text-xl font-bold text-slate-800 mb-3">{service.title}</h3>
    <p className="text-slate-600">{service.description}</p>
  </motion.div>
);

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-slate-800 mb-4">Our Services</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">We offer a comprehensive suite of consulting services designed to address your most critical challenges and opportunities.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
