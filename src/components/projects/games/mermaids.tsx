import * as React from "react";
import { Categories, Project } from "../types";

const roles = ["Lead Designer", "Developer", "Composer"];

const links = [
	{
		url: "https://mermaidsgame.com",
		name: "Website",
	},
];

export const MermaidsGame: Project = {
	name: "Mermaids",
	category: Categories.games,
	slug: "mermaids",
	iconURL: "",
	renderPage: () => {
		return <div></div>;
	},
};
