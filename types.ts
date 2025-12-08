export interface Experience {
  company: string;
  role: string;
  location: string;
  period: string;
  points: string[];
}

export interface Project {
  title: string;
  techStack: string[];
  description: string[];
  link?: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Education {
  school: string;
  degree: string;
  period: string;
  gpa: string;
  courses: string[];
}

export interface Message {
  id: string;
  role: 'user' | 'model';
  text: string;
}