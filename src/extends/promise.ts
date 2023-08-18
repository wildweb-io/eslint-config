import type {Linter} from 'eslint';
import promisePlugin from 'eslint-plugin-promise';
import {FILES} from '../constants.js';

export const promiseConfig: Linter.FlatConfig[] = [
	{
		files: FILES,
		plugins: {promise: promisePlugin},
		rules: {
			'promise/always-return': ['error', {ignoreLastCallback: true}],
			'promise/avoid-new': ['off'],
			'promise/catch-or-return': ['error'],
			'promise/no-callback-in-promise': ['warn'],
			'promise/no-multiple-resolved': 'off',
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
