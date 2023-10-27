const fs = require("fs");
const path = require("path");

function getAllFolderNames(directoryPath) {
	try {
		return fs
			.readdirSync(path.join(__dirname, directoryPath), { withFileTypes: true })
			.filter((item) => item.isDirectory())
			.map(({ name }) => name);
	} catch (error) {
		console.log(`Error reading directory: ${error}`);
	}
}

const appsAllowedScopes = getAllFolderNames("/apps");

module.exports = {
	extends: ["@commitlint/config-conventional"],
	/**
	 * Rules configuration
	 * @see https://commitlint.js.org/#/reference-rules
	 */
	rules: {
		"scope-enum": [2, "always", appsAllowedScopes],
	},
};
