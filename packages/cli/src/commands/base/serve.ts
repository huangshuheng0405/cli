import { Command } from 'commander'
import { logger } from '../../utils/logger.js'
import { spawn } from 'node:child_process'

export function serve(program: Command) {
  return program
    .createCommand('serve')
    .description('serve project')
    .action(() => {
      // npm run dev pnpm dev
      logger.log('启动项目')
      /**
       * node 中怎么执行命令
       */

      const command = 'npm'
      const params = ['run', 'dev']

      const child = spawn(command, params, {
        stdio: 'inherit',
        shell: process.platform === 'win32' // 在 windows 系统下开启 shell 模式以正确识别 npm.cmd
      })

      child.on('close', (code) => {
        logger.log(`子进程退出，退出码L: ${code}`)
      })
    })
}
