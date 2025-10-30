
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-slate-100">
      <div className="container mx-auto px-6">
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg shadow-2xl p-12 text-center text-white">
          <h2 className="text-4xl font-extrabold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-lg text-blue-200 max-w-3xl mx-auto mb-10">
            Let's turn your challenges into opportunities. Connect with our consultants to discuss your specific needs and discover how we can help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a
              href="#"
              className="px-10 py-4 bg-white text-blue-700 font-bold rounded-lg shadow-md hover:bg-slate-100 transform hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto"
            >
              Book an Appointment
            </a>
            <a
              href="#"
              className="px-10 py-4 bg-transparent border-2 border-blue-300 text-white font-bold rounded-lg hover:bg-white hover:text-blue-700 transition-colors duration-300 w-full sm:w-auto"
            >
              Make an Enquiry
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
