import * as React from "react";
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
		return <div></div>;
	},
};
