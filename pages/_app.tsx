import "../styles/globals.css";
import type { AppProps } from "next/app";
import { MusicContext, useMusicState } from "lib/contexts/MusicContext";
import { useTransition } from "lib/useTransition";
import styles from "../styles/App.module.css";
import { MusicPlayer } from "lib/elements/MusicPlayer";

export default function App({ Component, pageProps }: AppProps) {
	const musicState = useMusicState();
	const musicPlayerTransition = useTransition(!musicState.isStopped, 500);

	const musicPlayerClass = {
		from: styles.musicPlayerHidden,
		enter: styles.musicPlayerVisible,
		leave: styles.musicPlayerHidden,
	}[musicPlayerTransition.stage];

	return (
		<MusicContext.Provider value={musicState}>
			<Component {...pageProps} />
			{musicPlayerTransition.shouldMount && (
				<MusicPlayer className={musicPlayerClass} musicState={musicState} />
			)}
		</MusicContext.Provider>
	);
}
