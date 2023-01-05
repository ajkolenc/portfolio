import * as React from "react";
import { ProjectDetails } from "../../ProjectDetails";
import { Categories, Project } from "../types";

const roles = ["Developer"];
const links: { name: string; url: string }[] = [];

export const ProceduralArt: Project = {
	name: "Procedural Art",
	category: Categories.other,
	slug: "procedural-art",
	iconURL: "",
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
