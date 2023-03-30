import * as React from "react";
import { Album, ProjectMetadata, standardTags } from "lib/projects";
import ProjectDetails from "lib/elements/ProjectDetails";
import { TrackListing } from "lib/elements/TrackListing";

import fusRoDahIcon from "images/fus-ro-dah_icon.png";
import soldierAudio from "audio/Orchestral/soldiers-return.mp3";
import sinfonietta1Audio from "audio/Orchestral/sinfonietta1-ascension.mp3";
import sinfonietta2Audio from "audio/Orchestral/sinfonietta1-nostalgia.mp3";
import sinfonietta3Audio from "audio/Orchestral/sinfonietta1-catharsis.mp3";
import desertAudio from "audio/Orchestral/desertcity.mp3";
import newlywedAudio from "audio/Orchestral/newlyweds.mp3";
import siriusAudio from "audio/Orchestral/siriusblack.mp3";
import moonAudio from "audio/Orchestral/moonearth.mp3";
import villainAudio from "audio/Orchestral/villainy.mp3";

export const meta: ProjectMetadata = {
	name: "Orchestral Pieces",
	organization: "AJ Kolenc",
	tags: [standardTags.music],
	slug: "orchestral-pieces",
	iconURL: fusRoDahIcon,
	shortDescription: "Music written for orchestra",
};

const album: Album = {
	name: "Orchestral Pieces",
	coverURL: fusRoDahIcon,
	projectURL: `/projects/${meta.slug}`,
	tracks: [
		{
			name: "Soldier's Return",
			audioUrl: soldierAudio,
			duration: 238,
		},
		{
			name: "Sinfonetta No.1: Ascension",
			audioUrl: sinfonietta1Audio,
			duration: 138,
		},
		{
			name: "Sinfonetta No.1: Nostalgia",
			audioUrl: sinfonietta2Audio,
			duration: 72,
		},
		{
			name: "Sinfonetta No.1: Catharsis",
			audioUrl: sinfonietta3Audio,
			duration: 117,
		},
		{
			name: "Theme from The (almost) Newly Weds Game",
			audioUrl: newlywedAudio,
			duration: 22,
		},
		{
			name: "Desert City",
			audioUrl: desertAudio,
			duration: 147,
		},
		{
			name: "Death of Sirius Black (Rescored)",
			audioUrl: siriusAudio,
			duration: 155,
		},
		{
			name: "Moon/Earth",
			audioUrl: moonAudio,
			duration: 174,
		},
		{
			name: "Villainy",
			audioUrl: villainAudio,
			duration: 134,
		},
	],
};

export default function OrchestralPieces() {
	return (
		<ProjectDetails
			meta={meta}
			video={{ src: "https://youtu.be/ZMnYYrT-zso", native: false }}
		>
			<p>
				I enjoy writing pieces for a full orchestra, both for specific projects
				I&apos;m involved in and for my own expression.
			</p>
			<p>
				In 2013 I was lucky enough to have the Georgia Tech choirs and orchestra
				perform a piece I wrote, <em>Fu Ro Dah</em> (video). It takes the
				listener on a tour of some of the most famous video game music every
				composed, combining the themes in novel ways.
			</p>
			<h3>Pieces</h3>
			<TrackListing album={album} />
		</ProjectDetails>
	);
}
