import { nanoid } from "nanoid"

export default eventHandler((event) => {
  const {
    auth0: { audience, clientId, issuer },
  } = useRuntimeConfig()

  const redirectUri = `${getRequestURL(event).href}/callback`

  const state = nanoid()
  setCookie(event, "auth-state", state, { httpOnly: true })

  const scope =
    "openid profile email analysis_job:read escalation:create escalation:read fulfillment_order:read kit:create kit:read lab_file:delete lab_file:force_match lab:read order:create order:read subject:read result_set:read test_profile:read"

  const authorizationUrl = new URL("authorize", issuer)
  authorizationUrl.searchParams.append("audience", audience)
  authorizationUrl.searchParams.append("scope", scope)
  authorizationUrl.searchParams.append("response_type", "code")
  authorizationUrl.searchParams.append("client_id", clientId)
  authorizationUrl.searchParams.append("redirect_uri", redirectUri)
  authorizationUrl.searchParams.append("state", state)

  return sendRedirect(event, authorizationUrl.toString())
})
