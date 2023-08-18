import type {Linter} from 'eslint';
import regexpPlugin from 'eslint-plugin-regexp';
import {FILES} from '../constants.js';

export const regexpConfig: Linter.FlatConfig[] = [
	{
		files: FILES,
		plugins: {regexp: regexpPlugin},
		rules: {
			'no-control-regex': 2,
			'no-empty-character-class': 0,
			'no-invalid-regexp': 'off',
			'no-misleading-character-class': 2,
			'no-regex-spaces': 2,
			'no-useless-backreference': 'off',
			'prefer-regex-literals': 2,
			'regexp/confusing-quantifier': 'warn',
			'regexp/control-character-escape': 'error',
			'regexp/hexadecimal-escape': 'off',
			'regexp/letter-case': 'off',
			'regexp/match-any': 'error',
			'regexp/negation': 'error',
			'regexp/no-contradiction-with-assertion': 'off',
			'regexp/no-control-character': 'off',
			'regexp/no-dupe-characters-character-class': 'error',
			'regexp/no-dupe-disjunctions': 'error',
			'regexp/no-empty-alternative': 'warn',
			'regexp/no-empty-capturing-group': 'error',
			'regexp/no-empty-character-class': 'off',
			'regexp/no-empty-group': 'error',
			'regexp/no-empty-lookarounds-assertion': 'error',
			'regexp/no-escape-backspace': 'error',
			'regexp/no-extra-lookaround-assertions': 'off',
			'regexp/no-invalid-regexp': 'error',
			'regexp/no-invisible-character': 'error',
			'regexp/no-lazy-ends': 'warn',
			'regexp/no-legacy-features': 'error',
			'regexp/no-misleading-capturing-group': 'off',
			'regexp/no-misleading-unicode-character': 'off',
			'regexp/no-missing-g-flag': 'off',
			'regexp/no-non-standard-flag': 'error',
			'regexp/no-obscure-range': 'error',
			'regexp/no-octal': 'off',
			'regexp/no-optional-assertion': 'error',
			'regexp/no-potentially-useless-backreference': 'warn',
			'regexp/no-standalone-backslash': 'off',
			'regexp/no-super-linear-backtracking': 'error',
			'regexp/no-super-linear-move': 'off',
			'regexp/no-trivially-nested-assertion': 'error',
			'regexp/no-trivially-nested-quantifier': 'error',
			'regexp/no-unused-capturing-group': 'error',
			'regexp/no-useless-assertions': 'error',
			'regexp/no-useless-backreference': 'error',
			'regexp/no-useless-character-class': 'error',
			'regexp/no-useless-dollar-replacements': 'error',
			'regexp/no-useless-escape': 'error',
			'regexp/no-useless-flag': 'warn',
			'regexp/no-useless-lazy': 'error',
			'regexp/no-useless-non-capturing-group': 'error',
			'regexp/no-useless-quantifier': 'error',
			'regexp/no-useless-range': 'error',
			'regexp/no-useless-two-nums-quantifier': 'error',
			'regexp/no-zero-quantifier': 'error',
			'regexp/optimal-lookaround-quantifier': 'warn',
			'regexp/optimal-quantifier-concatenation': 'error',
			'regexp/prefer-character-class': 'error',
			'regexp/prefer-d': 'error',
			'regexp/prefer-escape-replacement-dollar-char': 'off',
			'regexp/prefer-lookaround': 'off',
			'regexp/prefer-named-backreference': 'off',
			'regexp/prefer-named-capture-group': 'off',
			'regexp/prefer-named-replacement': 'off',
			'regexp/prefer-plus-quantifier': 'error',
			'regexp/prefer-predefined-assertion': 'error',
			'regexp/prefer-quantifier': 'off',
			'regexp/prefer-question-quantifier': 'error',
			'regexp/prefer-range': 'error',
			'regexp/prefer-regexp-exec': 'off',
			'regexp/prefer-regexp-test': 'off',
			'regexp/prefer-result-array-groups': 'off',
			'regexp/prefer-star-quantifier': 'error',
			'regexp/prefer-unicode-codepoint-escapes': 'error',
			'regexp/prefer-w': 'error',
			'regexp/require-unicode-regexp': 'off',
			'regexp/sort-alternatives': 'off',
			'regexp/sort-character-class-elements': 'off',
			'regexp/sort-flags': 'error',
			'regexp/strict': 'error',
			'regexp/unicode-escape': 'off',
			'regexp/use-ignore-case': 'off',
		},
	},
];
