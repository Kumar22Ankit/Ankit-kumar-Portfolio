import React, { useState, useEffect } from 'react';

interface SkillBarProps {
  name: string;
  percentage: number;
}

const SkillBar: React.FC<SkillBarProps> = ({ name, percentage }) => {
  const [width, setWidth] = useState(0);
  
  useEffect(() => {
    // Add a small delay to make the animation visible
    const timer = setTimeout(() => {
      setWidth(percentage);
    }, 300);
    
    return () => clearTimeout(timer);
  }, [percentage]);
  
  return (
    <div>
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium">{name}</span>
        <span className="text-sm text-gray-500 dark:text-gray-400">{percentage}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
        <div 
          className="skill-bar bg-primary dark:bg-secondary h-2.5 rounded-full" 
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
};

export default SkillBar;
