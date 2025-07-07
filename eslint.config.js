import js from '@eslint/js'
import tseslint from 'typescript-eslint'
import next from 'eslint-plugin-next'

export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  next.configs.recommended,
  {
    ignores: [
      'node_modules',
      'dist',
      'build',
      '.next',
      'prisma/client',
      'src/generated/',
      'src/generated/prisma/wasm.js',
    ],
  },
  {
    rules: {
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    },
  },
]
