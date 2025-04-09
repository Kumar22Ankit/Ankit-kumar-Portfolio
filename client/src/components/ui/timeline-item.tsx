import React from 'react';

interface TimelineItemProps {
  title: string;
  organization: string;
  period: string;
  icon: string;
  details?: string[];
  isLast?: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ 
  title, 
  organization, 
  period, 
  icon, 
  details = [], 
  isLast = false 
}) => {
  return (
    <div className={`timeline-item relative pl-10 ${isLast ? '' : 'mb-8'}`}>
      <div className="absolute top-1 left-0 w-8 h-8 bg-primary dark:bg-secondary rounded-full flex items-center justify-center">
        <i className={`${icon} text-white`}></i>
      </div>
      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
        <h4 className="text-lg font-semibold">{title}</h4>
        <p className="text-primary dark:text-secondary font-medium">{organization}</p>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">{period}</p>
        
        {details.length > 0 && (
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1 text-sm">
            {details.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default TimelineItem;
