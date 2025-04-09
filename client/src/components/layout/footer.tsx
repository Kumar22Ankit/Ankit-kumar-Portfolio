import { SocialIcon } from "@/components/ui/social-icon";
import { cn } from "@/lib/utils";
import { socialLinks } from "@/lib/constants";

interface FooterProps {
  className?: string;
}

export function Footer({ className }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={cn("bg-secondary dark:bg-secondary-dark text-white py-8", className)}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="text-2xl font-bold text-white font-mono">
              <span className="text-accent">{'{'}</span> Ankit.Kumar <span className="text-accent">{'}'}</span>
            </a>
            <p className="text-gray-400 mt-2">DevOps & Cloud Engineering Professional</p>
          </div>
          
          <div className="flex space-x-6">
            <SocialIcon icon="fa-linkedin-in" href={socialLinks.linkedin} label="LinkedIn" />
            <SocialIcon icon="fa-github" href={socialLinks.github} label="GitHub" />
            <SocialIcon icon="fa-medium-m" href={socialLinks.medium} label="Medium" />
            <a href={`mailto:${socialLinks.email}`} className="text-gray-400 hover:text-white transition-colors text-xl">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">&copy; {currentYear} Ankit Kumar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
