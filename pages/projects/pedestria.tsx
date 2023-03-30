import * as React from "react";
import { ProjectMetadata, standardTags } from "lib/projects";
import ProjectDetails from "lib/elements/ProjectDetails";

import icon from "images/pedestria_icon.png";

const roles = ["Developer"];
const links = [];

export const meta: ProjectMetadata = {
	name: "Pedestria",
	organization: "Sparpweed",
	releaseYear: 2014,
	tags: [standardTags.game],
	slug: "pedestria",
	iconURL: icon,
	shortDescription:
		"Fly around a spherical world and find the creature destroying it",
};

export default function Pedestria() {
	return (
		<ProjectDetails
			meta={meta}
			video={{ src: "https://youtu.be/45X35QtLzgU", native: false }}
			info={[
				{ title: "Developed With", data: "Unity" },
				{ title: "Roles", data: "Developer" },
			]}
		>
			<p>
				In 2014 I worked in Rotterdam, The Netherlands as an intern for
				Sparpweed. The goal of that internship was to produce a VR prototype,
				and Pedestria was the result of that effort.
			</p>
			<p>
				The game has you take control of an abstract winged creature and explore
				a procedurally generated planet. A dangerous corruption has begun to
				spread across the surface, and you need to find the cause and stop it.
			</p>
			<h3>Contribution</h3>
			<p>
				I handled all the coding for the project while Richard Boeser handled
				visual and game design. Some of what I implemented includes:
			</p>
			<ul>
				<li>Algorithmic planet generation and decoration</li>
				<li>Spherical gravitation physics</li>
				<li>
					Unique flying controls, with each stick controlling one wing of the
					creature
				</li>
				<li>Custom shaders for artist workflows</li>
			</ul>
		</ProjectDetails>
	);
}
