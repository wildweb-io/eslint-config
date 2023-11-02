import { prettier } from './configs'
import type { FlatESLintConfigItem } from 'eslint-define-config'


export function wildweb(
  config: FlatESLintConfigItem | FlatESLintConfigItem[] = [],
  {
    prettier: enablePrettier = true,
  }: Partial<{
    prettier: boolean
  }> = {}
): FlatESLintConfigItem[] {
  const configs = []
  if (enablePrettier) {
    configs.push(...prettier)
  }
  if (Object.keys(config).length > 0) {
    configs.push(...(Array.isArray(config) ? config : [config]))
  }
  return configs
}
