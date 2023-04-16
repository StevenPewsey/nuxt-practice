<script setup lang="ts">
import { graphql } from "@/gql"

const { params } = useRoute()
const id = params.id as string

const getTestProfileQuery = graphql(`
  query getTestProfile($testProfileId: String) {
    testProfile(id: $testProfileId) {
      id
      name
      biomarkers {
        code
        name
      }
      description
      sample_type
      collection_methods
      collection_tube_variant
      minimum_collection_volume
      sample_processing_time_in_days
    }
  }
`)

const { data, suspense, isLoading } = useGraphQL(getTestProfileQuery, {
  testProfileId: id,
})

const testProfile = computed(() => data.value?.testProfile)

if (process.server) {
  await suspense()
}
</script>

<template>
  <div>
    <div v-if="isLoading">Loading...</div>
    <div v-if="testProfile">
      <div>{{ testProfile.id }}</div>
      <div>{{ testProfile.name }}</div>
      <div>{{ testProfile.description }}</div>
      <div>{{ testProfile.collection_methods }}</div>
    </div>
  </div>
</template>
