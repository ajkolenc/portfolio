const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = {
	entry: {
		app: "./src/index.tsx",
	},
	mode: "development",
	// Enable sourcemaps for debugging webpack's output.
	module: {
		rules: [
			{
				test: /\.(png|svg|jpg|jpeg|gif|mp3|wav)$/,
				use: ["file-loader"],
			},
			{
				test: /\.css$/,
				use: [
					"style-loader",
					{
						loader: "css-loader",
						options: {
							modules: true,
						},
					},
				],
			},
			{
				test: /\.ts(x?)$/,
				exclude: /node_modules/,
				use: [
					{
						loader: "ts-loader",
					},
				],
			},
			// All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
			{
				enforce: "pre",
				test: /\.js$/,
				loader: "source-map-loader",
			},
		],
	},

	resolve: {
		// Add '.ts' and '.tsx' as resolvable extensions.
		extensions: [".ts", ".tsx", ".js"],
		plugins: [new TsconfigPathsPlugin()],
	},

	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "dist"),
		publicPath: "/",
	},
	devtool: "source-map",
	devServer: {
		static: "./dist",
		host: "0.0.0.0",
		historyApiFallback: true,
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "src/index.html",
			favicon: "src/images/favicon.png",
		}),
	],
};
