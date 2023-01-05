import * as styles from "./categories.style.css";
import { Album } from "./music";

export interface Category {
	name: string;
	slug: string;
	backgroundClass: string;
	titleBackgroundClass: string;
}

const homeCategory: Category = {
	name: "Home",
	slug: "",
	backgroundClass: styles.homeBackground,
	titleBackgroundClass: styles.homeTitleBackground,
};
const musicCategory: Category = {
	name: "Music",
	slug: "music",
	backgroundClass: styles.musicBackground,
	titleBackgroundClass: styles.musicTitleBackground,
};
const gamesCategory: Category = {
	name: "Games",
	slug: "games",
	backgroundClass: styles.gamesBackground,
	titleBackgroundClass: styles.gamesTitleBackground,
};
const otherCategory: Category = {
	name: "Other",
	slug: "other",
	backgroundClass: styles.otherBackground,
	titleBackgroundClass: styles.otherTitleBackground,
};

export const Categories = {
	home: homeCategory,
	music: musicCategory,
	games: gamesCategory,
	other: otherCategory,
};

export interface ProjectPageProps {
	project: Project;
	playTrack: (album: Album, trackIndex: number) => void;
}
export interface Project {
	category: Category;
	name: string;
	slug: string;
	iconURL?: string;
	tileURL?: string;
	renderPage: React.FunctionComponent<ProjectPageProps>;
	size?: "square" | "wide" | "tall";
}
