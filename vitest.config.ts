import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    coverage: {
      provider: 'v8',
      reporter: ['text'],
      exclude: [
        'scripts/**',
        'src/proto/generated/**',
        'coverage/**',
        '**/*.d.ts',
        '**/*.json',
        'node_modules/**',
        '.wrangler/**',
        'dist/**',
        'vite/**',
        'src/examples/**',
        'worker-configuration.d.ts',
        'eslint.config.mjs',
        '.git/**',
        '.idea/**', 
        '.cache/**',
        '.output/**',
        '.temp/**',
        'src/types/**',
      ],
    },
  },
}); 