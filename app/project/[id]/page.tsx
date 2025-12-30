import ProjectContent from "./ProjectContent";

export async function generateStaticParams() {
  const projects = ["zero", "theone", "minecraft"]; 

  return projects.map((id) => ({
    id: id,
  }));
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  const resolvedParams = await params;

  if (resolvedParams.id === "theone") {
    return { title: "Loeka" };
  }

  const title = resolvedParams.id.charAt(0).toUpperCase() + resolvedParams.id.slice(1);
  
  return {
    title: title,
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  
  return <ProjectContent id={id} />;
}