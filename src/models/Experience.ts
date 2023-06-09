import { Skill } from "./Skill";

export interface Experience extends SanityBody {
    _type: "experience";
    company: string;
    companyImage: string;
    dateStarted: string;
    dateEnded: string;
    isCurrentlyWorkingHere: boolean;
    jobTitle: string;
    points: string[];
    technologies: Skill[];
}