import { useEffect, useState, useRef } from 'react';

interface UseScrollAnimationOptions {
  threshold?: number;
  once?: boolean;
}

export function useScrollAnimation(
  options: UseScrollAnimationOptions = {}
) {
  const { threshold = 0.1, once = true } = options;
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentElement = elementRef.current;
    
    if (!currentElement) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          
          // If once is true, unobserve after it becomes visible
          if (once && currentElement) {
            observer.unobserve(currentElement);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold }
    );

    observer.observe(currentElement);

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [threshold, once]);

  return { elementRef, isVisible };
}

export default useScrollAnimation;
