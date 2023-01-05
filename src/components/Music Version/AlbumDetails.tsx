import * as React from "react";
import { Album, Track } from "./projects/music";
import { Project } from "./projects/types";

import * as appStyles from "./App.style.css";
import * as styles from "./AlbumDetails.style.css";
import playButtonIcon from "images/play_button_white.png";

export interface AlbumDetailsProps {
    project: Project;
    album: Album;
}
export const AlbumDetails: React.FunctionComponent<AlbumDetailsProps> = (props) => {
    return <div className={styles.albumDetails}>
        <div className={styles.header}>
            <div className={styles.albumCover}>
                <img className={appStyles.projectIcon} src={props.album.coverURL} />
            </div>
            <div className={styles.albumDescription}>{props.children}</div>
        </div>
        <div className={styles.trackList}>
            {
                props.album.tracks.map((track, index) => {
                    return <TrackDetails 
                        key={`track_${index}`}
                        album={props.album} 
                        track={track} 
                        trackIndex={index}
                    />;
                })
            }
        </div>
    </div>
};

interface TrackDetailsProps {
    album: Album;
    track: Track;
    trackIndex: number;
}
const TrackDetails: React.FunctionComponent<TrackDetailsProps> = (props) => {
    const [duration, setDuration] = React.useState(0);

    React.useEffect(() => {
        const audio = new Audio();
        audio.onloadedmetadata = () => {
            setDuration(audio.duration);
            audio.remove();
        };
        audio.preload = 'metadata';
        audio.src = props.track.audioUrl;    
    }, []);

    const minutes = Math.floor(duration / 60);
    const seconds = Math.ceil(duration) - minutes * 60;

    return <div className={styles.trackDetails}>
        <img className={styles.playButton} src={playButtonIcon} />
        <p className={styles.trackNumber}>{ props.trackIndex + 1 }</p>
        <div className={styles.trackTitleArea}>
            <p className={styles.trackTitle}>{props.track.name}</p>
            <p className={styles.trackAlbumTitle}>{props.album.name}</p>
        </div>
        <p className={styles.trackDuration}>{`${minutes}:${seconds.toLocaleString("en-US", { minimumIntegerDigits: 2})}`}</p>
    </div>;
};