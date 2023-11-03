import {pluginAntfu, pluginImport} from '../plugins';
import {GLOB_MARKDOWN, GLOB_SRC, GLOB_SRC_EXT} from '../globs';
import type {FlatESLintConfigItem} from 'eslint-define-config';

export const imports: FlatESLintConfigItem[] = [
	{
		plugins: {
			antfu: pluginAntfu,
			import: pluginImport,
		},
		rules: {
			'antfu/import-dedupe': 'error',
			'antfu/no-import-node-modules-by-path': 'error',

			'import/consistent-type-specifier-style': ['error', 'prefer-top-level'],
			'import/default': ['error'],
			'import/export': ['error'],
			'import/first': 'error',
			'import/named': ['error'],
			'import/newline-after-import': [
				'error',
				{considerComments: true, count: 1},
			],
			'import/no-absolute-path': [
				'error',
				{amd: false, commonjs: true, esmodule: true},
			],
			'import/no-amd': ['error'],
			'import/no-anonymous-default-export': [
				'error',
				{
					allowAnonymousClass: false,
					allowAnonymousFunction: false,
					allowArray: false,
					allowArrowFunction: false,
					allowLiteral: false,
					allowObject: false,
				},
			],
			'import/no-cycle': ['error'],
			'import/no-default-export': 'error',
			'import/no-duplicates': 'error',
			'import/no-import-module-exports': ['error', {exceptions: []}],
			'import/no-mutable-exports': 'error',
			'import/no-named-as-default': ['error'],
			'import/no-named-as-default-member': ['error'],
			'import/no-named-default': 'error',
			'import/no-relative-packages': ['error'],
			'import/no-self-import': 'error',
			'import/no-unassigned-import': [
				'error',
				{
					allow: [
						'server-only',
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
			'import/no-useless-path-segments': [
				'error',
				{
					commonjs: true,
				},
			],
			'import/no-webpack-loader-syntax': 'error',
			'import/order': [
				'error',
				{
					groups: [
						'builtin',
						'external',
						'internal',
						'parent',
						'sibling',
						'index',
						'object',
						'type',
					],
					'newlines-between': 'never',
					pathGroups: [{group: 'internal', pattern: '{{@,~}/,#}**'}],
					pathGroupsExcludedImportTypes: ['type'],
				},
			],
		},
	},
	{
		files: [
			`**/*config*.${GLOB_SRC_EXT}`,
			`**/views/${GLOB_SRC}`,
			`**/pages/${GLOB_SRC}`,
			`**/{index,vite,esbuild,rollup,webpack,rspack}.ts`,
			'**/*.d.ts',
			`${GLOB_MARKDOWN}/**`,
		],
		plugins: {
			import: pluginImport,
		},
		rules: {
			'import/no-default-export': 'off',
		},
	},
];
