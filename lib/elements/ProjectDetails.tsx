import { ProjectMetadata } from "lib/projects";
import Head from "next/head";
import Image, { StaticImageData } from "next/image";
import * as React from "react";

import styles from "styles/App.module.css";
import { Award, AwardProps } from "./Award";
import { ButtonLink } from "./ButtonLink";
import { ContentSection } from "./ContentSection";
import { Divider } from "./Divider";
import { Page } from "./Page";
import { VideoPlayer } from "./VideoPlayer";

export interface ProjectPageProps extends React.PropsWithChildren {
	meta: ProjectMetadata;
	links?: { name: string; href: string }[];
	info?: { title: string; data: string | string[] }[];
	video?: {
		src: string;
		native?: boolean;
	};
	imageURL?: StaticImageData;
	awards?: AwardProps[];
}
export default function ProjectDetails({
	meta,
	links,
	info,
	video,
	imageURL,
	awards,
	children,
}: ProjectPageProps) {
	return (
		<Page>
			<Head>
				<title>{meta.name}</title>
				<meta property="og:title" content={meta.name} key="title" />
				<meta property="og:image" content={meta.iconURL.src} key="image" />
				<meta
					property="og:description"
					content={meta.shortDescription}
					key="description"
				/>
			</Head>
			<ContentSection className={styles.projectSection}>
				<h1>{meta.name}</h1>
				<h2>
					{meta.organization} | {meta.releaseYear || "Ongoing"}
				</h2>
				<div className={styles.projectColumns}>
					{(video || links || info) && (
						<div className={styles.projectInfoColumn}>
							{video &&
								(video.native ? (
									<video
										className={styles.videoEmbed}
										// width="480"
										// height="260"
										controls
									>
										<source src={video.src} />
									</video>
								) : (
									<VideoPlayer
										className={styles.videoEmbed}
										style={{ aspectRatio: "16 / 9" }}
										width="480"
										height="260"
										light
										url={video.src}
										title={meta.name}
										allowFullScreen
										frameBorder={0}
									/>
								))}
							{imageURL && (
								<Image className={styles.projectImage} src={imageURL} alt="" />
							)}
							{/* {!links && <Divider />} */}
							{links && (
								<div className={styles.horizontalGroup}>
									{links.map(({ name, href }) => (
										<ButtonLink key={name} href={href} target="_blank">
											{name}
										</ButtonLink>
									))}
								</div>
							)}
							{info && (
								<table className={styles.projectInfoTable}>
									<tbody>
										{info.map(({ title, data }) => (
											<tr key={title}>
												<td>{title}</td>
												<td>
													{Array.isArray(data) ? (
														data.map((datum) => (
															<span key={datum}>
																{datum}
																<br />
															</span>
														))
													) : (
														<span>{data}</span>
													)}
												</td>
											</tr>
										))}
									</tbody>
								</table>
							)}
						</div>
					)}
					<div className={styles.projectDescription}>
						{" "}
						{awards && awards.length > 0 && (
							<div className={styles.projectAwards}>
								{awards.map((award) => (
									<Award key={`${award.event}|${award.category}`} {...award} />
								))}
							</div>
						)}
						{children}
					</div>
				</div>
			</ContentSection>
		</Page>
	);
}
