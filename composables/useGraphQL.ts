import { request } from "graphql-request"
import { type TypedDocumentNode } from "@graphql-typed-document-node/core"
import { useQuery, type UseQueryReturnType } from "@tanstack/vue-query"

export function useGraphQL<TResult, TVariables>(
  document: TypedDocumentNode<TResult, TVariables>,
  ...[variables]: TVariables extends Record<string, never> ? [] : [TVariables]
): UseQueryReturnType<TResult, unknown> {
  const { data } = useAuth()

  const accessToken = data.value?.accessToken

  return useQuery(
    [(document.definitions[0] as any).name.value, variables],
    ({ queryKey }) =>
      request(
        "http://localhost:4000",
        document,
        queryKey[1] ? queryKey[1] : undefined,
        {
          Authorization: `Bearer ${accessToken}`,
        },
      ),
  )
}
