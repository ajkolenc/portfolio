interface ImageContent {
	src?: string;
}

declare module "*.png" {
	const content: ImageContent;
	export default content;
}

declare module "*.jpg" {
	const content: ImageContent;
	export default content;
}

declare module "*.jpeg" {
	const content: ImageContent;
	export default content;
}

declare module "*.gif" {
	const content: ImageContent;
	export default content;
}

declare module "*.mp3" {
	const content: string;
	export default content;
}

declare module "*.wav" {
	const content: any;
	export default content;
}

declare module "*.mp4" {
	const content: string;
	export default content;
}

declare module "*.module.css";
