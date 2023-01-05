import * as React from "react";

import * as styles from "./NewApp.style.css";

export const App: React.FunctionComponent = () => {
	return (
		<div className={styles.body}>
			<div className={styles.header}>
				<nav className={styles.nav}>
					<a
						className={styles.navLink}
						style={{ backgroundColor: "#daab84", width: "0" }}
						href="/"
					>
						<span className={styles.navLinkText}>AJ</span>
					</a>
					<a
						className={styles.navLink}
						style={{ backgroundColor: "#e89973" }}
						href="/games"
					>
						<span className={styles.navLinkText}>Games</span>
					</a>
					<a
						className={styles.navLink}
						style={{ backgroundColor: "#f3bd86" }}
						href="/web"
					>
						<span className={styles.navLinkText}>Web</span>
					</a>
					<div
						className={styles.navLink}
						style={{ backgroundColor: "#b16573" }}
						// href="/music"
					>
						<span className={styles.navLinkText}>Music</span>
					</div>
				</nav>{" "}
				<div className={styles.currentLocation}>
					<h1>AJ Kolenc</h1>
					<h2>Resume &amp; Portfolio</h2>
				</div>
			</div>
			<div className={styles.content}>
				<div className={styles.contentBlock}>
					<h3>Category Header</h3>
					<div id="big-block">
						Welcome to my portfolio! Please take a look around.
						<div id="social-icons"></div>
					</div>
				</div>
				<div className={styles.secondaryBlock}>
					<h3>Browse Projects</h3>
					<div className={styles.projectContainer}>
						<div className={styles.projectSpacer}></div>
						<div className={styles.projectSpacer}></div>
						<div className={styles.project}>
							<img className={styles.projectIcon} />
							<h5>Lead Developer</h5>
							<h4>Home Improvisation</h4>
						</div>
						<div className={styles.project}>
							<img className={styles.projectIcon} />
							<h5>Developer</h5>
							<h4>Dubio</h4>
						</div>
						<div className={styles.project}>
							<img className={styles.projectIcon} />
							<h5>Developer</h5>
							<h4>Dubio</h4>
						</div>
						<div className={styles.project}>
							<img className={styles.projectIcon} />
							<h5>Developer</h5>
							<h4>Dubio</h4>
						</div>
						<div className={styles.project}>
							<img className={styles.projectIcon} />
							<h5>Developer</h5>
							<h4>Dubio</h4>
						</div>
						<div className={styles.projectSpacer}></div>
						<div className={styles.projectSpacer}></div>
					</div>
				</div>
			</div>
		</div>
	);
};
