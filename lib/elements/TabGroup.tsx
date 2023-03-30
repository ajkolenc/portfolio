import * as React from "react";
import styles from "../../styles/App.module.css";

export interface TabGroupProps {
	options: string[];
	selectedOptionIndex: number;
	onOptionSelected: (option: string, index: number) => void;
}
export const TabGroup: React.FunctionComponent<TabGroupProps> = ({
	options,
	selectedOptionIndex,
	onOptionSelected,
}) => {
	return (
		<div className={styles.tabGroup}>
			{options.map((option, index) => (
				<button
					key={option}
					className={`${styles.tab} ${
						index == selectedOptionIndex ? styles.selected : ""
					}`}
					onClick={() => onOptionSelected(option, index)}
				>
					{option}
				</button>
			))}
		</div>
	);
};
