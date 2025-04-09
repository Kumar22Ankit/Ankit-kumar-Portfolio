import { cn } from "@/lib/utils";

export interface TimelineItemProps {
  title: string;
  organization: string;
  period: string;
  description: string[];
  isLeft?: boolean;
  className?: string;
}

export function TimelineItem({ 
  title, 
  organization, 
  period, 
  description, 
  isLeft = true,
  className
}: TimelineItemProps) {
  return (
    <div className={cn("relative mb-16 md:mb-24", className)} data-aos="fade-up">
      {/* Timeline point */}
      <div className="absolute w-4 h-4 bg-primary rounded-full left-[30px] md:left-1/2 top-6 transform md:translate-x-[-50%] z-10"></div>
      
      <div className="flex flex-col md:flex-row items-start">
        {/* Content for left side (or mobile top) */}
        <div className={cn(
          "md:w-5/12 pl-12 md:pl-0 md:pr-8 order-2 md:order-1",
          isLeft ? "md:text-right" : "md:order-3 md:pl-8 md:pr-0"
        )}>
          {isLeft ? (
            <div className="bg-gray-50 dark:bg-secondary-light rounded-lg shadow-md p-6 mb-6 md:mb-0 card-hover-effect">
              <h3 className="text-xl font-bold text-primary dark:text-primary-light">{organization}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">{period}</p>
              <p className="text-gray-700 dark:text-gray-300">{title}</p>
            </div>
          ) : (
            <ul className="list-disc text-gray-700 dark:text-gray-300 space-y-2 pl-5 md:pl-0 md:pr-5 text-left md:text-right">
              {description.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          )}
        </div>
        
        {/* Spacer for the line */}
        <div className="hidden md:block md:w-2/12 order-2"></div>
        
        {/* Content for right side (or mobile bottom) */}
        <div className={cn(
          "md:w-5/12 pl-12 md:pl-8 order-3 md:order-3",
          !isLeft ? "md:order-1 md:pl-0 md:pr-8 md:text-right" : ""
        )}>
          {!isLeft ? (
            <div className="bg-gray-50 dark:bg-secondary-light rounded-lg shadow-md p-6 mb-6 md:mb-0 card-hover-effect">
              <h3 className="text-xl font-bold text-primary dark:text-primary-light">{organization}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">{period}</p>
              <p className="text-gray-700 dark:text-gray-300">{title}</p>
            </div>
          ) : (
            <ul className="list-disc text-gray-700 dark:text-gray-300 space-y-2 pl-5">
              {description.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
