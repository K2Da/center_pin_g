export default defineNuxtConfig({
  hooks: undefined,
  typescript: {
    strict: true,
  },
  css: ['@/assets/main.scss'],
  routeRules: {
    '/': { ssr: false, prerender: true },
    '/topic': { ssr: false, prerender: true },
    '/calendar': { ssr: false, prerender: true },
    '/tournament': { ssr: false, prerender: true },
    '/player': { prerender: true },
    '/team': { prerender: true },
    '/about': { prerender: true },
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
