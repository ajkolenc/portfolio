import * as React from "react";
import { ProjectMetadata, standardTags } from "lib/projects";
import ProjectDetails from "lib/elements/ProjectDetails";

import jokersIcon from "images/impractical-jokers.webp";
import jokersVideo from "video/impractical-jokers.mp4";

export const meta: ProjectMetadata = {
	name: "Impractical Jokers",
	organization: "Dragon Army",
	releaseYear: 2023,
	tags: [standardTags.game],
	slug: "impractical-jokers",
	iconURL: jokersIcon,
	shortDescription: "A mobile game based on the hit TBS show",
};

export default function ImpracticalJokers() {
	return (
		<ProjectDetails
			meta={meta}
			video={{
				src: jokersVideo,
				native: true,
			}}
			links={[
				{
					name: "Android App",
					href: "https://play.google.com/store/apps/details?id=com.WBD.ImpracticalJokers.TakeNYC&hl=en&gl=US",
				},
				{
					name: "iOS App",
					href: "https://apps.apple.com/us/app/impractical-jokers-take-nyc/id1645874916",
				},
			]}
			info={[
				{ title: "Platform", data: "Android & iOS" },
				{ title: "Developed With", data: "Unity" },
				{ title: "Roles", data: ["Developer"] },
			]}
		>
			<p>
				<em>Impractical Jokers Take NYC</em> is an ambitious mobile game that
				lets players live the fantasy of pranking along with the Jokers
				themselves in the various boroughs of New York. With character
				customization, multiple overworld zones, over 15 minigames, and tons of
				quests to complete, the game is a full-scale mobile experience with
				hours of enjoyment.
			</p>
			<h3>Contribution</h3>
			<p>
				I was brought on to the project at several stages over the course of
				development. My first major task was integrate Unity&apos;s Addressables
				package to allow for remote content updates for the app. I later worked
				on sound effect integration, visual polish, and gameplay tuning. As the
				project was nearing launch I shifted my focus to bug fixes.
			</p>
		</ProjectDetails>
	);
}
