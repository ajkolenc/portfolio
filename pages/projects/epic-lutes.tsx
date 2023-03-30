import * as React from "react";
import { ProjectMetadata, standardTags } from "lib/projects";
import ProjectDetails from "lib/elements/ProjectDetails";

import icon from "images/epic-lutes_icon.jpeg";
import video from "video/EpicLutes_Gameplay.mp4";

const roles = ["Developer", "Sound Designer"];

const links = [];

export const meta: ProjectMetadata = {
	name: "Epic Lutes",
	organization: "Global Game Jam",
	releaseYear: 2017,
	tags: [standardTags.game],
	slug: "epic-lutes",
	iconURL: icon,
	shortDescription: "Build custom instruments for your picky clients",
};

export default function EpicLutes() {
	return (
		<ProjectDetails
			meta={meta}
			video={{ src: video, native: true }}
			info={[
				{ title: "Platforms", data: "PC & Mac" },
				{ title: "Developed With", data: "Unity" },
				{ title: "Roles", data: ["Developer", "Sound Designer"] },
			]}
			awards={[{ placement: "Selection", event: "IndieCade E3 Showcase 2016" }]}
		>
			<p>
				Epic Lutes sets you the task of building string instruments. You must
				manually shape the body, place and tune the strings, and finally perform
				for your demanding clients.
			</p>
			<p>
				The game was made as part of the 2017 Global Game Jam. It was later
				selected by IndieCade to be showcased at its booth on the E3 showfloor.
			</p>
			<h3>Contribution</h3>
			<p>
				As the primary developer on the project, I contributed the vast majority
				of the code to the project. The unique challenges of this game involved
				subtractive shape logic, note tuning calculations, and procedural melody
				generation.
			</p>
		</ProjectDetails>
	);
}
