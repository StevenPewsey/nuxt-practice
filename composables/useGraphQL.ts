import { ClientError, request } from "graphql-request"
import { type TypedDocumentNode } from "@graphql-typed-document-node/core"
import { useQuery, type UseQueryReturnType } from "@tanstack/vue-query"
import { callWithNuxt } from "nuxt/app"

export function useGraphQL<TResult, TVariables>(
  document: TypedDocumentNode<TResult, TVariables>,
  ...[variables]: TVariables extends Record<string, never> ? [] : [TVariables]
): UseQueryReturnType<TResult, unknown> {
  const nuxtApp = useNuxtApp()
  const { accessToken, signIn } = useUserSession()

  const {
    public: { adminGraphqlUrl },
  } = useRuntimeConfig()

  const useQueryResponse = useQuery(
    [(document.definitions[0] as any).name.value, variables],
    async ({ queryKey }) => {
      try {
        return await request(
          adminGraphqlUrl,
          document,
          queryKey[1] ? queryKey[1] : undefined,
          {
            Authorization: `Bearer ${accessToken.value}`,
          },
        )
      } catch (error) {
        if (error instanceof ClientError) {
          const isUnauthenticated = error.response.errors?.some(
            (error) => error.extensions.code === "UNAUTHENTICATED",
          )
          if (isUnauthenticated) {
            // TODO: try using callWithNuxt elsewhere (e.g in middleware/plugin)
            await callWithNuxt(nuxtApp, signIn)
          }
        }
        throw error
      }
    },
  )

  onServerPrefetch(async () => {
    await useQueryResponse.suspense()
  })

  return {
    ...useQueryResponse,
  }
}
