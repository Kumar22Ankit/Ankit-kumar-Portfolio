import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';
import { smoothScrollTo, handleDownloadResume } from '@/lib/utils';

const NAV_ITEMS = [
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Experience', id: 'experience' },
  { label: 'Projects', id: 'projects' },
  { label: 'Certifications', id: 'certifications' },
  { label: 'Contact', id: 'contact' },
];

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Detect active section
      const sections = NAV_ITEMS.map(item => document.getElementById(item.id));
      const scrollY = window.scrollY + 120;
      let current = '';
      sections.forEach((section) => {
        if (section && section.offsetTop <= scrollY) {
          current = section.id;
        }
      });
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const offsetPosition = element.getBoundingClientRect().top + window.scrollY - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
    if (mobileMenuOpen) setMobileMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'scrolled-header backdrop-blur-xl border-b shadow-[0_4px_30px_rgba(0,0,0,0.3)]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <motion.div
          className="flex items-center space-x-3 cursor-pointer"
          whileHover={{ scale: 1.02 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <span className="text-2xl font-black font-mono gradient-text">&lt;AK/&gt;</span>
          <span className="hidden sm:block text-sm font-semibold text-slate-300 tracking-wide">
            Ankit Kumar
          </span>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`nav-link px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
                activeSection === item.id
                  ? 'text-cyan-400'
                  : 'text-slate-400 hover:text-slate-100'
              }`}
            >
              {item.label}
              {activeSection === item.id && (
                <motion.div
                  layoutId="nav-indicator"
                  className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full"
                  style={{ background: 'linear-gradient(90deg, #06b6d4, #a855f7)' }}
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </nav>

        {/* Right Controls */}
        <div className="flex items-center space-x-2">
          {/* Theme Toggle */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleTheme}
            className="p-2 rounded-lg text-slate-400 hover:text-slate-100 hover:bg-white/5 transition-all duration-200"
            aria-label="Toggle theme"
          >
            <AnimatePresence mode="wait">
              <motion.i
                key={theme}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className={`fas ${theme === 'dark' ? 'fa-sun' : 'fa-moon'} text-base`}
              />
            </AnimatePresence>
          </motion.button>

          {/* Resume Button */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={handleDownloadResume}
            className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold text-white relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #06b6d4, #a855f7)' }}
          >
            <span className="relative z-10 flex items-center gap-2">
              <i className="fas fa-download text-xs" />
              Resume
            </span>
          </motion.button>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(prev => !prev)}
            className="md:hidden p-2 rounded-lg text-slate-400 hover:text-slate-100 hover:bg-white/5 transition-all"
            aria-label="Open menu"
          >
            <motion.div animate={mobileMenuOpen ? 'open' : 'closed'} className="w-5 h-4 flex flex-col justify-between">
              <motion.span
                className="h-0.5 bg-current rounded-full origin-center block"
                variants={{ open: { rotate: 45, y: 7 }, closed: { rotate: 0, y: 0 } }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="h-0.5 bg-current rounded-full block"
                variants={{ open: { opacity: 0, scaleX: 0 }, closed: { opacity: 1, scaleX: 1 } }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                className="h-0.5 bg-current rounded-full origin-center block"
                variants={{ open: { rotate: -45, y: -7 }, closed: { rotate: 0, y: 0 } }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden mobile-menu backdrop-blur-xl border-b border-[rgba(6,182,212,0.12)]"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-1">
              {NAV_ITEMS.map((item, i) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => handleNavClick(item.id)}
                  className={`p-3 text-left rounded-lg text-sm font-medium transition-all ${
                    activeSection === item.id
                      ? 'text-cyan-400 bg-cyan-400/5'
                      : 'text-slate-400 hover:text-slate-100 hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </motion.button>
              ))}
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: NAV_ITEMS.length * 0.05 }}
                onClick={handleDownloadResume}
                className="p-3 text-left rounded-lg text-sm font-medium text-cyan-400 hover:bg-cyan-400/5 transition-all flex items-center gap-2"
              >
                <i className="fas fa-download text-xs" /> Download Resume
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
