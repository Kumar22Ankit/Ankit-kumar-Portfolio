import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface CardHoverProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export function CardHover({ children, className, onClick }: CardHoverProps) {
  return (
    <div 
      className={cn(
        "bg-white dark:bg-secondary rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:transform hover:translate-y-[-5px] hover:shadow-lg",
        className
      )}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
