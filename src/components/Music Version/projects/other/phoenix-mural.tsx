import * as React from "react";
import { ProjectDetails } from "../../ProjectDetails";
import { Categories, Project } from "../types";

import acpIcon from "images/acp_icon.jpg";

const roles = ["Developer", "Animator"];
const links = [
	{
		name: "ACP Website",
		url: "https://festivalguide2021.acpinfo.org/listing/acp-public-art-the-phoenix-photo-mural/",
	},
];

export const ACPPhoenixMural: Project = {
	name: "ACP Phoenix Mural",
	category: Categories.other,
	slug: "acp-phoenix-mural",
	iconURL: acpIcon,
	size: "wide",
	renderPage: ({ project }) => {
		return (
			<ProjectDetails
				project={project}
				links={links}
				roles={roles}
			></ProjectDetails>
		);
	},
};
