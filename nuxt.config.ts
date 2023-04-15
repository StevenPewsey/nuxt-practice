// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@sidebase/nuxt-auth'],
  auth: {
    enableGlobalAppMiddleware: true,
    defaultProvider: 'auth0',
    origin: 'http://localhost:8080'
  },
  runtimeConfig: {
    auth0: {
      clientId: 'BAiZlqtIIbTgPSwFmmXiSOazY2XGSTtO',
      clientSecret: '1cZlp3_4vmtipN-v_wsMCm4uxPBGbdmy14HSkIfsAYUNSSKHaH5XUvXFWzHJipoZ',
      issuer: 'https://steve-pewsey.eu.auth0.com'
    }
  },
  devServer: {
    port: 8080
  }
})
