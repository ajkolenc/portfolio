import Image, { StaticImageData } from "next/image";
import styles from "styles/App.module.css";

export interface TextContentPreviewProps {
	title: string;
	subtitle: string;
	description: string;
	image?: string | StaticImageData;
}
export const TextContentPreview: React.FunctionComponent<
	TextContentPreviewProps
> = ({ title, subtitle, description, image }) => {
	return (
		<div className={styles.textContentPreview}>
			{image && (
				<Image className={styles.textContentPreviewImage} src={image} alt="" />
			)}
			<div className={styles.textContentPreviewDescription}>
				<h1 className={styles.textContentPreviewTitle}>{title}</h1>
				<p className={styles.textContentPreviewSubtitle}>{subtitle}</p>
				<p>{description}</p>
			</div>
		</div>
	);
};
