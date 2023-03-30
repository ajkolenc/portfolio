import * as React from "react";
import { ProjectMetadata, standardTags } from "lib/projects";
import ProjectDetails from "lib/elements/ProjectDetails";

import pbsGamesIcon from "images/pbs-games_water_icon.jpg";

const roles = ["Developer"];
const links = [
	{
		url: "http://www.primalscreen.com/",
		name: "Primal Screen",
	},
];

export const meta: ProjectMetadata = {
	name: "PBS Games",
	organization: "Primal Screen",
	releaseYear: 2016,
	tags: [standardTags.game],
	slug: "pbs-games",
	iconURL: pbsGamesIcon,
	shortDescription: "Small toy-like games for the PBS Kids streaming stick",
};

export default function PBSGames() {
	return (
		<ProjectDetails
			meta={meta}
			video={{ src: "https://youtu.be/r93AuX02nYE", native: false }}
			info={[
				{ title: "Developed With", data: "Unity" },
				{ title: "Roles", data: "Developer" },
			]}
			links={[
				{
					href: "https://www.amazon.com/PBS-Plug-Play-Streaming-Stick/dp/B0719CQH3B/",
					name: "Amazon Store Page",
				},
			]}
		>
			<p>
				In 2016 PBS decided to launch its own HDMI streaming stick, made
				specifically for children. In addition to streaming PBS video content,
				they wanted to include a few simple games that can be played directly
				from the device.
			</p>
			<h3>Contribution</h3>
			<p>
				I worked with designers at Primal Screen to prototype and implement two
				of the games on the stick, <em>Rail Riders</em> and <em>Sound Box</em>.
			</p>
			<p>
				Rail Riders in particular had some interesting features, requiring an
				infinitely spawning track that moves through various environments
				procedurally. Both games required significant optimization to run
				smoothly on the low-powered HDMI stick.
			</p>
		</ProjectDetails>
	);
}
