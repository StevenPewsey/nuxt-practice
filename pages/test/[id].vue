<script setup lang="ts">
const { params } = useRoute()
const id = params.id as string
</script>

<template>
  <div>
    <div>HELLO!!</div>
    <div>{{ id }}</div>
    <NuxtLink to="/">Home</NuxtLink>
  </div>
</template>
