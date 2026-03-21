import { Command, program } from 'commander'

type Fn = (p: Command) => Command
// 这个类型是一个 函数类型 传入的参数是 Command类型  返回值也是Command类型

/**
 * 注册命令
 * @param fn1 命令函数
 */
export function registerCommand(fn1: Fn) {
  program.addCommand(fn1(program))
}

// cli 配置
