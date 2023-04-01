import * as React from "react";
import Image from "next/image";

import styles from "styles/App.module.css";

import { TabGroup } from "lib/elements/TabGroup";
import { ContentSection } from "lib/elements/ContentSection";

import { standardTags, ProjectMetadata } from "lib/projects";
import { Page } from "lib/elements/Page";
import { ImageContentPreview } from "lib/elements/ImageContentPreview";
import { useRouter } from "next/router";

import { meta as BlackOakManorGame } from "./black-oak-manor";
import { meta as Dubio } from "./dubio";
import { meta as EpicLutes } from "./epic-lutes";
import { meta as HomeImprovisation } from "./home-improvisation";
import { meta as MermaidsGame } from "./mermaids";
import { meta as PBSGames } from "./pbs-games";
import { meta as Pedestria } from "./pedestria";
import { meta as Spacetime } from "./spacetime";
import { meta as Sunset } from "./sunset";
import { meta as TheOutbreak } from "./the-outbreak";
import { meta as TriggerParadox } from "./trigger-paradox";
import { meta as ClassicalMusic } from "./classical";
import { meta as OrchestralPieces } from "./orchestral-pieces";
import { meta as VocalArrangements } from "./vocal-arrangements";
import { meta as EarSketch } from "./ear-sketch";
import { meta as ACPPhoenixMural } from "./acp-phoenix-mural";
import { meta as Zentacle } from "./zentacle";
import { meta as LostTides } from "./lost-tides";
import { meta as ATTInstallation } from "./att-installation";
import { meta as ImpracticalJokers } from "./impractical-jokers";
import { meta as SesameStreetGames } from "./sesame-street";
import { meta as Portfolio } from "./portfolio";
import Head from "next/head";

export const allProjects: ProjectMetadata[] = [
	TheOutbreak,
	Dubio,
	VocalArrangements,
	HomeImprovisation,
	ImpracticalJokers,
	ACPPhoenixMural,
	PBSGames,
	Portfolio,
	LostTides,
	ClassicalMusic,
	Spacetime,
	Zentacle,
	SesameStreetGames,
	EpicLutes,
	MermaidsGame,
	BlackOakManorGame,
	ATTInstallation,
	Pedestria,
	EarSketch,
	OrchestralPieces,
	TriggerParadox,
	Sunset,
];

export const projectsBySlug: { [slug: string]: ProjectMetadata } =
	allProjects.reduce<{
		[slug: string]: ProjectMetadata;
	}>((all, current) => {
		all[current.slug] = current;
		return all;
	}, {});

const tabs = ["All", "Games", "Web", "Music", "Other"];
const tabTags = [
	null,
	standardTags.game,
	standardTags.web,
	standardTags.music,
	standardTags.misc,
];

export default function ProjectPage() {
	const router = useRouter();
	const queryTabIndex = Math.max(
		0,
		tabs.findIndex((tab) => router.query.projectType == tab)
	);

	const [selectedProjectTab, setSelectedProjectTab] =
		React.useState(queryTabIndex);

	if (selectedProjectTab != queryTabIndex) {
		setSelectedProjectTab(queryTabIndex);
	}

	return (
		<Page>
			<Head>
				<title>Projects</title>
			</Head>
			<TabGroup
				options={tabs}
				selectedOptionIndex={selectedProjectTab}
				onOptionSelected={(option, index) => {
					router.query.projectType = option;
					router.push({
						pathname: router.pathname,
						query: router.query,
					});
					setSelectedProjectTab(index);
				}}
			/>
			<ContentSection>
				<div className={styles.contentPreviewGrid}>
					{allProjects
						.filter((project) => {
							const tabTag = tabTags[selectedProjectTab];
							if (!tabTag) return true;

							return project.tags.includes(tabTag);
						})
						.map((project) => (
							<ImageContentPreview
								key={project.name}
								title={project.name}
								description={project.shortDescription}
								imageSrc={project.iconURL}
								href={`/projects/${project.slug}`}
							/>
						))}
				</div>
			</ContentSection>
		</Page>
	);
}
