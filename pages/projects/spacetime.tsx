import * as React from "react";
import { ProjectMetadata, standardTags } from "lib/projects";
import ProjectDetails from "lib/elements/ProjectDetails";

import spacetimeIcon from "images/spacetime_icon.jpg";

const roles = ["Developer", "Sound Designer"];
const links = [];

export const meta: ProjectMetadata = {
	name: "SpaceTime",
	organization: "The Stork Burnt Down",
	releaseYear: 2017,
	tags: [standardTags.game],
	slug: "spacetime",
	shortDescription: "Pilot your ship in VR, but time only moves when you do",
	iconURL: spacetimeIcon,
};

export default function SpaceTime() {
	return (
		<ProjectDetails
			meta={meta}
			video={{ src: "https://youtu.be/WLzVfK9Ag7c", native: false }}
			info={[
				{ title: "Platforms", data: ["HTC Vive", "Oculus Rift Touch"] },
				{ title: "Developed With", data: "Unity" },
				{ title: "Roles", data: ["Lead Developer", "Sound Designer"] },
			]}
		>
			<p>
				Conceived and built exclusively for VR, SpaceTime combines strategic
				planning with skillful reflexes to make the ultimate space combat game.
				Time only advances when you move your ship; dodge with perfect precision
				and maneuver your ship to victory!
			</p>
			<h3>Contribution</h3>
			<p>
				As the primary developer on the project, I was responsible for most core
				gameplay systems. I also originated the concept and contributed strongly
				to the game design. Some of the unique features of the game include:
			</p>
			<ul>
				<li>Fully time-scalable gameplay and visual effects</li>
				<li>Unique control scheme and perspective</li>
				<li>Ally and enemy ship AI</li>
				<li>Support for multiple VR setups</li>
			</ul>
		</ProjectDetails>
	);
}
