<script setup lang="ts">
// import { useQuery } from "@tanstack/vue-query"

definePageMeta({ auth: false })

const { data: authData } = useAuth()

const welcomeText = computed(() => {
  return authData.value?.user?.name ?? "unauthenticated user"
})

// const count = ref(1)
// const double = computed(() => count.value * 2)

// const fetcher = async () =>
//   await fetch("https://jsonplaceholder.typicode.com/posts/1").then((response) =>
//     response.json()
//   );

// const { data, suspense } = useQuery({ queryKey: ["test"], queryFn: fetcher});

// await suspense();
</script>

<template>
  <div>
    <h1 class="text-3xl">Welcome {{ welcomeText }}</h1>

    <div v-if="authData?.accessToken">{{ authData.accessToken }}</div>
  </div>
</template>
