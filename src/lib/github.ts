import type { Project } from "@/data/projects";

type GitHubRepository = {
  stargazers_count?: unknown;
};

function getRepositoryPath(url: string) {
  const match = url.match(/^https:\/\/github\.com\/([^/]+)\/([^/#]+)\/?$/);

  return match ? `${match[1]}/${match[2]}` : null;
}

async function getStarCount(githubUrl: string) {
  const repositoryPath = getRepositoryPath(githubUrl);

  if (!repositoryPath) {
    return undefined;
  }

  try {
    const response = await fetch(`https://api.github.com/repos/${repositoryPath}`, {
      headers: { Accept: "application/vnd.github+json" },
      next: { revalidate: 60 * 60 * 24 },
    });

    if (!response.ok) {
      return undefined;
    }

    const repository = (await response.json()) as GitHubRepository;

    return typeof repository.stargazers_count === "number"
      ? repository.stargazers_count
      : undefined;
  } catch {
    return undefined;
  }
}

export async function getProjectsWithStars(projects: Project[]) {
  return Promise.all(
    projects.map(async (project) => {
      if (!project.github) {
        return project;
      }

      const stars = await getStarCount(project.github);

      return stars === undefined ? project : { ...project, stars };
    }),
  );
}
