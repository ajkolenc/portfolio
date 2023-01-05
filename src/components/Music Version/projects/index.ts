import * as React from "react";
import { BlackOakManorGame } from "./games/black-oak-manor";
import { Dubio } from "./games/dubio";
import { EpicLutes } from "./games/epic-lutes";
import { HomeImprovisation } from "./games/home-improvisation";
import { MermaidsGame } from "./games/mermaids";
import { PBSGames } from "./games/pbs-games";
import { Pedestria } from "./games/pedestria";
import { Spacetime } from "./games/spacetime";
import { Sunset } from "./games/sunset";
import { TheOutbreak } from "./games/the-outbreak";
import { TriggerParadox } from "./games/trigger-paradox";
import { BlackOakManorMusic } from "./music/black-oak-manor";
import { ClassicalMusic } from "./music/classical";
import { FusRoDah } from "./music/fus-ro-dah";
import { MermaidsMusic } from "./music/mermaids";
import { VocalArrangements } from "./music/vocal-arrangements";
import { EarSketch } from "./other/ear-sketch";
import { ACPPhoenixMural } from "./other/phoenix-mural";
import { ProceduralArt } from "./other/procedural-art";
import { Zentacle } from "./other/zentacle";
import { Project } from "./types";

export const allProjects: Project[] = [
	TheOutbreak,
	Dubio,
	VocalArrangements,
	HomeImprovisation,
	ACPPhoenixMural,
	PBSGames,
	ClassicalMusic,
	Spacetime,
	EpicLutes,
	Zentacle,
	MermaidsGame,
	MermaidsMusic,
	BlackOakManorGame,
	BlackOakManorMusic,
	ProceduralArt,
	Pedestria,
	EarSketch,
	FusRoDah,
	TriggerParadox,
	Sunset,
];

export const projectsBySlug: { [slug: string]: Project } = allProjects.reduce<{
	[slug: string]: Project;
}>((all, current) => {
	all[current.slug] = current;
	return all;
}, {});
