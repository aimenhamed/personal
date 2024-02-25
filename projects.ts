export type Project = {
  id: number;
  title: string;
  description: string;
  link: string;
};

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Unilectives",
    description: "A webapp to review all courses at UNSW.",
    link: "https://unilectives.devsoc.app/",
  },
  {
    id: 2,
    title: "WatchTime",
    description:
      "A centralised movie library to search any movie and see it's ratings and overview.",
    link: "https://watchtime-chi.vercel.app/",
  },
  {
    id: 3,
    title: "reqme",
    description:
      "A tool used to test your APIs locally using a simple interface.",
    link: "https://www.npmjs.com/package/reqme",
  },
  {
    id: 4,
    title: "SquashJS",
    description:
      "Squash is a typescript library for building backend services.",
    link: "https://www.npmjs.com/package/squashjs",
  },
  {
    id: 5,
    title: "lss",
    description: "Custom pretty print list currently CLI tool.",
    link: "https://github.com/aimenhamed/lss",
  },
];
