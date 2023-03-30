import * as React from "react";
import { ProjectMetadata, standardTags } from "lib/projects";
import ProjectDetails from "lib/elements/ProjectDetails";

import icon from "images/sesame-street_grow-your-colors.png";

export const meta: ProjectMetadata = {
	name: "Sesame Street Games",
	organization: "Primal Screen",
	releaseYear: 2016,
	tags: [standardTags.game, standardTags.web],
	slug: "sesame-street",
	iconURL: icon,
	shortDescription: "Ports of flash games designed for kids with autism",
};

export default function SesameStreetGames() {
	return (
		<ProjectDetails
			meta={meta}
			video={{
				src: "https://www.youtube.com/watch?v=vuDjZ9cwAXc",
				native: false,
			}}
			info={[
				{
					title: "Developed With",
					data: ["SpringRoll (HTML5)", "Adobe Animate"],
				},
				{ title: "Roles", data: ["Developer"] },
			]}
			links={[
				{
					name: "Brush Those Teeth",
					href: "https://www.sesamestreet.org/games?id=132",
				},
				{
					name: "Grow Your Colors",
					href: "https://www.sesamestreet.org/games?id=269",
				},
			]}
		>
			<p>
				I worked with Primal Screen to port some older Flash games to HTML5 for
				Sesame Street. These games were designed to help educate kids with
				autism on some basic but important concepts and habits, from brushing
				their teeth to identifying vegetables.
			</p>
			<h3>Contribution</h3>
			<p>
				I used the HTML5 game engine{" "}
				<a href="https://springroll.io">SpringRoll</a> to port the games. They
				required both conversion of ActionScript to JavaScript code and heavy
				optimization to run well on the web.
			</p>
		</ProjectDetails>
	);
}
