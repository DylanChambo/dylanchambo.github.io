import { SanityBody } from "./SanityBody";

export interface Social extends SanityBody {
    _type: "social";
    title: string;
    url: string;
}