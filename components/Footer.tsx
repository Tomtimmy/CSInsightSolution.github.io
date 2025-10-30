import React from 'react';
import NewsletterForm from './NewsletterForm';

const SocialIcon: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors duration-300">
        {children}
    </a>
);

const FooterLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
    <a href={href} className="text-slate-400 hover:text-white transition-colors duration-300">{children}</a>
);

const LinkedInIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.25 6.5 1.75 1.75 0 016.5 8.25zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path></svg>
);
const FacebookIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path></svg>
);
const InstagramIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.149-4.771-1.691-4.919-4.919C2.182 15.584 2.17 15.204 2.17 12s.012-3.584.07-4.85c.148-3.225 1.664-4.771 4.919-4.919C8.416 2.175 8.796 2.163 12 2.163zm0 1.623c-3.218 0-3.593.012-4.86.07-2.812.128-4.004 1.32-4.136 4.135-.058 1.267-.07 1.645-.07 4.86s.012 3.593.07 4.86c.132 2.812 1.323 4.004 4.136 4.135 1.267.058 1.645.07 4.86.07s3.593-.012 4.86-.07c2.812-.132 4.004-1.323 4.135-4.135.058-1.267.07-1.645.07-4.86s-.012-3.593-.07-4.86c-.132-2.812-1.323-4.004-4.135-4.135C15.593 3.8 15.218 3.786 12 3.786zM12 9.25c-1.518 0-2.75 1.232-2.75 2.75s1.232 2.75 2.75 2.75 2.75-1.232 2.75-2.75-1.232-2.75-2.75-2.75zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm6.406-11.845a1.44 1.44 0 100-2.88 1.44 1.44 0 000 2.88z"></path></svg>
);

const Footer: React.FC = () => {
    return (
        <footer className="bg-slate-900 text-slate-300 py-12">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                    <div className="lg:col-span-1">
                        <h3 className="text-xl font-bold text-white mb-4">C_S Insight</h3>
                        <p className="text-slate-400">Transforming Complexity into Clarity.</p>
                        <div className="flex space-x-4 mt-4">
                            <SocialIcon href="#"><LinkedInIcon className="w-6 h-6" /></SocialIcon>
                            <SocialIcon href="#"><FacebookIcon className="w-6 h-6" /></SocialIcon>
                            <SocialIcon href="#"><InstagramIcon className="w-6 h-6" /></SocialIcon>
                        </div>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
                        <ul>
                            <li className="mb-2"><FooterLink href="#home">Home</FooterLink></li>
                            <li className="mb-2"><FooterLink href="#about">About Us</FooterLink></li>
                            <li className="mb-2"><FooterLink href="#services">Services</FooterLink></li>
                            <li className="mb-2"><FooterLink href="#contact">Contact</FooterLink></li>
                        </ul>
                    </div>
                    <div className="lg:col-span-2">
                        <NewsletterForm idPrefix="footer" />
                    </div>
                </div>
                <div className="border-t border-slate-700 pt-8 text-center text-slate-500">
                    <p>&copy; {new Date().getFullYear()} C_S Insight and Solution Firm. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;