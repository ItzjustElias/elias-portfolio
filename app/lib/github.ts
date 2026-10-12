export type YearCount = { year: number; count: number };

/**
 * Public, non-fork repositories created per year. Runs at build time.
 * Returns null on any failure so the section is left out instead of showing made-up numbers.
 */
export async function repoYears(): Promise<YearCount[] | null> {
  try {
    const token = process.env.GITHUB_TOKEN;
    const res = await fetch(
      "https://api.github.com/users/ItzjustElias/repos?per_page=100&type=owner",
      {
        headers: {
          Accept: "application/vnd.github+json",
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
      },
    );
    if (!res.ok) return null;
    const repos = (await res.json()) as { created_at: string; fork: boolean }[];
    const years = repos
      .filter((r) => !r.fork)
      .map((r) => new Date(r.created_at).getUTCFullYear());
    if (years.length === 0) return null;
    const first = Math.min(...years);
    const last = new Date().getUTCFullYear();
    return Array.from({ length: last - first + 1 }, (_, i) => ({
      year: first + i,
      count: years.filter((y) => y === first + i).length,
    }));
  } catch {
    return null;
  }
}
