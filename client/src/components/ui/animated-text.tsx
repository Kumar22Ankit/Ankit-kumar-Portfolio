import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  speed?: number;
  cursor?: boolean;
}

export function AnimatedText({
  text,
  className,
  delay = 0,
  speed = 50,
  cursor = true
}: AnimatedTextProps) {
  const [displayedText, setDisplayedText] = useState<string>("");
  const [showCursor, setShowCursor] = useState<boolean>(true);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    let cursorInterval: NodeJS.Timeout;
    
    // Delay the animation start if needed
    timeout = setTimeout(() => {
      let currentIndex = 0;
      
      const interval = setInterval(() => {
        if (currentIndex <= text.length) {
          setDisplayedText(text.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(interval);
          
          // Only blink the cursor when animation is complete
          if (cursor) {
            cursorInterval = setInterval(() => {
              setShowCursor(prev => !prev);
            }, 500);
          }
        }
      }, speed);
      
      return () => {
        clearInterval(interval);
      };
    }, delay);
    
    return () => {
      clearTimeout(timeout);
      if (cursorInterval) clearInterval(cursorInterval);
    };
  }, [text, delay, speed, cursor]);

  return (
    <div className={cn("font-mono", className)}>
      {displayedText}
      {cursor && showCursor && <span className="border-r-2 border-current ml-1 animate-blink">&nbsp;</span>}
    </div>
  );
}
