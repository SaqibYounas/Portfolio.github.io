import { InformationDisplayClient } from '../../components/Projects/Information-page/information-page';
import { informationProjects } from '../../data/informationpage';

export default function InformationDisplayPage() {
  const projectData = informationProjects[0];
  return <InformationDisplayClient data={projectData} />;
}
