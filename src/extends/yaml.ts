import type {Linter} from 'eslint';
import yamlPlugin from 'eslint-plugin-yml';
import yamlParser from 'yaml-eslint-parser';

export const yamlConfig: Linter.FlatConfig[] = [
	{
		files: ['**/*.yaml', '**/*.yml'],
		languageOptions: {
			// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-explicit-any
			parser: yamlParser as any,
		},
		plugins: {
			// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-explicit-any
			yml: yamlPlugin as any,
		},
		rules: {
			'yml/block-mapping': 'error',
			'yml/block-mapping-colon-indicator-newline': 'off',
			'yml/block-mapping-question-indicator-newline': 'error',
			'yml/block-sequence': ['error', 'always'],
			'yml/block-sequence-hyphen-indicator-newline': 'error',
			'yml/file-extension': 'off',
			'yml/flow-mapping-curly-newline': 'error',
			'yml/flow-mapping-curly-spacing': 'error',
			'yml/flow-sequence-bracket-newline': 'error',
			'yml/flow-sequence-bracket-spacing': 'error',
			'yml/indent': ['error', 2],
			'yml/key-name-casing': 'off',
			'yml/key-spacing': 'error',
			'yml/no-empty-document': 'error',
			'yml/no-empty-key': 'error',
			'yml/no-empty-mapping-value': 'error',
			'yml/no-empty-sequence-entry': 'error',
			'yml/no-irregular-whitespace': 'error',
			'yml/no-multiple-empty-lines': ['error', {max: 0}],
			'yml/no-tab-indent': 'error',
			'yml/no-trailing-zeros': 'off',
			'yml/plain-scalar': 'off',
			'yml/quotes': ['error', {avoidEscape: true, prefer: 'single'}],
			'yml/require-string-key': 'error',
			'yml/sort-keys': ['error', 'asc', {caseSensitive: false, natural: true}],
			'yml/sort-sequence-values': 'off',
			'yml/spaced-comment': 'error',
			'yml/vue-custom-block/no-parsing-error': 'error',
		},
	},
];
