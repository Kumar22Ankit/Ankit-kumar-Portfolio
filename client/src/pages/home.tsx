import { useEffect } from "react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Experience } from "@/components/sections/experience";
import { Projects } from "@/components/sections/projects";
import { Certifications } from "@/components/sections/certifications";
import { Articles } from "@/components/sections/articles";
import { Involvement } from "@/components/sections/involvement";
import { Contact } from "@/components/sections/contact";
import { BackToTop } from "@/components/ui/back-to-top";
import { useTheme } from "@/hooks/use-theme";

export default function Home() {
  const { theme } = useTheme();

  // Set meta tags and document class based on theme
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    
    // Set meta theme color based on theme
    let metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (!metaThemeColor) {
      metaThemeColor = document.createElement('meta');
      metaThemeColor.setAttribute('name', 'theme-color');
      document.head.appendChild(metaThemeColor);
    }
    
    metaThemeColor.setAttribute(
      'content',
      theme === 'dark' ? '#0f172a' : '#ffffff'
    );
    
    return () => {
      // Clean up - though this component shouldn't unmount in a single page app
    };
  }, [theme]);

  return (
    <div className="bg-gray-50 dark:bg-secondary-dark text-gray-800 dark:text-gray-200 transition-colors duration-300">
      <Header />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Articles />
        <Involvement />
        <Contact />
      </main>
      
      <Footer />
      <BackToTop />
    </div>
  );
}
