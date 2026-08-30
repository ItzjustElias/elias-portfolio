import { SketchSeries } from "@/app/components/SketchChart";

type GitHubRepo = {
  created_at: string;
  stargazers_count?: number;
};

export async function getGitHubTimelineGraph(): Promise<{
  xLabels: string[];
  series: SketchSeries[];
}> {
  const username = "ItzjustElias";
  const startYear = 2021;
  const currentYear = new Date().getFullYear();

  const xLabels = Array.from(
    { length: currentYear - startYear + 1 },
    (_, i) => String(startYear + i)
  );

  try {
    const res = await fetch(
      `https://api.github.com/users/${username}/repos?per_page=100`,
      {
        next: {revalidate: 43200},
      }
    );

    if (!res.ok) {
      throw new Error(`GitHub API returned ${res.status}`);
    }

    const repos = (await res.json()) as GitHubRepo[];

    let repoCount = 0;
    let starCount = 0;

    const repoTrend: number[] = [];
    const starTrend: number[] = [];

    for (const yearStr of xLabels) {
      const year = Number(yearStr);

      for (const repo of repos) {
        const repoYear = new Date(repo.created_at).getFullYear();

        if (repoYear === year) {
          repoCount++;
          starCount += repo.stargazers_count ?? 0;
        }
      }

      repoTrend.push(repoCount);
      starTrend.push(starCount);
    }

    const maxStars = Math.max(...starTrend, 1);

    return {
      xLabels,
      series: [
        {
          label: "Stars on Repos Created",
          color: "#2f8f5b",
          points: starTrend.map(
            (value) => Math.round((value / maxStars) * 100)
          ),
        },
      ],
    };
  } catch (error) {
    console.error("Failed to fetch GitHub timeline:", error);

    return {
      xLabels,
      series: [
        {
          label: "Public Repos Growth",
          color: "#3355dd",
          points: xLabels.map((_, i) => {
            const progress = (i + 1) / xLabels.length;
            return Math.round(progress * 100);
          }),
        },
      ],
    };
  }
}