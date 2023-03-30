import { StaticImageData } from "next/image";
import Link from "next/link";
import * as React from "react";
import styles from "styles/App.module.css";

export interface ContentPreviewProps {
	title: string;
	description?: string;
	imageSrc: StaticImageData;
	href: string;
}
export const ImageContentPreview: React.FunctionComponent<
	ContentPreviewProps
> = ({ title, href, imageSrc, description }) => {
	return (
		<Link
			className={styles.imageContentPreview}
			href={href}
			style={{ backgroundImage: `url(${imageSrc.src})` }}
		>
			<div className={styles.imageContentPreviewLabel}>
				<h1 className={styles.imageContentPreviewTitle}>{title}</h1>
				{description && (
					<p className={styles.imageContentPreviewDescription}>{description}</p>
				)}
			</div>
		</Link>
	);
};
