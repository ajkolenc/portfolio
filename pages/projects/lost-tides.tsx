import * as React from "react";
import { ProjectMetadata, standardTags } from "lib/projects";
import ProjectDetails from "lib/elements/ProjectDetails";

import icon from "images/lost-tides_icon.png";
import Link from "next/link";

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
	name: "Lost Tides",
	organization: "FIX Health",
	releaseYear: 2017,
	tags: [standardTags.game],
	slug: "lost-tides",
	shortDescription:
		"Stay consistent in your recovery to steer your ship back to safe waters",
	iconURL: icon,
};

export default function LostTides() {
	return (
		<ProjectDetails
			meta={meta}
			video={{ src: "https://www.youtube.com/watch?v=R6FTW9CybTc" }}
			links={[{ name: "Website", href: "https://losttides.com/" }]}
			info={[
				{ title: "Platform", data: "Android & iOS" },
				{ title: "Developed With", data: "Unity" },
				{ title: "Roles", data: ["Director of Development"] },
			]}
		>
			<p>
				<em>Lost Tides: The Voyage Home</em> is a companion app for people who
				are going through physical therapy. It puts the player at the helm of a
				ship that has been blown across the world by a mysterious maelstrom;
				only by consistently doing your at-home treatment can you bring yourself
				and your crew back to home port.
			</p>
			<p>
				Lost Tides was developed in a 3-month period during the Techstars
				program for MetLife. We worked with MetLife in 2018 to pilot the app
				with a group of people on MetLife&apos;s disability insurance. While
				there were signs that the app did indeed help people stay more mindful
				of their at-home treatment, MetLife ultimately did not move forward with
				deploying the app to its full population.
			</p>
			<h3>Contribution</h3>
			<p>
				Lost Tides was developed in a short 3-month timeframe. Although it was
				built on the codebase of <Link href="./the-outbreak">The Outbreak</Link>
				, it required many new features to service the new target population
				(people recovering from disabilities). These included:
			</p>
			<ul>
				<li>
					Choose-your-own-adventure style encounters with voting mechanics on
					the paths
				</li>
				<li>
					Full integration of a new set of assets, including a completely new UI
					theme, environment art, and character outfits
				</li>
				<li>Survey functionality to self-report at-home treatment</li>
				<li>Compliance with medical data regulations</li>
				<li>Statistical calculations and dashboards for the pilot program</li>
			</ul>
		</ProjectDetails>
	);
}
