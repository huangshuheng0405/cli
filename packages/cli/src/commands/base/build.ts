import { Command } from 'commander'
import { logger } from '../../utils/logger.js'
import { spawn } from 'node:child_process'

export function build(program: Command) {
  return program
    .createCommand('build')
    .description('build project')
    .action(() => {
      // 执行项目的打包命令
      // npm run build
      logger.info('build projects')

      const command = 'npm'
      const params = ['run', 'build']
      // 等价与在终端输入 npm run build

      // 启动一个新进程
      const child = spawn(command, params, {
        stdio: 'inherit',
        shell: process.platform === 'win32' // 在 windows 系统下开启 shell 模式以正确识别 npm.cmd
      })
      // 在windows 上 npm 实际上是 npm.cmd spawn('npm')可能找不到 所以要开启 shell  让系统帮你解析命令

      child.on('close', (code) => {
        logger.log(`子进程退出，退出码：${code}`) // 0 -> 成功 非0 失败
      })
    })
}
