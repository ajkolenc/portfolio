import * as React from "react";
import { Categories, Project } from "../types";

import icon from "images/epic-lutes_icon.jpeg";

const roles = ["Developer", "Sound Designer"];

const links = [];

export const EpicLutes: Project = {
	name: "Epic Lutes",
	category: Categories.games,
	slug: "epic-lutes",
	iconURL: icon,
	renderPage: () => {
		return <div></div>;
	},
};
