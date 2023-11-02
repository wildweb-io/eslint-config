import {
	comments,
	graphql,
	ignores,
	imports,
	javascript,
	jsonc,
	markdown,
	nextjs,
	node,
	prettier,
	react,
	sortKeys,
	tailwindcss,
	typescript,
	unicorn,
	yml,
} from './configs';
import {hasNextjs, hasReact, hasTailwindcss} from './env';
import type {FlatESLintConfigItem} from 'eslint-define-config';

export const presetJavaScript = [
	...ignores,
	...javascript,
	...node,
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

export const all = [
	...basic,
	...(hasReact ? react : []),
	...(hasNextjs ? nextjs : []),
	...(hasTailwindcss ? tailwindcss : []),
	...sortKeys,
	...prettier,
];

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

	if (hasTailwindcss) {
		configs.push(...tailwindcss);
	}

	if (enableSortKeys) {
		configs.push(...sortKeys);
	}

	if (enablePrettier) {
		configs.push(...prettier);
	}

	if (Object.keys(config).length > 0) {
		configs.push(...(Array.isArray(config) ? config : [config]));
	}

	return configs;
};
