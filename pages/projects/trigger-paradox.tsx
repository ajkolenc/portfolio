import * as React from "react";
import { ProjectMetadata, standardTags } from "lib/projects";
import ProjectDetails from "lib/elements/ProjectDetails";

import icon from "images/trigger-paradox_icon.png";

const roles = ["Developer"];
const links = [
	{
		name: "Global Game Jam Page",
		url: "https://globalgamejam.org/2014/games/trigger-paradox-0",
	},
];

export const meta: ProjectMetadata = {
	name: "Trigger Paradox",
	organization: "Global Game Jam",
	releaseYear: 2014,
	tags: [standardTags.game],
	slug: "trigger-paradox",
	iconURL: icon,
	shortDescription: "Navigate the world while walking on top of your own arm",
};
export default function TriggerParadox() {
	return (
		<ProjectDetails
			meta={meta}
			video={{
				src: "https://www.youtube.com/watch?v=LP_qUBgJ_XY",
				native: false,
			}}
			info={[
				{ title: "Developed With", data: "Unity" },
				{ title: "Roles", data: ["Developer"] },
			]}
			links={[
				{
					name: "Global Game Jam Site",
					href: "https://globalgamejam.org/2014/games/trigger-paradox-0",
				},
			]}
			awards={[
				{
					placement: "Runner-Up",
					event: "Global Game Jam 2014",
				},
			]}
		>
			<p>
				Trigger Paradox was created for the 2014 Global Game Jam in a team of 6,
				where it was awarded 2nd place. The theme was &quot;We don&apos;t see
				things as they are, we see them as we are.&quot;
			</p>
			<p>
				The game places you on the back of your own arm, and you must find your
				way off. You can do this by using your trusty gravity gun to remove
				obstacles and solve puzzles. Occasionally, you may need to twist your
				arm to jostle some of the rubbish out of place.
			</p>
			<h3>Contribution</h3>
			<p>
				As the main programmer on the project, I implemented all major gameplay
				systems. These included:
			</p>
			<ul>
				<li>Gravity gun physics</li>
				<li>Unique meta gameplay with dynamic gravity</li>
				<li>Puzzle game mechanics</li>
			</ul>
		</ProjectDetails>
	);
}
