import { getGitHubTimelineGraph } from "@/app/lib/gh-chart-data";
import HomeContent from "./HomeContent";

export default async function Page() {
  const { xLabels, series } = await getGitHubTimelineGraph();

  return <HomeContent xLabels={xLabels} series={series} />;
}