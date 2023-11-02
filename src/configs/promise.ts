import {GLOB_SRC} from '../globs';
import {pluginPromise} from '../plugins';
import type {FlatESLintConfigItem} from 'eslint-define-config';

export const promise: FlatESLintConfigItem[] = [
	{
		files: [GLOB_SRC],
		plugins: {
			promise: pluginPromise,
		},
		rules: {
			...pluginPromise.configs.recommended.rules,
			'promise/always-return': ['error', {ignoreLastCallback: true}],
			'promise/avoid-new': ['off'],
			'promise/catch-or-return': ['error'],
			'promise/no-callback-in-promise': ['warn'],
			'promise/no-native': ['off'],
			'promise/no-nesting': ['warn'],
			'promise/no-new-statics': ['error'],
			'promise/no-promise-in-callback': ['warn'],
			'promise/no-return-in-finally': ['warn'],
			'promise/no-return-wrap': ['error'],
			'promise/param-names': ['error'],
			'promise/prefer-await-to-callbacks': ['off'],
			'promise/prefer-await-to-then': ['off'],
			'promise/valid-params': ['warn'],
		},
	},
];
