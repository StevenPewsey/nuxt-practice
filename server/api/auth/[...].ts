import { NuxtAuthHandler } from '#auth'
import Auth0Provider from 'next-auth/providers/auth0'

export default NuxtAuthHandler({
  secret: 'this-is-my-secret',
  providers: [
    
    // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
    Auth0Provider.default({
      clientId: useRuntimeConfig().auth0.clientId,
      clientSecret: useRuntimeConfig().auth0.clientSecret,
      issuer: useRuntimeConfig().auth0.issuer,
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      session.accessToken = token.accessToken;
      return session;
    },
    async jwt({ token, account }) {
      if (account?.access_token) {
        token.accessToken = account.access_token;
      }
      return token;
    },
  }
})
