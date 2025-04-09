import React from 'react';

interface ArticleCardProps {
  title: string;
  category: string;
  description: string;
  delay?: number;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ 
  title, 
  category, 
  description,
  delay = 0
}) => {
  return (
    <div 
      className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all group"
    >
      <div className="h-48 bg-gray-200 dark:bg-gray-700 overflow-hidden flex items-center justify-center">
        <svg 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="1.5" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="w-16 h-16 text-gray-400 dark:text-gray-500"
        >
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
        </svg>
      </div>
      <div className="p-6">
        <span className="text-xs font-medium text-primary dark:text-secondary">{category.toUpperCase()}</span>
        <h3 className="text-lg font-semibold mt-2 mb-2 group-hover:text-primary dark:group-hover:text-secondary transition-colors">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{description}</p>
        <a href="#" className="text-primary dark:text-secondary hover:underline text-sm flex items-center">
          Read Article <i className="fas fa-arrow-right ml-1"></i>
        </a>
      </div>
    </div>
  );
};

export default ArticleCard;
