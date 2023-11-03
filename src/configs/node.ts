import {GLOB_SRC} from '../globs';
import {pluginNode} from '../plugins';
import type {FlatESLintConfigItem} from 'eslint-define-config';

export const node: FlatESLintConfigItem[] = [
	{
		plugins: {
			n: pluginNode,
		},
	},
	pluginNode.configs['flat/recommended'],
	{
		files: [GLOB_SRC],
		rules: {
			'n/no-missing-import': ['off'],
			'n/file-extension-in-import': ['off'],
			'n/no-deprecated-api': ['error'],
			'n/no-mixed-requires': ['error', {grouping: true, allowCall: true}],
			'n/no-new-require': ['error'],
			'n/no-path-concat': ['error'],
			'n/no-unpublished-bin': ['error'],
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
			'n/handle-callback-err': ['error', '^(err|error)$'],
			'n/no-exports-assign': 'error',
		},
	},
];
