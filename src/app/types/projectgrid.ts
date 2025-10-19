// src/types/projectgrid.ts
export interface Project {
  title: string;
  description: string;
  image: string;
  detailsPage?: string;
  liveDemo?: string;
}

export interface ProjectsGridProps {
  projects: Project[];
}
