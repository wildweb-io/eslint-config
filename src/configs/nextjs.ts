import {GLOB_SRC} from '../globs';
import {pluginNextjs} from '../plugins';
import type {FlatESLintConfigItem} from 'eslint-define-config';

export const nextjs: FlatESLintConfigItem[] = [
	{
		files: [GLOB_SRC],
		plugins: {
			'@next/next': pluginNextjs,
		},
		settings: {
			react: {
				version: 'detect',
				pragma: 'React',
			},
			next: {
				rootDir: true,
			},
		},
		rules: {
			...pluginNextjs.configs.recommended.rules,
			...pluginNextjs.configs['core-web-vitals'].rules,
			'jsx-a11y/anchor-is-valid': ['off'],
			'@next/next/link-passhref': ['error'],
			'@next/next/no-script-in-document': ['error'],
			'@next/next/no-script-in-head': ['error'],
			'@next/next/no-server-import-in-page': ['error'],
			'@next/next/google-font-display': ['warn'],
			'@next/next/google-font-preconnect': ['warn'],
			'@next/next/inline-script-id': ['error'],
			'@next/next/next-script-for-ga': ['warn'],
			'@next/next/no-assign-module-variable': ['error'],
			'@next/next/no-before-interactive-script-outside-document': ['warn'],
			'@next/next/no-css-tags': ['warn'],
			'@next/next/no-document-import-in-page': ['error'],
			'@next/next/no-duplicate-head': ['error'],
			'@next/next/no-head-element': ['warn'],
			'@next/next/no-head-import-in-document': ['error'],
			'@next/next/no-html-link-for-pages': ['warn'],
			'@next/next/no-img-element': ['warn'],
			'@next/next/no-page-custom-font': ['warn'],
			'@next/next/no-script-component-in-head': ['error'],
			'@next/next/no-styled-jsx-in-document': ['warn'],
			'@next/next/no-sync-scripts': ['warn'],
			'@next/next/no-title-in-document-head': ['warn'],
			'@next/next/no-typos': ['warn'],
			'@next/next/no-unwanted-polyfillio': ['warn'],
		},
	},
];
