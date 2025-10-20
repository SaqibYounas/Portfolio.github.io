import InformationDisplayClient from '../../components/Projects/information-page/information-page';
import { informationProjects } from '../../data/informationpage';

export default function InformationDisplayPage() {
  const projectData = informationProjects[0];
  const formattedData = {
    title: projectData.title,
    image: projectData.image,
    liveDemo: projectData.liveDemo ?? '',
    description: [
      { text: 'Tech Stack: React.js, Bootstrap 5' },
      {
        text: 'Focused on clean layout design, reusable component structure, and full responsiveness.',
      },
      { text: 'Used Vite for fast build and optimized performance.' },
    ],
  };

  return <InformationDisplayClient data={formattedData} />;
}
