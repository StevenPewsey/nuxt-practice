<script setup lang="ts">
import { graphql } from "~/gql"

const getTestsQuery = graphql(`
  query getTests($page: Int, $pageSize: Int, $filter: TestsFilter) {
    tests(page: $page, pageSize: $pageSize, filter: $filter) {
      data {
        id
        bulk_order_key
        sampleReference: sample_reference
        organizationKey: organization_key
        status
      }
    }
  }
`)

const { data, suspense } = useGraphQL(getTestsQuery, { page: 1 })

const tests = computed(() => data.value?.tests.data ?? [])

if (process.server) {
  await suspense()
}
</script>

<template>
  <div>
    <div v-for="test in tests" :key="test.id" class="flex gap-4">
      <NuxtLink :to="`/tests/${test.id}`">{{ test.id }}</NuxtLink>
      <div>{{ test.status }}</div>
      <div>{{ test.organizationKey }}</div>
      <div>{{ test.sampleReference }}</div>
    </div>
  </div>
</template>
