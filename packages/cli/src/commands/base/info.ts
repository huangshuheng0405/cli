// ESM
import { logger } from '../../utils/logger.js'
import pkg from '../../../package.json'
import picocolors from 'picocolors'
import { Command } from 'commander'

export function info(program: Command) {
  return program
    .createCommand('info')
    .description('show info')
    .action(() => {
      logger.info('Using consola 3.0.0')
      logger.start('Building project...')
      logger.warn('A new version of consola is available: 3.0.1')
      logger.success('Project built!')
      // logger.error(new Error('This is an example error. Everything is fine!'))
      logger.box('huangshuheng')

      logger.log(picocolors.bgGreen(`Product: hsh CLI v${pkg.version}`))
      logger.log(picocolors.green(`Author: hsh`))
      logger.log(picocolors.underline(`License: ${pkg.license}`))
    })
}
