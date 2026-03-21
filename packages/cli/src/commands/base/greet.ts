import { Command } from 'commander'
import { logger } from '../../utils/logger.js'
import prompts from 'prompts'

export function greet(program: Command) {
  return program
    .createCommand('greet')
    .description('greet user')
    .action(async () => {
      const { name } = await prompts({
        type: 'text',
        name: 'name',
        message: 'What is your name?'
      })

      const { age } = await prompts({
        type: 'number',
        name: 'age',
        message: 'What is your age?'
      })

      const { hobby } = await prompts({
        type: 'select',
        name: 'hobby',
        message: 'What is your hobby?',
        choices: [
          { title: 'Reading', value: 'reading' },
          { title: 'Traveling', value: 'traveling' },
          { title: 'Coding', value: 'coding' }
        ]
      })

      const genderRefs = await prompts({
        type: 'select',
        name: 'gender',
        message: 'What is your gender?',
        choices: [
          { title: 'nan', value: 'nan' },
          { title: 'nu', value: 'nv' }
        ]
      })

      logger.log(
        `hello ${name}, you are ${age} years old, and your hobby is ${hobby}, your gender is ${genderRefs.gender}`
      )
    })
}
