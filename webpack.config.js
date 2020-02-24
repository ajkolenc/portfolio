const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { TypedCssModulesPlugin } = require("typed-css-modules-webpack-plugin");

module.exports = {
	entry: {
		app: "./src/index.tsx"
	},
	// Enable sourcemaps for debugging webpack's output.
	module: {
		rules: [
			{
				test: /\.ts(x?)$/,
				exclude: /node_modules/,
				use: [
					{
						loader: "ts-loader"
					}
				]
			},
			// All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
			{
				enforce: "pre",
				test: /\.js$/,
				loader: "source-map-loader"
			},
			{
				test: /\.css$/,
				use: [
					"style-loader",
					// Use CSS Modules
					{
						loader: "css-loader",
						options: {
							modules: true
						}
					}
				]
			}
		]
	},

	resolve: {
		// Add '.ts' and '.tsx' as resolvable extensions.
		extensions: [".ts", ".tsx", ".js"]
	},

	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "dist")
	},
	devtool: "source-map",
	devServer: {
		contentBase: "./dist"
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "src/index.html"
		}),
		new TypedCssModulesPlugin({
			globPattern: "src/**/*.css"
		})
	]
};
