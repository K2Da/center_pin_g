export default defineNuxtConfig({
  nitro: {
    preset: 'cloudflare-pages',
  },
  hooks: undefined,
  typescript: { strict: true },
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
    '@nuxt/ui',
    '@nuxt/content',
  ],
  css: ['@/assets/main.scss'],
  ui: {
    global: true,
    icons: ['material-symbols', 'fa6-brands'],
  },
  content: {
    documentDriven: false,
    markdown: {
      anchorLinks: false,
    },
  },
});
