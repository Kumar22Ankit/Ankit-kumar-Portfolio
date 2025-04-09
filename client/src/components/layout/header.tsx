import { useState, useEffect } from "react";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { cn } from "@/lib/utils";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Close mobile menu when a link is clicked
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  // Handle scroll events to set active link and navbar styling
  useEffect(() => {
    const handleScroll = () => {
      // Update navbar style based on scroll position
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }

      // Update active section based on scroll position
      const sections = document.querySelectorAll('section[id]');
      let currentActiveSection = activeSection;

      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop - 100;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const id = section.getAttribute('id') || '';

        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          currentActiveSection = id;
        }
      });

      if (currentActiveSection !== activeSection) {
        setActiveSection(currentActiveSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled, activeSection]);

  // Navigation links 
  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#certifications", label: "Certifications" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="relative">
      <nav className={cn(
        "fixed top-0 left-0 right-0 bg-white dark:bg-secondary-dark z-50 transition-all duration-300",
        scrolled ? "shadow-md py-3" : "py-5"
      )}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <a href="#home" className="text-2xl font-bold text-primary dark:text-primary-light font-mono">
              <span className="text-accent">{'{'}</span> Ankit.Kumar <span className="text-accent">{'}'}</span>
            </a>
            
            {/* Theme Toggle */}
            <div className="flex items-center gap-4">
              <ThemeToggle />
              
              {/* Mobile Menu Button */}
              <button 
                className="md:hidden text-gray-700 dark:text-gray-300 focus:outline-none"
                onClick={toggleMobileMenu}
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              >
                <i className={cn("fas", mobileMenuOpen ? "fa-times" : "fa-bars", "text-xl")}></i>
              </button>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map(link => (
                <a 
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "nav-link font-medium transition-colors",
                    activeSection === link.href.slice(1)
                      ? "text-primary dark:text-primary-light"
                      : "text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light"
                  )}
                  onClick={closeMobileMenu}
                >
                  {link.label}
                </a>
              ))}
              <a 
                href="#contact" 
                className="btn-primary px-5 py-2 bg-primary hover:bg-primary-dark text-white rounded-md transition-colors relative overflow-hidden"
                onClick={closeMobileMenu}
              >
                <span className="relative z-10">Contact</span>
              </a>
            </div>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        <div className={cn(
          "md:hidden bg-white dark:bg-secondary-dark shadow-md transition-all duration-300 overflow-hidden",
          mobileMenuOpen ? "max-h-96" : "max-h-0"
        )}>
          <div className="container mx-auto px-4 py-3 flex flex-col space-y-3">
            {navLinks.map(link => (
              <a 
                key={link.href}
                href={link.href} 
                className={cn(
                  "py-2 font-medium transition-colors",
                  activeSection === link.href.slice(1)
                    ? "text-primary dark:text-primary-light"
                    : "text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light"
                )}
                onClick={closeMobileMenu}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
