import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/use-theme";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <Button 
      variant="outline" 
      size="icon" 
      onClick={toggleTheme}
      className="p-2 rounded-full bg-gray-100 dark:bg-secondary text-primary dark:text-primary-light focus:outline-none"
    >
      {theme === 'dark' ? (
        <i className="fas fa-sun"></i>
      ) : (
        <i className="fas fa-moon"></i>
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
