import * as React from "react";

import * as styles from "./App.style.css";
import railGif from "../images/railriders_optimized.gif";
import codingGif from "../images/coding_optimized.gif";
import musicGif from "../images/music_cropped.gif";
import homeImprovGif from "../images/home_improv.gif";

import facebookIcon from "../images/facebook_icon_white.png";
import twitterIcon from "../images/twitter_icon_white.png";
import emailIcon from "../images/email_icon_white.png";
import githubIcon from "../images/github_icon_white.png";
import linkedInIcon from "../images/linkedin_icon_white.png";
import { Link } from "react-router-dom";
import { Divider, Section } from "./App";

export const Home: React.FunctionComponent = () => {
	return (
		<div className={styles.content}>
			<Section header="What I Do" innerContentStyle={styles.buttonContainer}>
				<SkillButton
					class={styles.gameButton}
					path="/games"
					title="Game Development"
					subtitle="Programmer & Designer"
				/>
				<SkillButton
					class={styles.webButton}
					path="/web"
					title="Web Development"
					subtitle="Front-End & Server-Side"
				/>
				<SkillButton
					class={styles.musicButton}
					path="/music"
					title="Music"
					subtitle="Composer & Performer"
				/>
			</Section>
			<Section
				header="What I've Worked On"
				innerContentStyle={styles.projectContainer}
			>
				<ProjectButton
					class={styles.gameButton}
					title="Home Improvisation"
					path="/projects/homeImprov"
					gif={homeImprovGif}
				/>
				<ProjectButton
					class={styles.webButton}
					title="The Outbreak"
					path="/projects/outbreak"
					gif={""}
				/>
				<ProjectButton
					class={styles.musicButton}
					title="PBS Games"
					path="/projects/pbsgames"
					gif={railGif}
				/>
			</Section>
		</div>
	);
};

interface SkillButtonProps {
	title: string;
	subtitle: string;
	path: string;
	class?: string;
}
const SkillButton: React.FunctionComponent<SkillButtonProps> = (props) => {
	return (
		<Link to={props.path} className={[styles.button, props.class].join(" ")}>
			<p className={styles.buttonTitle}>{props.title}</p>
			<span className={styles.buttonSubtitle}>{props.subtitle}</span>
		</Link>
	);
};

interface FunctionButtonProps {
	title: string;
	path: string;
	gif: string;
	class?: string;
}
const ProjectButton: React.FunctionComponent<FunctionButtonProps> = (props) => {
	return (
		<div className={[styles.project, props.class].join(" ")}>
			<div
				className={styles.projectBackground}
				style={{ backgroundImage: `url(${props.gif})` }}
			/>
			<p className={styles.projectTitle}>{props.title}</p>
		</div>
	);
};
