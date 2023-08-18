/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import type {Linter} from 'eslint';
import nodePlugin from 'eslint-plugin-n';
import globals from 'globals';
import {MOD_FILES} from '../constants.js';

export const nodeConfig: Linter.FlatConfig[] = [
	{
		files: MOD_FILES,
		languageOptions: {
			// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
			globals: {
				...globals['shared-node-browser'],
				...globals.node,
				...globals.es6,
			},
		},
		plugins: {
			n: nodePlugin,
		},
		rules: {
			'n/callback-return': 'off',
			'n/exports-style': 'off',
			'n/file-extension-in-import': ['off'],
			'n/global-require': 'off',
			'n/handle-callback-err': ['error', '^(err|error)$'],
			'n/no-callback-literal': 'off',
			'n/no-deprecated-api': ['error'],
			'n/no-exports-assign': 'error',
			'n/no-extraneous-import': 'error',
			'n/no-extraneous-require': 'error',
			'n/no-missing-import': 'error',
			'n/no-missing-require': 'error',
			'n/no-mixed-requires': ['error', {grouping: true, allowCall: true}],
			'n/no-new-require': ['error'],
			'n/no-path-concat': ['error'],
			'n/no-process-env': 'off',
			'n/no-process-exit': 'off',
			'n/no-restricted-import': 'off',
			'n/no-restricted-require': 'off',
			'n/no-sync': 'off',
			'n/no-unpublished-bin': ['error'],
			'n/no-unpublished-import': 'error',
			'n/no-unpublished-require': 'error',
			'n/no-unsupported-features/es-builtins': 'error',
			'n/no-unsupported-features/es-syntax': 'error',
			'n/no-unsupported-features/node-builtins': 'error',
			'n/prefer-global/buffer': ['off'],
			'n/prefer-global/console': ['error', 'always'],
			'n/prefer-global/process': ['off'],
			'n/prefer-global/text-decoder': ['error', 'always'],
			'n/prefer-global/text-encoder': ['error', 'always'],
			'n/prefer-global/url': ['error', 'always'],
			'n/prefer-global/url-search-params': ['error', 'always'],
			'n/prefer-promises/dns': ['error'],
			'n/prefer-promises/fs': ['error'],
			'n/process-exit-as-throw': ['error'],
			'n/shebang': 'error',
		},
	},
];
