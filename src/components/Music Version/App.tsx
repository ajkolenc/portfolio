import * as React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import * as styles from "./App.style.css";

import pulldownImage from "../../images/pulldown-hamburger.png";
import { Link, useLocation } from "react-router-dom";
import { Categories, Category, Project } from "./projects/types";
import { allProjects, projectsBySlug } from "./projects";
import { CSSTransitionProps } from "react-transition-group/CSSTransition";
import { project } from "components/App.style.css";
import {
	BlackOakManorAlbum,
	BlackOakManorMusic,
} from "./projects/music/black-oak-manor";
import { Album } from "./projects/music";
import { MusicPlayer } from "./MusicPlayer";

export const App: React.FunctionComponent = () => {
	const [isExtended, setExtended] = React.useState(false);
	const [playingAlbum, setPlayingAlbum] = React.useState<Album>(null);
	const [currentTrackIndex, setCurrentTrackIndex] = React.useState(0);

	const location = useLocation();
	const path = location.pathname.split("/").filter((part) => part.length > 0);

	let category =
		path.length > 0 ? Categories[path[0] as keyof typeof Categories] : null;

	category = category ?? Categories.home;

	let project = path.length > 1 ? projectsBySlug[path[1]] : null; //BlackOakManorMusic;

	return (
		<div className={styles.body}>
			<TransitionGroup>
				<FadeTransition key={`${category.slug}-background`}>
					<div className={`${styles.background} ${category.backgroundClass}`} />
				</FadeTransition>
			</TransitionGroup>
			<header
				className={`${styles.headerArea} ${isExtended ? styles.extended : ""}`}
			>
				<div className={styles.socialArea}></div>
				<div className={styles.navigation}>
					<Link className={styles.subheader} to="/">
						AJ Kolenc
					</Link>
					<Breadcrumbs category={category} project={project} />
					<img
						className={`${styles.menuButton} ${
							isExtended ? styles.extended : ""
						}`}
						style={{ backgroundImage: `url(${pulldownImage})` }}
						onClick={() => setExtended(!isExtended)}
					/>
				</div>
			</header>
			<TransitionGroup
				id="contentContainer"
				className={`${styles.content} ${isExtended ? styles.extended : ""}`}
			>
				<FadeUpTransition
					key={`${project ? project.slug : category.slug}-content`}
					onEnter={(node) => {
						node.parentElement.scrollTo({ top: 0, behavior: "smooth" });
					}}
					onExit={(node) => {
						node.style.top = "0px";
						node.style.left = "0px";
						node.style.right = "0px";
						node.style.position = "absolute";
						node.style.transitionDelay = "0ms";
					}}
					delay={150}
				>
					{project ? (
						project.renderPage({
							project,
							playTrack: (album, trackIndex) => {
								setPlayingAlbum(album);
								setCurrentTrackIndex(trackIndex);
							},
						})
					) : (
						<ProjectList
							projects={allProjects.filter(
								(project) =>
									project.category == category || category == Categories.home
							)}
						/>
					)}
				</FadeUpTransition>
			</TransitionGroup>
			{playingAlbum && (
				<MusicPlayer
					album={playingAlbum}
					trackIndex={currentTrackIndex}
					onClose={() => setPlayingAlbum(null)}
				/>
			)}
		</div>
	);
};

export interface ProjectListProps {
	projects: Project[];
}
export const ProjectList: React.FunctionComponent<ProjectListProps> = ({
	projects,
}) => {
	return (
		<TransitionGroup className={styles.projectList}>
			{projects.map((project, index) => {
				const delay = 500 * (-1 / (index * 0.3 + 1) + 1);
				return (
					<FadeUpTransition
						key={`${project.slug}-square`}
						appear={true}
						delay={delay}
					>
						<ProjectSquare project={project} />
					</FadeUpTransition>
				);
			})}
		</TransitionGroup>
	);
};

