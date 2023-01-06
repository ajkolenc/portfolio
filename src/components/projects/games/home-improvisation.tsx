import * as React from "react";
import { Categories, Project } from "../types";

import homeImprovIcon from "images/home_improv_icon.png";

const roles = ["Lead Developer", "Composer"];
const links = [
	{
		url: "http://homeimprovisation.com",
		name: "Website",
	},
	{
		url: "https://store.steampowered.com/app/357670/",
		name: "Steam Page",
	},
];

const platforms = ["Windows", "Mac", "Linux"];
const tech = ["Unity3D"];

export const HomeImprovisation: Project = {
	name: "Home Improvisation",
	category: Categories.games,
	slug: "home-improvisation",
	iconURL: homeImprovIcon,
	size: "tall",
	renderPage: ({ project }) => {
		return (
			<div>
				<iframe
					// className={styles.videoEmbed}
					width="480"
					height="260"
					src="https://www.youtube.com/embed/jneKUylcxIk"
					title="Home Improvisation"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowFullScreen
					frameBorder={0}
				/>
				<h3>Overview</h3>
				<p>
					Originally created in a Global Game Jam, Home Improvisation became an
					internet sensation: I joined the Stork Burnt Down to develop the
					prototype into a full game.
				</p>
				<p>
					After a year in Early Access, we released the game in July 2016 to
					success on Steam. The game included full support for the HTC Vive at
					launch, and later became a launch title for the Oculus Touch
					controllers.
				</p>
				<h3>Contribution</h3>
				<p>
					As Lead Developer, I was responsible for the large majority of the
					code in the game. This included the development of:
				</p>
				<ul>
					<li>All major gameplay systems</li>
					<li>Seamless networked multiplayer functionality</li>
					<li>A robust serialization system for game save data</li>
					<li>A flexible user-generated content system for Steam Workshop</li>
					<li>
						Controls for many different devices, including mouse, keyboard,
						gamepad, HTC Vive, and Oculus Rift
					</li>
					<li>
						Thorough integration of the Steam and Oculus Rift platform APIs
					</li>
				</ul>
				<p>
					As the game was developed with a small team of 3, I also contributed
					to other aspects of the project. This included composing the title
					piece of the soundtrack, creating the user interfaces, finding and
					integrating sound effects, and countless other tasks over the
					development cycle.
				</p>
			</div>
		);
	},
};
