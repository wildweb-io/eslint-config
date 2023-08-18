import type {Linter} from 'eslint';
import {maybeArray} from './maybe-array.js';
import {coreConfig} from './extends/core.js';
import {graphqlConfig} from './extends/graphql.js';
import {typescriptConfig} from './extends/typescript.js';
import {jsonConfig} from './extends/json.js';
import {prettierConfig} from './extends/prettier.js';
import {promiseConfig} from './extends/promise.js';
import {regexpConfig} from './extends/regexp.js';
import {unicornConfig} from './extends/unicorn.js';
import {importConfig} from './extends/import.js';
import {nodeConfig} from './extends/node.js';
import {reactConfig} from './extends/react.js';
import {yamlConfig} from './extends/yaml.js';

type Options = {
	node?: boolean;
	ts?: boolean;
	react?: boolean;
	unicorn?: boolean;
};

export const defineConfig = (
	config: Linter.FlatConfig[] = [],
	options?: Options,
): Linter.FlatConfig[] => {
	const baseConfig_: Linter.FlatConfig[] = [
		...maybeArray(coreConfig),
		...maybeArray(graphqlConfig),
		...maybeArray(yamlConfig),
		...maybeArray(jsonConfig),
		...maybeArray(importConfig),
		...maybeArray(regexpConfig),
		...maybeArray(unicornConfig),
	];

	/**
	 * If no options are passed, returns "full config"
	 */
	if (!options) {
		return [
			...baseConfig_,
			...maybeArray(nodeConfig),
			...maybeArray(promiseConfig),
			...maybeArray(typescriptConfig),
			...maybeArray(reactConfig),
			...config,
			...maybeArray(prettierConfig),
		];
	}

	const {node = false, ts = false, react = false, unicorn = false} = options;

	if (node) {
		baseConfig_.push(...maybeArray(nodeConfig));
	}

	if (ts) {
		baseConfig_.push(...maybeArray(typescriptConfig));
	}

	if (react) {
		baseConfig_.push(...maybeArray(reactConfig));
	}

	if (unicorn) {
		baseConfig_.push(...maybeArray(unicornConfig));
	}

	baseConfig_.push(...config, ...maybeArray(prettierConfig));
	return baseConfig_;
};
