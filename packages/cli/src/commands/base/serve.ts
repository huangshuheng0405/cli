import { Command } from 'commander'
import { logger } from '../../utils/logger'

export function serve(program: Command) {
  return program
    .createCommand('serve')
    .description('serve project')
    .action(() => {
      logger.log('启动项目')
    })
}
