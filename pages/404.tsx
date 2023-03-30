import { ContentSection } from "lib/elements/ContentSection";
import { Page } from "lib/elements/Page";
import * as React from "react";

import styles from "styles/App.module.css";

export default function App() {
	return (
		<Page>
			<ContentSection>
				<h1>404</h1>
				<p>Hmm, the thing you&apos;re looking for isn&apos;t here.</p>
			</ContentSection>
		</Page>
	);
}
