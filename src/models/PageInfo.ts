import type { Image } from 'sanity'
import { SanityBody } from './SanityBody';

export interface PageInfo extends SanityBody {
    _type: "pageInfo";
    location: string;
    backgroundInformation: string;
    email: string;
    role: string;
    heroImage: Image;
    name: string;
    phoneNumber: string;
    profilePic: Image;
}
