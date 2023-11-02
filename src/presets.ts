import {prettier, typescript} from './configs';
import type {FlatESLintConfigItem} from 'eslint-define-config';

export const basic = [...typescript];
export {basic as presetBasic};

export const all = [...basic, ...prettier];

export function wildweb(
	config: FlatESLintConfigItem | FlatESLintConfigItem[] = [],
	{
		prettier: enablePrettier = true,
	}: Partial<{
		prettier: boolean;
	}> = {},
): FlatESLintConfigItem[] {
	const configs = [];
	configs.push(...basic);

	if (enablePrettier) {
		configs.push(...prettier);
	}

	// eslint-disable-next-line @typescript-eslint/no-magic-numbers
	if (Object.keys(config).length > 0) {
		configs.push(...(Array.isArray(config) ? config : [config]));
	}

	return configs;
}
