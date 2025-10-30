
import React from 'react';
import type { Testimonial } from '../types';

const testimonials: Testimonial[] = [
    {
        quote: "C_S Insight transformed our data chaos into a clear, actionable strategy. Their expertise was a game-changer for our operational efficiency.",
        name: "John Doe",
        title: "CEO, Tech Solutions Inc."
    },
    {
        quote: "The project management consulting we received was second to none. Our project was completed ahead of schedule and under budget, a first for our company.",
        name: "Jane Smith",
        title: "Director of Operations, Global Logistics"
    },
    {
        quote: "Their team didn't just give us a report; they partnered with us to implement changes that led to a 30% cost reduction. Truly remarkable.",
        name: "Samuel Green",
        title: "CFO, Manufacturing Co."
    },
];

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => (
    <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col h-full">
         <div className="text-5xl text-blue-200 mb-4">“</div>
        <blockquote className="text-slate-600 italic mb-6 flex-grow">
            {testimonial.quote}
        </blockquote>
        <div className="mt-auto">
            <p className="font-bold text-slate-800">{testimonial.name}</p>
            <p className="text-sm text-slate-500">{testimonial.title}</p>
        </div>
    </div>
);

const Testimonials: React.FC = () => {
    return (
        <section id="testimonials" className="py-20 bg-slate-100">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-extrabold text-slate-800 mb-4">What Our Clients Say</h2>
                    <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                        We are proud to build lasting partnerships based on trust, service, and measurable impact.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial) => (
                        <TestimonialCard key={testimonial.name} testimonial={testimonial} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
