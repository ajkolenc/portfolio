import * as React from "react";

import { Album, Track } from "lib/projects";
import styles from "styles/App.module.css";

import playIcon from "images/play-icon.png";
import pauseIcon from "images/pause-icon.png";
import Image from "next/image";
import { MusicContext } from "lib/contexts/MusicContext";

export interface TrackListingProps {
	album: Album;
}
export const TrackListing: React.FunctionComponent<TrackListingProps> = ({
	album,
}) => {
	const musicState = React.useContext(MusicContext);

	return (
		<table className={styles.trackListing}>
			<tbody>
				{album.tracks.map((track) => {
					return (
						<tr key={track.name} className={styles.trackListingTrack}>
							<td>
								<button
									className={styles.trackListingTrackButton}
									onClick={() => {
										if (
											musicState.currentTrack != track ||
											musicState.isStopped
										) {
											musicState.playTrack(track, album);
										} else {
											musicState.setPlaying(!musicState.isPlaying);
										}
									}}
								>
									{musicState.isPlaying && musicState.currentTrack == track ? (
										<Image alt="Pause" src={pauseIcon} />
									) : (
										<Image alt="Play" src={playIcon} />
									)}
								</button>
							</td>
							<td>{track.name}</td>
							<td>{formatTrackDuration(track.duration)}</td>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
};

export function formatTrackDuration(duration: number) {
	const minutes = Math.floor(duration / 60);
	const seconds = duration - minutes * 60;
	const minuteLabel = minutes.toLocaleString("en-US", {
		minimumIntegerDigits: 1,
	});
	const secondLabel = seconds.toLocaleString("en-US", {
		minimumIntegerDigits: 2,
	});
	return `${minuteLabel}:${secondLabel}`;
}
