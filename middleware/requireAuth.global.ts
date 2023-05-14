export default defineNuxtRouteMiddleware(async (to) => {
  if (to.fullPath === "/api/auth") {
    return
  }

  if (to.meta.auth === false) {
    return
  }

  const { status, signIn, fetch } = useUserSession()

  if (process.server) {
    await fetch()
  }

  if (status.value === "unauthenticated") {
    if (process.server) {
      return signIn()
    } else {
      await signIn()
      return abortNavigation()
    }
  }
})
