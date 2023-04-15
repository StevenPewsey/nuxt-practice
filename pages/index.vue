<script setup lang="ts">
  import { useQuery } from "@tanstack/vue-query";

  const { signIn, signOut, status, data: authData } = useAuth()

  const count = ref(1)
  const double = computed(() => count.value * 2)

  const fetcher = async () =>
    await fetch("https://jsonplaceholder.typicode.com/posts/1").then((response) =>
      response.json()
    );

  const { data, suspense } = useQuery({ queryKey: ["test"], queryFn: fetcher});

  await suspense();
</script>

<template>
  <div>
    THIS IS A TEST {{ double }}
    <button @click="count += 1">Increment</button>
  </div>
  <button v-if="status==='unauthenticated'" @click="signIn('auth0')">Click me to login!</button>
  <button v-if="status==='authenticated'" @click="signOut()">Click me to signout!</button>
  <div>{{  status }}</div>
  <pre>{{ authData }}</pre>
  <pre>{{ data }}</pre>
  <div>
    <NuxtLink to="/test/1234">test</NuxtLink>
  </div>
  <div>
    <NuxtLink to="/another_page">another page</NuxtLink>
  </div>

</template>
