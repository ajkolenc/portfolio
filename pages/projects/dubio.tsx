import * as React from "react";
import { ProjectMetadata, standardTags } from "lib/projects";

import dubioIcon from "images/dubio_icon.png";
import dubioScreenshot from "images/dubio_screenshot.png";
import ProjectDetails from "lib/elements/ProjectDetails";

const roles = ["Developer"];
const links = [
	{
		url: "https://dubiogame.com",
		name: "Website",
	},
	{
		url: "https://twitter.com/dubiogame",
		name: "Twitter",
	},
];

export const meta: ProjectMetadata = {
	name: "Dubio",
	organization: "Richard Boeser & AJ Kolenc",
	tags: [standardTags.game],
	slug: "dubio",
	iconURL: dubioIcon,
	shortDescription: "A game of tiny puzzle parcours",
};

export default function Dubio() {
	return (
		<ProjectDetails
			meta={meta}
			video={{ src: "https://youtu.be/IAV9QtpSDX0" }}
			links={[
				{ name: "Website", href: "https://dubiogame.com" },
				{ name: "Twitter", href: "https://twitter.com/dubiogame" },
			]}
			info={[
				{ title: "Platform", data: "Android & iOS" },
				{ title: "Developed With", data: "Unity" },
				{ title: "Roles", data: "Developer" },
			]}
			awards={[
				{
					placement: "Selection",
					event: "IndieCade Europe 2017",
				},
			]}
		>
			<p>
				Dubio is a puzzle platforming game with simple controls but challenging
				levels. Keep your momentum going as you jump, roll, and bounce your way
				through hand-crafted stages with eye-catching minimalist art.
			</p>
			<p>
				The game is currently still in development. You can join our beta by
				signing up for <a href="Join the beta">our mailing list.</a>
			</p>
			<h3>Contribution</h3>
			<p>
				Dubio is a collaboration with Richard Boeser, with him handling art and
				design while I handle code. So far the game has required:
			</p>
			<ul>
				<li>High-accuracy custom physics</li>
				<li>Tools to import levels from SVG</li>
				<li>Optimized procedural level decoration</li>
				<li>Unique interaction patterns</li>
			</ul>
		</ProjectDetails>
	);
}
