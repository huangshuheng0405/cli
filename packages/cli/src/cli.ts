// import { create } from './commands/base/create'
// import { build } from './commands/base/build'
// import { serve } from './commands/base/serve'

import { program } from 'commander'
import './commands/index.js'
import './utils/loadTemplate.js'
// import { greet } from './commands/base/greet'
// import { info } from './commands/base/info'

// export const run = (args: string[]) => {
//   const [, , ...rest] = args

//   const [command, commandArgs] = rest

//   switch (command) {
//     case 'create': {
//       create(...commandArgs)
//       break
//     }
//     case 'build': {
//       build(...commandArgs)
//       break
//     }
//     case 'serve': {
//       serve(...commandArgs)
//       break
//     }
//   }
//   // eslint-disable-next-line no-console
//   console.log(rest)
// }

program.version('0.0.1').name('miaoma')

// // 创建项目
// program.command('create').description('创建项目').action(create)
// // 构建项目
// program.command('build').description('构建项目').action(build)
// // 启动项目
// program.command('serve').description('启动项目').action(serve)

// // 打招呼
// program.command('greet').description('打招呼').action(greet)

// // 打印信息
// program.command('info').description('打印信息').action(info)

export const run = (args: string[]) => {
  // console.log('run', process.argv.slice(2))

  program.parse(args)
}
