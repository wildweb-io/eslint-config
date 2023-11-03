import {parserJsonc, pluginJsonc} from '../plugins';
import {GLOB_JSON, GLOB_JSON5, GLOB_JSONC} from '../globs';
import type {FlatESLintConfigItem, Rules} from 'eslint-define-config';

export const jsonc: FlatESLintConfigItem[] = [
	{
		plugins: {
			jsonc: pluginJsonc,
		},
	},
	{
		files: [GLOB_JSON, GLOB_JSON5, GLOB_JSONC],
		languageOptions: {
			parser: parserJsonc,
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
			'jsonc/object-curly-newline': [
				'error',
				{consistent: true, multiline: true},
			],
			'jsonc/object-curly-spacing': ['error', 'never'],
			'jsonc/object-property-newline': [
				'error',
				{allowMultiplePropertiesPerLine: true},
			],
			'jsonc/quote-props': 'error',
			'jsonc/quotes': 'error',
			'jsonc/sort-keys': [
				'error',
				'asc',
				{caseSensitive: false, natural: true},
			],
			'jsonc/space-unary-ops': 'error',
			'jsonc/valid-json-number': 'error',
			'jsonc/vue-custom-block/no-parsing-error': 'error',
			'jsonc/array-bracket-spacing': ['error', 'never'],
			'jsonc/comma-dangle': ['error', 'never'],
			'jsonc/comma-style': ['error', 'last'],
			'jsonc/indent': ['error', 2],
			'jsonc/key-spacing': ['error', {afterColon: true, beforeColon: false}],
		},
	},
	{
		files: ['**/package.json'],
		rules: {
			'jsonc/sort-array-values': [
				'error',
				{
					order: {type: 'asc'},
					pathPattern: '^files$',
				},
			],
			'jsonc/sort-keys': [
				'error',
				{
					order: [
						'name',
						'version',
						'private',
						'packageManager',
						'description',
						'type',
						'keywords',
						'license',
						'homepage',
						'bugs',
						'repository',
						'author',
						'contributors',
						'funding',
						'files',
						'main',
						'module',
						'types',
						'exports',
						'typesVersions',
						'sideEffects',
						'unpkg',
						'jsdelivr',
						'browser',
						'bin',
						'man',
						'directories',
						'publishConfig',
						'scripts',
						'peerDependencies',
						'peerDependenciesMeta',
						'optionalDependencies',
						'dependencies',
						'devDependencies',
						'engines',
						'config',
						'overrides',
						'pnpm',
						'husky',
						'lint-staged',
						'eslintConfig',
						'prettier',
					],
					pathPattern: '^$',
				},
				{
					order: {type: 'asc'},
					pathPattern: '^(?:dev|peer|optional|bundled)?[Dd]ependencies$',
				},
				{
					order: ['types', 'require', 'import', 'default'],
					pathPattern: '^exports.*$',
				},
				{
					order: {type: 'asc'},
					pathPattern: '^resolutions$',
				},
				{
					order: {type: 'asc'},
					pathPattern: '^pnpm.overrides$',
				},
			],
		},
	},
	{
		files: ['**/tsconfig.json', '**/tsconfig.*.json'],
		rules: {
			'jsonc/sort-keys': [
				'error',
				{
					order: [
						'extends',
						'compilerOptions',
						'references',
						'files',
						'include',
						'exclude',
					],
					pathPattern: '^$',
				},
				{
					order: [
						/* Projects */
						'incremental',
						'composite',
						'tsBuildInfoFile',
						'disableSourceOfProjectReferenceRedirect',
						'disableSolutionSearching',
						'disableReferencedProjectLoad',
						/* Language and Environment */
						'target',
						'jsx',
						'jsxFactory',
						'jsxFragmentFactory',
						'jsxImportSource',
						'lib',
						'moduleDetection',
						'noLib',
						'reactNamespace',
						'useDefineForClassFields',
						'emitDecoratorMetadata',
						'experimentalDecorators',
						/* Modules */
						'baseUrl',
						'rootDir',
						'rootDirs',
						'customConditions',
						'module',
						'moduleResolution',
						'moduleSuffixes',
						'noResolve',
						'paths',
						'resolveJsonModule',
						'resolvePackageJsonExports',
						'resolvePackageJsonImports',
						'typeRoots',
						'types',
						'allowArbitraryExtensions',
						'allowImportingTsExtensions',
						'allowUmdGlobalAccess',
						/* JavaScript Support */
						'allowJs',
						'checkJs',
						'maxNodeModuleJsDepth',
						/* Type Checking */
						'strict',
						'strictBindCallApply',
						'strictFunctionTypes',
						'strictNullChecks',
						'strictPropertyInitialization',
						'allowUnreachableCode',
						'allowUnusedLabels',
						'alwaysStrict',
						'exactOptionalPropertyTypes',
						'noFallthroughCasesInSwitch',
						'noImplicitAny',
						'noImplicitOverride',
						'noImplicitReturns',
						'noImplicitThis',
						'noPropertyAccessFromIndexSignature',
						'noUncheckedIndexedAccess',
						'noUnusedLocals',
						'noUnusedParameters',
						'useUnknownInCatchVariables',
						/* Emit */
						'declaration',
						'declarationDir',
						'declarationMap',
						'downlevelIteration',
						'emitBOM',
						'emitDeclarationOnly',
						'importHelpers',
						'importsNotUsedAsValues',
						'inlineSourceMap',
						'inlineSources',
						'mapRoot',
						'newLine',
						'noEmit',
						'noEmitHelpers',
						'noEmitOnError',
						'outDir',
						'outFile',
						'preserveConstEnums',
						'preserveValueImports',
						'removeComments',
						'sourceMap',
						'sourceRoot',
						'stripInternal',
						/* Interop Constraints */
						'allowSyntheticDefaultImports',
						'esModuleInterop',
						'forceConsistentCasingInFileNames',
						'isolatedModules',
						'preserveSymlinks',
						'verbatimModuleSyntax',
						/* Completeness */
						'skipDefaultLibCheck',
						'skipLibCheck',
					],
					pathPattern: '^compilerOptions$',
				},
			],
		},
	},
];
