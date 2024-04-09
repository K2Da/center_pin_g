export default defineNuxtConfig({
  hooks: undefined,
  typescript: {
    strict: true,
  },
  css: ['@/assets/main.scss'],
  routeRules: {},
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
