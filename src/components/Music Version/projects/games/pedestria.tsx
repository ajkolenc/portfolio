import * as React from "react";
import { Categories, Project } from "../types";

import icon from "images/pedestria_icon.png";

const roles = ["Developer"];
const links = [];

export const Pedestria: Project = {
	name: "Pedestria",
	category: Categories.games,
	slug: "pedestria",
	iconURL: icon,
	renderPage: () => {
		return <div></div>;
	},
};
