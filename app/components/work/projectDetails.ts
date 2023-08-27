import {
    SiCplusplus,
    SiFramer,
    SiGithub, SiNeovim,
    SiNextdotjs,
    SiReact,
    SiRust,
    SiTailwindcss,
    SiTypescript,
    SiZig,
    SiNodedotjs,
    SiPrisma,
    SiPostgresql,
    SiExpress
} from "react-icons/si";
import {IconType} from "react-icons";

export type ProjectProps = {
  id: number;
  name: string;
  description: string;
  technologies: IconType[];
  techNames: string[];
  techLinks: string[];
  github: string;
  demo: string;
  image: string;
  available: boolean;
};

export const projects = [
    {
        id: 0,
        name: "OperaFR",
        description:
            "A open source bucket of binary files that can be used in any server without cost.",
        technologies: [SiGithub, SiNodedotjs, SiExpress, SiPrisma, SiPostgresql],
        techNames: ["Github", "NodeJs", "ExpressJs", "Prisma", "PostgreSQL"],
        techLinks: ["https://github.com/Logic-Layer-Dev/OperaFR", "https://nodejs.org/en", "https://expressjs.com//", "https://www.prisma.io/", "https://www.postgresql.org/"],
        github: "https://github.com/Logic-Layer-Dev/OperaFR",
        demo: "https://documenter.getpostman.com/view/10123907/2s9Y5WyjGL",
        image: "/projects/OperaFR.png",
        available: true,
    },
];
