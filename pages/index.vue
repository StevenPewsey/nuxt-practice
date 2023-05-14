<script setup lang="ts">
definePageMeta({ auth: false })

const { user } = useUserSession()

const welcomeText = computed(() => {
  return user.value?.nickname ?? "unauthenticated user"
})
</script>

<template>
  <div>
    <h1 class="text-3xl">Welcome {{ welcomeText }}</h1>
  </div>
</template>
