import jwtDecode from "jwt-decode"
import { User, setUserSession } from "~/server/utils/session"

interface OauthTokenResponse {
  access_token: string
  id_token: string
  scope: string
  expires_in: string
  token_type: "Bearer"
  error?: string
}

export default eventHandler(async (event) => {
  const {
    auth0: { clientId, clientSecret, issuer },
  } = useRuntimeConfig()
  const { code, state, redirectPath } = getQuery(event)

  const stateCookieValue = getCookie(event, "auth-state")

  if (state !== stateCookieValue) {
    // FIXME: redirect to error page
    return sendRedirect(event, "/")
  }

  const redirectUri = `${getRequestURL(event).href}`

  const response = await $fetch<OauthTokenResponse>(`${issuer}/oauth/token`, {
    method: "POST",
    body: {
      grant_type: "authorization_code",
      client_id: clientId,
      client_secret: clientSecret,
      code,
      redirect_uri: redirectUri,
    },
  })

  if (response.error) {
    // FIXME: redirect to error page
    return sendRedirect(event, "/")
  }

  const decodedUser = jwtDecode<User>(response.id_token)

  await setUserSession(event, {
    accessToken: response.access_token,
    user: decodedUser,
  })

  return sendRedirect(event, redirectPath?.toString() || "/")
})
