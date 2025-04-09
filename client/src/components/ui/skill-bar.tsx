import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

interface SkillBarProps {
  name: string;
  percentage: number;
  className?: string;
}

export function SkillBar({ name, percentage, className }: SkillBarProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [displayPercentage, setDisplayPercentage] = useState(0);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (barRef.current) {
      observer.observe(barRef.current);
    }

    return () => {
      if (barRef.current) {
        observer.unobserve(barRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setDisplayPercentage(prev => {
          const next = prev + 1;
          return next > percentage ? percentage : next;
        });
      }, 20);

      return () => clearInterval(interval);
    }
  }, [isVisible, percentage]);

  return (
    <div className={cn("w-full", className)} ref={barRef}>
      <div className="flex justify-between mb-1">
        <span className="text-gray-700 dark:text-gray-300">{name}</span>
        <span className="text-gray-600 dark:text-gray-400">{displayPercentage}%</span>
      </div>
      <div className="skill-bar h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <div 
          className="h-full bg-primary rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${isVisible ? percentage : 0}%` }}
        ></div>
      </div>
    </div>
  );
}
