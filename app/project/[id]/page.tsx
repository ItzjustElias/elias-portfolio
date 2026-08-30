import ProjectContent from "./ProjectContent";
import { PROJECT_DATA } from "../../lib/data";

export async function generateStaticParams() {
  return Object.keys(PROJECT_DATA).map((id) => ({ id }));
}

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}) {
  const resolvedParams = await params;

  if (resolvedParams.id === "theone") {
    return { title: "Loeka" };
  }

  const project = PROJECT_DATA[resolvedParams.id];
  const title = project
    ? project.title
    : resolvedParams.id.charAt(0).toUpperCase() + resolvedParams.id.slice(1);

  return { title };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return <ProjectContent id={id} />;
}
