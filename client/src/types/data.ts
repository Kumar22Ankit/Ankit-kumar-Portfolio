import { 
  SkillCategory, 
  Experience, 
  Education, 
  Project, 
  Certification, 
  Article, 
  Involvement 
} from './index';

export interface ResumeData {
  skills: SkillCategory[];
  experience: Experience[];
  education: Education[];
  projects: Project[];
  certifications: Certification[];
  articles: Article[];
  involvement: Involvement[];
}
