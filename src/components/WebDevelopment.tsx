import * as React from "react";
import * as styles from "./App.style.css";
import { BackButton } from "./BackButton";
import { Divider, Section } from "./App";

export const WebDevelopment: React.FunctionComponent = () => {
	React.useEffect(() => {
		//window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
		window.scrollTo(0, 0);
	}, []);

	return (
		<div className={styles.content}>
			<h1 className={styles.webPageHeader}>Web Development</h1>
			<Section>
				<p>
					I have been working with web technologies since I first learned how to
					program. In recent years, I have gained skills as a server-side web
					developer.
				</p>
				<p>
					I frequently contribute music to the games I work on. I usually write
					for orchestra, piano, or voice, but I've also done work with
					electronic music.
				</p>
			</Section>
			<Section header="Technologies"></Section>
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
				<h3 className={styles.sectionTitle}>FIX Health</h3>
				<p className={styles.sectionSubtitle}>
					<span className={styles.line}>CTO |2018 - present|</span>
					<span className={styles.line}>Director of Development |2018|</span>
				</p>
				<p>
					FIX is a company dedicated to using the motivating power of games to
					Developed and maintained a multiplayer zombie-themed fitness game, the
					Outbreak. Spearheaded and managed the development of multiple new
					products.
				</p>
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
