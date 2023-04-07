export default defineEventHandler(async (event) => {
  await new Promise((resolve) => setTimeout(resolve, 2000))
  return {
    api: 'works'
  }
})