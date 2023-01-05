import * as React from "react";
import { Categories, Project } from "../types";

import icon from "images/trigger-paradox_icon.png";

const roles = ["Developer"];
const links = [
	{
		name: "Global Game Jam Page",
		url: "https://globalgamejam.org/2014/games/trigger-paradox-0",
	},
];

export const TriggerParadox: Project = {
	name: "Trigger Paradox",
	category: Categories.games,
	slug: "trigger-paradox",
	iconURL: icon,
	tileURL: icon,
	renderPage: () => {
		return <div></div>;
	},
};
