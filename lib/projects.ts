import * as React from "react";
import { StaticImageData } from "next/image";

export const standardTags = {
	game: "game",
	music: "music",
	web: "web",
	misc: "misc",
};

export interface ProjectMetadata {
	name: string;
	organization: string;
	releaseYear?: number;
	tags: string[];
	slug: string;
	iconURL: StaticImageData;
	shortDescription: string;
}

export interface Album {
	name: string;
	coverURL: StaticImageData;
	tracks: Track[];
	projectURL: string;
}

export interface Track {
	name: string;
	audioUrl: string;
	duration: number;
	videoUrl?: string;
}
