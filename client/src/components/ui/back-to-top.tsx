import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

interface BackToTopProps {
  className?: string;
}

export function BackToTop({ className }: BackToTopProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.pageYOffset > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={cn(
        "fixed bottom-6 right-6 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:bg-primary-dark z-50",
        visible ? "opacity-100 visible" : "opacity-0 invisible",
        className
      )}
      aria-label="Back to top"
    >
      <i className="fas fa-arrow-up"></i>
    </button>
  );
}
