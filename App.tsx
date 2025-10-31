import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import CaseStudiesPage from './pages/CaseStudiesPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';

const App: React.FC = () => (
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

export default App;
