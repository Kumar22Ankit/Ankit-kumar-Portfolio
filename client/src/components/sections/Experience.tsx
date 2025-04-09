import React from 'react';
import TimelineItem from '@/components/ui/timeline-item';

const Experience: React.FC = () => {
  return (
    <section 
      id="experience" 
      className="py-16 bg-gray-50 dark:bg-gray-800/50"
    >
      <div className="container mx-auto px-4">

        <h2 className="text-3xl font-bold mb-12 text-center font-sans">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary dark:from-secondary dark:to-primary">
            Experience & Education
          </span>
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Professional Experience */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center">
              <i className="fas fa-briefcase mr-2 text-primary dark:text-secondary"></i>
              Professional Experience
            </h3>
            
            <div className="space-y-8">
              <TimelineItem
                title="Cloud Intern"
                organization="Edunet Foundation"
                period="July 2024 – August 2024"
                icon="fas fa-briefcase"
                details={[
                  "Participated in industry training and executed assigned projects remotely with Gift-A-Career Foundation",
                  "Gained hands-on experience in IT and management consulting services",
                  "Adhered to company policies and procedures throughout the internship"
                ]}
              />
              
              <TimelineItem
                title="Cloud Intern"
                organization="Cloud Counselage Pvt. Ltd."
                period="June 2024 – July 2024"
                icon="fas fa-briefcase"
                details={[
                  "Attended industry training sessions and worked on assigned projects",
                  "Gained an overall understanding of cloud computing domain",
                  "Acquired practical experience in IT and management consulting services"
                ]}
              />
              
              <TimelineItem
                title="Cloud Computing Intern"
                organization="LinuxWorld Informatics Pvt. Ltd."
                period="June 2023 – August 2023"
                icon="fas fa-briefcase"
                details={[
                  "Designed and implemented user-friendly cloud infrastructure using AWS, Docker, and Linux",
                  "Learned various AWS services and their industry-level use cases",
                  "Created a food ordering website bot service using AWS LEX, COGNITO, and DynamoDB"
                ]}
                isLast={true}
              />
            </div>
          </div>
          
          {/* Education & Leadership */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center">
              <i className="fas fa-graduation-cap mr-2 text-primary dark:text-secondary"></i>
              Education & Leadership
            </h3>
            
            <div className="space-y-8">
              <TimelineItem
                title="Bachelor of Technology in Computer Science"
                organization="IEC College of Engineering and Technology"
                period="August 2022 – Present"
                icon="fas fa-graduation-cap"
              />
              
              <TimelineItem
                title="Diploma in Production Engineering"
                organization="G.B Pant Institute of Technology"
                period="August 2019 – April 2022"
                icon="fas fa-graduation-cap"
              />
              
              <TimelineItem
                title="GDG on Campus Lead"
                organization="Google Developer Groups (GDG) IEC College"
                period="Sep 2024 – Present"
                icon="fas fa-users"
                details={[
                  "Led IEC College's first GDG chapter, organizing workshops and events",
                  "Organized sessions on cloud computing, AI, and open-source technologies",
                  "Managed a volunteer team for smooth execution and high participation"
                ]}
              />
              
              <TimelineItem
                title="Founder"
                organization="Abhiyantrik"
                period="Jan 2024 – Present"
                icon="fas fa-users"
                details={[
                  "Established a tech community partnering with educational institutions to promote STEM education",
                  "Organized workshops and events to encourage learning and inclusivity in tech",
                  "Led diversity initiatives and mentored students in STEM"
                ]}
                isLast={true}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
