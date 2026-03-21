import { Command } from 'commander'
import { logger } from '../../utils/logger.js'
import picocolors from 'picocolors'
import { loadTemplate } from '../../utils/loadTemplate.js'
import prompts from 'prompts'

export function create(program: Command) {
  logger.log('创建项目')

  return program
    .createCommand('create')
    .description('create project')
    .arguments('<name>')
    .option('-t, --template <template>', 'template name')
    .action(async (projectName, options) => {
      logger.info(
        `create projects, name:${projectName}, ${JSON.stringify(options)}`
      )
      let { template } = options

      if (!template) {
        const { framework } = await prompts({
          type: 'select',
          name: 'framework',
          message: 'please select a framework',
          choices: [
            { title: 'react', value: 'react' },
            { title: 'vue', value: 'vue' },
            { title: 'angular', value: 'angular' }
          ]
        })

        template = framework
      }
      logger.info(picocolors.bgCyan('create react ts project'))
      // react 不是写死的 要用户选择 项目名称也要用户输入
      loadTemplate({ projectName, templateName: template, local: false })
    })
}
