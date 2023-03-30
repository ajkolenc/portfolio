import * as React from "react";
import { ProjectMetadata, standardTags } from "lib/projects";
import ProjectDetails from "lib/elements/ProjectDetails";

import icon from "images/portfolio-icon.png";

export const meta: ProjectMetadata = {
	name: "My Portfolio",
	organization: "AJ Kolenc",
	releaseYear: 2023,
	tags: [standardTags.web],
	slug: "portfolio",
	iconURL: icon,
	shortDescription: "This very website",
};

export default function Portfolio() {
	return (
		<ProjectDetails
			meta={meta}
			info={[
				{ title: "Developed With", data: ["React", "NextJS"] },
				{ title: "Roles", data: "Solo Developer" },
			]}
			links={[
				{
					name: "Source Code",
					href: "https://github.com/ajkolenc/portfolio",
				},
			]}
		>
			<p>
				I like to make my portfolio websites from scratch. This not only gives
				me a chance to show my web development skills, but serves as a learning
				opportunity for modern web technologies.
			</p>
			<p>
				The website has evolved from its earliest HTML-only version, to a
				heavily JQuery-based structure, to a modern site built in NextJS.
			</p>
			<h3>Contribution</h3>
			<p>Some of the features of this website include:</p>
			<ul>
				<li>Custom CSS styles</li>
				<li>Site-wide audio player</li>
				<li>Static site generation</li>
			</ul>
		</ProjectDetails>
	);
}
