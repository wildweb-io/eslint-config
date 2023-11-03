import {GLOB_REACT, GLOB_SRC} from '../globs';
import {pluginStylistic} from '../plugins';
import type {FlatESLintConfigItem} from 'eslint-define-config';

export const stylistic: FlatESLintConfigItem[] = [
	{
		plugins: {
			style: pluginStylistic,
		},
	},
	{
		files: [GLOB_SRC],
		rules: {
			'curly': ['error', 'multi', 'consistent'],

			'style/array-bracket-spacing': ['error', 'never'],
			'style/arrow-parens': ['off', 'as-needed', {requireForBlockBody: false}],
			'style/arrow-spacing': ['error', {after: true, before: true}],
			'style/block-spacing': ['error', 'never'],
			'style/brace-style': ['error', '1tbs', {allowSingleLine: true}],
			'style/comma-dangle': ['error', 'always-multiline'],
			'style/comma-spacing': ['error', {after: true, before: false}],
			'style/comma-style': ['error', 'last'],
			'style/computed-property-spacing': [
				'error',
				'never',
				{enforceForClassMembers: true},
			],
			'style/dot-location': ['error', 'property'],
			'style/eol-last': 'error',
			'style/indent': ['off', 'tab'],
			'style/key-spacing': ['error', {afterColon: true, beforeColon: false}],
			'style/keyword-spacing': ['error', {after: true, before: true}],
			'style/lines-between-class-members': [
				'error',
				'always',
				{exceptAfterSingleLine: true},
			],
			'style/max-statements-per-line': ['error', {max: 1}],
			'style/member-delimiter-style': ['error'],
			'style/multiline-ternary': ['error', 'always-multiline'],
			'style/new-parens': 'error',
			'style/no-extra-parens': ['error', 'functions'],
			'style/no-floating-decimal': 'error',
			'style/no-mixed-operators': [
				'error',
				{
					allowSamePrecedence: true,
					groups: [
						['==', '!=', '===', '!==', '>', '>=', '<', '<='],
						['&&', '||'],
						['in', 'instanceof'],
					],
				},
			],
			'style/no-mixed-spaces-and-tabs': 'off',
			'style/no-multi-spaces': 'error',
			'style/no-multiple-empty-lines': [
				'error',
				{max: 1, maxBOF: 0, maxEOF: 0},
			],
			'style/no-tabs': 'off',
			'style/no-trailing-spaces': [
				'off',
				{
					ignoreComments: true,
					skipBlankLines: true,
				},
			],
			'style/no-whitespace-before-property': 'error',
			'style/object-curly-spacing': ['error', 'never'],
			'style/operator-linebreak': ['off', 'after'],
			'style/padded-blocks': [
				'error',
				{blocks: 'never', classes: 'never', switches: 'never'},
			],
			'style/quote-props': ['error', 'consistent-as-needed'],
			'style/quotes': [
				'error',
				'single',
				{allowTemplateLiterals: true, avoidEscape: true},
			],
			'style/rest-spread-spacing': ['error', 'never'],
			'style/semi': ['error', 'always'],
			'style/semi-spacing': ['error', {after: true, before: false}],
			'style/space-before-blocks': ['error', 'always'],
			'style/space-before-function-paren': [
				'error',
				{anonymous: 'always', asyncArrow: 'always', named: 'never'},
			],
			'style/space-in-parens': ['error', 'never'],
			'style/space-infix-ops': 'error',
			'style/space-unary-ops': ['error', {nonwords: false, words: true}],
			'style/spaced-comment': [
				'error',
				'always',
				{
					block: {
						balanced: true,
						exceptions: ['*'],
						markers: ['!'],
					},
					line: {
						exceptions: ['/', '#'],
						markers: ['/'],
					},
				},
			],
			'style/template-curly-spacing': 'error',
			'style/template-tag-spacing': ['error', 'never'],
			'style/type-annotation-spacing': ['error', {}],
			'style/wrap-iife': ['error', 'any', {functionPrototypeMethods: true}],
			'style/yield-star-spacing': ['error', 'both'],
		},
	},
	{
		files: [GLOB_REACT],
		rules: {
			'style/jsx-closing-bracket-location': 'error',
			'style/jsx-closing-tag-location': 'error',
			'style/jsx-curly-brace-presence': [
				'error',
				{propElementValues: 'always'},
			],
			'style/jsx-curly-newline': 'error',
			'style/jsx-curly-spacing': ['error', 'never'],
			'style/jsx-equals-spacing': 'error',
			'style/jsx-first-prop-new-line': 'error',
			'style/jsx-indent': [
				'off',
				'tab',
				{checkAttributes: true, indentLogicalExpressions: true},
			],
			'style/jsx-indent-props': ['off', 'tab'],
			'style/jsx-max-props-per-line': [
				'error',
				{maximum: 1, when: 'multiline'},
			],
			'style/jsx-one-expression-per-line': ['error', {allow: 'single-child'}],
			'style/jsx-quotes': 'error',
			'style/jsx-tag-spacing': [
				'error',
				{
					afterOpening: 'never',
					beforeClosing: 'never',
					beforeSelfClosing: 'always',
					closingSlash: 'never',
				},
			],
			'style/jsx-wrap-multilines': [
				'error',
				{
					arrow: 'parens-new-line',
					assignment: 'parens-new-line',
					condition: 'parens-new-line',
					declaration: 'parens-new-line',
					logical: 'parens-new-line',
					prop: 'parens-new-line',
					return: 'parens-new-line',
				},
			],
		},
	},
];
