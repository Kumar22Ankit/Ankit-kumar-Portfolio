import React, { useState } from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { smoothScrollTo, handleDownloadResume } from '@/lib/utils';

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(prev => !prev);
  };

  const handleNavClick = (sectionId: string) => {
    smoothScrollTo(sectionId);
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-background/80 dark:bg-background/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <span className="text-primary dark:text-secondary text-3xl font-bold font-mono">&lt;AK/&gt;</span>
          <h1 className="hidden sm:block text-xl font-semibold">Ankit Kumar</h1>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 items-center">
          <button 
            onClick={() => handleNavClick('about')} 
            className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-secondary transition-colors"
          >
            About
          </button>
          <button 
            onClick={() => handleNavClick('skills')} 
            className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-secondary transition-colors"
          >
            Skills
          </button>
          <button 
            onClick={() => handleNavClick('experience')} 
            className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-secondary transition-colors"
          >
            Experience
          </button>
          <button 
            onClick={() => handleNavClick('projects')} 
            className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-secondary transition-colors"
          >
            Projects
          </button>
          <button 
            onClick={() => handleNavClick('certifications')} 
            className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-secondary transition-colors"
          >
            Certifications
          </button>
          <button 
            onClick={() => handleNavClick('contact')} 
            className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-secondary transition-colors"
          >
            Contact
          </button>
        </nav>
        
        <div className="flex items-center space-x-4">
          {/* Theme toggle button */}
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors" 
            aria-label="Toggle dark mode"
          >
            {theme === 'dark' ? (
              <i className="fas fa-sun"></i>
            ) : (
              <i className="fas fa-moon"></i>
            )}
          </button>
          
          {/* Resume download button */}
          <button 
            onClick={handleDownloadResume}
            className="hidden sm:inline-flex items-center px-4 py-2 bg-primary dark:bg-secondary text-white rounded-md hover:bg-blue-700 dark:hover:bg-indigo-500 transition-all shadow-md hover:shadow-lg"
          >
            <i className="fas fa-download mr-2"></i> Resume
          </button>
          
          {/* Mobile menu button */}
          <button 
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors" 
            aria-label="Open menu"
          >
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 animate-fadeIn">
          <div className="container mx-auto px-4 py-3 flex flex-col space-y-3">
            <button 
              onClick={() => handleNavClick('about')} 
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => handleNavClick('skills')} 
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors"
            >
              Skills
            </button>
            <button 
              onClick={() => handleNavClick('experience')} 
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors"
            >
              Experience
            </button>
            <button 
              onClick={() => handleNavClick('projects')} 
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors"
            >
              Projects
            </button>
            <button 
              onClick={() => handleNavClick('certifications')} 
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors"
            >
              Certifications
            </button>
            <button 
              onClick={() => handleNavClick('contact')} 
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors"
            >
              Contact
            </button>
            <button 
              onClick={handleDownloadResume}
              className="p-2 flex items-center text-primary dark:text-secondary"
            >
              <i className="fas fa-download mr-2"></i> Download Resume
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
