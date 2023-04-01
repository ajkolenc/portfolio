import * as React from "react";

import Image from "next/image";
import Link from "next/link";
import { NextRouter, useRouter } from "next/router";

import { MusicContext, useMusicState } from "lib/contexts/MusicContext";
import { ContentSection } from "./ContentSection";

import styles from "styles/App.module.css";

import logoImage from "images/aj_logo.png";
import emailIcon from "images/email_icon_white.png";
import linkedInIcon from "images/linkedin_icon_white.png";
import twitterIcon from "images/twitter_icon_white.png";
import githubIcon from "images/github_icon_white.png";

function isOnPage(pageName: string, router: NextRouter): boolean {
	return router.pathname.startsWith(`/${pageName}`);
}

function isAtHome(router: NextRouter): boolean {
	return router.pathname == "/";
}

export interface PageProps extends React.PropsWithChildren {}
export const Page: React.FunctionComponent<PageProps> = ({ children }) => {
	const router = useRouter();

	const musicState = React.useContext(MusicContext);

	return (
		<div className={styles.main}>
			<ContentSection className={styles.identitySection}>
				<Link href="/" className={styles.identityHomeLink}>
					<Image
						className={styles.identityLogo}
						src={logoImage}
						alt=""
						priority
					/>
					<h1 className={styles.identityTitle}>AJ Kolenc</h1>
				</Link>
				<p className={styles.identitySubtitle}>
					Freelance game & web developer, hobbyist&nbsp;musician
				</p>
			</ContentSection>
			<ContentSection className={styles.navContentSection}>
				<nav className={styles.navLinks}>
					<Link
						className={
							isOnPage("projects", router) || isAtHome(router)
								? styles.selected
								: ""
						}
						href="/projects"
					>
						Projects
					</Link>
					{/* <Link
						className={isOnPage("blog", router) ? styles.selected : ""}
						href="/blog"
					>
						Blog
					</Link> */}
					{/* <Link
						className={isOnPage("cv", router) ? styles.selected : ""}
						href="/cv"
					>
						CV
					</Link> */}
					<Link
						className={isOnPage("about", router) ? styles.selected : ""}
						href="/about"
					>
						About
					</Link>
				</nav>
			</ContentSection>
			{children}
			<ContentSection
				className={`${styles.footer} ${
					!musicState.isStopped ? styles.extended : ""
				}`}
			>
				<div className={styles.footerBackgroundBleed}></div>
				<div className={styles.footerLinks}>
					<Link href="mailto:ajkolenc@gmail.com" className={styles.footerLink}>
						<Image src={emailIcon} alt="email" />
					</Link>
					<Link
						href="https://www.twitter.com/ajkolenc"
						className={styles.footerLink}
					>
						<Image src={twitterIcon} alt="twitter" />
					</Link>
					<Link
						href="https://www.linkedin.com/in/ajkolenc/"
						className={styles.footerLink}
					>
						<Image src={linkedInIcon} alt="linkedin" />
					</Link>
					<Link
						href="https://github.com/ajkolenc/"
						className={styles.footerLink}
					>
						<Image src={githubIcon} alt="github" />
					</Link>
				</div>
				<p>© {new Date().getFullYear()} AJ Kolenc</p>
			</ContentSection>
		</div>
	);
};
