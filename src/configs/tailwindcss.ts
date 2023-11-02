import {GLOB_HTML, GLOB_SRC, GLOB_STYLE} from '../globs';
import {pluginTailwindcss} from '../plugins';
import type {FlatESLintConfigItem} from 'eslint-define-config';

export const tailwindcss: FlatESLintConfigItem[] = [
	{
		files: [GLOB_SRC, GLOB_STYLE, GLOB_HTML],
		settings: {
			tailwindcss: {
				callees: ['cn', 'classnames', 'clsx'],
				config: 'tailwind.config.ts',
				removeDuplicates: true,
			},
		},
		plugins: {
			tailwindcss: pluginTailwindcss,
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
