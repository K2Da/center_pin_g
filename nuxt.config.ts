export default defineNuxtConfig({
  nitro: {
    preset: 'cloudflare-pages',
  },
  hooks: undefined,
  typescript: { strict: true },
  css: ['@/assets/main.scss'],
  routeRules: {
    '/': { prerender: true, swr: true },
    '/topic': { prerender: true, swr: true },
    '/calendar': { prerender: true, swr: true },
    '/tournament': { prerender: true, swr: true },
    '/player': { prerender: true, swr: true },
    '/team': { prerender: true, swr: true },
    '/about': { prerender: true, swr: true },
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
