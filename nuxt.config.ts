export default defineNuxtConfig({
  hooks: undefined,
  typescript: {
    strict: true,
  },
  css: ['@/assets/main.scss'],
  routeRules: {
    '/': { swr: true },
    '/topic': { swr: true },
    '/calendar': { swr: true },
    '/tournament': { swr: true },
    '/player': { swr: true },
    '/team': { swr: true },
    '/about': { swr: true },
  },
  modules: [
    [
      '@pinia/nuxt',
      {
        autoImports: [
          'defineStore',
          ['defineStore', 'definePiniaStore'],
          'storeToRefs',
        ],
      },
    ],
    '@nuxt/content',
  ],
  content: {
    documentDriven: false,
    markdown: {
      anchorLinks: false,
    },
  },
});
