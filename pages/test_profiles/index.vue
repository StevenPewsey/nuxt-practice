<script setup lang="ts">
import { graphql } from "@/gql"

const getTestProfilesQuery = graphql(`
  query getTestProfiles($page: Int, $pageSize: Int) {
    testProfiles(page: $page, pageSize: $pageSize) {
      data {
        id
        name
      }
    }
  }
`)

const { data, isLoading } = useGraphQL(getTestProfilesQuery, {
  page: 1,
})

const testProfiles = computed(() => data.value?.testProfiles.data ?? [])
</script>

<template>
  <div>
    <div v-if="isLoading">Loading...</div>
    <div
      v-for="testProfile in testProfiles"
      :key="testProfile.id"
      class="flex gap-4"
    >
      <NuxtLink :to="`/test_profiles/${testProfile.id}`">{{
        testProfile.id
      }}</NuxtLink>
      <div>{{ testProfile.name }}</div>
    </div>
  </div>
</template>
