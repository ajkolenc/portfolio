import * as React from "react";
import Link from "next/link";

import { Album, ProjectMetadata, standardTags } from "lib/projects";
import ProjectDetails from "lib/elements/ProjectDetails";
import { ButtonLink } from "lib/elements/ButtonLink";
import { TrackListing } from "lib/elements/TrackListing";

import styles from "styles/App.module.css";

import homeImprovIcon from "images/home_improv_icon.png";
import homeImprovIcon2 from "images/home-improvisation-icon.jpeg";
import homeImprovAudio from "audio/Misc/homeimprov.mp3";

export const meta: ProjectMetadata = {
	name: "Home Improvisation",
	organization: "The Stork Burnt Down",
	releaseYear: 2016,
	tags: [standardTags.game],
	slug: "home-improvisation",
	iconURL: homeImprovIcon2,
	shortDescription: "Build IKEA furniture without instructions",
};

const album: Album = {
	name: "Home Improvisation",
	coverURL: homeImprovIcon,
	projectURL: `/projects/${meta.slug}`,
	tracks: [
		{
			name: "Title Theme",
			audioUrl: homeImprovAudio,
			duration: 169,
		},
	],
};

export default function HomeImprovisation() {
	return (
		<ProjectDetails
			meta={meta}
			video={{ src: "https://www.youtube.com/embed/jneKUylcxIk" }}
			links={[
				{
					href: "http://homeimprovisation.com",
					name: "Website",
				},
				{
					href: "https://store.steampowered.com/app/357670/",
					name: "Steam Page",
				},
			]}
			info={[
				{ title: "Platform", data: "PC, Mac & Linux" },
				{ title: "Developed With", data: "Unity" },
				{ title: "Roles", data: ["Lead Developer", "Composer"] },
			]}
			awards={[
				{
					placement: "Winner",
					event: "Global Game Jam 2015",
					category: "Atlanta Location",
				},
				{
					placement: "Finalist",
					event: "IndieCade 2015",
				},
				{
					placement: "Finalist",
					event: "SXSW Expo 2015",
					category: "Gamer's Voice Multiplayer",
				},
				{
					placement: "Winner",
					event: "IndieBits 2015",
					category: "Best Overall Game",
				},
			]}
		>
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
				As Lead Developer, I was responsible for the large majority of the code
				in the game. This included the development of:
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
				<li>Thorough integration of the Steam and Oculus Rift platform APIs</li>
			</ul>
			<p>
				As the game was developed with a small team of 3, I also contributed to
				other aspects of the project.
			</p>
			<TrackListing album={album} />
			<p>
				This included composing the title theme of the soundtrack, creating the
				user interfaces, finding and integrating sound effects, and countless
				other tasks over the development cycle.
			</p>
		</ProjectDetails>
	);
}
