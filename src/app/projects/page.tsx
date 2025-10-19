import Header from '../components/Header';
import ProjectsGrid from '../components/Projects/ProjectsGrid';
import { weatherAppData } from '../data/weather';

export default function ProjectsPage() {
  const projects = [
    {
      title: weatherAppData.title,
      description: weatherAppData.shortDescription,
      image: weatherAppData.image,
      detailsPage: '/projects/weather-app',
      liveDemo: weatherAppData.liveDemo,
    },
  ];

  return (
    <div className="flex min-h-screen flex-col items-center bg-gray-900 px-6 py-16 text-white">
      <Header />
      <ProjectsGrid projects={projects} />
    </div>
  );
}
