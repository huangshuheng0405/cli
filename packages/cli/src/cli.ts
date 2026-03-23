// import { create } from './commands/base/create'
// import { build } from './commands/base/build'
// import { serve } from './commands/base/serve'

import { program } from 'commander'
import './commands/index.js'
import './utils/loadTemplate.js'

// import 的时候会执行代码  只会执行第一次 然后缓存 之后直接读取缓存不会执行
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

program.version('0.0.1').name('hsh')

export const run = (args: string[]) => {
  // console.log('run', process.argv.slice(2))

  program.parse(args)
  // 输如 hsh create my-app 就是 ['node', 'hsh', 'create', 'my=app']
  // 拿着传入的 args 对比之前定义的命令 如 create build 等 一旦匹配成功 就会调用 action 函数
}
