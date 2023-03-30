import * as React from "react";
import { Album, ProjectMetadata, standardTags } from "lib/projects";

import icon from "images/classical-icon.png";
import ProjectDetails from "lib/elements/ProjectDetails";
import { TrackListing } from "lib/elements/TrackListing";

import fugalSonataAudio from "audio/Classical/fugue_sonata.mp3";
import fugueGMajorAudio from "audio/Classical/fugue16.mp3";
import fugueCMinorAudio from "audio/Classical/FugueInCMinor.mp3";
import fugue2ViolinsAudio from "audio/Classical/fugue2.mp3";
import pianoSonata1Audio from "audio/Classical/pianosonata1.mp3";
import pianoSonata2Audio from "audio/Classical/pianosonata2.mp3";
import canonAudio from "audio/Classical/canon3.mp3";

export const meta: ProjectMetadata = {
	name: "Classical Pieces",
	organization: "AJ Kolenc",
	tags: [standardTags.music],
	slug: "classical",
	shortDescription: "Compositions I wrote in a classical style",
	iconURL: icon,
};

export const ClassicalPieces: Album = {
	name: "Classical Pieces",
	coverURL: icon,
	projectURL: `/projects/${meta.slug}`,
	tracks: [
		{
			name: "Piano Sonata No.1",
			audioUrl: pianoSonata1Audio,
			duration: 200,
		},
		{
			name: "Piano Sonata No.2",
			audioUrl: pianoSonata2Audio,
			duration: 213,
		},
		{ name: "Fugal Sonata", audioUrl: fugalSonataAudio, duration: 264 },
		{ name: "Fugue in G Major", audioUrl: fugueGMajorAudio, duration: 154 },
		{ name: "Fugue in C Minor", audioUrl: fugueCMinorAudio, duration: 209 },
		{
			name: "Canon in G Major",
			audioUrl: canonAudio,
			duration: 72,
		},
		{
			name: "Fugue for 2 Violins",
			audioUrl: fugue2ViolinsAudio,
			duration: 205,
		},
	],
};

export default function Classical() {
	return (
		<ProjectDetails
			meta={meta}
			video={{ src: "https://youtu.be/DyBjRNqHlmQ", native: false }}
			info={[
				{ title: "Composed In", data: ["Finale", "Flat.io"] },
				{
					title: "Written For",
					data: ["Piano", "String Orchestra", "Violin"],
				},
			]}
		>
			<p>
				As a student at Georgia Tech I studied music composition. As part of my
				studies and since, I&apos;ve been writing pieces in a classical style.
			</p>
			<h3>Pieces</h3>
			<TrackListing album={ClassicalPieces} />
		</ProjectDetails>
	);
}
