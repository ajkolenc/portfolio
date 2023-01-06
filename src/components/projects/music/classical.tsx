import * as React from "react";
import { Categories, Project } from "../types";

import icon from "images/classical-icon.png";

export const ClassicalMusic: Project = {
	name: "Classical",
	category: Categories.music,
	slug: "classical",
	size: "wide",
	iconURL: icon,
	renderPage: () => {
		return <div></div>;
	},
};
