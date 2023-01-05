import * as React from "react";

import * as appStyles from "./App.style.css";
import * as styles from "./ProjectDetails.style.css";
import { Project } from "./projects/types";

export interface ProjectDetailsProps {
	project: Project;
	roles: string[];
	links: {
		name: string;
		url: string;
	}[];
	platforms?: string[];
	tech?: string[];
}
export const ProjectDetails: React.FunctionComponent<ProjectDetailsProps> = (
	props
) => {
	const shortDetails = (
		<div className={styles.projectShortDetails}>
			<img className={styles.projectDetailsIcon} src={props.project.iconURL} />
			<div className={styles.projectShortDetailsSections}>
				{props.roles && (
					<ShortDetailsSection title="roles">
						{props.roles.map((role, index) => {
							return (
								<span key={role}>
									{role} {index < props.roles.length - 1 && <br />}
								</span>
							);
						})}
					</ShortDetailsSection>
				)}
				{props.tech && (
					<ShortDetailsSection title="tech">
						{props.tech.map((tech, index) => {
							return (
								<span key={tech}>
									{tech} {index < props.tech.length - 1 && <br />}
								</span>
							);
						})}
					</ShortDetailsSection>
				)}
				{props.platforms && (
					<ShortDetailsSection title="platforms">
						<span key="project-platforms">{props.platforms.join(" | ")}</span>
						{/* {props.platforms.map((platform, index) => {
						return (
								{platform} {index < props.platforms.length - 1 && <br />}
							</span>
						);
					})} */}
					</ShortDetailsSection>
				)}
				{props.links && (
					<ShortDetailsSection title="links">
						{props.links.map((link) => {
							return (
								<a key={link.url} href={link.url} target="_blank">
									{link.name} ⇱
									<br />
								</a>
							);
						})}
					</ShortDetailsSection>
				)}
			</div>
		</div>
	);

	const hasShortDetails = props.roles.length + props.links.length > 0;
	return (
		<div className={styles.projectDetails}>
			{hasShortDetails && shortDetails}
			<div className={styles.projectLongDetails}>{props.children}</div>
		</div>
	);
};

const ShortDetailsSection: React.FunctionComponent<{ title: string }> = ({
	title,
	children,
}) => {
	return (
		<div className={styles.projectShortDetailsSection}>
			<span className={appStyles.subheader} style={{ fontSize: "0.8em" }}>
				{title}
			</span>
			{children}
		</div>
	);
};
