export default defineNuxtConfig({
  hooks: undefined,
  typescript: {
    strict: true,
  },
  css: ['@/assets/main.scss'],
  routeRules: {
    '/': { prerender: true },
    '/topic': { prerender: true },
    '/calendar': { prerender: true },
    '/tournament': { prerender: true },
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
  nitro: {
    prerender: {
      ignore: [
        '/tournament/detail?',
        '/team/detail?',
        '/player/detail?',
        '/tournament/group?',
      ],
    },
  },
  content: {
    documentDriven: false,
    markdown: {
      anchorLinks: false,
    },
  },
});
