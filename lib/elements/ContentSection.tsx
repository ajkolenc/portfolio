import styles from "styles/App.module.css";

export interface ContentSectionProps extends React.PropsWithChildren {
	className?: string;
}
export const ContentSection: React.FunctionComponent<ContentSectionProps> = ({
	className,
	children,
}) => {
	return (
		<section className={`${styles.contentSection} ${className ?? ""}`}>
			{children}
		</section>
	);
};
