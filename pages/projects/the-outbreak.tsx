import * as React from "react";
import { Album, ProjectMetadata, standardTags } from "lib/projects";
import ProjectDetails from "lib/elements/ProjectDetails";

import outbreakIcon from "images/outbreak_icon.jpg";
import outbreakTile from "images/outbreak_screenshot.png";
import outbreakTile2 from "images/outbreak_screenshot2.jpeg";

import outbreakAudio from "audio/Orchestral/outbreak.mp3";
import { TrackListing } from "lib/elements/TrackListing";

const roles = ["CTO", "Designer"];
const links = [
	{
		name: "App Store Page",
		url: "https://outbreak.app.link/",
	},
	{
		name: "Web Store",
		url: "https://outbreakchallenge.com",
	},
];

export const meta: ProjectMetadata = {
	name: "The Outbreak",
	organization: "FIX Health",
	tags: [standardTags.game],
	slug: "the-outbreak",
	shortDescription: "Use your real-world steps to run away from zombies",
	iconURL: outbreakIcon,
};

const album: Album = {
	name: "The Outbreak",
	projectURL: `/projects/${meta.slug}`,
	coverURL: outbreakIcon,
	tracks: [
		{
			name: "Theme from The Outbreak",
			audioUrl: outbreakAudio,
			duration: 93,
		},
	],
};

export default function TheOutbreak() {
	return (
		<ProjectDetails
			meta={meta}
			video={{ src: "https://www.youtube.com/watch?v=vv78RTFYGdU" }}
			links={[
				{ name: "Website", href: "https://outbreakchallenge.com" },
				{ name: "App", href: "https://outbreak.app.link/?a=b" },
			]}
			info={[
				{ title: "Platform", data: "Android & iOS" },
				{ title: "Developed With", data: ["Unity", "Typescript"] },
				{ title: "Roles", data: ["CTO", "Director of Development"] },
			]}
		>
			<p>
				The Outbreak is a fitness game that puts you in the middle of a zombie
				apocalypse: run in the real world to stay ahead of the zombie horde
				chasing you!
			</p>
			<p>As a product, the Outbreak is targeted at two markets:</p>
			<h4>Corporate Wellness</h4>
			<p>
				HR managers sign up for a timed program (e.g. 6 weeks) for their
				employees. Players form into teams and try to stay active the whole
				time.
			</p>
			<h4>Virtual Races</h4>
			<p>
				Individuals sign up for a distance-based race and can invite friends to
				join them. Finishing the race grants you a trophy: the faster you
				finish, the better trophy you earn.
			</p>
			<h3>Contribution</h3>
			<p>
				As the CTO of FIX Health, I&apos;ve been responsible for our entire
				suite of technology. This includes the Unity-based mobile app, as well
				as our server code and infrastructure.
			</p>
			<TrackListing album={album} />
			<p>
				The Outbreak is a massive project with thousands of monthly users,
				multiplayer instances, and internal development spread across a full
				team. Here is just some of what I developed for the game during my
				tenure as CTO:
			</p>
			<ul>
				<li>
					Support for hundreds of simultaneous players in a single mission
				</li>
				<li>Zero down-time server updates on scalable containers</li>
				<li>
					Full support for remote assets to allow for new content without app
					updates
				</li>
				<li>Web-hosted authoring tools for designers</li>
				<li>
					Pipelines to support the shipment of physical medals for in-game
					achievements
				</li>
			</ul>
		</ProjectDetails>
	);
}