export interface BreadcrumbsProps {
	category: Category;
	project?: Project;
}
export const Breadcrumbs: React.FunctionComponent<BreadcrumbsProps> = ({
	category,
	project,
}) => {
	const categoryNavId = `${category.slug}-navlink`;
	const dotNavId = `${category.slug}-dot`;

	return (
		<nav className={styles.breadcrumbs}>
			<TransitionGroup>
				<FadeUpTransition
					id={categoryNavId}
					key={`${category.slug}-nav`}
					onExit={(node) => {
						node.style.left = "0px";
						node.style.position = "absolute";
					}}
				>
					<Link
						to={category.slug}
						className={`${styles.header} ${styles.breadcrumbLink}`}
					>
						{category.name}
					</Link>
				</FadeUpTransition>
				{project && (
					<FadeUpTransition
						id={dotNavId}
						key={dotNavId}
						onExit={(node) => {
							const categoryNav = document.getElementById(categoryNavId);
							node.style.left = categoryNav.offsetWidth + "px";
							node.style.position = "absolute";
						}}
					>
						<span className={styles.breadcrumbsDot}>•</span>
					</FadeUpTransition>
				)}
				{project && (
					<FadeUpTransition
						key={`${project.slug}-nav`}
						onExit={(node) => {
							const categoryNav = document.getElementById(categoryNavId);
							const dotNav = document.getElementById(dotNavId);
							node.style.left =
								node.offsetLeft == 0
									? "0px"
									: categoryNav.offsetWidth + dotNav.offsetWidth + "px";
							node.style.position = "absolute";
						}}
					>
						<Link
							id="projectLabel"
							to={`${category.slug}/${project.slug}`}
							className={`${styles.header} ${styles.breadcrumbLink}`}
						>
							{project.name}
						</Link>
					</FadeUpTransition>
				)}
			</TransitionGroup>
		</nav>
	);
};

export type FadeUpProps = CSSTransitionProps & {
	delay?: number;
};
export const FadeUpTransition: React.FunctionComponent<
	Partial<CSSTransitionProps>
> = ({ children, delay, ...props }) => {
	delay = delay ?? 0;
	return (
		<CSSTransition
			classNames={{
				appear: styles.fadeUpEnter,
				appearActive: styles.fadeUpEnterActive,
				enter: styles.fadeUpEnter,
				enterActive: styles.fadeUpEnterActive,
				exit: styles.fadeUpExit,
				exitActive: styles.fadeUpExitActive,
			}}
			timeout={500 + delay}
			mountOnEnter={true}
			unmountOnExit={true}
			onEntering={(node) => (node.style.transitionDelay = `${delay}ms`)}
			{...props}
		>
			{children}
		</CSSTransition>
	);
};

export const FadeTransition: React.FunctionComponent<
	Partial<CSSTransitionProps>
> = ({ children, ...props }) => {
	return (
		<CSSTransition
			classNames={{
				appear: styles.fadeEnter,
				appearActive: styles.fadeEnterActive,
				enter: styles.fadeEnter,
				enterActive: styles.fadeEnterActive,
				exit: styles.fadeExit,
				exitActive: styles.fadeExitActive,
			}}
			timeout={1000}
			{...props}
		>
			{children}
		</CSSTransition>
	);
};

export interface ProjectSquareProps {
	project: Project;
}
export const ProjectSquare: React.FunctionComponent<ProjectSquareProps> = (
	props
) => {
	const projectPath = `${props.project.category.slug}/${props.project.slug}`;

	let sizeClass = "";
	switch (props.project.size) {
		case "wide":
			sizeClass = styles.wide;
			break;
		case "tall":
			sizeClass = styles.tall;
			break;
	}

	return (
		<div className={`${styles.projectSquare} ${sizeClass}`}>
			<div
				className={[
					styles.projectSquareContent,
					props.project.category.backgroundClass,
				].join(" ")}
			>
				<Link
					to={projectPath}
					className={`${styles.projectSquareIcon}`}
					style={{
						backgroundImage: `url(${
							props.project.tileURL ?? props.project.iconURL
						})`,
					}}
				>
					{/* <img className={styles.projectIcon} src={props.project.iconURL} /> */}
				</Link>
				{/* <img className={styles.projectIcon} src={props.project.iconURL} /> */}
				<div className={`${styles.projectSquareInfo}`}>
					<div
						className={`${styles.projectSquareInfoBackground} ${props.project.category.titleBackgroundClass}`}
					></div>
					<Link to={props.project.category.slug} className={styles.subheader}>
						{props.project.category.name}
					</Link>
					<Link to={projectPath} className={styles.header}>
						{props.project.name}
					</Link>
				</div>
			</div>
		</div>
	);
};
