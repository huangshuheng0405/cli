import { Command } from 'commander'
import { logger } from '../../utils/logger.js'
import picocolors from 'picocolors'
import { loadTemplate } from '../../utils/loadTemplate.js'
import prompts from 'prompts'

export function create(program: Command) {
  return program
    .createCommand('create')
    .description('create project')
    .arguments('<name>')
    .option('-t, --template <template>', 'template name')
    .action(async (projectName, options) => {
      logger.log('创建项目')
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

      // 选择模板 本地 或者 远程
      const { source } = await prompts({
        type: 'select',
        name: 'source',
        message: 'please select local or remote template',
        choices: [
          { title: 'local', value: 'local' },
          { title: 'remote', value: 'remote' }
        ]
      })

      if (!source) return

      logger.info(picocolors.bgCyan(`create ${template} project`))
      // react 不是写死的 要用户选择 项目名称也要用户输入
      loadTemplate({
        projectName,
        templateName: template,
        local: source === 'local'
      })
    })
}
