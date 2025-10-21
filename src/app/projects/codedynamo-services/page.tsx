import { projectsData } from '../../data/Codedynamo-Project';
import InformationDisplayClient from '../../components/Projects/CodedynamoProject/CodeDynamo';

interface ProjectPageProps {
  params: { slug: string };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projectsData.find((p) => p.slug === params.slug);

  if (!project) {
    return (
      <div className="flex min-h-screen items-center justify-center text-2xl text-white">
        Comming Soon...
      </div>
    );
  }

  return <InformationDisplayClient data={project} />;
}
