import { Experience } from "../models/Experience";
import { PageInfo } from "../models/PageInfo";
import { Project } from "../models/Project";
import { Skill } from "../models/Skill";
import { Social } from "../models/Social";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const getExperiences = async () => {
    const res = await fetch(`${API_URL}/api/experience`);
    const data = await res.json();
    const experiences: Experience[] = data.experiences;

    return experiences;
}

export const getPageInfo = async () => {
    const res = await fetch(`${API_URL}/api/page-info`);
    const data = await res.json();
    const pageInfo: PageInfo = data.pageInfo;

    return pageInfo;
}

export const getProjects = async () => {
    const res = await fetch(`${API_URL}/api/projects`);
    const data = await res.json();
    const projects: Project[] = data.projects;

    return projects;
}

export const getSkills = async () => {
    const res = await fetch(`${API_URL}/api/skills`);
    const data = await res.json();
    const skills: Skill[] = data.skills;

    return skills;
}

export const getSocials = async () => {
    const res = await fetch(`${API_URL}/api/socials`);
    const data = await res.json();
    const socials: Social[] = data.socials;

    return socials;
}