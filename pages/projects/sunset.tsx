import * as React from "react";
import { ProjectMetadata, standardTags } from "lib/projects";
import ProjectDetails from "lib/elements/ProjectDetails";

import icon from "images/sunset_icon.png";

export const meta: ProjectMetadata = {
	name: "Sunset",
	organization: "AJ Kolenc",
	releaseYear: 2013,
	tags: [standardTags.game],
	slug: "sunset",
	iconURL: icon,
	shortDescription: "Catch falling stars, plant them, and harvest their fruit",
};

export default function Sunset() {
	return (
		<ProjectDetails
			meta={meta}
			info={[
				{
					title: "Developed With",
					data: "Unity",
				},
				{
					title: "Roles",
					data: "Solo Developer",
				},
			]}
			video={{ src: "https://youtu.be/jVv51Zyfyig", native: false }}
		>
			<p>
				Sunset is a small, procedural game created as part of an 8-hour game
				jam. Conceived for mobile platforms, Sunset puts the user in an endless
				cycle of days. At night, seeds fall from the sky and can be sped to the
				ground. In the morning, trees grow from the seeds and bear fruit over
				the day, which can be collected. At sunset, the trees die and the cycle
				begins anew. Each fruit you pick becomes a star in the sky at night.
			</p>
			<h3>Contribution</h3>
			<p>
				Sunset is a solo project, so I handled all aspects of the project. Some
				of the highlights:
			</p>
			<ul>
				<li>Custom skybox shader</li>
				<li>Dynamic tree generation</li>
				<li>Blendable color palettes for each section of the day</li>
			</ul>
		</ProjectDetails>
	);
}
