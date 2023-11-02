import {pluginTailwindcss} from '../plugins';
import type {FlatESLintConfigItem} from 'eslint-define-config';

export const tailwindcss: FlatESLintConfigItem[] = [
	{
		settings: {
			tailwindcss: {
				callees: ['cn'],
				config: 'tailwind.config.ts',
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
