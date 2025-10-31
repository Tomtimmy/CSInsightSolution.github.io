import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface NavItem {
  to: string;
  label: string;
}

const NavLink: React.FC<{ to: string; children: React.ReactNode }> = ({ to, children }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`text-lg font-semibold transition-colors duration-300 ${
        isActive
          ? 'text-blue-300'
          : 'text-slate-100 hover:text-blue-300'
      }`}
    >
      {children}
    </Link>
  );
};

const MobileNavLink: React.FC<{ to: string; children: React.ReactNode; onClick: () => void }> = ({
  to,
  children,
  onClick,
}) => (
  <Link
    to={to}
    onClick={onClick}
    className="block text-lg font-semibold text-slate-800 hover:bg-blue-100 p-4 transition-colors duration-300"
  >
    {children}
  </Link>
);

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: NavItem[] = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About Us' },
    { to: '/services', label: 'Services' },
    { to: '/case-studies', label: 'Case Studies' },
    { to: '/blog', label: 'Blog' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-800/90 shadow-lg backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-white">
          {/* Add your logo image here */}
          C_S Insight
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <NavLink key={link.to} to={link.to}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  isMenuOpen
                    ? 'M6 18L18 6M6 6l12 12'
                    : 'M4 6h16M4 12h16m-7 6h7'
                }
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-xl">
          {navLinks.map((link) => (
            <MobileNavLink
              key={link.to}
              to={link.to}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </MobileNavLink>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
