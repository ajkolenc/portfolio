import * as React from "react";
import styles from "./App.module.css";
import { TabGroup } from "./elements/TabGroup";

const tabs = ["All", "Games", "Music", "Other"];

export const App: React.FunctionComponent = () => {
	const [selectedProjectTab, setSelectedProjectTab] = React.useState(0);

	return (
		<div className={styles.content}>
			<header>
				<div className={styles.headerText}>
					<h1 className={styles.websiteTitle}>AJ Kolenc</h1>
					<p className={styles.websiteSubtitle}>
						I work on games, music, and lots of other stuff.
					</p>
				</div>
				<nav>
					<a className={styles.selected} href="projects">
						Projects
					</a>
					<a href="blog">Blog</a>
				</nav>
			</header>
			<section>
				<TabGroup
					options={tabs}
					selectedOptionIndex={selectedProjectTab}
					onOptionSelected={(option, index) => setSelectedProjectTab(index)}
				/>
				<div className={styles.contentPreviewList}>
					<ContentPreview
						title="Home Improvisation"
						subtitle="Built in Unity | Local and Online Multiplayer | VR Support"
						description="Build IKEA furniture without instructions. Blah blah blah blah blah blah
						blah blah blah"
						imageSrc="test"
					/>
					<ContentPreview
						title="Home Improvisation"
						subtitle="Built in Unity | Local and Online Multiplayer | VR Support"
						description="Build IKEA furniture without instructions. Blah blah blah blah blah blah
						blah blah blah"
						imageSrc=""
					/>
					<ContentPreview
						title="Home Improvisation"
						subtitle="Built in Unity | Local and Online Multiplayer | VR Support"
						description="Build IKEA furniture without instructions. Blah blah blah blah blah blah
						blah blah blah"
						imageSrc="test"
					/>
					<ContentPreview
						title="Home Improvisation"
						subtitle="Built in Unity | Local and Online Multiplayer | VR Support"
						description="Build IKEA furniture without instructions. Blah blah blah blah blah blah
						blah blah blah"
						imageSrc="test"
					/>
				</div>
			</section>
		</div>
	);
};

export interface ContentPreviewProps {
	title: string;
	subtitle: string;
	description: string;
	imageSrc?: string;
}
export const ContentPreview: React.FunctionComponent<ContentPreviewProps> = ({
	title,
	subtitle,
	description,
	imageSrc,
}) => {
	return (
		<div className={styles.contentPreview}>
			{imageSrc && (
				<img className={styles.contentPreviewImage} src={imageSrc} />
			)}
			<div className={styles.contentPreviewDescription}>
				<h1 className={styles.contentPreviewTitle}>{title}</h1>
				<p className={styles.contentPreviewSubtitle}>{subtitle}</p>
				<p>{description}</p>
			</div>
		</div>
	);
};
