# @wildweb/eslint-config

> ESLint
> [shareable config](http://eslint.org/docs/developer-guide/shareable-configs.html)
> for Next.js

## Installation

```bash
npm i -D @wildweb/eslint-config
```

## Setup

1. Add a `.eslintrc.js` file to your project

```js
{
	"extends": "@wildweb/eslint-config",
	"settings": {
		"tailwindcss": {
			"config": "tailwind.config.cjs"
		}
	}
}
```

2. Enable auto-fix in vscode: update settings.json

```json
{
	"typescript.tsdk": "./node_modules/typescript/lib",
	"typescript.preferences.importModuleSpecifier": "non-relative",
	"editor.defaultFormatter": "esbenp.prettier-vscode",
	"editor.formatOnSave": true,
	"editor.codeActionsOnSave": [
		"source.addMissingImports",
		"source.fixAll.eslint"
	]
}
```

Ignore paths: update .eslintignore

```
**/node_modules/*
**/out/*
**/.next/*

pnpm-lock.yaml
next-env.d.ts

*.mjs
*.cjs
```
