import * as React from "react";
import { Album, ProjectMetadata, standardTags } from "lib/projects";
import ProjectDetails from "lib/elements/ProjectDetails";
import { TrackListing } from "lib/elements/TrackListing";

import mermaidsIcon from "images/mermaids_cover.png";
import prologueAudio from "audio/Mermaids/mermaidstheme.mp3";
import openWaterAudio from "audio/Mermaids/openwater.mp3";
import caveAudio from "audio/Mermaids/thecave.mp3";
import musicGardenAudio from "audio/Mermaids/musicgarden.mp3";
import spireAudio from "audio/Mermaids/spire.mp3";
import ruinsAudio from "audio/Mermaids/ruins.mp3";
import gentleWavesAudio from "audio/Mermaids/gentlewaves.mp3";

export const meta: ProjectMetadata = {
	name: "Mermaids",
	organization: "Emergent Game Lab",
	releaseYear: 2015,
	tags: [standardTags.game, standardTags.music],
	slug: "mermaids",
	iconURL: mermaidsIcon,
	shortDescription:
		"Build a clan and discover the secrets of a world suffering from ecological disaster",
};

export const MermaidsSoundtrack: Album = {
	name: "Mermaids Soundtrack",
	projectURL: `/projects/${meta.slug}`,
	coverURL: mermaidsIcon,
	tracks: [
		{
			name: "Prologue",
			audioUrl: prologueAudio,
			duration: 125,
		},
		{
			name: "Open Water",
			audioUrl: openWaterAudio,
			duration: 294,
		},
		{
			name: "The Cave",
			audioUrl: caveAudio,
			duration: 279,
		},
		{
			name: "Music Garden",
			audioUrl: musicGardenAudio,
			duration: 170,
		},
		{
			name: "Spire",
			audioUrl: spireAudio,
			duration: 200,
		},
		{
			name: "Ruins of a Lost Civilization",
			audioUrl: ruinsAudio,
			duration: 279,
		},
		{
			name: "Gentle Waves",
			audioUrl: gentleWavesAudio,
			duration: 319,
		},
	],
};

export default function Mermaids() {
	return (
		<ProjectDetails
			meta={meta}
			info={[
				{ title: "Developed With", data: "Unity" },
				{ title: "Roles", data: ["Lead Designer", "Developer", "Composer"] },
			]}
			links={[
				{
					href: "https://gvu.gatech.edu/research/projects/mermaids-mmog",
					name: "Project Page",
				},
			]}
			video={{
				src: "https://youtu.be/t5ZVKQ9yyaY",
				native: false,
			}}
		>
			<p>
				Mermaids is a massively multiplayer online game (MMOG) where players are
				mermaids. Bucking genre trends, Mermaids doesn&apos;t have combat;
				instead, players are encouraged to explore the environment and maintain
				a healthy ecosystem by cooperating with each other. Mermaids was
				developed as a research project in the Emergent Game Group over the
				course of many years.
			</p>
			<h3>Contribution</h3>
			<p>
				I served as Lead Designer for Mermaids for three semesters, managing a
				team ranging from 10-15 people of various experience levels while
				contributing features myself. I initially joined the project as a
				composer, but later expanded my role to include programming and design.
			</p>
			<h3>Soundtrack</h3>
			<TrackListing album={MermaidsSoundtrack} />
		</ProjectDetails>
	);
}
