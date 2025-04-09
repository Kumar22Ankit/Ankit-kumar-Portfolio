import { cn } from "@/lib/utils";
import { AnimatedText } from "./animated-text";

interface TerminalProps {
  className?: string;
  children?: React.ReactNode;
  commandLines?: string[];
  commandDelay?: number;
  showPrompt?: boolean;
}

export function Terminal({
  className,
  children,
  commandLines = [],
  commandDelay = 500,
  showPrompt = true
}: TerminalProps) {
  return (
    <div className={cn("terminal bg-secondary-dark rounded-lg relative pt-10", className)}>
      <div className="absolute top-0 left-0 w-full h-8 bg-secondary flex items-center px-4 rounded-t-lg">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
      </div>
      
      <div className="p-4 font-mono text-sm text-green-400">
        {commandLines.map((line, index) => (
          <div key={index} className="mb-1">
            {showPrompt && <span className="text-blue-400 mr-2">$</span>}
            <AnimatedText 
              text={line}
              delay={index * commandDelay}
              speed={30}
            />
          </div>
        ))}
        {children}
      </div>
    </div>
  );
}
