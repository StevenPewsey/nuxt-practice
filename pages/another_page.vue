<script setup lang="ts">
  /* ref() and computed() are auto-imported */
  const count = ref(1)
  const double = computed(() => count.value * 2)

  const { data } = useAsyncData('/api/helloo', () => $fetch('/api/hello'))
</script>

<template>
  <div>
  </div>
  <pre>{{ data }}</pre>
  <NuxtLink to="/test/1234">test</NuxtLink>

</template>
