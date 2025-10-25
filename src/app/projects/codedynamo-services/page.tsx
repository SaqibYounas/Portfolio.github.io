import { projectsData } from '../../data/Projects/codedynamo-poject';
import RoleBasedProjectClient from '../../components/Projects/CodedynamoProject/CodeDynamo';
interface ProjectPageProps {
  params: { slug: string };
}

export default function RoleBasedProjectPage({ params }: ProjectPageProps) {
  const project = projectsData.find(
    (p: { slug: string }) => p.slug === params.slug
  );

  if (!project) {
    return (
      <div className="flex min-h-screen items-center justify-center text-2xl text-white">
        Coming Soon...
      </div>
    );
  }

  return <RoleBasedProjectClient data={project} />;
}
