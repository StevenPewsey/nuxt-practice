export default defineEventHandler(async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000))
  return {
    api: "works",
  }
})
