import * as React from "react";
import {
	BrowserRouter as Router,
	Route,
	RouteProps,
	Link,
} from "react-router-dom";

import { Home } from "./Home";

import * as styles from "./App.style.css";
import * as slideStyles from "../transitions/SlideTransition.style.css";

import railGif from "../images/railriders_optimized.gif";
import codingGif from "../images/coding_optimized.gif";
import musicGif from "../images/music_cropped.gif";
import homeImprovGif from "../images/home_improv.gif";

import facebookIcon from "../images/facebook_icon_white.png";
import twitterIcon from "../images/twitter_icon_white.png";
import emailIcon from "../images/email_icon_white.png";
import githubIcon from "../images/github_icon_white.png";
import linkedInIcon from "../images/linkedin_icon_white.png";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { GameDevelopment } from "./GameDevelopment";
import { SlideTransition } from "../transitions/SlideTransition";
import { Music } from "./Music";
import { WebDevelopment } from "./WebDevelopment";

export const App: React.FunctionComponent = () => {
	return (
		<Router>
			<div className={styles.body}>
				<div className={styles.main}>
					<Header />
					<Routes />
				</div>
				<div className={styles.footer}>
					<span className={styles.footerHeader}>Where to Find Me</span>
					<SocialIcon
						className={styles.twitterIcon}
						socialLink="http://www.twitter.com/ajkolenc"
						icon={twitterIcon}
					/>
					<SocialIcon
						className={styles.emailIcon}
						socialLink="mailto:ajkolenc@gmail.com"
						icon={emailIcon}
					/>
					<SocialIcon
						className={styles.linkedInIcon}
						socialLink="https://www.linkedin.com/in/ajkolenc/"
						icon={linkedInIcon}
					/>
					<SocialIcon
						className={styles.githubIcon}
						socialLink="https://github.com/ajkolenc"
						icon={githubIcon}
					/>
				</div>
			</div>
		</Router>
	);
};

export const Header: React.FunctionComponent = () => {
	const isHome = false;
	return (
		<Link
			to="/"
			replace={isHome}
			className={styles.header}
			style={isHome ? null : { fontSize: "1.7em" }}
		>
			AJ Kolenc
		</Link>
	);
};

export const Routes: React.FunctionComponent = () => {
	const isHome = false;
	return (
		<div
			className={[
				styles.container,
				isHome ? slideStyles.slideBack : slideStyles.slideForward,
			].join(" ")}
		>
			<Route key="gamedev" path="/games">
				{(props: any) => (
					<AppPage {...props} isSubpage={true}>
						<GameDevelopment />
					</AppPage>
				)}
			</Route>
			<Route key="webdev" path="/web">
				{(props: any) => (
					<AppPage {...props} isSubpage={true}>
						<WebDevelopment />
					</AppPage>
				)}
			</Route>
			<Route key="music" path="/music">
				{(props: any) => (
					<AppPage {...props} isSubpage={true}>
						<Music />
					</AppPage>
				)}
			</Route>
			<Route key="home" path="/">
				{(props: any) => (
					<AppPage {...props} isSubpage={false}>
						<Home />
					</AppPage>
				)}
			</Route>
		</div>
	);
};

interface AppPageProps {
	isSubpage: boolean;
}
export const AppPage: React.FunctionComponent<AppPageProps> = (props) => {
	return (
		<SlideTransition in={false}>{props.children}</SlideTransition>
	);
};

interface SocialIconProps {
	className?: string;
	socialLink: string;
	icon: string;
}
const SocialIcon: React.FunctionComponent<SocialIconProps> = (props) => {
	return (
		<a
			target="_blank"
			className={props.className ?? styles.socialIcon}
			href={props.socialLink}
		>
			<img src={props.icon} />
		</a>
	);
};

export interface SectionProps {
	header?: string;
	innerContentStyle?: string;
}
export const Section: React.FunctionComponent<SectionProps> = (props) => {
	const sectionStyle = props.header ? styles.section : styles.titlelessSection;

	const contentStyle = styles.sectionContent;

	return (
		<div className={sectionStyle}>
			{props.header && <h2 className={styles.sectionHeader}>{props.header}</h2>}
			<div className={contentStyle}>
				<div className={props.innerContentStyle ?? styles.sectionInnerContent}>
					{props.children}
				</div>
			</div>
		</div>
	);
};

export const Divider: React.FunctionComponent = () => {
	return <div className={styles.divider}></div>;
};
