import { SectionHeading } from "@/components/ui/section-heading";
import { CardHover } from "@/components/ui/card-hover";
import { involvement } from "@/data/resume-data";

export function Involvement() {
  return (
    <section className="py-20 bg-white dark:bg-secondary">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Leadership & Involvement" 
          description="My contributions to tech communities and leadership roles."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {involvement.map((item, index) => (
            <CardHover 
              key={index} 
              className="p-6"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mr-4">
                  <i className={`${item.icon} text-primary text-2xl`}></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-secondary dark:text-white">{item.organization}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{item.role} | {item.period}</p>
                </div>
              </div>
              
              <ul className="list-disc text-gray-700 dark:text-gray-300 pl-5 space-y-2">
                {item.responsibilities.map((resp, idx) => (
                  <li key={idx}>{resp}</li>
                ))}
              </ul>
            </CardHover>
          ))}
        </div>
      </div>
    </section>
  );
}
