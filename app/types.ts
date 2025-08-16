export interface ContactInfo {
    email: string;
    phone?: string;
    location: string;
    website?: string;
    linkedin?: string;
    github?: string;
    twitter?: string;
}

export interface Experience {
    position: string;
    company: string;
    location: string;
    startDate: string;
    endDate: string | 'Present';
    description: string;
    achievements?: string[];
    technologies?: string[];
}

export interface Education {
    degree: string;
    institution: string;
    location: string;
    startDate: string;
    endDate: string;
    gpa?: string;
    honors?: string;
    relevantCourses?: string[];
}

export interface Project {
    name: string;
    description: string;
    technologies: string[];
    link?: string;
    github?: string;
    highlights?: string[];
    startDate?: string;
    endDate?: string;
}

export interface Skill {
    category: string;
    items: string[];
}

export interface Certification {
    name: string;
    issuer: string;
    date: string;
    link?: string;
}

export interface Language {
    language: string;
    proficiency: string;
}

export interface ResumeConfig {
    personalInfo: {
        name: string;
        title: string;
        summary: string;
        contact: ContactInfo;
        avatar?: string;
    };
    experience: Experience[];
    education: Education[];
    projects: Project[];
    skills: Skill[];
    languages?: Language[];
    certifications?: Certification[];
}