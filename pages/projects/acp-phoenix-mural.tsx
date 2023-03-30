import * as React from "react";
import { ProjectMetadata, standardTags } from "lib/projects";
import ProjectDetails from "lib/elements/ProjectDetails";

import acpIcon from "images/acp_icon.jpg";
import acpVideo from "video/da_acp_photo-counter.mp4";

export const meta: ProjectMetadata = {
	name: "ACP Phoenix Mural",
	organization: "Dragon Army",
	releaseYear: 2021,
	tags: [standardTags.misc],
	slug: "acp-phoenix-mural",
	iconURL: acpIcon,
	shortDescription:
		"An AR installation to view the work of Atlanta photographers",
};

export default function ACPPhoenixMural() {
	return (
		<ProjectDetails
			meta={meta}
			video={{ src: acpVideo, native: true }}
			links={[
				{
					name: "Project Website",
					href: "https://festivalguide2021.acpinfo.org/listing/acp-public-art-the-phoenix-photo-mural/",
				},
			]}
			info={[
				{ title: "Developed With", data: "Unity" },
				{ title: "Roles", data: ["Developer", "Animator"] },
			]}
		>
			<p>
				The Atlanta Center for Photography commissioned Dragon Army to create an
				immersive 3D AR experience for this groundbreaking public art exhibit,
				featuring Atlanta&apos;s iconic symbol of rebirth the Phoenix. The
				interactive photo-mural features dozens of photographs showcasing the
				city&apos;s collaborative spirit.
			</p>
			<h3>Contribution</h3>
			<p>
				I was brought on to the project to code the interaction and procedurally
				animate the phoenix. It presented an interesting challenge due to the
				varying aspect ratios of the photographs displayed.
			</p>
		</ProjectDetails>
	);
}
