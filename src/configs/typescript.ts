import {GLOB_TS, GLOB_TSX} from '../globs';
import {parserTypeScript, pluginAntfu, pluginTypeScript} from '../plugins';
import type {FlatESLintConfigItem} from 'eslint-define-config';

export const typescript: FlatESLintConfigItem[] = [
	{
		files: [GLOB_TS, GLOB_TSX],
		languageOptions: {
			parser: parserTypeScript,
			parserOptions: {
				sourceType: 'module',
			},
		},
		plugins: {
			'@typescript-eslint': pluginTypeScript,
			antfu: pluginAntfu,
		},
		rules: {
			...pluginTypeScript.configs['eslint-recommended'].overrides?.[0].rules,
			...pluginTypeScript.configs.strict.rules,
			'@typescript-eslint/adjacent-overload-signatures': ['error'],
			'@typescript-eslint/array-type': ['error', {'default': 'array-simple'}],
			'@typescript-eslint/await-thenable': ['off'],
			'@typescript-eslint/ban-ts-comment': [
				'error',
				{
					'ts-expect-error': 'allow-with-description',
					minimumDescriptionLength: 4,
				},
			],
			'@typescript-eslint/ban-tslint-comment': ['error'],
			'@typescript-eslint/ban-types': [
				'error',
				{
					extendDefaults: false,
					types: {
						String: {
							message: 'Use `string` instead.',
							fixWith: 'string',
						},
						Number: {
							message: 'Use `number` instead.',
							fixWith: 'number',
						},
						Boolean: {
							message: 'Use `boolean` instead.',
							fixWith: 'boolean',
						},
						Symbol: {
							message: 'Use `symbol` instead.',
							fixWith: 'symbol',
						},
						BigInt: {
							message: 'Use `bigint` instead.',
							fixWith: 'bigint',
						},
						Object: {
							message:
								'The `Object` type is mostly the same as `unknown`. You probably want `Record<string, unknown>` instead. See https://github.com/typescript-eslint/typescript-eslint/pull/848',
							fixWith: 'Record<string, unknown>',
						},
						'{}': {
							message:
								'The `{}` type is mostly the same as `unknown`. You probably want `Record<string, unknown>` instead.',
							fixWith: 'Record<string, unknown>',
						},
						object: {
							message:
								'The `object` type is hard to use. Use `Record<string, unknown>` instead. See: https://github.com/typescript-eslint/typescript-eslint/pull/848',
							fixWith: 'Record<string, unknown>',
						},
						Function:
							'Use a specific function type instead, like `() => void`.',
						'[]': "Don't use the empty array type `[]`. It only allows empty arrays. Use `SomeType[]` instead.",
						'[[]]':
							"Don't use `[[]]`. It only allows an array with a single element which is an empty array. Use `SomeType[][]` instead.",
						'[[[]]]': "Don't use `[[[]]]`. Use `SomeType[][][]` instead.",
						'[[[[]]]]': 'ur drunk 🤡',
						'[[[[[]]]]]': '🦄💥',
					},
				},
			],
			'@typescript-eslint/brace-style': [
				'off',
				'1tbs',
				{allowSingleLine: false},
			],
			'@typescript-eslint/class-literal-property-style': ['error', 'getters'],
			'@typescript-eslint/comma-dangle': ['off', 'always-multiline'],
			'@typescript-eslint/comma-spacing': ['off', {before: false, after: true}],
			'@typescript-eslint/consistent-generic-constructors': [
				'error',
				'constructor',
			],
			'@typescript-eslint/consistent-indexed-object-style': [
				'error',
				'index-signature',
			],
			'@typescript-eslint/consistent-type-assertions': [
				'error',
				{
					assertionStyle: 'as',
					objectLiteralTypeAssertions: 'allow-as-parameter',
				},
			],
			'@typescript-eslint/consistent-type-definitions': ['error', 'type'],
			'@typescript-eslint/consistent-type-imports': [
				'error',
				{
					prefer: 'type-imports',
					fixStyle: 'separate-type-imports',
					disallowTypeAnnotations: false,
				},
			],
			'@typescript-eslint/default-param-last': ['error'],
			'@typescript-eslint/explicit-function-return-type': ['off'],
			'@typescript-eslint/explicit-member-accessibility': ['off'],
			'@typescript-eslint/func-call-spacing': ['off', 'never'],
			'@typescript-eslint/indent': [
				'off',
				'tab',
				{
					SwitchCase: 1,
					flatTernaryExpressions: false,
					offsetTernaryExpressions: false,
					ignoreComments: false,
				},
			],
			'@typescript-eslint/keyword-spacing': [
				'off',
				{before: true, after: true, overrides: {}},
			],
			'@typescript-eslint/lines-between-class-members': [
				'error',
				'always',
				{exceptAfterSingleLine: true},
			],
			'@typescript-eslint/member-delimiter-style': [
				'off',
				{
					multiline: {
						delimiter: 'semi',
						requireLast: true,
					},
					singleline: {
						delimiter: 'semi',
						requireLast: false,
					},
				},
			],
			'@typescript-eslint/member-ordering': ['error'],
			'@typescript-eslint/naming-convention': [
				'warn',
				{selector: 'function', format: ['PascalCase', 'camelCase']},
			],
			'@typescript-eslint/no-array-constructor': ['error'],
			'@typescript-eslint/no-dupe-class-members': ['error'],
			'@typescript-eslint/no-duplicate-enum-values': ['error'],
			'@typescript-eslint/no-dynamic-delete': ['error'],
			'@typescript-eslint/no-empty-function': [
				'error',
				{allow: ['arrowFunctions', 'functions', 'methods']},
			],
			'@typescript-eslint/no-empty-interface': [
				'error',
				{allowSingleExtends: true},
			],
			'@typescript-eslint/no-explicit-any': ['off'],
			'@typescript-eslint/no-extra-non-null-assertion': ['error'],
			'@typescript-eslint/no-extra-parens': [
				'off',
				'all',
				{
					conditionalAssign: true,
					nestedBinaryExpressions: false,
					returnAssign: false,
					ignoreJSX: 'all',
					enforceForArrowConditionals: false,
				},
			],
			'@typescript-eslint/no-extra-semi': ['off'],
			'@typescript-eslint/no-extraneous-class': [
				'warn',
				{
					allowConstructorOnly: false,
					allowEmpty: false,
					allowStaticOnly: false,
					allowWithDecorator: true,
				},
			],
			'@typescript-eslint/no-floating-promises': ['off'],
			'@typescript-eslint/no-for-in-array': ['error'],
			'@typescript-eslint/no-implied-eval': ['off'],
			'@typescript-eslint/no-inferrable-types': [
				'error',
				{ignoreParameters: false, ignoreProperties: false},
			],
			'@typescript-eslint/no-invalid-void-type': ['error'],
			'@typescript-eslint/no-loop-func': ['error'],
			'@typescript-eslint/no-loss-of-precision': ['error'],
			'@typescript-eslint/no-magic-numbers': [
				'warn',
				{
					ignore: [],
					ignoreArrayIndexes: true,
					enforceConst: true,
					detectObjects: false,
				},
			],
			'@typescript-eslint/no-misused-new': ['error'],
			'@typescript-eslint/no-misused-promises': ['off'],
			'@typescript-eslint/no-namespace': [
				'error',
				{allowDeclarations: false, allowDefinitionFiles: false},
			],
			'@typescript-eslint/no-non-null-asserted-nullish-coalescing': ['error'],
			'@typescript-eslint/no-non-null-asserted-optional-chain': ['error'],
			'@typescript-eslint/no-non-null-assertion': ['off'],
			'@typescript-eslint/no-redeclare': ['error'],
			'@typescript-eslint/no-redundant-type-constituents': ['off'],
			'@typescript-eslint/no-require-imports': ['error'],
			'@typescript-eslint/no-shadow': ['off'],
			'@typescript-eslint/no-this-alias': ['error', {allowDestructuring: true}],
			'@typescript-eslint/no-unnecessary-condition': ['off'],
			'@typescript-eslint/no-unnecessary-type-assertion': ['off'],
			'@typescript-eslint/no-unnecessary-type-constraint': ['error'],
			'@typescript-eslint/no-unsafe-argument': ['off'],
			'@typescript-eslint/no-unsafe-assignment': ['off'],
			'@typescript-eslint/no-unsafe-call': ['off'],
			'@typescript-eslint/no-unsafe-member-access': ['off'],
			'@typescript-eslint/no-unsafe-return': ['off'],
			'@typescript-eslint/no-unused-expressions': [
				'error',
				{
					allowShortCircuit: false,
					allowTernary: false,
					allowTaggedTemplates: false,
					enforceForJSX: false,
				},
			],
			'@typescript-eslint/no-unused-vars': [
				'error',
				{
					vars: 'all',
					args: 'after-used',
					ignoreRestSiblings: true,
					argsIgnorePattern: '^_',
					varsIgnorePattern: '^_',
				},
			],
			'@typescript-eslint/no-use-before-define': [
				'error',
				{functions: true, classes: true, variables: true},
			],
			'@typescript-eslint/no-useless-constructor': ['error'],
			'@typescript-eslint/no-useless-empty-export': ['error'],
			'@typescript-eslint/no-var-requires': ['error'],
			'@typescript-eslint/object-curly-spacing': ['off', 'never'],
			'@typescript-eslint/padding-line-between-statements': [
				'error',
				{blankLine: 'always', prev: 'multiline-block-like', next: '*'},
			],
			'@typescript-eslint/parameter-properties': [
				'error',
				{prefer: 'parameter-property'},
			],
			'@typescript-eslint/prefer-as-const': ['error'],
			'@typescript-eslint/prefer-for-of': ['error'],
			'@typescript-eslint/prefer-function-type': ['error'],
			'@typescript-eslint/prefer-literal-enum-member': ['error'],
			'@typescript-eslint/prefer-namespace-keyword': ['error'],
			'@typescript-eslint/prefer-ts-expect-error': ['error'],
			'@typescript-eslint/quotes': ['off', 'single'],
			'@typescript-eslint/require-await': ['off'],
			'@typescript-eslint/restrict-template-expressions': ['off'],
			'@typescript-eslint/semi': ['off', 'always'],
			'@typescript-eslint/space-before-blocks': ['off', 'always'],
			'@typescript-eslint/space-before-function-paren': [
				'off',
				{anonymous: 'always', named: 'never', asyncArrow: 'always'},
			],
			'@typescript-eslint/space-infix-ops': ['off'],
			'@typescript-eslint/strict-boolean-expressions': ['off'],
			'@typescript-eslint/triple-slash-reference': [
				'warn',
				{path: 'never', types: 'never', lib: 'never'},
			],
			'@typescript-eslint/type-annotation-spacing': ['off'],
			'@typescript-eslint/typedef': ['off'],
			'@typescript-eslint/unbound-method': ['off'],
			'@typescript-eslint/unified-signatures': [
				'error',
				{ignoreDifferentlyNamedParameters: true},
			],
		},
	},
	{
		files: ['**/*.d.ts'],
		rules: {
			'eslint-comments/no-unlimited-disable': 'off',
			'import/no-duplicates': 'off',
			'unused-imports/no-unused-vars': 'off',
		},
	},
	{
		files: ['**/*.{test,spec}.ts?(x)'],
		rules: {
			'no-unused-expressions': 'off',
		},
	},
	{
		files: ['**/*.js', '**/*.cjs'],
		rules: {
			'@typescript-eslint/no-require-imports': 'off',
			'@typescript-eslint/no-var-requires': 'off',
		},
	},
];
