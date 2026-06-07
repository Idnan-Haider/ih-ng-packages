import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    pool: 'threads',
    fileParallelism: false,
    testTimeout: 30_000,
  },
});
