import ProjectContent from "./ProjectContent";

export async function generateStaticParams() {
  const projects = ["zero", "theone"]; 

  return projects.map((id) => ({
    id: id,
  }));
}

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  
  return <ProjectContent id={id} />;
}