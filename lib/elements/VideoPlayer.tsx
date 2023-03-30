import { useEffect, useState } from "react";
import ReactPlayer, { ReactPlayerProps } from "react-player";

export const VideoPlayer: React.FunctionComponent<ReactPlayerProps> = (
	props
) => {
	const [hasWindow, setHasWindow] = useState(false);
	useEffect(() => {
		if (typeof window !== undefined) {
			setHasWindow(true);
		}
	}, []);
	return hasWindow ? <ReactPlayer {...props} /> : <div></div>;
};
