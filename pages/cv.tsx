import * as React from "react";
import Link from "next/link";
import Image from "next/image";

import { ContentSection } from "lib/elements/ContentSection";
import { Page } from "lib/elements/Page";
import { ButtonLink } from "lib/elements/ButtonLink";

import portrait from "images/me_7.jpg";
import styles from "styles/CV.module.css";
import logoImage from "images/aj_logo_white.png";

export default function CV() {
	return (
		<div className={styles.page}>
			<div className={styles.columnSmall}>
				<div className={styles.nameArea}>
					<Image className={styles.nameLogo} alt="AJ" src={logoImage} />
					<h1 className={styles.nameText}>AJ Kolenc</h1>
				</div>
				<p className={styles.subtitle}>
					Freelance game & web developer, hobbyist&nbsp;musician
				</p>
				<h3></h3>
			</div>
		</div>
	);
}
