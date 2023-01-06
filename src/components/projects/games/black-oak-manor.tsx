import * as React from "react";
import { Categories, Project } from "../types";

const roles = ["Developer", "Composer"];
const links = [];

export const BlackOakManorGame: Project = {
	name: "Black Oak Manor",
	category: Categories.games,
	slug: "black-oak-manor",
	iconURL: "",
	tileURL: "",
	renderPage: () => {
		return <div></div>;
	},
};
