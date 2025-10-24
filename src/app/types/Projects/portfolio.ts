export interface PortfolioData {
  codedynamo: string;
  title: string;
  commingsoon: string;
  introduction: string;
  problemStatement: string;
  objectives: string[];
  features: string[];
  versionControl: {
    currentVersion: string;
    futureUpdates: string[];
  };
  techStack: string[];
  carouselImages: string[];
}
