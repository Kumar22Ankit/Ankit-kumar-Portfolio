import { cn } from "@/lib/utils";

interface SocialIconProps {
  icon: string;
  href: string;
  label: string;
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function SocialIcon({ 
  icon, 
  href, 
  label, 
  className,
  size = "md" 
}: SocialIconProps) {
  const sizeClasses = {
    sm: "w-8 h-8 text-sm",
    md: "w-10 h-10 text-base",
    lg: "w-12 h-12 text-xl"
  };
  
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer" 
      className={cn(
        "rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors",
        sizeClasses[size],
        className
      )}
      aria-label={label}
    >
      <i className={cn("fab", icon)}></i>
    </a>
  );
}
