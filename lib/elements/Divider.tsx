import React, { AnchorHTMLAttributes } from "react";

import styles from "styles/App.module.css";

export interface DividerProps {
	margin?: string;
}
export const Divider: React.FunctionComponent<DividerProps> = ({ margin }) => {
	return (
		<div className={styles.divider} style={{ margin: margin ?? "20px 0px" }} />
	);
};
