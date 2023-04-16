/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  query getTestProfile($testProfileId: String) {\n    testProfile(id: $testProfileId) {\n      id\n      name\n      biomarkers {\n        code\n        name\n      }\n      description\n      sample_type\n      collection_methods\n      collection_tube_variant\n      minimum_collection_volume\n      sample_processing_time_in_days\n    }\n  }\n": types.GetTestProfileDocument,
    "\n  query getTestProfiles($page: Int, $pageSize: Int) {\n    testProfiles(page: $page, pageSize: $pageSize) {\n      data {\n        id\n        name\n      }\n    }\n  }\n": types.GetTestProfilesDocument,
    "\n  query getTest($testId: String) {\n    test(id: $testId) {\n      id\n      status\n      order_key\n      bulk_order_key\n      result_set_key\n      failure_cause\n      delivery_address {\n        name\n        line1\n        line2\n        city\n        postcode\n        country\n      }\n      inboundTrackingCode: inbound_tracking_code\n      analysis_job_key\n      subject_key\n    }\n  }\n": types.GetTestDocument,
    "\n  query getTests($page: Int, $pageSize: Int, $filter: TestsFilter) {\n    tests(page: $page, pageSize: $pageSize, filter: $filter) {\n      data {\n        id\n        bulk_order_key\n        sampleReference: sample_reference\n        organizationKey: organization_key\n        status\n      }\n    }\n  }\n": types.GetTestsDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getTestProfile($testProfileId: String) {\n    testProfile(id: $testProfileId) {\n      id\n      name\n      biomarkers {\n        code\n        name\n      }\n      description\n      sample_type\n      collection_methods\n      collection_tube_variant\n      minimum_collection_volume\n      sample_processing_time_in_days\n    }\n  }\n"): (typeof documents)["\n  query getTestProfile($testProfileId: String) {\n    testProfile(id: $testProfileId) {\n      id\n      name\n      biomarkers {\n        code\n        name\n      }\n      description\n      sample_type\n      collection_methods\n      collection_tube_variant\n      minimum_collection_volume\n      sample_processing_time_in_days\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getTestProfiles($page: Int, $pageSize: Int) {\n    testProfiles(page: $page, pageSize: $pageSize) {\n      data {\n        id\n        name\n      }\n    }\n  }\n"): (typeof documents)["\n  query getTestProfiles($page: Int, $pageSize: Int) {\n    testProfiles(page: $page, pageSize: $pageSize) {\n      data {\n        id\n        name\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getTest($testId: String) {\n    test(id: $testId) {\n      id\n      status\n      order_key\n      bulk_order_key\n      result_set_key\n      failure_cause\n      delivery_address {\n        name\n        line1\n        line2\n        city\n        postcode\n        country\n      }\n      inboundTrackingCode: inbound_tracking_code\n      analysis_job_key\n      subject_key\n    }\n  }\n"): (typeof documents)["\n  query getTest($testId: String) {\n    test(id: $testId) {\n      id\n      status\n      order_key\n      bulk_order_key\n      result_set_key\n      failure_cause\n      delivery_address {\n        name\n        line1\n        line2\n        city\n        postcode\n        country\n      }\n      inboundTrackingCode: inbound_tracking_code\n      analysis_job_key\n      subject_key\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getTests($page: Int, $pageSize: Int, $filter: TestsFilter) {\n    tests(page: $page, pageSize: $pageSize, filter: $filter) {\n      data {\n        id\n        bulk_order_key\n        sampleReference: sample_reference\n        organizationKey: organization_key\n        status\n      }\n    }\n  }\n"): (typeof documents)["\n  query getTests($page: Int, $pageSize: Int, $filter: TestsFilter) {\n    tests(page: $page, pageSize: $pageSize, filter: $filter) {\n      data {\n        id\n        bulk_order_key\n        sampleReference: sample_reference\n        organizationKey: organization_key\n        status\n      }\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;