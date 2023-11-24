/** @type {import("eslint").Linter.Config} */
const config = {
	parser: "@typescript-eslint/parser",
	parserOptions: {
		project: true,
	},
	plugins: ["@typescript-eslint"],
	extends: ["plugin:@typescript-eslint/recommended-type-checked", "plugin:@typescript-eslint/stylistic-type-checked"],
	rules: {
		//optionally adjust some rules to better fit your project here:
		"@typescript-eslint/consistent-type-definitions": "off",
		"@typescript-eslint/array-type": "off",

		// "@typescript-eslint/no-explicit-any": "off",
		// "@typescript-eslint/no-unused-vars": "off",
		// "@typescript-eslint/no-unsafe-assignment": "off",
		// "@typescript-eslint/no-unsafe-call": "off",
		// "@typescript-eslint/no-unsafe-member-access": "off",
		// "@typescript-eslint/no-unsafe-return": "off",
		// "@typescript-eslint/no-empty-interface": "off",

		"@typescript-eslint/consistent-type-imports": ["warn", { prefer: "type-imports", fixStyle: "inline-type-imports" }],
		"@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_", varsIgnorePattern: "^_" }],
		"@typescript-eslint/no-misused-promises": [2, { checksVoidReturn: { attributes: false } }],
	},
};

module.exports = config;
