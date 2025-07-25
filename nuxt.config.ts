// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/content', '@nuxt/eslint', '@nuxt/ui'],
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  content: {
    build: {
      markdown: {},
      transformers: [
        '~~/transformers/geo-point',
      ],
    },
  },
  compatibilityDate: '2025-05-15',
  eslint: {
    config: {
      stylistic: {
        arrowParens: true,
        semi: true,
      },
    },
  },
});
