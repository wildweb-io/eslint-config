const {a11yRules} = require('../rules/a11y');
const {baseRules} = require('../rules/base');
const {commentsRules} = require('../rules/comments');
const {importRules} = require('../rules/import');
const {nextRules} = require('../rules/next');
const {nodeRules} = require('../rules/node');
const {promiseRules} = require('../rules/promise');
const {reactRules} = require('../rules/react');
const {regexRules} = require('../rules/regex');
const {shopifyRules} = require('../rules/shopify');
const {sonarRules} = require('../rules/sonar');
const {tailwindcssRules} = require('../rules/tailwindcss');
const {typescriptRules, typescriptTypeCheckingRules} = require('../rules/typescript');
const {unicornRules} = require('../rules/unicorn');
const {graphqlRules} = require('../rules/graphql');
const {jsonRules} = require('../rules/json');
const {yamlRules} = require('../rules/yaml');

module.exports = {
	$schema: 'http://json.schemastore.org/eslintrc',
	env: {
		browser: true,
		node: true,
		es6: true,
		es2022: true,
		es2021: true,
	},
	globals: {
		document: 'readonly',
		navigator: 'readonly',
		window: 'readonly',
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly',
		JSX: 'readonly',
	},
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: './tsconfig.json',
		ecmaFeatures: {
			jsx: true,
			generators: false,
			objectLiteralDuplicateProperties: false,
		},
		ecmaVersion: 'latest',
		sourceType: 'module',
		warnOnUnsupportedTypeScriptVersion: true,
		jsx: true,
		requireConfigFile: false,
	},
	settings: {
		react: {
			version: 'detect',
			pragma: 'React',
		},
		tailwindcss: {
			callees: ['cn'],
			config: 'tailwind.config.ts',
		},
		next: {
			rootDir: true,
		},
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
	ignorePatterns: ['**/node_modules/*', '**/out/*', '**/.next/*', '**/dist/*'],
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
		'tailwindcss',
		'regexp',
		'react',
		'react-hooks',
		'jsx-a11y',
		'@next/next',
	],
	extends: [
		'eslint:recommended',
		'plugin:react/jsx-runtime',
		'plugin:react/recommended',
		'plugin:promise/recommended',
		'plugin:unicorn/recommended',
		'plugin:sonarjs/recommended',
		'plugin:prettier/recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/recommended-requiring-type-checking',
		'plugin:tailwindcss/recommended',
		'plugin:@next/next/recommended',
	],
	overrides: [
		{
			files: [
				'pages/*',
				'pages/**/*',
				'src/pages/*',
				'src/pages/**/*',
				'app/*',
				'app/**/*',
				'src/app/*',
				'src/app/**/*',
			],
			rules: {
				'import/no-default-export': 'off',
			},
		},
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
		...a11yRules,
		...commentsRules,
		...importRules,
		...nextRules,
		...nodeRules,
		...promiseRules,
		...reactRules,
		...regexRules,
		...shopifyRules,
		...sonarRules,
		...tailwindcssRules,
		...typescriptRules,
		...typescriptTypeCheckingRules,
		...unicornRules,
	},
};
