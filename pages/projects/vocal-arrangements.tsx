import * as React from "react";
import { Album, ProjectMetadata, standardTags } from "lib/projects";
import ProjectDetails from "lib/elements/ProjectDetails";
import { TrackListing } from "lib/elements/TrackListing";

import meSingingIcon from "images/me_singing.jpeg";

import godHelpAudio from "audio/Vocal/GHTO Recording.mp3";
import gimmeAudio from "audio/Vocal/Gimme Controversy - Full Recording.mp3";
import jogaAudio from "audio/Vocal/joga.mp3";
import madonnaAudio from "audio/Vocal/Madonna Megamix - Recording.mp3";
import makeMeFeelAudio from "audio/Vocal/Make Me Feel - Recording (A Cappella).mp3";
import merryChristmasAudio from "audio/Vocal/Merry Christmas Tonight - Recording.mp3";
import rainbowCollectionAudio from "audio/Vocal/Rainbow Collection - Recording.mp3";
import toxicAudio from "audio/Vocal/Toxic Madrigal - Recording.mp3";
import whiteFlagAudio from "audio/Vocal/White Flag - Recording.mp3";

export const meta: ProjectMetadata = {
	name: "Vocal Arrangements",
	organization: "Various Ensembles",
	tags: [standardTags.music],
	slug: "vocal-arrangements",
	iconURL: meSingingIcon,
	shortDescription: "Performed by myself and various ensembles",
};

const album: Album = {
	name: "Vocal Arrangements",
	projectURL: `/projects/${meta.slug}`,
	coverURL: meSingingIcon,
	tracks: [
		{
			name: "Rainbow Collection",
			audioUrl: rainbowCollectionAudio,
			duration: 306,
		},
		{
			name: "Madonna Megamix",
			audioUrl: madonnaAudio,
			duration: 349,
		},
		{
			name: "Gimme Controversy",
			audioUrl: gimmeAudio,
			duration: 211,
		},
		{
			name: "Toxic: A Renaissance Madrigal",
			audioUrl: toxicAudio,
			duration: 149,
		},
		{
			name: "God Help the Outcasts",
			audioUrl: godHelpAudio,
			duration: 206,
		},
		{
			name: "White Flag",
			audioUrl: whiteFlagAudio,
			duration: 189,
		},
		{
			name: "Make Me Feel",
			audioUrl: makeMeFeelAudio,
			duration: 182,
		},
		{
			name: "Merry Christmas Tonight",
			audioUrl: merryChristmasAudio,
			duration: 225,
		},
		{
			name: "Joga",
			audioUrl: jogaAudio,
			duration: 182,
		},
	],
};

export default function VocalArrangements() {
	return (
		<ProjectDetails
			meta={meta}
			video={{ src: "https://youtu.be/OgN3jov2ZAU", native: false }}
			info={[
				{
					title: "Produced With",
					data: ["FL Studio", "Premiere Pro"],
				},
				{
					title: "Ensembles",
					data: ["Atlanta Gay Men's Chorus", "Amsterdam Gay Men's Chorus"],
				},
			]}
		>
			<p>
				Since performing in various choruses in college, I have maintained an
				interest in singing and vocal composition. As a member of these
				ensembles I&apos;ve occasionally had the opportunity to have these
				pieces performed. More recently, I began recording my own arrangements.
			</p>
			<h3>Self-Recorded Arrangements</h3>
			<TrackListing album={album} />
		</ProjectDetails>
	);
}
