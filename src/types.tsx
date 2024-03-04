export interface MainProject {
  title: string;
  problem: string;
  solution: string;
  participation: string;
  technologies: string;
  impact: string;
  screenshots: string[];
}

export type SocialLink = {
  href: string;
  name: string;
};

export type WorkExperience = {
  name: string;
  startYear: number;
  endYear?: number;
  description: string;
  technologies: string[];
};

export interface SideProject {
  name: string;
  description: string;
  technologies: string[];
  links: SideProjectLink;
}

export interface SideProjectLink {
  source: string;
  preview: string;
}
