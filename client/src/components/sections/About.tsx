import React from 'react';

const About: React.FC = () => {
  return (
    <section 
      id="about" 
      className="py-16 bg-gray-50 dark:bg-gray-800/50"
    >
      <div className="container mx-auto px-4">
        <div className="mb-10 bg-gray-900 text-green-400 dark:text-green-400 p-4 rounded-md font-mono text-sm overflow-x-auto mx-auto max-w-3xl shadow-lg">
          <div className="flex items-center gap-2 mb-2">
            <div className="flex-shrink-0 w-3 h-3 rounded-full bg-red-500"></div>
            <div className="flex-shrink-0 w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="flex-shrink-0 w-3 h-3 rounded-full bg-green-500"></div>
            <span className="text-gray-400">user@kubernetes:~$</span>
          </div>
          <p>kubectl describe profile ankit-kumar</p>
          <div className="mt-2 border-t border-gray-700 pt-2">
            <p>Name: Ankit Kumar</p>
            <p>Role: DevOps Engineer</p>
            <p>Status: <span className="text-green-400">Active</span></p>
            <p>Specialties: [AWS, Kubernetes, Docker, Terraform, CI/CD]</p>
            <p>Experience: 3+ years in DevOps and Cloud Technologies</p>
          </div>
        </div>
        
        <h2 className="text-3xl font-bold mb-12 text-center font-sans">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary dark:from-secondary dark:to-primary">
            About Me
          </span>
        </h2>
        
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-2/5">
            <div className="rounded-lg shadow-lg w-full overflow-hidden h-80 bg-gray-200 dark:bg-gray-700">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="w-full h-full p-12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21 9.5V8.25C21 7.00736 20.0076 6 18.75 6H5.25C3.98736 6 3 7.00736 3 8.25V15.75C3 16.9926 3.98736 18 5.25 18H18.75C20.0076 18 21 16.9926 21 15.75V14.5M12 15H9M12 12H7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16.5 15C16.5 15.4142 16.8358 15.75 17.25 15.75C17.6642 15.75 18 15.4142 18 15C18 14.5858 17.6642 14.25 17.25 14.25C16.8358 14.25 16.5 14.5858 16.5 15Z"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16.5 12C16.5 12.4142 16.8358 12.75 17.25 12.75C17.6642 12.75 18 12.4142 18 12C18 11.5858 17.6642 11.25 17.25 11.25C16.8358 11.25 16.5 11.5858 16.5 12Z"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16.5 9C16.5 9.41421 16.8358 9.75 17.25 9.75C17.6642 9.75 18 9.41421 18 9C18 8.58579 17.6642 8.25 17.25 8.25C16.8358 8.25 16.5 8.58579 16.5 9Z"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          
          <div className="md:w-3/5">
            <div className="prose dark:prose-invert max-w-none">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                DevOps and Cloud Computing Practitioner
              </h3>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                I'm a passionate DevOps Engineer with experience in managing cloud infrastructure, automation, and CI/CD pipelines. 
                My expertise spans across various cloud providers, containerization technologies, and infrastructure as code solutions.
              </p>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                As a strong problem-solver with a background in Linux administration and containerization, I focus on creating efficient, 
                scalable, and reliable systems. My leadership experience as a GDSC Lead and founder of a tech community has sharpened my 
                collaboration and innovation skills.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                I'm constantly exploring new technologies and sharing my knowledge through technical writing on Medium, where I create 
                practical guides and tutorials for both beginners and professionals.
              </p>
            </div>
            
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="px-3 py-1 bg-primary/10 text-primary dark:bg-secondary/10 dark:text-secondary rounded-full text-sm">DevOps</span>
              <span className="px-3 py-1 bg-primary/10 text-primary dark:bg-secondary/10 dark:text-secondary rounded-full text-sm">Cloud Computing</span>
              <span className="px-3 py-1 bg-primary/10 text-primary dark:bg-secondary/10 dark:text-secondary rounded-full text-sm">Infrastructure as Code</span>
              <span className="px-3 py-1 bg-primary/10 text-primary dark:bg-secondary/10 dark:text-secondary rounded-full text-sm">Containerization</span>
              <span className="px-3 py-1 bg-primary/10 text-primary dark:bg-secondary/10 dark:text-secondary rounded-full text-sm">CI/CD</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
