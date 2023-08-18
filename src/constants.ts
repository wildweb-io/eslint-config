export const ECMA_VERSION = 2021;

export const REACT_FILES = ['**/*.jsx', '**/*.tsx', '**/*.mtsx'];
export const MOD_FILES = [...REACT_FILES, '**/*.js', '**/*.mjs', '**/*.ts'];
export const FILES = [...MOD_FILES, '**/*.cjs'];

export const DEFAULT_IGNORED_FILES = [
	'**/node_modules/**',
	'**/dist/**',
	'**/build/**',
	'**/.vscode/**',
	'**/.github/**',
	'**/bin/**',
	'**/out/**',
	'**/.next/**',
	'.DS_Store',
	'.env.*',
	'**/*.d.ts',
	'**/*.typegen.ts',
	'cache/**',
	'.turbo/**',
	'.history/**',
	'.svelte-kit/**',
	'.vercel/**',
	'package-lock.json',
	'pnpm-lock.yaml',
	'yarn.lock',
];
