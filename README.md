# @wildweb/eslint-config

> ESLint
> [shareable config](http://eslint.org/docs/developer-guide/shareable-configs.html)
> for Next.js

## Installation

```bash
npm i -D @wildweb/eslint-config
```

## Setup

## Usage

```js
// eslint.config.js
export {all as default} from '@wildweb/eslint-config'
```

### Custom Config

```js
import { wildweb } from '@wildweb/eslint-config'

export default wildweb(
  [
    /* your custom config */
  ],
  {  prettier: true, sortKeys: true }
)
```

### VSCode

```jsonc
{
  "eslint.experimental.useFlatConfig": true
}
```
