import * as React from "react";
import { ProjectDetails } from "../../ProjectDetails";
import { Categories, Project } from "../types";

import icon from "images/zentacle_icon.png";

const roles = ["Developer"];
const links: { name: string; url: string }[] = [];

export const Zentacle: Project = {
	name: "Zentacle",
	category: Categories.other,
	slug: "zentacle",
	iconURL: icon,
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
