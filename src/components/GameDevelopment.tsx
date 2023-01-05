import * as React from "react";
import * as styles from "./App.style.css";
import { BackButton } from "./BackButton";
import { Divider, Section } from "./App";

export const GameDevelopment: React.FunctionComponent = () => {
	React.useEffect(() => {
		console.log("scroll top");
		//window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
		window.scrollTo(0, 0);
	}, []);
	return (
		<div className={styles.content}>
			<h1 className={styles.gamePageHeader}>Game Development</h1>
			<Section>
				<p>
					I have been working professionally in the game industry for 5 years.
					In that time I have worked with small studios on innovative ideas and
					sharpened my skills as a programmer and designer.
				</p>
				<p>
					I enjoy exploring unconventional ideas through games. I'm interested
					in how games can bring people together in novel ways and have focused
					on making accessible experiences.
				</p>
			</Section>
			<Section header="Education">
				<h3 className={styles.sectionTitle}>Georgia Institute of Technology</h3>
				<p className={styles.sectionSubtitle}>
					<span className={styles.line}>MS Digital Media |2015|</span>
					<span className={styles.line}>BS Computational Media |2014|</span>
				</p>
				<p>
					Studied game design and media theory. Worked as a project manager in a
					lab dedicated to studying emergent behavior in games.
				</p>
			</Section>
			<Section header="Work Experience">
				<h3 className={styles.sectionTitle}>FIX Health</h3>
				<p className={styles.sectionSubtitle}>
					<span className={styles.line}>CTO |2018 - present|</span>
					<span className={styles.line}>Director of Development |2018|</span>
				</p>
				<p>
					I develop and maintain a multiplayer zombie-themed fitness game, the
					Outbreak. I have also spearheaded and managed the development of
					multiple new products, including Lost Tides.
				</p>
				<h3 className={styles.sectionTitle}>The Stork Burnt Down</h3>
				<p className={styles.sectionSubtitle}>
					<span className={styles.line}>Co-Owner / Developer |2015-2017|</span>
				</p>
				<p>
					I worked with a small, independent team to create and publish original
					games, including the viral hit Home Improvisation.
				</p>
				<h3 className={styles.sectionTitle}>Sparpweed</h3>
				<p className={styles.sectionSubtitle}>
					<span className={styles.line}>Remote Developer |2015 - present|</span>
					<span className={styles.line}>Development Intern |2014|</span>
				</p>
				<p>
					Working on a minimalist puzzle platformer, Dubio. As an intern, I
					developed the virtual reality prototype Pedestria and tools for artist
					experimentation.
				</p>
				<h3 className={styles.sectionTitle}>Primal Screen</h3>
				<p className={styles.sectionSubtitle}>Contractor |2015 - 2018|</p>
				<p>
					Worked alongside artists to create original games for children. Ported
					several Flash-based games to HTML5.
				</p>
				<h3 className={styles.sectionTitle}>Shipwright Studios</h3>
				<p className={styles.sectionSubtitle}>Developer |2017|</p>
				<p>
					I wrote unit tests and extended server infrastructure for a networked
					multiplayer game.
				</p>
				<h3 className={styles.sectionTitle}>Cartoon Network Digital</h3>
				<p className={styles.sectionSubtitle}>QA Intern |2013|</p>
				<p>I tested dozens of games for web and mobile platforms.</p>
			</Section>
			<Section header="Projects"></Section>
		</div>
	);
};
