/* eslint-disable max-lines */
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import {FlatCompat} from '@eslint/eslintrc';
import type {Linter} from 'eslint';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
	baseDirectory: __dirname,
	resolvePluginsRelativeTo: __dirname,
});

export const typescriptConfig: Linter.FlatConfig[] = [
	...compat.config({
		'extends': ['plugin:@typescript-eslint/recommended'],
		parser: '@typescript-eslint/parser',
		parserOptions: {
			project: './tsconfig.json',
			extraFileExtensions: ['.json', '.yml', '.yaml'],
			warnOnUnsupportedTypeScriptVersion: true,
		},
		plugins: ['@typescript-eslint'],
	}),
	{
		files: ['**/*.ts', '**/*.tsx', '**/*.mtsx'],
		settings: {
			'import/resolver': {
				node: true,
				typescript: true,
			},
			'import/parsers': {
				espree: ['.js', '.cjs', '.mjs', '.jsx'],
				'@typescript-eslint/parser': ['.ts'],
			},
		},
		rules: {
			...tsPlugin.configs['eslint-recommended'].overrides?.[0].rules,
			...tsPlugin.configs.recommended.rules,
			...tsPlugin.configs['recommended-requiring-type-checking'].rules,
			'@typescript-eslint/adjacent-overload-signatures': 'error',
			'@typescript-eslint/array-type': ['error', {'default': 'array-simple'}],
			'@typescript-eslint/await-thenable': 'error',
			'@typescript-eslint/ban-ts-comment': [
				'error',
				{
					'ts-expect-error': 'allow-with-description',
					minimumDescriptionLength: 4,
				},
			],
			'@typescript-eslint/ban-tslint-comment': 'error',
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
			'@typescript-eslint/block-spacing': 'off',
			'@typescript-eslint/brace-style': [
				'off',
				'1tbs',
				{allowSingleLine: false},
			],
			'@typescript-eslint/class-literal-property-style': ['error', 'getters'],
			'@typescript-eslint/class-methods-use-this': 'off',
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

			'@typescript-eslint/consistent-type-exports': [
				'error',
				{fixMixedExportsWithInlineTypeSpecifier: true},
			],
			'@typescript-eslint/consistent-type-imports': [
				'error',
				{
					prefer: 'type-imports',
					fixStyle: 'separate-type-imports',
					disallowTypeAnnotations: false,
				},
			],
			'@typescript-eslint/default-param-last': 'error',
			'@typescript-eslint/dot-notation': [
				'error',
				{
					allowKeywords: true,
					allowPattern: '',
					allowPrivateClassPropertyAccess: false,
					allowProtectedClassPropertyAccess: false,
					allowIndexSignaturePropertyAccess: false,
				},
			],
			'@typescript-eslint/explicit-function-return-type': 'off',
			'@typescript-eslint/explicit-member-accessibility': 'off',
			'@typescript-eslint/explicit-module-boundary-types': 'off',
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
			'@typescript-eslint/init-declarations': 'off',
			'@typescript-eslint/key-spacing': 'off',
			'@typescript-eslint/keyword-spacing': [
				'off',
				{before: true, after: true, overrides: {}},
			],
			'@typescript-eslint/lines-around-comment': 'off',
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
			'@typescript-eslint/member-ordering': 'error',
			'@typescript-eslint/method-signature-style': 'off',
			'@typescript-eslint/naming-convention': [
				'warn',
				{selector: 'function', format: ['PascalCase', 'camelCase']},
			],
			'no-array-constructor': 'off',
			'@typescript-eslint/no-array-constructor': 'error',
			'@typescript-eslint/no-base-to-string': 'error',
			'@typescript-eslint/no-confusing-non-null-assertion': 'error',
			'@typescript-eslint/no-confusing-void-expression': 'error',
			'@typescript-eslint/no-dupe-class-members': 'off',
			'@typescript-eslint/no-duplicate-enum-values': 'error',
			'@typescript-eslint/no-duplicate-type-constituents': 'error',
			'@typescript-eslint/no-dynamic-delete': 'error',
			'@typescript-eslint/no-empty-function': [
				'error',
				{allow: ['arrowFunctions', 'functions', 'methods']},
			],
			'@typescript-eslint/no-empty-interface': [
				'error',
				{allowSingleExtends: true},
			],
			'@typescript-eslint/no-explicit-any': 'error',
			'@typescript-eslint/no-extra-non-null-assertion': 'error',
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
			'@typescript-eslint/no-extra-semi': 'off',
			'@typescript-eslint/no-extraneous-class': [
				'warn',
				{
					allowConstructorOnly: false,
					allowEmpty: false,
					allowStaticOnly: false,
					allowWithDecorator: true,
				},
			],
			'@typescript-eslint/no-floating-promises': [
				'error',
				{ignoreVoid: true, ignoreIIFE: true},
			],
			'@typescript-eslint/no-for-in-array': 'off',
			'@typescript-eslint/no-implied-eval': 'error',
			'@typescript-eslint/no-import-type-side-effects': 'off',
			'@typescript-eslint/no-inferrable-types': [
				'error',
				{ignoreParameters: false, ignoreProperties: false},
			],
			'@typescript-eslint/no-invalid-this': 'off',
			'@typescript-eslint/no-invalid-void-type': 'error',
			'@typescript-eslint/no-loop-func': 'error',
			'no-loss-of-precision': 'off',
			'@typescript-eslint/no-loss-of-precision': 'error',
			'@typescript-eslint/no-magic-numbers': [
				'off',
				{
					ignore: [],
					ignoreArrayIndexes: true,
					enforceConst: true,
					detectObjects: false,
				},
			],
			'@typescript-eslint/no-meaningless-void-operator': 'error',
			'@typescript-eslint/no-misused-new': 'error',
			'@typescript-eslint/no-misused-promises': [
				'error',
				{
					checksVoidReturn: {
						arguments: false,
						attributes: false,
					},
				},
			],
			'@typescript-eslint/no-mixed-enums': 'error',
			'@typescript-eslint/no-namespace': [
				'error',
				{allowDeclarations: false, allowDefinitionFiles: false},
			],
			'@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'error',
			'@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
			'@typescript-eslint/no-non-null-assertion': 'error',
			'@typescript-eslint/no-redeclare': 'off',
			'@typescript-eslint/no-redundant-type-constituents': 'error',
			'@typescript-eslint/no-require-imports': 'off',
			'@typescript-eslint/no-restricted-imports': 'off',
			'@typescript-eslint/no-shadow': 'off',
			'@typescript-eslint/no-this-alias': ['error', {allowDestructuring: true}],
			'@typescript-eslint/no-throw-literal': [
				'error',
				{allowThrowingUnknown: true, allowThrowingAny: false},
			],
			'@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
			'@typescript-eslint/no-unnecessary-condition': 'error',
			'@typescript-eslint/no-unnecessary-qualifier': 'off',
			'@typescript-eslint/no-unnecessary-type-arguments': 'error',
			'@typescript-eslint/no-unnecessary-type-assertion': 'error',
			'@typescript-eslint/no-unnecessary-type-constraint': 'error',
			'@typescript-eslint/no-unsafe-argument': 'error',
			'@typescript-eslint/no-unsafe-assignment': 'error',
			'@typescript-eslint/no-unsafe-call': 'error',
			'@typescript-eslint/no-unsafe-declaration-merging': 'error',
			'@typescript-eslint/no-unsafe-enum-comparison': 'error',
			'@typescript-eslint/no-unsafe-member-access': 'error',
			'@typescript-eslint/no-unsafe-return': 'error',
			'@typescript-eslint/no-unused-expressions': [
				'error',
				{
					allowShortCircuit: false,
					allowTernary: false,
					allowTaggedTemplates: false,
					enforceForJSX: false,
				},
			],
			'no-unused-vars': 'off',
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
				'off',
				{functions: true, classes: true, variables: true},
			],
			'no-useless-constructor': 'off',
			'@typescript-eslint/no-useless-constructor': 'error',
			'@typescript-eslint/no-useless-empty-export': 'error',
			'@typescript-eslint/no-var-requires': 'error',
			'@typescript-eslint/non-nullable-type-assertion-style': 'error',
			'@typescript-eslint/object-curly-spacing': 'off',
			'@typescript-eslint/padding-line-between-statements': 'off',
			'@typescript-eslint/parameter-properties': [
				'error',
				{prefer: 'parameter-property'},
			],
			'@typescript-eslint/prefer-as-const': 'error',
			'@typescript-eslint/prefer-enum-initializers': 'off',
			'@typescript-eslint/prefer-for-of': 'error',
			'@typescript-eslint/prefer-function-type': 'error',
			'@typescript-eslint/prefer-includes': 'error',
			'@typescript-eslint/prefer-literal-enum-member': 'error',
			'@typescript-eslint/prefer-namespace-keyword': 'error',
			'@typescript-eslint/prefer-nullish-coalescing': [
				'error',
				{
					ignoreTernaryTests: false,
					ignoreConditionalTests: true,
					ignoreMixedLogicalExpressions: true,
				},
			],
			'@typescript-eslint/prefer-optional-chain': 'error',
			'@typescript-eslint/prefer-readonly': [
				'error',
				{onlyInlineLambdas: false},
			],
			'@typescript-eslint/prefer-readonly-parameter-types': 'off',
			'@typescript-eslint/prefer-reduce-type-parameter': 'error',
			'@typescript-eslint/prefer-regexp-exec': 'error',
			'@typescript-eslint/prefer-return-this-type': 'error',
			'@typescript-eslint/prefer-string-starts-ends-with': 'error',
			'@typescript-eslint/prefer-ts-expect-error': 'error',
			'@typescript-eslint/promise-function-async': 'error',
			'@typescript-eslint/quotes': 'off',
			'@typescript-eslint/require-array-sort-compare': [
				'error',
				{ignoreStringArrays: true},
			],
			'@typescript-eslint/require-await': 'error',
			'@typescript-eslint/restrict-plus-operands': 'error',
			'@typescript-eslint/restrict-template-expressions': [
				'error',
				{allowNumber: true},
			],
			'@typescript-eslint/return-await': ['error', 'in-try-catch'],
			'@typescript-eslint/semi': 'off',
			'@typescript-eslint/sort-type-constituents': 'off',
			'@typescript-eslint/space-before-blocks': 'off',
			'@typescript-eslint/space-before-function-paren': 'off',
			'@typescript-eslint/space-infix-ops': 'off',
			'@typescript-eslint/strict-boolean-expressions': 'off',
			'@typescript-eslint/switch-exhaustiveness-check': 'off',
			'@typescript-eslint/triple-slash-reference': [
				'warn',
				{path: 'never', types: 'never', lib: 'never'},
			],
			'@typescript-eslint/type-annotation-spacing': 'off',
			'@typescript-eslint/typedef': 'off',
			'@typescript-eslint/unbound-method': 'error',
			'@typescript-eslint/unified-signatures': [
				'error',
				{ignoreDifferentlyNamedParameters: true},
			],
		},
	},
];
