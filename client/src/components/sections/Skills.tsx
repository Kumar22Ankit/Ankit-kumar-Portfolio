import React from 'react';
import SkillBar from '@/components/ui/skill-bar';

const Skills: React.FC = () => {
  return (
    <section 
      id="skills" 
      className="py-16"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center font-sans">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary dark:from-secondary dark:to-primary">
            Technical Skills
          </span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Cloud Skills */}
          <div className="skill-category p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow" data-aos="fade-up" data-aos-delay="100">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <i className="fas fa-cloud mr-2 text-primary dark:text-secondary"></i>
              Cloud Platforms
            </h3>
            <div className="space-y-4">
              <SkillBar name="AWS" percentage={90} />
              <SkillBar name="Google Cloud" percentage={85} />
              <SkillBar name="OpenStack" percentage={70} />
            </div>
          </div>

          {/* Infrastructure as Code */}
          <div className="skill-category p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow" data-aos="fade-up" data-aos-delay="200">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <i className="fas fa-code-branch mr-2 text-primary dark:text-secondary"></i>
              Infrastructure as Code
            </h3>
            <div className="space-y-4">
              <SkillBar name="Terraform" percentage={85} />
              <SkillBar name="Ansible" percentage={80} />
            </div>
          </div>

          {/* Containerization */}
          <div className="skill-category p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow" data-aos="fade-up" data-aos-delay="300">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <i className="fab fa-docker mr-2 text-primary dark:text-secondary"></i>
              Containerization
            </h3>
            <div className="space-y-4">
              <SkillBar name="Docker" percentage={95} />
              <SkillBar name="Kubernetes" percentage={85} />
            </div>
          </div>

          {/* CI/CD */}
          <div className="skill-category p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow" data-aos="fade-up" data-aos-delay="400">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <i className="fas fa-sync-alt mr-2 text-primary dark:text-secondary"></i>
              CI/CD & Monitoring
            </h3>
            <div className="space-y-4">
              <SkillBar name="GitHub Actions" percentage={90} />
              <SkillBar name="ArgoCD" percentage={80} />
              <SkillBar name="Prometheus & Grafana" percentage={75} />
            </div>
          </div>
        </div>

        {/* Languages and OS */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4" data-aos="fade-up" data-aos-delay="500">
          <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="text-4xl mb-2 text-primary dark:text-secondary"><i className="fab fa-python"></i></div>
            <p className="font-medium">Python</p>
          </div>
          <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="text-4xl mb-2 text-primary dark:text-secondary"><i className="fas fa-terminal"></i></div>
            <p className="font-medium">Bash</p>
          </div>
          <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="text-4xl mb-2 text-primary dark:text-secondary"><i className="fab fa-linux"></i></div>
            <p className="font-medium">Linux</p>
          </div>
          <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="text-4xl mb-2 text-primary dark:text-secondary"><i className="fab fa-git-alt"></i></div>
            <p className="font-medium">Git</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
