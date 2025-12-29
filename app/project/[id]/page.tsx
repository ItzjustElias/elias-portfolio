import ProjectContent from "./ProjectContent";

// Dit zorgt ervoor dat GitHub Pages weet welke pagina's hij moet bouwen
export async function generateStaticParams() {
  // Voeg hier alle projectnamen toe die je in je PROJECT_DATA hebt
  const projects = ["zero"]; 

  return projects.map((id) => ({
    id: id,
  }));
}

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  
  return <ProjectContent id={id} />;
}