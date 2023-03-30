import { BlogPostMetadata } from "lib/readBlogPosts";
import Head from "next/head";
import * as React from "react";
import { ContentSection } from "./ContentSection";
import { Page } from "./Page";

export interface BlogPostProps extends React.PropsWithChildren {
	meta: BlogPostMetadata;
}
export default function BlogPost({ meta, children }: BlogPostProps) {
	return (
		<Page>
			<Head>
				<title>{meta.title}</title>
				<meta property="og:title" content={meta.title} key="title" />
				<meta property="og:type" content="article" key="type" />
				<meta property="og:image" content={meta.iconURL} key="image" />
				{meta.tags.map((tag) => (
					<meta property="og:article:tag" content={tag} key={`tag:${tag}`} />
				))}
			</Head>
			<ContentSection>{children}</ContentSection>
		</Page>
	);
}
