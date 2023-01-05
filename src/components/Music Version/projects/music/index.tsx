import { Project } from "../types";

export interface Album {
    project: Project;
    name: string;
    coverURL: string;
    tracks: Track[];
}

export interface Track {
    name: string;
    audioUrl: string;
    videoUrl?: string;
}