import * as React from "react";
import * as styles from "./App.style.css";
import { BackButton } from "./BackButton";
import { Divider, Section } from "./App";
import { MusicPlayer, MusicPlayerProps, Album } from "./MusicPlayer";

import mermaidsCover from "../images/mermaids_cover.png";
import blackoakCover from "../images/blackoak_cover.png";
import classicalCover from "../images/classical_cover.png";
import vocalCover from "../images/vocal_cover.jpg";
import miscCover from "../images/misc_cover.jpg";

import blackOakTitle from "../audio/BlackOak/blackoak1.mp3";
import blackOakExplore from "../audio/BlackOak/blackoak2.mp3";

import mermaidsTheme from "../audio/Mermaids/mermaidstheme.mp3";
import mermaidsMusicGarden from "../audio/Mermaids/musicgarden.mp3";
import mermaidsRuins from "../audio/Mermaids/ruins.mp3";
import mermaidsCave from "../audio/Mermaids/thecave.mp3";
import mermaidsSpire from "../audio/Mermaids/spire.mp3";
import mermaidsWater from "../audio/Mermaids/openwater.mp3";
import mermaidsWaves from "../audio/Mermaids/gentlewaves.mp3";

import fuguePiano from "../audio/Classical/fugue16.mp3";
import fugueStrings from "../audio/Classical/fugue_sonata.mp3";
import fugueOrgan from "../audio/Classical/FugueInCMinor.mp3";
import pianoSonata1 from "../audio/Classical/pianosonata1.mp3";
import pianoSonata2 from "../audio/Classical/pianosonata2.mp3";
import zipadee from "../audio/Classical/zipadee.mp3";
import soldiersReturn from "../audio/Classical/soldiersreturn.mp3";

import attDemo from "../audio/Misc/att1_demo.mp3";
import homeImprov from "../audio/Misc/homeimprov.mp3";
import moonEarth from "../audio/Misc/moonearth.mp3";
import newlyweds from "../audio/Misc/newlyweds.mp3";
import researchFacility from "../audio/Misc/researchfacility3.mp3";

import makeMeFeel from "../audio/Vocal/make_me_feel.mp3";
import blueChristmas from "../audio/Vocal/blue_christmas_recording.mp3";
import godHelpTheOutcasts from "../audio/Vocal/god_help_the_outcasts.mp3";

const albums: Album[] = [
	{
		name: "Mermaids",
		icon: mermaidsCover,
		description:
			"Mermaids lets players explore an underwater world scarred by an ecological disaster. The score uses leitmotif to depict the forces of magic, corruption, and restoration.",
		songs: [
			{
				name: "Prologue",
				source: mermaidsTheme,
			},
			{
				name: "Open Water",
				source: mermaidsWater,
			},
			{
				name: "The Cave",
				source: mermaidsCave,
			},
			{
				name: "Music Garden",
				source: mermaidsMusicGarden,
			},
			{
				name: "The Spire",
				source: mermaidsSpire,
			},
			{
				name: "Ruins of a Lost Civilization",
				source: mermaidsRuins,
			},
			{
				name: "Gentle Waves",
				source: mermaidsWaves,
			},
		],
	},
	{
		name: "Black Oak Manor",
		description:
			"Black Oak Manor tasks players with investigating a mansion haunted by a monster. The score is informed by horror and noir scores of the 1950s.",
		icon: blackoakCover,
		songs: [
			{
				name: "Title Screen",
				source: blackOakTitle,
			},
			{
				name: "Exploration",
				source: blackOakExplore,
			},
		],
	},
	{
		name: "Classical Pieces",
		description:
			"These pieces were written in a classical style, either for a school project or simply for fun.",
		icon: classicalCover,
		songs: [
			{
				name: "Fugue for Piano",
				source: fuguePiano,
			},
			{
				name: "Fugue for Strings",
				source: fugueStrings,
			},
			{
				name: "Fugue for Organ",
				source: fugueOrgan,
			},
			{
				name: "Piano Sonata No. 1",
				source: pianoSonata1,
			},
			{
				name: "Piano Sonata No. 2",
				source: pianoSonata2,
			},
			{
				name: "Zip-a-dee doo da, Renaissance Madrigal",
				source: zipadee,
			},
			{
				name: "Soldier's Return",
				source: soldiersReturn,
			},
		],
	},
	{
		name: "Vocal Arrangements",
		description:
			"To demonstrate my arrangements for men's vocal ensemble, I record myself singing them.",
		icon: vocalCover,
		songs: [
			{
				name: "God Help the Outcasts - Alan Menken",
				source: godHelpTheOutcasts,
			},
			{
				name: "Make Me Feel - Janelle Monae",
				source: makeMeFeel,
			},
			{
				name: "Blue Christmas - Elvis Presley",
				source: blueChristmas,
			},
		],
	},
	{
		name: "Miscellaneous",
		description:
			"An assortment of compositions I've created over the years for a variety of reasons.",
		icon: miscCover,
		songs: [
			{
				name: "Home Improvisation - Title",
				source: homeImprov,
			},
			{
				name: "ATT Installation Ambience",
				source: attDemo,
			},
			{
				name: "The (sorta) Newlywed Game - Theme",
				source: newlyweds,
			},
			{
				name: "Moon / Earth",
				source: moonEarth,
			},
			{
				name: "Research Facility",
				source: researchFacility,
			},
		],
	},
];
export const Music: React.FunctionComponent = () => {
	return (
		<div className={styles.content}>
			<h1 className={styles.musicPageHeader}>Music</h1>
			<Section>
				<p>
					Music has been a passion throughout my life. I have been composing and
					arranging music since middle school, and in college I started joining
					vocal performance groups.
				</p>
				<p>
					I frequently contribute music to the games I work on. I write most
					often for orchestra, piano, or voice, but I've also done work with
					electronic music.
				</p>
			</Section>
			<Section header="Listen">
				<MusicPlayer albums={albums} autoplay={true} />
			</Section>
			<Section header="Education">
				<h3 className={styles.sectionTitle}>Georgia Institute of Technology</h3>
				<p className={styles.sectionSubtitle}>
					<span className={styles.line}>Minor Music (General) |2014|</span>
				</p>
				<p>
					I pursued a general music minor with an emphasis on composition during
					my undergraduate studies. In my subsequent master's degree, I
					researched the use of leitmotif in interactive settings.
				</p>
			</Section>
			<Section header="Work Experience">
				<h3 className={styles.sectionTitle}>CSE</h3>
				<p className={styles.sectionSubtitle}>
					<span className={styles.line}>Composer |2016|</span>
				</p>
				<p>I worked with</p>
				<h3 className={styles.sectionTitle}>The Stork Burnt Down</h3>
				<p className={styles.sectionSubtitle}>
					<span className={styles.line}>Co-Owner / Developer |2015-2017|</span>
				</p>
				<p>
					Worked with a small team to create and publish original games,
					including the viral hit Home Improvisation
				</p>
				<h3 className={styles.sectionTitle}>Shipwright Studios</h3>
				<p className={styles.sectionSubtitle}>Developer |2017|</p>
				<p>
					Tested and extended server infrastructure for networked multiplayer
					game.
				</p>
				<h3 className={styles.sectionTitle}>Primal Screen</h3>
				<p className={styles.sectionSubtitle}>Contractor |2015 - 2018|</p>
				<p>
					Worked alongside artists to create original games for children. Ported
					several Flash-based games to HTML5.
				</p>
			</Section>
			<Section header="Projects"></Section>
		</div>
	);
};
