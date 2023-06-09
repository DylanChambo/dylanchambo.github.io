import { Skill } from "./Skill";

export interface Project extends SanityBody {
    _type: "project";
    title: string;
    image: Image;
    linkToProject: string;
    summary: string;
    technologies: Skill[];
}