import * as React from "react";
import { Categories, Project } from "../types";

import icon from "images/earsketch_icon.png";

export const EarSketch: Project = {
	name: "EarSketch Canvas",
	category: Categories.other,
	slug: "earsketch-canvas",
	iconURL: icon,
	renderPage: () => {
		return <div></div>;
	},
};
