// 本地模板 就是 fs 操作
// import fs from 'fs-extra'
// import path from 'node:path'
// const { readFile } = fs

import { copy } from 'fs-extra'
import { join } from 'node:path'
import { downloadTemplate } from 'giget'

// const targetPath = path.resolve(import.meta.dirname, '../src/utils/logger.ts')

// readFile(targetPath, 'utf-8').then((data) => {
//   // eslint-disable-next-line no-console
//   console.log(data)
// })

interface LoadTemplateParams {
  projectName: string
  templateName: string
  local?: boolean
}

/**
 * 加载本地模板
 */
const loadLocalTemplate = async (params: LoadTemplateParams) => {
  // 把模板 复制到 当前文件夹下去
  copy(
    join(__dirname, `../templates/template-${params.templateName}`),
    `${process.cwd()}/${params.projectName}`
  )
  // process.cwd() 返回当前的工作目录
}

/**
 * 加载远程模板
 * @param params
 */
const loadRemoteTemplate = async (params: LoadTemplateParams) => {
  const { dir } = await downloadTemplate(
    'gh:huangshuheng0405/javascript#main',
    {
      dir: `${process.cwd()}/.temp`,
      force: true
    }
  )

  await copy(dir, `${process.cwd()}/${params.projectName}`)
}

export const loadTemplate = async (params: LoadTemplateParams) => {
  const { local } = params

  if (local) {
    await loadLocalTemplate(params)
  } else {
    await loadRemoteTemplate(params)
  }
}
