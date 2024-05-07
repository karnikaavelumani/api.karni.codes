export function KarniProjects(): KarniProject[] {
  return karniProjects;
}

export interface KarniProject {
  name: string;
  url: string;
  description: string;
  sameAs: string[];
}

const karniProjects = [
  {
    name: "i.karni.codes",
    url: "https://i.karni.codes",
    description: "My personal website",
    sameAs: ["https://github.com/karnikaavelumani/portfolio"],
  },
] as const satisfies KarniProject[];
