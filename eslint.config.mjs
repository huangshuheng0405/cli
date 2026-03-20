import js from '@eslint/js'
import tseslint from 'typescript-eslint'
import globals from 'globals'

const rules = {
  'no-console': 'error'
}

export default [
  {
    ignores: ['node_modules', '**/dist/**', '**/*.js']
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['**/*.ts'],
    rules: {
      ...rules
    },
    languageOptions: {
      parser: tseslint.parser,
      globals: {
        ...globals.node,
        ...globals.browser
      },
      parserOptions: {
        project: ['./tsconfig.eslint.json', '**/*/tsconfig.json'],
        tsconfigRootDir: import.meta.dirname
      }
    }
  }
]
