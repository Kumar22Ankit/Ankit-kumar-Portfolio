import { SectionHeading } from "@/components/ui/section-heading";
import { CardHover } from "@/components/ui/card-hover";
import { certifications } from "@/data/resume-data";

export function Certifications() {
  return (
    <section id="certifications" className="py-20 bg-white dark:bg-secondary">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Certifications" 
          description="Professional credentials that validate my expertise in cloud computing and DevOps."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <CardHover 
              key={index} 
              className="p-6 text-center relative overflow-hidden group"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="absolute top-0 right-0 bg-primary text-white rounded-bl-lg px-3 py-1 text-xs font-bold">
                {cert.year}
              </div>
              
              <div className="mb-6 mt-4">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto">
                  <i className={`${cert.icon} text-primary text-2xl`}></i>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-secondary dark:text-white mb-3">{cert.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">{cert.issuer}</p>
              
              <p className="text-gray-700 dark:text-gray-300 text-sm mb-6">
                {cert.description}
              </p>
              
              {cert.url && (
                <div className="absolute bottom-0 left-0 right-0 bg-gray-100 dark:bg-secondary-dark py-2 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <a href={cert.url} className="text-primary dark:text-primary-light hover:underline text-sm">View Certificate</a>
                </div>
              )}
            </CardHover>
          ))}
        </div>
      </div>
    </section>
  );
}
