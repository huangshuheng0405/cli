// import { logger } from '../utils/logger'
// import { registerCommand } from './registerCommon'

import { create } from './base/create.js'
import { registerCommand } from './registerCommand.js'
import { info } from './base/info.js'
import { serve } from './base/serve.js'
import { build } from './base/build.js'
import { greet } from './base/greet.js'

registerCommand(create)
registerCommand(info)
registerCommand(serve)
registerCommand(build)
registerCommand(greet)

// /**
//  * 命令接口
//  */
// export interface Command {
//   name: string
//   description: string
//   action: (...args: string[]) => void
// }

// const buildCommand: Command = {
//   name: 'build',
//   description: '构建项目',
//   action: () => {
//     logger.info('Build project')
//   }
// }

// const serve: Command = {
//   name: 'serve',
//   description: '启动项目',
//   action: () => {
//     logger.info('Serve project')
//   }
// }

// /**
//  * 注册命令
//  */
// registerCommand(buildCommand)
// registerCommand(serve)
