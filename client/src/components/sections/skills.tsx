import { SectionHeading } from "@/components/ui/section-heading";
import { SkillBar } from "@/components/ui/skill-bar";
import { CardHover } from "@/components/ui/card-hover";
import { skills } from "@/data/resume-data";

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-secondary-dark">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Technical Skills" 
          description="My technical toolkit is designed for building robust, scalable, and automated cloud infrastructure."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {skills.map((category, index) => (
            <CardHover key={index} className="p-6" data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mr-4">
                  <i className={`${category.icon} text-primary text-2xl`}></i>
                </div>
                <h3 className="text-xl font-bold text-secondary dark:text-white">{category.name}</h3>
              </div>
              
              <div className="space-y-4">
                {category.items.map((skill, idx) => (
                  <SkillBar 
                    key={idx}
                    name={skill.name} 
                    percentage={skill.level} 
                  />
                ))}
              </div>
            </CardHover>
          ))}
        </div>
      </div>
    </section>
  );
}
