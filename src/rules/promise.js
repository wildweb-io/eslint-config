module.exports = {
	promiseRules: {
		'promise/always-catch': [0],
		'promise/always-return': [2, {ignoreLastCallback: true}],
		'promise/avoid-new': [0],
		'promise/catch-or-return': [2],
		'promise/no-callback-in-promise': [1],
		'promise/no-native': [0],
		'promise/no-nesting': [1],
		'promise/no-new-statics': [2],
		'promise/no-promise-in-callback': [1],
		'promise/no-return-in-finally': [1],
		'promise/no-return-wrap': [2],
		'promise/param-names': [2],
		'promise/prefer-await-to-callbacks': [0],
		'promise/prefer-await-to-then': [0],
		'promise/valid-params': [1],
	},
};
