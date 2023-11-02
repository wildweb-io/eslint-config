import {
	comments,
	graphql,
	ignores,
	imports,
	javascript,
	jsonc,
	markdown,
	nextjs,
	prettier,
	react,
	sortKeys,
	typescript,
	unicorn,
	yml,
} from './configs';
import {hasNextjs, hasReact} from './env';
import type {FlatESLintConfigItem} from 'eslint-define-config';

export const presetJavaScript = [
	...ignores,
	...javascript,
	...comments,
	...imports,
	...unicorn,
];

export const presetLangsExtensions = [
	...markdown,
	...yml,
	...jsonc,
	...graphql,
];

export const basic = [
	...presetJavaScript,
	...typescript,
	...presetLangsExtensions,
];
export {basic as presetBasic};

export const all = [...basic, ...sortKeys, ...prettier];

export const wildweb = (
	config: FlatESLintConfigItem | FlatESLintConfigItem[] = [],
	{
		prettier: enablePrettier = true,
		sortKeys: enableSortKeys = true,
	}: Partial<{
		prettier: boolean;
		sortKeys: boolean;
	}> = {},
): FlatESLintConfigItem[] => {
	const configs = [];
	configs.push(...basic);

	if (hasReact) {
		configs.push(...react);
	}

	if (hasNextjs) {
		configs.push(...nextjs);
	}

	if (enableSortKeys) {
		configs.push(...sortKeys);
	}

	if (enablePrettier) {
		configs.push(...prettier);
	}

	// eslint-disable-next-line @typescript-eslint/no-magic-numbers
	if (Object.keys(config).length > 0) {
		configs.push(...(Array.isArray(config) ? config : [config]));
	}

	return configs;
};
