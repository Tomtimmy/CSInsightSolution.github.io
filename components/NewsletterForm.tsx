import React, { useState, useEffect } from 'react';

interface NewsletterFormProps {
    idPrefix: string;
}

const NewsletterForm: React.FC<NewsletterFormProps> = ({ idPrefix }) => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [isSubscribed, setIsSubscribed] = useState(false);
    const inputId = `${idPrefix}-email-subscribe`;

    useEffect(() => {
        if (localStorage.getItem('newsletterSubscribed') === 'true') {
            setIsSubscribed(true);
        }
    }, []);

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email || !emailRegex.test(email)) {
            setError('Please enter a valid email address.');
            return;
        }

        // In a real application, you would send the email to a backend that
        // connects to a spreadsheet (e.g., using Google Sheets API).
        // For this demo, we'll simulate success and use localStorage.
        console.log(`Subscribing email: ${email}`);
        
        setError('');
        localStorage.setItem('newsletterSubscribed', 'true');
        setIsSubscribed(true);
    };
    
    if (isSubscribed) {
        return (
            <div>
                <h4 className="text-lg font-semibold text-white mb-4">Subscribed!</h4>
                <p className="text-slate-400">Thank you for joining our newsletter. You'll receive the latest insights directly in your inbox.</p>
            </div>
        );
    }

    return (
        <div>
            <h4 className="text-lg font-semibold text-white mb-4">Stay Updated</h4>
            <p className="text-slate-400 mb-4">Subscribe to our newsletter for the latest insights.</p>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
                <label htmlFor={inputId} className="sr-only">Email address</label>
                <input
                    id={inputId}
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-grow bg-slate-800 border border-slate-600 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    aria-label="Email for newsletter"
                />
                <button
                    type="submit"
                    className="bg-blue-600 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-300"
                >
                    Subscribe
                </button>
            </form>
            {error && <p className="text-red-400 text-sm mt-2">{error}</p>}
        </div>
    );
}

export default NewsletterForm;