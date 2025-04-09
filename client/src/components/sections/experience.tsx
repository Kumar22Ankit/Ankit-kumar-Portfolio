import { SectionHeading } from "@/components/ui/section-heading";
import { TimelineItem } from "@/components/ui/timeline-item";
import { experience, education } from "@/data/resume-data";

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-secondary relative">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Experience & Education" 
          description="My professional journey and educational background in the field of DevOps and cloud computing."
        />
        
        <div className="relative timeline-container pb-10">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary -ml-px"></div>
          
          {/* Mobile timeline line */}
          <div className="md:hidden absolute left-[30px] top-0 bottom-0 w-0.5 bg-primary"></div>
          
          {/* Experience Items */}
          {experience.map((item, index) => (
            <TimelineItem
              key={index}
              title={item.role}
              organization={item.company}
              period={item.period}
              description={item.achievements}
              isLeft={index % 2 === 0}
            />
          ))}
          
          {/* Education Items */}
          {education.map((item, index) => (
            <TimelineItem
              key={`edu-${index}`}
              title={item.degree}
              organization={item.institution}
              period={item.period}
              description={item.details}
              isLeft={(experience.length + index) % 2 === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
