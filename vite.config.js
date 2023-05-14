import htmlPurge from "vite-plugin-html-purgecss";
const path = require("path");

export default {
	root: path.resolve(__dirname, "src"),
	build: {
		outDir: "../dist",
	},
	server: {
		port: 8080,
		hot: true,
	},

	// install plugins for html purge
	plugins: [htmlPurge()],
};
