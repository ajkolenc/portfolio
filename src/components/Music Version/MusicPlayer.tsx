import * as React from "react";
import { Link } from "react-router-dom";
import { Album } from "./projects/music";

import * as styles from "./MusicPlayer.style.css";
import backButton from "images/back_button.png";
import playButton from "images/play_button_white.png";
import nextButton from "images/next_button.png";
import volumeOn from "images/volume_on.png";
import volumeOff from "images/volume_off.png";
import closeIcon from "images/close_button.png";

export interface MusicPlayerProps {
	album: Album;
	trackIndex: number;
	onClose: () => void;
}
export const MusicPlayer: React.FunctionComponent<MusicPlayerProps> = (
	props
) => {
	const [trackOffset, setTrackOffset] = React.useState(0);
	const [isPlaying, setIsPlaying] = React.useState(true);
	const audio = React.useRef<HTMLAudioElement>();

	const trackIndex = Math.max(
		0,
		Math.min(props.album.tracks.length, props.trackIndex + trackOffset)
	);
	const track = props.album.tracks[trackIndex];

	React.useEffect(() => {
		setTrackOffset(0);
		setIsPlaying(true);
	}, [props.trackIndex, props.album]);

	const projectPath = `${props.album.project.category.slug}/${props.album.project.slug}`;

	// React.useEffect(() => {
	//     audio.current.src = track.audioUrl;
	//     audio.current.load();
	// }, [props.album, trackIndex])

	const trackPercent =
		audio.current?.duration > 0
			? (100 * audio.current.currentTime) / audio.current.duration
			: 0;

	const previousTrackIndex = Math.max(-props.trackIndex, trackOffset - 1);
	const nextTrackIndex = Math.min(
		props.album.tracks.length - props.trackIndex,
		trackOffset + 1
	);

	const canGoBack = previousTrackIndex == trackOffset - 1;
	const canGoForward = nextTrackIndex == trackOffset + 1;

	const volumeIcon = audio.current?.volume > 1 ? volumeOn : volumeOff;

	const timeMinutes = Math.floor((audio.current?.currentTime ?? 0) / 60);
	const timeSeconds =
		Math.ceil(audio.current?.currentTime ?? 0) - timeMinutes * 60;
	const durationMinutes = Math.floor((audio.current?.duration ?? 0) / 60);
	const durationSeconds =
		Math.ceil(audio.current?.duration ?? 0) - durationMinutes * 60;

	const timeLabel = `${timeMinutes}:${timeSeconds.toLocaleString("en-US", {
		minimumIntegerDigits: 2,
	})}`;
	const durationLabel = `${durationMinutes}:${durationSeconds.toLocaleString(
		"en-US",
		{ minimumIntegerDigits: 2 }
	)}`;

	return (
		<div className={styles.musicPlayer}>
			<audio
				controls={false}
				ref={audio}
				src={track.audioUrl}
				onLoad={() => audio.current.play()}
			/>
			<img
				className={styles.musicPlayerAlbumCover}
				src={props.album.coverURL}
			/>
			<div className={styles.musicPlayerContentArea}>
				<div
					className={`${styles.musicPlayerProgress}`}
					style={{ width: `${10}%` }}
				/>
				<p className={styles.musicPlayerTime}>
					{timeLabel} / {durationLabel}
				</p>
				<div className={styles.musicPlayerTrackArea}>
					<div className={styles.musicPlayerTrackInfo}>
						<Link to={projectPath} className={styles.musicPlayerTrackTitle}>
							{track?.name ?? "-- --"}
						</Link>
						<Link to={projectPath} className={styles.musicPlayerAlbumTitle}>
							{props.album.name}
						</Link>
					</div>
				</div>
				<div className={styles.musicPlayerControlsArea}>
					<img
						className={`${styles.trackButton} ${
							canGoBack ? "" : styles.disabled
						}`}
						src={backButton}
						onClick={() => setTrackOffset(previousTrackIndex)}
					/>
					<img
						className={styles.playButton}
						style={{
							backgroundImage: `url(${playButton})`,
							WebkitMaskImage: `url(${playButton})`,
						}}
						// src={playButton}
						onClick={() => setIsPlaying(!isPlaying)}
					/>
					<img
						className={`${styles.trackButton} ${
							canGoForward ? "" : styles.disabled
						}`}
						src={nextButton}
						onClick={() => setTrackOffset(nextTrackIndex)}
					/>
				</div>
				<div className={styles.musicPlayerVolumeArea}>
					<img className={styles.volumeIcon} src={volumeIcon} />
					<div className={styles.musicPlayerVolumeSlider}>
						<div className={styles.musicPlayerVolumeSliderFill} />
					</div>
					<img className={styles.exitIcon} src={closeIcon} />
				</div>
			</div>
		</div>
	);
};
