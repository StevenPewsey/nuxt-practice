<script setup lang="ts">
import { graphql } from "~/gql"

const { params } = useRoute()
const id = params.id as string

const getTestQuery = graphql(`
  query getTest($testId: String) {
    test(id: $testId) {
      id
      status
      order_key
      bulk_order_key
      result_set_key
      failure_cause
      delivery_address {
        name
        line1
        line2
        city
        postcode
        country
      }
      inboundTrackingCode: inbound_tracking_code
      analysis_job_key
      subject_key
    }
  }
`)

const { data, suspense } = useGraphQL(getTestQuery, {
  testId: id,
})

if (process.server) {
  await suspense()
}
</script>

<template>
  <div>
    <pre>{{ data }}</pre>
  </div>
</template>
