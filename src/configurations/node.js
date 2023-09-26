const {baseRules} = require('../rules/base');
const {commentsRules} = require('../rules/comments');
const {importRules} = require('../rules/import');
const {nodeRules} = require('../rules/node');
const {promiseRules} = require('../rules/promise');
const {regexRules} = require('../rules/regex');
const {shopifyRules} = require('../rules/shopify');
const {sonarRules} = require('../rules/sonar');
const {
	typescriptRules,
	typescriptTypeCheckingRules,
} = require('../rules/typescript');
const {unicornRules} = require('../rules/unicorn');
const {graphqlRules} = require('../rules/graphql');
const {jsonRules} = require('../rules/json');
const {yamlRules} = require('../rules/yaml');

module.exports = {
	$schema: 'http://json.schemastore.org/eslintrc',
	env: {
		browser: false,
		node: true,
		es6: true,
		es2022: true,
		es2021: true,
	},
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: './tsconfig.json',
		ecmaFeatures: {
			jsx: false,
			generators: false,
			objectLiteralDuplicateProperties: false,
		},
		ecmaVersion: 'latest',
		sourceType: 'module',
		warnOnUnsupportedTypeScriptVersion: true,
		jsx: false,
		requireConfigFile: false,
	},
	reportUnusedDisableDirectives: true,
	settings: {
		'import/resolver': {
			typescript: {},
			node: {
				extensions: ['.js', '.jsx', '.ts', '.tsx', '.d.ts'],
			},
		},
		'import/extensions': ['.js', '.jsx', '.ts', '.tsx', '.d.ts'],
		'import/external-module-folders': ['node_modules', 'node_modules/@types'],
		'import/ignore': ['node_modules', '\\.s?css'],
		propWrapperFunctions: ['forbidExtraProps', 'exact', 'Object.freeze'],
		'import/core-modules': [],
	},
	ignorePatterns: [
		'**/package.json',
		'**/node_modules/*',
		'**/out/*',
		'**/.next/*',
		'**/dist/*',
		'!.*.js',
	],
	plugins: [
		'@shopify',
		'@typescript-eslint',
		'prettier',
		'eslint-comments',
		'unicorn',
		'promise',
		'n',
		'import',
		'sonarjs',
		'regexp',
	],
	'extends': [
		'eslint:recommended',
		'plugin:promise/recommended',
		'plugin:unicorn/recommended',
		'plugin:sonarjs/recommended',
		'plugin:prettier/recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/recommended-requiring-type-checking',
	],
	overrides: [
		{
			files: '*.json',
			parser: 'jsonc-eslint-parser',
			plugins: ['jsonc'],
			rules: {
				...jsonRules,
			},
		},
		{
			files: '*.yaml',
			parser: 'yaml-eslint-parser',
			plugins: ['yml'],
			rules: {
				...yamlRules,
			},
		},
		{
			files: '*.graphql',
			parser: '@graphql-eslint/eslint-plugin',
			plugins: ['@graphql-eslint'],
			rules: {
				...graphqlRules,
			},
		},
	],
	rules: {
		...baseRules,
		...commentsRules,
		...importRules,
		...nodeRules,
		...promiseRules,
		...regexRules,
		...shopifyRules,
		...sonarRules,
		...typescriptRules,
		...typescriptTypeCheckingRules,
		...unicornRules,
	},
};
