import * as React from "react";
import { Album, ProjectMetadata, standardTags } from "lib/projects";
import blackOakIcon from "images/blackoak_cover.png";
import ProjectDetails from "lib/elements/ProjectDetails";

import titleAudio from "audio/BlackOak/blackoak1.mp3";
import exploreAudio from "audio/BlackOak/blackoak2.mp3";
import victoryAudio from "audio/BlackOak/blackoakvictory2.mp3";
import lossAudio from "audio/BlackOak/blackoakloss.mp3";
import { TrackListing } from "lib/elements/TrackListing";

export const meta: ProjectMetadata = {
	name: "Black Oak Manor",
	organization: "The Stork Burnt Down",
	releaseYear: 2014,
	tags: [standardTags.game, standardTags.music],
	slug: "black-oak-manor",
	iconURL: blackOakIcon,
	shortDescription:
		"Team up with other investigators and destroy the monster haunting the manor",
};

const album: Album = {
	name: "Black Oak Manor Soundtrack",
	coverURL: blackOakIcon,
	projectURL: `/projects/${meta.slug}`,
	tracks: [
		{
			name: "Title Screen",
			audioUrl: titleAudio,
			duration: 151,
		},
		{
			name: "Exploration",
			audioUrl: exploreAudio,
			duration: 185,
		},
		{
			name: "Monster Wins",
			audioUrl: lossAudio,
			duration: 13,
		},
		{
			name: "Investigators Win",
			audioUrl: victoryAudio,
			duration: 12,
		},
	],
};

export default function BlackOakManor() {
	return (
		<ProjectDetails
			meta={meta}
			video={{ src: "https://www.youtube.com/watch?v=PIwvW_SvNnI" }}
			info={[
				{ title: "Developed With", data: "Unity" },
				{ title: "Roles", data: ["Composer", "UI Developer"] },
			]}
		>
			<p>
				Black Oak Manor is a hybrid co-op and competitive multiplayer game that
				tasks a group of investigators with hunting down a monster haunting the
				manor. One player controls the monster, while the others choose an
				investigator with unique powers.
			</p>
			<p>
				Black Oak Manor was developed at Georgia Tech in the VGDev group as a
				collaboration between students.
			</p>
			<h3>Contribution</h3>
			<p>
				I was brought onto the project for two reasons: to contribute music, and
				to do UI programming for the game. The latter involved reading input
				from multiple gamepads simultaneously, a skill that would come in handy
				on later projects.
			</p>
			<h3>Soundtrack</h3>
			<TrackListing album={album} />
		</ProjectDetails>
	);
}
