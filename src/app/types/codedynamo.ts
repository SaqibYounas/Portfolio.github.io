export type ProjectData = {
  slug: string;
  title: string;
  commingsoon: string;
  introduction: string;
  problemStatement: string;
  objectives: string[];
  clientScope: string[];
  adminScope: string[];
  carouselImages: string[];
};

export interface SectionProps {
  title: string;
  text: string;
  delay: number;
}

export interface ListSectionProps {
  title: string;
  items: string[];
  delay: number;
}

export type ProjectsDataArray = ProjectData[];
