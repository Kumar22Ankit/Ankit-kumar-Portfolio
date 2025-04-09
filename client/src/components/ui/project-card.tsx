import React from 'react';

interface ProjectCardProps {
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  category: string;
  imageUrl?: string;
  github?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  subtitle,
  description,
  tags,
  category
}) => {
  // Generate consistent tag colors based on the tag name
  const getTagColor = (tag: string) => {
    const colors = [
      'blue', 'purple', 'green', 'orange', 'red', 'indigo', 'yellow'
    ];
    
    // Simple hash function to determine color based on tag name
    const hashCode = tag.split('').reduce((acc, char) => {
      return char.charCodeAt(0) + ((acc << 5) - acc);
    }, 0);
    
    return colors[Math.abs(hashCode) % colors.length];
  };
  
  // Get background color classes for tag
  const getTagColorClasses = (tag: string) => {
    const color = getTagColor(tag);
    return {
      bgClass: `bg-${color}-100 dark:bg-${color}-900/30`,
      textClass: `text-${color}-800 dark:text-${color}-300`
    };
  };

  return (
    <div className="project-card group" data-category={category}>
      <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col transform hover:-translate-y-2">
        <div className="relative h-56 overflow-hidden">
          <div className="w-full h-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-24 w-24 text-gray-400 dark:text-gray-500"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
              <line x1="8" y1="21" x2="16" y2="21"></line>
              <line x1="12" y1="17" x2="12" y2="21"></line>
            </svg>
          </div>
          <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black/80 to-transparent w-full p-4">
            <h3 className="text-white text-xl font-bold">{title}</h3>
            <p className="text-gray-300 text-sm">{subtitle}</p>
          </div>
        </div>
        <div className="p-6 flex-grow">
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            {description}
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, index) => {
              const { bgClass, textClass } = getTagColorClasses(tag);
              return (
                <span
                  key={index}
                  className={`px-2 py-1 ${bgClass} ${textClass} rounded text-xs`}
                >
                  {tag}
                </span>
              );
            })}
          </div>
        </div>
        <div className="px-6 pb-6 mt-auto">
          {github && (
            <a 
              href={github}
              target="_blank"
              rel="noopener noreferrer" 
              className="text-primary dark:text-secondary hover:underline font-medium flex items-center"
            >
              View on GitHub <i className="fab fa-github ml-2"></i>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
