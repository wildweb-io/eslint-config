import {GLOB_TS, GLOB_TSX} from '../globs';
import {parserTypeScript, pluginAntfu, pluginTypeScript} from '../plugins';
import type {FlatESLintConfigItem} from 'eslint-define-config';

export const typescript: FlatESLintConfigItem[] = [
	{
		files: [GLOB_TS, GLOB_TSX],
		languageOptions: {
			parser: parserTypeScript,
			parserOptions: {
				sourceType: 'module',
			},
		},
		plugins: {
			'@typescript-eslint': pluginTypeScript,
			antfu: pluginAntfu,
		},
		rules: {
			...pluginTypeScript.configs['eslint-recommended'].overrides?.[0].rules,
			...pluginTypeScript.configs.strict.rules,
		},
	},
	{
		files: ['**/*.d.ts'],
		rules: {
			'eslint-comments/no-unlimited-disable': 'off',
			'import/no-duplicates': 'off',
			'unused-imports/no-unused-vars': 'off',
		},
	},
	{
		files: ['**/*.{test,spec}.ts?(x)'],
		rules: {
			'no-unused-expressions': 'off',
		},
	},
	{
		files: ['**/*.js', '**/*.cjs'],
		rules: {
			'@typescript-eslint/no-require-imports': 'off',
			'@typescript-eslint/no-var-requires': 'off',
		},
	},
];
