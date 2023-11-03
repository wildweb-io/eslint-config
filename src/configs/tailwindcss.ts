import {GLOB_HTML, GLOB_SRC} from '../globs';
import {pluginTailwindcss} from '../plugins';
import type {FlatESLintConfigItem} from 'eslint-define-config';

export const tailwindcss: FlatESLintConfigItem[] = [
	{
		plugins: {
			tailwindcss: pluginTailwindcss,
		},
	},
	{
		files: [GLOB_SRC, GLOB_HTML],
		settings: {
			tailwindcss: {
				callees: ['cn', 'classnames', 'clsx'],
				config: 'tailwind.config.ts',
				removeDuplicates: true,
			},
		},
		rules: {
			'tailwindcss/classnames-order': ['warn'],
			'tailwindcss/enforces-negative-arbitrary-values': ['warn'],
			'tailwindcss/enforces-shorthand': ['warn'],
			'tailwindcss/migration-from-tailwind-2': ['warn'],
			'tailwindcss/no-arbitrary-value': ['off'],
			'tailwindcss/no-contradicting-classname': ['error'],
			'tailwindcss/no-custom-classname': ['warn'],
		},
	},
];
