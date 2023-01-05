import * as React from "react";
import { Categories, Project } from "../types";

import rainbowCollectionIcon from "images/rainbow_collection_icon.jpg";

export const VocalArrangements: Project = {
	name: "Vocal Arrangements",
	category: Categories.music,
	slug: "vocal-arrangements",
	iconURL: rainbowCollectionIcon,
	renderPage: () => {
		return <div></div>;
	},
};
