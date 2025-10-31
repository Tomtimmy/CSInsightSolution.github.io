import React, { useState, useEffect, useRef } from 'react';
import { GoogleGenAI } from '@google/genai';

const ChatIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" />
    </svg>
);
const CloseIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
);
const SendIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
    </svg>
);

const Chatbot: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<{ sender: 'user' | 'bot'; text: string }[]>([
        { sender: 'bot', text: 'Hello! How can I help you learn about C_S Insight and Solution Firm today?' }
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const aiRef = useRef<GoogleGenAI | null>(null);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const companyContext = `
        You are a helpful and friendly chatbot for C_S Insight and Solution Firm. Your goal is to answer user questions based ONLY on the following information provided about the company. Do not make up information. If a question is outside this scope or you don't know the answer, politely say you can't help with that request.

        Company: C_S Insight and Solution Firm
        Description: A consulting service that helps organizations simplify data, strengthen systems, and achieve measurable growth. We partner with businesses, NGOs, and government organizations to transform potential into performance.
        Mission: To empower organizations with actionable insight that turns complexity into opportunity.
        Vision: To be the preferred consulting partner recognized for clarity, integrity, and impact across Africa and beyond.
        Core Values: Integrity (trust through transparency), Service (creating lasting value), Innovation (practical solutions), Collaboration (collective intelligence), Excellence (making a difference).
        Services Offered:
        - Project Management Consulting: End-to-end project support to ensure on-time, on-budget, and in-scope delivery.
        - Data Analytics & Business Intelligence: Simplifying complex data into clear insights to drive smarter decisions.
        - Supply Chain Optimization: Streamlining logistics and procurement to reduce waste and cut costs.
        - Strategy & Business Process Improvement: Designing agile strategies and process frameworks.
        - Coaching & Capacity Development: Building leadership capacity and organizational resilience.
        - Audit & Feasibility Studies: Assessing operational and financial feasibility for investment decisions.
        Leadership Team:
        - Chisom Ukaegbu: Founder & Principal Consultant with over a decade of experience in systems strengthening and data analytics.
        - Samuel Adebayo: Head of Strategy, skilled in identifying growth opportunities.
    `;

    useEffect(() => {
        if (!process.env.API_KEY) {
            console.error("API_KEY environment variable not set for chatbot.");
            return;
        }
        aiRef.current = new GoogleGenAI({ apiKey: process.env.API_KEY });
    }, []);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(scrollToBottom, [messages, isLoading]);

    const handleSendMessage = async () => {
        if (!inputValue.trim() || !aiRef.current) return;
        const userMessage = { sender: 'user' as const, text: inputValue };
        setMessages(prev => [...prev, userMessage]);
        setInputValue('');
        setIsLoading(true);

        try {
            const fullHistory = messages.map(msg => `${msg.sender}: ${msg.text}`).join('\n');
            
            const response = await aiRef.current.models.generateContent({
                model: 'gemini-2.5-flash',
                contents: `${fullHistory}\nuser: ${userMessage.text}`,
                config: { systemInstruction: companyContext },
            });

            const botMessage = { sender: 'bot' as const, text: response.text.trim() };
            setMessages(prev => [...prev, botMessage]);
        } catch (error) {
            console.error("Error generating content:", error);
            const errorMessage = { sender: 'bot' as const, text: "Sorry, I'm having trouble connecting right now. Please try again later." };
            setMessages(prev => [...prev, errorMessage]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <div className={`fixed bottom-0 right-0 m-6 transition-transform duration-300 ease-in-out ${isOpen ? 'translate-y-full scale-0' : 'translate-y-0 scale-100'}`}>
                <button
                    onClick={() => setIsOpen(true)}
                    className="bg-blue-600 text-white w-16 h-16 rounded-full shadow-lg flex items-center justify-center hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    aria-label="Open chat"
                >
                    <ChatIcon className="w-8 h-8" />
                </button>
            </div>
            <div className={`fixed bottom-0 right-0 m-4 sm:m-6 w-full sm:w-96 max-h-[70vh] bg-white rounded-lg shadow-2xl flex flex-col transition-transform duration-300 ease-in-out origin-bottom-right ${isOpen ? 'scale-100' : 'scale-0'}`}>
                <header className="flex items-center justify-between p-4 bg-slate-800 text-white rounded-t-lg">
                    <h3 className="font-bold text-lg">C_S Assistant</h3>
                    <button onClick={() => setIsOpen(false)} aria-label="Close chat">
                        <CloseIcon className="w-6 h-6" />
                    </button>
                </header>
                <div className="flex-1 p-4 overflow-y-auto">
                    <div className="space-y-4">
                        {messages.map((msg, index) => (
                            <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                                <p className={`max-w-xs md:max-w-sm rounded-lg px-4 py-2 ${msg.sender === 'user' ? 'bg-blue-600 text-white' : 'bg-slate-200 text-slate-800'}`}>
                                    {msg.text}
                                </p>
                            </div>
                        ))}
                        {isLoading && (
                             <div className="flex justify-start">
                                <p className="max-w-xs md:max-w-sm rounded-lg px-4 py-2 bg-slate-200 text-slate-800">
                                    <span className="animate-pulse">...</span>
                                </p>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>
                </div>
                <footer className="p-4 border-t border-slate-200">
                    <div className="flex items-center space-x-2">
                        <input
                            type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                            placeholder="Ask a question..."
                            className="flex-1 px-4 py-2 border border-slate-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <button onClick={handleSendMessage} className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 disabled:bg-slate-400" disabled={isLoading} aria-label="Send message">
                            <SendIcon className="w-5 h-5" />
                        </button>
                    </div>
                </footer>
            </div>
        </>
    );
};

export default Chatbot;