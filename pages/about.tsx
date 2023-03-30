import * as React from "react";
import Link from "next/link";
import Image from "next/image";

import { ContentSection } from "lib/elements/ContentSection";
import { Page } from "lib/elements/Page";
import portrait from "images/me_7.jpg";
import styles from "styles/App.module.css";
import { ButtonLink } from "lib/elements/ButtonLink";
import { Divider } from "lib/elements/Divider";

export default function AboutPage() {
	return (
		<Page>
			<ContentSection className={styles.aboutSection}>
				<div className={styles.smallColumn}>
					<Image
						src={portrait}
						className={styles.inlineImageLeft}
						alt="AJ Kolenc"
					/>
					<p>
						Hello! I&apos;m AJ, an Amsterdam-based freelance developer focused
						on games.
					</p>
					<p>
						I&apos;ve been working as developer for the past 9 years on a
						variety of projects including games, websites, and interactive
						experiences. I&apos;m passionate about accessibility and polish in
						my work, and especially enjoy collaborating with artists.
					</p>
					<p>
						I thrive in small, independent teams. With a broad range of skills I
						can easily pick up many tasks, from animating UI to number-crunching
						game design spreadsheets.
					</p>
					<p></p>
					<p style={{ clear: "both" }}>
						Some of the things I&apos;ve been hired to do:
					</p>
					<ul>
						<li>
							Create procedural animations for an{" "}
							<Link href="/projects/acp-phoenix-mural">
								AR photography exhibit
							</Link>
						</li>
						<li>
							Implement downloadable content updates for a{" "}
							<Link href="/projects/impractical-jokers">mobile game</Link>
						</li>
						<li>
							Prototype and implement games for a{" "}
							<Link href="/projects/pbs-games">streaming stick</Link>
						</li>
						<li>
							Port{" "}
							<Link href="/projects/sesame-street">
								educational flash games
							</Link>{" "}
							to HTML5
						</li>
						<li>
							Write ambient music for a{" "}
							<Link href="/projects/att-installation">
								tradeshow installation
							</Link>
						</li>
					</ul>
					<p>
						If you&apos;re interesting in working with me, please reach out!
					</p>
					<ButtonLink href="mailto:ajkolenc@gmail.com" target="_blank">
						Send an Email
					</ButtonLink>
				</div>
			</ContentSection>
			<ContentSection className={styles.workHistorySection}>
				<div className={styles.smallColumn}>
					<h1>Places I&apos;ve Worked</h1>
					<div>
						<h3>FIX Health</h3>
						<h4>CTO, Director of Development</h4>
						<h5>2018 - Now</h5>
						<p>
							At FIX I work with our team to create games that help people to
							achieve their fitness goals. In my tenure as CTO I have managed a
							team of programmers, artists, and designers to create and build on
							market-ready mobile games.
						</p>
						<h6>Notable Projects</h6>
						<div className={styles.horizontalGroup}>
							<ButtonLink href="/projects/the-outbreak" internalLink>
								The Outbreak
							</ButtonLink>
							<ButtonLink href="/projects/lost-tides" internalLink>
								Lost Tides
							</ButtonLink>
						</div>
					</div>
					<Divider />
					<div>
						<h3>Dragon Army</h3>
						<h4>Contract Developer</h4>
						<h5>2019 - Now</h5>
						<p>
							I&apos;ve worked with Dragon Army as a contractor on a variety of
							projects over the years, spaninng games, AR exhibits, product
							demonstrations, and more.
						</p>
						<h6>Notable Projects</h6>
						<div className={styles.horizontalGroup}>
							<ButtonLink href="/projects/impractical-jokers" internalLink>
								Impractical Jokers
							</ButtonLink>
							<ButtonLink href="/projects/acp-phoenix-mural" internalLink>
								ACP Phoenix
							</ButtonLink>
						</div>
					</div>
					<Divider />
					<div>
						<h3>Sparpweed</h3>
						<h4>Intern, Developer</h4>
						<h5>2014 - Now</h5>
						<p>
							In 2014 I spent a summer in Rotterdam working with{" "}
							<a href="https://richardboeser.com">Richard Boeser</a> on VR
							prototypes. Since then I&apos;ve continued to work with Richard,
							focusing on code while he does design and visuals.
						</p>
						<h6>Notable Projects</h6>
						<div className={styles.horizontalGroup}>
							<ButtonLink href="/projects/dubio" internalLink>
								Dubio
							</ButtonLink>
							<ButtonLink href="/projects/pedestria" internalLink>
								Pedestria
							</ButtonLink>
						</div>
					</div>
					<Divider />
					<div>
						<h3>The Stork Burnt Down</h3>
						<h4>Owner, Developer</h4>
						<h5>2015 - 2017</h5>
						<p>
							I joined the Stork Burnt Down in 2015 to help bring viral hit{" "}
							<Link href="/projects/home-improvisation">
								Home Improvisation
							</Link>{" "}
							to Steam. As owner I learned how to run an indie studio as a
							business, and how to ship production-ready games. The studio is
							now dormant as life brought the owners on different paths.
						</p>
						<h6>Notable Projects</h6>
						<div className={styles.horizontalGroup}>
							<ButtonLink href="/projects/home-improvisation" internalLink>
								Home Improvisation
							</ButtonLink>
							<ButtonLink href="/projects/spacetime" internalLink>
								SpaceTime
							</ButtonLink>
						</div>
					</div>
					<Divider />
					<div>
						<h3>Primal Screen</h3>
						<h4>Contract Developer</h4>
						<h5>2015 - 2017</h5>
						<p>
							As I was working on my own company The Stork Burnt Down, I
							augmented my income by working with acclaimed animation studio
							Primal Screen. This gave me valuable collaborating with artists
							and working with designs geared towards children.
						</p>
						<h6>Notable Projects</h6>
						<div className={styles.horizontalGroup}>
							<ButtonLink href="/projects/pbs-games" internalLink>
								PBS Games
							</ButtonLink>
							<ButtonLink href="/projects/sesame-street" internalLink>
								Sesame Street Games
							</ButtonLink>
						</div>
					</div>
					<Divider />
					<div>
						<h3>Georgia Tech</h3>
						<h4>Lab Manager</h4>
						<h5>2014 - 2015</h5>
						<p>
							I studied at Georgia Tech for my master&apos;s degree in Digital
							Media. While doing so I worked as a lab manager for the
							Experimental Game Lab (EGL), while also participating in the
							development of projects from other labs in the department.
						</p>
						<h6>Notable Projects</h6>
						<div className={styles.horizontalGroup}>
							<ButtonLink href="/projects/mermaids" internalLink>
								Mermaids
							</ButtonLink>
							<ButtonLink href="/projects/ear-sketch" internalLink>
								Earsketch Canvas
							</ButtonLink>
						</div>
					</div>
				</div>
			</ContentSection>
		</Page>
	);
}
