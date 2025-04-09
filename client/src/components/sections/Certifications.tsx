import React from 'react';

const CERTIFICATIONS = [
  {
    id: 1,
    title: 'Cloud Computing - Certificate Workshop',
    organization: 'Cloud Counselsage Pvt. Ltd. (2024)',
    description: 'Demonstrated proficiency in cloud infrastructure, services, and best practices with hands-on experience in cloud technologies and architecture.',
    icon: 'fas fa-cloud'
  },
  {
    id: 2,
    title: 'Google Cloud Digital Leader',
    organization: 'Coursera (2023)',
    description: 'Comprehensive understanding of Google Cloud Platform (GCP) services, architecture, and best practices for designing, deploying, and managing cloud solutions.',
    icon: 'fab fa-google'
  },
  {
    id: 3,
    title: 'AWS Cloud Computing Intern',
    organization: 'LinuxWorld Informatics Pvt. Ltd. (2023)',
    description: 'Certified in managing and navigating AWS Cloud Computing for scalable solutions, seamless deployments, and optimal performance.',
    icon: 'fab fa-aws'
  }
];

const Certifications: React.FC = () => {
  return (
    <section 
      id="certifications" 
      className="py-16 bg-gray-50 dark:bg-gray-800/50"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center font-sans">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary dark:from-secondary dark:to-primary">
            Certifications
          </span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CERTIFICATIONS.map((certification, index) => (
            <div 
              key={certification.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1 p-6"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-primary/10 dark:bg-secondary/10 rounded-full mb-4">
                <i className={`${certification.icon} text-2xl text-primary dark:text-secondary`}></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">{certification.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">{certification.organization}</p>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                {certification.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
