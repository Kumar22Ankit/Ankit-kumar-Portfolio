import { socialLinks } from "@/lib/constants";
import { Terminal } from "@/components/ui/terminal";

export function Hero() {
  const commandLines = [
    "kubectl get skills",
    "NAME         READY     STATUS",
    "AWS           1/1       Running",
    "Docker        1/1       Running",
    "Kubernetes    1/1       Running",
    "Terraform     1/1       Running",
    "Python        1/1       Running"
  ];

  return (
    <section 
      id="home" 
      className="relative pt-28 md:pt-36 pb-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-secondary-dark dark:to-secondary text-center md:text-left overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0" data-aos="fade-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary dark:text-white mb-4 leading-tight">
            Ankit Kumar
            <span className="block text-primary">DevOps & Cloud Engineer</span>
          </h1>
          
          <Terminal 
            className="mb-6" 
            commandLines={commandLines}
          />
          
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-lg">
            DevOps and Cloud Computing Practitioner with experience in cloud infrastructure, automation, and CI/CD pipelines.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
            <a 
              href="#contact" 
              className="btn-primary px-8 py-3 bg-primary hover:bg-primary-dark text-white rounded-md transition-all transform hover:scale-105 flex items-center justify-center relative overflow-hidden"
            >
              <i className="fas fa-rocket mr-2"></i> 
              <span className="relative z-10">Let's Connect</span>
            </a>
            <a 
              href="#projects" 
              className="px-8 py-3 border-2 border-primary text-primary dark:text-primary-light hover:bg-primary hover:text-white dark:hover:text-white rounded-md transition-all transform hover:scale-105 flex items-center justify-center"
            >
              <i className="fas fa-code-branch mr-2"></i> View Projects
            </a>
          </div>
          
          <div className="mt-10 flex justify-center md:justify-start space-x-6">
            <a href={`mailto:${socialLinks.email}`} className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light text-xl transition-colors">
              <i className="fas fa-envelope"></i>
            </a>
            <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light text-xl transition-colors">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light text-xl transition-colors">
              <i className="fab fa-github"></i>
            </a>
            <a href={socialLinks.medium} target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light text-xl transition-colors">
              <i className="fab fa-medium"></i>
            </a>
          </div>
        </div>
        
        <div className="md:w-1/2 flex justify-center" data-aos="fade-left" data-aos-delay="200">
          <div className="relative">
            <div className="absolute inset-0 bg-primary rounded-full opacity-10 animate-pulse-slow -m-6"></div>
            <svg 
              className="rounded-full w-64 h-64 object-cover border-4 border-white dark:border-secondary shadow-lg z-10 relative"
              width="256" height="256" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="128" cy="128" r="128" fill="#2563eb" opacity="0.1" />
              <path d="M128 216C176.601 216 216 176.601 216 128C216 79.3989 176.601 40 128 40C79.3989 40 40 79.3989 40 128C40 176.601 79.3989 216 128 216Z" fill="#1e293b" />
              <path d="M128 180C155.614 180 178 157.614 178 130C178 102.386 155.614 80 128 80C100.386 80 78 102.386 78 130C78 157.614 100.386 180 128 180Z" fill="#2563eb" />
              <path d="M128 160C144.569 160 158 146.569 158 130C158 113.431 144.569 100 128 100C111.431 100 98 113.431 98 130C98 146.569 111.431 160 128 160Z" fill="#1e293b" />
            </svg>
            
            <div className="absolute -right-10 top-5 bg-white dark:bg-secondary shadow-lg rounded-lg p-3 animate-bounce">
              <i className="fas fa-cloud text-3xl text-accent"></i>
            </div>
            
            <div className="absolute -left-10 bottom-5 bg-white dark:bg-secondary shadow-lg rounded-lg p-3 animate-bounce delay-200">
              <i className="fas fa-code text-3xl text-primary"></i>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 text-center pb-10">
        <a href="#about" className="text-primary dark:text-primary-light animate-bounce block">
          <i className="fas fa-chevron-down"></i>
        </a>
      </div>
    </section>
  );
}
