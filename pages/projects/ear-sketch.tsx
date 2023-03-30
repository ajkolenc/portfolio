import * as React from "react";
import { ProjectMetadata, standardTags } from "lib/projects";

import icon from "images/earsketch_icon.png";
import ProjectDetails from "lib/elements/ProjectDetails";

export const meta: ProjectMetadata = {
	name: "EarSketch Canvas",
	organization: "Expressive Machinery Lab",
	releaseYear: 2014,
	tags: [standardTags.web, standardTags.misc],
	slug: "ear-sketch",
	iconURL: icon,
	shortDescription: "Use simple code to generate visuals synced to music",
};

export default function EarSketchCanvas() {
	return (
		<ProjectDetails
			meta={meta}
			video={{ src: "https://youtu.be/wWrIdqtv-Jw", native: false }}
			links={[
				{
					name: "EarSketch Website",
					href: "https://earsketch.gatech.edu/landing/",
				},
			]}
		>
			<p>
				EarSketch is an innovative project at Georgia Tech that aims to teach
				youth coding through music. With a dead-simple programming envrionment
				and editor, EarSketch lets student generate beats with simple code.
			</p>
			<p>
				EarSketch Canvas is an extension of that project, building on the
				existing music API to provide an interface for creating dynamic music
				visualizers. The goal was to introduce the basics of graphics
				programming and provide tools for visual creativity while remaining
				accessible for beginners.
			</p>
			<h3>Contribution</h3>
			<p>
				I worked on a small team of 4 for the project, alongside similar teams
				working on other experimental offshoots of EarSketch. I was involved in
				designing the API, implementing the API to interface with HTML5 canvas,
				and connecting with the existing EarSketch IDE to provide visual tools.
			</p>
		</ProjectDetails>
	);
}
