module.exports = {
	importRules: {
		'import/consistent-type-specifier-style': [2, 'prefer-top-level'],
		'import/default': [2],
		'import/dynamic-import-chunkname': [
			0,
			{
				importFunctions: [],
				webpackChunknameFormat: '[0-9a-zA-Z-_/.]+',
			},
		],
		'import/export': [2],
		'import/exports-last': [0],
		'import/extensions': [
			0,
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
		'import/first': [2],
		'import/group-exports': [0],
		'import/imports-first': [0],
		'import/max-dependencies': [
			0,
			{
				max: 10,
			},
		],
		'import/named': [2],
		'import/namespace': [
			2,
			{
				allowComputed: true,
			},
		],
		'import/newline-after-import': [2],
		'import/no-absolute-path': [
			2,
			{esmodule: true, commonjs: true, amd: false},
		],
		'import/no-amd': [2],
		'import/no-anonymous-default-export': [
			2,
			{
				allowArray: false,
				allowArrowFunction: false,
				allowAnonymousClass: false,
				allowAnonymousFunction: false,
				allowLiteral: false,
				allowObject: false,
			},
		],
		'import/no-commonjs': [0],
		'import/no-cycle': [2],
		'import/no-default-export': [2],
		'import/no-deprecated': [2],
		'import/no-duplicates': [2],
		'import/no-dynamic-require': [0],
		'import/no-extraneous-dependencies': [0],
		'import/no-import-module-exports': [
			2,
			{
				exceptions: [],
			},
		],
		'import/no-internal-modules': [
			0,
			{
				allow: [],
			},
		],
		'import/no-mutable-exports': [2],
		'import/no-named-as-default': [2],
		'import/no-named-as-default-member': [2],
		'import/no-named-default': [2],
		'import/no-named-export': [0],
		'import/no-namespace': [0],
		'import/no-nodejs-modules': [0],
		'import/no-relative-packages': [2],
		'import/no-relative-parent-imports': [0],
		'import/no-restricted-paths': [0],
		'import/no-self-import': [2],
		'import/no-unassigned-import': [
			2,
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
			0,
			{
				commonjs: true,
				caseSensitive: true,
				caseSensitiveStrict: false,
			},
		],
		'import/no-unused-modules': [
			0,
			{
				ignoreExports: [],
				missingExports: true,
				unusedExports: true,
			},
		],
		'import/no-useless-path-segments': [
			2,
			{
				commonjs: true,
			},
		],
		'import/no-webpack-loader-syntax': [2],
		'import/order': [
			2,
			{
				groups: ['builtin', 'external', 'parent', 'sibling', 'index'],
				'newlines-between': 'never',
				warnOnUnassignedImports: false,
			},
		],
		'import/prefer-default-export': [0],
		'import/unambiguous': [0],
	},
};
