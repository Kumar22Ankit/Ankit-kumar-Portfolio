import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <span className="text-primary dark:text-secondary text-3xl font-bold font-mono">&lt;AK/&gt;</span>
            <p className="ml-2">© {new Date().getFullYear()} Ankit Kumar. All rights reserved.</p>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="https://linkedin.com/in/ankit-kumar-a20478230" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-primary dark:hover:text-secondary transition-colors"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin text-xl"></i>
            </a>
            <a 
              href="https://github.com/Kumar22Ankit" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-primary dark:hover:text-secondary transition-colors"
              aria-label="GitHub"
            >
              <i className="fab fa-github text-xl"></i>
            </a>
            <a 
              href="mailto:Ankitkumar6034651@gmail.com" 
              className="hover:text-primary dark:hover:text-secondary transition-colors"
              aria-label="Email"
            >
              <i className="fas fa-envelope text-xl"></i>
            </a>
            <a 
              href="https://medium.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-primary dark:hover:text-secondary transition-colors"
              aria-label="Medium"
            >
              <i className="fab fa-medium text-xl"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
