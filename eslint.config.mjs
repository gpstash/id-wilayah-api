import baseConfig from '@hono/eslint-config'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default [
  {
    ignores: [
      '**/.wrangler/**',
      'eslint.config.*',
      'scripts/**',
      'worker-configuration.d.ts',
      'dist/**',
      'src/examples/**',
      'src/proto/generated/**',
      'coverage/**',
      '*.js',
      '*.mjs',
      '*.cjs',
    ],
  },
  ...baseConfig,
  {
    // Only apply type-aware parserOptions to TS files
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
      },
    },
    rules: {
      ...baseConfig.rules,
      'indent': ['error', 2],
      'comma-dangle': ['error', 'always-multiline'],
      '@typescript-eslint/no-explicit-any': 'error',
      'object-curly-spacing': ['error', 'always'],
      'quotes': ['error', 'single', { 'avoidEscape': true }],
    },
  },
]
