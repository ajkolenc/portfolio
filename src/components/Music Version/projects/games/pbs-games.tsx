import * as React from "react";
import { ProjectDetails } from "../../ProjectDetails";
import { Categories, Project } from "../types";

import pbsGamesIcon from "images/pbs-games_water_icon.jpg";

const roles = ["Developer"];
const links = [
	{
		url: "http://www.primalscreen.com/",
		name: "Primal Screen",
	},
];

export const PBSGames: Project = {
	name: "PBS Games",
	category: Categories.games,
	slug: "pbs-games",
	iconURL: pbsGamesIcon,
	size: "wide",
	renderPage: ({ project }) => {
		return (
			<ProjectDetails
				project={project}
				roles={roles}
				links={links}
			></ProjectDetails>
		);
	},
};
