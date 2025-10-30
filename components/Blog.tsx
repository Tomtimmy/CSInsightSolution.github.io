
import React from 'react';

const BlogCard: React.FC<{ title: string; excerpt: string }> = ({ title, excerpt }) => (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:-translate-y-1 transition-transform duration-300">
        <div className="p-6">
            <h3 className="text-xl font-bold text-slate-800 mb-2">{title}</h3>
            <p className="text-slate-600 mb-4">{excerpt}</p>
            <a href="#" className="font-semibold text-blue-600 hover:text-blue-800 transition-colors">Read More &rarr;</a>
        </div>
    </div>
)

const Blog: React.FC = () => {
  return (
    <section id="blog" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-slate-800 mb-4">Blog & Thought Leadership</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Our blog provides industry insights, research updates, and practical advice on data management,
            business transformation, and operational leadership. Each post aims to educate, empower, and
            inspire decision-makers.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <BlogCard title="The Future of Data-Driven Decisions" excerpt="Explore how leveraging business intelligence can future-proof your organization..." />
            <BlogCard title="5 Common Pitfalls in Project Management" excerpt="Learn how to avoid these common mistakes to ensure your projects succeed..." />
            <BlogCard title="Optimizing Your Supply Chain in 2024" excerpt="Discover key strategies for building a more resilient and efficient supply chain..." />
        </div>
      </div>
    </section>
  );
};

export default Blog;
