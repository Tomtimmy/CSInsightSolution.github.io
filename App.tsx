import './index.css';
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

import HomePage from '@/Pages/HomePage';
import AboutPage from '@/Pages/AboutPage';
import ServicesPage from '@/Pages/ServicesPage';
import CaseStudiesPage from '@/Pages/CaseStudiesPage';
import BlogPage from '@/Pages/BlogPage';
import ContactPage from '@/Pages/ContactPage';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/case-studies" element={<CaseStudiesPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
