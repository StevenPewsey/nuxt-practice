export default eventHandler(async (event) => {
  const {
    auth0: { issuer, clientId },
  } = useRuntimeConfig()

  await clearUserSession(event)

  // TODO: make returnTo dynamic?

  const returnTo = getRequestURL(event).origin

  const logoutUrl = `${issuer}/v2/logout?client_id=${clientId}&returnTo=${returnTo}`

  return sendRedirect(event, logoutUrl)
})
