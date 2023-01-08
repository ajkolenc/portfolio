import * as React from "react";
import styles from "./App.module.css";
import { TabGroup } from "./elements/TabGroup";
import logoImage from "images/aj_logo.png";
import { allProjects } from "./projects";

const tabs = ["All", "Games", "Music", "Other"];

export const App: React.FunctionComponent = () => {
	const [selectedProjectTab, setSelectedProjectTab] = React.useState(0);

	return (
		<div>
			<ContentSection>
				<img className={styles.websiteLogo} src={logoImage} />
				<h1 className={styles.websiteTitle}>AJ Kolenc</h1>
				<p className={styles.websiteSubtitle}>
					Freelance game & web developer, hobbyist&nbsp;musician
				</p>
			</ContentSection>
			<ContentSection backgroundClass={styles.navContentSection}>
				<nav className={styles.navLinks}>
					<a className={styles.selected} href="projects">
						Projects
					</a>
					<a href="blog">Blog</a>
					<a href="contact">Contact</a>
					<a href="cv">CV</a>
				</nav>
			</ContentSection>
			<TabGroup
				options={tabs}
				selectedOptionIndex={selectedProjectTab}
				onOptionSelected={(option, index) => setSelectedProjectTab(index)}
			/>
			<ContentSection>
				<div className={styles.contentPreviewGrid}>
					{allProjects.map((project) => (
						<ImageContentPreview
							title={project.name}
							description={project.shortDescription}
							imageSrc={project.tileURL}
						/>
					))}
				</div>
			</ContentSection>
			{/* <ContentSection>
				<div className={styles.contentPreviewList}>
					<TextContentPreview
						title="Home Improvisation"
						subtitle="Built in Unity | Local and Online Multiplayer | VR Support"
						description="Build IKEA furniture without instructions. Blah blah blah blah blah blah
						blah blah blah"
						imageSrc="test"
					/>
					<TextContentPreview
						title="Home Improvisation"
						subtitle="Built in Unity | Local and Online Multiplayer | VR Support"
						description="Build IKEA furniture without instructions. Blah blah blah blah blah blah
						blah blah blah"
						imageSrc=""
					/>
					<TextContentPreview
						title="Home Improvisation"
						subtitle="Built in Unity | Local and Online Multiplayer | VR Support"
						description="Build IKEA furniture without instructions. Blah blah blah blah blah blah
						blah blah blah"
						imageSrc="test"
					/>
					<TextContentPreview
						title="Home Improvisation"
						subtitle="Built in Unity | Local and Online Multiplayer | VR Support"
						description="Build IKEA furniture without instructions. Blah blah blah blah blah blah
						blah blah blah"
						imageSrc="test"
					/>
				</div>
			</ContentSection> */}
		</div>
	);
};

export interface ContentPreviewProps {
	title: string;
	description?: string;
	imageSrc: string;
}
export const ImageContentPreview: React.FunctionComponent<
	ContentPreviewProps
> = ({ title, imageSrc, description }) => {
	return (
		<div
			className={styles.imageContentPreview}
			style={{ backgroundImage: `url(${imageSrc})` }}
		>
			<div className={styles.imageContentPreviewLabel}>
				<h1 className={styles.imageContentPreviewTitle}>{title}</h1>
				{description && (
					<p className={styles.imageContentPreviewDescription}>{description}</p>
				)}
			</div>
		</div>
	);
};

export interface TextContentPreviewProps {
	title: string;
	subtitle: string;
	description: string;
	imageSrc?: string;
}
export const TextContentPreview: React.FunctionComponent<
	TextContentPreviewProps
> = ({ title, subtitle, description, imageSrc }) => {
	return (
		<div className={styles.textContentPreview}>
			{imageSrc && (
				<img className={styles.textContentPreviewImage} src={imageSrc} />
			)}
			<div className={styles.textContentPreviewDescription}>
				<h1 className={styles.textContentPreviewTitle}>{title}</h1>
				<p className={styles.textContentPreviewSubtitle}>{subtitle}</p>
				<p>{description}</p>
			</div>
		</div>
	);
};

export interface ContentSectionProps {
	backgroundClass?: string;
}
export const ContentSection: React.FunctionComponent<ContentSectionProps> = ({
	backgroundClass,
	children,
}) => {
	return (
		<section className={`${styles.contentSection} ${backgroundClass ?? ""}`}>
			{children}
		</section>
	);
};
