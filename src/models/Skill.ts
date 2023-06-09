import type { Image } from 'sanity'

export interface Skill extends SanityBody {
    _type: "skill",
    image: Image,
    progress: number,
    title: string
}
