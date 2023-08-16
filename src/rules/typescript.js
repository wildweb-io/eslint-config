module.exports = {
	typescriptRules: {
		'@typescript-eslint/adjacent-overload-signatures': [2],
		'@typescript-eslint/array-type': [2, {default: 'array-simple'}],
		'@typescript-eslint/await-thenable': [0],
		'@typescript-eslint/ban-ts-comment': [
			2,
			{
				'ts-expect-error': 'allow-with-description',
				minimumDescriptionLength: 4,
			},
		],
		'@typescript-eslint/ban-tslint-comment': [2],
		'@typescript-eslint/ban-types': [
			2,
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
					Function: 'Use a specific function type instead, like `() => void`.',
					'[]': "Don't use the empty array type `[]`. It only allows empty arrays. Use `SomeType[]` instead.",
					'[[]]':
						"Don't use `[[]]`. It only allows an array with a single element which is an empty array. Use `SomeType[][]` instead.",
					'[[[]]]': "Don't use `[[[]]]`. Use `SomeType[][][]` instead.",
					'[[[[]]]]': 'ur drunk 🤡',
					'[[[[[]]]]]': '🦄💥',
				},
			},
		],
		'@typescript-eslint/brace-style': [0, '1tbs', {allowSingleLine: false}],
		'@typescript-eslint/class-literal-property-style': [2, 'getters'],
		'@typescript-eslint/comma-dangle': [0, 'always-multiline'],
		'@typescript-eslint/comma-spacing': [0, {before: false, after: true}],
		'@typescript-eslint/consistent-generic-constructors': [2, 'constructor'],
		'@typescript-eslint/consistent-indexed-object-style': [
			2,
			'index-signature',
		],
		'@typescript-eslint/consistent-type-assertions': [
			2,
			{assertionStyle: 'as', objectLiteralTypeAssertions: 'allow-as-parameter'},
		],
		'@typescript-eslint/consistent-type-definitions': [2, 'type'],
		'@typescript-eslint/consistent-type-exports': [
			2,
			{fixMixedExportsWithInlineTypeSpecifier: true},
		],
		'@typescript-eslint/consistent-type-imports': [
			2,
			{
				prefer: 'type-imports',
				fixStyle: 'separate-type-imports',
				disallowTypeAnnotations: false,
			},
		],
		'@typescript-eslint/default-param-last': [2],
		'@typescript-eslint/dot-notation': [
			2,
			{
				allowKeywords: true,
				allowPattern: '',
				allowPrivateClassPropertyAccess: false,
				allowProtectedClassPropertyAccess: false,
				allowIndexSignaturePropertyAccess: false,
			},
		],
		'@typescript-eslint/explicit-function-return-type': [0],
		'@typescript-eslint/explicit-member-accessibility': [0],
		'@typescript-eslint/func-call-spacing': [0, 'never'],
		'@typescript-eslint/generic-type-naming': [0],
		'@typescript-eslint/indent': [
			0,
			'tab',
			{
				SwitchCase: 1,
				flatTernaryExpressions: false,
				offsetTernaryExpressions: false,
				ignoreComments: false,
			},
		],
		'@typescript-eslint/interface-name-prefix': [0],
		'@typescript-eslint/keyword-spacing': [
			0,
			{before: true, after: true, overrides: {}},
		],
		'@typescript-eslint/lines-between-class-members': [
			2,
			'always',
			{exceptAfterSingleLine: true},
		],
		'@typescript-eslint/member-delimiter-style': [
			0,
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
		'@typescript-eslint/member-naming': [0],
		'@typescript-eslint/member-ordering': [2],
		'@typescript-eslint/naming-convention': [
			1,
			{selector: 'function', format: ['PascalCase', 'camelCase']},
		],
		'@typescript-eslint/no-array-constructor': [2],
		'@typescript-eslint/no-base-to-string': [2],
		'@typescript-eslint/no-confusing-void-expression': [2],
		'@typescript-eslint/no-dupe-class-members': [2],
		'@typescript-eslint/no-duplicate-enum-values': [2],
		'@typescript-eslint/no-dynamic-delete': [2],
		'@typescript-eslint/no-empty-function': [
			2,
			{allow: ['arrowFunctions', 'functions', 'methods']},
		],
		'@typescript-eslint/no-empty-interface': [2, {allowSingleExtends: true}],
		'@typescript-eslint/no-explicit-any': [0],
		'@typescript-eslint/no-extra-non-null-assertion': [2],
		'@typescript-eslint/no-extra-parens': [
			0,
			'all',
			{
				conditionalAssign: true,
				nestedBinaryExpressions: false,
				returnAssign: false,
				ignoreJSX: 'all',
				enforceForArrowConditionals: false,
			},
		],
		'@typescript-eslint/no-extra-semi': [0],
		'@typescript-eslint/no-extraneous-class': [
			1,
			{
				allowConstructorOnly: false,
				allowEmpty: false,
				allowStaticOnly: false,
				allowWithDecorator: true,
			},
		],
		'@typescript-eslint/no-floating-promises': [0],
		'@typescript-eslint/no-for-in-array': [0],
		'@typescript-eslint/no-implied-eval': [0],
		'@typescript-eslint/no-inferrable-types': [
			2,
			{ignoreParameters: false, ignoreProperties: false},
		],
		'@typescript-eslint/no-invalid-void-type': [2],
		'@typescript-eslint/no-loop-func': [2],
		'@typescript-eslint/no-loss-of-precision': [2],
		'@typescript-eslint/no-magic-numbers': [
			0,
			{
				ignore: [],
				ignoreArrayIndexes: true,
				enforceConst: true,
				detectObjects: false,
			},
		],
		'@typescript-eslint/no-meaningless-void-operator': [2],
		'@typescript-eslint/no-misused-new': [2],
		'@typescript-eslint/no-misused-promises': [0],
		'@typescript-eslint/no-namespace': [
			2,
			{allowDeclarations: false, allowDefinitionFiles: false},
		],
		'@typescript-eslint/no-non-null-asserted-nullish-coalescing': [2],
		'@typescript-eslint/no-non-null-asserted-optional-chain': [2],
		'@typescript-eslint/no-non-null-assertion': [0],
		'@typescript-eslint/no-parameter-properties': [0],
		'@typescript-eslint/no-redeclare': [2],
		'@typescript-eslint/no-redundant-type-constituents': [0],
		'@typescript-eslint/no-require-imports': [2],
		'@typescript-eslint/no-shadow': [0],
		'@typescript-eslint/no-this-alias': [2, {allowDestructuring: true}],
		'@typescript-eslint/no-throw-literal': [
			2,
			{allowThrowingUnknown: true, allowThrowingAny: false},
		],
		'@typescript-eslint/no-type-alias': [0],
		'@typescript-eslint/no-unnecessary-boolean-literal-compare': [2],
		'@typescript-eslint/no-unnecessary-condition': [0],
		'@typescript-eslint/no-unnecessary-qualifier': [2],
		'@typescript-eslint/no-unnecessary-type-arguments': [2],
		'@typescript-eslint/no-unnecessary-type-assertion': [0],
		'@typescript-eslint/no-unnecessary-type-constraint': [2],
		'@typescript-eslint/no-unsafe-argument': [0],
		'@typescript-eslint/no-unsafe-assignment': [0],
		'@typescript-eslint/no-unsafe-call': [0],
		'@typescript-eslint/no-unsafe-member-access': [0],
		'@typescript-eslint/no-unsafe-return': [0],
		'@typescript-eslint/no-unused-expressions': [
			2,
			{
				allowShortCircuit: false,
				allowTernary: false,
				allowTaggedTemplates: false,
				enforceForJSX: false,
			},
		],
		'@typescript-eslint/no-unused-vars': [
			2,
			{
				vars: 'all',
				args: 'after-used',
				ignoreRestSiblings: true,
				argsIgnorePattern: '^_',
				varsIgnorePattern: '^_',
			},
		],
		'@typescript-eslint/no-use-before-define': [
			2,
			{functions: true, classes: true, variables: true},
		],
		'@typescript-eslint/no-useless-constructor': [2],
		'@typescript-eslint/no-useless-empty-export': [2],
		'@typescript-eslint/no-var-requires': [2],
		'@typescript-eslint/non-nullable-type-assertion-style': [2],
		'@typescript-eslint/object-curly-spacing': [0, 'never'],
		'@typescript-eslint/padding-line-between-statements': [
			2,
			{blankLine: 'always', prev: 'multiline-block-like', next: '*'},
		],
		'@typescript-eslint/parameter-properties': [
			2,
			{prefer: 'parameter-property'},
		],
		'@typescript-eslint/prefer-as-const': [2],
		'@typescript-eslint/prefer-for-of': [2],
		'@typescript-eslint/prefer-function-type': [2],
		'@typescript-eslint/prefer-includes': [2],
		'@typescript-eslint/prefer-literal-enum-member': [2],
		'@typescript-eslint/prefer-namespace-keyword': [2],
		'@typescript-eslint/prefer-nullish-coalescing': [
			2,
			{
				ignoreTernaryTests: false,
				ignoreConditionalTests: true,
				ignoreMixedLogicalExpressions: true,
			},
		],
		'@typescript-eslint/prefer-optional-chain': [2],
		'@typescript-eslint/prefer-readonly': [2, {onlyInlineLambdas: false}],
		'@typescript-eslint/prefer-reduce-type-parameter': [2],
		'@typescript-eslint/prefer-regexp-exec': [2],
		'@typescript-eslint/prefer-return-this-type': [2],
		'@typescript-eslint/prefer-string-starts-ends-with': [2],
		'@typescript-eslint/prefer-ts-expect-error': [2],
		'@typescript-eslint/promise-function-async': [2],
		'@typescript-eslint/quotes': [0, 'single'],
		'@typescript-eslint/require-array-sort-compare': [
			2,
			{ignoreStringArrays: true},
		],
		'@typescript-eslint/require-await': [0],
		'@typescript-eslint/restrict-template-expressions': [0],
		'@typescript-eslint/return-await': [2, 'in-try-catch'],
		'@typescript-eslint/semi': [0, 'always'],
		'@typescript-eslint/space-before-blocks': [0, 'always'],
		'@typescript-eslint/space-before-function-paren': [
			0,
			{anonymous: 'always', named: 'never', asyncArrow: 'always'},
		],
		'@typescript-eslint/space-infix-ops': [0],
		'@typescript-eslint/strict-boolean-expressions': [0],
		'@typescript-eslint/switch-exhaustiveness-check': [2],
		'@typescript-eslint/triple-slash-reference': [
			1,
			{path: 'never', types: 'never', lib: 'never'},
		],
		'@typescript-eslint/type-annotation-spacing': [0],
		'@typescript-eslint/typedef': [0],
		'@typescript-eslint/unbound-method': [0],
		'@typescript-eslint/unified-signatures': [
			2,
			{ignoreDifferentlyNamedParameters: true},
		],
	},
	typescriptTypeCheckingRules: {
		'@typescript-eslint/await-thenable': [2],
		'@typescript-eslint/no-floating-promises': [
			2,
			{ignoreVoid: true, ignoreIIFE: true},
		],
		'@typescript-eslint/no-for-in-array': [0],
		'no-implied-eval': [0],
		'@typescript-eslint/no-implied-eval': [2],
		'@typescript-eslint/no-misused-promises': [
			2,
			{
				checksVoidReturn: {
					arguments: false,
					attributes: false,
				},
			},
		],
		'@typescript-eslint/no-unnecessary-type-assertion': [2],
		'@typescript-eslint/no-unsafe-argument': [2],
		'@typescript-eslint/no-unsafe-assignment': [1],
		'@typescript-eslint/no-unsafe-call': [1],
		'@typescript-eslint/no-unsafe-member-access': [1],
		'@typescript-eslint/no-unsafe-return': [1],
		'require-await': [0],
		'@typescript-eslint/require-await': [2],
		'@typescript-eslint/restrict-plus-operands': [2],
		'@typescript-eslint/restrict-template-expressions': [
			1,
			{allowNumber: true},
		],
		'@typescript-eslint/unbound-method': [2],
	},
};
