import React from 'react';
import { smoothScrollTo } from '@/lib/utils';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="container mx-auto px-4 py-16 md:py-24 flex items-center justify-center min-h-[80vh]">
      <div className="text-center max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 font-sans">
          <span className="text-primary dark:text-secondary">DevOps Engineer</span>
          <br />& Cloud Specialist
        </h1>
        <p className="text-xl mb-8 text-gray-700 dark:text-gray-300">
          Building reliable infrastructure & automating deployment pipelines
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
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
        <div className="flex justify-center mt-8 space-x-4">
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
        </div>
      </div>
    </section>
  );
};

export default Hero;