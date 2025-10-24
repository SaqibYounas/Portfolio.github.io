export interface Project {
  title: string;
  description: string;
  image: string;
  detailsPage: string;
  liveDemo?: string;
  comming?: string;
}

export interface ProjectsGridProps {
  projects: Project[];
}
