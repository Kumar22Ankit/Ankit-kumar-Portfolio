import { SectionHeading } from "@/components/ui/section-heading";

export function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-secondary">
      <div className="container mx-auto px-4">
        <SectionHeading title="About Me" />
        
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2" data-aos="fade-right">
            <svg
              width="100%"
              height="auto"
              viewBox="0 0 800 600"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="rounded-lg shadow-lg"
            >
              <rect width="800" height="600" fill="#f1f5f9" />
              <path d="M400 100C250 100 100 200 100 350C100 500 250 550 400 550C550 550 700 500 700 350C700 200 550 100 400 100Z" fill="#dbeafe" />
              <path d="M450 150C350 150 250 200 250 300C250 400 350 450 450 450C550 450 650 400 650 300C650 200 550 150 450 150Z" fill="#93c5fd" />
              <rect x="150" y="200" width="200" height="150" rx="10" fill="#ffffff" />
              <rect x="170" y="220" width="160" height="20" rx="5" fill="#bfdbfe" />
              <rect x="170" y="250" width="100" height="20" rx="5" fill="#bfdbfe" />
              <rect x="170" y="280" width="130" height="20" rx="5" fill="#bfdbfe" />
              <rect x="170" y="310" width="80" height="20" rx="5" fill="#bfdbfe" />
              <rect x="400" y="300" width="250" height="180" rx="10" fill="#ffffff" />
              <rect x="420" y="320" width="210" height="20" rx="5" fill="#bfdbfe" />
              <rect x="420" y="350" width="150" height="20" rx="5" fill="#bfdbfe" />
              <rect x="420" y="380" width="180" height="20" rx="5" fill="#bfdbfe" />
              <rect x="420" y="410" width="130" height="20" rx="5" fill="#bfdbfe" />
              <rect x="420" y="440" width="100" height="20" rx="5" fill="#bfdbfe" />
              <circle cx="400" cy="250" r="80" fill="#2563eb" opacity="0.6" />
              <circle cx="400" cy="250" r="60" fill="#1d4ed8" opacity="0.8" />
              <path d="M380 230L410 250L380 270L380 230Z" fill="#ffffff" />
            </svg>
          </div>
          
          <div className="lg:w-1/2" data-aos="fade-left" data-aos-delay="200">
            <h3 className="text-2xl font-bold text-primary dark:text-primary-light mb-4">DevOps and Cloud Computing Practitioner</h3>
            
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              I'm a passionate DevOps and Cloud Computing professional with strong experience in managing cloud infrastructure, 
              automation, and CI/CD pipelines. My background in Linux administration and containerization has equipped me with 
              the skills to solve complex problems in the cloud and DevOps space.
            </p>
            
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Beyond technical skills, I've demonstrated leadership through roles such as GDSC Lead and founder of Abhiyantrik, 
              a tech community promoting STEM education. I thrive on driving innovation and collaboration in every project I undertake.
            </p>
            
            <p className="text-gray-700 dark:text-gray-300 mb-8">
              As a Medium contributor, I regularly write about cloud computing, DevOps, and emerging technologies to share knowledge 
              and help others grow in the field.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center">
                <i className="fas fa-laptop-code text-primary dark:text-primary-light text-xl mr-2"></i>
                <span className="text-gray-700 dark:text-gray-300">DevOps Engineer</span>
              </div>
              
              <div className="flex items-center">
                <i className="fas fa-cloud text-primary dark:text-primary-light text-xl mr-2"></i>
                <span className="text-gray-700 dark:text-gray-300">Cloud Specialist</span>
              </div>
              
              <div className="flex items-center">
                <i className="fas fa-pen text-primary dark:text-primary-light text-xl mr-2"></i>
                <span className="text-gray-700 dark:text-gray-300">Technical Writer</span>
              </div>
              
              <div className="flex items-center">
                <i className="fas fa-users text-primary dark:text-primary-light text-xl mr-2"></i>
                <span className="text-gray-700 dark:text-gray-300">Community Leader</span>
              </div>
            </div>
            
            <div>
              <a 
                href="/Resume-Ankit-Kumar.pdf" 
                download 
                className="btn-primary inline-flex items-center px-6 py-3 bg-primary hover:bg-primary-dark text-white rounded-md transition-colors relative overflow-hidden"
              >
                <i className="fas fa-download mr-2"></i> 
                <span className="relative z-10">Download Resume</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
