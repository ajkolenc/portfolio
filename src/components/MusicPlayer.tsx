import * as React from "react";
import * as styles from "./MusicPlayer.style.css";
import { SlideTransition } from "../transitions/SlideTransition";
import { TransitionGroup } from "react-transition-group";
import playButtonImage from "../images/play_button.png";
import pauseButtonImage from "../images/pause_button.png";

export interface MusicPlayerProps {
	albums: Album[];
	autoplay?: boolean;
}
export interface Album {
	name: string;
	description: string;
	icon: string;
	songs: Song[];
}
export interface Song {
	name: string;
	source: string;
}
export const MusicPlayer: React.FunctionComponent<MusicPlayerProps> = (
	props
) => {
	const [currentAlbum, setCurrentAlbum] = React.useState<Album>(null);
	const [playingAlbum, setPlayingAlbum] = React.useState<Album>(
		props.autoplay ? props.albums[0] : null
	);
	const [playingSong, setPlayingSong] = React.useState(playingAlbum?.songs[0]);

	const [progress, setProgress] = React.useState(0);

	const [paused, setPaused] = React.useState(true);

	const audioRef = React.useRef<HTMLAudioElement>();
	const browserRef = React.useRef<HTMLDivElement>();

	return (
		<div className={styles.player}>
			<div className={styles.browser} ref={browserRef}>
				<TransitionGroup component={null}>
					<SlideTransition key={currentAlbum ? "song" : "album"}>
						{currentAlbum ? (
							<div
								className={styles.songBrowser}
								style={{ backgroundImage: `url(${currentAlbum.icon})` }}
							>
								<div className={styles.songContainer}>
									<div className={styles.songBrowserTitleBar}>
										<button
											className={styles.songBrowserBack}
											onClick={() => {
												setCurrentAlbum(null);
												browserRef.current.scrollTo({
													top: 0,
													left: 0,
													behavior: "smooth",
												});
											}}
										>
											←
										</button>
										<p className={styles.songBrowserTitle}>
											{currentAlbum.name}
										</p>
									</div>
									<p className={styles.albumDescription}>
										{currentAlbum.description}
									</p>
									<div className={styles.songBrowserSongs}>
										{currentAlbum.songs.map((song, index) => {
											return (
												<div
													className={styles.song}
													onClick={() => {
														setPlayingAlbum(currentAlbum);
														setPlayingSong(song);
														setPaused(false);
														setTimeout(() => {
															audioRef.current.play();
														}, 1);
													}}
												>
													<span className={styles.songIndex}>{index + 1}</span>
													<span className={styles.songName}>{song.name}</span>
												</div>
											);
										})}
									</div>
								</div>
							</div>
						) : (
							<div className={styles.albumBrowser}>
								<div className={styles.albumContainer}>
									{props.albums.map((album) => {
										return (
											<div
												className={styles.album}
												onClick={() => {
													setCurrentAlbum(album);
													browserRef.current.scrollTo({
														top: 0,
														left: 0,
														behavior: "smooth",
													});
												}}
											>
												<img className={styles.albumIcon} src={album.icon} />
												<p className={styles.albumTitle}>{album.name}</p>
											</div>
										);
									})}
								</div>
							</div>
						)}
					</SlideTransition>
				</TransitionGroup>
			</div>
			<div className={styles.controls}>
				<audio
					controls={false}
					ref={audioRef}
					onPause={() => setPaused(true)}
					onPlay={() => setPaused(false)}
					onEnded={() => {
						let currentSongIndex = playingAlbum.songs.indexOf(playingSong);
						let nextSongIndex = Math.min(
							currentSongIndex + 1,
							playingAlbum.songs.length - 1
						);

						if (currentSongIndex !== nextSongIndex) {
							setPlayingSong(playingAlbum.songs[nextSongIndex]);
							setTimeout(() => audioRef.current.play(), 0);
						}
					}}
					onTimeUpdate={(event) => {
						setProgress(
							event.currentTarget.currentTime / event.currentTarget.duration
						);
					}}
					src={playingSong.source}
				/>
				<div className={styles.progressMeter}>
					<div
						className={styles.currentProgress}
						style={{ transform: `scaleX(${progress})` }}
					></div>
				</div>
				<div className={styles.nowPlaying}>
					<img className={styles.currentSongAlbum} src={playingAlbum?.icon} />
					<div className={styles.currentSong}>
						<p className={styles.currentSongName}>
							{playingSong?.name ?? "- - -"}
						</p>
						<p className={styles.currentSongAlbumName}>
							{playingAlbum?.name ?? "- - -"}
						</p>
					</div>

					<div
						className={styles.playButton}
						onClick={() => {
							paused ? audioRef.current.play() : audioRef.current.pause();
						}}
					>
						<img src={paused ? playButtonImage : pauseButtonImage} />
					</div>
				</div>
			</div>
		</div>
	);
};
