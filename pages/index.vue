<script setup lang="ts">
  /* ref() and computed() are auto-imported */
  const count = ref(1)
  const double = computed(() => count.value * 2)

  const { data } = useAsyncData('/api/hello', () => $fetch('/api/hello'))
</script>

<template>
  <div>
    THIS IS A TEST {{ double }}
    <button @click="count += 1">Increment</button>
  </div>
  <pre>{{ data }}</pre>
  <div>
    <NuxtLink to="/test/1234">test</NuxtLink>
  </div>
  <div>
    <NuxtLink to="/another_page">another page</NuxtLink>
  </div>

</template>
