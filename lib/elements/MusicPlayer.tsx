import * as React from "react";

import { MusicContext, MusicState } from "lib/contexts/MusicContext";
import styles from "styles/App.module.css";
import Image from "next/image";
import Link from "next/link";

import playIcon from "images/play-icon_white.png";
import pauseIcon from "images/pause-icon_white.png";
import backIcon from "images/previous-icon_white.png";
import forwardIcon from "images/next-icon_white.png";
import closeIcon from "images/close_button.png";

function formatTrackPercent(percent: number) {
	return (100 * percent).toLocaleString("en-US", { minimumFractionDigits: 2 });
}

export interface MusicPlayerProps {
	musicState: MusicState;
	className?: string;
}
export const MusicPlayer: React.FunctionComponent<MusicPlayerProps> = ({
	musicState,
	className,
}) => {
	const audioRef = React.useRef<HTMLAudioElement>(null);
	const audioUrl = musicState.currentTrack?.audioUrl ?? "";
	const trackPercent = musicState.currentTrack
		? musicState.trackTime / musicState.currentTrack.duration
		: 0;

	// Play/pause audio
	React.useEffect(() => {
		if (!audioRef.current) return;

		if (musicState.isPlaying && !musicState.isStopped) {
			audioRef.current.play();
		} else {
			audioRef.current.pause();
		}
	}, [musicState.isPlaying, musicState.isStopped]);

	// Change audio source when track changes
	React.useEffect(() => {
		if (!audioRef.current) return;

		if (audioRef.current.src != audioUrl) {
			audioRef.current.src = audioUrl;
			if (musicState.isPlaying) {
				audioRef.current.play();
			} else {
				audioRef.current.pause();
			}
		}
	}, [audioUrl]);

	// Interval job to update playline
	React.useEffect(() => {
		const interval = window.setInterval(() => {
			if (!audioRef.current?.src) {
				if (musicState.trackTime != 0) {
					musicState.setTrackTime(0);
				}
			} else {
				const trackTime = audioRef.current?.currentTime ?? 0;
				if (musicState.trackTime != trackTime) {
					musicState.setTrackTime(trackTime);
				}
			}
		}, 100);
		return () => clearInterval(interval);
	}, [musicState]);

	const playPauseButton = (
		<button
			className={styles.musicPlayerButton}
			onClick={() => {
				musicState.setPlaying(!musicState.isPlaying);
			}}
		>
			{musicState.isPlaying && musicState.currentTrack ? (
				<Image alt="Pause" src={pauseIcon} />
			) : (
				<Image alt="Play" src={playIcon} />
			)}
		</button>
	);

	return (
		<div className={`${styles.musicPlayer}  ${className ?? ""}`}>
			<audio
				src={audioUrl}
				ref={audioRef}
				onEnded={() => {
					musicState.next();
				}}
			></audio>

			<div className={styles.musicPlayerPlayline} />
			<div
				className={`${styles.musicPlayerPlayline} ${styles.musicPlayerPlaylineFilled}`}
				style={{ transform: `scaleX(${formatTrackPercent(trackPercent)}%)` }}
			/>
			<div
				className={styles.musicPlayerPlaylineTapArea}
				onClick={(event) => {
					const percentClicked =
						event.clientX / event.currentTarget.clientWidth;
					if (audioRef.current?.src) {
						audioRef.current.currentTime =
							percentClicked * audioRef.current.duration;
					}
				}}
			/>

			{musicState.currentAlbum && (
				<Link
					className={styles.musicPlayerCover}
					href={musicState.currentAlbum.projectURL}
				>
					<Image
						src={musicState.currentAlbum.coverURL}
						alt={musicState.currentAlbum.name}
					/>
				</Link>
			)}
			<div className={styles.musicPlayerTrackDetails}>
				<p className={styles.musicPlayerTrackName}>
					{musicState.currentTrack?.name ?? "None"}
				</p>
				{musicState.currentAlbum &&
					(musicState.currentAlbum.projectURL ? (
						<Link
							className={styles.musicPlayerAlbumName}
							href={musicState.currentAlbum.projectURL}
						>
							{musicState.currentAlbum?.name ?? "None"}
						</Link>
					) : (
						<p className={styles.musicPlayerAlbumName}>
							{musicState.currentAlbum?.name ?? "None"}
						</p>
					))}
			</div>
			<div className={styles.musicPlayerFullControls}>
				<button
					className={styles.musicPlayerButtonSmall}
					onClick={() => musicState.previous()}
				>
					<Image alt="Back" src={backIcon} />
				</button>
				{playPauseButton}
				<button
					className={styles.musicPlayerButtonSmall}
					onClick={() => musicState.next()}
				>
					<Image alt="Forward" src={forwardIcon} />
				</button>
			</div>
			<div className={styles.musicPlayerMobileControls}>{playPauseButton}</div>
			<button
				className={styles.musicPlayerButton}
				onClick={() => {
					musicState.stop();
				}}
			>
				<Image alt="Close" src={closeIcon} />
			</button>
		</div>
	);
};
