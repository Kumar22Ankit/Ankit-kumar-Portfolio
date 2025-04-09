import React, { useState } from 'react';
import ProjectCard from '@/components/ui/project-card';

const PROJECTS = [
  {
    id: 1,
    title: 'PreProdSync',
    subtitle: 'A Kubernetes Solution for DevOps Integration',
    description: 'Developed a Kubernetes-based solution for integrating and testing features in a CI/CD pipeline, enabling streamlined development and deployment processes.',
    tags: ['Kubernetes', 'Docker', 'GitHub Actions', 'ArgoCD'],
    category: 'kubernetes cicd',
    github: 'https://github.com/Kumar22Ankit/PreProdSync-test'
  },
  {
    id: 2,
    title: 'Two-Tier Architecture',
    subtitle: 'AWS Infrastructure with Terraform',
    description: 'Deployed a two-tier architecture on AWS using Terraform to create a modular and scalable infrastructure with VPC, EC2, security groups, and IAM configurations.',
    tags: ['AWS', 'Terraform', 'VPC', 'EC2'],
    category: 'aws'
  },
  {
    id: 3,
    title: 'Portfolio Deployment',
    subtitle: 'CI/CD with GitHub Actions and ArgoCD',
    description: 'Deployed a personal portfolio website using GitHub Actions for CI/CD and ArgoCD for GitOps management, ensuring automatic updates with each commit.',
    tags: ['GitHub Actions', 'ArgoCD', 'AWS S3', 'Web Development'],
    category: 'cicd'
  },
  {
    id: 4,
    title: 'EC2 Timekeeper',
    subtitle: 'Automating Server Instances',
    description: 'Built a serverless solution to automate EC2 instance scheduling based on company working hours, eliminating manual management and optimizing resource utilization.',
    tags: ['AWS', 'EC2', 'Python', 'Lambda'],
    category: 'aws'
  }
];

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
  };

  const filteredProjects = PROJECTS.filter(project => {
    if (activeFilter === 'all') return true;
    return project.category.includes(activeFilter);
  });

  return (
    <section 
      id="projects" 
      className="py-16"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4 text-center font-sans">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary dark:from-secondary dark:to-primary">
            Featured Projects
          </span>
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12">
          Showcasing my expertise in DevOps and cloud technologies
        </p>
        
        {/* Project Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <button 
            className={`px-4 py-2 rounded-md transition-colors ${
              activeFilter === 'all' 
                ? 'bg-primary dark:bg-secondary text-white' 
                : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
            onClick={() => handleFilterChange('all')}
          >
            All
          </button>
          <button 
            className={`px-4 py-2 rounded-md transition-colors ${
              activeFilter === 'kubernetes' 
                ? 'bg-primary dark:bg-secondary text-white' 
                : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
            onClick={() => handleFilterChange('kubernetes')}
          >
            Kubernetes
          </button>
          <button 
            className={`px-4 py-2 rounded-md transition-colors ${
              activeFilter === 'aws' 
                ? 'bg-primary dark:bg-secondary text-white' 
                : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
            onClick={() => handleFilterChange('aws')}
          >
            AWS
          </button>
          <button 
            className={`px-4 py-2 rounded-md transition-colors ${
              activeFilter === 'cicd' 
                ? 'bg-primary dark:bg-secondary text-white' 
                : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
            onClick={() => handleFilterChange('cicd')}
          >
            CI/CD
          </button>
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <div key={project.id}>
              <ProjectCard 
                title={project.title}
                subtitle={project.subtitle}
                description={project.description}
                tags={project.tags}
                category={project.category}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
