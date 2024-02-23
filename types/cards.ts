export interface Skill {
  name: string;
  icon: JSX.Element;
}

export interface Project {
  name: string;
  description: string;
  repo: string;
  demo?: string;
  preview: string;
  technologies: Skill[];
}