import React, { useState } from 'react';

const MailIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
);
const PhoneIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
);

const ContactPage: React.FC = () => {
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.subject || !formData.message) {
            setSubmitStatus('error');
            setErrorMessage('Please fill out all fields.');
            return;
        }
        setIsSubmitting(true);
        setSubmitStatus('idle');
        setErrorMessage('');

        // In a real application, this would be a fetch call to your backend API,
        // which would then securely interact with the Google Sheets API.
        try {
            // Example of what the fetch call would look like:
            /*
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            if (!response.ok) {
                throw new Error('Network response was not ok.');
            }
            */

            // For demonstration, we simulate an API call
            await new Promise(resolve => setTimeout(resolve, 1500));
            console.log("Form data submitted:", formData);

            setSubmitStatus('success');
            setFormData({ name: '', email: '', subject: '', message: '' });
        } catch (error) {
            setSubmitStatus('error');
            setErrorMessage('Something went wrong. Please try again later.');
            console.error('Submission failed:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-20 pt-32 bg-slate-100">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-extrabold text-slate-800 mb-4">Get in Touch</h2>
                    <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                        We're here to help and answer any question you might have. We look forward to hearing from you.
                    </p>
                </div>
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 bg-white p-8 rounded-lg shadow-lg">
                    <div className="flex flex-col justify-between">
                        <div>
                            <h3 className="text-2xl font-bold text-slate-800 mb-6">Contact Information</h3>
                            <div className="space-y-4 text-slate-600">
                                <div className="flex items-center">
                                    <PhoneIcon className="w-6 h-6 text-blue-600 mr-4" />
                                    <span>+1 (555) 123-4567</span>
                                </div>
                                <div className="flex items-center">
                                    <MailIcon className="w-6 h-6 text-blue-600 mr-4" />
                                    <span>contact@csinsight.com</span>
                                </div>
                            </div>
                        </div>
                        <div className="mt-8">
                             <a
                                href="https://calendly.com/cs-insight-solutions/consultation" // TODO: Replace with your actual scheduling link
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block w-full text-center px-8 py-4 bg-blue-600 text-white font-bold rounded-lg shadow-md hover:bg-blue-700 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 ease-in-out"
                            >
                                Book an Appointment
                            </a>
                        </div>
                    </div>
                    <div>
                        <form onSubmit={handleSubmit} noValidate>
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-slate-700 font-semibold mb-2">Full Name</label>
                                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-slate-700 font-semibold mb-2">Email Address</label>
                                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                            </div>
                             <div className="mb-4">
                                <label htmlFor="subject" className="block text-slate-700 font-semibold mb-2">Subject</label>
                                <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="message" className="block text-slate-700 font-semibold mb-2">Message</label>
                                <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={5} className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required></textarea>
                            </div>
                            <div>
                                <button type="submit" disabled={isSubmitting} className="w-full bg-slate-800 text-white font-bold py-3 px-6 rounded-lg hover:bg-slate-900 transition-colors duration-300 disabled:bg-slate-400">
                                    {isSubmitting ? 'Sending...' : 'Send Message'}
                                </button>
                            </div>
                            {submitStatus === 'success' && <p className="text-green-600 mt-4">Thank you for your message! We will get back to you shortly.</p>}
                            {submitStatus === 'error' && <p className="text-red-600 mt-4">{errorMessage}</p>}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactPage;