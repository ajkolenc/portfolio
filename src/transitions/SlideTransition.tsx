import * as React from "react";
import { CSSTransition } from "react-transition-group";
import { CSSTransitionProps } from "react-transition-group/CSSTransition";
import * as slide from "./SlideTransition.style.css";

export const SlideTransition: React.FunctionComponent<Partial<
	CSSTransitionProps
>> = (props) => {
	return (
		<CSSTransition
			in={props.in}
			key={props.key}
			appear={props.appear}
			unmountOnExit
			classNames={{
				appear: slide.slideEnter,
				enter: slide.slideEnter,
				appearActive: slide.slideEnterActive,
				enterActive: slide.slideEnterActive,
				exit: slide.slideExitActive,
				exitActive: slide.slideExit,
			}}
			timeout={500}
		>
			<div className={slide.slide}>{props.children}</div>
		</CSSTransition>
	);
};
