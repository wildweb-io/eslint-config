import {parserJsonc, pluginJsonc} from '../plugins';
import {GLOB_JSON, GLOB_JSON5, GLOB_JSONC} from '../globs';
import type {FlatESLintConfigItem, Rules} from 'eslint-define-config';

export const jsonc: FlatESLintConfigItem[] = [
	{
		files: [GLOB_JSON, GLOB_JSON5, GLOB_JSONC],
		languageOptions: {
			parser: parserJsonc,
		},
		plugins: {
			jsonc: pluginJsonc,
		},
		rules: {
			...(pluginJsonc.configs['recommended-with-jsonc'].rules as Rules),
			'strict': 'off',
			'jsonc/no-bigint-literals': 'error',
			'jsonc/no-binary-expression': 'error',
			'jsonc/no-binary-numeric-literals': 'error',
			'jsonc/no-comments': 'error',
			'jsonc/no-dupe-keys': 'error',
			'jsonc/no-escape-sequence-in-identifier': 'error',
			'jsonc/no-floating-decimal': 'error',
			'jsonc/no-hexadecimal-numeric-literals': 'error',
			'jsonc/no-infinity': 'error',
			'jsonc/no-multi-str': 'error',
			'jsonc/no-nan': 'error',
			'jsonc/no-number-props': 'error',
			'jsonc/no-numeric-separators': 'error',
			'jsonc/no-octal': 'error',
			'jsonc/no-octal-escape': 'error',
			'jsonc/no-octal-numeric-literals': 'error',
			'jsonc/no-parenthesized': 'error',
			'jsonc/no-plus-sign': 'error',
			'jsonc/no-regexp-literals': 'error',
			'jsonc/no-sparse-arrays': 'error',
			'jsonc/no-template-literals': 'error',
			'jsonc/no-undefined-value': 'error',
			'jsonc/no-unicode-codepoint-escapes': 'error',
			'jsonc/no-useless-escape': 'error',
			'jsonc/object-curly-newline': 'error',
			'jsonc/object-curly-spacing': 'error',
			'jsonc/object-property-newline': 'error',
			'jsonc/quote-props': 'off',
			'jsonc/quotes': 'off',
			'jsonc/sort-keys': [
				'error',
				'asc',
				{caseSensitive: false, natural: true},
			],
			'jsonc/space-unary-ops': 'error',
			'jsonc/valid-json-number': 'error',
			'jsonc/vue-custom-block/no-parsing-error': 'error',
		},
	},
	{
		files: ['package.json', 'tsconfig.json'],
		rules: {'jsonc/sort-keys': 'off'},
	},
];
