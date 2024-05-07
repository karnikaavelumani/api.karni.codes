export function KarniProjects(): KarniProject[] {
  return karniProjects;
}

export interface KarniProject {
  name: string;
  url: string;
  description: string;
  sameAs: string[];
}

export const TOPIC_SHOWCASE = "showcase" as const;

const karniProjects = [
  ...(await getGitHubProjects(TOPIC_SHOWCASE)),
] as const satisfies KarniProject[];

async function getGitHubProjects(topic: string): Promise<KarniProject[]> {
  const response = await fetch(makeGitHubUserReposURL("karnikaavelumani"));
  // deno-lint-ignore no-explicit-any
  return ((await response.json()) as any[])
    .filter((repository) => repository.topics.includes(topic))
    .map((repository) => {
      const project: KarniProject = {
        name: repository.name,
        url: repository.html_url,
        description: repository.description,
        sameAs: [],
      };

      if (repository.homepage) {
        project.sameAs.push(repository.homepage);
      }

      return project;
    });
}

function makeGitHubUserReposURL(username: string): string {
  return `https://api.github.com/users/${username}/repos`;
}
