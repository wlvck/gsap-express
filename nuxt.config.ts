// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      script: [
        {
          src: 'https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/GSDevTools.min.js',
          defer: true,
        },
      ],
    },
  },
  compatibilityDate: '2025-05-15',
  modules: ['@nuxtjs/tailwindcss'],
  devtools: { enabled: true },
  ssr: false,
});
