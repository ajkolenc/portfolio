import * as React from "react";
import { Album, Track } from "lib/projects";

export interface MusicState {
	currentAlbum?: Album;
	currentTrack?: Track;
	isPlaying: boolean;
	isStopped: boolean;
	trackTime: number;
	playTrack: (track: Track, album?: Album) => void;
	setTrackTime: (time: number) => void;
	setPlaying: (playing: boolean) => void;
	stop: () => void;
	next: () => boolean;
	previous: () => boolean;
}
export const MusicContext = React.createContext<MusicState>({
	isPlaying: false,
	isStopped: true,
	trackTime: 0,
	playTrack: (track, album) => {},
	setPlaying: () => {},
	setTrackTime: () => {},
	stop: () => {},
	next: () => false,
	previous: () => false,
});

export function useMusicState(
	startAlbum?: Album,
	startTrack?: Track
): MusicState {
	const [currentAlbum, setAlbum] = React.useState<Album | undefined>(
		startAlbum
	);
	const [currentTrack, setTrack] = React.useState<Track | undefined>(
		startTrack
	);

	const [trackTime, setTrackTime] = React.useState(0);
	const [isPlaying, setPlaying] = React.useState(false);
	const [isStopped, setStopped] = React.useState(true);

	const getTrackWithOffset = (offset: number) => {
		if (!currentAlbum || !currentTrack) return undefined;

		const trackIndex = currentAlbum.tracks.indexOf(currentTrack);
		if (trackIndex < 0) return undefined;

		const targetTrackIndex = Math.max(
			0,
			Math.min(trackIndex + offset, currentAlbum.tracks.length - 1)
		);
		return currentAlbum.tracks[targetTrackIndex];
	};

	const playTrack = (track: Track, album?: Album) => {
		setAlbum(album);
		setTrack(track);
		setPlaying(true);
		setStopped(false);
		setTrackTime(0);
	};

	return {
		currentAlbum,
		currentTrack,
		isPlaying,
		isStopped,
		trackTime,
		playTrack,
		stop: () => {
			setPlaying(false);
			setStopped(true);
		},
		previous: () => {
			const previousTrack = getTrackWithOffset(-1);
			if (!previousTrack || previousTrack == currentTrack) {
				setPlaying(false);
				return false;
			} else {
				playTrack(previousTrack, currentAlbum);
				return true;
			}
		},
		next: () => {
			const nextTrack = getTrackWithOffset(1);
			if (!nextTrack || nextTrack == currentTrack) {
				setPlaying(false);
				return false;
			} else {
				playTrack(nextTrack, currentAlbum);
				return true;
			}
		},
		setTrackTime,
		setPlaying,
	};
}
