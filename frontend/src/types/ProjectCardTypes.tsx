type TProjectCard = {
  _id?: string;
  projectName: string;
  projectLink: string;
  projectLogo: string;
  projectDescription: string;
  projectGithub: string;
  projectLevel?: "master" | "epic" | "legend";
};

export type { TProjectCard };
