import * as React from "react";
import { Categories, Project } from "../types";

import icon from "images/sunset_icon.png";

const roles = ["Solo Developer"];
const links = [];

export const Sunset: Project = {
	name: "Sunset",
	category: Categories.games,
	slug: "sunset",
	iconURL: icon,
	renderPage: () => {
		return <div></div>;
	},
};
