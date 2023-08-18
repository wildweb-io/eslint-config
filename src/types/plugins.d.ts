declare module '@eslint/eslintrc' {
	import type {Linter} from 'eslint';

	class FlatCompatClass {
		constructor(options: {
			baseDirectory: string;
			resolvePluginsRelativeTo: string;
		});

		config(config: Linter.Config): Linter.FlatConfig[];
		env(env: Linter.Config['env']): Linter.FlatConfig[];
		plugins(plugins: Linter.Config['plugins']): Linter.FlatConfig[];
		extends(configToExtend: Linter.Config['extends']): Linter.FlatConfig[];
	}

	export class FlatCompat extends FlatCompatClass {}
}

declare module 'eslint-config-prettier' {}
declare module 'eslint-plugin-unicorn' {
	export const configs: {
		recommended: Linter.Config;
	};
}
declare module 'eslint-plugin-regexp' {}
declare module 'eslint-plugin-promise' {
	export const configs: {
		recommended: Linter.Config;
	};
}
declare module 'eslint-plugin-import' {}
declare module 'eslint-plugin-n' {}
declare module 'eslint-plugin-react' {
	export const configs: {
		'jsx-runtime': Linter.Config;
		recommended: Linter.Config;
		all: Linter.Config;
	};
}
declare module 'eslint-plugin-react-hooks' {
	export const configs: {
		recommended: Linter.Config;
	};
}
declare module 'eslint-plugin-jsx-a11y' {
	export const configs: {
		recommended: Linter.Config;
	};
}
declare module '@next/eslint-plugin-next' {
	export const configs: {
		recommended: Linter.Config;
	};
}
declare module 'eslint-plugin-tailwindcss' {
	export const configs: {
		recommended: Linter.Config;
	};
}
