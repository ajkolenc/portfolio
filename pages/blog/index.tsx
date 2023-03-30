import styles from "styles/App.module.css";
import { Page } from "lib/elements/Page";
import { TextContentPreview } from "lib/elements/TextContentPreview";
import { ContentSection } from "lib/elements/ContentSection";
import { BlogPostMetadata, getBlogPostData } from "lib/readBlogPosts";

export default function Blog({ allPosts }: { allPosts: BlogPostMetadata[] }) {
	const allTags = new Set<string>(allPosts.flatMap((post) => post.tags));
	return (
		<Page>
			<ContentSection className={styles.blogSection}>
				<div className={styles.blogFilter}>
					<h3 className={styles.blogFilterTitle}>Filter by tag</h3>
					{Array.from(allTags).map((tag) => {
						const postCount = allPosts.filter((post) =>
							post.tags.includes(tag)
						).length;
						return (
							<p key={tag} className={styles.blogFilterTag}>
								{tag} ({postCount})
							</p>
						);
					})}
				</div>
				<div className={styles.contentPreviewList}>
					{allPosts.map((postData) => {
						const date = new Date(postData.timestamp * 1000);
						const dateString = `
                        ${date.toLocaleDateString(undefined, {
													day: "numeric",
												})}
                        ${date.toLocaleDateString(undefined, {
													month: "long",
												})}
                        ${date.toLocaleDateString(undefined, {
													year: "numeric",
												})}
                        `;
						return (
							<TextContentPreview
								key={postData.id}
								title={postData.title}
								subtitle={dateString}
								description={postData.preview}
								image={postData.iconURL}
							/>
						);
					})}
					<TextContentPreview
						title="Unity C# Tips: nameof finally makes Invoke useful"
						subtitle="8 January 2023"
						description="If you're like me, you've avoided using Invoke in Unity. Passing method names as strings? Gross. But C# has a new(ish) trick up its sleeve that finally makes this core bit of Unity practical to use."
					/>
					<TextContentPreview
						title="Unity C# Tips: use local functions to clean up your Coroutines"
						subtitle="8 January 2023"
						description="Coroutines are a super useful bit of Unity, but there's always been a bit of sloppiness if you want to expose them publicly."
					/>
					<TextContentPreview
						title="Unity C# Tips: the best way to check for components"
						subtitle="8 January 2023"
						description="So you just collided with an object, and you need to know if it's an enemy, a powerup, or something else. How can you tell?"
					/>
				</div>
			</ContentSection>
		</Page>
	);
}

export async function getStaticProps() {
	const allPosts = getBlogPostData();
	return {
		props: {
			allPosts,
		},
	};
}
