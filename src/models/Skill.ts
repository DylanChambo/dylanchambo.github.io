import type { Image } from 'sanity'
import { SanityBody } from './SanityBody'

export interface Skill extends SanityBody {
    _type: "skill",
    image: Image,
    progress: number,
    title: string
}
