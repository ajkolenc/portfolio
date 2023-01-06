import * as React from "react";
import { Categories, Project } from "../types";

import dubioIcon from "images/dubio_icon.png";
import dubioScreenshot from "images/dubio_screenshot.png";

const roles = ["Developer"];
const links = [
	{
		url: "https://dubiogame.com",
		name: "Website",
	},
	{
		url: "https://twitter.com/dubiogame",
		name: "Twitter",
	},
];

export const Dubio: Project = {
	name: "Dubio",
	category: Categories.games,
	slug: "dubio",
	tileURL: dubioScreenshot,
	iconURL: dubioIcon,
	size: "wide",
	renderPage: ({ project }) => {
		return <div></div>;
	},
};
