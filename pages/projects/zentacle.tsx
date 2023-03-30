import * as React from "react";
import { ProjectMetadata, standardTags } from "lib/projects";
import ProjectDetails from "lib/elements/ProjectDetails";

import icon from "images/zentacle_icon.png";

const roles = ["Developer"];
const links: { name: string; url: string }[] = [];

export const meta: ProjectMetadata = {
	name: "Zentacle",
	organization: "AJ Kolenc",
	releaseYear: 2015,
	tags: [standardTags.web, standardTags.misc],
	slug: "zentacle",
	iconURL: icon,
	shortDescription: "Generate animated spirals with this web-based art tool",
};

export default function Zentacle() {
	return (
		<ProjectDetails
			meta={meta}
			video={{ src: "https://youtu.be/LhhJDq8jkW0", native: false }}
			info={[
				{ title: "Platform", data: "Web" },
				{ title: "Developed With", data: "Unity" },
				{ title: "Roles", data: "Solo Developer" },
			]}
			links={[
				{ name: "Try on Itch", href: "https://ajkolenc.itch.io/zentacle" },
				{ name: "Source Code", href: "https://github.com/ajkolenc/zentacle" },
			]}
		>
			<p>
				Zentacle is a personal project I created to explore ideas around
				procedural art decoration. I wanted to make a tool that could produce
				varied results from a simple set of parameters.
			</p>
			<p>
				As the only contributor to the project, I produced every aspect from the
				design to the code. This included:
			</p>
			<ul>
				<li>Fully custom UI paradigm</li>
				<li>GIF recording</li>
				<li>Import/export functionality</li>
				<li>Procedural music</li>
			</ul>
		</ProjectDetails>
	);
}
