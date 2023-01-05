import * as React from "react";
import { CSSTransition } from "react-transition-group";
import { CSSTransitionProps } from "react-transition-group/CSSTransition";
import * as pullDown from "./PullDownTransition.style.css";

export const PullDownTransition: React.FunctionComponent<Partial<
	CSSTransitionProps
>> = (props) => {
	return (
		<CSSTransition
			in={props.in}
			key={props.key}
			appear={props.appear}
			unmountOnExit
			classNames={{
				appear: pullDown.pullDownEnter,
				enter: pullDown.pullDownEnter,
				appearActive: pullDown.pullDownActive,
				enterActive: pullDown.pullDownActive,
				exit: pullDown.pullDownActive,
				exitActive: pullDown.pullDownExit,
			}}
			timeout={400}
		>
			<div className={pullDown.pullDown}>{props.children}</div>
		</CSSTransition>
	);
};
