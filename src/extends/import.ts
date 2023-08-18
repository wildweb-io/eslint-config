import importPlugin from 'eslint-plugin-import';
import type {Linter} from 'eslint';
import {MOD_FILES} from '../constants.js';

export const importConfig: Linter.FlatConfig[] = [
	{
		files: MOD_FILES,
		plugins: {
			'import': importPlugin,
		},
		settings: {
			'import/resolver': {node: true},
			'import/parsers': {
				espree: ['.js', '.cjs', '.mjs', '.jsx'],
			},
		},
		rules: {
			'import/consistent-type-specifier-style': ['error', 'prefer-top-level'],
			'import/default': ['error'],
			'import/dynamic-import-chunkname': [
				'off',
				{importFunctions: [], webpackChunknameFormat: '[0-9a-zA-Z-_/.]+'},
			],
			'import/export': ['error'],
			'import/exports-last': ['off'],
			'import/extensions': [
				'off',
				{
					js: 'never',
					json: 'always',
					svg: 'always',
					png: 'always',
					jpg: 'always',
					ico: 'always',
					graphql: 'always',
					css: 'always',
					sass: 'always',
					scss: 'always',
					less: 'always',
					styl: 'always',
				},
			],
			'import/first': ['error'],
			'import/group-exports': ['off'],
			'import/max-dependencies': ['off', {max: 10}],
			'import/named': ['error'],
			'import/namespace': ['error', {allowComputed: true}],
			'import/newline-after-import': ['error'],
			'import/no-absolute-path': [
				'error',
				{esmodule: true, commonjs: true, amd: false},
			],
			'import/no-amd': ['error'],
			'import/no-anonymous-default-export': [
				'error',
				{
					allowArray: false,
					allowArrowFunction: false,
					allowAnonymousClass: false,
					allowAnonymousFunction: false,
					allowLiteral: false,
					allowObject: false,
				},
			],
			'import/no-commonjs': ['off'],
			'import/no-cycle': ['error'],
			'import/no-default-export': ['error'],
			'import/no-deprecated': ['error'],
			'import/no-duplicates': ['error'],
			'import/no-dynamic-require': ['off'],
			'import/no-empty-named-blocks': 'off',
			'import/no-extraneous-dependencies': ['off'],
			'import/no-import-module-exports': ['error', {exceptions: []}],
			'import/no-internal-modules': ['off', {allow: []}],
			'import/no-mutable-exports': ['error'],
			'import/no-named-as-default': ['error'],
			'import/no-named-as-default-member': ['error'],
			'import/no-named-default': ['error'],
			'import/no-named-export': ['off'],
			'import/no-namespace': ['off'],
			'import/no-nodejs-modules': ['off'],
			'import/no-relative-packages': ['error'],
			'import/no-relative-parent-imports': ['off'],
			'import/no-restricted-paths': ['off'],
			'import/no-self-import': ['error'],
			'import/no-unassigned-import': [
				'error',
				{
					allow: [
						'**/register',
						'**/register.*',
						'**/register /**',
						'**/register /**.*',
						'**/*.css',
						'** /*.scss',
						'**/*.sass',
						'** /*.less',
					],
				},
			],
			'import/no-unresolved': [
				'off',
				{commonjs: true, caseSensitive: true, caseSensitiveStrict: false},
			],
			'import/no-unused-modules': [
				'off',
				{ignoreExports: [], missingExports: true, unusedExports: true},
			],
			'import/no-useless-path-segments': ['error', {commonjs: true}],
			'import/no-webpack-loader-syntax': ['error'],
			'import/order': [
				'error',
				{
					groups: ['builtin', 'external', 'parent', 'sibling', 'index'],
					'newlines-between': 'never',
					warnOnUnassignedImports: false,
				},
			],
			'import/prefer-default-export': ['off'],
			'import/unambiguous': ['off'],
		},
	},
];
