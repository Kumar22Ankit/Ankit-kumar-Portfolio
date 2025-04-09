import React from 'react';
import { smoothScrollTo } from '@/lib/utils';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center">
      <div className="md:w-1/2 mb-10 md:mb-0">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 font-sans">
          <span className="text-primary dark:text-secondary">DevOps Engineer</span>
          <br />& Cloud Specialist
        </h1>
        <p className="text-xl mb-8 text-gray-700 dark:text-gray-300">
          Building reliable infrastructure & automating deployment pipelines
        </p>
        <div className="flex flex-wrap gap-4">
          <button 
            onClick={() => smoothScrollTo('contact')}
            className="px-6 py-3 bg-primary dark:bg-secondary text-white rounded-md shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1"
          >
            Get in Touch
          </button>
          <button 
            onClick={() => smoothScrollTo('projects')}
            className="px-6 py-3 border-2 border-primary dark:border-secondary text-primary dark:text-secondary rounded-md hover:bg-primary/10 dark:hover:bg-secondary/10 transition-all transform hover:-translate-y-1"
          >
            View Projects
          </button>
        </div>
        <div className="flex mt-8 space-x-4">
          <a 
            href="https://linkedin.com/in/ankit-kumar-a20478230" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-secondary transition-colors"
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin text-2xl"></i>
          </a>
          <a 
            href="https://github.com/Kumar22Ankit" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-secondary transition-colors"
            aria-label="GitHub"
          >
            <i className="fab fa-github text-2xl"></i>
          </a>
          <a 
            href="mailto:Ankitkumar6034651@gmail.com" 
            className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-secondary transition-colors"
            aria-label="Email"
          >
            <i className="fas fa-envelope text-2xl"></i>
          </a>
          <a 
            href="tel:8882092012" 
            className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-secondary transition-colors"
            aria-label="Phone"
          >
            <i className="fas fa-phone text-2xl"></i>
          </a>
        </div>
      </div>
      <div className="md:w-1/2 flex justify-center">
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary blur-md opacity-75 rounded-full"></div>
          <div className="relative rounded-lg shadow-2xl w-full max-w-md overflow-hidden">
            <svg 
              viewBox="0 0 500 500" 
              className="w-full h-full object-cover"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: 'hsl(214, 100%, 48%)', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: 'hsl(226, 70%, 60%)', stopOpacity: 1 }} />
                </linearGradient>
              </defs>
              <circle cx="250" cy="250" r="200" fill="url(#grad1)" />
              <text x="250" y="280" fontSize="100" fontWeight="bold" textAnchor="middle" fill="white">AK</text>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
