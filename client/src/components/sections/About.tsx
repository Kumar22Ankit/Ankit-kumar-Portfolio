import React from 'react';

const About: React.FC = () => {
  return (
    <section 
      id="about" 
      className="py-16 bg-gray-50 dark:bg-gray-800/50"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center font-sans">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary dark:from-secondary dark:to-primary">
            About Me
          </span>
        </h2>
        
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-2/5">
            <div className="rounded-lg shadow-lg w-full overflow-hidden h-80 bg-gray-200 dark:bg-gray-700 p-4">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* DevOps Infinity Loop with Cloud Elements */}
                <g>
                  {/* Upper cloud */}
                  <path 
                    d="M18 8a3 3 0 00-2.55-2.97A5.5 5.5 0 005.5 8.5a4 4 0 001.5 7.7" 
                    stroke="currentColor" 
                    strokeWidth="1.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    className="text-primary dark:text-secondary"
                  />
                  
                  {/* Infinity loop */}
                  <path 
                    d="M7 16.5C8.5 14.5 9.5 14.5 11 16.5C12.5 18.5 13.5 18.5 15 16.5C16.5 14.5 17.5 14.5 19 16.5" 
                    stroke="currentColor" 
                    strokeWidth="1.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    className="text-primary dark:text-secondary"
                  />
                  
                  {/* Code symbol */}
                  <path 
                    d="M9 10l-2 2l2 2M15 10l2 2l-2 2" 
                    stroke="currentColor" 
                    strokeWidth="1.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    className="text-primary dark:text-secondary"
                  />

                  {/* Database */}
                  <ellipse 
                    cx="12" 
                    cy="19" 
                    rx="2" 
                    ry="1" 
                    stroke="currentColor" 
                    strokeWidth="1.5"
                    className="text-primary dark:text-secondary"
                  />
                  <path 
                    d="M10 19v-2c0-.5.9-1 2-1s2 .5 2 1v2" 
                    stroke="currentColor" 
                    strokeWidth="1.5"
                    className="text-primary dark:text-secondary"
                  />

                  {/* Container symbol */}
                  <rect 
                    x="14" 
                    y="5" 
                    width="4" 
                    height="4" 
                    rx="1" 
                    stroke="currentColor" 
                    strokeWidth="1.5"
                    className="text-primary dark:text-secondary"
                  />
                  <rect 
                    x="15" 
                    y="6" 
                    width="2" 
                    height="2" 
                    rx="0.5" 
                    fill="currentColor"
                    className="text-primary dark:text-secondary"
                  />
                </g>
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
        
        <div className="mt-12 bg-gray-900 text-green-400 dark:text-green-400 p-4 rounded-md font-mono text-sm overflow-x-auto mx-auto max-w-3xl shadow-lg">
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
      </div>
    </section>
  );
};

export default About;
