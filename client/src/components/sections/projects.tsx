import { useState } from "react";
import { SectionHeading } from "@/components/ui/section-heading";
import { CardHover } from "@/components/ui/card-hover";
import { projects } from "@/data/resume-data";
import { cn } from "@/lib/utils";

type ProjectCategory = "all" | "kubernetes" | "terraform" | "aws" | "ci-cd";

export function Projects() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>("all");

  const handleFilterClick = (filter: ProjectCategory) => {
    setActiveFilter(filter);
  };

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.categories.includes(activeFilter));

  const filterButtons: { label: string; value: ProjectCategory; icon: string }[] = [
    { label: "All", value: "all", icon: "fa-th-large" },
    { label: "Kubernetes", value: "kubernetes", icon: "fa-dharmachakra" },
    { label: "Terraform", value: "terraform", icon: "fa-cubes" },
    { label: "AWS", value: "aws", icon: "fa-aws" },
    { label: "CI/CD", value: "ci-cd", icon: "fa-sync-alt" }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-secondary-dark">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Projects" 
          description="A collection of my work showcasing my expertise in DevOps, Cloud Computing, and Infrastructure as Code."
        />
        
        {/* Project Filter Tabs */}
        <div className="flex flex-wrap justify-center mb-10 gap-2" data-aos="fade-up">
          {filterButtons.map((btn) => (
            <button
              key={btn.value}
              className={cn(
                "project-filter-btn px-4 py-2 rounded-md transition-colors flex items-center gap-2",
                activeFilter === btn.value
                  ? "bg-primary text-white"
                  : "bg-white dark:bg-secondary text-gray-700 dark:text-gray-300 hover:bg-primary hover:text-white"
              )}
              onClick={() => handleFilterClick(btn.value)}
            >
              <i className={`fas ${btn.icon}`}></i>
              {btn.label}
            </button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <CardHover key={index} data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="relative">
                <svg
                  width="100%"
                  height="192"
                  viewBox="0 0 600 192"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-48 object-cover"
                >
                  <rect width="600" height="192" fill={project.bgColor || "#1e293b"} />
                  <g opacity="0.5">
                    {project.categories.includes("kubernetes") && (
                      <path d="M300 96C300 114.225 285.225 129 267 129C248.775 129 234 114.225 234 96C234 77.775 248.775 63 267 63C285.225 63 300 77.775 300 96Z" fill="#3970e4" />
                    )}
                    {project.categories.includes("terraform") && (
                      <rect x="334" y="63" width="66" height="66" fill="#7b42bc" />
                    )}
                    {project.categories.includes("aws") && (
                      <path d="M433 96L466 63L499 96L466 129L433 96Z" fill="#ff9900" />
                    )}
                    {project.categories.includes("ci-cd") && (
                      <g>
                        <circle cx="150" cy="96" r="33" fill="#2563eb" />
                        <circle cx="150" cy="96" r="23" fill="#1e293b" />
                      </g>
                    )}
                  </g>
                  <path d="M50 150H550M50 170H350" stroke="#6b7280" strokeWidth="2" opacity="0.3" />
                </svg>
                
                <div className="absolute top-0 right-0 m-4">
                  <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                    {project.categories[0].charAt(0).toUpperCase() + project.categories[0].slice(1)}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-secondary dark:text-white mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span 
                      key={i} 
                      className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-medium px-2.5 py-0.5 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      <i className="fas fa-clock mr-1"></i> {project.completed}
                    </span>
                  </div>
                  
                  <div className="flex space-x-2">
                    {project.github && (
                      <a 
                        href={project.github} 
                        className="text-primary dark:text-primary-light hover:text-primary-dark transition-colors" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        aria-label="View GitHub repository"
                      >
                        <i className="fab fa-github text-lg"></i>
                      </a>
                    )}
                    {project.live && (
                      <a 
                        href={project.live} 
                        className="text-primary dark:text-primary-light hover:text-primary-dark transition-colors" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        aria-label="View live project"
                      >
                        <i className="fas fa-external-link-alt text-lg"></i>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </CardHover>
          ))}
        </div>
      </div>
    </section>
  );
}
