import { resolve } from 'node:path'
import { defineNuxtConfig } from 'nuxt/config'

// const currentDir = new URL('.', import.meta.url).pathname

export default defineNuxtConfig({
  modules: ['@unocss/nuxt', '../src/module'],

  vite: {
    // Custom alias for unlazy until Jiti issue is resolved
    // https://github.com/unjs/jiti/issues/136
    resolve: {
      alias: {
        // '@unlazy/core': `${resolve(currentDir, '../../core/src')}/`,
        // 'unlazy': `${resolve(currentDir, '../../unlazy/src')}/`,
        'unlazy': resolve(__dirname, '../../unlazy/src'),
        '@unlazy/core': resolve(__dirname, '../../core/src'),
      },
    },

    optimizeDeps: {
      exclude: [
        '@unlazy/core',
        'unlazy',
      ],
    },
  },

  imports: {
    autoImport: false,
  },

  typescript: {
    shim: false,
  },
})
