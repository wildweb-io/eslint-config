import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';
import nextPlugin from '@next/eslint-plugin-next';
import tailwindcssPlugin from 'eslint-plugin-tailwindcss';
import type {Linter} from 'eslint';
import {REACT_FILES} from '../constants.js';
import {a11yRules} from '../rules/a11y.js';
import {nextRules} from '../rules/next.js';
import {reactRules} from '../rules/react.js';
import {tailwindcssRules} from '../rules/tailwindcss.js';

export const reactConfig: Linter.FlatConfig[] = [
	{
		files: REACT_FILES,
		languageOptions: {
			globals: {JSX: true},
			parserOptions: {ecmaFeatures: {jsx: true}},
		},
		settings: {
			react: {
				version: 'detect',
				pragma: 'React',
			},
			tailwindcss: {
				callees: ['cn'],
				config: 'tailwind.config.js',
			},
			next: {
				rootDir: true,
			},
			propWrapperFunctions: ['forbidExtraProps', 'exact', 'Object.freeze'],
		},
		plugins: {
			tailwindcss: tailwindcssPlugin,
			react: reactPlugin,
			'react-hooks': reactHooksPlugin,
			'jsx-a11y': jsxA11yPlugin,
			'@next/next': nextPlugin,
		},
		rules: {
			// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
			...(reactPlugin.configs.all.rules as Linter.FlatConfig['rules']),
			...reactRules,
			...tailwindcssRules,
			...a11yRules,
			...nextRules,
		},
	},
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
		files: ['**/*.ts', '**/*.tsx', '**/*.mtsx'],
		settings: {
			tailwindcss: {
				callees: ['cn'],
				config: 'tailwind.config.ts',
			},
		},
	},
];
