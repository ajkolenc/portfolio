import React, { AnchorHTMLAttributes } from "react";
import Link, { LinkProps } from "next/link";

import styles from "styles/App.module.css";
import linkIcon from "images/external_link_icon.png";
import Image from "next/image";

export interface ButtonLinkProps extends React.PropsWithChildren {
	href: string;
	internalLink?: boolean;
	target?: string;
}
export const ButtonLink: React.FunctionComponent<ButtonLinkProps> = (props) => {
	return props.internalLink ? (
		<Link className={styles.buttonLink} {...props}>
			{props.children}{" "}
			<Image className={styles.buttonLinkIcon} src={linkIcon} alt="" />
		</Link>
	) : (
		<a className={styles.buttonLink} {...props}>
			{props.children}{" "}
			<Image className={styles.buttonLinkIcon} src={linkIcon} alt="" />
		</a>
	);
};
