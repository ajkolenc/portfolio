import * as React from "react";
import { Link } from "react-router-dom";
import * as styles from "./BackButton.style.css";

export const BackButton: React.FunctionComponent = () => {
	return (
		<button className={styles.button}>
			<div className={styles.buttonTextContainer}>
				<span className={styles.buttonText}>← Back</span>
			</div>
		</button>
	);
};
