import * as React from "react";
import { Categories, Project } from "../types";

import outbreakIcon from "images/outbreak_icon.jpg";
import outbreakTile from "images/outbreak_screenshot.png";
import outbreakTile2 from "images/outbreak_screenshot2.jpeg";

const roles = ["CTO", "Designer"];
const links = [
	{
		name: "App Store Page",
		url: "https://outbreak.app.link/",
	},
	{
		name: "Web Store",
		url: "https://outbreakchallenge.com",
	},
];

export const TheOutbreak: Project = {
	name: "The Outbreak",
	category: Categories.games,
	slug: "the-outbreak",
	iconURL: outbreakIcon,
	tileURL: outbreakTile2,
	renderPage: () => {
		return <div></div>;
	},
};
