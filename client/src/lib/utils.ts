import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(dateString: string): string {
  const options: Intl.DateTimeFormatOptions = { 
    year: 'numeric', 
    month: 'long'
  };
  
  return new Date(dateString).toLocaleDateString('en-US', options);
}

export function smoothScrollTo(elementId: string): void {
  const element = document.getElementById(elementId);
  if (element) {
    const headerOffset = 80;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - headerOffset;
    
    console.log(`Scrolling to ${elementId} at position ${offsetPosition}`);
    
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  } else {
    console.error(`Element with id "${elementId}" not found`);
  }
}

export function handleDownloadResume(): void {
  // Get path to PDF
  const resumePath = "/Ankit-Resume.pdf";
  
  // Create an anchor element
  const link = document.createElement('a');
  link.href = resumePath;
  link.download = "Ankit-Resume.pdf";
  
  // Append to body, click and remove
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
