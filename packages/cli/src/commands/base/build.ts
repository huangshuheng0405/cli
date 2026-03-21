import { Command } from 'commander'
import { logger } from '../../utils/logger.js'

export function build(program: Command) {
  return program
    .createCommand('build')
    .description('build project')
    .action(() => {
      logger.info('build projects')
    })
}
