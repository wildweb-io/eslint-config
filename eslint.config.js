// eslint-disable-next-line import/order
import {createRequire} from 'node:module';

const require = createRequire(import.meta.url);

require('sucrase/register');
/** @type {typeof import('./src/index.ts')} */
const {wildweb} = require('./src/index.ts');

export default wildweb([
	{
		ignores: ['tsup.config.ts'],
	},
]);
