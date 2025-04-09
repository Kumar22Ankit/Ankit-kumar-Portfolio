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
            <div className="relative rounded-lg shadow-lg w-full overflow-hidden h-80 bg-gray-200 dark:bg-gray-700 border-4 border-primary dark:border-secondary transform hover:scale-[1.02] transition-all duration-300">
              <div className="w-full h-full">
                <img 
                  src="/profile.jpeg" 
                  alt="Ankit Kumar" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <h3 className="text-lg text-white font-semibold">Ankit Kumar</h3>
                <p className="text-sm text-gray-200">DevOps Engineer</p>
              </div>
            </div>
          </div>
          
          <div className="md:w-3/5">
            <div className="prose dark:prose-invert max-w-none">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                DevOps Engineer | GDG IEC Lead | Technical Writer
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
            <p>Experience: 1+ year in DevOps and Cloud Technologies</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
