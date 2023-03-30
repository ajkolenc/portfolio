import { useEffect, useRef, useState } from "react";
import { MusicState } from "./contexts/MusicContext";

export type Canceller = {
	id?: number;
};

export function setAnimationFrameTimeout(
	callback: () => void,
	timeout: number = 0
) {
	const startTime = performance.now();
	const canceller: Canceller = {};

	function call() {
		canceller.id = requestAnimationFrame((now) => {
			if (now - startTime > timeout) {
				callback();
			} else {
				call();
			}
		});
	}

	call();
	return canceller;
}

export function clearAnimationFrameTimeout(canceller: Canceller) {
	if (canceller.id) cancelAnimationFrame(canceller.id);
}

export type Stage = "from" | "enter" | "leave";

export function useTransition(state: boolean, timeout: number) {
	// the stage of transition - 'from' | 'enter' | 'leave'
	const [stage, setStage] = useState<Stage>(state ? "enter" : "from");

	// the timer for should mount
	const timer = useRef<Canceller>({});
	const [shouldMount, setShouldMount] = useState(state);

	useEffect(
		function handleStateChange() {
			clearAnimationFrameTimeout(timer.current);

			// when true - trans from to enter
			// when false - trans enter to leave, unmount after timeout
			if (state) {
				setStage("from");
				setShouldMount(true);
				timer.current = setAnimationFrameTimeout(() => {
					setStage("enter");
				});
			} else {
				setStage("leave");
				timer.current = setAnimationFrameTimeout(() => {
					setShouldMount(false);
				}, timeout);
			}

			return () => {
				clearAnimationFrameTimeout(timer.current);
			};
		},
		[state, timeout]
	);

	return {
		stage,
		shouldMount,
	};
}

export function useDataTransition<T>(
	state: boolean,
	timeout: number,
	heldData: T
) {
	const data = useRef(heldData);
	data.current = state ? heldData : data.current;

	return {
		...useTransition(state, timeout),
		data: data.current,
	};
}
