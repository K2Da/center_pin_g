export default defineNuxtConfig({
  nitro: {
    preset: 'cloudflare-pages',
  },
  hooks: undefined,
  typescript: { strict: true },
  css: ['@/assets/main.scss'],
  routeRules: {
    '/': { prerender: true },
    '/topics': { prerender: true },
    '/calendar': { prerender: true },
    '/tournaments': { prerender: true },
    '/players': { prerender: true },
    '/teams': { prerender: true },
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
