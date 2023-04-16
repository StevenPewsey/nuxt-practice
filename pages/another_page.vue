<script setup lang="ts">
const { data } = useAsyncData("/api/helloo", () => $fetch("/api/hello"))
</script>

<template>
  <div>
    <pre>{{ data }}</pre>
    <NuxtLink to="/test/1234">test</NuxtLink>
  </div>
</template>
