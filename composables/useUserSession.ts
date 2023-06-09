import { UserSession } from "~/server/utils/session"

const useUserSessionState = () =>
  useState<UserSession>("nuxt-session", () => ({}))

export const useUserSession = () => {
  const sessionState = useUserSessionState()
  return {
    status: computed(() =>
      sessionState.value.user ? "authenticated" : "unauthenticated",
    ),
    user: computed(() => sessionState.value.user),
    accessToken: computed(() => sessionState.value.accessToken ?? null),
    fetch,
    signIn,
    signOut,
  }
}

async function fetch() {
  useUserSessionState().value = await useRequestFetch()("/api/session").catch(
    () => ({}),
  )
}

function signIn(options: { redirectPath?: string } = {}) {
  const url = options.redirectPath
    ? `/api/auth?redirectPath=${options.redirectPath}`
    : "/api/auth"

  return navigateTo(url, {
    external: true,
  })
}

function signOut() {
  return navigateTo("/api/auth/logout", { external: true })
}
