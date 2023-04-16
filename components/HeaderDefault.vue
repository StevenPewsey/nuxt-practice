<script setup lang="ts">
const { status, signIn, signOut, data } = useAuth()

const links = [
  {
    to: "/",
    label: "Home (unauthenticated)",
  },
  {
    to: "/another_page",
    label: "Another page (authenticated)",
  },
  {
    to: "/test/1",
    label: "Test (authenticated)",
  },
]

const userPhoto = computed(() => data.value?.user?.image)
</script>

<template>
  <header class="p-4 flex justify-between border-b">
    <div class="flex gap-4">
      <NuxtLink
        v-for="link in links"
        :key="link.to"
        :to="link.to"
        class="hover:underline hover:underline-offset-4"
        >{{ link.label }}</NuxtLink
      >
    </div>
    <div class="flex gap-4">
      <button v-if="status === 'unauthenticated'" @click="signIn()">
        Sign in
      </button>
      <button
        v-else-if="status === 'authenticated'"
        @click="signOut({ callbackUrl: '/' })"
      >
        Sign out
      </button>
      <button v-else>{{ status }}</button>
      <img v-if="userPhoto" :src="userPhoto" class="h-6 w-6 rounded-full" />
    </div>
  </header>
</template>

<style scoped>
.router-link-exact-active {
  font-weight: 600;
}
</style>
