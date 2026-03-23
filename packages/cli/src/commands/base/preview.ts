import { Command } from 'commander'
import { logger } from '../../utils/logger.js'
import { spawn } from 'node:child_process'

export function preview(program: Command) {
  return program
    .createCommand('preview')
    .description('preview project')
    .action(() => {
      // 执行项目的打包命令
      // npm run preview
      logger.info('preview projects')

      const command = 'npm'
      const params = ['run', 'preview']

      const child = spawn(command, params, {
        stdio: 'inherit',
        shell: process.platform === 'win32' // 在 windows 系统下开启 shell 模式以正确识别 npm.cmd
      })

      child.on('close', (code) => {
        logger.log(`子进程退出，退出码：${code}`)
      })
    })
}
