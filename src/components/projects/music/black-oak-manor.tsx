import * as React from "react";
import { Album } from ".";
import { Categories, Project } from "../types";

import blackOakIcon from "images/blackoak_cover.png";

export const BlackOakManorMusic: Project = {
	name: "Black Oak Manor",
	category: Categories.music,
	slug: "black-oak-manor-soundtrack",
	iconURL: blackOakIcon,
	renderPage: ({ project }) => {
		return (
			<p>
				The music for Black Oak Manor was inspired by the noir film scores of
				the 1940s and 50s. It is scored for full orchestra, with accompanying
				pipe organ to emphasize the haunted house archetype.
			</p>
		);
	},
};

export const BlackOakManorAlbum: Album = {
	project: BlackOakManorMusic,
	name: BlackOakManorMusic.name,
	coverURL: BlackOakManorMusic.iconURL,
	tracks: [
		{
			name: "Title Screen",
			audioUrl: "",
		},
		{
			name: "Exploration",
			audioUrl: "",
		},
		{
			name: "Monster Wins",
			audioUrl: "",
		},
		{
			name: "Investigators Win",
			audioUrl: "",
		},
	],
};
