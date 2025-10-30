
import React from 'react';

const StatCard: React.FC<{ value: string; label: string }> = ({ value, label }) => (
    <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-center border border-white/20">
        <p className="text-5xl font-extrabold text-blue-300 mb-2">{value}</p>
        <p className="text-lg text-slate-200">{label}</p>
    </div>
);

const CaseStudies: React.FC = () => {
  return (
    <section id="cases" className="py-20 bg-gradient-to-br from-slate-800 to-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-white mb-4">Proven Success Stories</h2>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            Our case studies demonstrate how we’ve helped clients achieve remarkable results. Each story
            showcases our tailored approach — combining insight, innovation, and execution excellence.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <StatCard value="30%" label="Reduction in Operational Costs" />
            <StatCard value="50%" label="Improvement in Data Reporting" />
            <StatCard value="Faster" label="Project Delivery Timelines" />
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
