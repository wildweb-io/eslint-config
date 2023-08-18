import type {Linter} from 'eslint';

export const tailwindcssRules = {
	'tailwindcss/classnames-order': [1],
	'tailwindcss/enforces-negative-arbitrary-values': [1],
	'tailwindcss/enforces-shorthand': [1],
	'tailwindcss/migration-from-tailwind-2': [1],
	'tailwindcss/no-arbitrary-value': [0],
	'tailwindcss/no-contradicting-classname': [2],
	'tailwindcss/no-custom-classname': [1],
} satisfies Linter.FlatConfig['rules'];
