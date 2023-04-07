<script setup lang="ts">
  const { params } = useRoute()
  const id = params.id as string
</script>

<template>
  <div>HELLO!!</div>
  <div>{{ id }}</div>
  <NuxtLink to="/">Home</NuxtLink>
</template>