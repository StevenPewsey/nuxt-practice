// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "@sidebase/nuxt-auth"],
  auth: {
    enableGlobalAppMiddleware: true,
    defaultProvider: "auth0",
    origin: "http://localhost:8080",
  },
  runtimeConfig: {
    auth0: {
      clientId: "",
      clientSecret: "",
      issuer: "",
    },
  },
  devServer: {
    port: 8080,
  },
})
