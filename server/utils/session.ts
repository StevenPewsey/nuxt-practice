import type { H3Event } from "h3"

export interface User {
  nickname: string
  name: string
  picture: string
  email: string
  email_verified: boolean
  iss: string
  aud: string
  iat: string
  exp: string
  sub: string
  sid: string
}

export interface UserSession {
  accessToken?: string
  user?: User
}

export async function getUserSession(event: H3Event): Promise<UserSession> {
  return (await _useSession(event)).data
}

export async function setUserSession(event: H3Event, data: UserSession) {
  const session = await _useSession(event)
  await session.update(data)

  return session.data
}

export async function clearUserSession(event: H3Event): Promise<true> {
  const session = await _useSession(event)
  await session.clear()
  return true
}

export async function requireUserSession(event: H3Event) {
  const userSession = await getUserSession(event)

  if (!userSession.user) {
    throw createError({
      statusCode: 401,
      message: "Unauthorized",
    })
  }

  return userSession
}

const sessionConfig = {
  name: "nuxt-session",
  password: "",
}

function _useSession(event: H3Event) {
  if (!sessionConfig.password) {
    sessionConfig.password = "r@5^JapRNp*i2Bq66ZSG3io6P%!e7Em^"
  }

  return useSession<UserSession>(event, sessionConfig)
}
