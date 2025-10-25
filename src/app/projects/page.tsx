import Header from '../components/Navbar/Header';
import ProjectsGrid from '../components/Projects/ProjectsGrid';
import { weatherAppData } from '../data/Projects/weather';
import { informationProjects } from '../data/Projects/informationpage';
import { projectsData } from '../data/Projects/codedynamo-poject';
import { portfolioData } from '../data/Projects/portfolio';

export default function ProjectsPage() {
  const projects = [
    {
      title: weatherAppData.title,
      description: weatherAppData.shortDescription,
      image: weatherAppData.image,
      detailsPage: '/projects/weather-app',
      liveDemo: weatherAppData.liveDemo,
    },
    ...informationProjects.map((proj) => ({
      title: proj.title,
      description: proj.description,
      image: proj.carouselImages?.[0] || '',
      detailsPage: `/projects/${proj.name}`,
      liveDemo: proj.liveDemo,
    })),
    {
      title: projectsData[0].title,
      description: projectsData[0].introduction,
      image: projectsData[0].carouselImages[0],
      detailsPage: `/projects/${projectsData[0].slug}`,
      comming: projectsData[0].commingsoon,
    },
    {
      title: portfolioData.title,
      description: portfolioData.introduction,
      image: portfolioData.carouselImages[0],
      detailsPage: '/projects/portfolio',
      comming: portfolioData.commingsoon,
    },
  ];

  return (
    <div className="flex min-h-screen flex-col items-center bg-gray-900 px-6 py-16 text-white">
      <h1 className="mb-12 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 bg-clip-text text-center text-4xl font-bold text-transparent md:text-5xl">
        My Projects
      </h1>
      <Header />
      <ProjectsGrid projects={projects} />
    </div>
  );
}
