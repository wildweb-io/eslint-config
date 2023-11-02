/* eslint-disable @typescript-eslint/no-explicit-any */
/* #__NO_SIDE_EFFECTS__ */
function interopDefault(m: any) {
	return m.default || m;
}

import * as _pluginPrettier from 'eslint-plugin-prettier';
export const pluginPrettier = interopDefault(_pluginPrettier);

// @ts-expect-error missing types
import * as _configPrettier from 'eslint-config-prettier';
export const configPrettier = interopDefault(_configPrettier);

import * as _pluginTypeScript from '@typescript-eslint/eslint-plugin';
export const pluginTypeScript = interopDefault(_pluginTypeScript);

import * as _pluginAntfu from 'eslint-plugin-antfu';
export const pluginAntfu = interopDefault(_pluginAntfu);

export * as parserTypeScript from '@typescript-eslint/parser';

// @ts-expect-error missing types
export * as pluginUnusedImports from 'eslint-plugin-unused-imports';
