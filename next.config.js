const withMDX = require("@next/mdx")({
	extension: /\.mdx?$/,
	options: {
		// If you use remark-gfm, you'll need to use next.config.mjs
		// as the package is ESM only
		// https://github.com/remarkjs/remark-gfm#install
		remarkPlugins: [],
		rehypePlugins: [],
		// If you use `MDXProvider`, uncomment the following line.
		// providerImportSource: "@mdx-js/react",
	},
});

const withVideos = require("next-videos");
const withAudio = require("./lib/withAudio");

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
	images: {
		loader: "custom",
		loaderFile: "./lib/imageLoader.ts",
	},
	trailingSlash: true,
};

module.exports = withAudio(withVideos(withMDX(nextConfig)));