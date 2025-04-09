export interface SocialLinks {
  linkedin: string;
  github: string;
  medium: string;
  email: string;
  phone: string;
  location: string;
}

export interface SkillCategory {
  name: string;
  icon: string;
  items: Skill[];
}

export interface Skill {
  name: string;
  level: number;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  achievements: string[];
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  details: string[];
}

export type ProjectCategory = "kubernetes" | "terraform" | "aws" | "ci-cd";

export interface Project {
  title: string;
  description: string;
  categories: ProjectCategory[];
  technologies: string[];
  completed: string;
  github?: string;
  live?: string;
  bgColor?: string;
}

export interface Certification {
  title: string;
  issuer: string;
  year: string;
  description: string;
  icon: string;
  url?: string;
}

export interface Article {
  title: string;
  category: string;
  date: string;
  description: string;
  url?: string;
  bgColor?: string;
}

export interface Involvement {
  organization: string;
  role: string;
  period: string;
  responsibilities: string[];
  icon: string;
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}
