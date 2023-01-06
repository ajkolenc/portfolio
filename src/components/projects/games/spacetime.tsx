import * as React from "react";
import { Categories, Project } from "../types";

import spacetimeIcon from "images/spacetime_icon.jpg";

const roles = ["Developer", "Sound Designer"];
const links = [];

export const Spacetime: Project = {
	name: "SpaceTime",
	category: Categories.games,
	slug: "spacetime",
	iconURL: spacetimeIcon,
	renderPage: () => {
		return <div></div>;
	},
};
