import * as React from "react";

import styles from "styles/App.module.css";

import awardBranch from "images/award-branch.png";
import Image from "next/image";

export interface AwardProps {
	placement: string;
	event: string;
	category?: string;
}
export const Award: React.FunctionComponent<AwardProps> = ({
	placement,
	event,
	category,
}) => {
	return (
		<div className={styles.projectAward}>
			<Image
				className={styles.projectAwardBranch}
				src={awardBranch}
				alt="branch"
			/>
			<div className={styles.projectAwardText}>
				<p className={styles.projectAwardPlacement}>{placement}</p>
				<p className={styles.projectAwardEvent}>{event}</p>
				{category && <p className={styles.projectAwardCategory}>{category}</p>}
			</div>
			<Image
				className={`${styles.projectAwardBranch} ${styles.right}`}
				src={awardBranch}
				alt="branch"
			/>
		</div>
	);
};
