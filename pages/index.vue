<script setup lang="ts">
definePageMeta({ auth: false })

const { data: authData } = useAuth()

const welcomeText = computed(() => {
  return authData.value?.user?.name ?? "unauthenticated user"
})
</script>

<template>
  <div>
    <h1 class="text-3xl">Welcome {{ welcomeText }}</h1>
  </div>
</template>
