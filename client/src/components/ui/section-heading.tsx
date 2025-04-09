import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  description?: string;
  className?: string;
}

export function SectionHeading({ title, description, className }: SectionHeadingProps) {
  return (
    <div className={cn("text-center mb-12", className)} data-aos="fade-up">
      <h2 className="text-3xl md:text-4xl font-bold text-secondary dark:text-white inline-block relative">
        {title}
        <span className="block h-1 w-24 bg-accent mt-2 mx-auto"></span>
      </h2>
      
      {description && (
        <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );
}
