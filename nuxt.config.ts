// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss"],
  runtimeConfig: {
    auth0: {
      clientId: "",
      clientSecret: "",
      issuer: "",
      audience: "",
    },
    public: {
      adminGraphqlUrl: "",
    },
    session: {
      name: "nuxt-session",
      password: "",
    },
  },
  devServer: {
    port: 8080,
  },
})
